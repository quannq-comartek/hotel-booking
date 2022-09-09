/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, SafeAreaView, Platform, Text} from 'react-native';
import React from 'react';
import CardBookmark from '../components/CardBookmark';

import COLORS from '../constants/colors';
import Button from '../components/Button';

// CHUA XONG PHAN BUTTON CHECKOUT

const CheckoutScreen = ({route, navigation}) => {
  const item = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <CardBookmark hotel={item} />
      <View style={{paddingHorizontal: 16, marginTop: 40, marginBottom: 80}}>
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
            {item.price}.00
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
            Services
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: 'black',
              opacity: 0.8,
            }}>
            {item.price / 20}.00
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
              fontSize: 20,
              fontWeight: '400',
              maxWidth: '80%',
              color: 'black',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: 'black',
              opacity: 0.8,
            }}>
            {item.price + item.price / 20}.00
          </Text>
        </View>
        <Button
          title="Checkout"
          color="xanh"
          colors="white"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 80 : 100,
  },
});

export default CheckoutScreen;
