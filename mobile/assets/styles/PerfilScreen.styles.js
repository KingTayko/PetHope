import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  
  // --- HEADER (Perfil) ---
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#40A9C2', // Cor Turquesa do ícone
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 15,
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  typeText: {
    fontSize: 14,
    color: '#888',
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee', // Fundo cinza claro para o lápis
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 20,
  },

  // --- SEÇÕES DE DADOS ---
  dataSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  dataLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  dataValue: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    // Linha de separação tênue, se necessário, mas a imagem usa apenas espaçamento
  },

  // --- BOTÕES DE ANIMAIS ---
  animalButton: {
    backgroundColor: '#40A9C2', // Turquesa
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  animalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // --- BOTÃO SAIR ---
  spacer: {
    // Empurra o botão Sair para baixo, se o conteúdo for pequeno. 
    // Em telas grandes, o flex: 1 do container pode não ser suficiente sozinho.
    flex: 1, 
    minHeight: 50, 
  },
  logoutButton: {
    backgroundColor: '#FF5733', // Laranja/Vermelho
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40, // Espaço inferior
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});