/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardStatus from '../components/CardStatus';
import Button from '../components/Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

import data from '../constants/data';

const StatusBookingScreen = ({navigation, route}) => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [getData, navigation]);

  const getData = async () => {
    let items = await AsyncStorage.getItem('orderItem');
    //console.log(items);
    items = JSON.parse(items);
    //console.log(items);
    let productData = [];
    if (items) {
      data.forEach(datas => {
        if (items.includes(datas.id)) {
          productData.push(datas);

          return;
        }
      });
      setBooking(productData);
      //console.log(productData);
      //getTotal(productData);
    } else {
      setBooking([]);
      //getTotal(false);
    }
  };

  return (
    <>
      <SafeAreaView style={{marginTop: Platform.OS === 'android' ? 50 : 0}}>
        <View style={{alignItems: 'center', marginBottom: 60}}>
          <Text style={{fontSize: 30, color: '#2c3e50', fontWeight: 'bold'}}>
            Order Status
          </Text>
        </View>
        {booking.map((item, index) => {
          return <CardStatus hotel={item} key={index} />;
        })}
      </SafeAreaView>
      <View style={{paddingHorizontal: 50}}>
        <Button
          title="Back Home"
          color="xanh"
          colors="white"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </>
  );
};

export default StatusBookingScreen;
