import {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, Text, TextInput, View} from "react-native";
import { styles } from "./style.js";
import api from "../../services/api";

export default function CepPage() {
    const [rua, setRua] = useState(null);
    const [pesquisa, setPesquisa] = useState("");

    useEffect(() => {
        async function carregarRua() {
            if (/^\d{8}$/.test(pesquisa)) {
                try {
                    const response = await api.get(pesquisa);
                    setRua(response.data);
                } catch (error) {
                    console.error("Erro na requisição:", error.response?.data || error.message);
                    setRua(null);
                }
            } else {
                setRua(null);
            }
        }

        carregarRua();
    }, [pesquisa]);

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o CEP ou nome da rua"
                value={pesquisa}
                onChangeText={setPesquisa}
            />

            <Text style={styles.titulo}>Resultado da pesquisa: </Text>

            <ScrollView>
                {rua && (<View style={styles.card}>
                    <Text style={styles.cardInfo}>
                        <Text style={{fontWeight: 700}}>CEP: </Text>{rua.cep}
                    </Text>
                    <Text style={styles.cardInfo}>
                        <Text style={{fontWeight: 700}}>Estado: </Text>{rua.state}
                    </Text>
                    <Text style={styles.cardInfo}>
                        <Text style={{fontWeight: 700}}>Cidade: </Text>{rua.city}
                    </Text>
                    <Text style={styles.cardInfo}>
                        <Text style={{fontWeight: 700}}>Bairro: </Text>{rua.neighborhood}
                    </Text>
                    <Text style={styles.cardInfo}>
                        <Text style={{fontWeight: 700}}>Rua: </Text>{rua.street}
                    </Text>
                </View>)}
            </ScrollView>
        </SafeAreaView>
    );

}
