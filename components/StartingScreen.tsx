import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Importa ícones do Ionicons
import styles from "./styles/StartingScreenStyles";

// Define o componente `StartingScreen` como um Componente Funcional do React
const StartingScreen: React.FC = () => {
  const router = useRouter(); // Inicializa o roteador para gerenciar a navegação dentro da aplicação

  // Função para realizar chamada telefônica
  const makeCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    // Container principal da tela inicial
    <View style={styles.container}>
      {/* Título principal da aplicação */}
      <Text style={styles.title}>ACCIDENT TRACK</Text>

      {/* Botão para navegar para a tela principal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/main")}
      >
        <Text style={styles.buttonText}>My Location</Text>
      </TouchableOpacity>

      {/* Seção de Links Úteis */}
      <View style={styles.linksContainer}>
        <Text style={styles.linksTitle}>Links Úteis</Text>

        {/* Defesa Civil */}
        <TouchableOpacity
          onPress={() => makeCall("199")}
          style={styles.linkItem}
        >
          <Ionicons
            name="call"
            size={24}
            color="#ff6347"
            style={styles.linkIcon}
          />
          <Text style={styles.linkText}>Defesa Civil - 199</Text>
        </TouchableOpacity>

        {/* SAMU */}
        <TouchableOpacity
          onPress={() => makeCall("192")}
          style={styles.linkItem}
        >
          <Ionicons
            name="call"
            size={24}
            color="#ff6347"
            style={styles.linkIcon}
          />
          <Text style={styles.linkText}>SAMU - 192</Text>
        </TouchableOpacity>

        {/* Bombeiros */}
        <TouchableOpacity
          onPress={() => makeCall("193")}
          style={styles.linkItem}
        >
          <Ionicons
            name="call"
            size={24}
            color="#ff6347"
            style={styles.linkIcon}
          />
          <Text style={styles.linkText}>Bombeiros - 193</Text>
        </TouchableOpacity>

        {/* IBAMA */}
        <TouchableOpacity
          onPress={() => makeCall("180")}
          style={styles.linkItem}
        >
          <Ionicons
            name="call"
            size={24}
            color="#ff6347"
            style={styles.linkIcon}
          />
          <Text style={styles.linkText}>
            IBAMA - Denúncias Ambientais - 180
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exporta o componente para que possa ser utilizado em outras partes da aplicação
export default StartingScreen;
