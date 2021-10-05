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
const pop3 = new Audio("pop3.mp3");
const gameoverSound = new Audio("gameover.mp3");
const stage = new Audio("mainthemeoverworld.mp3");
const stage2 = new Audio("underwater.mp3");
const charSound = new Audio("menu.mp3");
const charSound2 = new Audio("menu2.mp3");
const charSound3 = new Audio("menu3.mp3");
const nextSound = new Audio("levelcomplete.mp3");
const gameclearsound = new Audio("levelcomplete.mp3");
const jumpSound = new Audio("jump-small.wav");
const earthequake = new Audio("earthequake.mp3");
const falling = new Audio("falling.mp3");
const ending = new Audio("ending.mp3");
const Babylaughing = new Audio("Babylaughing.mp3");
const jumpPad = document.querySelector("#jumpPad");
const nextStage = document.querySelector("#nextStage");
const playBtn = document.querySelector("#playBtn");
const prev = document.querySelector("#preventer");
const game2 = document.querySelector("#game2");
const ground2 = document.querySelector("#ground2");
const cloud2 = document.querySelector("#cloud2");
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
const up = document.querySelector("#up");
const right = document.querySelector("#right");
const down = document.querySelector("#down");
const replayBtn2 = document.querySelector("#replayBtn2");
const gameover2 = document.querySelector("#gameover2");
const jumpNum2 = document.querySelector("#jumpNum2");
const jumpNum2Cnt = document.querySelector("#jumpNum2 span");
const jumpPad2 = document.querySelector("#jumpPad2");
const gameclear = document.querySelector("#gameclear");
const character3 = document.querySelector("#character3");
const pauseCharacter3 = document.querySelector("#pauseCharacter3");
const cradle = document.querySelector("#cradle");
const cradlewithbaby = document.querySelector("#cradlewithbaby");
const smileBaby = document.querySelector("#smileBaby");
const arrowBounce4 = document.querySelector("#arrowBounce4");
const ground3 = document.querySelector("#ground3");
const justchar = document.querySelector("#justchar");
const walkingmonster = document.querySelector("#walkingmonster");
const reload = document.querySelector("#reload");
const point = document.querySelector("#point");
const howtoplay3 = document.querySelector("#howtoplay3");
let stopflag = false;

stage.loop = true;
stage.autoplay = true;
stage.volume = 0.1;

stage2.loop = true;
stage2.autoplay = true;
stage2.volume = 0.1;

nextSound.loop = false;
nextSound.autoplay = true;
nextSound.volume = 0.1;

gameclearsound.loop = false;
gameclearsound.autoplay = true;
gameclearsound.volume = 0.1;

ending.loop = true;
ending.autoplay = true;
ending.volume = 0.1;

gameoverSound.loop = false;
gameoverSound.volume = 0.2;

jumpPad.onclick = function () {
  jumpSound.play();
  jumpSound.volume = 0.2;
  }

jumpPad2.onclick = function () {
  jumpSound.play();
  jumpSound.volume = 0.2;
  }

reload.onclick = function () {
  location.reload();
  charSound2.play();
  charSound2.volume = 0.6;
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
up.classList.add("hidden");
right.classList.add("hidden");
down.classList.add("hidden");
replayBtn2.classList.add("hidden");
gameover2.classList.add("hidden");
jumpPad2.classList.add("hidden");
gameclear.classList.add("hidden");
volume2.style.display = "none"
mute2.style.display = "none"
character3.classList.add("hidden");
pauseCharacter3.classList.add("hidden");
cradle.classList.add("hidden");
cradlewithbaby.classList.add("hidden");
smileBaby.classList.add("hidden");
arrowBounce4.classList.add("hidden");
ground3.classList.add("hidden");
justchar.classList.add("hidden");
walkingmonster.classList.add("hidden");
reload.classList.add("hidden");
point.classList.add("hidden");
howtoplay3.classList.add("hidden");

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
    volume.style.display = "block"
    stage.play();
    charSound2.play();
    charSound2.volume = 0.6;
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
    charSound2.play();
    charSound2.volume = 0.6;
    goBtn.classList.add("hidden");
    howtoplay.classList.add("hidden");
    character.classList.remove("hidden");
    character.classList.add("character");
    setTimeout(function () {character.classList.add("hidden");}, 2000);
    setTimeout(function () {pauseCharacter.classList.remove("hidden");}, 2000);
    setTimeout(function () {jumpNum.classList.remove("hidden");}, 2000);
    setTimeout(function () {bomb .classList.remove("hidden");}, 2000);
    setTimeout(function () {bomb .classList.add("bomb");}, 2000);
    jumpPad.classList.remove("hidden");
    jumpNumCnt.textContent = -1;  //-1//
}

