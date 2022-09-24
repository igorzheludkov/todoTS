import {configureStore} from '@reduxjs/toolkit';
import notesSlice from './reducer/notesSlice';

const store = configureStore({
  reducer: {
    notes: notesSlice,
    // addNote: addNoteReducer,
    // filter: filterReducer,
    // viewMode: viewModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
