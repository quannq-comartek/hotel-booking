/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import COLORS from '../constants/colors';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
//import data from '../constants/data';
import Card from '../components/Card';
import TopHotelCard from '../components/TopHotelCard';

import * as apiServices from '../services/apiServices';
import axios from 'axios';

let {width} = Dimensions.get('screen');
let cardWidth = width / 1.8;

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState();

  const scrollX = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getHotelFull();
  }, []);

  // const getHotelFull = async () => {
  //   let results = await apiServices.getHotel();
  //   setData(results);
  //   console.log('getHotelFull', results);
  // };

  const getHotelFull = async () => {
    axios
      .get('https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/hotel', {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      })
      .then(res => {
        //console.log(res);
        setData(res.data);
      })
      .catch(error => console.log(error));
  };

  const getHotelId = async id => {
    axios
      .get(
        `https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/hotel/${id}`,
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      )
      .then(res => {
        console.log('getHotalId', res);
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        marginTop: Platform.OS === 'android' ? 30 : 0,
      }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.header}>
          <View
            style={{
              paddingBottom: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                Find your homestay
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>in </Text>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: COLORS.xanh,
                  }}>
                  HomeStay
                </Text>
              </View>
            </View>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('StatusBookingScreen')}>
              <FontAwesomeIcon
                icon="fa-calendar-days"
                size={25}
                color={COLORS.xanh}
              />
            </TouchableOpacity> */}
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
            <View style={styles.searchContainer}>
              <FontAwesomeIcon
                icon={faSearch}
                size={30}
                style={{marginLeft: 20}}
              />
              <TextInput
                placeholder="Search"
                style={{fontSize: 20, paddingLeft: 10}}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: COLORS.xanh,
              marginTop: 35,
              paddingLeft: 23,
              fontSize: 25,
            }}>
            Explorer
          </Text>
          <View>
            <Animated.FlatList
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: true},
              )}
              horizontal
              data={data}
              contentContainerStyle={{
                paddingVertical: 30,
                paddingLeft: 20,
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <Card
                  hotel={item}
                  index={index}
                  scrollX={scrollX}
                  onPress={() => {
                    getHotelId(item.id);
                    navigation.navigate('DetailScreen', item);
                  }}
                />
              )}
              snapToInterval={cardWidth}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <Text style={{color: COLORS.xanh, fontWeight: 'bold'}}>
              Top Homestay
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('ListScreen')}>
              <Text style={{color: COLORS.primary}}>Show all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              marginTop: 20,
              paddingBottom: 30,
            }}
            renderItem={({item}) => <TopHotelCard hotel={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
  },

  searchContainer: {
    height: 50,
    backgroundColor: COLORS.bacha,
    marginTop: 15,
    marginLeft: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
