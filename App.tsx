import React from 'react';
import {StatusBar} from 'react-native';

import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/components/screens/homeScreen';
import AddNoteScreen from './app/components/screens/addNoteScreen';
import store from './app/store';
import SearchBox from './app/components/elements/searchbox';
import {ButtonAddNote} from './app/components/ui/buttons';

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
            options={({navigation}) => ({
              headerTitle: () => <SearchBox />,
              headerRight: () => (
                <ButtonAddNote onPress={() => navigation.navigate('AddNote')}>
                  Додати
                </ButtonAddNote>
              ),
            })}
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
