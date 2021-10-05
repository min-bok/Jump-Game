const game = document.querySelector("#game");
const ground = document.querySelector("#ground");
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
const clickSound = new Audio("pop.mp3");
const clickSound2 = new Audio("pop2.mp3");
const gameoverSound = new Audio("over.mp3");
const stage = new Audio("stage.mp3");
const charSound = new Audio("menu.mp3");
const charSound2 = new Audio("menu2.mp3");
const charSound3 = new Audio("menu3.mp3");
const jumpSound = new Audio("jumpsound.mp3");
const jumpPad = document.querySelector("#jumpPad");
const nextStage = document.querySelector("#nextStage");
const playBtn = document.querySelector("#playBtn");
const prev = document.querySelector("#preventer");
const game2 = document.querySelector("#game2");
const ground2 = document.querySelector("#ground2");
const character2 = document.querySelector("#character2");
const pauseCharacter2 = document.querySelector("#pauseCharacter2");
const arrowBounce3 = document.querySelector("#arrowBounce3");
const ShockedBaby = document.querySelector("#ShockedBaby");
const ShockedChar = document.querySelector("#ShockedChar");
const howtoplay2 = document.querySelector("#howtoplay2");
const goBtn2 = document.querySelector("#goBtn2");
const sand = document.querySelector("#sand");
const swimchar = document.querySelector("#swimchar");
const shark = document.querySelector("#shark");
const fish = document.querySelector("#fish");
const seaweed = document.querySelector("#seaweed");
const coral = document.querySelector("#coral");
const babyBubble = document.querySelector("#babyBubble");
const replayBtn2 = document.querySelector("#replayBtn2");
const gameover2 = document.querySelector("#gameover2");
const jumpNum2 = document.querySelector("#jumpNum2");
const jumpNum2Cnt = document.querySelector("#jumpNum2 span");
const jumpPad2 = document.querySelector("#jumpPad2");
const gameclear = document.querySelector("#gameclear");
let stopflag = false;

stage.play();
stage.loop = true;
stage.autoplay = true;
stage.volume = 0.1;

jumpPad.onclick = function () {
  jumpSound.play();
  jumpSound.volume = 0.2;
  }

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
volume.style.display = "none"
mute.style.display = "none"
jumpPad.classList.add("hidden");
jumpSound.pause();
nextStage.classList.add("hidden");
playBtn.classList.add("hidden");
prev.classList.add("hidden");
game2.classList.add("hidden");
ground2.classList.add("hidden");
character2.classList.add("hidden");
pauseCharacter2.classList.add("hidden");
arrowBounce3.classList.add("hidden");
ShockedBaby.classList.add("hidden");
ShockedChar.classList.add("hidden");
howtoplay2.classList.add("hidden");
goBtn2.classList.add("hidden");
sand.classList.add("hidden");
swimchar.classList.add("hidden");
shark.classList.add("hidden");
stage2Baby.classList.add("hidden");
fish.classList.add("hidden");
seaweed.classList.add("hidden");
coral.classList.add("hidden");
babyBubble.classList.add("hidden");
replayBtn2.classList.add("hidden");
gameover2.classList.add("hidden");
jumpPad2.classList.add("hidden");
gameclear.classList.add("hidden");

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
    clickSound.loop = false;
    clickSound.volume = 1;
    volume.style.display = "block"
    clickSound.play();
    stage.play();
});

