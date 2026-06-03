import React from "react";
import { View, Text } from "react-native";
import { auth } from "../../database/firebase";
import { Button } from "../../components/Button";
import { logoutUser } from "../../services/authService";
import { useNavigation } from "@react-navigation/native";

import { style } from "./style";

export default function User() {

const navigation = useNavigation();

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
            
            <Text style={style.title}>
                Meu Perfil
            </Text>

            <View style={style.infoBox}>
                <Text style={style.label}>
                    Nome
                </Text>
                <Text style={style.value}>
                    {auth.currentUser?.displayName}
                </Text>
            </View>

            <View style={style.infoBox}>
                <Text style={style.label}>
                    Email
                </Text>
                <Text style={style.value}>
                    {auth.currentUser?.email}
                </Text>
            </View>

            <Button
                text="Sair"
                onPress={handleLogout}
            />

        </View>
    );
}