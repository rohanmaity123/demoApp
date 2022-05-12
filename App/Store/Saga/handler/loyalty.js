import { call, put  } from "redux-saga/effects";
import { setLoyalty, setLoyaltyPoint } from "../../reducer/Loyalty";
import LoyaltyService from '../../../Service/loyaltyService'

export function* handleLoyaltyFetch(){
    try {
        const response = yield call(LoyaltyService.loyaltypoint);
        // console.log("loyelty saga", response);
        if (response && response.status) {
            yield put(setLoyalty(response.data));
        }else{
            yield put(setLoyalty([]));
        }

    } catch (error) {
        console.log(error)
    }
}

export function* handleLoyaltyDataFetch(){
    try {
        const response = yield call(LoyaltyService.loyaltypointget);
        // console.log("loyelty", response);
        if (response && response.status) {
            yield put(setLoyaltyPoint(response.data[0].point));
        }else{
            yield put(setLoyaltyPoint(0));
        }

    } catch (error) {
        console.log(error)
    }
}