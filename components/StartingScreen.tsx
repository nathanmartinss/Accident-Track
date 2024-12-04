import React from "react";
import { View, Text, TouchableOpacity } from "react-native"; // Importa componentes do React Native para construir a interface
import { useRouter } from "expo-router"; // Importa a função `useRouter` do `expo-router` para navegação
import styles from "./styles/StartingScreenStyles"; // Importa os estilos personalizados da tela de início

// Define o componente `StartingScreen` como um Componente Funcional do React
const StartingScreen: React.FC = () => {
  const router = useRouter(); // Inicializa o roteador para gerenciar a navegação dentro da aplicação

  return (
    // Container principal da tela inicial
    <View style={styles.container}>
      {/* Título principal da aplicação */}
      <Text style={styles.title}>ACCIDENT TRACK</Text>

      {/* Botão para navegar para a tela principal */}
      <TouchableOpacity
        style={styles.button} // Estilo do botão para torná-lo visualmente agradável
        onPress={() => router.push("/main")} // Ao pressionar o botão, navega para a rota `/main`
      >
        <Text style={styles.buttonText}>My Location</Text>
      </TouchableOpacity>
    </View>
  );
};

// Exporta o componente para que possa ser utilizado em outras partes da aplicação
export default StartingScreen;
