/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import COLORS from '../constants/colors';

const TopHotelCard = ({hotel}) => {
  return (
    <View style={styles.topHotelCard}>
      <View
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          zIndex: 1,
          flexDirection: 'row',
        }}>
        <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
        <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 15}}>
          5.0
        </Text>
      </View>
      <Image source={hotel.image} style={styles.topHotelCardImage} />
      <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{hotel.name}</Text>
        <Text style={{fontSize: 10, fontWeight: 'bold', color: COLORS.primary}}>
          {hotel.location}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHotelCard: {
    height: 180,
    width: 200,
    backgroundColor: COLORS.white,
    elevation: 1,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default TopHotelCard;
