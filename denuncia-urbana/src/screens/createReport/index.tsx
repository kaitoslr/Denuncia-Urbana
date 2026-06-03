import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from "react-native";

import { createReport } from "../../services/reportService";

import { style } from "./style";

const categories = [
    {
        label: "🛣️ Infraestrutura",
        value: "Infraestrutura",
    },
    {
        label: "💡 Iluminação",
        value: "Iluminação",
    },
    {
        label: "🦟 Dengue",
        value: "Dengue",
    },
    {
        label: "🧹 Limpeza Urbana",
        value: "Limpeza Urbana",
    },
    {
        label: "🛡️ Segurança",
        value: "Segurança",
    },
    {
        label: "📌 Outros",
        value: "Outros",
    },
];

export default function CreateReport() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Infraestrutura");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");

    const handleCreateReport = async () => {

        if (
            !title ||
            !category ||
            !location ||
            !description
        ) {
            window.alert(
                "Preencha todos os campos."
            );
            return;
        }

        try {
            await createReport({
                title,
                category,
                location,
                description,
            });

            window.alert(
                "Denúncia enviada com sucesso!"
            );
            setTitle("");
            setCategory("Infraestrutura");
            setDescription("");
            setLocation("");

        } catch (error) {

            console.log(error);

            window.alert(
                "Erro ao enviar denúncia."
            );
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={
                Platform.OS === "ios"
                    ? "padding"
                    : undefined
            }
        >
            <ScrollView
                contentContainerStyle={{
                    padding: 20,
                    paddingBottom: 50,
                }}
            >
                <View style={style.container}>

                    <Text style={style.title}>
                        Nova Denúncia
                    </Text>

                    <TextInput
                        style={style.input}
                        placeholder="Título"
                        value={title}
                        onChangeText={setTitle}
                    />

                    <Text
                        style={{
                            fontWeight: "bold",
                            marginBottom: 10,
                        }}
                    >
                        Categoria
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 10,
                            marginBottom: 20,
                        }}
                    >
                        {categories.map((item) => (
                            <TouchableOpacity
                                key={item.value}
                                onPress={() =>
                                    setCategory(item.value)
                                }
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 15,
                                    borderRadius: 10,

                                    backgroundColor:
                                        category === item.value
                                            ? "#1E88E5"
                                            : "#F1F1F1",
                                }}
                            >
                                <Text
                                    style={{
                                        color:
                                            category === item.value
                                                ? "#FFF"
                                                : "#333",

                                        fontWeight: "600",
                                    }}
                                >
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TextInput
                        style={style.input}
                        placeholder="Localização"
                        value={location}
                        onChangeText={setLocation}
                    />

                    <TextInput
                        style={style.textArea}
                        placeholder="Descrição"
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    />

                    <TouchableOpacity
                        style={style.button}
                        onPress={handleCreateReport}
                    >
                        <Text style={style.buttonText}>
                            Enviar Denúncia
                        </Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}