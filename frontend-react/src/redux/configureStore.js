import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware'

import RootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const configureStore = () => createStoreWithMiddleware(RootReducer, {});

export default configureStore;
