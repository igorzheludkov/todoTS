import React from 'react';
import {ButtonFilterNote} from './../ui/buttons';

import {View, StyleSheet} from 'react-native';

import {useAppDispatch} from './../../hooks/reduxHooks';

import {setFilter} from '../../reducer/filterSlice';

export default function FilterNotes() {
  const dispatch = useAppDispatch();

  const filterLabels = [
    {name: 'Всі', id: 'all'},
    {name: 'Виконані', id: 'completed'},
    {name: 'Невиконані', id: 'uncompleted'},
  ];

  return (
    <View style={style.wrapper}>
      {filterLabels.map(i => (
        <View style={style.element} key={i.id}>
          <ButtonFilterNote onPress={() => dispatch(setFilter(i.id))}>
            {i.name}
          </ButtonFilterNote>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  element: {
    marginHorizontal: 2,
    marginVertical: 5,
  },
});
