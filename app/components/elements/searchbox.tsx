import React from 'react';
import {View, TextInput, StyleSheet, TextStyle} from 'react-native';

import {useAppSelector, useAppDispatch} from './../../hooks/reduxHooks';
import {setSearch} from './../../reducer/searchSlice';

interface Styles {
  textInput: TextStyle;
}

export default function SearchBox() {
  const search = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();

  return (
    <View>
      <TextInput
        value={search.search}
        placeholder="Пошук"
        onChangeText={text => dispatch(setSearch(text))}
        style={style.textInput}
      />
    </View>
  );
}

const style = StyleSheet.create<Styles>({
  textInput: {
    width: 220,
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 5,
  },
});
