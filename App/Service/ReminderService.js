import HttpClient from '@Utils/HttpClient'

function property(){
    let propertis = 'fetch_property.php';
    return HttpClient.get(propertis);
}
function client(){
    let clients = 'fetch_client.php';
    return HttpClient.get(clients);
}
function agentandsellers() {
    let allperson = 'fetch_agent_and_sellers.php';
    return HttpClient.get(allperson);
}
function addreminder(data) {
    let insertdata = 'add_reminder.php';
    return HttpClient.post(insertdata,data);
}
export default {
    property,
    client,
    agentandsellers,
    addreminder,
}