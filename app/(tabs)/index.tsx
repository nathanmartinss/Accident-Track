import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import * as Font from "expo-font";
import StartingScreen from "../../components/StartingScreen";

const Index: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Jomhuria-Regular": require("../../assets/fonts/Jomhuria-Regular.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading font: ", error);
      }
    };

    loadFonts();
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
