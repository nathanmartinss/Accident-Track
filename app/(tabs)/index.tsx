import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import * as Font from "expo-font";
import Geocoder from "react-native-geocoding";
import StartingScreen from "../../components/StartingScreen";

const Index: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Carregar as fontes
        await Font.loadAsync({
          "Jomhuria-Regular": require("../../assets/fonts/Jomhuria-Regular.ttf"),
          "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
        });

        // Inicializar o Geocoder com a chave de API do Google Maps
        Geocoder.init("AIzaSyDYIdbxYW52Vra88Qk8hZPJqgri6kGAxhM");

        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading resources: ", error);
      }
    };

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <StartingScreen />;
};

export default Index;
