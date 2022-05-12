import { takeLatest } from "redux-saga/effects";
import { SET_LOYALTY, SET_LOYALTY_POINT } from "../../action/type";
import { handleLoyaltyFetch, handleLoyaltyDataFetch } from "../handler/loyalty";


export function* setLoyelty() {
  yield takeLatest(SET_LOYALTY,handleLoyaltyFetch);
}

export function* setLoyeltyPoint() {
  yield takeLatest(SET_LOYALTY_POINT,handleLoyaltyDataFetch);
}