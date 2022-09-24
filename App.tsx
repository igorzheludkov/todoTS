import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {Provider as ReduxProvider} from 'react-redux';
import store from './app/store';
import TodoList from './app/components/todoList';
import AddTodo from './app/components/addTodo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar />
          <View>
            <AddTodo />
            <TodoList />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;
