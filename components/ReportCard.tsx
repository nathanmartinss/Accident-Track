import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons"; // Importa os ícones do Expo para usar no componente
import styles from "../components/styles/ReportCardStyles"; // Importa os estilos personalizados do ReportCard

// Define os tipos dos props que o componente aceita
interface ReportCardProps {
  imageSource: any; // Fonte da imagem (pode ser uma URI ou um arquivo local)
  timestamp?: string; // Data e hora do incidente (opcional)
  location?: {
    // Objeto de localização contendo latitude, longitude e endereço (opcional)
    latitude: number;
    longitude: number;
    address?: string; // Endereço completo do incidente (opcional)
  };
  tags?: string[]; // Lista de tags para categorizar o incidente (opcional)
}

// Componente funcional ReportCard que aceita os props definidos na interface
const ReportCard: React.FC<ReportCardProps> = ({
  imageSource, // Fonte da imagem do incidente
  timestamp, // Data e hora do incidente
  location, // Localização do incidente
  tags, // Tags associadas ao incidente
}) => {
  return (
    <View style={styles.card}>
      {/* Exibe a imagem do incidente */}
      <Image source={imageSource} style={styles.image} />

      {/* Container para as informações do incidente */}
      <View style={styles.infoContainer}>
        {/* Exibe a data e hora do incidente, se estiver disponível */}
        {timestamp && (
          <View style={styles.row}>
            {/* Ícone de relógio para indicar a data e hora */}
            <MaterialIcons name="access-time" size={20} color="#444" />
            {/* Texto com a data e hora do incidente */}
            <Text style={styles.detailsText}>Data e Hora: {timestamp}</Text>
          </View>
        )}

        {/* Exibe a localização do incidente, se estiver disponível */}
        {location && (
          <View style={styles.row}>
            {/* Ícone de localização para indicar o endereço ou coordenadas */}
            <Entypo name="location-pin" size={20} color="#444" />
            {/* Texto com o endereço e coordenadas */}
            <Text style={styles.detailsText}>
              {location.address ? (
                <>
                  {/* Se o endereço estiver disponível, exibe o endereço e as coordenadas */}
                  Endereço: {location.address}
                  {"\n"}Coordenadas: Latitude {location.latitude}, Longitude{" "}
                  {location.longitude}
                </>
              ) : (
                <>
                  {/* Se o endereço não estiver disponível, exibe apenas as coordenadas */}
                  Coordenadas: Latitude {location.latitude}, Longitude{" "}
                  {location.longitude}
                </>
              )}
            </Text>
          </View>
        )}

        {/* Exibe as tags do incidente, se houverem */}
        {tags && tags.length > 0 && (
          <View style={styles.row}>
            {/* Ícone de tag para indicar as categorias do incidente */}
            <FontAwesome name="tags" size={20} color="#444" />
            {/* Texto com as tags do incidente, separadas por vírgulas */}
            <Text style={styles.detailsText}>Tags: {tags.join(", ")}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

// Exporta o componente para ser utilizado em outras partes da aplicação
export default ReportCard;
