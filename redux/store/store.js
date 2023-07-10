import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage';
import themeSlice from "../slices/themeSlice";

const persistConfig = {
    key: 'root',
    storage: storage,
    version: 1
}
const reducer = combineReducers({
  theme: themeSlice
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      thunk,
    ),
})
export default store