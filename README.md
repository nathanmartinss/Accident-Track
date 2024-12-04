# 🚨 Accident Track: Aplicativo de Monitoramento de Incidentes

**Bem-vindo ao Accident Track!** Este aplicativo foi desenvolvido para ajudar usuários a reportar, rastrear e visualizar incidentes, como **queimadas, enchentes** e outros **desastres naturais**. A aplicação permite que o usuário publique imagens, registre a localização e selecione tags relevantes para os incidentes, fornecendo uma ferramenta poderosa para alertar e compartilhar informações importantes sobre desastres.

## 📝 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Instalação e Execução](#-instalação-e-execução)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Equipe de Desenvolvimento](#-equipe-de-desenvolvimento)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 📖 Sobre o Projeto

O **Accident Track** é um aplicativo que visa facilitar o registro e compartilhamento de informações sobre incidentes em uma região. Este projeto tem como objetivo promover a **segurança pública**, permitindo que os usuários registrem **fotos**, **localização**, **data** e **hora** dos incidentes, bem como **tags** específicas para identificar melhor o tipo de desastre.

Este aplicativo é ideal para ser usado por:
- Comunidades que enfrentam problemas recorrentes de desastres naturais.
- Autoridades e serviços de emergência para monitoramento de áreas afetadas.
- Pessoas interessadas em contribuir para a conscientização pública sobre acidentes locais.

## ✨ Funcionalidades

- **Cadastro de Incidentes**: Os usuários podem postar fotos e informações sobre incidentes.
- **Geolocalização**: Utilização de geolocalização para registrar o local exato do incidente.
- **Uso de Tags**: Os usuários podem selecionar **tags predefinidas** (como queimadas, enchentes, etc.) para categorizar o tipo de incidente.
- **Visualização de Relatórios**: Todos os incidentes registrados são exibidos em um formato de cartão, mostrando a imagem, localização, data e tags associadas.

## 🚀 Instalação e Execução

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Passos para Instalação

1. **Clone o repositório**

   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Navegue até o diretório do projeto**

   ```sh
   cd app-accidenttrack
   ```

3. **Instale as dependências**

   ```sh
   npm install
   ```

4. **Configurar API Key do Google Maps**

   - Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Maps:

   ```env
   GOOGLE_API_KEY=SUA_CHAVE_DE_API_AQUI
   ```

5. **Executar a aplicação**

   ```sh
   expo start
   ```

   Isso abrirá uma página no navegador. Você pode escanear o QR code com seu celular ou rodar o aplicativo no emulador Android/iOS.

## 🛠 Tecnologias Utilizadas

- **React Native & Expo**: Framework principal para construir a aplicação.
- **Firebase Firestore**: Banco de dados em tempo real para armazenar os dados dos incidentes.
- **Google Maps API**: Para obter o endereço através das coordenadas de localização.
- **React Navigation & Expo Router**: Navegação entre as telas da aplicação.
- **Figma**: Utilizado para prototipagem e design da interface do usuário.

## 📁 Estrutura do Projeto

A estrutura principal do projeto é a seguinte:

```bash
app-accidenttrack/
├── app/(tabs)               # Página principal e roteamentos
│   ├── index.tsx            # Arquivo principal da aplicação
├── assets/                  # Arquivos estáticos (imagens, fontes)
├── components/              # Componentes reutilizáveis
│   ├── ReportCard.tsx       # Componente para exibir informações dos incidentes
│   ├── NewReportScreen.tsx  # Tela para adicionar um novo incidente
│   └── StartingScreen.tsx   # Tela inicial da aplicação
├── styles/                  # Arquivos de estilo dos componentes
├── firebaseConfig.ts        # Configuração do Firebase
└── package.json             # Arquivo de configuração do npm
```

## 👥 Equipe de Desenvolvimento

Este projeto foi desenvolvido com a colaboração de uma equipe talentosa e dedicada, onde cada membro teve um papel fundamental:

- **Documentação**:
  - Vinicius
  - Larissa
  - Melissa

- **Design no Figma**:
  - Caue

- **Backend**:
  - Ronaldo

- **Frontend**:
  - Nathan

Cada pessoa contribuiu para o sucesso deste projeto e agradecemos por todo o esforço e dedicação durante o desenvolvimento.

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você tem sugestões de melhorias ou deseja adicionar novas funcionalidades, fique à vontade para enviar um **Pull Request** ou abrir uma **issue** no GitHub.

### Como Contribuir

1. **Faça um fork** do projeto.
2. **Crie uma branch** para a nova funcionalidade:

   ```sh
   git checkout -b feature/nova-funcionalidade
   ```

3. **Commit suas alterações**:

   ```sh
   git commit -m "Adiciona nova funcionalidade"
   ```

4. **Push para a branch**:

   ```sh
   git push origin feature/nova-funcionalidade
   ```

5. **Abra um Pull Request**.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

Sinta-se à vontade para contribuir e melhorar este projeto! Esperamos que o **Accident Track** possa ser útil para você e para a sua comunidade, ajudando a aumentar a segurança e a conscientização sobre desastres naturais e outros incidentes.

**Accident Track Team** 🚀
