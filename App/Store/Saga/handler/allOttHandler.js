import { call, put  } from "redux-saga/effects";
import OttService from '../../../Service/OttService'
import { setAllOttData, setOtttypeData } from "../../reducer/OttReducer";

export function* fetchAllOttContent(){
    console.log("fetchAllOttContent")
    try {
        const response = yield call(OttService.getContent);
        // console.log("response", response);
        if (response && response.status) {
            yield put(setAllOttData(response.data));
        }else{
            yield put(setAllOttData([]));
        }

    } catch (error) {
        console.log(error)
    }
}

export function* fetchOttTypeData(){
    // console.log("fetchOttTypeData")
    try {
        const response = yield call(OttService.getAllType);
        console.log("response", response);
        if (response && response.status) {
            yield put(setOtttypeData(response.data));
        }else{
            yield put(setOtttypeData([]));
        }

    } catch (error) {
        console.log(error)
    }
}

