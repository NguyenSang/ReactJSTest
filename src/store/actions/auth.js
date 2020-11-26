import { createAction } from 'redux-actions';
import * as actionType from './actionTypes';

export const login = createAction(actionType.AUTH_START);
export const loginFailed = createAction(actionType.AUTH_FAIL);