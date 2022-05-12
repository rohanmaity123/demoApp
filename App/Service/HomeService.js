import HttpClient from '@Utils/HttpClient';

async function fetch_welcomescreen_Text() {
  let endpoint = 'fetch_welcome.php';
  return HttpClient.post(endpoint);
}
async function fetch_signup_page_Text() {
  let endpoint = 'fetch_signup_page.php';
  return HttpClient.post(endpoint);
}
async function fetch_login_page_Text() {
  let endpoint = 'fetch_login_page.php';
  return HttpClient.post(endpoint);
}
async function fetch_fpass_Text() {
  let endpoint = 'fetch_fpass.php';
  return HttpClient.post(endpoint);
}

async function fetch_dashboardscreen_Text(data) {
  let endpoint = 'fetch_dashboard.php';
  return HttpClient.post(endpoint, data);
}
async function fetch_popup_Text() {
  let endpoint = 'fetch_congratulation.php';
  return HttpClient.post(endpoint);
}
async function fetch_sharingscreen_Text() {
  let endpoint = 'fetch_sharing.php';
  return HttpClient.post(endpoint);
}
async function fetch_howitworksscreen_Text() {
  let endpoint = 'fetch_how_it_works.php';
  return HttpClient.post(endpoint);
}
async function fetch_contactusscreen_Text() {
  let endpoint = 'contact_us.php';
  return HttpClient.post(endpoint);
}
async function fetch_referral_count_ponit(data) {
  let endpoint = 'fetch_by_referral_code.php';
  return HttpClient.post(endpoint, data);
}
async function fetch_referred_user(data) {
  let endpoint = 'fetch_referred_user.php';
  return HttpClient.post(endpoint, data);
}
async function buy_sub(data) {
  let endpoint = 'buy_sub.php';
  return HttpClient.post(endpoint, data);
}

export default {
  fetch_welcomescreen_Text,
  fetch_signup_page_Text,
  fetch_login_page_Text,
  fetch_fpass_Text,
  fetch_dashboardscreen_Text,
  fetch_popup_Text,
  fetch_sharingscreen_Text,
  fetch_howitworksscreen_Text,
  fetch_contactusscreen_Text,
  fetch_referral_count_ponit,
  fetch_referred_user,
  buy_sub,
};
