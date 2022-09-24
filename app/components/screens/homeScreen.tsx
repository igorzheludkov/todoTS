import React from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import HeaderBlock from '../blocks/headerBlock';
import BodyBlock from '../blocks/bodyBlock';
import FilterBlock from '../blocks/filterBlock';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <HeaderBlock navigation={navigation} />
      <ScrollView>
        <FilterBlock />
        <BodyBlock />
      </ScrollView>
    </View>
  );
}
