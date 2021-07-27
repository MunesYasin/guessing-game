'use strict';


function qua(x){
let meal = x
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
} 
qua(prompt('Do I love mansaf?').toLowerCase())
qua(prompt('Am I jordanian?').toLowerCase())
qua(prompt('Am I interesting in software developer ?').toLowerCase())


function quas(x){
let game = x
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
} 
quas(prompt("Do I play Pubg ?").toLowerCase())
quas(prompt("Do I like sport?").toLowerCase())

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
function quastion(x,y){
for(let i =0 ; i<4;i++){
  let q1=parseInt(prompt(x))
  if(q1==y){
      alert('Thats great its correct ^_^')
      counter=counter+1;
      break;
  }

  else if(q1<y){
      alert('its lower')
      
  }
  else if(q1>y) {
      alert('its higher')
      
  }
  else{
      alert('plz input no. you lost one attempt ')
  }
} }
quastion('Choose no. between 1-10', 5);
quastion('Choose no. between 11-20', 14);
quastion('Choose no. between 21-30', 27);
quastion('Choose no. between 31-40', 36);
quastion('Choose no. between 41-50', 50);
quastion('Choose no. between 51-60', 54);
  
  

  let player=['Ronaldo','Messi','Salah','Neymar','Suarez','Cavani','Benzema','Di maria','Kanti','dybala']

  for (let i =0 ;i<6;i++){
  let q7=prompt('Who one is my favorite player ?'+player).toLocaleLowerCase()

  if (q7=='cavani'){
      alert('Your answer is correct ^_^')
      counter=counter+1;
      break;
  }
  else {
      alert('Your answer is incorrect')
  }
}
alert('your result is '+counter+' out of 7')
