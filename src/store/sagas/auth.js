import { call, put, takeLatest } from 'redux-saga/effects';
import * as userApis from '../../apis/userApi';
import { loginFailed } from '../actions/auth';
import { get } from 'lodash';

import {
    AUTH_START
} from '../actions/actionTypes';

import { login } from '../actions/auth';

export function* loginSaga(action) {
    try {
        const response = yield call(userApis.login, action.payload);
    } catch (error) {
        yield put(loginFailed(error));
    }
}
export default function* userSagasWatcher() {
    yield takeLatest(AUTH_START, loginSaga);
}