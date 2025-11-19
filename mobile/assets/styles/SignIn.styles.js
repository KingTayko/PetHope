import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    // Padding para empurrar o conteúdo abaixo da área de status bar
    paddingTop: 60, 
    // O background é controlado pelo ScrollView, mantenha este transparente
    backgroundColor: "transparent",
  },

  // Removidos: header e backButton styles

  title: {
    // Ajustado para ser como na imagem: menor e no topo
    fontSize: 28, 
    fontWeight: "500", 
    marginBottom: 40, // Espaço entre o título e o primeiro input
    marginLeft: 0,
    color: "#000000",
  },

  // Estilo do container para o input de senha e o botão "Mostrar Senha"
  passwordContainer: {
    width: "100%", 
    // Remove o marginBottom do input principal e o aplica ao container
    marginBottom: 40, 
  },

  // Inputs de Email/Senha
  input: {
    width: "100%",
    // Cor dos inputs da imagem
    backgroundColor: "#A8DDE0", 
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8, // Ajustado para ser suave
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "500",
    height: 50, // Altura definida
    marginBottom: 0, // Removido, controlado pelo container
  },

  // Adicionado para dar espaço após o input de Email
  inputEmail: {
    marginBottom: 15,
  },

  // Botão Mostrar Senha
  showPasswordButton: {
    position: "absolute",
    right: 5, 
    bottom: -20, // Ajuste para que o texto fique abaixo da caixa de input, alinhado à direita
    padding: 5,
  },

  showPasswordText: {
    fontSize: 13,
    color: "#555555",
  },

  // Botão Entrar
  loginButton: {
    backgroundColor: "#FF5E54", 
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40, // Espaço após a área da senha
    width: "100%", 
  },

  loginButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  // Rodapé: Não tem conta? Cadastre-se
  footer: {
    flexDirection: "row",
    justifyContent: "flex-start", // Alinha à esquerda
    alignItems: "center",
    marginTop: 150, // Mais espaço para empurrar para o rodapé da tela
  },

  footerText: {
    fontSize: 15,
    color: "#000000",
    marginRight: 10,
  },
  
  // Botão Cadastre-se
  cadastroButtonContainer: {
    backgroundColor: "#4EC7D3",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  cadastroButtonText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
});