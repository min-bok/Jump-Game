const game = document.querySelector("#game");
const cloud = document.querySelector("#cloud");
const title = document.querySelector("#title");
const startBtn = document.querySelector("#startBtn");
const greenBox = document.querySelector("#greenBox");
const brownBox = document.querySelector("#brownBox");
const mushroom = document.querySelector("#mushroom");
const coins = document.querySelector("#coins");
const baby = document.querySelector("#baby");
const arrowBounce = document.querySelector("#arrowBounce");
const arrowBounce2 = document.querySelector("#arrowBounce2");
const monster = document.querySelector("#monster");
const walkingwithbaby = document.querySelector("#walkingwithbaby");
const howtoplay = document.querySelector("#howtoplay");
const goBtn = document.querySelector("#goBtn");
const jumpNum = document.querySelector("#jumpNum");
const jumpNumCnt = document.querySelector("#jumpNum span");
const Character = document.querySelector("#Character");
const pauseCharacter = document.querySelector("#pauseCharacter");
const bomb = document.querySelector("#bomb");
const gameover = document.querySelector("#gameover");
const replayBtn = document.querySelector("#replayBtn");
//const nextStageBtn = document.querySelector("#nextStageBtn");
//const jumpSound = new Audio("jumpsound.mp3");
let stopflag = false;

//숨김
monster.classList.add("hidden");
baby.classList.add("hidden");
arrowBounce.classList.add("hidden");
arrowBounce2.classList.add("hidden");
walkingwithbaby.classList.add("hidden");
howtoplay.classList.add("hidden");
goBtn.classList.add("hidden");
character.classList.add("hidden");
pauseCharacter.classList.add("hidden");
jumpNum.classList.add("hidden");
bomb.classList.add("hidden");
gameover.classList.add("hidden");
replayBtn.classList.add("hidden");
//nextStageBtn.classList.add("hidden");

//start 버튼 누르면
startBtn.addEventListener("click", function() {
    title.classList.add("hidden");
    startBtn.classList.add("hidden");
    greenBox.classList.add("hidden");
    brownBox.classList.add("hidden");
    mushroom.classList.add("hidden");
    coins.classList.add("hidden");
    baby.classList.remove("hidden");
    arrowBounce.classList.remove("hidden");
});

baby.addEventListener("click", function() {
    arrowBounce.classList.add("hidden");
    monster.classList.remove("hidden");
    monster.classList.add("walk");
    //4K
    if(window.matchMedia("(max-width: 2691px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 3100);
    }
    //Desktop
    if(window.matchMedia("(max-width: 1921px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 2800);
    }
    //Laptop L
    if(window.matchMedia("(max-width: 1441px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 2600);
    }
    //My Laptop 왜 적용이 안될까?
    if(window.matchMedia("(max-width: 1281px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 7200);
    }
    //Laptop
    if(window.matchMedia("(max-width: 1025px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 2000);
    }    
    //Tablet 왜 적용이 안될까?
    if(window.matchMedia("(max-width: 769px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 8200);
    }    
    //mobile L
    if(window.matchMedia("(max-width: 426px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 1800);
    }    
    //mobile M
    if(window.matchMedia("(max-width: 376px)").matches == true) {
       setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 1400);
    }    
    //mobile S
    if(window.matchMedia("(max-width: 321px)").matches == true) {
       setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 950);
    }    
});

monster.addEventListener("click", function() {
    monster.classList.add("hidden")
    baby.classList.add("hidden");
    walkingwithbaby.classList.remove("hidden");
});

walkingwithbaby.addEventListener("click", function() {
    arrowBounce2.classList.add("hidden");
    walkingwithbaby.classList.add("walkingwithbaby");
    setTimeout(function () {howtoplay.classList.remove("hidden");}, 4300);
    setTimeout(function () {goBtn.classList.remove("hidden");}, 4300); 
});

//go 버튼 누르면
goBtn.onclick = function() {
    goBtn.classList.add("hidden");
    howtoplay.classList.add("hidden");
    character.classList.remove("hidden");
    character.classList.add("character");
    setTimeout(function () {character.classList.add("hidden");}, 2000);
    setTimeout(function () {pauseCharacter.classList.remove("hidden");}, 2000);
    setTimeout(function () {jumpNum.classList.remove("hidden");}, 2000);
    setTimeout(function () {bomb .classList.remove("hidden");}, 2000);
    setTimeout(function () {bomb .classList.add("bomb");}, 2000);
    jumpNumCnt.textContent = -1;  //-1//
}

//replay 버튼 누르면
replayBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    stopflag = false;
    bomb.classList.add("bomb");
    gameover.classList.add("hidden");
    replayBtn.style.display="none";
    jumpNum.classList.remove("hidden");
    jumpNumCnt.textContent = 0;
    howtoplay.classList.add("hidden");
    setTimeout( function () { bomb.style.display = "block"; }, 1000);
  });

//Mobile M 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(max-width: 376px)").matches == true){
  game.addEventListener("click", (e) => {
      if (!stopflag) {
        pauseCharacter.classList.add("jump");
        stopflag = true;
        jumpNumCnt.textContent++;
    } else if (stopflag) {
      return;
   }
      
      //점프 시 효과음
      //jumpSound.loop = false;
      //jumpSound.volume = 1;
     // jumpSound.play();
  
   
  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
         pauseCharacter.classList.remove("jump");
         stopflag = false;
         }, 1000);
       });
    
    // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
    setInterval(() => {
         let pauseCharacterTop = parseInt(
         window.getComputedStyle(pauseCharacter).getPropertyValue("top")
      );
      let bombLeft = parseInt(
         window.getComputedStyle(bomb).getPropertyValue("left")
      );
  
      // 게임오버
      if (pauseCharacterTop > 100 && bombLeft > -165  && bombLeft < -25) {
        stopflag = true;
        gameover.classList.remove("hidden");
        replayBtn.style.display = "block";
        bomb.classList.remove("bomb");
        pauseCharacter.classList.remove("jump");
        
        setTimeout(() => {
          replayBtn.classList.remove("hidden");
          }, 1000);
          }
        }, 100);
      }

//Mobile S 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(max-width: 321px)").matches == true){
game.addEventListener("click", (e) => {
    if (!stopflag) {
      pauseCharacter.classList.add("jump");
      stopflag = true;
      jumpNumCnt.textContent++;
  } else if (stopflag) {
    return;
 }
    
    //점프 시 효과음
    //jumpSound.loop = false;
    //jumpSound.volume = 1;
   // jumpSound.play();

 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
       pauseCharacter.classList.remove("jump");
       stopflag = false;
       }, 1000);
     });
  
  // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
  setInterval(() => {
       let pauseCharacterTop = parseInt(
       window.getComputedStyle(pauseCharacter).getPropertyValue("top")
    );
    let bombLeft = parseInt(
       window.getComputedStyle(bomb).getPropertyValue("left")
    );

    // 게임오버
    if (pauseCharacterTop > 100 && bombLeft > -120  && bombLeft < -65) {
      stopflag = true;
      gameover.classList.remove("hidden");
      replayBtn.style.display = "block";
      bomb.classList.remove("bomb");
      pauseCharacter.classList.remove("jump");
      
      setTimeout(() => {
        replayBtn.classList.remove("hidden");
        }, 1000);
        }
      }, 100);
    }

//  if (textContent > 1) {
//    pauseCharacter.classList.add("hidden");
//}








  
