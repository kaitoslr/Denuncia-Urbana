import React, { useState } from "react";

import { loginUser } from "../../services/authService";

import { Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { style } from "./style";
import logo from '../../assets/denunciante.png'
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation<NavigationProp<any>>();


    const showMessage = (title: string, message: string) => {
        if (typeof window !== "undefined") {
            window.alert(`${title}\n\n${message}`);
        } else {
            Alert.alert(title, message);
        }
    };

    const handleLogin = async () => {
        if (!email || !password) {
            showMessage(
                "Campos obrigatórios",
                "Preencha email e senha."
            );
            return;
        }
        try {
            setLoading(true);
            const userCredential = await loginUser(
                email,
                password
            );
            navigation.reset({ routes: [{ name: "BottomNavigator" }] })

        } catch (error: any) {
            switch (error.code) {
                case "auth/invalid-email":
                    showMessage(
                        "Erro",
                        "Email inválido."
                    );
                    break;
                case "auth/invalid-credential":
                    showMessage(
                        "Erro",
                        "Email ou senha incorretos."
                    );
                    break;
                default:
                    showMessage(
                        "Erro",
                        "Não foi possível realizar o login."
                    );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.Titulo_Login}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="Endereço de e-mail"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="Senha"
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBottom}>
                <Button
                    text="Entrar"
                    onPress={handleLogin}
                    loading={loading}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={style.textBottom}>
                    Não tem conta?{" "}
                    <Text style={{ color: themas.color.primary }}>Crie agora!</Text>
                </Text>
            </TouchableOpacity>
        </View>

    )
}