//replay 버튼 누르면
replayBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    stopflag = false;
    charSound2.play();
    charSound2.volume = 0.6;
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
    setTimeout(function () { bomb.style.display = "block"; }, 1000);
  });

jumpPad.onclick = function () {
  if (jumpNumCnt.textContent == 3) {
      jumpSound.pause(); 
      stage.pause(); 
      nextSound.play();
      nextSound.volume = 0.1;
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
}
            
//4K 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1922px) and (max-width: 2691px)").matches == true) {
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
      if (pauseCharacterTop > 400 && bombLeft > 340  && bombLeft < 650) {
        stopflag = true;
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

//Desktop 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1442px) and (max-width: 1921px)").matches == true) {
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
      if (pauseCharacterTop > 200 && bombLeft > 210  && bombLeft < 420) {
        stopflag = true;
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

//Laptop L 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1282px) and (max-width: 1441px)").matches == true) {
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
      if (pauseCharacterTop > 70 && bombLeft > 70  && bombLeft < 270) {
        stopflag = true;
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

//My laptop 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1026px) and (max-width: 1281px)").matches == true) {
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
      if (pauseCharacterTop > 70 && bombLeft > 50  && bombLeft < 190) {
        stopflag = true;
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

//Laptop 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 770px) and (max-width: 1025px)").matches == true) {
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
      if (pauseCharacterTop > 70 && bombLeft > 0  && bombLeft < 135) {
        stopflag = true;
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
      if (pauseCharacterTop > 70 && bombLeft > -130  && bombLeft < -80) {
        stopflag = true;
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
        charSound2.play();
        charSound2.volume = 0.6;
        }

      volume.onclick =function(){
        mute.style.display = "block";
        volume.style.display = "none";
        stage.pause();
        charSound2.play();
        charSound2.volume = 0.6;
        }

//Game2

//playBtn누르면
playBtn.addEventListener("click", function() {
  charSound2.play();
  charSound2.volume = 0.6;
  nextSound.pause();
  volume2.style.display = "block"
  stage2.play();
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
  charSound2.play();
  charSound2.volume = 0.6;
  stage2.play();
  earthequake.play();
  setTimeout(function () {falling.play();}, 1600);
  ground2.classList.add("earthquake");
  pauseCharacter2.classList.add("charEarthquake");
  preventer.classList.remove("hidden");
  setTimeout(function () {pauseCharacter2.classList.add("hidden");}, 1500);
  setTimeout(function () {ShockedBaby.classList.remove("hidden");}, 1500);
  setTimeout(function () {ShockedChar.classList.remove("hidden");}, 1500);
  setTimeout(function () {ShockedBaby.classList.add("ShockedBaby");}, 1500);
  setTimeout(function () {ShockedChar.classList.add("ShockedChar");}, 1500);
  setTimeout(function () {cloud2.classList.add("hidden");}, 2500);
  if(window.matchMedia("(min-width: 770px) and (max-width: 2691px)").matches == true) {
    setTimeout(function () {howtoplay2.classList.remove("hidden");}, 2500);
  }
  setTimeout(function () {goBtn2.classList.remove("hidden");}, 2500);
  setTimeout(function () {sand.classList.remove("hidden");}, 2500);
  setTimeout(function () {seaweed.classList.remove("hidden");}, 2500);
  setTimeout(function () {coral.classList.remove("hidden");}, 2500);
  setTimeout(function () {ShockedBaby.classList.add("hidden");}, 2500);
  setTimeout(function () {ShockedChar.classList.add("hidden");}, 2500);
  if(window.matchMedia("(max-width: 769px)").matches == true) {
    setTimeout(function () {howtoplay3.classList.remove("hidden");}, 2500);
  }
});

//goBtn2 누르면
goBtn2.addEventListener("click", function() {
  charSound2.play();
  charSound2.volume = 0.6;
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
  up.classList.remove("hidden");
  up.classList.add("up");
  right.classList.remove("hidden");
  right.classList.add("right");
  down.classList.remove("hidden");
  down.classList.add("down");
  howtoplay3.classList.add("hidden");
  jumpNum2.classList.remove("hidden");
  jumpNum2Cnt.textContent = 0;  //-1//
});

//replay2 버튼 누르면
replayBtn2.addEventListener("click", (e) => {
  e.stopPropagation();
  stopflag = false;
  charSound2.play();
  charSound2.volume = 0.6;
  volume2.style.display = "block"
  shark.classList.add("shark");
  bomb.classList.remove("bomb");
  gameover2.classList.add("hidden");
  babyBubble.classList.remove("hidden");
  babyBubble.classList.add("babyBubble");
  up.classList.remove("hidden");
  up.classList.add("up");
  right.classList.remove("hidden");
  right.classList.add("right");
  down.classList.remove("hidden");
  down.classList.add("down");
  replayBtn2.style.display="none";
  jumpNum2.classList.remove("hidden");
  jumpNum2Cnt.textContent = 0;
  prev.classList.add("hidden");
  stage2.play();
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

 if(window.matchMedia("(min-width: 770px) and (max-width: 2691px)").matches == true) {
  document.addEventListener("keydown", checkKeyPressed, false); 
  function checkKeyPressed(e) {
 if (e.keyCode === 83) {  //아래
   down.classList.add("hidden");
 }

 if (e.keyCode === 68) { //오른쪽
   right.classList.add("hidden");
 }

 if (e.keyCode === 87) {  //위
   up.classList.add("hidden");
 }
  
 if (e.keyCode === 32)  {  //스페이스바
   babyBubble.classList.add("hidden");
   gameclearsound.play();
   gameover2.classList.add("hidden");
   jumpNum2.classList.add("hidden");
   swimchar.classList.remove("swim");
   prev.classList.remove("hidden");
   shark.classList.remove("shark");
   swimchar.classList.remove("swim");
   babyBubble.classList.add("hidden");
   stage2.pause();
   jumpPad2.classList.add("hidden");
   volume2.style.display = "none";
   mute2.style.display = "none";
   setTimeout(function () {gameclear.classList.remove("hidden");}, 500);
   setTimeout(function () {down.classList.add("hidden");}, 500);
   setTimeout(function () {right.classList.add("hidden");}, 500);
   setTimeout(function () {up.classList.add("hidden");}, 500);
   setTimeout(function () {gameclear.classList.add("hidden");}, 6000);
   setTimeout(function () {sand.classList.add("hidden");}, 6000);
   setTimeout(function () {swimchar.classList.add("hidden");}, 6000);
   setTimeout(function () {shark.style.display = "none";}, 6000);
   setTimeout(function () {ground3.classList.remove("hidden");}, 6000);
   setTimeout(function () {cloud2.classList.remove("hidden");}, 6000);
   setTimeout(function () {fish.classList.add("hidden");}, 6000);
   setTimeout(function () {seaweed.classList.add("hidden");}, 6000);
   setTimeout(function () {coral.classList.add("hidden");}, 6000);
   setTimeout(function () {ending.play();}, 5500);
   setTimeout(function () {gameclearsound.pause();}, 6000);
   setTimeout(function () {character3.classList.remove("hidden");}, 6000);
   setTimeout(function () {character3.classList.add("character3");}, 6000);
   setTimeout(function () {cradle.classList.remove("hidden");}, 6000);
   setTimeout(function () {character3.classList.add("hidden");}, 10000);
   setTimeout(function () {cradle.classList.remove("hidden");}, 10000);
   setTimeout(function () {pauseCharacter3.classList.remove("hidden");}, 10000);
   setTimeout(function () {cradlewithbaby.classList.remove("hidden");}, 11000);
   setTimeout(function () {pauseCharacter3.classList.add("hidden");}, 11000);
   setTimeout(function () {justchar.classList.remove("hidden");}, 11000);
   setTimeout(function () {justchar.classList.add("hidden");}, 11500);
   setTimeout(function () {walkingmonster.classList.remove("hidden");}, 11500);
   setTimeout(function () {walkingmonster.classList.add("walkingmonster");}, 11500);  
   setTimeout(function () {smileBaby.classList.remove("hidden");}, 15000);
   setTimeout(function () {Babylaughing.play();}, 11500);
   setTimeout(function () {point.classList.remove("hidden");}, 15000);
   setTimeout(function () {Babylaughing.pause();}, 22000);
   setTimeout(function () {reload.classList.remove("hidden");}, 20000);
   setTimeout(function () {point.classList.add("hidden");}, 18000);
   setTimeout(function () {walkingmonster.classList.add("hidden");}, 16500);
  }
}}

if(window.matchMedia("(max-width: 769px)").matches == true) {
  down.onclick = function () {
    down.classList.add("hidden");
  }

  up.onclick = function () {
    up.classList.add("hidden");
  }

  right.onclick = function () {
    right.classList.add("hidden");
  }

  babyBubble.onclick = function () {
    babyBubble.classList.add("hidden");
    gameclearsound.play();
    gameover2.classList.add("hidden");
    jumpNum2.classList.add("hidden");
    swimchar.classList.remove("swim");
    prev.classList.remove("hidden");
    shark.classList.remove("shark");
    swimchar.classList.remove("swim");
    babyBubble.classList.add("hidden");
    stage2.pause();
    jumpPad2.classList.add("hidden");
    volume2.style.display = "none";
    mute2.style.display = "none";
    setTimeout(function () {gameclear.classList.remove("hidden");}, 500);
    setTimeout(function () {down.classList.add("hidden");}, 500);
    setTimeout(function () {right.classList.add("hidden");}, 500);
    setTimeout(function () {up.classList.add("hidden");}, 500);
    setTimeout(function () {gameclear.classList.add("hidden");}, 6000);
    setTimeout(function () {sand.classList.add("hidden");}, 6000);
    setTimeout(function () {swimchar.classList.add("hidden");}, 6000);
    setTimeout(function () {shark.style.display = "none";}, 6000);
    setTimeout(function () {ground3.classList.remove("hidden");}, 6000);
    setTimeout(function () {cloud2.classList.remove("hidden");}, 6000);
    setTimeout(function () {fish.classList.add("hidden");}, 6000);
    setTimeout(function () {seaweed.classList.add("hidden");}, 6000);
    setTimeout(function () {coral.classList.add("hidden");}, 6000);
    setTimeout(function () {ending.play();}, 5500);
    setTimeout(function () {gameclearsound.pause();}, 6000);
    setTimeout(function () {character3.classList.remove("hidden");}, 6000);
    setTimeout(function () {character3.classList.add("character3");}, 6000);
    setTimeout(function () {cradle.classList.remove("hidden");}, 6000);
    setTimeout(function () {character3.classList.add("hidden");}, 10000);
    setTimeout(function () {cradle.classList.remove("hidden");}, 10000);
    setTimeout(function () {pauseCharacter3.classList.remove("hidden");}, 10000);
    setTimeout(function () {cradlewithbaby.classList.remove("hidden");}, 11000);
    setTimeout(function () {pauseCharacter3.classList.add("hidden");}, 11000);
    setTimeout(function () {justchar.classList.remove("hidden");}, 11000);
    setTimeout(function () {justchar.classList.add("hidden");}, 11500);
    setTimeout(function () {walkingmonster.classList.remove("hidden");}, 11500);
    setTimeout(function () {walkingmonster.classList.add("walkingmonster");}, 11500);  
    setTimeout(function () {smileBaby.classList.remove("hidden");}, 15000);
    setTimeout(function () {Babylaughing.play();}, 11500);
    setTimeout(function () {point.classList.remove("hidden");}, 15000);
    setTimeout(function () {Babylaughing.pause();}, 22000);
    setTimeout(function () {reload.classList.remove("hidden");}, 20000);
    setTimeout(function () {point.classList.add("hidden");}, 18000);
    setTimeout(function () {walkingmonster.classList.add("hidden");}, 16500);
 };
}

 jumpPad2.onclick = function () {
  jumpSound.play();
  jumpSound.currentTime = 0
  }

//4K 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1922px) and (max-width: 2691px)").matches == true) {
  game2.addEventListener("click", (e) => {
    if (!stopflag) {
      swimchar.classList.add("swim");
      stopflag = true;
      jumpNum2Cnt.textContent++;
  } else if (stopflag) {
    return;
 }
 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
      swimchar.classList.remove("swim");
       }, 1000);
       stopflag = false;
     });
   
  // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
  setInterval(() => {
       let swimcharTop = parseInt(
       window.getComputedStyle(swimchar).getPropertyValue("top")
    );
    let sharkLeft = parseInt(
       window.getComputedStyle(shark).getPropertyValue("left")
    );

    // 게임오버
    if (swimcharTop > 180 && sharkLeft > 200  && sharkLeft < 330) {
      gameoverSound.play();
      prev.classList.remove("hidden");
      gameover2.classList.remove("hidden");
      replayBtn2.style.display = "block";
      shark.classList.remove("shark");
      swimchar.classList.remove("swim");
      babyBubble.classList.add("hidden");
      up.classList.add("hidden");
      right.classList.add("hidden");
      down.classList.add("hidden");
      stage2.pause();
      gameclear.classList.add("hidden");
      jumpPad.classList.add("hidden");
      volume2.style.display = "none";
      mute2.style.display = "none";
      
      setTimeout(() => {
        replayBtn2.classList.remove("hidden");
        }, 1000);}
      }, 100);
    }

//Desktop 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1442px) and (max-width: 1921px)").matches == true) {
  game2.addEventListener("click", (e) => {
    if (!stopflag) {
      swimchar.classList.add("swim");
      stopflag = true;
      jumpNum2Cnt.textContent++;
  } else if (stopflag) {
    return;
 }
 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
      swimchar.classList.remove("swim");
       }, 1000);
       stopflag = false;
     });
   
  // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
  setInterval(() => {
       let swimcharTop = parseInt(
       window.getComputedStyle(swimchar).getPropertyValue("top")
    );
    let sharkLeft = parseInt(
       window.getComputedStyle(shark).getPropertyValue("left")
    );

    // 게임오버
    if (swimcharTop > 110 && sharkLeft > 50  && sharkLeft < 330) {
      gameoverSound.play();
      prev.classList.remove("hidden");
      gameover2.classList.remove("hidden");
      replayBtn2.style.display = "block";
      shark.classList.remove("shark");
      swimchar.classList.remove("swim");
      babyBubble.classList.add("hidden");
      up.classList.add("hidden");
      right.classList.add("hidden");
      down.classList.add("hidden");
      stage2.pause();
      gameclear.classList.add("hidden");
      jumpPad.classList.add("hidden");
      volume2.style.display = "none";
      mute2.style.display = "none";
      
      setTimeout(() => {
        replayBtn2.classList.remove("hidden");
        }, 1000);}
      }, 100);
    }

//Laptop L 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1282px) and (max-width: 1441px)").matches == true) {
  game2.addEventListener("click", (e) => {
    if (!stopflag) {
      swimchar.classList.add("swim");
      stopflag = true;
      jumpNum2Cnt.textContent++;
  } else if (stopflag) {
    return;
 }
 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
      swimchar.classList.remove("swim");
       }, 1000);
       stopflag = false;
     });
   
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
      gameoverSound.play();
      prev.classList.remove("hidden");
      gameover2.classList.remove("hidden");
      replayBtn2.style.display = "block";
      shark.classList.remove("shark");
      swimchar.classList.remove("swim");
      babyBubble.classList.add("hidden");
      up.classList.add("hidden");
      right.classList.add("hidden");
      down.classList.add("hidden");
      stage2.pause();
      gameclear.classList.add("hidden");
      jumpPad.classList.add("hidden");
      volume2.style.display = "none";
      mute2.style.display = "none";
      
      setTimeout(() => {
        replayBtn2.classList.remove("hidden");
        }, 1000);}
      }, 100);
    }

