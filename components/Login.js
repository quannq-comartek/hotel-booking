/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import COLORS from '../constants/colors';

const Login = ({placeholder, icon, name, ...otherProps}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.container}>
      {name && <Text>{name}</Text>}
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {icon && <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />}
        <TextInput
          placeholder={placeholder}
          style={styles.textInput}
          autoCapitalize="none"
          secureTextEntry={name === 'Password' ? true : false}
          //{name === 'Password' ? secureTextEntry={true} : null}
          {...otherProps}
        />
        {name === 'Password' && (
          <TouchableOpacity style={{position: 'absolute', right: 0}}>
            <FontAwesomeIcon icon="fa-solid fa-eye-slash" size={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,

    width: '95%',
    padding: Platform.OS === 'android' ? 5 : 15,
    marginVertical: 5,
  },

  icon: {
    marginRight: 10,
    marginLeft: Platform.OS === 'android' ? 10 : 0,
    alignItems: 'center',
  },

  textInput: {
    fontSize: 18,
    width: '100%',
  },
});

export default Login;
