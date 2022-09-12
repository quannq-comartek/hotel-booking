/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Platform, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../constants/data';

const StatusDetail = ({navigation}) => {
  const [store, setStore] = useState([]);

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
      setStore(productData);
      //console.log(productData);
      //getTotal(productData);
    } else {
      setStore([]);
      //getTotal(false);
    }
  };

  return (
    <SafeAreaView style={{marginTop: Platform.OS === 'android' ? 50 : 0}}>
      {store.map((item, index) => {
        <View key={index}>
          <Image source={item.image} />
          <Text>{item.name}</Text>
        </View>;
      })}
    </SafeAreaView>
  );
};

export default StatusDetail;
