
import React, { useState, } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import { updateReport, deleteReport, getUserReports } from "../../services/reportService";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Report } from "../../types/Report";
import { FlatList } from "react-native-gesture-handler";

export default function EditReport({ route, navigation, }: any) {
    const {
        reportId,
        title: initialTitle,
        category: initialCategory,
        location: initialLocation,
        description: initialDescription,
    } = route.params;
    const [title, setTitle] = useState(initialTitle);
    const [category, setCategory] = useState(initialCategory);
    const [description, setDescription] = useState(initialDescription);
    const [location, setLocation] = useState(initialLocation);
    const [reports, setReports] = useState<Report[]>([]);

    const handleDelete = async () => {

        const confirmed = window.confirm(
            "Deseja excluir esta denúncia?"
        );
        if (!confirmed) return;
        try {
            await deleteReport(reportId);
            window.alert(
                "Denúncia excluída com sucesso!"
            );
            navigation.goBack();
        } catch (error) {
            console.log(error);
            window.alert(
                "Erro ao excluir denúncia."
            );
        }
    };


    const handleUpdate = async () => {
        try {
            await updateReport(
                reportId,
                {
                    title,
                    category,
                    description,
                    location,
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
                showsVerticalScrollIndicator={false}
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
                    value={location}
                    onChangeText={setLocation}
                    placeholder="Localização"
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
                    <Text style={{ color: "#fff", fontWeight: "bold", }}>
                        Salvar Alterações
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        backgroundColor: "#757575",
                        padding: 15,
                        borderRadius: 10,
                        alignItems: "center",
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            fontWeight: "bold",
                        }}
                    >
                        Cancelar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleDelete}
                    style={{
                        backgroundColor: "#F44336",
                        padding: 15,
                        borderRadius: 10,
                        alignItems: "center",
                        marginTop: 60,
                    }}
                >
                    <Text style={{ color: "#FFF", fontWeight: "bold", }}>
                        Excluir Denúncia
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}