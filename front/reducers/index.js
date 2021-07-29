import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import components from './components';

const rootReducer = (state, action) => {
  switch (action.type) {
  case HYDRATE:
    console.log('HYDRATE', action);
    return action.payload;
  default: {
    const combineReducer = combineReducers({
      components,
    });
    return combineReducer(state, action);
  }
  }
};

export default rootReducer;
