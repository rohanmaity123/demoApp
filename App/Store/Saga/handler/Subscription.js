import { call, put  } from "redux-saga/effects";
import Subscription from "../../../Service/Subscription";
import { setSubscription } from "../../reducer/Subscription";

export function* handleSubscriptionStatusFetch(){
    // console.log("handleBannerFetch");
    try {
        const response = yield call(Subscription.fetchSub);
        // console.log("handleSubscriptionStatusFetch>>>>>>>>>", response);
        if (response && response.status) {
            yield put(setSubscription(response.data?.userData?.substatus));
        }else{
            yield put(setSubscription(false));
        }

    } catch (error) {
        // console.log(" ===================================> ",error);
    }
}

