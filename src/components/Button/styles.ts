import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    login_button:{
        width:250,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.color.primary,
        borderRadius:40,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation:7,

    },
    textLoginButton:{
        fontSize:16,
        color:'#ffffff',
        fontWeight:'bold'
    },
})