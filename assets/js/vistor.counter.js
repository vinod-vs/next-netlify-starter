
var counterContainer = document.querySelector(".website-counter");

const functionAPI = 'http://localhost:7071/api/HttpTrigger1';
const functionApiUrl = 'https://cloudresumechallenge2.azurewebsites.net/api/HttpTrigger1?code=Pf511QPdhaFyExIY7M0QU/Pi5MHD9yWhQmy3oWbpFhaakG9kQTtdZQ==';

const getVisitCount = () => {
    var count;
    
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log(" Website called the function API");
        count = response.count;
        document.getElementById("website-counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}

getVisitCount();


