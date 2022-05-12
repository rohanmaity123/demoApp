import HttpClient from '@Utils/HttpClient';

async function getBanner() {
    // console.log("banner call >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    let endpoint = 'user/video/banner';
    return HttpClient.get(endpoint);
}

async function getContent() {
    console.log("getContent")
    let endpoint = 'user/content';
    return HttpClient.get(endpoint);
}

async function getTypeData(id) {
    let endpoint = 'user/content/type/'+id;
    return HttpClient.get(endpoint);
}

async function videoSingle(data) {
    let endpoint = 'user/video/single';
    return HttpClient.post(endpoint,data);
}

async function getAllType() {
    let endpoint = 'user/content/type-listt';
    return HttpClient.get(endpoint);
}

async function getCategoryData(id) {
    let endpoint = 'user/video/categary/'+id;
    return HttpClient.get(endpoint);
}

async function getSingleTypeData(id) {
    let endpoint = 'user/content/singel-type/'+id;
    return HttpClient.get(endpoint);
}

async function getOttSearch(data) {
    let endpoint = 'user/video/search';
    return HttpClient.post(endpoint, data);
}

export default {
    getBanner,
    getContent,
    getTypeData,
    videoSingle,
    getAllType,
    getCategoryData,
    getSingleTypeData,
    getOttSearch
}
