import { takeEvery, takeLatest } from "redux-saga/effects";
import { getOttBanner } from "../../reducer/Banner";
import { handleBannerFetch } from "../handler/banner";

export function* ottbanner() {
  console.log("=>>>>>>>>>>>>>>>>>");
  yield takeEvery(getOttBanner.type,handleBannerFetch);
}