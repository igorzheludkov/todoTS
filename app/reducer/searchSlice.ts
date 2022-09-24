import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      return {
        search: action.payload,
      };
    },
  },
});

export const {setSearch} = searchSlice.actions;

export const searchNotes = (state: RootState) => state.search;

export default searchSlice.reducer;
