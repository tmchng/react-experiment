import { INIT_NUM, INCREMENT_NUM, DECREMENT_NUM } from './actionTypes';

export const initNum = () => ({
  type: INIT_NUM
});

export const incrementNum = () => ({
  type: INCREMENT_NUM
});

export const decrementNum = () => ({
  type: DECREMENT_NUM
});
