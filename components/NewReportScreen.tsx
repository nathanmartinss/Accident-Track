import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Biblioteca para permitir que o usuário selecione ou tire fotos
import * as Location from "expo-location"; // Biblioteca para acessar informações de localização do dispositivo
import Geocoder from "react-native-geocoding"; // Biblioteca para transformar coordenadas geográficas em endereços
import styles from "./styles/NewReportScreenStyles"; // Importa os estilos específicos para este componente

// Interface para definir os props que o componente aceita
interface NewReportScreenProps {
  onPost: (incident: {
    imageUri: string;
    location: { latitude: number; longitude: number; address: string };
    tags: string[];
  }) => void; // Função que é chamada quando um novo incidente é criado
}

const NewReportScreen: React.FC<NewReportScreenProps> = ({ onPost }) => {
  // Estados para gerenciar as informações do novo incidente
  const [image, setImage] = useState<string | null>(null); // Armazena a URI da imagem selecionada
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  ); // Armazena o objeto de localização
  const [address, setAddress] = useState<string | null>(null); // Armazena o endereço obtido através das coordenadas
  const [selectedTags, setSelectedTags] = useState<string[]>([]); // Armazena as tags selecionadas pelo usuário

  // Função para coletar a imagem do dispositivo
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Permite selecionar qualquer tipo de mídia (imagem ou vídeo)
      allowsEditing: true, // Permite editar a imagem antes de selecionar
      aspect: [4, 3], // Define a proporção da imagem para 4:3
      quality: 1, // Define a qualidade da imagem (de 0 a 1)
    });

    // Se o usuário não cancelar, armazena a URI da imagem no estado
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Função para coletar a localização e o endereço do usuário
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync(); // Solicita permissão para acessar a localização do dispositivo
    if (status !== "granted") {
      // Se a permissão não for concedida, exibe um alerta
      alert("Permission to access location was denied");
      return;
    }

    // Obtém a localização atual do usuário
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location); // Armazena a localização no estado

    if (location) {
      // Se a localização foi obtida com sucesso
      const { latitude, longitude } = location.coords;

      try {
        // Utiliza o Geocoder para buscar o endereço com base nas coordenadas
        const geoResponse = await Geocoder.from(latitude, longitude);
        if (geoResponse.results.length > 0) {
          const address = geoResponse.results[0].formatted_address; // Obtém o endereço formatado
          setAddress(address); // Armazena o endereço no estado
        } else {
          setAddress("Endereço não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar o endereço: ", error);
        setAddress("Erro ao buscar o endereço");
      }
    }
  };

  // Função para selecionar ou desmarcar uma tag
  const handleTagPress = (tag: string) => {
    if (selectedTags.includes(tag)) {
      // Se a tag já estiver selecionada, remove ela da lista
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      // Caso contrário, adiciona a tag à lista de tags selecionadas
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // useEffect para enviar os dados do novo incidente quando todos os campos estiverem preenchidos
  useEffect(() => {
    // Se houver uma imagem, localização e pelo menos uma tag selecionada, envia os dados para o MainScreen
    if (image && location && selectedTags.length > 0) {
      onPost({
        imageUri: image,
        location: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          address: address || "Endereço não disponível",
        },
        tags: selectedTags,
      });
    }
  }, [image, location, selectedTags]); // useEffect depende dos estados: image, location, e selectedTags

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Novo Incidente</Text>

      {/* Botões para coletar localização e foto */}
      <View style={styles.imageContainer}>
        {/* Botão para coletar localização */}
        <View style={styles.buttonWithLabel}>
          <TouchableOpacity style={styles.locationButton} onPress={getLocation}>
            <Image
              source={require("../../app-accidenttrack/assets/images/location-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>Localização</Text>
        </View>

        {/* Botão para coletar imagem */}
        <View style={styles.buttonWithLabel}>
          <TouchableOpacity style={styles.addPhotoButton} onPress={pickImage}>
            {image ? (
              // Se uma imagem foi selecionada, exibe a imagem
              <Image source={{ uri: image }} style={styles.icon} />
            ) : (
              // Caso contrário, exibe o ícone padrão de adicionar foto
              <Image
                source={require("../assets/images/add-photo-icon.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>Foto do Incidente</Text>
        </View>
      </View>

      {/* Tags para o usuário selecionar */}
      <Text style={styles.tagsTitle}>Tags</Text>
      <Text style={styles.tagsDescription}>
        Marque as tags que descrevam os incidentes relatados nas fotos.
      </Text>
      <ScrollView contentContainerStyle={styles.tagsContainer}>
        {/* Lista de tags disponíveis para o usuário selecionar */}
        {[
          "Incêndio",
          "Deslizamento",
          "Enchente",
          "Pessoa Ferida",
          "Rodovia Bloqueada",
          "Animal Preso",
          "Pessoa Presa",
          "Grave",
        ].map((tag) => (
          <TouchableOpacity
            key={tag} // Chave única para cada tag
            style={[
              styles.tag,
              selectedTags.includes(tag) ? { backgroundColor: "#ff6347" } : {}, // Muda a cor se a tag estiver selecionada
            ]}
            onPress={() => handleTagPress(tag)}
          >
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewReportScreen;
