import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { auth } from "../../database/firebase";
import { Button } from "../../components/Button";
import { logoutUser } from "../../services/authService";
import { useNavigation } from "@react-navigation/native";
import { getUserReports } from "../../services/reportService";
import { style } from "./style";
import { Report } from "../../types/Report";

export default function User() {

    const navigation = useNavigation();

    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);

    const totalReports = reports.length;
    const openReports =
        reports.filter(
            report =>
                report.status === "Aberto"
        ).length;
    const resolvedReports =
        reports.filter(
            report =>
                report.status === "Resolvido"
        ).length;


    useEffect(() => {
        const loadData = async () => {
            try {
                const data =
                    await getUserReports();
                setReports(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigation.reset({
                index: 0,
                routes: [{ name: "Login" as never }],
            });
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={style.container}>
            <View style={style.perfilBox}>
                <Text style={style.title}>
                    👤 Perfil
                </Text>

                <Text style={style.value}>
                    Nome:
                    {" "}
                    {auth.currentUser?.displayName}
                </Text>

                <Text style={style.value}>
                    Email:
                    {" "}
                    {auth.currentUser?.email}
                </Text>
            </View>
            <Text style={style.dashboardTitle}>
                Dashboard
            </Text>

            <View style={style.cardsContainer}>

                <View style={style.card}>
                    <Text style={style.cardNumber}>
                        {totalReports}
                    </Text>

                    <Text style={style.cardLabel}>
                        Total
                    </Text>
                </View>

                <View style={style.card}>
                    <Text
                        style={[
                            style.cardNumber,
                            { color: "#f59e0b" }
                        ]}
                    >
                        {openReports}
                    </Text>

                    <Text style={style.cardLabel}>
                        Abertas
                    </Text>
                </View>

                <View style={style.card}>
                    <Text
                        style={[
                            style.cardNumber,
                            { color: "#22c55e" }
                        ]}
                    >
                        {resolvedReports}
                    </Text>

                    <Text style={style.cardLabel}>
                        Resolvidas
                    </Text>
                </View>

            </View>
            <View style={style.boxExit}>
                <Button
                    text="Sair"
                    onPress={handleLogout}
                />
            </View>
        </View>

    );

}