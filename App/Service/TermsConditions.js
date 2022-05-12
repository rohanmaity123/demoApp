import HttpClient from '@Utils/HttpClient';

async function fetchData() {
    let endpoint = 'common/terms-and-condition';
    return HttpClient.get(endpoint);
}
async function fetchAbout() {
    let endpoint = 'common/fetch-about';
    return HttpClient.get(endpoint);
}
export default {
    fetchData,
    fetchAbout
}
