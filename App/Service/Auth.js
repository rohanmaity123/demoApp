import HttpClient from '@Utils/HttpClient';
import Storage from '@Utils/Storage';

async function register(data) {
  let endpoint = 'user/register';
  return HttpClient.post(endpoint, data);
}
async function updateprofile(data) {
  let endpoint = 'user/update';
  return HttpClient.post(endpoint, data);
}
async function login(data) {
  let endpoint = 'user/login';
  return HttpClient.post(endpoint, data);
}

async function forgetPass(data) {
  let endpoint = 'user/forget-password';
  return HttpClient.post(endpoint, data);
}

async function getqrprofile(data) {
  let endpoint = 'user/profile/qrcode';
  return HttpClient.post(endpoint, data);
}

async function getAccount() {
  return await Storage.get('account');
}

async function setAccount(data) {
  return await Storage.set('account', data);
}

async function getToken() {
  return await Storage.get('token');
}

async function setToken(data) {
  return await Storage.set('token', data);
}

async function logout() {
  return await Storage.set('account', null);
}
async function setWatchlist(data) {
  return await Storage.set('watchList', data);
}
async function setFavorite(data) {
  return await Storage.set('favorite', data);
}
async function getFavorite() {
  return await Storage.get('favorite');
}
async function getWatchList() {
  return await Storage.get('watchList');
}

export default {
  register,
  updateprofile,
  login,
  forgetPass,
  logout,
  getAccount,
  setAccount,
  getToken,
  setToken,
  setWatchlist,
  getWatchList,
  getqrprofile,
  setFavorite,
  getFavorite
};
