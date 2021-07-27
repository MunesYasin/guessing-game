'use strict';



let meal = prompt('Do I love mansaf?').toLowerCase()
while(meal !='yes' && meal !='y' && meal != "no" && meal!='n'){
    meal = prompt('Your answer must be yes or no or n or y ')
}



 
switch(meal){
    case 'yes' :
    case 'y' :
        //console.log('yes');
        alert('thats true')
        break;
    case 'no' :
     case 'n' :
        //console.log('no');
        alert('that false')
        break;    
     
        
}
let nation = prompt("Am I jordanian?").toLowerCase()
while(nation !='yes' && nation !='y' && nation != "no" && nation!='n'){
    nation = prompt('Your answer must be yes or no or n or y ')
}
switch(nation){
    case 'yes' :
    case 'y' :
        //console.log('yes');
        alert('thats true')
        break;
    
        
    case 'no' : 
    case 'n' :
        //console.log('no');
        alert('thats false')
        break;    
     
        
}

let interest = prompt("Am I interesting in software developer ?").toLowerCase()
while(interest !='yes' && interest !='y' && interest != "no" && interest!='n'){
    interest = prompt('Your answer must be yes or no or n or y ')
}
switch(interest){
    case 'yes' : 
    case 'y' :
        //console.log('yes');
        alert('thats true')
        break;
   
        
    case 'no' : 
    case 'n' :
        //console.log('no');
        alert('thats true')
        break;    
     
      
} 
let game = prompt("Do I play Pubg ?").toLowerCase()
while(game !='yes' && game !='y' && game != "no" && game!='n'){
    game = prompt('Your answer must be yes or no or n or y ')
}
switch(game){
    case 'yes' :
    case 'y' :
        //console.log('yes');
        alert('thats false')
        break;
    
       
    case 'no' :
    case 'n' :
        //console.log('no');
        alert('thats true')
        break;    
     
}
let sport = prompt("Do I like sport ?").toLowerCase()
while(sport !='yes' && sport !='y' && sport != "no" && sport!='n'){
    sport = prompt('Your answer must be yes or no or n or y ')
}
switch(sport){
    case 'yes' : 
    case 'y' :
        //console.log('yes');
        alert('thats true ')
        break;
  
       
    case 'no' :
    case 'n' :
        //console.log('no');
        alert('thats false')
        break;    
     
        
}


let username = prompt('Whats your name ?')

//console.log(username)
alert('Hello '+username+' .Welcome to our website')

let wel=confirm('Is our website beautiful')
//console.log(wel)
if(wel == true){
    alert('Thank you ')
  
  }
  else{
    alert('We will improve it')
  }
  
