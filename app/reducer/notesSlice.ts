import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface NotesArray {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface NotesState {
  notesArray: NotesArray[];
  loading: boolean;
  error: boolean;
}

const initialState: NotesState = {
  notesArray: [
    {
      id: 0,
      title: 'Hello world',
      description: 'Детальніше про нотатку',
      date: '2022-09-26T09.00',
    },
  ],
  loading: false,
  error: false,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        notesArray: [
          ...state.notesArray,
          {...action.payload, id: nextTodoId(state.notesArray)},
        ],
      };
    },
    removeNote: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        notesArray: [...state.notesArray.filter(i => i.id !== action.payload)],
      };
    },
    // removeNote: state => {
    //   state.value -= 1;
    // },
    // removeAll: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

function nextTodoId(todos: any) {
  return todos.length + 1;
}

export const {addNote, removeNote} = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
