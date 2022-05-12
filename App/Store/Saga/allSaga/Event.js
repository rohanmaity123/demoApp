import { takeLatest } from "redux-saga/effects";
import { getallEvent, getallEventTable } from "../../reducer/Event";
import { handleEventFetch, handleEventTableFetch } from "../handler/EventHandler";


export function* getEvent() {
  yield takeLatest(getallEvent,handleEventFetch);
}

export function* getEventTable() {
  yield takeLatest(getallEventTable,handleEventTableFetch);
}
