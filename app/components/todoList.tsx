import React from 'react';
import {ButtonSubmit} from './UI/buttons';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {useAppSelector, useAppDispatch} from './../hooks/reduxHooks';

import {removeNote} from './../reducer/notesSlice';

export default function TodoList() {
  const notes = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();
  console.log('notes', notes);

  return (
    <View>
      {notes.notesArray.map(i => (
        <View key={i.id}>
          <Text>{i.title}</Text>
          <Text>{i.description}</Text>
          <ButtonSubmit onPress={() => dispatch(removeNote(i.id))}>
            Видалити
          </ButtonSubmit>
        </View>
      ))}
    </View>
  );

  // omit rendering logic
}
