import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// props.children is a react construct - allows us to take component we just created and allows us to wrap other components

export default ({ children, initialState = {}}) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
