import React, {useState} from 'react';

import {Text, TextInput, View, Button} from 'react-native';
import {addNote} from '../reducer/notesSlice';

import {useAppSelector, useAppDispatch} from './../hooks/reduxHooks';

// import {addNote} from './../reducer/notesSlice';

export default function AddTodo() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
  });
  const dispatch = useAppDispatch();

  function submitHandler() {
    dispatch(addNote(form));
  }

  function inputHandler(value: type, text: type) {
    setForm({...form, [value]: text});
  }
  console.log(form);

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
