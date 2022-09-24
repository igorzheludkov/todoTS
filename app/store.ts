import {configureStore} from '@reduxjs/toolkit';
import notesSlice from './reducer/notesSlice';
import filterSlice from './reducer/filterSlice';
import searchSlice from './reducer/searchSlice';

const store = configureStore({
  reducer: {
    notes: notesSlice,
    filter: filterSlice,
    search: searchSlice,
    // viewMode: viewModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
