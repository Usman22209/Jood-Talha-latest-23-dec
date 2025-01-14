import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customCreateApi from 'services/customCreateApi';
import authPersistReducer from './auth-persist.reducer';
import appReducer from './app.reducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: [], //  Only the state of the specified reducers will be saved and restored upon app reload
  blacklist: [] //  The state of all reducers except those specified in the blacklist will be saved and restored
};

const authPersistReducerConfig = persistReducer(authPersistConfig, authPersistReducer);

const rootReducer = combineReducers({
  authPersist: authPersistReducerConfig,
  app: appReducer,
  [customCreateApi.reducerPath]: customCreateApi.reducer
});

export default rootReducer;
