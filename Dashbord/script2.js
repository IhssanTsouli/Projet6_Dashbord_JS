
async function getapi() {
    
    // Storing response
    const response = await fetch("http://127.0.0.1:8000/api/allyears");
    
    // Storing data in form of JSON
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        
            Annee.innerHTML += `<option value="${data[i].id}">${data[i].Annee_scolaire}</option>`     
    }   
}
getapi();
