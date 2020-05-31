import { holidayConstants } from "./actionTypes";

export function getHoliday() {
    return {
        type: holidayConstants.HOLIDAY_GET
    };
}
