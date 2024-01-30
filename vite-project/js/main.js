import '../css/style.css'
import { DOMselectors } from './dom.js'
import { coin } from './coins.js'
//reminder keep it simple before it becomes a nightmare to explain 
function flipcoin(coinfliped) {
  const flips = []
  for(let i = 0; i < coinfliped; i++) {
    const randomValue = coin[
      Math.floor(Math.random() * coin.length)
    ];
    flips.push(randomValue);
  };
  return flips;
};


DOMselectors.flipForm.addEventListener("submit", function(event) {
  event.preventDefault();
  DOMselectors.result.innerHTML = "";
  const coinfliped = parseInt(DOMselectors.flipOptions.value);
  const result = flipcoin(coinfliped);
  result.forEach(flip => {
    DOMselectors.result.insertAdjacentHTML(
      "beforeend",
      `
        <div class="coin">
          <img src="${flip.img}" class="coin-image"><br>
        </div>
      `
    );
  });
});