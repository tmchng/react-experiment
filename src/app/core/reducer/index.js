import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import all reducers
const simpleToggleReducer = require('app/modules/SimpleToggle/reducer').default;

// Combine all reducers
const rootReducer = combineReducers({
  routing: routerReducer,
  simpleToggle: simpleToggleReducer,
});

export default rootReducer;
