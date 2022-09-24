import React from 'react';
import {View, Text} from 'react-native';
import AddTodo from '../elements/addTodoForm';

export default function AddNoteScreen({navigation}) {
  return (
    <View>
      <AddTodo />
    </View>
  );
}
