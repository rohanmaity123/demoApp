import HttpClient from '@Utils/HttpClient';

async function allApp() {
  let endpoint = 'user/home/apps';
  return HttpClient.post(endpoint);
}
async function appUser(d) {
  let endpoint = 'user/home/app-user';
  return HttpClient.post(endpoint, d);
}
export default {
  allApp,
  appUser
};
