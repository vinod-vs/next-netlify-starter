winodw.addEventLIstner('DOMContentLoaded', (event) => {
    getVisitCount();
})


var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");
const funtionAPI = '';

const getVisitCount = () => {
    if(visitCount) {
        visitCount = Number(visitCount) + 1;
        localStorage.setItem("page_view", visitCount);
    }
    else {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
    }
    fetch(funtionAPI).then(response => {
        return response.json()
    }).then(response => {
        console.log(" Website called the function API");
        count = response.count;
        counterContainer.innerHTML = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}



