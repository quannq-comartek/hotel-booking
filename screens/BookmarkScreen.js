/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import CardBookmark from '../components/CardBookmark';

import axios from 'axios';

const CartList = ({navigation}) => {
  const [product, setProduct] = useState([]);
  //const [total, setTotal] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [getData, navigation]);

  const getData = async () => {
    axios
      .get('https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/bookmark')
      .then(res => {
        setProduct(res.data);
      })
      .catch(error => console.log(error));
  };

  const deleteData = async id => {
    await axios
      .delete(
        `https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/bookmark/${id}`,
      )
      .then(res => getData())
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={{marginTop: Platform.OS === 'android' ? 50 : 0}}>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 50,
          }}>
          Bookmark
        </Text>
        <View>
          {product &&
            product.map((item, index) => {
              return (
                <Swipeable
                  renderRightActions={() => {
                    return (
                      <TouchableOpacity
                        style={{justifyContent: 'center', alignItems: 'center'}}
                        onPress={() => deleteData(item.id)}>
                        <FontAwesomeIcon
                          icon="fa-solid fa-trash"
                          color="#e74c3c"
                          size={30}
                        />
                      </TouchableOpacity>
                    );
                  }}
                  key={index}>
                  <CardBookmark
                    hotel={item}
                    key={index}
                    //onPress2={() => deleteData(item.id)}
                    onPress1={() => navigation.navigate('DetailScreen', item)}
                  />
                </Swipeable>
              );
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartList;
