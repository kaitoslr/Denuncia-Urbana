import React from "react";
import  {TouchableOpacity, View} from 'react-native'
import { style } from "./style";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default function CustomTabBar({state,navigation}: BottomTabBarProps) {

    const currentRoute = state.routes[state.index].name;

    const go = (screenName: string) => {
        navigation.navigate(screenName as never);
    }

        return(
        <View style={style.tabBox}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("Home")}>
                <AntDesign
                    name="bars"
                    style={{opacity:currentRoute === "Home"?1:0.3, color:themas.color.primary, fontSize:32}}
                />
            </TouchableOpacity>
            <TouchableOpacity   style={style.tabItemButton} onPress={() => go("CreateReport")}>
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
                    style={{opacity:currentRoute === "User"?1:0.3, color:themas.color.primary, fontSize:32}}
                />
            </TouchableOpacity>
        </View>
        )
    }