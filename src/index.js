import "./style.scss";

document.addEventListener('DOMContentLoaded', function(){
  const dino = document.querySelector("#dino");
  const standartCactus = document.querySelector(".standart-cactus");
  const dinoInitialBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
  const dinoWidth = parseInt(window.getComputedStyle(dino).getPropertyValue("max-width"));
  const standartCactusHeight = parseInt(window.getComputedStyle(standartCactus).getPropertyValue("height"));

  document.addEventListener("keydown", (event) => {
    jump();
  });
  function jump() {
    if (!dino.classList.contains("jump")) {
      dino.classList.add("jump");
      setTimeout(() => {
        dino.classList.remove("jump");
      }, 500);
    }
  }

  let isALive = setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(standartCactus).getPropertyValue("left"));
    if(dinoBottom < standartCactusHeight && cactusLeft < dinoWidth && cactusLeft > 0) {
      alert('GAME OVER')
    }
  }, 10)
});