import api from "./src/services/api";
import {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Linking, Pressable, ScrollView, Text, TextInput, View} from "react-native";

export default function App() {
    return (<SafeAreaView>
        <Text>Consumindo a Brasil API</Text>
        <Pressable onPress={() => Linking.openURL("https://brasilapi.com.br/docs")}>
            <Text style={{color: "blue", textDecorationLine: "underline"}}>
                Abrir site
            </Text>
        </Pressable>

        <ScrollView>
            <Text>Olá, escolha a consulta que deseja realizar: </Text>
            <View>

            </View>
        </ScrollView>
    </SafeAreaView>)
}