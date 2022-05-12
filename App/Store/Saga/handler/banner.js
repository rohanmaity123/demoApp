import { call, put  } from "redux-saga/effects";
import { setBannner } from "../../reducer/Banner";
import OttService from '../../../Service/OttService'

export function* handleBannerFetch(){
    // console.log("handleBannerFetch");
    try {
        const response = yield call(OttService.getBanner);
        // console.log("handleBannerFetch>>>>>>>>>", response);
        if (response && response.status) {
            yield put(setBannner(response.data));
        }else{
            yield put(setBannner([]));
        }

    } catch (error) {
        // console.log(" ===================================> ",error);
    }
}