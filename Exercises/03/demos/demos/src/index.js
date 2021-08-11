import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import './index.css';
import ConnectedRoverSearch, {reducer as storeReducer} from './pages/ConnectedRoverSearch';
import * as serviceWorker from './serviceWorker';
import promise from 'redux-promise-middleware';

// NOTE: this section has been updated to work with browsers that don't have the devTools extension
const finalCreateStore = compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
const store = finalCreateStore(storeReducer);

ReactDOM.render(<Provider store={store}><ConnectedRoverSearch /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();