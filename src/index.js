import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from "redux-promise";

import App from "./components/app";
import rootReducer from './reducers/index.js';
import {initialRecipes} from "./components/initialRecipes"

import "../styles/main.scss";


if(localStorage.data) {
  var parsedRecipes = JSON.parse(localStorage.data);
  var persistedState = {recipesState : parsedRecipes};
} else {
  var persistedState = {recipesState : initialRecipes};
  var stringifiedRecipes = JSON.stringify(initialRecipes);
  localStorage.data = [stringifiedRecipes];
}

const store = createStore(rootReducer, persistedState, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
