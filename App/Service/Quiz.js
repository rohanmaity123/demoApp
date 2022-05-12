import HttpClient from '@Utils/HttpClient';
import Storage from '@Utils/Storage';

async function getAllQuiz(data) {
  let endpoint = 'user/quiz/get-all';
  return HttpClient.post(endpoint, data);
}
async function leaderboard(data) {
  let endpoint = 'user/quiz/leader-board';
  return HttpClient.post(endpoint, data);
}
async function startQuiz(data) {
  let endpoint = 'user/quiz/quiz-start';
  return HttpClient.post(endpoint, data);
}
async function recentQuiz(data) {
  let endpoint = 'user/quiz/recent-quiz';
  return HttpClient.post(endpoint, data);
}
async function getSingleQuiz(data) {
  let endpoint = 'user/quiz/single';
  return HttpClient.post(endpoint, data);
}

async function attemptQuizFetch(data) {
  let endpoint = 'user/quiz/attempted-quiz-fetch';
  return HttpClient.post(endpoint, data);
}

async function submitGiftCard(data) {
  let endpoint = 'user/quiz/submit-giftcard';
  return HttpClient.post(endpoint, data);
}



export default {
  recentQuiz,
  getAllQuiz,
  startQuiz,
  getSingleQuiz,
  attemptQuizFetch,
  submitGiftCard,
  leaderboard
};
