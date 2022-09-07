/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image, Platform} from 'react-native';
import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faStar} from '@fortawesome/free-solid-svg-icons';

import COLORS from '../constants/colors';

const CardList = ({hotel}) => {
  return (
    <View style={styles.card}>
      <View style={styles.priceTag}>
        <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
          ${hotel.price}
        </Text>
      </View>
      <Image source={hotel.image} style={styles.cardImage} />

      <View style={styles.cardDetails}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>{hotel.name}</Text>
            <Text style={{color: COLORS.grey, fontSize: 12}}>
              {hotel.location}
            </Text>
          </View>
          <FontAwesomeIcon icon={faBookmark} size={26} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
            <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
            <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
            <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
            <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
          </View>
          <Text style={{fontSize: 10, color: COLORS.grey}}>365 reviews</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: '100%',
    // elevation: 5,
    marginRight: 20,
    borderRadius: 15,

    marginVertical: 20,
    paddingHorizontal: Platform.OS === 'android' ? 15 : 20,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.xanh,
    position: 'absolute',
    zIndex: 1,
    right: Platform.OS === 'android' ? 15 : 20,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardDetails: {
    height: 100,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    left: Platform.OS === 'android' ? 15 : 20,
    padding: 20,
  },
});

export default CardList;
