//document.getElementById("count-el").innerText = "5";"
let countEl = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
// console.log(saveEl);
let count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
}
function decrement() {
    count -= 1;
    countEl.innerHTML = count;
}
function save() {
    let countStr = count + " - ";
    saveEL.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
