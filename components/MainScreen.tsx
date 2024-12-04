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
} from "react-native";
import ReportCard from "../components/ReportCard";
import NewReportScreen from "../components/NewReportScreen";
import { Ionicons } from "@expo/vector-icons";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebaseConfig";
import {
  MainScreenStyles as styles,
  modalStyles,
} from "../components/styles/MainScreenStyles";
import { useRouter } from "expo-router";

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
  userId?: string;
  resolved?: boolean;
  userName?: string; // Adicionado para exibir o nome do autor
}

const MainScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [newIncident, setNewIncident] = useState<Incident | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState(auth.currentUser);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Função para buscar incidentes no Firestore
  const fetchIncidents = async () => {
    try {
      const q = query(
        collection(db, "incidents"),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const incidentsData: Incident[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Incident[];
      setIncidents(incidentsData);
    } catch (error) {
      console.error("Erro ao buscar incidentes: ", error);
    }
  };

  // Função de atualização para o "pull to refresh"
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchIncidents();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  // Função para postar o novo incidente
  const handlePostIncident = async () => {
    if (!newIncident) {
      alert("Por favor, preencha todos os dados antes de postar.");
      return;
    }

    if (!user) {
      alert("Por favor, faça login antes de postar um incidente.");
      return;
    }

    try {
      await addDoc(collection(db, "incidents"), {
        ...newIncident,
        userId: user.uid,
        userName: user.displayName, // Adiciona o nome do usuário ao incidente
        timestamp: serverTimestamp(),
      });
      fetchIncidents();
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
      {/* Cabeçalho com título e ícones de navegação */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push("/")}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ACCIDENT TRACK</Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            if (user) {
              router.push("/profile");
            } else {
              alert("Por favor, faça login primeiro.");
            }
          }}
        >
          <Ionicons name="person-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* ScrollView que exibe os incidentes e permite atualização com "puxar para baixo" */}
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {incidents.map((incident) => (
          <View
            key={incident.id}
            style={[
              styles.reportCard,
              incident.resolved ? styles.resolvedCard : styles.unresolvedCard,
            ]}
          >
            <ReportCard
              imageSource={{ uri: incident.imageUri }}
              timestamp={
                incident.timestamp
                  ? new Date(incident.timestamp.seconds * 1000).toLocaleString()
                  : "Sem data"
              }
              location={incident.location}
              tags={incident.tags}
              userName={incident.userName} // Adiciona o nome do autor ao card
              resolved={incident.resolved} // Passa o status de resolução para o card
            />
          </View>
        ))}
      </ScrollView>

      {/* Botão flutuante para abrir o modal de adicionar um novo incidente */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          if (user) {
            setModalVisible(true);
          } else {
            alert("Por favor, faça login primeiro.");
          }
        }}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Modal para adicionar um novo incidente */}
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