baby.addEventListener("click", function() {
    arrowBounce.classList.add("hidden");
    monster.classList.remove("hidden");
    monster.classList.add("walk");
    charSound.play();
    charSound.volume = 0.6;

    //4K
    if(window.matchMedia("(min-width: 1922px) and (max-width: 2691px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 3100);
    }
    //Desktop
    if(window.matchMedia("(min-width: 1442px) and (max-width: 1921px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 2800);
    }
    //Laptop L
    if(window.matchMedia("(min-width: 1282px) and (max-width: 1441px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 2600);
    }
    //My Laptop
    if(window.matchMedia("(min-width: 1026px) and (max-width: 1281px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 3000);
    }
    //Laptop
    if(window.matchMedia("(min-width: 770px) and (max-width: 1025px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 2000);
    }    
    //Tablet
    if(window.matchMedia("(min-width: 427px) and (max-width: 769px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 2400);
    }    
    //mobile L
    if(window.matchMedia("(min-width: 377px) and (max-width: 426px)").matches == true) {
      setTimeout(function () {arrowBounce2.classList.remove("hidden");}, 1800);
    }
    //mobile M
    if(window.matchMedia("(min-width: 322px) and (max-width: 376px)").matches == true) {
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
    charSound2.play();
    charSound2.volume = 0.6;
    walkingwithbaby.classList.remove("hidden");
});

walkingwithbaby.addEventListener("click", function() {
    walkingwithbaby.classList.add("walkingwithbaby");
    setTimeout(function () {howtoplay.classList.remove("hidden");}, 4300);
    setTimeout(function () {goBtn.classList.remove("hidden");}, 4300); 
    arrowBounce2.style.display = "none"
    charSound3.play();
    charSound3.volume = 0.6;
});

//go 버튼 누르면
goBtn.onclick = function() {
    clickSound2.loop = false;
    clickSound2.volume = 1;
    clickSound2.play();
    goBtn.classList.add("hidden");
    howtoplay.classList.add("hidden");
    howtoplay3.classList.add("hidden");
    character.classList.remove("hidden");
    character.classList.add("character");
    setTimeout(function () {character.classList.add("hidden");}, 2000);
    setTimeout(function () {pauseCharacter.classList.remove("hidden");}, 2000);
    setTimeout(function () {jumpNum.classList.remove("hidden");}, 2000);
    setTimeout(function () {bomb .classList.remove("hidden");}, 2000);
    setTimeout(function () {bomb .classList.add("bomb");}, 2000);
    jumpPad.classList.remove("hidden");
    jumpNumCnt.textContent = 0;  //-1//
}

//replay 버튼 누르면
replayBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    stopflag = false;
    clickSound.loop = false;
    clickSound.volume = 1;
    clickSound.play();
    bomb.classList.add("bomb");
    gameover.classList.add("hidden");
    replayBtn.style.display="none";
    jumpNum.classList.remove("hidden");
    jumpNumCnt.textContent = 0;
    howtoplay.classList.add("hidden");
    prev.classList.add("hidden");
    jumpPad.classList.remove("hidden");
    stage.play();
    volume.style.display = "block";
    if (gameoverSound.paused) {
        gameoverSound.play();
  }
    else {
    gameoverSound.pause();
    gameoverSound.currentTime = 0
  }
    setTimeout( function () { bomb.style.display = "block"; }, 1000);
  });

  document.addEventListener("keydown", checkKeyPressed, false);
  function checkKeyPressed(e) {
    if (e.keyCode === 32) {
      pauseCharacter.classList.add("jump");
      swimchar.classList.add("swim")
      jumpNumCnt.textContent++;
      jumpNum2Cnt.textContent++;
    }

      if (jumpNumCnt.textContent == 3) {
          jumpSound.pause(); 
          stage.pause(); 
          nextStage.classList.remove("hidden");
          playBtn.classList.remove("hidden");
          bomb.classList.remove("bomb");
          prev.classList.remove("hidden");
          volume.style.display = "none";
          mute.style.display = "none";
          pauseCharacter.classList.remove("jump");
          jumpNum.classList.add("hidden");
          jumpPad.classList.add("hidden");

      }
      
      else {
            jumpSound.play();
            jumpSound.currentTime = 0
            }
            
//Laptop L 스페이스바 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1282px) and (max-width: 1441px)").matches == true) {

  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
         pauseCharacter.classList.remove("jump");
         }, 2000);
       };
    
    // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
    setInterval(() => {
         let pauseCharacterTop = parseInt(
         window.getComputedStyle(pauseCharacter).getPropertyValue("top")
      );
      let bombLeft = parseInt(
         window.getComputedStyle(bomb).getPropertyValue("left")
      );
  
      // 게임오버
      if (pauseCharacterTop > 70 && bombLeft > 70  && bombLeft < 200) {
        gameoverSound.loop = false;
        gameoverSound.volume = 1;
        gameoverSound.play();
        gameover.classList.remove("hidden");
        replayBtn.style.display = "block";
        bomb.classList.remove("bomb");
        pauseCharacter.classList.remove("jump");
        stage.pause();
        volume.style.display = "none";
        mute.style.display = "none";
        
        setTimeout(() => {
          replayBtn.classList.remove("hidden");
          }, 1000);
          }
        }, 100);      

//My laptop 스페이스바 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1026px) and (max-width: 1281px)").matches == true) {

  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
         pauseCharacter.classList.remove("jump");
         }, 2000);
       };
    
    // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
    setInterval(() => {
         let pauseCharacterTop = parseInt(
         window.getComputedStyle(pauseCharacter).getPropertyValue("top")
      );
      let bombLeft = parseInt(
         window.getComputedStyle(bomb).getPropertyValue("left")
      );
  
      // 게임오버
      if (pauseCharacterTop > 70 && bombLeft > 50  && bombLeft < 170) {
        gameoverSound.loop = false;
        gameoverSound.volume = 1;
        gameoverSound.play();
        gameover.classList.remove("hidden");
        replayBtn.style.display = "block";
        bomb.classList.remove("bomb");
        pauseCharacter.classList.remove("jump");
        stage.pause();
        volume.style.display = "none";
        mute.style.display = "none";
        
        setTimeout(() => {
          replayBtn.classList.remove("hidden");
          }, 1000);
          }
        }, 100);

