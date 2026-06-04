import React, { useState } from "react";

import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { getUserReports } from "../../services/reportService";

import { Report } from "../../types/Report";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import { Input } from "../../components/Input";
import { MaterialIcons } from "@expo/vector-icons";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";


export default function Home() {
    const navigation = useNavigation<any>();
    const [reports, setReports] = useState<Report[]>([]);
    const [allReports, setAllReports] = useState<Report[]>([]);
    const [search, setSearch] = useState("");

    const loadReports = async () => {
        try {

            const data = await getUserReports();

            setReports(data);
            setAllReports(data);

        } catch (error) {
            console.log(error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            loadReports();
        }, [])
    );

    const filterReports = (text: string) => {
        setSearch(text);
        if (!text.trim()) {
            setReports(allReports);
            return;
        }
        const filtered =
            allReports.filter(report =>
                report.title
                    .toLowerCase()
                    .includes(text.toLowerCase())
                ||
                report.category
                    .toLowerCase()
                    .includes(text.toLowerCase())
                ||
                report.location
                    .toLowerCase()
                    .includes(text.toLowerCase())
                ||
                report.status
                    .toLowerCase()
                    .includes(text.toLowerCase())
            );
        setReports(filtered);
    };


    const getStatusColor = (status: string) => {
        switch (status) {
            case "Aberto":
                return "#44ca44";

            case "Em análise":
                return "#FFC107";

            case "Andamento":
                return "#FFC107";

            case "Resolvido":
                return "#4CAF50";

            default:
                return "#333333";
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Minhas denuncias
                </Text>
                <View style={styles.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        iconLeftName="search"
                        value={search}
                        onChangeText={filterReports}
                    />
                </View>
            </View>

            <View style={styles.boxReport}>
                <FlatList
                    ListEmptyComponent={
                        <View
                            style={{
                                marginTop: 100,
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 60 }}>
                                📭
                            </Text>

                            <Text
                                style={{
                                    marginTop: 10,
                                    fontSize: 18,
                                }}
                            >
                                Nenhuma denúncia encontrada
                            </Text>
                            <Text>
                                Crie sua primeira denúncia usando o botão +
                            </Text>
                        </View>
                    }
                    data={reports}
                    keyExtractor={(item) => item.id!}
                    renderItem={({ item }) => (

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate(
                                    "EditReport",
                                    {
                                        reportId: item.id,
                                        title: item.title,
                                        category: item.category,
                                        description: item.description,
                                        location: item.location,
                                    }
                                )
                            }
                            style={styles.card}
                        >
                            <View style={styles.rowCard}>
                                <View style={styles.rowCardLeft}>
                                    <Ball color={getStatusColor(item.status)} />
                                    <View>
                                        <Text style={styles.reportTitle}>{item.title}</Text>
                                        <Text style={styles.reportText}>{item.category}</Text>
                                    </View>
                                </View>
                                <Flag color={getStatusColor(item.status)} caption={item.status} />
                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>
        </View>
    );
}