import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../constants/colors';

const Button = ({onPress, title, color}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 17,
  },

  text: {
    color: COLORS.white,
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingHorizontal: 25,
    paddingVertical: 1,
  },
});

export default Button;
