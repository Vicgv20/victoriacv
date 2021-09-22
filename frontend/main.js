window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = 'https://getresumecounterr.azurewebsites.net/api/GetResumeCounter?code=aF33juJWns/0Yso92ayDcFbjcDx8zIyjtatCtRRT2n3QfnYUkQhBmQ==';
const localfunctionApi = 'https://localhost:7071/api/GetResumeCounter';

const getVisitCount = () =>{
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log('Website called function API.');
        count = response.count;
        document.getElementById("counter").innerText = count
    }).catch(function(error){
        console.log(error);
    });
    return count;
}