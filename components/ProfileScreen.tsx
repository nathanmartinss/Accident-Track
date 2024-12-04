import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import ReportCard from "../components/ReportCard";
import { Ionicons } from "@expo/vector-icons"; // Importa ícones do Ionicons
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { signOut } from "firebase/auth"; // Importa função para deslogar do Firebase
import { db, auth } from "../firebaseConfig";
import { ProfileScreenStyles as styles } from "../components/styles/ProfileScreenStyles";
import { useRouter } from "expo-router"; // Importa o roteador para navegar

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
  resolved?: boolean; // Adiciona status de resolvido
}

const ProfileScreen: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const user = auth.currentUser;
  const router = useRouter(); // Inicializa o roteador

  // Função para buscar incidentes do usuário logado no Firestore
  const fetchUserIncidents = async () => {
    if (!user) {
      Alert.alert("Erro", "Você precisa estar logado para ver suas postagens.");
      return;
    }

    try {
      const q = query(
        collection(db, "incidents"),
        where("userId", "==", user.uid)
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

  useEffect(() => {
    fetchUserIncidents();
  }, []);

  // Função para marcar incidente como resolvido
  const handleResolveIncident = async (
    incidentId: string,
    resolved: boolean
  ) => {
    try {
      const incidentRef = doc(db, "incidents", incidentId);
      await updateDoc(incidentRef, { resolved: !resolved });
      fetchUserIncidents(); // Atualiza a lista de incidentes após marcar como resolvido
    } catch (error) {
      console.error("Erro ao atualizar incidente: ", error);
    }
  };

  // Função para deslogar o usuário
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Desconecta o usuário atual do Firebase
      router.push("/"); // Redireciona para a tela inicial após deslogar
    } catch (error) {
      console.error("Erro ao deslogar: ", error);
      Alert.alert("Erro", "Não foi possível desconectar. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho com botão de voltar e botão de desconectar */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push("/main")}
        >
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ACCIDENT TRACK</Text>
        <TouchableOpacity style={styles.iconButton} onPress={handleSignOut}>
          <Ionicons name="log-out-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Título da página */}
      <Text style={styles.screenTitle}>MINHAS POSTAGENS</Text>

      {/* Conteúdo da página */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {incidents.map((incident) => (
          <View
            key={incident.id}
            style={[
              styles.reportCard,
              incident.resolved ? styles.resolved : styles.unresolved,
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
              resolved={incident.resolved} // Passa a informação de resolvido para o ReportCard
            />
            <TouchableOpacity
              style={[
                styles.resolveButton,
                incident.resolved
                  ? styles.resolveButtonUnresolved
                  : styles.resolveButtonResolved,
              ]}
              onPress={() =>
                handleResolveIncident(incident.id!, incident.resolved || false)
              }
            >
              <Text style={styles.resolveButtonText}>
                {incident.resolved
                  ? "Marcar como Não Resolvido"
                  : "Marcar como Resolvido"}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
