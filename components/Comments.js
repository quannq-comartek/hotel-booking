/* eslint-disable react-native/no-inline-styles */
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

import Login from './Login';

import COLORS from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ImagePicker from 'react-native-image-crop-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Comments = () => {
  const [comments, setComments] = useState('');
  const [displayComment, setDisplayComment] = useState([]);
  const [images, setImages] = useState('');

  const submitComment = () => {
    setDisplayComment(prev => [
      {ID: Date.now(), Content: comments, Imagess: images},
      ...prev,
    ]);
    setComments('');
    setImages('');
  };

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImages(image.path);
    });
  };

  const addToCommentHandler = async id => {
    let itemComment = await AsyncStorage.getItem('commentItem');
    itemComment = JSON.parse(itemComment);
    if (itemComment) {
      let array = itemComment;
      array.push(id);

      try {
        await AsyncStorage.setItem('commentItem', JSON.stringify(array));
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);

      try {
        await AsyncStorage.setItem('commentItem', JSON.stringify(array));
      } catch (error) {
        return error;
      }
    }
  };

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
                {/* Neu ma co anh thi se hien thi o day, nhung ma state thi luon luu anh */}
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
