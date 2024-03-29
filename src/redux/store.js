
import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import authReducer from './features/authSlice'
import themeReducer from "./features/themeSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
const persistConfig = {
    key: 'auth',
    storage,
}

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
        // auth: authReducer,
        auth: persistedAuthReducer,
        theme: persistedThemeReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware( {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }).concat(baseApi.middleware),
})


export const persistor = persistStore(store);