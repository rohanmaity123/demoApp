import HttpClient from '@Utils/HttpClient';

async function getPlan(data) {
    let endpoint = 'user/subscription/get-all';
    return HttpClient.post(endpoint,data);
}

async function subscribe(data) {
    let endpoint = 'user/buysub';
    return HttpClient.post(endpoint,data);
}

export default {
    getPlan,
    subscribe
}
