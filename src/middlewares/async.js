export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on payload prop
  // if yes, wait for it to resolve
  // if no, send action to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // we want to wait for the promise to resolve (get its data)
  // then create a new action with that data and dispatch it
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
