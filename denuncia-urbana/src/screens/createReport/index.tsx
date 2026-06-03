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

export default function CreateReport() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
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
            setCategory("");
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

                    <TextInput
                        style={style.input}
                        placeholder="Categoria"
                        value={category}
                        onChangeText={setCategory}
                    />
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