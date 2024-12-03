import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles/StartingScreenStyles";

const StartingScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACCIDENT TRACK</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/main")}
      >
        <Text style={styles.buttonText}>My Location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartingScreen;
