import React from 'react';
import {View, StyleSheet} from 'react-native';
import FilterNotes from '../elements/filterNotes';
import {ButtonRemove} from '../ui/buttons';
import {useAppDispatch} from './../../hooks/reduxHooks';
import {clearState} from './../../reducer/notesSlice';

export default function FilterBlock() {
  const dispatch = useAppDispatch();

  return (
    <View style={style.wrapper}>
      <FilterNotes />
      <View style={style.element}>
        <ButtonRemove
          onPress={() => {
            dispatch(clearState(true));
          }}>
          Видалити нотатки
        </ButtonRemove>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  element: {
    marginHorizontal: 2,
    marginVertical: 5,
  },
});
