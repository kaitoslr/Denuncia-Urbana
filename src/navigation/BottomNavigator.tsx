import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import CustomTabBar from '../components/CustomTabBar';
import User from '../screens/user'
import CreateReport from '../screens/createReport'

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
            <MyTabs.Screen
                name="User"
                component={User}
            />
            <MyTabs.Screen
                name="CreateReport"
                component={CreateReport}
            />
        </MyTabs.Navigator>
    )
}

