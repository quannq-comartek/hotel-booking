/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import CardList from '../components/CardList';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import COLORS from '../constants/colors';

const ListScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState();

  const searchFilter = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
        //return item.name.toLowerCase().includes(text.toLowerCase());
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(data);
      setSearch(text);
    }
  };

  useEffect(() => {
    getHotelFull();
  }, []);

  const getHotelFull = async () => {
    axios
      .get('https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/hotel', {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      })
      .then(res => {
        setData(res.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            marginTop: 50,
          }}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} size={28} color={COLORS.xanh} />
        </TouchableOpacity>
        <View>
          <View style={styles.searchContainer}>
            <FontAwesomeIcon
              icon={faSearch}
              size={20}
              style={{marginLeft: 20}}
            />
            <TextInput
              placeholder="Search"
              style={{fontSize: 20, paddingLeft: 10}}
              value={search}
              onChangeText={text => searchFilter(text)}
            />
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={list => list.id.toString()}
          renderItem={({item}) => (
            <CardList
              hotel={item}
              onPress={() => navigation.navigate('DetailScreen', item)}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 45,
    width: '90%',
    backgroundColor: COLORS.white,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListScreen;
