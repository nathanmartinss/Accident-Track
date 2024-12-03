import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import ReportCard from "../../components/ReportCard";
import styles from "../../components/styles/MainScreenStyles";
import { useRouter } from "expo-router";

const MainScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ACCIDENT TRACK</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ReportCard imageSource={require("../../assets/images/fire1.jpg")} />
        <ReportCard imageSource={require("../../assets/images/fire2.jpg")} />
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/new-report")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
