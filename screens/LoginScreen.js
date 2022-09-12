/* eslint-disable react-native/no-inline-styles */
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constants/colors';
import Login from '../components/Login';
import Button from '../components/Button';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {storeData, getData} from '../hooks/useAsyncStorage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = ({navigation}) => {
  const sigupNavi = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HomeStay</Text>
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{email: '', password: ''}}
          enableReinitialize
          onSubmit={() => navigation.navigate('HomeScreen')}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <View style={styles.formLogin}>
              <Login
                textContentType="emailAddress"
                keybroadType="email-address"
                icon={faEnvelope}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                name="Email"
                placeholder="Email"
              />
              {touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
              <Login
                textContentType="password"
                icon={faLock}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                name="Password"
                placeholder="Password"
              />
              {touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
              <View
                style={{
                  position: 'absolute',
                  top: Platform.OS === 'android' ? 200 : 175,
                  right: 0,
                  marginTop: 10,
                }}>
                <Button
                  color="white"
                  colors="xanh"
                  fontSize={10}
                  title="Forgot your password"
                />
              </View>

              <Button colors="white" title="Login" onPress={handleSubmit} />
              <Button
                color="white"
                colors="xanh"
                title="Sign up"
                onPress={sigupNavi}
              />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.xanh,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },

  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  footer: {
    flex: 4,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  title: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 35,
  },
});

export default LoginScreen;
