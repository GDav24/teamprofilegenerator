const fs= require('fs');


const writeFile = (managerEmployees, engineerEmployees, internEmployees) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./index.html', generateHtml(managerEmployees, engineerEmployees, internEmployees), err => {
            // if theres an error, reject the promise and send the error to the Promise's catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesnt ccidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the PRomise and send the successful data to the `.then()` method
       resolve({
        ok: true,
        message: 'Employee Roster Page Created!'
       }); 
    });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Roster Stylesheet Created!'
        });
      });
    });
  };
  



function generateHtml(managerEmployees, engineerEmployees, internEmployees) {
 var output =`<!DOCTYPE html>
 <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Team Profile</title>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
         <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
         <link rel="stylesheet" href="./assets/style.css" />
         <script src='https://kit.fontawesome.com/658fa314f7.js' crossorigin='anonymous'></script>

     
     
     </head>

<body>
<header>
<div class="page-header bg-white">
  <h1>My Team:</h1>
</div>
</header>
     
<div class="m-0 bg-danger container-fluid"><div class="justify-content-center row">
   
  ${generateManager(managerEmployees)} </div></div>
  
  <div class="bg-info container-fluid"><div class="justify-content-center row"> 
  ${generateEngineer(engineerEmployees)} </div></div>

  <div class="bg-warning container-fluid"><div class="justify-content-center row">
  ${generateIntern(internEmployees)} </div></div>
   

 
     
   </header>

</body>



`


return output;


  
}


function generateManager (managerEmployees) {
var card = "";

  for (var i = 0; i < managerEmployees.length; i++) {
     
   

console.log(managerEmployees[i].name, managerEmployees[i].employeeid, managerEmployees[i].email_address, managerEmployees[i].position, managerEmployees[i].office_number)

card += `
   
 
       
   <div class=" rounded-3 m-2 p-2  card style=width: 15rem;">
  
   <div class=" card-body bg-danger">
     <ul><h4 class="card-title">${managerEmployees[i].name}</h4>
     <span class="fa-solid fa-briefcase"></span>
     <h2>${managerEmployees[i].position}<h2>
     </ul>

   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item"><span class="font-weight-bold">Employee ID :</span> ${managerEmployees[i].employeeid}</li>
     <li class="list-group-item">Email: <a href="Email:${managerEmployees[i].email_address}">${managerEmployees[i].email_address}</a></li>
     <li class="list-group-item"><span class="font-weight-bold">Office Number:</span> ${managerEmployees[i].office_number}</li>
   </ul> 
 </div>
   
   `

}
return card;

}



function generateEngineer (engineerEmployees) {
  var card = "";
  
    for (var i = 0; i < engineerEmployees.length; i++) {
       
     
  
  console.log(engineerEmployees[i].name, engineerEmployees[i].employeeid, engineerEmployees[i].email_address, engineerEmployees[i].position, engineerEmployees[i].github)
  
  card += `

         
     <div class=" rounded-3 m-2 p-2 row card style=width: 15rem;">
     
     <div class=" card-body bg-info">
       <h4 class=" card-title">${engineerEmployees[i].name}</h4>
       <span class="fa-brands fa-github"></span>
       <h2>${engineerEmployees[i].position}<h2>
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item"><span class="font-weight-bold">Employee ID: </span>${engineerEmployees[i].employeeid}</li>
       <li class="list-group-item">Email: <a href="Email:${engineerEmployees[i].email_address}">${engineerEmployees[i].email_address}</a></li>
       <li class="list-group-item"><span class="font-weight-bold">Github: </span><a href="https://github.com/${engineerEmployees[i].github}/" target="_blank">${engineerEmployees[i].github}</a></li>
     </ul>
    
   </div>
     
     `
  
  }
  return card;
  
  }

  function generateIntern (internEmployees) {
    var card = "";
    
      for (var i = 0; i < internEmployees.length; i++) {
         
       
    
    console.log(internEmployees[i].name, internEmployees[i].employeeid, internEmployees[i].email_address, internEmployees[i].position, internEmployees[i].school)
    
    card += `
       
     
           
       <div class=" rounded-3 m-2 p-2  card style=width: 15rem;">
       
       <div class=" card-body bg-warning">
         <h2 class=" card-title">${internEmployees[i].name}</h2>
         <span class="fa-solid fa-school"></span>
         <h2>${internEmployees[i].position}</h2>
    
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item"><span class="font-weight-bold">Employee ID: </span> ${internEmployees[i].employeeid}</li>
         <li class="list-group-item">Email: <a href="Email:${internEmployees[i].email_address}">${internEmployees[i].email_address}</a></li>
         <li class="list-group-item"><span class="font-weight-bold">School: </span> ${internEmployees[i].school}</li>
       </ul>
      
     </div>
       
       `
    
    }
    return card;
    
    }



module.exports = { writeFile, copyFile };
