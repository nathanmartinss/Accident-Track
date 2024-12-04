import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../components/styles/ReportCardStyles"; // Importa os estilos do componente ReportCard

// Interface que define os tipos dos props que o componente aceita
interface ReportCardProps {
  imageSource: any; // Fonte da imagem (pode ser um URI ou um arquivo local)
  timestamp?: string; // Data e hora do incidente (opcional)
  location?: {
    // Objeto de localização contendo latitude e longitude (opcional)
    latitude: number;
    longitude: number;
  };
  tags?: string[]; // Lista de tags para categorizar o incidente (opcional)
}

// Componente funcional que recebe props do tipo ReportCardProps
const ReportCard: React.FC<ReportCardProps> = ({
  imageSource, // Imagem do incidente
  timestamp, // Data e hora do incidente
  location, // Localização do incidente
  tags, // Tags descritivas do incidente
}) => {
  return (
    // Container principal do cartão do relatório
    <View style={styles.card}>
      {/* Imagem do incidente */}
      <Image source={imageSource} style={styles.image} />
      {/* Container das informações adicionais */}
      <View style={styles.infoContainer}>
        {/* Exibe a data e hora, se fornecido */}
        {timestamp && (
          <Text style={styles.detailsText}>Data e Hora: {timestamp}</Text>
        )}
        {/* Exibe a localização, se fornecida */}
        {location && (
          <Text style={styles.detailsText}>
            Localização: Latitude {location.latitude}, Longitude{" "}
            {location.longitude}
          </Text>
        )}
        {/* Exibe as tags, se fornecidas */}
        {tags && tags.length > 0 && (
          <Text style={styles.detailsText}>Tags: {tags.join(", ")}</Text>
        )}
      </View>
    </View>
  );
};

export default ReportCard;
