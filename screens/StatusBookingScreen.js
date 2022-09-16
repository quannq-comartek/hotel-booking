/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardStatus from '../components/CardStatus';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import axios from 'axios';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const StatusBookingScreen = ({navigation}) => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [getData, navigation]);

  const rightSide = () => {
    return (
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesomeIcon icon="fa-solid fa-trash" color="#e74c3c" size={30} />
      </TouchableOpacity>
    );
  };

  const getData = async () => {
    await axios
      .get('https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/order')
      .then(res => setBooking(res.data))
      .catch(error => console.log(error));
  };

  return (
    <ScrollView>
      <SafeAreaView style={{marginTop: Platform.OS === 'android' ? 50 : 0}}>
        <View style={{alignItems: 'center', marginBottom: 60}}>
          <Text style={{fontSize: 30, color: '#2c3e50', fontWeight: 'bold'}}>
            Order Status
          </Text>
        </View>

        {booking.map((item, index) => {
          return (
            //<Swipeable renderRightActions={rightSide} key={index}>
            <CardStatus
              hotel={item}
              onPress1={() => navigation.navigate('StatusDetail')}
              key={index}
            />
            //</Swipeable>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};

export default StatusBookingScreen;
