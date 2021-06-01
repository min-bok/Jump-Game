const game = document.querySelector("#game");
const character = document.querySelector("#character");
const bomb = document.querySelector("#bomb");
const gameoverText = document.querySelector("#gameover");
const startBtn = document.querySelector("#btn");
const jumpNum = document.querySelector("#jumpNum");
const jumpNumCnt = document.querySelector("#jumpNum span");
const replayBtn = document.querySelector("#replay");
const howtoplay = document.querySelector("#howtoplay");
let stopflag = false;

// start 버튼 누르면
startBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  stopflag = false;
  bomb.classList.add("move");
  gameoverText.classList.add("hidden");
  startBtn.classList.add("hidden");
  jumpNum.classList.remove("hidden");
  jumpNumCnt.textContent = 0;
  howtoplay.classList.add("hidden");
  character.style.display = "block";
  setTimeout( function () { bomb.style.display = "block"; }, 1000);
});

// replay 버튼 누르면
replayBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  stopflag = false;
  bomb.classList.add("move");
  gameoverText.classList.add("hidden");
  replayBtn.style.display="none";
  jumpNum.classList.remove("hidden");
  jumpNumCnt.textContent = 0;
  howtoplay.classList.add("hidden");
  character.style.display = "block";
  setTimeout( function () { bomb.style.display = "block"; }, 1000);
});

// 게임화면 누르면
game.addEventListener("click", (e) => {
  if (!stopflag) {
    character.classList.add("jump");
    stopflag = true;
    jumpNumCnt.textContent++;
  } else if (stopflag) {
    return;
  }

  // 연속으로 캐릭터가 뛰지 않도록 조절
  setTimeout(() => {
    character.classList.remove("jump");
    stopflag = false;
  }, 1000);
});

// 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let bombLeft = parseInt(
    window.getComputedStyle(bomb).getPropertyValue("left")
  );
  // 졌다.
  if (characterTop > 0 && bombLeft < 250 && bombLeft > 220) {
    stopflag = true;
    bomb.classList.remove("move");
    gameoverText.classList.remove("hidden");
    replayBtn.style.display = "block";

    setTimeout(() => {
      replayBtn.classList.remove("hidden");
    }, 1000);
  }
}, 100);

if (textContent > 1) {
  character.classList.add("hidden");
}
