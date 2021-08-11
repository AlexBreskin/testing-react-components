import React from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import ConnectedRoverSearch, {reducer as storeReducer} from './pages/ConnectedRoverSearch';
import promise from 'redux-promise-middleware';

const store = createStore(storeReducer, compose(applyMiddleware(promise)));
export const App = <Provider store={store}><ConnectedRoverSearch /></Provider>;
