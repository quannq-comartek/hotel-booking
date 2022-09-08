import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import COLORS from '../constants/colors';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import BookmarkScreen from '../screens/BookmarkScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.xanh : COLORS.primary;

          switch (route.name) {
            case 'Home':
              return (
                <FontAwesomeIcon
                  icon="fa-solid fa-house"
                  size={25}
                  style={{color: tintColor}}
                />
              );
            case 'User':
              return (
                <FontAwesomeIcon
                  icon="fa-solid fa-user"
                  size={25}
                  style={{color: tintColor}}
                />
              );

            case 'Checkout':
              return (
                <FontAwesomeIcon
                  icon="fa-calendar-days"
                  size={25}
                  style={{color: tintColor}}
                />
              );
            case 'Bookmark':
              return (
                <FontAwesomeIcon
                  icon="fa-solid fa-bookmark"
                  size={25}
                  style={{color: tintColor}}
                />
              );
          }
        },
      })}>
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Bookmark"
        component={BookmarkScreen}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Checkout"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="User"
        component={UserScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
