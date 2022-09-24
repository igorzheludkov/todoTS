import React from 'react';
import {View} from 'react-native';
import FilterNotes from '../elements/filterNotes';
import {ButtonRemove} from '../ui/buttons';
import {useAppDispatch} from './../../hooks/reduxHooks';
import {clearState} from './../../reducer/notesSlice';

export default function FilterBlock() {
  const dispatch = useAppDispatch();

  return (
    <View>
      <FilterNotes />
      <ButtonRemove onPress={() => dispatch(clearState(true))}>
        Видалити нотатки
      </ButtonRemove>
    </View>
  );
}
