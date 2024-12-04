import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import ReportCard from "../components/ReportCard"; // Importa o componente de card de relatório para exibir os incidentes
import NewReportScreen from "../components/NewReportScreen"; // Importa o componente que contém o formulário para adicionar novos incidentes
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore"; // Funções do Firestore para operações de banco de dados
import { db } from "../firebaseConfig"; // Importa a configuração do Firebase
import {
  MainScreenStyles as styles,
  modalStyles,
} from "../components/styles/MainScreenStyles"; // Importa os estilos personalizados da tela

// Define o tipo Incident, representando a estrutura dos dados dos incidentes
interface Incident {
  id?: string; // 'id' é opcional, pois será gerado automaticamente pelo Firestore
  imageUri: string; // Caminho ou URL da imagem do incidente
  location: {
    // Informações de localização do incidente
    latitude: number;
    longitude: number;
    address: string; // Endereço associado à localização
  };
  tags: string[]; // Lista de tags selecionadas para categorizar o incidente
  timestamp?: {
    // Data e hora de quando o incidente foi reportado
    seconds: number;
    nanoseconds: number;
  };
}

const MainScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal de adicionar um novo incidente
  const [incidents, setIncidents] = useState<Incident[]>([]); // Estado para armazenar a lista de incidentes
  const [newIncident, setNewIncident] = useState<Incident | null>(null); // Estado para armazenar o novo incidente que está sendo adicionado

  // Função para buscar os incidentes armazenados no Firestore
  const fetchIncidents = async () => {
    try {
      // Pega os documentos da coleção 'incidents' no Firestore
      const querySnapshot = await getDocs(collection(db, "incidents"));
      // Mapeia os documentos para o formato Incident
      const incidentsData: Incident[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Incident[];
      // Atualiza o estado incidents com os dados buscados
      setIncidents(incidentsData);
    } catch (error) {
      console.error("Erro ao buscar incidentes: ", error); // Loga o erro, se houver problemas ao buscar os incidentes
    }
  };

  // useEffect para buscar os incidentes quando o componente é montado
  useEffect(() => {
    fetchIncidents(); // Chama fetchIncidents ao carregar a tela
  }, []);

  // Função para postar um novo incidente no Firestore
  const handlePostIncident = async () => {
    if (!newIncident) {
      // Se newIncident estiver vazio, exibe uma mensagem de alerta
      alert("Por favor, preencha todos os dados antes de postar.");
      return;
    }

    try {
      // Adiciona o novo incidente à coleção 'incidents' no Firestore
      await addDoc(collection(db, "incidents"), {
        ...newIncident,
        timestamp: serverTimestamp(), // Adiciona um timestamp atual para registrar o momento do envio
      });

      // Após postar, recarrega a lista de incidentes para incluir o novo
      fetchIncidents();

      // Fecha o modal
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao postar incidente: ", error); // Loga o erro, se houver problemas ao postar o incidente
    }
  };

  // Função para coletar os dados do incidente do componente NewReportScreen e armazená-los em newIncident
  const handleCollectIncidentData = (incidentData: Incident) => {
    setNewIncident(incidentData); // Atualiza o estado newIncident com os dados coletados
  };

  return (
    <View style={styles.container}>
      {/* Título da tela principal */}
      <Text style={styles.header}>ACCIDENT TRACK</Text>

      {/* ScrollView para exibir os cartões de relatório de incidentes */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Cartões de Relatórios do Firebase */}
        {incidents.map((incident) => (
          <ReportCard
            key={incident.id} // Chave única para cada cartão de relatório
            imageSource={{ uri: incident.imageUri }} // Fonte da imagem do relatório
            timestamp={
              incident.timestamp
                ? new Date(incident.timestamp.seconds * 1000).toLocaleString() // Formata o timestamp em uma data legível
                : "Sem data"
            }
            location={incident.location} // Exibe as informações de localização
            tags={incident.tags} // Exibe as tags associadas ao incidente
          />
        ))}
      </ScrollView>

      {/* Botão flutuante para abrir o modal e adicionar um novo incidente */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {/* Modal para adicionar um novo incidente */}
      <Modal
        animationType="slide" // Animação do modal
        transparent={true} // Modal transparente para manter a visibilidade da tela principal ao fundo
        visible={modalVisible} // Controla a visibilidade do modal com base no estado modalVisible
        onRequestClose={() => setModalVisible(false)} // Fecha o modal quando uma ação de fechamento é requisitada
      >
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalContent}>
            {/* Componente NewReportScreen para coletar os dados do novo incidente */}
            <NewReportScreen onPost={handleCollectIncidentData} />
            <View style={modalStyles.buttonContainer}>
              {/* Botão para cancelar e fechar o modal */}
              <TouchableOpacity
                style={modalStyles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={modalStyles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              {/* Botão para postar o novo incidente */}
              <TouchableOpacity
                style={modalStyles.postButton}
                onPress={handlePostIncident}
              >
                <Text style={modalStyles.buttonText}>Postar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MainScreen;
