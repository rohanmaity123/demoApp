import { call, put  } from "redux-saga/effects";
import EventsService from "../../../Service/EventsService";
import { setEvent, setFloors } from "../../reducer/Event";

export function* handleEventFetch(){
    try {
        const response = yield call(EventsService.fetchevents);
        // console.log("handleEventFetch", response);
        if (response && response.status) {
            yield put(setEvent(response.data));
        }else{
            yield put(setEvent([]));
        }

    } catch (error) {
        console.log(error)
    }
}

export function* handleEventTableFetch(data){
    try {
        // console.log("handleEventTableFetch", data)
        const response = yield call(EventsService.fetchtables,data.payload);
        // console.log("handleEventTableFetch", response);
        if (response && response.status) {
            yield put(setFloors(response.data));
        }else{
            yield put(setFloors([]));
        }

    } catch (error) {
        console.log(error)
    }
}