import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';

import {TextInput, View, Button, Text, Image, StyleSheet} from 'react-native';
import {addNote} from '../../reducer/notesSlice';

import {useAppDispatch} from '../../hooks/reduxHooks';

import NotesArray from '../../interfaceAndTypes/notesArrayInterface';

import getDate from '../../lib/getDate';

export default function AddTodoForm({navigation}) {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const date = getDate(new Date());

  const [form, setForm] = useState<NotesArray>({
    id: 0,
    title: '',
    description: '',
    date: date.dateRender,
    status: 0,
    picture: '',
  });
  const dispatch = useAppDispatch();

  function submitHandler() {
    dispatch(addNote(form));
    navigation.navigate('Home');
  }

  function inputHandler(value: string, text: string) {
    setForm({...form, [value]: text});
  }

  async function picHandler() {
    const res = (r: any) => {
      if (r.assets) {
        setForm({...form, picture: r.assets[0].uri ?? ''});
        console.log('photo added');
      } else if (r.didCancel) {
        setForm({...form, picture: ''});
        console.log('photo selection dismissed');
      }
    };

    launchImageLibrary({mediaType: 'photo'}, res);
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
      {form.picture && <Image style={style.pic} source={{uri: form.picture}} />}
      <DatePicker
        modal
        open={openDatePicker}
        date={date.dateObject}
        onConfirm={d => {
          setOpenDatePicker(false);
          setForm({...form, date: getDate(d).dateRender});
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
      <Text>
        Дата {form.date.day}.{form.date.month}.{form.date.year}
      </Text>
      <Text>
        Час {form.date.hour}.{form.date.minutes}
      </Text>
      <Button title="Додати зображення" color="#841584" onPress={picHandler} />
      <Button
        title="Змінити дату"
        color="#841584"
        onPress={() => setOpenDatePicker(true)}
      />
      <Button title="Зберегти" color="#841584" onPress={submitHandler} />
    </View>
  );
}

const style = StyleSheet.create({
  pic: {
    width: 200,
    height: 180,
  },
});
