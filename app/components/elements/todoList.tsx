import React, {useState, useEffect, useMemo} from 'react';
import {ButtonCheckbox, ButtonRemoveTask} from './../ui/buttons';

import {Text, View, StyleSheet} from 'react-native';

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
    <View style={style.wrapper}>
      {render.map(i => (
        <View style={style.card} key={i.id}>
          <Text style={style.title}>{i.title}</Text>
          <Text style={style.description}>{i.description}</Text>
          <Text style={style.description}>{i.date}</Text>
          <View style={style.wrapperBtn}>
            <ButtonRemoveTask onPress={() => dispatch(removeNote(i.id))}>
              Видалити
            </ButtonRemoveTask>
            <ButtonCheckbox
              status={i.status}
              onPress={() => dispatch(setNoteStatus(i.id))}>
              {i.status ? 'Виконано' : 'Завершити'}
            </ButtonCheckbox>
          </View>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    // padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 16,
  },
  wrapperBtn: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 20,
    // backgroundColor: 'grey'
  },
});
