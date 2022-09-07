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
import CartList from './screens/CartList';

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
        <Stack.Screen name="CartList" component={CartList} />
        <Stack.Screen name="UserScreen" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
