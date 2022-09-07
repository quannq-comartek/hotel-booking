import {View, TextInput, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import COLORS from '../constants/colors';

const Login = ({placeholder, icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bacha,
    borderRadius: 10,
    flexDirection: 'row',
    width: '85%',
    padding: Platform.OS === 'android' ? 5 : 15,
    marginVertical: 10,

    alignItems: 'center',
  },

  icon: {
    marginRight: 10,
    marginLeft: Platform.OS === 'android' ? 10 : 0,
  },

  textInput: {
    fontSize: 18,
  },
});

export default Login;
