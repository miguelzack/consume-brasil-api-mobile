import api from "./src/services/api";
import {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, Text, TextInput, View} from "react-native";

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

    return (<SafeAreaView style={globalStyles.container}>
        <TextInput
            style={globalStyles.input}
            placeholder="Digite o CEP ou nome da rua"
            value={pesquisa}
            onChangeText={setPesquisa}
        />

        <Text style={globalStyles.titulo}>Resultado da pesquisa</Text>

        <ScrollView>
            {rua && (<View style={globalStyles.card}>
                <Text>CEP: {rua.cep}</Text>
                <Text>Estado: {rua.state}</Text>
                <Text>Cidade: {rua.city}</Text>
                <Text>Bairro: {rua.neighborhood}</Text>
                <Text>Rua: {rua.street}</Text>
            </View>)}
        </ScrollView>
    </SafeAreaView>);
}