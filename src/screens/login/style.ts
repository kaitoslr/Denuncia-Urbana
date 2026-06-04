import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    }, 
    boxTop:{
        height:Dimensions.get('window').height/3,
        alignItems:"center",
        justifyContent:'center'
        
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        paddingHorizontal:37
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
    }, 
    logo:{
        width:100,
        height:100,
    },
    Titulo_Login:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },
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
    textBottom:{
        fontSize:16,
        color:themas.color.gray,

    }
})