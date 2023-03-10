let points;
let lives;
const goodObjectSFX = document.querySelector("#goodObjectSFX");
const badObjectSFX = document.querySelector("#badObjectSFX");
const gameWinSFX = document.querySelector("#gameWinSFX");
// let gameDuration;

// window.addEventListener("load", start);

function start() {
  lives = 3;
  points = 0;
  // gameDuration = 61;
}
showWelcomeScreen();

function showWelcomeScreen() {
  hideAllScreens();
  document.querySelector("#welcome_screen").classList.remove("hidden");
  // --> user clicks start button
  document.querySelector("#play_button_welcome_screen").addEventListener("click", gameStart);
  // --> user clicks instrunctions button
  document
    .querySelector("#instructions_button_welcome_screen")
    .addEventListener("click", showInstructionsScreen);
}

function gameOver() {
  hideAllScreens();
  document.querySelector("#game").classList.add("offDisplay");
  document.querySelector("#game_over_screen").classList.remove("hidden");
  // --> user clicks start button
  document.querySelector("#play_button_game_over").addEventListener("click", gameStart);
  // --> user clicks instrunctions button
  document
    .querySelector("#instructions_button_game_over")
    .addEventListener("click", showInstructionsScreen);
}

function gameWin() {
  gameWinSFX.currentTime = 0;
  gameWinSFX.play();
  hideAllScreens();
  document.querySelector("#game").classList.add("offDisplay");
  document.querySelector("#win_screen").classList.remove("hidden");
  // --> user clicks start button
  document.querySelector("#play_button_win_screen").addEventListener("click", gameStart);
  // --> user clicks instrunctions button
  document
    .querySelector("#instructions_button_win_screen")
    .addEventListener("click", showInstructionsScreen);
}

function showInstructionsScreen() {
  hideAllScreens();
  document.querySelector("#game").classList.add("offDisplay");
  document.querySelector("#instructions_screen").classList.remove("hidden");
  document.querySelector("#return_button").addEventListener("click", showWelcomeScreen);
}

function hideAllScreens() {
  document.querySelector("#welcome_screen").classList.add("hidden");
  document.querySelector("#instructions_screen").classList.add("hidden");
  document.querySelector("#win_screen").classList.add("hidden");
  document.querySelector("#game_over_screen").classList.add("hidden");
}

function killAllSFX() {
  if (goodObjectSFX.muted === false) {
    goodObjectSFX.muted = true;
    badObjectSFX.muted = true;
    gameWinSFX.muted = true;
    document.querySelector("#toggleSFX").classList.value = "";
    document.querySelector("#toggleSFX").classList.add("toggleSoundOn");
  } else {
    goodObjectSFX.muted = false;
    badObjectSFX.muted = false;
    gameWinSFX.muted = false;
    document.querySelector("#toggleSFX").classList.value = "";
    document.querySelector("#toggleSFX").classList.add("toggleSoundOff");
  }
}

function gameStart() {
  document.querySelector("#game").classList.remove("offDisplay");
  start();
  hideAllScreens();
  showTimer();
  restartLives();
  restartPoints();
  showHappyCheff();
  gameWinSFX.pause();
  document.querySelector("#toggleSFX").addEventListener("click", killAllSFX);

  // user clicks sound off button
  // document.querySelector("#soundOff_button").classList.addEventListener("click", pushSoundOff);
  // // user clicks sound on button
  // document.querySelector("#soundOff_button").classList.addEventListener("click", pushSoundOn);

  // tomato starts falling
  document.querySelector("#tomato_container").classList.add("falling1", "pos1");
  // user clicks tomato
  document.querySelector("#tomato_container").addEventListener("click", tomatoClicked);
  // tomato completes animation and falls from another position
  document.querySelector("#tomato_container").addEventListener("animationiteration", tomatoRefall);

  document.querySelector("#cheese_container").classList.add("falling2", "pos2");
  document.querySelector("#cheese_container").addEventListener("click", cheeseClicked);
  document.querySelector("#cheese_container").addEventListener("animationiteration", cheeseRefall);

  document.querySelector("#basil_container").classList.add("falling4", "pos3");
  document.querySelector("#basil_container").addEventListener("click", basilClicked);
  document.querySelector("#basil_container").addEventListener("animationiteration", basilRefall);

  document.querySelector("#mushroom_container").classList.add("falling3", "pos4");
  document.querySelector("#mushroom_container").addEventListener("click", mushroomClicked);
  document
    .querySelector("#mushroom_container")
    .addEventListener("animationiteration", mushroomRefall);

  document.querySelector("#ham_container").classList.add("falling2", "pos5");
  document.querySelector("#ham_container").addEventListener("click", hamClicked);
  document.querySelector("#ham_container").addEventListener("animationiteration", hamRefall);

  document.querySelector("#pineapple_container").classList.add("falling2", "pos1");
  document.querySelector("#pineapple_container").addEventListener("click", pineappleClicked);
  document
    .querySelector("#pineapple_container")
    .addEventListener("animationiteration", pineappleRefall);

  document.querySelector("#banana_container").classList.add("falling4", "pos2");
  document.querySelector("#banana_container").addEventListener("click", bananaClicked);
  document.querySelector("#banana_container").addEventListener("animationiteration", bananaRefall);

  document.querySelector("#lemon_container").classList.add("falling3", "pos3");
  document.querySelector("#lemon_container").addEventListener("click", lemonClicked);
  document.querySelector("#lemon_container").addEventListener("animationiteration", lemonRefall);

  document.querySelector("#apple_container").classList.add("falling4", "pos4");
  document.querySelector("#apple_container").addEventListener("click", appleClicked);
  document.querySelector("#apple_container").addEventListener("animationiteration", appleRefall);

  document.querySelector("#carrot_container").classList.add("falling5", "pos5");
  document.querySelector("#carrot_container").addEventListener("click", carrotClicked);
  document.querySelector("#carrot_container").addEventListener("animationiteration", carrotRefall);
}

