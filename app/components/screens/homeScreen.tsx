import React from 'react';
import {View, ScrollView} from 'react-native';
import BodyBlock from '../blocks/bodyBlock';
import FilterBlock from '../blocks/filterBlock';

export default function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <FilterBlock />
        <BodyBlock />
      </ScrollView>
    </View>
  );
}
