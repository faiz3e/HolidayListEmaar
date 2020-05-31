import { all, fork } from 'redux-saga/effects';

import { holidaySaga } from "./holidaySaga";

export function* rootSaga() {
    yield all([fork(holidaySaga)]);
}