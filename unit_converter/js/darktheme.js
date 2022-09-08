export function themeToggle() {



/* Toggle Dark || Light Mode */
// function themeToggle() {
    // console.log(themeBtn.textContent)
    if(themeBtn.textContent === 'Dark Theme') {
        themeBtn.textContent = "Light Theme"
        sectCont.classList.remove('light-bg')
        sectCont.classList.add('dark-bg')

        h3Length.classList.remove('light-txt')
        h3Length.classList.add('dark-txt')
        h3Volume.classList.remove('light-txt')
        h3Volume.classList.add('dark-txt')
        h3Mass.classList.remove('light-txt')
        h3Mass.classList.add('dark-txt')
        
        itemLength.classList.add('item-card-dark')
        itemVolume.classList.add('item-card-dark')
        itemMass.classList.add('item-card-dark')

        resultLength.classList.remove('light-p')
        resultLength.classList.add('dark-p')

        resultVolume.classList.remove('light-p')
        resultVolume.classList.add('dark-p')

        resultMass.classList.remove('light-p')
        resultMass.classList.add('dark-p')

        logoTxt.classList.remove('logo-light')
        logoTxt.classList.add('logo-dark')
    } else {
        themeBtn.textContent = "Dark Theme"
        sectCont.classList.remove('dark-bg')
        sectCont.classList.add('light-bg')
        
        h3Length.classList.remove('dark-txt')
        h3Length.classList.add('light-txt')
        h3Volume.classList.remove('dark-txt')
        h3Volume.classList.add('light-txt')
        h3Mass.classList.remove('dark-txt')
        h3Mass.classList.add('light-txt')
        
        itemLength.classList.remove('item-card-dark')
        itemVolume.classList.remove('item-card-dark')
        itemMass.classList.remove('item-card-dark')
        
        resultLength.classList.remove('dark-p')
        resultLength.classList.add('light-p')
        
        resultVolume.classList.remove('dark-p')
        resultVolume.classList.add('light-p')
        
        resultMass.classList.remove('dark-p')
        resultMass.classList.add('light-p')
        
        logoTxt.classList.remove('logo-dark')
        logoTxt.classList.add('logo-light')
    }
}
const themeBtn = document.getElementById('theme-btn');
const sectCont = document.getElementById('sect-cont');
const h3Length = document.getElementById('h3-length');
const h3Volume = document.getElementById('h3-volume');
const h3Mass = document.getElementById('h3-mass');
const itemLength = document.getElementById('item-length');
const itemVolume = document.getElementById('item-volume');
const itemMass = document.getElementById('item-mass');
const logoTxt = document.getElementById('logo-txt');

let resultLength = document.getElementById("result-length")
let resultVolume = document.getElementById("result-volume")
let resultMass = document.getElementById("result-mass")