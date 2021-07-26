'use strict';



let meal = prompt('Do you love mansaf?').toLowerCase()
while(meal !='yes' && meal !='y' && meal != "no" && meal!='n'){
    meal = prompt('Your answer must be yes or no or n or y ')
}



 
switch(meal){
    case 'yes' :
        //console.log('yes');
        alert('you love mansaf')
        break;
    case 'y' :
        //console.log('yes');
        alert('you love mansaf')
        break;
    case 'no' :
        //console.log('no');
        alert('you dont love mansaf')
        break;    
     case 'n' :
        //console.log('no');
        alert('you dont love mansaf')
        break;
}
let nation = prompt("Are you jordanian?").toLowerCase()
while(nation !='yes' && nation !='y' && nation != "no" && nation!='n'){
    nation = prompt('Your answer must be yes or no or n or y ')
}
switch(nation){
    case 'yes' :
        //console.log('yes');
        alert('you are jordanian')
        break;
    case 'y' :
        //console.log('yes');
        alert('you are jordanian')
        break;
    case 'no' :
        //console.log('no');
        alert('you are not jordanian')
        break;    
     case 'n' :
        //console.log('no');
        alert('you are not jordanian')
        break;
}

let interest = prompt("Do you interesting in software developer ?").toLowerCase()
while(interest !='yes' && interest !='y' && interest != "no" && interest!='n'){
    interest = prompt('Your answer must be yes or no or n or y ')
}
switch(interest){
    case 'yes' :
        //console.log('yes');
        alert('you are interseting in software')
        break;
    case 'y' :
        //console.log('yes');
        alert('you are interseting in software')
        break;
    case 'no' :
        //console.log('no');
        alert('you are not interseting in software')
        break;    
     case 'n' :
        //console.log('no');
        alert('you are not interseting in software')
        break;
} 
let game = prompt("Do you play Pubg ?").toLowerCase()
while(game !='yes' && game !='y' && game != "no" && game!='n'){
    game = prompt('Your answer must be yes or no or n or y ')
}
switch(game){
    case 'yes' :
        //console.log('yes');
        alert('you play pubg')
        break;
    case 'y' :
        //console.log('yes');
        alert('you play pubg')
        break;
    case 'no' :
        //console.log('no');
        alert('you dont play pubg')
        break;    
     case 'n' :
        //console.log('no');
        alert('you dont play pubg')
        break;
}
let sport = prompt("Do you like sport ?").toLowerCase()
while(sport !='yes' && sport !='y' && sport != "no" && sport!='n'){
    sport = prompt('Your answer must be yes or no or n or y ')
}
switch(sport){
    case 'yes' :
        //console.log('yes');
        alert('you are an athletic person ')
        break;
    case 'y' :
        //console.log('yes');
        alert('you are an athletic person')
        break;
    case 'no' :
        //console.log('no');
        alert('you are not an athletic person')
        break;    
     case 'n' :
        //console.log('no');
        alert('you are not an athletic person')
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
  
