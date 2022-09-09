import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../constants/colors';

const Button = ({
  onPress,
  title,
  color = 'xanh',
  colors = 'xanh',
  fontSize = 15,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: COLORS[color]}]}
      onPress={onPress}>
      <Text
        style={[styles.text, {color: COLORS[colors]}, {fontSize: fontSize}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //backgroundColor: COLORS.xanh,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },

  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingHorizontal: 25,
    paddingVertical: 1,
  },
});

export default Button;
