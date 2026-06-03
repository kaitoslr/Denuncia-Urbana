import React, { useState } from "react";

import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import logo from "../../assets/denunciante.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { themas } from "../../global/themes";
import { registerUser } from "../../services/authService";

import { style } from "./style";

export default function Register() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const showMessage = (title: string, message: string) => {
    if (typeof window !== "undefined") {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const handleRegister = async () => {
    if (!name || !phone || !email || !password || !confirmPassword) {
      showMessage("Campos obrigatórios", "Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      showMessage("Senha inválida", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      showMessage("Senhas diferentes", "A confirmação de senha não confere.");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name,
        phone,
        email,
        password,
      });

      showMessage("Cadastro realizado", "Sua conta foi criada com sucesso.");

      navigation.navigate("Login");
      } catch (error: any) {
        console.log("Erro completo ao cadastrar:", error);
        console.log("Código do erro:", error?.code);
        console.log("Mensagem do erro:", error?.message);

        switch (error.code) {
          case "auth/invalid-email":
            showMessage("Erro", "Email inválido.");
            break;

          case "auth/email-already-in-use":
            showMessage("Erro", "Este email já está em uso.");
            break;

          case "auth/weak-password":
            showMessage("Erro", "A senha deve ter pelo menos 6 caracteres.");
            break;

          case "permission-denied":
          case "firestore/permission-denied":
            showMessage(
              "Erro",
              "Sem permissão para salvar os dados no Firestore."
            );
            break;

          default:
            showMessage(
              "Erro",
              error?.message || "Não foi possível realizar o cadastro."
            );
        }
      } finally {
        setLoading(false);
      }
  };

  return (
    <ScrollView
      contentContainerStyle={style.container}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={style.boxTop}>
        <Image source={logo} style={style.logo} resizeMode="contain" />

        <Text style={style.title}>Crie sua conta</Text>
      </View>

      <View style={style.boxMid}>
        <Input
          value={name}
          onChangeText={setName}
          title="Nome completo"
          IconRight={MaterialIcons}
          iconRightName="person"
        />

        <Input
          value={phone}
          onChangeText={setPhone}
          title="Telefone"
          keyboardType="phone-pad"
          IconRight={MaterialIcons}
          iconRightName="phone"
        />

        <Input
          value={email}
          onChangeText={setEmail}
          title="Endereço de e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          IconRight={MaterialIcons}
          iconRightName="email"
        />

        <Input
          value={password}
          onChangeText={setPassword}
          title="Senha"
          secureTextEntry={showPassword}
          IconRight={Octicons}
          iconRightName={showPassword ? "eye-closed" : "eye"}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />

        <Input
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          title="Confirmar senha"
          secureTextEntry={showConfirmPassword}
          IconRight={Octicons}
          iconRightName={showConfirmPassword ? "eye-closed" : "eye"}
          onIconRightPress={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        />
      </View>

      <View style={style.boxBottom}>
        <Button text="Cadastrar" onPress={handleRegister} loading={loading} />

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={style.textBottom}>
            Já tem conta?{" "}
            <Text style={{ color: themas.color.primary }}>Entrar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}