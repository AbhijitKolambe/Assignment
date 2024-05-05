/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/Home';
import SplashScreen from './src/components/SplashScreen';
import Login from './src/components/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {store} from './src/components/redux/store';
import {Provider} from 'react-redux';
import Employees from './src/components/Employees';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TabViewHome() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Employees" component={Employees} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="TabViewHome" component={TabViewHome} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
