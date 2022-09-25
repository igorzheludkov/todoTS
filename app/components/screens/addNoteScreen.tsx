import React from 'react';
import {ScrollView} from 'react-native';
import AddTodoForm from '../elements/addTodoForm';

export default function AddNoteScreen({navigation}: any) {
  return (
    <ScrollView>
      <AddTodoForm navigation={navigation} />
    </ScrollView>
  );
}
