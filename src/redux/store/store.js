import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import Reducer from '../reducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store;
