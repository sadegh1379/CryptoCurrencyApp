import React , {useEffect} from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'

import Tabs from "./navigation/tabs";

const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
   SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Tabs'}
      >
        <Stack.Screen
          name="Tabs"
          component={Tabs}
         
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <Stack.Screen
          name="Transaction_s"
          component={Transaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;