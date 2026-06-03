import React, {useState} from "react";

import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import {getUserReports} from "../../services/reportService";

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
                    />
                </View>
            </View>

            <View style={styles.boxReport}>
                <FlatList
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
                                        }
                                    )
                                }
                                style={styles.card}
                            >
                                    <View style={styles.rowCard}>
                                        <View style={styles.rowCardLeft}>
                                            <Ball color={getStatusColor(item.status)}/>
                                                <View>
                                                    <Text style={styles.reportTitle}>{item.title}</Text>
                                                    <Text style={styles.reportText}>{item.category}</Text>
                                                </View>
                                        </View>
                                        <Flag color= {getStatusColor(item.status)} caption= {item.status}/>
                                    </View>
                        </TouchableOpacity>
                        
                    )}
                />
            </View>
        </View>
    );
}