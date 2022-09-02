let cards = [];
let sum = 0;
let isAlive = false;
let hasBlankJack = false;
let messageEL = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardsEL = document.getElementById("cards-el");
let message = "";
let newCardButtonEL = document.getElementById("new-card-button");
let playerEl = document.getElementById("player-el");
let player = {
    name: "Hermann",
    chips: 923
}

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1 ;
    if (randomNumber > 10) { return 10 } else 
    if (randomNumber === 1) { return 11 } 
    else { return randomNumber }
}
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
    newCardButtonEL.disabled = false;
    newCardButtonEL.classList.remove("disableition");
}
function renderGame() {
    sumEL.textContent = "Sum: " + sum;
    cardsEL.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " - ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "BLACKJACK!";
        hasBlankJack = true;
        newCardButtonEL.classList.add("disableition");
    } else {
        message = "You're out!";
        isAlive = false;
        // disable NEW CARD button
        newCardButtonEL.disabled = true;
        newCardButtonEL.classList.add("disableition");
    }
    messageEL.textContent = message;
}
function newCard() {
    if (isAlive && !hasBlankJack) {
        let card = getRandomCard();
        console.log(card);
        sum += card;
        cards.push(card);
        renderGame();
        // alert("You can't get a card");
    }
}
