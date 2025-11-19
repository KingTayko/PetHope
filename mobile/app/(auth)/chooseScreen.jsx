import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../../assets/styles/ChooseScreen.styles";

import { FontAwesome5, Entypo, MaterialIcons } from "@expo/vector-icons";

export default function Choose() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Topo curvado */}
      <View style={styles.topShape} />

      <View style={styles.content}>
        {/* Logo */}
        {/* 
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logo}
        />
          */}
        <Text style={styles.title}>Novo Cadastro?</Text>
        <Text style={styles.subtitle}>Continue como</Text>

        {/* Botão Tutor */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../(auth)/tutorSignUp")}
        >
          <FontAwesome5
            name="paw"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Tutor</Text>
        </TouchableOpacity>

        {/* Botão ONGs */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../(auth)/ongSignUp")}
        >
          <Entypo
            name="home"
            size={20}
            color="#fff"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>ONGs</Text>
        </TouchableOpacity>

        {/* Botão Clínica */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../(auth)/clinicaSignUp")}
        >
          <MaterialIcons
            name="pets"
            size={22}
            color="#fff"
            style={styles.buttonIcon}
          />
          <Text style={styles.buttonText}>Clínica</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem conta?</Text>

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.loginButtonText}></Text>
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Fazer Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
