import { configureStore  } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

let middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: false,
})
//persistStore(store)
export default store