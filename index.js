let hasBlackJack = false;
let isAlive = false;
let cards = [];
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
let player = {
    name : "Kyaw Gyi",
    chips : 150
}

playerEl.textContent = player.name + ":   $" + player.chips;

function randomNum () {
    let randomNumber = Math.floor ( Math.random()*13 ) +1;
    if ( randomNumber > 10){
        return 10;
    } else if ( randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

let start = () => {
    isAlive = true;
    let firstCard = randomNum();
    let secondCard = randomNum();
    sum = firstCard + secondCard ;
    cards = [firstCard,secondCard];
    renderGame();
}
function renderGame () {

    sumEl.textContent = "Sum : " + sum;
    cardEl.textContent = "Card : ";
    for ( let i = 0; i< cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    if ( sum <= 20 ) {
        message = "Do you want to draw a new card!"
    } else if ( sum === 21){
        message = "Woooo. You are got BlackJack"
        hasBlackJack = true
    } else  {
        message = "You are out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    if( isAlive === true && hasBlackJack === false) {
        let card = randomNum();
        messageEl.textContent = "Darawing New Card from the Desk !";
        sum += card;
        cards.push(card);
        renderGame();
        //cardEl.textContent = "Card : " + firstCard + " , " + secondCard + " , " + card ;
        console.log(cards);
    }
}


// let age = 23 ;
// if ( age <= 21) {
//     console.log("You can not enter the class !")
// }
// else if ( age > 21) {
//     console.log("Welcome")
// }

// let age1 = 100;
//  if ( age < 100) {
//     console.log("Not elegible")
//  } else if ( age === 100 ) {
//     console.log("Here is your birhtday card from the King")
//  } else {
//     console.log("Not elegible, You have already gotten one")
//  }