//My LapTop 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 1026px) and (max-width: 1281px)").matches == true) {
  game2.addEventListener("click", (e) => {
      if (!stopflag) {
        swimchar.classList.add("swim");
        stopflag = true;
        jumpNum2Cnt.textContent++;
    } else if (stopflag) {
      return;
   }
   
  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
        swimchar.classList.remove("swim");
         }, 1000);
         stopflag = false;
       });
     
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
        gameoverSound.play();
        prev.classList.remove("hidden");
        gameover2.classList.remove("hidden");
        replayBtn2.style.display = "block";
        shark.classList.remove("shark");
        swimchar.classList.remove("swim");
        babyBubble.classList.add("hidden");
        up.classList.add("hidden");
        right.classList.add("hidden");
        down.classList.add("hidden");
        stage2.pause();
        gameclear.classList.add("hidden");
        jumpPad.classList.add("hidden");
        volume2.style.display = "none";
        mute2.style.display = "none";
        
        setTimeout(() => {
          replayBtn2.classList.remove("hidden");
          }, 1000);}
        }, 100);
       }

//Laptop 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 770px) and (max-width: 1025px)").matches == true) {
  game2.addEventListener("click", (e) => {
    if (!stopflag) {
      swimchar.classList.add("swim");
      stopflag = true;
      jumpNum2Cnt.textContent++;
  } else if (stopflag) {
    return;
 }
 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
      swimchar.classList.remove("swim");
       }, 1000);
       stopflag = false;
     });
   
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
      gameoverSound.play();
      prev.classList.remove("hidden");
      gameover2.classList.remove("hidden");
      replayBtn2.style.display = "block";
      shark.classList.remove("shark");
      swimchar.classList.remove("swim");
      babyBubble.classList.add("hidden");
      up.classList.add("hidden");
      right.classList.add("hidden");
      down.classList.add("hidden");
      stage2.pause();
      gameclear.classList.add("hidden");
      jumpPad.classList.add("hidden");
      volume2.style.display = "none";
      mute2.style.display = "none";
      
      setTimeout(() => {
        replayBtn2.classList.remove("hidden");
        }, 1000);}
      }, 100);
     }

