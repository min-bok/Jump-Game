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
const clickSound = new Audio("pop.mp3");
const clickSound2 = new Audio("pop2.mp3");
const gameoverSound = new Audio("over.mp3");
const stage = new Audio("stage.mp3");
const charSound = new Audio("menu.mp3");
const charSound2 = new Audio("menu2.mp3");
const charSound3 = new Audio("menu3.mp3");
const jumpSound = new Audio("jumpsound.mp3");
const jumpPad = document.querySelector("#jumpPad");
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
    clickSound.loop = false;
    clickSound.volume = 1;
    clickSound.play();
    bomb.classList.add("bomb");
    gameover.classList.add("hidden");
    replayBtn.style.display="none";
    jumpNum.classList.remove("hidden");
    jumpNumCnt.textContent = 0;
    howtoplay.classList.add("hidden");
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

        

          