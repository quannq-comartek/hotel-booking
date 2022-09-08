/* eslint-disable react/self-closing-comp */
import {SafeAreaView, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Map = ({navigation}) => {
  const mapView = useRef();
  const [region, setRegion] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    let initialRegion = {
      latitude: 21.021567,
      longitude: 105.82991,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };
    // 20.994963
    // 105.802503
    // 1.5496614931250685
    // 110.36381866919922

    let destination = {
      latitude: 21.021567,
      longitude: 105.82991,
    };

    setRegion(initialRegion);
    setLocation(destination);
  }, []);

  const renderMap = () => {
    return (
      <MapView
        ref={mapView}
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}></MapView>
    );
  };

  return <SafeAreaView style={{flex: 1}}>{renderMap()}</SafeAreaView>;
};

export default Map;
