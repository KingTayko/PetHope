import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Cores
const COLORS = {
    primaryRed: '#FF574B',     // Vermelho-alaranjado (Cabeçalho e Botão Cadastrar)
    primaryCyan: '#7FD1D6',    // Azul-claro (Inputs e Botão Fazer Login)
    textDark: '#333',         // Texto escuro
    textLight: '#fff',        // Texto claro
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.textLight,
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    // --- 1. Estilos de Cabeçalho ---
    header: {
        width: '100%',
        // Altura um pouco maior para acomodar a curva
        height: width * 0.7, 
        backgroundColor: COLORS.primaryRed,
        overflow: 'hidden', 
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        backgroundColor: COLORS.primaryCyan, // Fundo da seta (Azul-claro)
        borderRadius: 20,
        padding: 10,
        zIndex: 10,
    },

    // --- 2. Título ---
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.textDark,
        marginTop: 40, // Espaço após o cabeçalho
        marginBottom: 20,
        alignSelf: 'flex-start',
        paddingLeft: 20, 
    },

    // --- 3. Estilos de Input ---
    // Container para agrupar inputs lado a lado (Estado e Cidade)
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 15,
    },
    // Estilo para o input de largura total
    inputFull: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.primaryCyan,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        color: COLORS.textLight,
    },
    // Estilo para inputs de largura dividida (lado a lado)
    inputHalf: {
        width: '48%', 
        height: 50,
        backgroundColor: COLORS.primaryCyan,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: COLORS.textLight,
        // O margin bottom é controlado pelo rowContainer
    },

    // --- 4. Termos de Serviço e Mostrar Senha ---
    legalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 5,
        marginBottom: 30, // Espaço antes do botão Cadastrar
        paddingHorizontal: 5, // Pequeno padding para alinhar com os inputs
    },
    legalText: {
        color: COLORS.textDark,
        fontSize: 12,
    },
    showPasswordText: {
        color: COLORS.textDark,
        fontSize: 12,
    },

    // --- 5. Botões ---
    cadastroButton: {
        width: '100%',
        height: 55,
        backgroundColor: COLORS.primaryRed, // Vermelho
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    cadastroButtonText: {
        color: COLORS.textLight,
        fontSize: 18,
        fontWeight: 'bold',
    },
    
    // Rodapé "Já tem conta? Fazer Login"
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20, // Espaço inferior
    },
    footerText: {
        fontSize: 14,
        color: COLORS.textDark,
        marginRight: 5,
    },
    loginButtonContainer: {
        backgroundColor: COLORS.primaryCyan, // Azul-claro
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    loginButtonText: {
        color: COLORS.textLight,
        fontSize: 14,
        fontWeight: 'bold',
    },
});