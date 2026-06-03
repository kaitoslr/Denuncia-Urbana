import Login from "../screens/login";
import Home from "../screens/home";
import signIn from "../screens/signIn";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import BottomNavigator from "./BottomNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown:false,
                    }
                }
            >
                <Stack.Screen 
                name="Login" 
                component={Login}
                />
                <Stack.Screen 
                name="Home"  
                component={Home}
                />
                <Stack.Screen
                    name="Register"
                    component={signIn}
                />
                <Stack.Screen
                    name="BottomNavigator"
                    component={BottomNavigator}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )    
}