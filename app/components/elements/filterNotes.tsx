import React from 'react';
import {ButtonFilterNote} from './../ui/buttons';

import {View} from 'react-native';

import {useAppSelector, useAppDispatch} from './../../hooks/reduxHooks';

import {setFilter} from '../../reducer/filterSlice';

export default function FilterNotes() {
  const filter = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();
  console.log('filter', filter);

  const filterLabels = [
    {name: 'Всі', id: 'all'},
    {name: 'Виконані', id: 'completed'},
    {name: 'Невиконані', id: 'uncompleted'},
  ];

  return (
    <View>
      {filterLabels.map(i => (
        <View key={i.id}>
          <ButtonFilterNote onPress={() => dispatch(setFilter(i.id))}>
            {i.name}
          </ButtonFilterNote>
        </View>
      ))}
    </View>
  );
}
