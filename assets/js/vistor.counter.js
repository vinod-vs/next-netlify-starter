window.addEventLIstner('DOMContentLoaded', (event) => {
    getVisitCount();
})


var counterContainer = document.querySelector(".website-counter");

const functionAPI = 'http://localhost:7071/api/HttpTrigger1';

const getVisitCount = () => {
    
    fetch(functionAPI).then(response => {
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



