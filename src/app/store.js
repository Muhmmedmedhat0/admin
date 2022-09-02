import { configureStore, combineReducers } from '@reduxjs/toolkit';
import user from './slices/user';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['user'],
};
const authPersistConfig = {
  key: 'user',
  storage: storageSession,
  blacklist: ['somethingTemporary'],
};
const rootReducer = combineReducers({ user });

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
