import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import ReportCard from "../components/ReportCard";
import NewReportScreen from "../components/NewReportScreen";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  MainScreenStyles as styles,
  modalStyles,
} from "../components/styles/MainScreenStyles";

interface Incident {
  id?: string;
  imageUri: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  tags: string[];
  timestamp?: {
    seconds: number;
    nanoseconds: number;
  };
}

const MainScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [newIncident, setNewIncident] = useState<Incident | null>(null);
  const [refreshing, setRefreshing] = useState(false); // Estado para controlar a atualização da página
  const [loading, setLoading] = useState(true); // Estado para controlar o carregamento inicial dos dados

  // Função para buscar incidentes no Firestore, ordenados pela data
  const fetchIncidents = async () => {
    try {
      setLoading(true); // Ativa o estado de carregamento enquanto busca os dados

      // Cria uma consulta para a coleção "incidents" e ordena pela propriedade "timestamp" em ordem descendente
      const q = query(
        collection(db, "incidents"),
        orderBy("timestamp", "desc")
      );

      // Obtém os documentos a partir da consulta
      const querySnapshot = await getDocs(q);
      const incidentsData: Incident[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Incident[];

      // Atualiza o estado com os dados buscados
      setIncidents(incidentsData);
    } catch (error) {
      console.error("Erro ao buscar incidentes: ", error);
    } finally {
      setLoading(false); // Desativa o estado de carregamento
    }
  };

  // Função de atualização para o "pull to refresh"
  const onRefresh = async () => {
    setRefreshing(true); // Ativa o indicador de atualização
    await fetchIncidents(); // Busca novamente os incidentes
    setRefreshing(false); // Desativa o indicador de atualização
  };

  useEffect(() => {
    fetchIncidents();
  }, []); // Executa a função ao montar o componente

  // Função para postar o novo incidente
  const handlePostIncident = async () => {
    if (!newIncident) {
      alert("Por favor, preencha todos os dados antes de postar.");
      return;
    }

    try {
      await addDoc(collection(db, "incidents"), {
        ...newIncident,
        timestamp: serverTimestamp(),
      });
      fetchIncidents(); // Recarrega os incidentes para incluir o novo no feed
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao postar incidente: ", error);
    }
  };

  // Função para coletar dados do incidente
  const handleCollectIncidentData = (incidentData: Incident) => {
    setNewIncident(incidentData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ACCIDENT TRACK</Text>

      {loading ? (
        <ActivityIndicator size="large" color="red" style={{ marginTop: 20 }} />
      ) : (
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {incidents.map((incident) => (
            <ReportCard
              key={incident.id}
              imageSource={{ uri: incident.imageUri }}
              timestamp={
                incident.timestamp
                  ? new Date(incident.timestamp.seconds * 1000).toLocaleString()
                  : "Sem data"
              }
              location={incident.location}
              tags={incident.tags}
            />
          ))}
        </ScrollView>
      )}

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={modalStyles.modalContainer}
        >
          <View style={modalStyles.modalContent}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <NewReportScreen onPost={handleCollectIncidentData} />
              <View style={modalStyles.buttonContainer}>
                <TouchableOpacity
                  style={modalStyles.cancelButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={modalStyles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={modalStyles.postButton}
                  onPress={handlePostIncident}
                >
                  <Text style={modalStyles.buttonText}>Postar</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

export default MainScreen;
