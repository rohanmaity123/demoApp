import HttpClient from '@Utils/HttpClient';

async function createPayment(data) {
    let endpoint = 'user/create-paymet';
    return HttpClient.post(endpoint,data);
}

async function subscribe(data) {
    let endpoint = 'user/subs-new';
    return HttpClient.post(endpoint,data);
}

async function fetchSub() {
    let endpoint = 'user/fetch-subs';
    return HttpClient.post(endpoint);
}

async function fetchSubDetails(data) {
    let endpoint = 'user/subs-retrive';
    return HttpClient.post(endpoint,data);
}

async function unSubscribe(data) {
    let endpoint = 'user/subs-cancel';
    return HttpClient.post(endpoint,data);
}
async function upgradePayment(data) {
    let endpoint = 'user/subs-update';
    return HttpClient.post(endpoint,data);
}
async function upgradeSubscribe(data) {
    let endpoint = 'user/update-subscription';
    return HttpClient.post(endpoint,data);
}
async function subscriptionHistory() {
    let endpoint = 'user/subscription/history';
    return HttpClient.post(endpoint);
}

export default {
    createPayment,
    subscribe,
    fetchSub,
    fetchSubDetails,
    upgradePayment,
    upgradeSubscribe,
    unSubscribe,
    subscriptionHistory
}
