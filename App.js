import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './routes/tabs';

import OnBoardScreen from './screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DetailScreen from './screens/DetailScreen';
import ListScreen from './screens/ListScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import Map from './screens/Map';
import CheckoutScreen from './screens/CheckoutScreen';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDays,
  faHouse,
  faUser,
  faBookmark,
  faLocationDot,
  faArrowCircleLeft,
  faPhone,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faCalendarDays,
  faHouse,
  faUser,
  faBookmark,
  faLocationDot,
  faArrowCircleLeft,
  faPhone,
  faEyeSlash,
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="BookmarkScreen" component={Tabs} />
        <Stack.Screen name="UserScreen" component={Tabs} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
