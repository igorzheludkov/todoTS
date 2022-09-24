import React from 'react';
import {View} from 'react-native';
import SearchBox from '../elements/searchbox';
import {ButtonAddNote} from '../ui/buttons';

export default function HeaderBlock({navigation}) {
  return (
    <View>
      <SearchBox />
      <ButtonAddNote onPress={() => navigation.navigate('AddNote')}>
        Додати
      </ButtonAddNote>
    </View>
  );
}
