import { takeEvery } from "redux-saga/effects";
import { getSubscriptionData } from "../../reducer/Subscription";
import { handleSubscriptionStatusFetch } from "../handler/Subscription";

export function* subscriptionStatus() {
  // console.log("handleSubscriptionStatusFetch=>>>>>>>>>>>>>>>>>");
  yield takeEvery(getSubscriptionData.type,handleSubscriptionStatusFetch);
}