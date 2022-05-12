import { call, put  } from "redux-saga/effects";
import SocialService from "../../../Service/SocialService";
import { setAllPost, setOwnPost } from "../../reducer/Feed";

export function* handleSocialFetch(){
    // console.log("handleSocialFetch");
    try {
        const response = yield call(SocialService.fetchpost);
        console.log("handleSocialFetch>>>>>>>>>", response);
        if (response && response.status) {
            yield put(setAllPost(response.data));
        }else{
            yield put(setAllPost([]));
        }

    } catch (error) {
        // console.log(" ===================================> ",error);
    }
}

export function* handleOwnSocialFetch(){
    // console.log("handleSocialFetch");
    try {
        const response = yield call(SocialService.fetchOwnpost);
        console.log("handleSocialFetch>>>>>>>>>", response);
        if (response && response.status) {
            yield put(setOwnPost(response.data));
        }else{
            yield put(setOwnPost([]));
        }

    } catch (error) {
        // console.log(" ===================================> ",error);
    }
}