//Laptop 스페이스바 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 770px) and (max-width: 1025px)").matches == true) {

    // 연속으로 캐릭터가 뛰지 않도록 조절
    setTimeout(() => {
      pauseCharacter.classList.remove("jump");
      }, 2000);
    };
 
 // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
 setInterval(() => {
      let pauseCharacterTop = parseInt(
      window.getComputedStyle(pauseCharacter).getPropertyValue("top")
   );
   let bombLeft = parseInt(
      window.getComputedStyle(bomb).getPropertyValue("left")
   );

   // 게임오버
   if (pauseCharacterTop > 70 && bombLeft > 30  && bombLeft < 80) {
     gameoverSound.loop = false;
     gameoverSound.volume = 1;
     gameoverSound.play();
     gameover.classList.remove("hidden");
     replayBtn.style.display = "block";
     bomb.classList.remove("bomb");
     pauseCharacter.classList.remove("jump");
     stage.pause();
     volume.style.display = "none";
     mute.style.display = "none";
     
     setTimeout(() => {
       replayBtn.classList.remove("hidden");
       }, 1000);
       }
     }, 100);

//Tablet 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 427px) and (max-width: 769px)").matches == true) {
  game.addEventListener("click", (e) => {
      if (!stopflag) {
        pauseCharacter.classList.add("jump");
        stopflag = true;
        jumpNumCnt.textContent++;
    } else if (stopflag) {
      return;
   }
      
  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
         pauseCharacter.classList.remove("jump");
         stopflag = false;
         }, 2000);
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
      if (pauseCharacterTop > 70 && bombLeft > -80  && bombLeft < 40) {
        stopflag = true;
        gameoverSound.loop = false;
        gameoverSound.volume = 1;
        gameoverSound.play();
        gameover.classList.remove("hidden");
        replayBtn.style.display = "block";
        bomb.classList.remove("bomb");
        pauseCharacter.classList.remove("jump");
        stage.pause();
        volume.style.display = "none";
        mute.style.display = "none";
        
        setTimeout(() => {
          replayBtn.classList.remove("hidden");
          }, 1000);
          }
        }, 100);
      }

//*Mobile L 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 377px) and (max-width: 426px)").matches == true) {
  game.addEventListener("click", (e) => {
    if (!stopflag) {
      pauseCharacter.classList.add("jump");
      stopflag = true;
      jumpNumCnt.textContent++;
  } else if (stopflag) {
    return;
  }
  
  // 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
       pauseCharacter.classList.remove("jump");
       stopflag = false;
       }, 1300);
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
    if (pauseCharacterTop > 70 && bombLeft > -115  && bombLeft < -38) {
      stopflag = true;
      gameoverSound.loop = false;
      gameoverSound.volume = 1;
      gameoverSound.play();
      gameover.classList.remove("hidden");
      replayBtn.style.display = "block";
      bomb.classList.remove("bomb");
      pauseCharacter.classList.remove("jump");
      stage.pause();
      volume.style.display = "none";
      mute.style.display = "none";
      
      setTimeout(() => {
        replayBtn.classList.remove("hidden");
        }, 1000);
        }
      }, 100);
    }   

