import React, { useState } from "react";

import {Text, View, Image,TextInput, TouchableOpacity} from 'react-native';
import {style} from "./style";
import logo from '../../assets/denunciante.png'
import {MaterialIcons, Octicons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login (){
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    
    return (
        <View style={style.container}>
            <View style ={style.boxTop}>
                <Image 
                source={logo} 
                style ={style.logo}
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
                iconRightName={showPassword?"eye-closed":"eye"}
                secureTextEntry={showPassword}
                onIconRightPress={()=> setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBottom}>
                   <Button
                        text="Entrar"
                   />
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.color.primary}}>Crie agora!</Text></Text>
        </View>
            
    )
}