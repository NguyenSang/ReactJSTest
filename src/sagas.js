import { all } from 'redux-saga/effects';
import saga from './store/sagas/auth';

export default function* rootSaga() {
    yield all([
        saga()
    ]);
}
