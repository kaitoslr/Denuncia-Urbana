import React from "react";
import { ActivityIndicator, Touchable, TouchableHighlightProps, TouchableOpacity , Text} from 'react-native'
import { style } from "./styles";

type Props = TouchableHighlightProps & {
    text:string,
    loading?:boolean
}

export function Button({...rest}:Props){
    return(
        <TouchableOpacity  
            style = {style.login_button} 
            {...rest}
            activeOpacity={0.6}
        >
            {rest.loading?<ActivityIndicator/>:<Text style={style.textLoginButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}