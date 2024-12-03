import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import styles from "./styles/NewReportScreenStyles";

const NewReportScreen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.buttonWithLabel}>
          <TouchableOpacity style={styles.locationButton} onPress={getLocation}>
            <Image
              source={require("../../app-accidenttrack/assets/images/location-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>Localização</Text>
        </View>

        <View style={styles.buttonWithLabel}>
          <TouchableOpacity style={styles.addPhotoButton} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.icon} />
            ) : (
              <Image
                source={require("../assets/images/add-photo-icon.png")}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>Foto do Incidente</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.tagsContainer}>
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
          <TouchableOpacity key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewReportScreen;
