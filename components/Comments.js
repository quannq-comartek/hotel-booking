/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Login from './Login';

import COLORS from '../constants/colors';

import ImagePicker from 'react-native-image-crop-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState('');
  const [displayComment, setDisplayComment] = useState([]);
  const [images, setImages] = useState('');

  // const [storeValue, setStoreValue] = useState({
  //   comment: comments,
  //   image: images,
  // });

  const submitComment = () => {
    setDisplayComment(prev => [
      {ID: Date.now(), Content: comments, Imagess: images},
      ...prev,
    ]);
    setComments('');
    setImages('');
  };

  // useEffect(() => {
  //   //const unsubscribe = navigation.addListener('focus', () => {
  //   getComment();
  //   //});

  //   //return unsubscribe;
  // }, []);

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImages(image.path);
    });
  };

  // const submitComment = async () => {
  //   axios
  //     .post(
  //       `https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/comments`,
  //       storeValue,
  //     )
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error));
  // };

  // const getComment = async () => {
  //   axios
  //     .get(
  //       `https://63200369e3bdd81d8ef08100.mockapi.io/hotelbooking/${id}/comment`,
  //     )
  //     .then(res => setDisplayComment(res.data))
  //     .catch(error => console.log(error));
  // };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 25,
          marginTop: 50,
        }}>
        <Image
          style={{borderRadius: 50, height: 50, width: 50}}
          source={require('../assets/images/onboardImage1.jpeg')}
        />

        <Login
          placeholder="Enter comment"
          value={comments}
          onChangeText={text => setComments(text)}
        />
        <TouchableOpacity
          style={{position: 'absolute', right: 20}}
          onPress={uploadImage}>
          <FontAwesomeIcon
            icon="fa-solid fa-camera"
            color={COLORS.xanh}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress={submitComment}>
          <Text style={{color: COLORS.white, fontSize: 15}}>Comment</Text>
        </TouchableOpacity>
      </View>
      {displayComment.map((comment, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              paddingHorizontal: 40,
            }}>
            {comment.Content && (
              <>
                <View style={{flexDirection: 'column'}}>
                  <Image
                    style={{borderRadius: 50, height: 50, width: 50}}
                    source={require('../assets/images/onboardImage1.jpeg')}
                  />
                  <Login value={comment.Content} />
                </View>
                {comment.Imagess && (
                  <Image
                    source={{uri: comment.Imagess}}
                    style={{
                      height: 80,
                      width: 50,
                      position: 'absolute',
                      right: 20,
                    }}
                  />
                )}
              </>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    backgroundColor: COLORS.xanh,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 50,
  },
});

export default Comments;
