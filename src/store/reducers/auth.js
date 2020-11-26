import { handleActions, combineActions } from 'redux-actions';

import { login, loginFailed } from '../actions/auth';

export const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false

};
const userReducer = handleActions({
  [login]: (state, action) => ({
    ...state,
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false
  }),
  [loginFailed]: (state, action) => ({
    ...state,
    error: action.error,
    loading: false
  }),
},
  initialState
);
export default userReducer;