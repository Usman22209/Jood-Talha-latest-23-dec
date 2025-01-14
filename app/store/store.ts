import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore
} from 'redux-persist';
import customCreateApi from 'services/customCreateApi';
import rootReducer from './reducers/root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat([customCreateApi.middleware]),
  devTools: process.env.IS_DEVELOPMENT ? true : false
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