//*Mobile M 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 322px) and (max-width: 376px)").matches == true) {
game.addEventListener("click", (e) => {
  if (!stopflag) {
    pauseCharacter.classList.add("jump");
    stopflag = true;
    jumpNumCnt.textContent++;
} else if (stopflag) {
  return;
}

// 연속으로 캐릭터가 뛰지 않도록 조절
   setTimeout(() => {
     pauseCharacter.classList.remove("jump");
     stopflag = false;
     }, 1400);
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
  if (pauseCharacterTop > 70 && bombLeft > -165  && bombLeft < -25) {
    stopflag = true;
    gameoverSound.loop = false;
    gameoverSound.volume = 1;
    gameoverSound.play();
    gameover.classList.remove("hidden");
    replayBtn.style.display = "block";
    bomb.classList.remove("bomb");
    pauseCharacter.classList.remove("jump");
    stage.pause();
    volume.style.display = "none";
    mute.style.display = "none";
    
    setTimeout(() => {
      replayBtn.classList.remove("hidden");
      }, 1000);
      }
    }, 100);
  }

//*Mobile S 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(max-width: 321px)").matches == true) {
  game.addEventListener("click", (e) => {
      if (!stopflag) {
        pauseCharacter.classList.add("jump");
        stopflag = true;
        jumpNumCnt.textContent++;
    } else if (stopflag) {
      return;
   }

  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
         pauseCharacter.classList.remove("jump");
         stopflag = false;
         }, 1500);
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
      if (pauseCharacterTop > 70 && bombLeft > -130  && bombLeft < -65) {
        stopflag = true;
        gameoverSound.loop = false;
        gameoverSound.volume = 1;
        gameoverSound.play();
        gameover.classList.remove("hidden");
        replayBtn.style.display = "block";
        bomb.classList.remove("bomb");
        pauseCharacter.classList.remove("jump");
        stage.pause();
        volume.style.display = "none";
        mute.style.display = "none";
        
        setTimeout(() => {
          replayBtn.classList.remove("hidden");
          }, 1000);
          }
        }, 100);
      }
      
      mute.onclick =function(){
        mute.style.display = "none";
        volume.style.display = "block";
        stage.play();
        }

      volume.onclick =function(){
        mute.style.display = "block";
        volume.style.display = "none";
        stage.pause();
        }

//Game2           

//playBtn누르면
playBtn.addEventListener("click", function() {
  playBtn.classList.add("hidden");
  game.classList.add("hidden");
  game2.classList.remove("hidden");
  bomb.classList.remove("bomb");
  bomb.classList.add("hidden");
  pauseCharacter.classList.add("hidden");
  nextStage.classList.add("hidden");
  prev.style.display = "none";
  character2.classList.remove("hidden");
  character2.classList.add("character2");
  ground2.classList.remove("hidden");
  setTimeout(function () {character2.classList.add("hidden");}, 2000);
  setTimeout(function () {pauseCharacter2.classList.remove("hidden");}, 2000);
  setTimeout(function () {arrowBounce3.classList.remove("hidden");}, 2100);
});

//pauseCharacter2 누르면
pauseCharacter2.addEventListener("click", function() {
  arrowBounce3.style.display = "none";
  ground2.classList.add("earthquake");
  pauseCharacter2.classList.add("charEarthquake");
  preventer.classList.remove("hidden");
  setTimeout(function () {pauseCharacter2.classList.add("hidden");}, 1500);
  setTimeout(function () {ShockedBaby.classList.remove("hidden");}, 1500);
  setTimeout(function () {ShockedChar.classList.remove("hidden");}, 1500);
  setTimeout(function () {ShockedBaby.classList.add("ShockedBaby");}, 1500);
  setTimeout(function () {ShockedChar.classList.add("ShockedChar");}, 1500);
  setTimeout(function () {cloud.style.display = "none";}, 2000);
  setTimeout(function () {howtoplay2.classList.remove("hidden");}, 2500);
  setTimeout(function () {goBtn2.classList.remove("hidden");}, 2500);
  setTimeout(function () {sand.classList.remove("hidden");}, 2500);
  setTimeout(function () {seaweed.classList.remove("hidden");}, 2500);
  setTimeout(function () {coral.classList.remove("hidden");}, 2500);
});

//goBtn2 누르면
goBtn2.addEventListener("click", function() {
  howtoplay2.classList.add("hidden");
  goBtn2.classList.add("hidden");
  swimchar.classList.remove("hidden");
  jumpPad2.classList.remove("hidden");
  shark.classList.remove("hidden");
  shark.classList.add("shark");
  fish.classList.remove("hidden");
  bomb.classList.remove("bomb");
  babyBubble.classList.remove("hidden");
  babyBubble.classList.add("babyBubble");
  jumpNum2.classList.remove("hidden");
  jumpNum2Cnt.textContent = 0;  //-1//
});

