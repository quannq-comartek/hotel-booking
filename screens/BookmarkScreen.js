/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import data from '../constants/data';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CardBookmark from '../components/CardBookmark';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import COLORS from '../constants/colors';

const CartList = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    getData();

    // return unsubscribe;
  }, [getData]);

  const getData = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    //console.log(items);
    items = JSON.parse(items);
    //console.log(items);
    let productData = [];
    if (items) {
      data.forEach(datas => {
        if (items.includes(datas.id)) {
          productData.push(datas);

          return productData;
        }
      });
      setProduct(productData);
      //console.log(productData);
      getTotal(productData);
    } else {
      setProduct([]);
      getTotal(false);
    }
  };

  const getTotal = productData => {
    let total1 = 0;
    for (let i = 0; i < productData.length; i++) {
      let productPrice = productData[i].productPrice;
      total1 = total + productPrice;
    }
    setTotal(total1);
  };

  const removeItemHandler = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === id) {
          array.splice(i, 1);
          // array.filter(arr => arr[i] !== id);
          // return array;
        }
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        //console.log(array);
        getData();
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
          }}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={28} color={COLORS.xanh} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 50,
          }}>
          Bookmark
        </Text>
        <View>
          {product.map((item, index) => {
            return (
              <CardBookmark
                hotel={item}
                key={index}
                onPress2={() => removeItemHandler(item.id)}
              />
            );
          })}
        </View>
        {/* <View style={{paddingHorizontal: 16, marginTop: 40, marginBottom: 80}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: COLORS.xanh,
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Order info
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: 'black',
                opacity: 0.5,
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: 'black',
                opacity: 0.8,
              }}>
              {total}.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 22,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                maxWidth: '80%',
                color: 'black',
                opacity: 0.5,
              }}>
              Shipping Tax
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: 'black',
                opacity: 0.8,
              }}>
              {total / 20}
            </Text>
          </View>
          
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartList;
