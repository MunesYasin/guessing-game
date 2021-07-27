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
let counter=0
for(let i =0 ; i<4;i++){
  let q1=parseInt(prompt('Choose no. between 1-10'))
  if(q1==5){
      alert('Thats great its correct ^_^')
      counter=counter+1;
      break;
  }

  else if(q1<5){
      alert('its lower')
  }
  else{
      alert('its higher')
  }
} 
for(let i =0 ; i<4;i++){
    let q1=parseInt(prompt('Choose no. between 11-20'))
    if(q1==17){
        alert('Thats great its correct ^_^')
        counter=counter+1;
        break;
    }
  
    else if(q1<17){
        alert('its lower')
    }
    else{
        alert('its higher')
    }
  } 
  for(let i =0 ; i<4;i++){
    let q1=parseInt(prompt('Choose no. between 21-30'))
    if(q1==25){
        alert('Thats great its correct ^_^')
        counter=counter+1;
        break;
    }
  
    else if(q1<25){
        alert('its lower')
    }
    else{
        alert('its higher')
    }
  } 
  for(let i =0 ; i<4;i++){
    let q1=parseInt(prompt('Choose no. between 31-40'))
    if(q1==39){
        alert('Thats great its correct ^_^')
        counter=counter+1;
        break;
    }
  
    else if(q1<39){
        alert('its lower')
    }
    else{
        alert('its higher')
    }
  } 
  for(let i =0 ; i<4;i++){
    let q1=parseInt(prompt('Choose no. between 41-50'))
    if(q1==43){
        alert('Thats great its correct ^_^')
        counter=counter+1;
        break;
    }
  
    else if(q1<43){
        alert('its lower')
    }
    else{
        alert('its higher')
    }
  } 
  for(let i =0 ; i<4;i++){
    let q1=parseInt(prompt('Choose no. between 51-60'))
    if(q1==54){
        alert('Thats great its correct ^_^')
        counter=counter+1;
        break;
    }
  
    else if(q1<54){
        alert('its lower')
    }
    else{
        alert('its higher')
    }
  } 
  for(let i =0 ; i<4;i++){
    let q1=parseInt(prompt('Choose no. between 61-70'))
    if(q1==62){
        alert('Thats great its correct ^_^')
        counter=counter+1;
        break;
    }
  
    else if(q1<62){
        alert('its lower')
    }
    else{
        alert('its higher')
    }
  } 
  
  

  let player=['Ronaldo','Messi','Salah','Neymar','Suarez','Cavani','Benzema','Di maria','Kanti','dybala']

  for (let i =0 ;i<6;i++){
  let q7=prompt('Who one is my favorite player ?'+player).toLocaleLowerCase()

  if (q7==player[5]){
      alert('Your answer is correct ^_^')
      counter=counter+1;
      break;
  }
  else {
      alert('Your answer is incorrect')
  }
}
alert('your result is '+counter+' out of 7')