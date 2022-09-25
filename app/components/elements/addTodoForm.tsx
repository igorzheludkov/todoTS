import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';

import {TextInput, View, Text, Image, StyleSheet} from 'react-native';
import {ButtonSubmit, ButtonEdit} from '../ui/buttons';
import {addNote} from '../../reducer/notesSlice';

import {useAppDispatch} from '../../hooks/reduxHooks';

import NotesArray from '../../interfaceAndTypes/notesArrayInterface';

import getDate from '../../lib/getDate';

export default function AddTodoForm({navigation}: any) {
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
    <View style={style.container}>
      <TextInput
        style={style.inputTitle}
        value={form.title}
        placeholder="Введіть заголовок"
        onChangeText={text => inputHandler('title', text)}
      />
      <TextInput
        style={style.inputDescription}
        value={form.description}
        placeholder="Введіть детальний опис"
        onChangeText={text => inputHandler('description', text)}
      />
      <View style={style.daytime}>
        <Text>
          Дата {form.date.day}.{form.date.month}.{form.date.year}
          {'   '}
        </Text>
        <Text>
          Час {form.date.hour}.{form.date.minutes}
        </Text>
      </View>
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

      <View style={style.buttonsContainer}>
        <ButtonEdit onPress={picHandler}>Додати зображення</ButtonEdit>
        <ButtonEdit onPress={() => setOpenDatePicker(true)}>
          Змінити дату
        </ButtonEdit>
      </View>
      <ButtonSubmit onPress={submitHandler}>Зберегти</ButtonSubmit>
    </View>
  );
}

const style = StyleSheet.create({
  pic: {
    // width: 200,
    height: 180,
  },
  container: {
    paddingVertical: 20,
  },
  inputTitle: {
    padding: 5,
    margin: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    height: 40,
  },
  inputDescription: {
    padding: 5,
    margin: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    height: 120,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 30,
  },
  daytime: {
    // width: 300,
    paddingVertical: 20,
    paddingHorizontal: 5,
    // flex: 1,
    flexDirection: 'row',
  },
});
