/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

import COLORS from '../constants/colors';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash, faStar} from '@fortawesome/free-solid-svg-icons';

const CardBookmark = ({hotel, onPress2, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.card}>
        <Image source={hotel.image} style={styles.cardImage} />

        <View style={styles.cardDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                {hotel.name}
              </Text>
              <Text style={{color: COLORS.grey, fontSize: 12}}>
                {hotel.location}
              </Text>

              <Text
                style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
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
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
              <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
              <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
              <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
              <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
            </View>
            <Text style={{fontSize: 10, color: COLORS.grey}}>365 reviews</Text>
            <TouchableOpacity onPress={onPress2}>
              <FontAwesomeIcon icon={faTrash} size={26} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});

export default CardBookmark;
