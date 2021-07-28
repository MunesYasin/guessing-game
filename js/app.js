'use strict';
let username = prompt('Whats your name ?')

while (username == 'null' || username == ''){
let username =prompt('Plz enter your name')
}

//console.log(username)
alert('Hello '+username+' .Welcome to our website')

function quastionAboutMe1(x){
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
quastionAboutMe1(prompt('Do I love mansaf?').toLowerCase())
quastionAboutMe1(prompt('Am I jordanian?').toLowerCase())
quastionAboutMe1(prompt('Am I interesting in software developer ?').toLowerCase())


function quastionAboutMe2(x){
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
quastionAboutMe2(prompt("Do I play Pubg ?").toLowerCase())
quastionAboutMe2(prompt("Do I like sport?").toLowerCase())



let wel=confirm('Is our website beautiful')
//console.log(wel)
if(wel == true){
    alert('Thank you ')
  
  }
  else{
    alert('We will improve it')
  }


let counter=0
function numberQuastion(x,y){
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
numberQuastion('Choose no. between 1-10', 5);
numberQuastion('Choose no. between 11-20', 14);
numberQuastion('Choose no. between 21-30', 27);
numberQuastion('Choose no. between 31-40', 36);
numberQuastion('Choose no. between 41-50', 50);
numberQuastion('Choose no. between 51-60', 54);
  
  

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
alert(username+' We finish the quiz. your result is '+counter+' out of 7')
