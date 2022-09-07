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
import React from 'react';
import data from '../constants/data';
import CardList from '../components/CardList';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';

import COLORS from '../constants/colors';

const ListScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              size={30}
              color={COLORS.xanh}
            />
          </TouchableOpacity>
        </View>
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
            />
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={list => list.id.toString()}
          renderItem={({item}) => <CardList hotel={item} />}
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
