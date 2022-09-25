import React from 'react';
import {View} from 'react-native';
import AddTodoForm from '../elements/addTodoForm';

export default function AddNoteScreen({navigation}) {
  return (
    <View>
      <AddTodoForm navigation={navigation} />
    </View>
  );
}