//Tablet 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 427px) and (max-width: 769px)").matches == true) {
  game2.addEventListener("click", (e) => {
    if (!stopflag) {
      swimchar.classList.add("swim");
      stopflag = true;
      jumpNum2Cnt.textContent++;
  } else if (stopflag) {
    return;
 }
 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
      swimchar.classList.remove("swim");
       }, 1000);
       stopflag = false;
     });
   
  // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
  setInterval(() => {
       let swimcharTop = parseInt(
       window.getComputedStyle(swimchar).getPropertyValue("top")
    );
    let sharkLeft = parseInt(
       window.getComputedStyle(shark).getPropertyValue("left")
    );

    // 게임오버
    if (swimcharTop > 5 && sharkLeft > -50  && sharkLeft < -10) {
      gameoverSound.play();
      prev.classList.remove("hidden");
      gameover2.classList.remove("hidden");
      replayBtn2.style.display = "block";
      shark.classList.remove("shark");
      swimchar.classList.remove("swim");
      babyBubble.classList.add("hidden");
      up.classList.add("hidden");
      right.classList.add("hidden");
      down.classList.add("hidden");
      stage2.pause();
      gameclear.classList.add("hidden");
      jumpPad.classList.add("hidden");
      volume2.style.display = "none";
      mute2.style.display = "none";
      
      setTimeout(() => {
        replayBtn2.classList.remove("hidden");
        }, 1000);}
      }, 100);
     }

