import React from 'react';
import Counter from './Counter';
import CounterAsync from './Counter.async';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  component: Counter,
  title: 'Counter'
};

export const Default = () => (
    <Counter />
);

export const Async = () => (
  <CounterAsync />
);

