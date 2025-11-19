import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/DoarScreen.styles";

export default function DoarScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Informações sobre <Text style={styles.bold}>doação de sangue</Text></Text>

            {/* Linha Divisória */}
            <View style={styles.divider} />

            {/* Por que doar */}
            <Text style={styles.sectionTitle}>Por que doar?</Text>
            <Text style={styles.text}>
                Assim como os seres humanos, os animais também podem precisar de transfusões de sangue em situações de emergências,
                como acidentes, cirurgias, doenças graves ou problemas crônicos. A doação de sangue animal é um ato de solidariedade
                que pode ajudar a salvar a vida de muitos pets e animais de grande porte.
            </Text>

            {/* Quem pode ser doador */}
            <Text style={styles.sectionTitle}>Quem pode ser doador?</Text>
            <Text style={styles.text}>
                As regras podem variar de acordo com a espécie, mas geralmente os doadores devem ser saudáveis, vacinados e bem nutridos:
            </Text>

            <Text style={styles.list}>• Cães entre 1 e 8 anos, acima de 25kg.</Text>
            <Text style={styles.list}>• Gatos entre 1 e 8 anos, acima de 4kg.</Text>
            <Text style={styles.list}>• Vacinação e vermifugação atualizadas.</Text>
            <Text style={styles.list}>• Animais dóceis, que aceitam manipulação.</Text>
            <Text style={styles.list}>• Não podem estar gestantes ou lactantes.</Text>
            <Text style={styles.list}>• Devem estar livres de doenças infectocontagiosas.</Text>
            <Text style={styles.list}>• Exames clínicos e laboratoriais atualizados.</Text>

            <Text style={styles.text}>
                Cada clínica veterinária possui critérios específicos, especialmente suspensões de medicações veterinárias especializadas.
            </Text>

            {/* Etapas da doação */}
            <Text style={styles.sectionTitle}>Etapas da doação</Text>
            <Text style={styles.list}>1. Cadastro: O tutor ou responsável preenche informações sobre o animal.</Text>
            <Text style={styles.list}>2. Avaliação: Exame clínico e de saúde para garantir que o animal está apto.</Text>
            <Text style={styles.list}>3. Doação: O procedimento é seguro e feito com total cuidado. Em cães dura cerca de 20 a 30 minutos.
                Em gatos é um pouco mais rápido, e nos equinos leva um pouco mais de tempo.</Text>
            <Text style={styles.list}>4. Recuperação: Processo rápido, o animal pode voltar para casa no mesmo dia.</Text>

            {/* Benefícios */}
            <Text style={styles.sectionTitle}>Benefícios para o doador</Text>
            <Text style={styles.list}>• Exames gratuitos e acompanhamento veterinário a cada doação.</Text>
            <Text style={styles.list}>• Contribuição direta para salvar a vida de outros animais.</Text>
            <Text style={styles.list}>• Fortalecimento do vínculo entre tutor e pet; seu animal se torna um verdadeiro herói!</Text>

            {/* Frequência */}
            <Text style={styles.sectionTitle}>Com que frequência doar?</Text>
            <Text style={styles.list}>• Cães: a cada 3 meses.</Text>
            <Text style={styles.list}>• Gatos: entre 4 e 6 meses, dependendo da avaliação veterinária.</Text>
            <Text style={styles.list}>• Equinos e animais rurais: em situações especiais.</Text>
            <Text style={styles.text}>
                Sempre respeite os limites fisiológicos da espécie e siga a orientação de profissionais qualificados.
            </Text>

            {/* Como participar */}
            <Text style={styles.sectionTitle}>Como participar?</Text>
            <Text style={styles.text}>
                Seu pet cumpre os requisitos? Envie cadastro clicando em um dos botões abaixo.
            </Text>

            {/* Botões */}
            <TouchableOpacity style={styles.greenBtn}>
                <Ionicons name="paw" size={20} color="#fff" />
                <Text style={styles.btnText}>Cadastrar animal doador</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.redBtn}>
                <Ionicons name="search" size={20} color="#fff" />
                <Text style={styles.btnText}>Buscar animal doador</Text>
            </TouchableOpacity>

            <View style={{ height: 40 }} />
        </ScrollView>
    );
}
