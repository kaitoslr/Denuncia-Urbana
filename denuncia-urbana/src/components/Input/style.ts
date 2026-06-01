import { Button, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
     boxInput:{
            width:"100%",
            height:40,
            borderWidth:1,
            borderRadius:40,
            marginTop:10,
            flexDirection:'row',
            alignItems:'center',
            paddingHorizontal:5,
            backgroundColor:themas.color.lightGray,
            borderColor:themas.color.lightGray
        },
        input:{
            width:'90%',
            height:'100%',
            borderRadius:40,
            paddingLeft:5
        },  
        titleInput:{
            marginLeft:5,
            color:themas.color.gray,
             marginTop:20
        },
        Icon:{
            width:'100%'
        },
        Button:{
            width:'10%'
        }
})