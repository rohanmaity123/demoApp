import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducer";
import { watcherSaga } from './Saga/rootSaga';
// import { setAutoFreeze } from 'immer';

const sagaMiddleware = createSagaMiddleware();

const Store =  configureStore({
  reducer,
  middleware :[...getDefaultMiddleware({thunk:false.valueOf, serializableCheck:false}), sagaMiddleware] 
})

// setAutoFreeze(false);

sagaMiddleware.run(watcherSaga);

export default Store;
