import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';

import COLORS from '../constants/colors';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faUser,
  faCreditCard,
  faList,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.xanh : COLORS.primary;

          switch (route.name) {
            case 'Home':
              return (
                <FontAwesomeIcon
                  icon={faHouse}
                  size={25}
                  style={{color: tintColor}}
                />
              );
            case 'User':
              return (
                <FontAwesomeIcon
                  icon={faUser}
                  size={25}
                  style={{color: tintColor}}
                />
              );

            case 'Checkout':
              return (
                <FontAwesomeIcon
                  icon={faCreditCard}
                  size={25}
                  style={{color: tintColor}}
                />
              );
            case 'List':
              return (
                <FontAwesomeIcon
                  icon={faList}
                  size={25}
                  style={{color: tintColor}}
                />
              );
          }
        },
      })}>
      <Tab.Screen
        options={{tabBarShowLabel: faBullseye}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="List"
        component={ListScreen}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="Checkout"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarShowLabel: false}}
        name="User"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
