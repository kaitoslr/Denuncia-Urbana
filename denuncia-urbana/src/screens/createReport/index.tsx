import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { createReport } from "../../services/reportService";

import { style } from "./style";

export default function CreateReport() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleCreateReport = async () => {

        if (
            !title ||
            !category ||
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
                description,
            });

            window.alert(
                "Denúncia enviada com sucesso!"
            );

            setTitle("");
            setCategory("");
            setDescription("");

        } catch (error) {

            console.log(error);

            window.alert(
                "Erro ao enviar denúncia."
            );
        }
    };

    return (
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
    );
}