function tomatoClicked() {
  //add SFX
  goodObjectSFX.currentTime = 0;
  goodObjectSFX.play();
  // tomato stops falling
  document.querySelector("#tomato_container").classList.add("stop");
  // tomato vanishes
  document.querySelector("#tomato").classList.add("vanish");
  // 1 point is added
  countPoints();
  showPoints();
  showHappyCheff();
  // tomato restarts falling after animation(vanish) ends
  document.querySelector("#tomato").addEventListener("animationend", tomatoRefall);
}

function cheeseClicked() {
  goodObjectSFX.currentTime = 0;
  goodObjectSFX.play();
  document.querySelector("#cheese_container").classList.add("stop");
  document.querySelector("#cheese").classList.add("vanish");
  countPoints();
  showPoints();
  showHappyCheff();
  document.querySelector("#cheese").addEventListener("animationend", cheeseRefall);
}

function basilClicked() {
  goodObjectSFX.currentTime = 0;
  goodObjectSFX.play();
  document.querySelector("#basil_container").classList.add("stop");
  document.querySelector("#basil").classList.add("vanish");
  countPoints();
  showPoints();
  showHappyCheff();
  document.querySelector("#basil").addEventListener("animationend", basilRefall);
}

function mushroomClicked() {
  goodObjectSFX.currentTime = 0;
  goodObjectSFX.play();
  document.querySelector("#mushroom_container").classList.add("stop");
  document.querySelector("#mushroom").classList.add("vanish");
  countPoints();
  showPoints();
  showHappyCheff();
  document.querySelector("#mushroom").addEventListener("animationend", mushroomRefall);
}

function hamClicked() {
  goodObjectSFX.currentTime = 0;
  goodObjectSFX.play();
  document.querySelector("#ham_container").classList.add("stop");
  document.querySelector("#ham").classList.add("vanish");
  countPoints();
  showPoints();
  showHappyCheff();
  document.querySelector("#ham").addEventListener("animationend", hamRefall);
}

