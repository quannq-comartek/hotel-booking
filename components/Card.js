/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark, faStar} from '@fortawesome/free-solid-svg-icons';

import COLORS from '../constants/colors';

let {width} = Dimensions.get('screen');
let cardWidth = width / 1.8;

const Card = ({hotel, index, onPress, scrollX, onPress1}) => {
  const inputRange = [
    (index - 1) * cardWidth,
    index * cardWidth,
    (index + 1) * cardWidth,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 0, 0.7],
  });
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
  });
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <Animated.View style={{...styles.card, transform: [{scale}]}}>
        <Animated.View style={{...styles.cardOverlay, opacity}} />
        <View style={styles.priceTag}>
          <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
            ${hotel.price}
          </Text>
        </View>
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
            </View>
            <TouchableOpacity onPress={onPress1}>
              <FontAwesomeIcon
                icon={faBookmark}
                size={26}
                style={{color: COLORS.grey}}
              />
            </TouchableOpacity>
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
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  cardOverlay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.xanh,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardDetails: {
    height: 100,
    width: '100%',
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },
});

export default Card;
