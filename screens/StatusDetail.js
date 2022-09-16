/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, StatusBar, SafeAreaView, Platform} from 'react-native';
import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import COLORS from '../constants/colors';
import Button from '../components/Button';

const StatusDetail = ({navigation}) => {
  return (
    <SafeAreaView style={{marginTop: Platform.OS === 'android' ? 50 : 0}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200,
        }}>
        <FontAwesomeIcon
          icon="fa-solid fa-rocket"
          size={150}
          color={COLORS.xanh}
        />
      </View>
      <View style={{marginTop: 100, alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Please contact the host to confirm booking and payment{' '}
        </Text>
      </View>
      <View style={{paddingHorizontal: 50, marginTop: 50}}>
        <Button
          title="I understand"
          color="xanh"
          colors="white"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default StatusDetail;
