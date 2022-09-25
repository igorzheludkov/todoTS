import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import BodyBlock from '../blocks/bodyBlock';
import FilterBlock from '../blocks/filterBlock';

export default function HomeScreen() {
  return (
    <View>
      <View style={s.view}>
        <FilterBlock />
      </View>

      <ScrollView style={s.scrollContainer}>
        <BodyBlock />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  view: {
    zIndex: 2,
  },
  scrollContainer: {
    marginTop: 40,
  },
});
