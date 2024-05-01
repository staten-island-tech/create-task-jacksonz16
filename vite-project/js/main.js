import '../css/style.css'
import { DOMselectors } from './dom.js'
import { coin } from './coins.js'

let screenShow = 0
let amountFlipped = [0,0]

function flipcoin(coinfliped) {
  const flips = []
  for(let i = 0; i < coinfliped; i++) {
    const randomValue = coin[
      Math.floor(Math.random() * coin.length)
    ];
    console.log(amountFlipped[randomValue.value - 1])
    amountFlipped[randomValue.value - 1]++
    DOMselectors.heads.textContent = `Heads: ${amountFlipped[0]}`
    DOMselectors.tails.textContent = `Tails: ${amountFlipped[1]}`
    flips.push(randomValue);

  };    
  return flips;
};

showPoints()

addEventListener("keydown", (event) => {if(event.key == "Shift"){
  showPoints()
}});

function showPoints(){
  screenShow++
  if(screenShow % 2){
    DOMselectors.menu.style.display = "none"; 
  }
  else{
    DOMselectors.menu.style.display = "block"; 
  }
}

DOMselectors.flipForm.addEventListener("submit", function(event) {
  event.preventDefault();
  DOMselectors.result.innerHTML = "";
  const coinfliped = parseInt(DOMselectors.flipOptions.value);
  const result = flipcoin(coinfliped);
  result.forEach(coin => {
    DOMselectors.result.insertAdjacentHTML(
      "beforeend",
      `
      <div class="coin">
      <img src="${coin.img}" class="coin-image" img alt="${coin.altext}">
      <br>
    </div>
      `
    );
  });})