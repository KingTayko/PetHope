import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
// Certifique-se de instalar: expo install react-native-safe-area-context
import { SafeAreaView } from 'react-native-safe-area-context'; 
// Use Feather ou outro conjunto de ícones para o perfil e edição
import { Feather, FontAwesome5 } from '@expo/vector-icons'; 

import {styles} from "../../assets/styles/PerfilScreen.styles"
import { useClerk, useUser } from '@clerk/clerk-expo';
import { router, useRouter } from 'expo-router';

const UserProfileScreen = () => {
    const router = useRouter();


    //logica logOut
    const {signOut} = useClerk();
    const { user } = useUser();

    const handleSignOut = (async) => {
        Alert.alert("Deslogar-se", "Tem certeza que quer deslogar?",[
            {text:"Cancel", style:"cancel"},
            {text:"Deslogar-se", style:"destructive", onPress:signOut}
        ])
    }


    //Teste de logica para buscar e mostrar os dados do usuario




  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container}>
        
        {/* Seção de Cabeçalho do Perfil (Foto, Nome e Edição) */}
        <View style={styles.header}>
          {/* Imagem/Ícone de Perfil */}
          <View style={styles.profileIconContainer}>
            {/* Ícone de Usuário (Fonte FontAwesome5) */}
            <FontAwesome5 name="user-alt" size={60} color="#fff" />
          </View>

          {/* Dados do Usuário */}
          <View style={styles.profileInfo}>
            <Text style={styles.nameText}>Nome completo</Text>
            <Text style={styles.typeText}>Tipo de cadastro</Text>
          </View>
          
          {/* Botão de Edição */}
          <TouchableOpacity style={styles.editButton} activeOpacity={0.7} onPress={() => router.push("../Screens/editPerfil")}>
             {/* Ícone de Lápis (Fonte Feather) */}
            <Feather name="edit-3" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Linha Divisória */}
        <View style={styles.divider} />

        {/* Seção Meus dados */}
        <View style={styles.dataSection}>
          <Text style={styles.sectionTitle}>Meus dados:</Text>
          
          <Text style={styles.dataLabel}>Email</Text>
          <Text style={styles.dataValue}>usuario@email.com</Text>

          <Text style={styles.dataLabel}>Telefone</Text>
          <Text style={styles.dataValue}>(00) 00000-0000</Text>

          <Text style={styles.dataLabel}>Cidade</Text>
          <Text style={styles.dataValue}>Cidade - Estado</Text>
        </View>

        {/* Seção Informações sobre meus animais */}
        <View style={styles.dataSection}>
          <Text style={styles.sectionTitle}>Informações sobre meus animais</Text>
          
          {/* Botão Meus animais */}
          <TouchableOpacity style={styles.animalButton} activeOpacity={0.8}>
            <Text style={styles.animalButtonText}>Meus animais</Text>
          </TouchableOpacity>
          
          {/* Botão Minhas adoções/solicitações */}
          <TouchableOpacity style={styles.animalButton} activeOpacity={0.8}>
            <Text style={styles.animalButtonText}>Minhas adoções/solicitações</Text>
          </TouchableOpacity>
        </View>
        
        {/* Espaçador para empurrar o botão Sair para baixo (se o conteúdo for pequeno) */}
        <View style={styles.spacer} />

        {/* Botão Sair */}
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8} onPress={handleSignOut}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

// ... Definição dos estilos viria aqui (const styles = StyleSheet.create({ ... }));

export default UserProfileScreen;