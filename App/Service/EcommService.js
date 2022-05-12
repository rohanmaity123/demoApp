import HttpClient from '@Utils/HttpClient';

async function product() {
  let endpoint = 'products';
  return HttpClient.get(endpoint);
}
export default {
    product,
};
