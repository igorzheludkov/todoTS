import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

import {TextInput, View, Button, Text} from 'react-native';
import {addNote} from '../../reducer/notesSlice';

import {useAppDispatch} from '../../hooks/reduxHooks';

export default function AddTodo() {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [form, setForm] = useState({
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    status: 0,
  });
  const dispatch = useAppDispatch();

  function submitHandler() {
    dispatch(addNote(form));
  }

  function inputHandler(value: string, text: string) {
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
      <DatePicker
        modal
        open={openDatePicker}
        date={form.date}
        onConfirm={date => {
          setOpenDatePicker(false);
          setForm({...form, date: date});
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
      <Text>
        Дата {form.date.getDate()}.{form.date.getMonth() + 1}.
        {form.date.getFullYear()}
      </Text>
      <Text>
        Час {form.date.getHours()}.{form.date.getMinutes()}
      </Text>
      <Button
        title="Змінити дату"
        color="#841584"
        onPress={() => setOpenDatePicker(true)}
      />
      <Button title="Додати" color="#841584" onPress={submitHandler} />
    </View>
  );
}
