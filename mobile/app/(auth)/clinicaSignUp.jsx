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
} from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../assets/styles/ClinicaSignUp.styles"; // Importe os estilos

//clerk e bd
import { useSignUp } from "@clerk/clerk-expo";
import { API_URL } from "../../constants/api";

const ClinicaSignUp = () => {
  const router = useRouter();

  //clerk
  const { isLoaded, signUp } = useSignUp();


  // --- Estados dos Inputs ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [crmv, setCrmv] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !crmv || !telefone || !estado || !cidade || !password || !confirmPassword) {
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
      const response = await fetch(`${API_URL}/clinica`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          clerkId,
          email,
          telefone,
          estado,
          cidade,
          crmv
        }),
      });

      const data = await response.json();

      console.log(data.clerkId, data.name, data.crmv);
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
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >

        {/* Título */}
        <Text style={styles.title}>Olá Clínica, crie sua conta</Text>

        {/* --- Campos de Input --- */}

        {/* Nome completo */}
        <TextInput
          placeholder="Nome completo *"
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

        {/* CRMV */}
        <TextInput
          placeholder="CRMV *"
          placeholderTextColor="#ffffff"
          style={styles.inputFull}
          value={crmv}
          onChangeText={setCrmv}
          keyboardType="numeric"
        />

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
          onPress={handleSignUp}
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

export default ClinicaSignUp;