//*Mobile L 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 377px) and (max-width: 426px)").matches == true) {
  game2.addEventListener("click", (e) => {
    if (!stopflag) {
      swimchar.classList.add("swim");
      stopflag = true;
      jumpNum2Cnt.textContent++;
  } else if (stopflag) {
    return;
 }
 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
      swimchar.classList.remove("swim");
       }, 1000);
       stopflag = false;
     });
   
  // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
  setInterval(() => {
       let swimcharTop = parseInt(
       window.getComputedStyle(swimchar).getPropertyValue("top")
    );
    let sharkLeft = parseInt(
       window.getComputedStyle(shark).getPropertyValue("left")
    );

    // 게임오버
    if (swimcharTop > 70 && sharkLeft > -140  && sharkLeft < -40) {
      gameoverSound.play();
      prev.classList.remove("hidden");
      gameover2.classList.remove("hidden");
      replayBtn2.style.display = "block";
      shark.classList.remove("shark");
      swimchar.classList.remove("swim");
      babyBubble.classList.add("hidden");
      up.classList.add("hidden");
      right.classList.add("hidden");
      down.classList.add("hidden");
      stage2.pause();
      gameclear.classList.add("hidden");
      jumpPad.classList.add("hidden");
      volume2.style.display = "none";
      mute2.style.display = "none";
      
      setTimeout(() => {
        replayBtn2.classList.remove("hidden");
        }, 1000);}
      }, 100);
     }

