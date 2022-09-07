/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

import profiles from '../constants/profile';
import COLORS from '../constants/colors';

const UserScreen = () => {
  const [profile, setProfile] = useState({});
  const [editing, setEditing] = useState(null);
  const [noti, setNoti] = useState(true);

  const handleEdit = (name, text) => {
    profile[name] = text;
    setProfile(profile);
  };

  const toggleEdit = name => {
    setEditing(!editing ? name : null);
  };

  const renderEdit = name => {
    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={text => handleEdit([name], text)}
        />
      );
    }
    return <Text style={{fontWeight: 'bold'}}>{profiles[name]}</Text>;
  };

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 40,
          marginTop: 60,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>User</Text>
        <TouchableOpacity>
          <Image source={profiles.avatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: 60}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 40,
              paddingBottom: 30,
            }}>
            <View>
              <Text
                style={{color: COLORS.grey, marginBottom: 10, fontSize: 20}}>
                Username
              </Text>
              {renderEdit('username')}
            </View>
            <Text
              style={{color: COLORS.xanh, fontSize: 15, marginTop: 30}}
              onPress={() => toggleEdit('username')}>
              {editing === 'username' ? 'Save' : 'Edit'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 40,
              paddingBottom: 30,
            }}>
            <View>
              <Text
                style={{color: COLORS.grey, marginBottom: 10, fontSize: 20}}>
                Location
              </Text>
              {renderEdit('location')}
            </View>
            <Text
              style={{color: COLORS.xanh, fontSize: 15, marginTop: 30}}
              onPress={() => toggleEdit('location')}>
              {editing === 'location' ? 'Save' : 'Edit'}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 40,
              paddingBottom: 30,
            }}>
            <View>
              <Text
                style={{color: COLORS.grey, marginBottom: 10, fontSize: 20}}>
                Email
              </Text>
              <Text style={{fontWeight: 'bold'}}>{profiles.email}</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 40,
                paddingTop: 30,
              }}>
              <Text style={{fontSize: 17}}>Notifications</Text>
              <Switch value={noti} onValueChange={value => setNoti(value)} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

UserScreen.defaultProps = {
  profile: profiles,
};

const styles = StyleSheet.create({
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
});

export default UserScreen;
