import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface NotesArray {
  id: number;
  title: string;
  description: string;
  date: Date;
  status: number;
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
      title: 'Hello world1',
      description: 'Детальніше про нотатку',
      date: new Date(),
      status: 0,
    },
    {
      id: 1,
      title: 'Hello world2',
      description: 'Детальніше про нотатку',
      date: new Date(),
      status: 1,
    },
    {
      id: 2,
      title: 'Hello world3',
      description: 'Детальніше про нотатку',
      date: new Date(),
      status: 0,
    },
  ],
  loading: false,
  error: false,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NotesArray>) => {
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
    setNoteStatus: (state, action: PayloadAction<number>) => {
      return state.notesArray.forEach(element => {
        if (element.id === action.payload) {
          element.status === 1 ? (element.status = 0) : (element.status = 1);
        }
      });
    },
    clearState: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        return {...initialState};
      }
    },
  },
});

function nextTodoId(todos: any) {
  return todos.length + 1;
}

export const {addNote, removeNote, setNoteStatus, clearState} =
  notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
