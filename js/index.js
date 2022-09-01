let scoreHomeEL = document.getElementById('score-home');
let scoreGuestEL = document.getElementById('score-guest');

let counterHome = 0;
let counterGuest = 0;

function addOneHome() {
    counterHome += 1;
    scoreHomeEL.textContent = counterHome;
    ahead();
}
function addTwoHome() {
    counterHome += 2;
    scoreHomeEL.textContent = counterHome;
    ahead();
}
function addThreeHome() {
    counterHome += 3;
    scoreHomeEL.textContent = counterHome;
    ahead();
}/*
addOneHome = () => { counterHome += 1; scoreHomeEL.textContent = counterHome };
addTwoHome = () => { counterHome += 2; scoreHomeEL.textContent = counterHome };
addThreeHome = () => { counterHome += 3; scoreHomeEL.textContent = counterHome };
/*
function addOneGuest() {
    counterGuest += 1;
    scoreGuestEL.textContent = counterGuest;
}
function addTwoGuest() {
    counterGuest += 2;
    scoreGuestEL.textContent = counterGuest;
}
function addThreeGuest() {
    counterGuest += 3;
    scoreGuestEL.textContent = counterGuest;
}*/
addOneGuest = () => { counterGuest += 1; scoreGuestEL.textContent = counterGuest; ahead() };
addTwoGuest = () => { counterGuest += 2; scoreGuestEL.textContent = counterGuest; ahead() };
addThreeGuest = () => { counterGuest += 3; scoreGuestEL.textContent = counterGuest; ahead() };

function resetScore() {
    counterHome = 0; scoreHomeEL.textContent = counterHome;
    counterGuest = 0; scoreGuestEL.textContent = counterGuest;
    ahead();
}
function ahead() {
    if (counterHome > counterGuest) {
        scoreHomeEL.classList.remove("border-behind");
        scoreHomeEL.classList.add("border-ahead");
        scoreGuestEL.classList.add("border-ahead");
        scoreGuestEL.classList.add("border-behind");
    } else if (counterGuest > counterHome) {
        scoreHomeEL.classList.remove("border-ahead");
        scoreHomeEL.classList.add("border-behind");
        scoreGuestEL.classList.remove("border-behind");
        scoreGuestEL.classList.add("border-ahead");
    } else {
        scoreHomeEL.classList.remove("border-behind");
        scoreHomeEL.classList.remove("border-ahead");
        scoreGuestEL.classList.remove("border-behind");
        scoreGuestEL.classList.remove("border-ahead");
    }
}
