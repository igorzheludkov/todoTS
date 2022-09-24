import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface FilterState {
  filterStatus: string;
}

const initialState: FilterState = {
  filterStatus: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      console.log(state);
      console.log(action);
      return {filterStatus: action.payload};
      // return {
      //   ...state,
      //   filterStatus: action.payload,
      // };
    },
  },
});

export const {setFilter} = filterSlice.actions;

export const filterNotes = (state: RootState) => state.filter;

export default filterSlice.reducer;
