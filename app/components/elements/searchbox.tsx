import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {ButtonAddNote} from '../ui/buttons';

import {useAppSelector, useAppDispatch} from './../../hooks/reduxHooks';
import {setSearch} from './../../reducer/searchSlice';

export default function SearchBox() {
  const search = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();

  return (
    <View>
      <TextInput
        value={search.search}
        placeholder="Пошук"
        onChangeText={text => dispatch(setSearch(text))}
      />
      {/* <ButtonAddNote onPress={props.NavToAddNote}>Додати</ButtonAddNote> */}
    </View>
  );
}
