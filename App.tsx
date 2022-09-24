import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/components/screens/homeScreen';
import AddNoteScreen from './app/components/screens/addNoteScreen';
import store from './app/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Нотатки'}}
          />
          <Stack.Screen
            name="AddNote"
            component={AddNoteScreen}
            options={{title: 'Add Note'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

export default App;
