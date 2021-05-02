import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import coordinatesReducer from './coordinates/coordinates.reducer';
import mapStyleReducer from './mapStyle/mapStyle.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['mapStyle', 'coordinates'],
};

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
  mapStyle: mapStyleReducer,
});

export default persistReducer(persistConfig, rootReducer);
