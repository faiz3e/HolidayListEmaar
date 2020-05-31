
import { takeLatest, call, put } from "redux-saga/effects";
import { holidayConstants } from '../actions/actionTypes';
import { getHolidayApi } from "../apis/holidayApi";
import { isEmpty } from "../helpers";

export function* holidaySaga() {
    yield takeLatest(holidayConstants.HOLIDAY_GET, workerSaga);
}

function* workerSaga(action) {
    console.log(action);
    try {
        yield put({ type: holidayConstants.HOLIDAY_REQUEST });
        const result = yield call(getHolidayApi);
        if (!isEmpty(result)) {
            yield put({ type: holidayConstants.HOLIDAY_SUCCESS, payload: result });
        }
    }
    catch (error) {
        console.log("err", error)
    }
}


