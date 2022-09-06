/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';

const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/onboardImage.jpeg')}>
        <View style={styles.details}>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            Discover
          </Text>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            world with us
          </Text>
          <Text style={{color: COLORS.white, fontSize: 20, marginTop: 15}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
            sem non erat vehicula dignissim. Morbi eget congue ante, feugiat.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('LoginScreen')}>
            <View style={styles.btn}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Platform.OS === 'android' ? 'black' : 'black',
                }}>
                Get started
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    marginTop: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
});

export default OnBoardScreen;
