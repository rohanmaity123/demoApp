import { takeEvery, takeLatest } from "redux-saga/effects";
import { getOwnSocialPost, getSocialPost } from "../../reducer/Feed";
import { handleOwnSocialFetch, handleSocialFetch } from "../handler/Social";

export function* socialPost() {
  // console.log("=>>>>>>>>>>>>>>>>>");
  yield takeEvery(getSocialPost.type,handleSocialFetch);
}

export function* ownsocialPost() {
  // console.log("=>>>>>>>>>>>>>>>>>");
  yield takeEvery(getOwnSocialPost.type,handleOwnSocialFetch);
}