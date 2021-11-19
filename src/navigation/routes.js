import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import FaktoriyelScren from '../screens/Faktoriyel';
import FlatListScreen from '../screens/FlatList';
import FlexBoxScreen from '../screens/FlexBox';
import LoginScreen from '../screens/Login';
import SayacScreen from '../screens/Sayac';
import TodoScreen from '../screens/ToDoList';

const Stack = createStackNavigator(); //Navigationları Stack değişkenimizle çağıracağız

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, //Geri butonu gözükmesin
          }}></Stack.Screen>
        <Stack.Screen
          name="FlexBox"
          component={FlexBoxScreen}
          options={{
            title: 'FlexBox Screen',
            headerStyle: {backgroundColor: 'blue'},
            headerTintColor: 'white',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatListScreen}
          options={{
            title: 'FlatList(TODO) Screen',
            headerStyle: {backgroundColor: '#a78'},
            headerTintColor: 'white',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="Faktoriyel"
          component={FaktoriyelScren}
          options={{
            title: 'Faktoriyel Screen',
            headerStyle: {backgroundColor: 'green'},
            headerTintColor: 'white',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'FlatList(TODO) Screen',
            headerStyle: {backgroundColor: 'yellow'},
            headerTintColor: 'black',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
