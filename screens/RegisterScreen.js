/* eslint-disable react-native/no-inline-styles */
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import Login from '../components/Login';
import Button from '../components/Button';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  changepassword: Yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both password need to be the same',
    ),
  }),
});

const RegisterScreen = ({navigation}) => {
  const naviLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HomeStay</Text>
      </View>
      <View style={styles.footer}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            changepassword: '',
          }}
          onSubmit={() => navigation.navigate('LoginScreen')}
          validationSchema={validationSchema}>
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <View style={styles.formLogin}>
              <Login
                placeholder="Name"
                icon={faUser}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                name="Name"
                value={values.name}
              />
              {touched.name && (
                <Text style={{color: 'red'}}>{errors.name}</Text>
              )}
              <Login
                placeholder="Email"
                icon={faEnvelope}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                name="Email"
                value={values.email}
              />
              {touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
              )}
              <Login
                placeholder="Password"
                icon={faLock}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                name="Password"
                value={values.password}
              />
              {touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
              )}
              <Login
                placeholder="Confirm password"
                icon={faLock}
                onChangeText={handleChange('changepassword')}
                onBlur={() => setFieldTouched('changepassword')}
                name="Confirm password"
                value={values.changepassword}
              />
              {touched.changepassword && (
                <Text style={{color: 'red'}}>{errors.changepassword}</Text>
              )}
              <Button
                color="xanh"
                colors="white"
                title="Register"
                onPress={handleSubmit}
              />
              <Button
                color="white"
                colors="xanh"
                fontSize={11}
                title="Already have account"
                onPress={naviLogin}
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

  formLogin: {},

  loginText: {},

  textQuestion: {},

  text: {},
});

export default RegisterScreen;
