import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

// Cores
const COLORS = {
    primaryRed: '#FF574B',     // Vermelho-alaranjado (Cabeçalho e Botão Cadastrar)
    primaryCyan: '#7FD1D6',    // Azul-claro (Inputs e Botão Fazer Login)
    textDark: '#333',         // Texto escuro
    textLight: '#fff',        // Texto claro
};

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', // Centraliza verticalmente o formulário na tela
  },
  
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    // Estilo que simula a caixa azul-claro da imagem
    backgroundColor: '#A8DDEB', // Cor azul-claro/turquesa
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },

  backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        backgroundColor: COLORS.primaryCyan, // Seta azul
        borderRadius: 20,
        padding: 10,
        zIndex: 10,
    },

     header: {
        width: '100%',
        height: width * 0.010, 
        overflow: 'hidden', 
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
  
  // --- Estilos para Endereço (lado a lado) ---
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10, // Adiciona espaço entre os campos (disponível em RN recente ou Expo)
  },
  halfInput: {
    flex: 1, // Cada campo ocupa metade do espaço disponível
  },
  
  // --- Estilos para Botão ---
  confirmButton: {
    backgroundColor: '#FF5733', // Laranja/Vermelho (similar ao Sair da tela anterior)
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40, // Adiciona um bom espaçamento do último campo
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});