//*Mobile M 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(min-width: 322px) and (max-width: 376px)").matches == true) {
    game2.addEventListener("click", (e) => {
      if (!stopflag) {
        swimchar.classList.add("swim");
        stopflag = true;
        jumpNum2Cnt.textContent++;
    } else if (stopflag) {
      return;
   }
   
  // 연속으로 캐릭터가 뛰지 않도록 조절
       setTimeout(() => {
        swimchar.classList.remove("swim");
         }, 1000);
         stopflag = false;
       });
     
    // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
    setInterval(() => {
         let swimcharTop = parseInt(
         window.getComputedStyle(swimchar).getPropertyValue("top")
      );
      let sharkLeft = parseInt(
         window.getComputedStyle(shark).getPropertyValue("left")
      );
  
      // 게임오버
      if (swimcharTop > 70 && sharkLeft > -140  && sharkLeft < -50) {
        gameoverSound.play();
        prev.classList.remove("hidden");
        gameover2.classList.remove("hidden");
        replayBtn2.style.display = "block";
        shark.classList.remove("shark");
        swimchar.classList.remove("swim");
        babyBubble.classList.add("hidden");
        up.classList.add("hidden");
        right.classList.add("hidden");
        down.classList.add("hidden");
        stage2.pause();
        gameclear.classList.add("hidden");
        jumpPad.classList.add("hidden");
        volume2.style.display = "none";
        mute2.style.display = "none";
        
        setTimeout(() => {
          replayBtn2.classList.remove("hidden");
          }, 1000);}
        }, 100);
      }

