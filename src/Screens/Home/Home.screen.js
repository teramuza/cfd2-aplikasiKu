// @flow

import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Routes from '../../Routes/Routes';
import {Styles} from './Home.screen.style';
import {keyExtractor} from '../../Utils/Helper.utils';
import Images from '../../Themes/Images';

type Props = {
  navigation: NavigationProp,
};

const HomeScreen = (props: Props) => {
  const {navigation} = props;

  const renderCardItem = ({item}) => {
    const image = {uri: item.image_url};
    return (
      <View style={Styles.card}>
        <Image source={image} style={Styles.cardBanner} />
        <View style={Styles.contentText}>
          <Text style={Styles.textCardTitle}>{item.title}</Text>
          <Text style={Styles.textCard}>{item.content}</Text>
        </View>
      </View>
    );
  };

  const dataKartu = [
    {
      image_url:
        'https://storage.googleapis.com/fastwork-static/5dac4749-0e32-4e99-8f2e-4ec60651c418.jpg',
      title: 'Ini Kartu satu',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      image_url:
        'https://storage.googleapis.com/fastwork-static/5dac4749-0e32-4e99-8f2e-4ec60651c418.jpg',
      title: 'Ini Kartu satu',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      image_url:
        'https://storage.googleapis.com/fastwork-static/5dac4749-0e32-4e99-8f2e-4ec60651c418.jpg',
      title: 'Ini Kartu satu',
      content: 'Lorem ipsum dolor sit amet',
    },
  ];

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image source={Images.banner} style={Styles.banner} />
      </View>
      <View style={Styles.content}>
        <FlatList
          style={Styles.flatlistCard}
          keyExtractor={keyExtractor}
          data={dataKartu}
          renderItem={renderCardItem}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </View>
  );
};

export default HomeScreen;
