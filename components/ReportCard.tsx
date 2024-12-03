import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from "./styles/ReportCardStyles";

interface ReportCardProps {
  imageSource: ImageSourcePropType;
}

const ReportCard: React.FC<ReportCardProps> = ({ imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Rua Teste teste</Text>
        <View style={styles.row}>
          <Text style={styles.text}>data</Text>
          <Text style={styles.text}>hora</Text>
        </View>
      </View>
    </View>
  );
};

export default ReportCard;