//*Mobile S 게임화면 누르면 점프 & 카운트
if(window.matchMedia("(max-width: 321px)").matches == true) {
  game2.addEventListener("click", (e) => {
    if (!stopflag) {
      swimchar.classList.add("swim");
      stopflag = true;
      jumpNum2Cnt.textContent++;
  } else if (stopflag) {
    return;
 }
 
// 연속으로 캐릭터가 뛰지 않도록 조절
     setTimeout(() => {
      swimchar.classList.remove("swim");
       }, 1000);
       stopflag = false;
     });
   
  // 0.1초마다 캐릭터와 폭탄이 닿았는지 확인
  setInterval(() => {
       let swimcharTop = parseInt(
       window.getComputedStyle(swimchar).getPropertyValue("top")
    );
    let sharkLeft = parseInt(
       window.getComputedStyle(shark).getPropertyValue("left")
    );

    // 게임오버
    if (swimcharTop > 70 && sharkLeft > -140  && sharkLeft < -80) {
      gameoverSound.play();
      prev.classList.remove("hidden");
      gameover2.classList.remove("hidden");
      replayBtn2.style.display = "block";
      shark.classList.remove("shark");
      swimchar.classList.remove("swim");
      babyBubble.classList.add("hidden");
      up.classList.add("hidden");
      right.classList.add("hidden");
      down.classList.add("hidden");
      stage2.pause();
      gameclear.classList.add("hidden");
      jumpPad.classList.add("hidden");
      volume2.style.display = "none";
      mute2.style.display = "none";
      
      setTimeout(() => {
        replayBtn2.classList.remove("hidden");
        }, 1000);}
      }, 100);
    }

    mute2.onclick =function(){
      mute2.style.display = "none";
      volume2.style.display = "block";
      stage2.play();
      }

    volume2.onclick =function(){
      mute2.style.display = "block";
      volume2.style.display = "none";
      stage2.pause();
      }

//마지막 영상



