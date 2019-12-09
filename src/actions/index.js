import { FETCH_RECORDS, ADD_RECORDS } from "../constants/action-types";
export function fetchData(payload = "") {
  debugger;
  return { type: FETCH_RECORDS, payload: payload.data };
}
export function addData(payload) {
  debugger;
  return { type: ADD_RECORDS, payload: payload.data };
}
