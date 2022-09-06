/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const userUnitEL = document.getElementById('user-unit');
const convertBtn = document.getElementById('convert-btn');

let resultLength = document.getElementById("result-length")
let resultVolume = document.getElementById("result-volume")
let resultMass = document.getElementById("result-mass")

convertBtn.addEventListener("click", function convertThisShit() {
    // console.log(userUnitEL.value)
    let pound = (userUnitEL.value * 2.204).toFixed(2);
    let kilo = (userUnitEL.value / 2.204).toFixed(2);
    let gallon = (userUnitEL.value * 2.204).toFixed(2);
    let liter = (userUnitEL.value / 2.204).toFixed(2);
    let feet = (userUnitEL.value * 3.281).toFixed(2);
    let meter = (userUnitEL.value / 3.281).toFixed(2);
    /*
    console.log({pounds})
    console.log({kilos})
    console.log({gallon})
    console.log({liter})
    console.log({feet})
    console.log({meter})
    */
    resultLength.innerHTML = `${userUnitEL.value} Meters = ${feet} Feet | ${userUnitEL.value} Feet = ${meter} Meters`
    resultVolume.innerHTML = `${userUnitEL.value} Liters = ${gallon} Gallons | ${userUnitEL.value} Gallons = ${liter} Liters`
    resultMass.innerHTML = `${userUnitEL.value} Kilos = ${pound} Pounds | ${userUnitEL.value} Punds = ${kilo} Kilos`
})
// const convertThisShit = (num) => {}
