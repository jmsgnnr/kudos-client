'use strict'


let randomMath = function(){
    
    let btn=document.querySelector('.btn');
    // should real html from quote
    // add user quote feature ?
    // 
btn.addEventListener('click', displayQuote);


// Test array for quote list. 

let quotes=[

    'you are special',
' you are rare',
' you are a champion',
' you are great ',
' you are limitless',
' God loves you',
' You love you',
'we love you ',

];

userQuotes = [],

userQuotes.length = 0 
randomizerFunction(user.Quotes)
// USE GETFORMFIELDS TO RUN CREATE FUNCT

// CHANGE VAR FOR INDEX CODE BELOW 





function displayQuote(){
 //create an index of a random number 
 //convert it into between 0 to length of quotes[]
// randomizer function also same for userQuotes
 let index=Math.floor(Math.random()*quotes.length);

 //display the quote of that index
 let div=document.querySelector('#quote');
 let quote=`<div class="card">
<p>${quotes[index]}</p>
 
</div>
 `;
 div.innerHTML=quote;
 
}
}
module.exports = {
randomMath

}

