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
import CardList from '../components/CardList';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import COLORS from '../constants/colors';

const CartList = ({navigation}) => {
  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);
  console.log(product);

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
    //   getData();
    // });
    getData();

    // return unsubscribe;
  }, [getData]);

  const getData = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      data.forEach(datas => {
        if (items.includes(datas.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
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
            marginBottom: 10,
          }}>
          My Deal
        </Text>
        <View>
          {product
            ? product.map((ii, index) => {
                return <CardList hotel={ii} key={index} />;
              })
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartList;