//replay2 버튼 누르면
replayBtn2.addEventListener("click", (e) => {
  e.stopPropagation();
  stopflag = false;
  clickSound.loop = false;
  clickSound.volume = 1;
  clickSound.play();
  shark.classList.add("shark");
  bomb.classList.remove("bomb");
  gameover2.classList.add("hidden");
  babyBubble.classList.remove("hidden");
  babyBubble.classList.add("babyBubble");
  replayBtn2.style.display="none";
  jumpNum2.classList.remove("hidden");
  jumpNum2Cnt.textContent = 0;
  prev.classList.add("hidden");
  stage.play();
  volume.style.display = "block";
  if (gameoverSound.paused) {
      gameoverSound.play();
}
  else {
  gameoverSound.pause();
  gameoverSound.currentTime = 0
}
  setTimeout( function () { shark.style.display = "block"; }, 1000);
});  

 babyBubble.addEventListener("click", (e) => {
    e.stopPropagation();
    gameclear.classList.remove("hidden");
    jumpNum2.classList.add("hidden");
    babyBubble.classList.add("hidden");
    shark.classList.remove("shark");
    swimchar.classList.remove("swim");
 });

//Laptop L 스페이스바 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1282px) and (max-width: 1441px)").matches == true) {
   
  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
        swimchar.classList.remove("swim");
         }, 1000);
       };
     
    // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
    setInterval(() => {
         let swimcharTop = parseInt(
         window.getComputedStyle(swimchar).getPropertyValue("top")
      );
      let sharkLeft = parseInt(
         window.getComputedStyle(shark).getPropertyValue("left")
      );

      // 게임오버
      if (swimcharTop > 110 && sharkLeft > -50  && sharkLeft < 150) {
        gameoverSound.loop = false;
        gameoverSound.volume = 1;
        gameoverSound.play();
        prev.classList.remove("hidden");
        gameover2.classList.remove("hidden");
        replayBtn2.style.display = "block";
        shark.classList.remove("shark");
        swimchar.classList.remove("swim");
        babyBubble.classList.add("hidden");
        stage.pause();
        jumpPad.classList.add("hidden");
        volume.style.display = "none";
        mute.style.display = "none";
        
        setTimeout(() => {
          replayBtn2.classList.remove("hidden");
          }, 1000);}
        }, 100);

//My LapTop 스페이스바 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1026px) and (max-width: 1281px)").matches == true) {
   
  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
        swimchar.classList.remove("swim");
         }, 1000);
       };
     
    // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
    setInterval(() => {
         let swimcharTop = parseInt(
         window.getComputedStyle(swimchar).getPropertyValue("top")
      );
      let sharkLeft = parseInt(
         window.getComputedStyle(shark).getPropertyValue("left")
      );

      // 게임오버
      if (swimcharTop > 100 && sharkLeft > -50  && sharkLeft < 150) {
        gameoverSound.loop = false;
        gameoverSound.volume = 1;
        gameoverSound.play();
        prev.classList.remove("hidden");
        gameover2.classList.remove("hidden");
        replayBtn2.style.display = "block";
        shark.classList.remove("shark");
        swimchar.classList.remove("swim");
        babyBubble.classList.add("hidden");
        stage.pause();
        jumpPad.classList.add("hidden");
        volume.style.display = "none";
        mute.style.display = "none";
        
        setTimeout(() => {
          replayBtn2.classList.remove("hidden");
          }, 1000);}
        }, 100);

//Laptop 스페이스바 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 770px) and (max-width: 1025px)").matches == true) {
   
  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
        swimchar.classList.remove("swim");
         }, 1000);
       };
     
    // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
    setInterval(() => {
         let swimcharTop = parseInt(
         window.getComputedStyle(swimchar).getPropertyValue("top")
      );
      let sharkLeft = parseInt(
         window.getComputedStyle(shark).getPropertyValue("left")
      );

      // 게임오버
      if (swimcharTop > 100 && sharkLeft > -10  && sharkLeft < 120) {
        gameoverSound.loop = false;
        gameoverSound.volume = 1;
        gameoverSound.play();
        prev.classList.remove("hidden");
        gameover2.classList.remove("hidden");
        replayBtn2.style.display = "block";
        shark.classList.remove("shark");
        swimchar.classList.remove("swim");
        babyBubble.classList.add("hidden");
        stage.pause();
        jumpPad.classList.add("hidden");
        volume.style.display = "none";
        mute.style.display = "none";
        
        setTimeout(() => {
          replayBtn2.classList.remove("hidden");
          }, 1000);}
        }, 100);
      }

