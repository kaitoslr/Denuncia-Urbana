import React, {
    useEffect,
    useState,
} from "react";

import {
    Alert,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {
    deleteReport,
    getUserReports,
} from "../../services/reportService";

import { Report } from "../../types/Report";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation<any>();
    const [reports, setReports] = useState<Report[]>([]);

    const loadReports = async () => {
        try {

            const data = await getUserReports();

            setReports(data);

        } catch (error) {
            console.log(error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadReports();
        }, [])
    );

    const handleDelete = async (reportId: string) => {
        const confirmed = window.confirm(
            "Deseja realmente excluir esta denúncia?"
        );
        if (!confirmed) return;
        try {
            await deleteReport(reportId);
            await loadReports();
        }
        catch (error) {
            console.log(error);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Aberto":
                return "#F44336";

            case "Em análise":
                return "#FFC107";

            case "Resolvido":
                return "#4CAF50";

            default:
                return "#000";
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, }}>

            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, }}>
                Minhas Denúncias
            </Text>

            <FlatList
                data={reports}
                keyExtractor={(item) => item.id!}
                renderItem={({ item }) => (

                    <View
                        style={{
                            padding: 15,
                            borderRadius: 10,
                            backgroundColor: "#FFF",
                            marginBottom: 15,
                        }}
                    >

                        <Text style={{ fontWeight: "bold", fontSize: 18, }}>
                            {item.title}
                        </Text>

                        <Text>
                            {item.category}
                        </Text>

                        <Text style={{ color: getStatusColor(item.status), fontWeight: "bold", }}>
                            Status: {item.status}
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(
                                    "EditReport",
                                    {
                                        reportId: item.id,
                                        title: item.title,
                                        category: item.category,
                                        description: item.description,
                                    }
                                )
                            }
                        >
                            <Text style={{ color: "blue", fontWeight: "bold", marginTop: 10, }}>
                                Editar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete(item.id!)} style={{ marginTop: 10, }}>
                            <Text style={{ color: "red", fontWeight: "bold", }}>
                                Excluir
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}