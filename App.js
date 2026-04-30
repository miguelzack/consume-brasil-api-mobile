import {SafeAreaView} from "react-native-safe-area-context";
import {Linking, Pressable, ScrollView, Text, TextInput, View} from "react-native";
import { globalStyles } from "./src/styles/global.js";
import CepPage from "./src/pages/cepPage";

export default function App() {

    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={globalStyles.header}>Consumindo a Brasil
                <Text style={{color: "#2864ae"}}> A</Text>
                <Text style={{color: "#46ad43"}}>P</Text>
                <Text style={{color: "#fbbd0e"}}>I</Text>
            </Text>
            <Pressable onPress={() => Linking.openURL("https://brasilapi.com.br/docs")}>
                <Text style={globalStyles.link}>
                    Ver documentação
                </Text>
            </Pressable>

            <ScrollView>
                <Text style={globalStyles.title}>Consulta por CEP</Text>
                <View>
                    <CepPage />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
