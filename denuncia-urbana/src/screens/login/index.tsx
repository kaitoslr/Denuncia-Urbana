import React, { useState } from "react";

import {Text, View, Image,TextInput, TouchableOpacity} from 'react-native';
import {style} from "./style";
import logo from '../../assets/denunciante.png'
import {MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";

export default function Login (){
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
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
                <Text style={style.titleInput}>Endereço de e-mail</Text>
                    <View style = {style.boxInput}>
                        <TextInput 
                            style={style.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <MaterialIcons 
                            name='email' 
                            size={20} 
                            color={themas.color.gray}
                        />
                    </View>
                <Text style={style.titleInput}>Senha</Text>
                    <View style = {style.boxInput}>
                        <TextInput 
                            style={style.input}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <MaterialIcons 
                            name='remove-red-eye' 
                            size={20} 
                            color={themas.color.gray}
                        />
                    </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.login_button}>
                    <Text style={style.textLoginButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.color.primary}}>Crie agora!</Text></Text>
        </View>
            
    )
}