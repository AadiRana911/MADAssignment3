/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

import {colors} from './src/theme';
import StartScreen from './src/screens/StartScreen'
import History from './src/screens/History'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
     //<Industry />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = {'StartScreen'} component = {StartScreen} options = {{headerShown: false}} />
        <Stack.Screen name = {'History'} component = {History} options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
