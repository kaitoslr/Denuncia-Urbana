import React from "react";
import  {TouchableOpacity, View} from 'react-native'
import { style } from "./style";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { themas } from "../../global/themes";

export default ({state,navigation})=>{

    const go = (screenName:string)=>{
        navigation.navigate(screenName)

    }

    return(
      <View style={style.tabBox}>
        <TouchableOpacity style={style.tabItem} onPress={()=>go("Home")}>
            <AntDesign
                name="bars"
                style={{opacity:state.index === 0?1:0.3, color:themas.color.primary, fontSize:32}}
            />
        </TouchableOpacity>
        <TouchableOpacity style={style.tabItemButton}>
           <View>
                <Entypo
                    name="plus"
                    size={40}
                />
           </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabItem} onPress={()=>go("User")}>
           <AntDesign
                name="user"
                style={{opacity:state.index === 1?1:0.3, color:themas.color.primary, fontSize:32}}
            />
        </TouchableOpacity>
      </View>
    )
}