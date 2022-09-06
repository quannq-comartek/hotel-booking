import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../constants/colors';
import Login from '../components/Login';
import Button from '../components/Button';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HomeStay</Text>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={() => navigation.navigate('HomeScreen')}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <View style={styles.formLogin}>
            <Text style={styles.loginText}>Login</Text>
            <Login
              textContentType="emailAddress"
              keybroadType="email-address"
              placeholder="Email"
              icon={faEnvelope}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && (
              <Text style={{color: 'red'}}>{errors.email}</Text>
            )}
            <Login
              textContentType="password"
              placeholder="Password"
              icon={faLock}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            {touched.password && (
              <Text style={{color: 'red'}}>{errors.password}</Text>
            )}

            <Button title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <View style={styles.textQuestion}>
        <Text style={styles.text}>Create an account?</Text>
        <Button
          title="Sign up"
          onPress={() => navigation.navigate('RegisterScreen')}
          color={COLORS.bacha}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    position: 'absolute',
    top: '13%',
    left: '30%',
    color: COLORS.bacha,
    fontSize: 30,
    fontWeight: 'bold',
  },

  formLogin: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: 350,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
  },

  textQuestion: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: COLORS.white,
    fontSize: 15,
  },
});

export default LoginScreen;
