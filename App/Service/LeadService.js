import HttpClient from '@Utils/HttpClient'

function financer(){
    let allfinencer = 'fetch_financer.php';
    return HttpClient.get(allfinencer);
}
function addlead(data) {
    let insertdata = 'add_lead.php';
    return HttpClient.post(insertdata,data);
}
export default {
    financer,
    addlead
}