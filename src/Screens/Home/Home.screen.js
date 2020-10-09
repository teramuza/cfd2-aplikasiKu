// @flow

import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Routes from '../../Routes/Routes';
import {Styles} from './Home.screen.style';

type Props = {
  navigation: NavigationProp,
};

const HomeScreen = (props: Props) => {
  const {navigation} = props;
  const image_url = {
    uri:
      'https://storage.googleapis.com/fastwork-static/5dac4749-0e32-4e99-8f2e-4ec60651c418.jpg',
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image source={image_url} style={Styles.banner} />
      </View>
      <View style={Styles.content} />
    </View>
  );
};

export default HomeScreen;
