// @flow

import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {AppStatusBar} from '../../Components';
import {Colors} from '../../Themes/Colors';

type Props = {
  navigation: NavigationProp,
};

const initialState = {
  name: 'Tera',
  age: 17,
};

const DetailsScreen = ({navigation}: Props) => {
  const [state, setState] = useState(initialState);
  const {name, age} = state;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AppStatusBar backgroundColor={Colors.BLACK} barStyle="light-content" />
      <Text onPress={() => setState({...state, age: age + 1})} style={{fontSize: 30}}>
        {name + ' (' + age + ')'}
      </Text>
    </View>
  );
};

export default DetailsScreen;
