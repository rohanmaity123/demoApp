import HttpClient from '@Utils/HttpClient';

async function getAll() {
  let endpoint = 'user/notification/get-all';
  return HttpClient.post(endpoint);
}

async function comment(data) {
  let endpoint = 'user/notification/comment';
  return HttpClient.post(endpoint,data);
}

async function noticomment(data) {
  let endpoint = 'user/notification/comment-all';
  return HttpClient.post(endpoint,data);
}

export default {
getAll,
comment,
noticomment
};