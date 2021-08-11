import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import List from './List';
import ListReducer from './ListReducer';

export default {
  component: List,
  title: 'List'
};

export const Default = () => (
  <List />
);

export const Reducer = () => (
  <ListReducer />
);