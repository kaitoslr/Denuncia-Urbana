import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';

const MyTabs = createBottomTabNavigator();

export default function BottomNavigator(){
    return(
        <MyTabs.Navigator
            screenOptions={{
                headerShown:false
            }}        
         
        >
            <MyTabs.Screen 
            name="Home" 
            component={Home}
            />
        </MyTabs.Navigator>
    )
}

