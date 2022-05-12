import HttpClient from '@Utils/HttpClient';


async function createlive(data) {
  let endpoint = 'user/post/create-live';
  return HttpClient.post(endpoint,data);
}
async function updatelive(data) {
  let endpoint = 'user/post/update-live';
  return HttpClient.post(endpoint,data);
}
async function getlive(data) {
  let endpoint = 'user/post/get-all-live';
  return HttpClient.post(endpoint,data);
}
export default {
    createlive,
    updatelive,
    getlive
};
