/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

import COLORS from '../constants/colors';

const CardStatus = ({hotel, onPress1}) => {
  return (
    <TouchableOpacity onPress={onPress1} activeOpacity={0.5} style={{}}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={{uri: hotel.image}} style={styles.cardImage} />

          <View style={styles.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {hotel.name}
                </Text>

                <Text
                  style={{
                    color: COLORS.xanh,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  ${hotel.price}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#f1c40f',
                  height: 30,
                  width: 100,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Pending
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 10,
  },
  card: {
    height: 150,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 10,
  },

  cardImage: {
    height: 120,
    width: 150,
    borderRadius: 10,
  },
});

export default CardStatus;
