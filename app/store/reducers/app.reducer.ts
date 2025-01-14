import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LanguageState = {
  language: string;
  isGrid: boolean;
  Searches: string[];
  keyboardActive: boolean;
};

const initialState: LanguageState = {
  language: 'en',
  isGrid: true,
  Searches: [],
  keyboardActive: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setGrid: (state) => {
      state.isGrid = true;
    },
    setList: (state) => {
      state.isGrid = false;
    },
    addtoSearch: (state, action: PayloadAction<string>) => {
      state.Searches.unshift(action.payload);
    },
    setKeyboardActive: (state) => {
      state.keyboardActive = true;
    },
    setKeyboardInactive: (state) => {
      state.keyboardActive = false;
    }
  }
});

export const {
  setLanguage,
  setGrid,
  setList,
  addtoSearch,
  setKeyboardActive,
  setKeyboardInactive
} = appSlice.actions;

export default appSlice.reducer;
