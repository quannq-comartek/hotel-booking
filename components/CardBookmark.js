/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

import COLORS from '../constants/colors';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash, faStar} from '@fortawesome/free-solid-svg-icons';

const CardBookmark = ({hotel, onPress2, onPress1}) => {
  return (
    <TouchableOpacity onPress={onPress1} activeOpacity={0.5} style={{}}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={hotel.image} style={styles.cardImage} />

          <View style={styles.cardDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>
                  {hotel.name}
                </Text>
                {/* <Text style={{color: COLORS.grey, fontSize: 12}}>
                  {hotel.location}
                </Text> */}

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
              <View style={{flexDirection: 'row'}}>
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={onPress2}>
            <FontAwesomeIcon icon={faTrash} size={20} />
          </TouchableOpacity>
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

export default CardBookmark;
