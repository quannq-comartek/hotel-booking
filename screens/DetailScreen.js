/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constants/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faArrowCircleLeft,
  faLocation,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

//import AsyncStorage from '@react-native-async-storage/async-storage';
import Comments from '../components/Comments';
import axios from 'axios';

const DetailScreen = ({navigation, route, onPress}) => {
  const item = route.params;

  const [storeValue, setStoreValue] = useState({
    name: item.name,
    price: item.price,
    image: item.image,
  });
  const [touched, setTouched] = useState(false);

  const addToBookmark = async () => {
    axios
      .post(
        'https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/bookmark',

        storeValue,
      )
      .then(res => {
        console.log(res);
        if (res) {
          setTouched(true);
        }
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
      }}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground source={{uri: item.image}} style={styles.headerImage}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              size={35}
              color={COLORS.xanh}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToBookmark()}>
            <FontAwesomeIcon
              icon={faBookmark}
              size={28}
              color={touched ? '#f1c40f' : COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Map', item)}>
          <FontAwesomeIcon icon={faLocation} size={28} color={COLORS.white} />
        </TouchableOpacity>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: COLORS.primary,
              marginTop: 5,
            }}>
            {item.location}
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
                <FontAwesomeIcon icon={faStar} size={15} color="#f1c40f" />
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                5.0
              </Text>
            </View>
            <Text style={{fontSize: 13, color: COLORS.grey}}>365 reviews</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: COLORS.grey}}>
              {item.details}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per night
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.xanh,
                marginLeft: 5,
              }}>
              ${item.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}>
              +breakfast
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CheckoutScreen', item)}>
            <Text
              style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Comments />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },

  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },

  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.xanh,
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },

  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.xanh,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default DetailScreen;
