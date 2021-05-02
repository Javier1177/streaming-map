import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import coordinatesReducer from './coordinates/coordinates.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
});

export default persistReducer(persistConfig, rootReducer);
