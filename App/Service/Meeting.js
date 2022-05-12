import HttpClient from '@Utils/HttpClient';

async function createMeeting(data) {
  let endpoint = 'user/metting';
  return HttpClient.post(endpoint,data);
}

async function getMeeting(data) {
    let endpoint = 'user/metting/get-all';
    return HttpClient.post(endpoint);
}


async function getInviteMeeting(data) {
    let endpoint = 'user/metting/get-invited';
    return HttpClient.post(endpoint);
}

async function InviteMeeting(data) {
    let endpoint = 'user/metting/invite';
    return HttpClient.post(endpoint, data);
}

async function joinMeet(data) {
  let endpoint = 'user/metting/join';
  return HttpClient.post(endpoint, data);
}

async function instantMeet(data) {
  let endpoint = 'user/metting/instant-meeting';
  return HttpClient.post(endpoint, data);
}

async function getinstantMeet(data) {
  let endpoint = 'user/metting/meeting-single';
  return HttpClient.post(endpoint, data);
}

async function verifyinstantMeet(data) {
  let endpoint = 'user/metting/instant-meeting-join';
  return HttpClient.post(endpoint, data);
}


export default {
  createMeeting,
  getMeeting,
  getInviteMeeting,
  InviteMeeting,
  joinMeet,
  instantMeet,
  getinstantMeet,
  verifyinstantMeet
};
