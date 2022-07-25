import { compose, createStore, applyMiddleware } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { logger } from '../middlewares/logger';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';



const persistConfig = {
    key : 'root',
    storage,
    blacklist : ['user','products','location']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store);