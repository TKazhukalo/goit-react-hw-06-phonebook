import persistStore from "redux-persist/es/persistStore";

export const persistConfig = {
  key: 'root',
  storage,
};
export const persistor = persistStore(store);
export const persistedReducer = persistedReducer(persistConfig, contactsReducer);