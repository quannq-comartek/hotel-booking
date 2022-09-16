/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import COLORS from '../constants/colors';

const Map = ({navigation, route}) => {
  const item = route.params;

  // console.log(item.latitude);
  // console.log(item.longitude);

  let lat = parseFloat(item.latitude);
  let long = parseFloat(item.longitude);

  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    let initialRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: lat,
      longitude: long,
    };

    setRegion(initialRegion);
    setLocation(destination);
  }, [lat, long]);

  const renderMap = () => {
    return (
      <MapView
        ref={mapView}
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}>
        {location && (
          <Marker
            key="location"
            coordinate={location}
            tracksViewChanges={false}
            icon={<FontAwesomeIcon icon="fa-solid fa-location-dot" />}
            anchor={{x: 0.5, y: 0.5}}
          />
        )}
      </MapView>
    );
  };

  const renderInfo = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <View
          style={{
            padding: 20,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: COLORS.white,
            marginBottom: 20,
            height: 150,
          }}>
          <View
            style={{
              flexDirection: 'column',

              marginBottom: 20,
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Location: </Text>
            <Text style={{fontSize: 15}}>{item.location}</Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.xanh,
              borderRadius: 10,
              height: 50,
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <FontAwesomeIcon
              icon="fa-solid fa-phone"
              color={COLORS.white}
              size={27}
            />
            <Text
              style={{fontSize: 18, color: COLORS.white, fontWeight: 'bold'}}>
              +1234556776
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      {renderMap()}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 60,
          left: 20,
        }}
        onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-arrow-left"
          color={COLORS.xanh}
          size={30}
        />
      </TouchableOpacity>
      {renderInfo()}
    </SafeAreaView>
  );
};

export default Map;
