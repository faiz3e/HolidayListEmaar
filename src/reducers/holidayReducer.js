import { holidayConstants } from '../actions/actionTypes';

const initialState = {
    loader: false,
    data: []
};

export function holidayReducer(state = initialState, action) {
    switch (action.type) {
        case holidayConstants.HOLIDAY_REQUEST:
            return {
                loader: true,
                data: state.data
            };
        case holidayConstants.HOLIDAY_SUCCESS:
            return {
                loader: false,
                data: action.payload
            };
        case holidayConstants.HOLIDAY_FAILURE:
            return {
                loader: false,
                data: []
            };
        default:
            return state
    }
}