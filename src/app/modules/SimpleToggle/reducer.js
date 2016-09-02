import { INIT_NUM, INCREMENT_NUM, DECREMENT_NUM } from './actionTypes';

const initialState = {
  num: 0
};

const simpleToggleReducer = (state = initialState, action) => {
  switch(action.type) {
    case INIT_NUM:
      return {...initialState};

    case INCREMENT_NUM:
      return {
        ...state,
        num: state.num + 1
      };

    case DECREMENT_NUM:
      return {
        ...state,
        num: state.num - 1
      };

    default:
      return state;
  }
};

export default simpleToggleReducer;
