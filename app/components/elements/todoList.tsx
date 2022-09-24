import React, {useState, useEffect, useMemo} from 'react';
import {ButtonCheckbox, ButtonSubmit} from './../ui/buttons';

import {Text, View} from 'react-native';

import {useAppSelector, useAppDispatch} from './../../hooks/reduxHooks';

import {removeNote, setNoteStatus} from './../../reducer/notesSlice';

export default function TodoList() {
  const notes = useAppSelector(state => state.notes);
  const filter = useAppSelector(state => state.filter);
  const search = useAppSelector(state => state.search);
  const dispatch = useAppDispatch();

  const [filtered, setFiltered] = useState(notes.notesArray);

  useEffect(() => {
    switch (filter.filterStatus) {
      case 'uncompleted':
        setFiltered(notes.notesArray.filter(i => i.status === 0));
        break;
      case 'completed':
        setFiltered(notes.notesArray.filter(i => i.status === 1));
        break;
      default:
        setFiltered(notes.notesArray);
    }
  }, [filter, search, notes]);

  const render = useMemo(
    () =>
      filtered.filter(i =>
        i.title.toLowerCase().includes(search.search.toLowerCase()),
      ),
    [search, filtered],
  );

  return (
    <View>
      {render.map(i => (
        <View key={i.id}>
          <Text>{i.title}</Text>
          <Text>{i.description}</Text>
          <ButtonSubmit onPress={() => dispatch(removeNote(i.id))}>
            Видалити
          </ButtonSubmit>
          <ButtonCheckbox
            status={i.status}
            onPress={() => dispatch(setNoteStatus(i.id))}>
            {i.status ? 'Виконано' : 'Невиконано'}
          </ButtonCheckbox>
        </View>
      ))}
    </View>
  );
}
