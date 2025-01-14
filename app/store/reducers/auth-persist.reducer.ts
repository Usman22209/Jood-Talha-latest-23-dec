import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

interface AuthPersistState {
  token: string | null;
  user: Record<string, any> | null;
}

const initialState: AuthPersistState = {
  token: null,
  user: null
};

const authPersistSlice = createSlice({
  name: 'authPersist',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<Record<string, any> | null>) => {
      state.user = action.payload;
    },
    clearAuth: (state) => {
      state.token = null;
      state.user = null;
    },
    logout: () => initialState // Resets the state to the initial values
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState); // Reset state on PURGE
  }
});

export const selectIsAuthenticated = createSelector(
  [(state: { authPersist: AuthPersistState }) => state.authPersist.token],
  (token) => Boolean(token)
);

export const selectUser = (state: { authPersist: AuthPersistState }) =>
  state.authPersist.user;

// TODO: Configure this with state
export const selectIsRTL = (state: { authPersist: AuthPersistState }) => false;

// Exports
export const { setToken, clearAuth, setUser, logout } = authPersistSlice.actions;
export default authPersistSlice.reducer;
