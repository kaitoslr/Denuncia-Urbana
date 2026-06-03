import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import CustomTabBar from '../components/CustomTabBar';

const MyTabs = createBottomTabNavigator();

export default function BottomNavigator(){
    return(
        <MyTabs.Navigator
            screenOptions={{
                headerShown:false
            }}        
            tabBar={props=><CustomTabBar{...props}/>}
         
        >
            <MyTabs.Screen 
            name="Home" 
            component={Home}
            />
        </MyTabs.Navigator>
    )
}

