  'use strict';

     let secretNumber = Math.trunc(Math.random()*20)+1;//chiffre aléatoire de 1 - 20
     let score = 20;
     let highscore = 0;

     const displayMessage = function(message){
       document.querySelector('.message').textContent = message;
     }
     
     document.querySelector('.check').addEventListener('click',function(){
       const guess = Number(document.querySelector('.guess').value);
       console.log(guess,typeof guess);

       //When there is no input
       if(!guess){ //If no guess
       
        displayMessage('Aucun Nombre🚫⛔');

       //When player wins
       }else if(guess === secretNumber){
         //document.querySelector('.message').textContent = 'GREAT!!! Correct Number🎉';
         
         displayMessage('Bien joué!!! vous l\'avez🎉');
         document.querySelector('.number').textContent = secretNumber;
         document.querySelector('body').style.backgroundColor = '#60b347';
         document.querySelector('.number').style.width = '30rem';

         if(score > highscore){
           highscore = score;
           document.querySelector('.highscore').textContent = highscore;
         }

      //When guess is wrong
       }else if(guess !== secretNumber){

        if(score > 1){
         displayMessage(guess > secretNumber ? 'Trop elevé📈' :'Trop en dessous📉');
         score = score-1;
          document.querySelector('.score').textContent = score;
         }else{
          displayMessage('Vous avez perdu la partie💥');
           document.querySelector('.score').textContent = 0;
         }
        }

    
});

//Coding challenge #1:

document.querySelector('.again').addEventListener('click',function(){
score = 20;

secretNumber = Math.trunc(Math.random() * 20)+1;//chiffre aléatoire de 1 - 20
displayMessage('commencer à deviner...');
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?'; 
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';


});