import HttpClient from '@Utils/HttpClient';

async function fetchevents() {
  let endpoint = 'user/event/get-all';
  return HttpClient.post(endpoint);
}

async function singleEvents(data) {
  let endpoint = 'user/event/single';
  return HttpClient.post(endpoint,data);
}

async function eventRegister(data) {
  let endpoint = 'user/event/register';
  return HttpClient.post(endpoint,data);
}

async function bookevent(data) {
  let endpoint = 'user/event/seat-booking';
  return HttpClient.post(endpoint, data);
}

async function fetchtickets(data) {
  let endpoint = 'user/event/ticket';
  return HttpClient.post(endpoint, data);
}

async function fetchtables(data) {
  console.log("fetchtables", data)
  let endpoint = 'user/event/get-tables';
  return HttpClient.post(endpoint, data);
}

async function jointable(data) {
  let endpoint = 'user/event/book-table';
  return HttpClient.post(endpoint, data);
}

async function leavetable(data) {
  let endpoint = 'user/event/leave-table';
  return HttpClient.post(endpoint, data);
}

async function startSession(data) {
  let endpoint = 'user/event/start-session';
  return HttpClient.post(endpoint, data);
}

export default {
  fetchevents,
  bookevent,
  fetchtickets,
  fetchtables,
  singleEvents,
  eventRegister,
  jointable,
  leavetable,
  startSession
};
