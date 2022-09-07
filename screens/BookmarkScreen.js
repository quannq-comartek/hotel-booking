import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const BookmarkScreen = ({route}) => {
  const item = route.params;

  return (
    <SafeAreaView>
      <Text>Bookmark</Text>
    </SafeAreaView>
  );
};

export default BookmarkScreen;
