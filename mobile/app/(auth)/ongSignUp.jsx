import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from "react-native";

// Você precisará instalar esta biblioteca se não tiver: expo install expo-vector-icons
import { Ionicons } from '@expo/vector-icons';

import { styles } from "../../assets/styles/OngSignUp.styles"; // Importe os estilos criados

//clerk e bd
import { useSignUp } from "@clerk/clerk-expo";
import { API_URL } from "../../constants/api";



const { width } = Dimensions.get('window');

const OngSignUp = () => {
  const router = useRouter();

  const { isLoaded, signUp } = useSignUp();

  // --- Estados dos Inputs ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cnae, setCnae] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


    const handleOngSignUp = async () => {
        if (!name || !email ||!telefone || !estado || !cidade || !password || !confirmPassword || !cnpj || !cnae) {
          Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios (*).");
          return;
        }
    
        if (password !== confirmPassword) {
          Alert.alert("Erro", "As senhas não coincidem.");
          return;
        }
    
    
        if (!isLoaded) return;
    
        setLoading(true);
        // Lógica de cadastro da Clínica (e.g., chamada de API)
        try {
          const result = await signUp.create({ emailAddress: email, password });
    
          //pega o id do clerk
          const clerkId = result.createdUserId
    
          //criacao da clinica no banco de dados 
          const response = await fetch(`${API_URL}/ong`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              clerkId,
              email,
              telefone,
              estado,
              cidade,
              cnae,
              cnpj
            }),
          });
    
          const data = await response.json();
    
          console.log(data.clerkId, data.name, data.cnae);
          Alert.alert("Success", "Usuario Cadastrado!");
    
        } catch (error) {
          Alert.alert("Error", error.errors?.[0]?.message || "Failed to create account");
          console.error(JSON.stringify(error, null, 2));
        } finally {
          setLoading(false);
        }
      };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >

      {/* Cabeçalho Vermelho com Curvas e Botão de Voltar */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          {/* Ícone de Seta (Ionicons do Expo) */}
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        {/* O logo "PetHope" ficaria no topo da curva, mas omitido aqui para seguir a imagem de referência */}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >

        {/* Título */}
        <Text style={styles.title}>Olá ONG, crie sua conta</Text>

        {/* --- Campos de Input --- */}

        {/* Nome */}
        <TextInput
          placeholder="Nome *"
          placeholderTextColor="#ffffff"
          style={styles.inputFull}
          value={name}
          onChangeText={setName}
        />

        {/* Email */}
        <TextInput
          placeholder="Email *"
          placeholderTextColor="#ffffff"
          style={styles.inputFull}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* CNPJ e CNAE (Lado a Lado) */}
        <View style={styles.rowContainer}>
          <TextInput
            placeholder="CNPJ *"
            placeholderTextColor="#ffffff"
            style={styles.inputHalf}
            value={cnpj}
            onChangeText={setCnpj}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="CNAE *"
            placeholderTextColor="#ffffff"
            style={styles.inputHalf}
            value={cnae}
            onChangeText={setCnae}
            keyboardType="numeric"
          />
        </View>

        {/* Telefone */}
        <TextInput
          placeholder="Telefone *"
          placeholderTextColor="#ffffff"
          style={styles.inputFull}
          value={telefone}
          onChangeText={setTelefone}
          keyboardType="phone-pad"
        />

        {/* Estado e Cidade (Lado a Lado) */}
        <View style={styles.rowContainer}>
          <TextInput
            placeholder="Estado *"
            placeholderTextColor="#ffffff"
            style={styles.inputHalf}
            value={estado}
            onChangeText={setEstado}
          />
          <TextInput
            placeholder="Cidade *"
            placeholderTextColor="#ffffff"
            style={styles.inputHalf}
            value={cidade}
            onChangeText={setCidade}
          />
        </View>

        {/* Senha */}
        <TextInput
          placeholder="Senha *"
          placeholderTextColor="#ffffff"
          style={styles.inputFull}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        {/* Confirmar Senha */}
        <TextInput
          placeholder="Confirmar senha *"
          placeholderTextColor="#ffffff"
          style={styles.inputFull}
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Termos de Serviço e Mostrar Senha */}
        <View style={styles.legalRow}>
          <Text style={styles.legalText}>Termos de Serviço</Text>
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPasswordText}>
              {showPassword ? "Ocultar senha" : "Mostrar senha"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Botão Cadastrar */}
        <TouchableOpacity
          style={styles.cadastroButton}
          onPress={handleOngSignUp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.cadastroButtonText}>Cadastrar</Text>
          )}
        </TouchableOpacity>

        {/* Rodapé (Já tem conta? Fazer Login) */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem conta?</Text>

          <TouchableOpacity
            style={styles.loginButtonContainer}
            onPress={() => router.push("/signIn")} // Redireciona para a tela de login
          >
            <Text style={styles.loginButtonText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default OngSignUp;