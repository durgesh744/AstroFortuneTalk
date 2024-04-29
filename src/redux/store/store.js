import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducer/root';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
