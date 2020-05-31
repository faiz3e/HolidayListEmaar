import { holidayApiUrl } from "../constants/apiUrls";

export const getHolidayApi = async () => {
    const response = await fetch(holidayApiUrl);
    const resp = await response.json();
    if (resp.error) {
        return resp.error
    } else {
        return resp.items
    }
}