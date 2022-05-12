import { all, fork } from "redux-saga/effects";
import { ottbanner } from "./allSaga/ottbanner";
import { ottData, ottTypeData } from "./allSaga/ottData";
import { setLoyelty, setLoyeltyPoint } from './allSaga/loyalty'
import { getEvent, getEventTable } from "./allSaga/Event";
import { ownsocialPost, socialPost } from "./allSaga/Social";
import { subscriptionStatus } from "./allSaga/Subscription";

export function* watcherSaga () {
    // yield takeLatest(getOttBanner.type,handleBannerFetch);
    yield all([
        fork(ottbanner),
        fork(socialPost),
        fork(ownsocialPost),
        fork(subscriptionStatus),
        fork(ottData),
        fork(getEvent),
        fork(getEventTable),
        fork(ottTypeData),
        fork(setLoyelty),
        fork(setLoyeltyPoint)
    ])
}