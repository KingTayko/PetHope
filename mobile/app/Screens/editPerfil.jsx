import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// Certifique-se de instalar: expo install react-native-safe-area-context
import { SafeAreaView } from 'react-native-safe-area-context';

// **ATENÇÃO:** O arquivo de estilos deve ser alterado (como na resposta anterior)
// para remover 'position: absolute', 'top', 'left', 'zIndex' do backButton.
import { styles } from "../../assets/styles/EditPerfil.styles"

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const EditPerfilScreen = () => {
    const router = useRouter();


    // Estados para simular a entrada de dados
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* *** MUDANÇA AQUI: Botão de voltar movido para o fluxo de conteúdo, 
                antes do primeiro fieldContainer, e o View de 'header' foi removido. 
                */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.replace("../(tabs)/perfil")}
                >
                    <Ionicons name="arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                {/* *** FIM DA MUDANÇA NO POSICIONAMENTO DO BOTÃO *** */}

                {/* Campo Nome */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        placeholder="Nome completo"
                        placeholderTextColor="#ffffff"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}

                    />
                </View>

                {/* Campo Email */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholder="email"
                        placeholderTextColor="#ffffff"
                    />
                </View>

                {/* Campo Telefone */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Telefone</Text>
                    <TextInput
                        style={styles.input}
                        value={telefone}
                        onChangeText={setTelefone}
                        keyboardType="phone-pad"
                        placeholder="telefone"
                        placeholderTextColor="#ffffff"
                    />
                </View>

                {/* Seção Endereço (Estado e Cidade lado a lado) */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Endereço</Text>
                    <View style={styles.addressContainer}>
                        {/* Campo Estado */}
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            value={estado}
                            onChangeText={setEstado}
                            placeholder="Estado"
                            placeholderTextColor="#ffffff"
                        />
                        {/* Campo Cidade */}
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            value={cidade}
                            onChangeText={setCidade}
                            placeholder="Cidade"
                            placeholderTextColor="#ffffff"
                        />
                    </View>
                </View>

                {/* Botão de Confirmação */}
                <TouchableOpacity
                    style={styles.confirmButton}
                    activeOpacity={0.8}
                    onPress={() => console.log('Alterações confirmadas!')}
                >
                    <Text style={styles.confirmButtonText}>Confirmar alterações</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default EditPerfilScreen;