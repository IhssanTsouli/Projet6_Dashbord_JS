// api url
const api_url =  "http://127.0.0.1:8000/api/allyears";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
// function show(data) {
//     let tab = 
//         `<tr>
//           <th>Name</th>
//           <th>Office</th>
         
//          </tr>`;
    
//     // Loop to access all rows 
//     for (let r of data) {
//         tab += `<tr> 
//     <td>${r.id} </td>
//     <td>${r.Annee_scolaire}</td>
         
// </tr>`;
//     }
//     // let select='';
//     // for (let v of data){
//     //     select+=`<option value=${v.Annee_scolaire}>${v.Annee_scolaire}</option>`;
//     // }
    

// //     <select name="annee" id="an">
// //     <option value="ann">Année</option>
// //     <option value="an1">2023</option>
// //     <option value="an2">2022</option>
// // </select>
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
//     //document.getElementById("aa").innerHTML = select;
// }

function show(data){
    // let select='';
    for (let v of data){
        select+=`<option value=${v.Annee_scolaire}>${v.Annee_scolaire}</option>`;
    }
    document.getElementById("aa").innerHTML = select;
    

}