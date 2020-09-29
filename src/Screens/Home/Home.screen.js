// @flow

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Routes from '../../Routes/Routes';

type Props = {
  navigation: NavigationProp,
};

const HomeScreen = (props: Props) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate(Routes.Details)}>
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
