import React, {useState} from 'react';

import {TextInput, View, Button} from 'react-native';
import {addNote} from '../../reducer/notesSlice';

import {useAppDispatch} from '../../hooks/reduxHooks';

export default function AddTodo() {
  const [form, setForm] = useState({
    id: 0,
    title: '',
    description: '',
    date: '',
    status: 0,
  });
  const dispatch = useAppDispatch();

  function submitHandler() {
    dispatch(addNote(form));
  }

  function inputHandler(value: string, text: string) {
    setForm({...form, [value]: text});
  }

  return (
    <View>
      <TextInput
        value={form.title}
        placeholder="Введіть заголовок"
        onChangeText={text => inputHandler('title', text)}
      />
      <TextInput
        value={form.description}
        placeholder="Введіть детальний опис"
        onChangeText={text => inputHandler('description', text)}
      />

      <Button title="Додати" color="#841584" onPress={submitHandler} />
    </View>
  );
}
