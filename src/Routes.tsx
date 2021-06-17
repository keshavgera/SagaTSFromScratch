import React from 'react';

import { createStackNavigator  } from "@react-navigation/stack";
 import { NavigationContainer} from "@react-navigation/native";
  import Login from './screens/Login'
  import Register from './screens/Register'
  import Home from './screens/Home'
  import Splash from './screens/Splash'

  import { navigationRef } from '../src/navigations/SideMenu/RootNavigator';

  interface RoutesProps {}
const Stack=createStackNavigator();


export const Routes: React.FC<RoutesProps> = ({}) => {

    const isLoggedIn =false;
    return(
        <NavigationContainer  ref={navigationRef}>
            <Stack.Navigator  initialRouteName="HomeScreen">
            <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash}/>
            <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
             <Stack.Screen options={{headerShown:false}} name="Register" component={Register}/>
            <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>


            </Stack.Navigator>
        </NavigationContainer>
    )
}





  