function tomatoRefall() {
  document.querySelector("#tomato_container").classList.value = "";
  document.querySelector("#tomato").classList.value = "";
  document.querySelector("#tomato").addEventListener("animationend", tomatoRefall);
  document.querySelector("#tomato_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#tomato_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function cheeseRefall() {
  document.querySelector("#cheese_container").classList.value = "";
  document.querySelector("#cheese").classList.value = "";
  document.querySelector("#cheese").addEventListener("animationend", cheeseRefall);
  document.querySelector("#cheese_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#cheese_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function basilRefall() {
  document.querySelector("#basil_container").classList.value = "";
  document.querySelector("#basil").classList.value = "";
  document.querySelector("#basil").addEventListener("animationend", basilRefall);
  document.querySelector("#basil_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#basil_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function mushroomRefall() {
  document.querySelector("#mushroom_container").classList.value = "";
  document.querySelector("#mushroom").classList.value = "";
  document.querySelector("#mushroom").addEventListener("animationend", mushroomRefall);
  document.querySelector("#mushroom_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#mushroom_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function hamRefall() {
  document.querySelector("#ham_container").classList.value = "";
  document.querySelector("#ham").classList.value = "";
  document.querySelector("#ham").addEventListener("animationend", hamRefall);
  document.querySelector("#ham_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#ham_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function pineappleClicked() {
  badObjectSFX.currentTime = 0;
  badObjectSFX.play();
  document.querySelector("#pineapple_container").classList.add("stop");
  document.querySelector("#pineapple").classList.add("vanish");
  countLives();
  showAngryChef();
  document.querySelector("#pineapple").addEventListener("animationend", pineappleRefall);
}

function bananaClicked() {
  badObjectSFX.currentTime = 0;
  badObjectSFX.play();
  document.querySelector("#banana_container").classList.add("stop");
  document.querySelector("#banana").classList.add("vanish");
  countLives();
  showAngryChef();
  document.querySelector("#banana").addEventListener("animationend", bananaRefall);
}

function lemonClicked() {
  badObjectSFX.currentTime = 0;
  badObjectSFX.play();
  document.querySelector("#lemon_container").classList.add("stop");
  document.querySelector("#lemon").classList.add("vanish");
  countLives();
  showAngryChef();
  document.querySelector("#lemon").addEventListener("animationend", lemonRefall);
}

function appleClicked() {
  badObjectSFX.currentTime = 0;
  badObjectSFX.play();
  document.querySelector("#apple_container").classList.add("stop");
  document.querySelector("#apple").classList.add("vanish");
  countLives();
  showAngryChef();
  document.querySelector("#apple").addEventListener("animationend", appleRefall);
}

function carrotClicked() {
  badObjectSFX.currentTime = 0;
  badObjectSFX.play();
  document.querySelector("#carrot_container").classList.add("stop");
  document.querySelector("#carrot").classList.add("vanish");
  countLives();
  showAngryChef();
  document.querySelector("#carrot").addEventListener("animationend", carrotRefall);
}

function pineappleRefall() {
  document.querySelector("#pineapple_container").classList.value = "";
  document.querySelector("#pineapple").classList.value = "";
  document.querySelector("#pineapple").addEventListener("animationend", pineappleRefall);
  document.querySelector("#pineapple_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#pineapple_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function bananaRefall() {
  document.querySelector("#banana_container").classList.value = "";
  document.querySelector("#banana").classList.value = "";
  document.querySelector("#banana").addEventListener("animationend", bananaRefall);
  document.querySelector("#banana_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#banana_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function lemonRefall() {
  document.querySelector("#lemon_container").classList.value = "";
  document.querySelector("#lemon").classList.value = "";
  document.querySelector("#lemon").addEventListener("animationend", lemonRefall);
  document.querySelector("#lemon_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#lemon_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function appleRefall() {
  document.querySelector("#apple_container").classList.value = "";
  document.querySelector("#apple").classList.value = "";
  document.querySelector("#apple").addEventListener("animationend", appleRefall);
  document.querySelector("#apple_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#apple_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function carrotRefall() {
  document.querySelector("#carrot_container").classList.value = "";
  document.querySelector("#carrot").classList.value = "";
  document.querySelector("#carrot").addEventListener("animationend", carrotRefall);
  document.querySelector("#carrot_container").offsetHeight;

  let randomPosition = generateRandomNumber(6);
  let randomFalling = generateRandomNumber(5);
  document
    .querySelector("#carrot_container")
    .classList.add("falling" + randomFalling, "pos" + randomPosition);
}

function generateRandomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}

function showTimer() {
  // gameDuration = gameDuration - 1;
  // display the timer in console
  // console.log(`Time left: ${gameDuration} seconds`);
  // make the clock cursor spin
  document.querySelector("#cursor").classList.add("cursor_rotation");
  document.querySelector("#cursor").addEventListener("animationend", gameOver);

  // then call the countTime function
  // countTime();
}

function countPoints() {
  points = points + 1;
  if (points == 30) {
    gameWin();
  }
}

function countLives() {
  lives = lives - 1;

  if (lives == 2) {
    document.querySelector("#life3").classList.add("hidden");

    showAngryChef();
  } else if (lives == 1) {
    document.querySelector("#life3").classList.add("hidden");
    document.querySelector("#life2").classList.add("hidden");
    showAngryChef();
  } else {
    gameOver();
    console.log("Game over");
  }
}

// function countTime() {

//     if (gameDuration > 0) {
//         // if there is still time left, wait a second and call the shorTimer function again
//         setTimeout(showTimer, 1000);
//     } else {
//         gameOver()
//         console.log("Game over");
//     }
// }

function showAngryChef() {
  document.querySelector("#chef_happy").classList.add("hidden");
  document.querySelector("#chef_angry").classList.remove("hidden");
  document.querySelector("#chef_angry").classList.add("pissedOff");
}

function showHappyCheff() {
  document.querySelector("#chef_angry").classList.add("hidden");
  document.querySelector("#chef_happy").classList.remove("hidden");
  document.querySelector("#chef_happy").classList.add("excited");
}

function showPoints() {
  document.querySelector("#score_number").textContent = points;
}

function restartLives() {
  document.querySelector("#life3").classList.remove("hidden");
  document.querySelector("#life2").classList.remove("hidden");
  document.querySelector("#life1").classList.remove("hidden");
}
function restartPoints() {
  document.querySelector("#score_number").textContent = 0;
}
