import { takeLatest } from "redux-saga/effects";
import { getAllOttData, getOtttypeData } from "../../reducer/OttReducer";
import { fetchAllOttContent, fetchOttTypeData } from "../handler/allOttHandler";

export function* ottData() {
  yield takeLatest(getAllOttData.type,fetchAllOttContent);
}

export function* ottTypeData() {
  yield takeLatest(getOtttypeData.type,fetchOttTypeData);
}
