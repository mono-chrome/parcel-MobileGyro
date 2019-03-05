import "./styles.css";
const Shake = require("shake.js");
let myShakeEvent = new Shake({ threshold: 5 });

function correctRange(value, min1, max1, min2, max2) {
  return min2 + ((value - min1) / (max1 - min1)) * (max2 - min2);
}

myShakeEvent.start();

window.addEventListener("deviceorientation", function(event) {
  document.body.style.background = `
      hsl(
        ${Math.trunc(correctRange(Math.trunc(event.gamma), -45, 45, 0, 360))}, 
        ${Math.trunc(correctRange(Math.trunc(event.beta), -20, 60, 10, 100))}%,
        ${Math.trunc(correctRange(Math.trunc(event.gamma), -90, 90, 10, 100))}%
      )
  `;
});

window.addEventListener("shake", () => {
  document.getElementById("app").innerHTML =
    "<img src='https://media1.tenor.com/images/0562ded117922b0f32dc988d76c7e910/tenor.gif'/>";
  setTimeout(() => {
    document.getElementById("app").innerHTML = "";
  }, 4000);
});
