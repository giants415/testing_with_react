import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// props.children is a react construct - allows us to take component we just created and allows us to wrap other components

export default ({ children, initialState = {}}) => {
  return (
    <Provider store={createStore(reducers, initialState)}>
      {props.children}
    </Provider>
  );
};
