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
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constants/colors';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
import data from '../constants/data';
import Card from '../components/Card';
import TopHotelCard from '../components/TopHotelCard';

let {width} = Dimensions.get('screen');
let cardWidth = width / 1.8;

const HomeScreen = ({navigation}) => {
  const [bookMark, setBookMark] = useState([]);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  // const addToBookMarkHandler = () => {
  //   setBookMark(prev => [...prev, bookMark]);
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView>
        <View style={styles.header}>
          <View
            style={{
              paddingBottom: 15,
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
          </View>
          <View>
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
          </View>
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
                  onPress={() => navigation.navigate('DetailScreen', item)}
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
