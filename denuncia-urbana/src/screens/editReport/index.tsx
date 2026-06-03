import React, { useState } from "react";

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { updateReport } from "../../services/reportService";

export default function EditReport({
    route,
    navigation,
}: any) {

    const {
        reportId,
        title: initialTitle,
        category: initialCategory,
        description: initialDescription,
    } = route.params;

    const [title, setTitle] =
        useState(initialTitle);

    const [category, setCategory] =
        useState(initialCategory);

    const [description, setDescription] =
        useState(initialDescription);

    const handleUpdate = async () => {

        try {

            await updateReport(
                reportId,
                {
                    title,
                    category,
                    description,
                }
            );

            window.alert(
                "Denúncia atualizada!"
            );

            navigation.goBack();

        } catch (error) {

            console.log(error);

            window.alert(
                "Erro ao atualizar denúncia."
            );

        }

    };

    return (
        <View
            style={{
                flex: 1,
                padding: 20,
            }}
        >

            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Editar Denúncia
            </Text>

            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Título"
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 15,
                }}
            />

            <TextInput
                value={category}
                onChangeText={setCategory}
                placeholder="Categoria"
                style={{
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 15,
                }}
            />

            <TextInput
                value={description}
                onChangeText={setDescription}
                placeholder="Descrição"
                multiline
                style={{
                    borderWidth: 1,
                    padding: 10,
                    height: 120,
                    marginBottom: 20,
                }}
            />

            <TouchableOpacity
                onPress={handleUpdate}
                style={{
                    backgroundColor: "#2196F3",
                    padding: 15,
                    borderRadius: 10,
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                >
                    Salvar Alterações
                </Text>
            </TouchableOpacity>

        </View>
    );
}