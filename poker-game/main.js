import poker from "poker-hands"
//Texas Hold Em
// let poker = require('poker-hands');
console.log("game running")
//SETUP:
//Card Class - suit and rank -> pushed to deck                            DONE
//Deck class - holds 54 cards in array, can shuffle and deal              DONE
//Table - holds 5 cards                                                   DONE
//Players: you and opponent - each need 2 cards, bank account and methods  DONE 
//Rank order of winning hands                                             DONE
//


//Part 1: Card setup
let suit = ["H", "D", "C", "S"]
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let river = []
let currentPot = 0;

//Player Class
class Player{             
  constructor(name){       
    this.name = name,
    this.bankaccount = 1000,
    this.hand = []
  }
  bet(){ //increase bet
    this.bankaccount -= 100;
    currentPot += 100;
  }
  win(){
    this.bankaccount += 200;
    currentPot = 0;
  }
  lose(){//dont need?
    this.bankaccount -= 200;
    currentPot = 0;
  }
}
//Instantiate player, opponent and bank accounts
let player1 = new Player("player1")
let playerBank = document.querySelector("#playercash")
playerBank.innerHTML = player1.bankaccount

let opponent = new Player("opponent")
let opponentBank = document.querySelector("#opponentcash")
opponentBank.innerHTML = opponent.bankaccount

//Deck class
class Deck{
  constructor(){
    this.deck = [] //array of card objects
  }
  setup(){//adds cards to the deck to start
    for(let i = 0; i < suit.length; i++){         //push suit and rank to cards
    		for(let j = 0; j < rank.length; j++){
          let cardName = rank[j] + suit[i]
          let card = {
            name: cardName,
            suit: suit[i],
            rank: rank[j]
          }
          this.deck.push(card);
    		}
    	}
  }
  deal(){  //push 5 cards to the table, 2 to each hand
     for(let i=0; i<2; i++){  //loop twice to put 2 cards in players hand
       let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
       player1.hand.push(this.deck[cardIndex])           //push that card to a hand
       let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
    for(let i=0; i<2; i++){  //loop twice to put 2 cards in opponents hand
       let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
       opponent.hand.push(this.deck[cardIndex])           //push that card to a hand
       let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
      for(let i=0; i<5; i++){  //loop twice to put 2 cards in opponents hand
       let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
       river.push(this.deck[cardIndex])           //push that card to the river
       let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
  }
}

//Part 2: Push cards to deck, and deal deck to hands
let deck1 = new Deck()
deck1.setup()
// console.log(player1.hand)
// console.log(opponent.hand)
// console.log(river)  
//console.log(deck1)
//console.log(deck1.deck.length)




//Part 4: Game Play
// let playNum = player1.bankaccount       //loop through rounds:
// let round = 0
// while (playNum > 0) {
//   // for (let i = 1; i > 0; i++) {
//       doLoop();
//       round++
//   }
//   if(playNum <= 0){
//     gameOver()
//   }

// //Loop:
// function doLoop(){
  
//1. Are you ready to play? 

  var mydiv = document.querySelector("#box")   // Div appears to for player to choose yes or no
 // mydiv.style.display = "block"
  var mybtn = document.querySelector("#yes")
  var nobtn = document.querySelector("#no")

  mybtn.addEventListener("click", function () {
     mydiv.style.display = "none";
  });

  nobtn.addEventListener("click", function () {
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "Ok fine, dont play with me :(  \n\n Game Over" 
    mydiv.style.height = "5em";
    mydiv.style.padding = "1em";
 });

var options = document.querySelector('.options')
var message = document.querySelector('.message')

//2. If click yes -- dealing message, and deal hands

let roundNum = 1;

function gameStart(){ 
   setTimeout(() => {
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Round " + roundNum
  mydiv.style.height = "5em";
}, 500);
setTimeout(() => {
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Dealing...."
  mydiv.style.height = "5em";
}, 1500);
setTimeout(() => {
  mydiv.style.display = "none";
  deal();
}, 3000);
setTimeout(() => {
  placeBet();
}, 4500);
setTimeout(() => {
  mydiv.style.display = "none";
}, 6000);
setTimeout(() => {
  findWinner()
}, 8000);
setTimeout(() => {
  nextRound()
}, 12000);
}
mybtn.addEventListener('click', () => {
  gameStart();
});

//Reorganize: separate code into funcitons - then call those functions in the settimeout
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let o1 = document.querySelector("#o1")
let o2 = document.querySelector("#o2")
let r1 = document.querySelector("#r1")
let r2 = document.querySelector("#r2")
let r3 = document.querySelector("#r3")
let r4 = document.querySelector("#r4")
let r5 = document.querySelector("#r5")

let cardp1 = document.querySelector("#cardp1")
let cardp2 = document.querySelector("#cardp2")
let cardo1 = document.querySelector("#cardo1")
let cardo2 = document.querySelector("#cardo2")
let cardr1 = document.querySelector("#cardr1")
let cardr2 = document.querySelector("#cardr2")
let cardr3 = document.querySelector("#cardr3")
let cardr4 = document.querySelector("#cardr4")
let cardr5 = document.querySelector("#cardr5")


//Deal:
function deal (){
  deck1.deal()
  console.log(player1.hand)
  console.log(opponent.hand)
  console.log(river)
  console.log(player1.hand[0])
  console.log(player1.hand[1])
  p1.innerHTML = player1.hand[0].name;
  p2.innerHTML = player1.hand[1].name;
  o1.innerHTML = opponent.hand[0].name;
  o2.innerHTML = opponent.hand[1].name;
  r1.innerHTML = river[0].name;
  r2.innerHTML = river[1].name;
  r3.innerHTML = river[2].name;
  r4.innerHTML = river[3].name;
  r5.innerHTML = river[4].name;
  // if(p1.innerHTML == "AC"){
  //   cardp1.style.backgroundimage = ;
  // }
}


//Place your bets
function placeBet (){
      mydiv.style.display = "";
      options.style.display = "none";
      message.innerHTML = "Placing Bets...."
      player1.bet()
      playerBank.innerHTML = player1.bankaccount
      opponent.bet()
      opponentBank.innerHTML = opponent.bankaccount
      // console.log(currentPot)
      // console.log(player1.bankaccount)
      // console.log(opponent.bankaccount)
}


//who wins the round?
function findWinner(){
  let hand1 = `${river[0].name} ${river[1].name} ${river[2].name} ${river[3].name} ${river[4].name} ${player1.hand[0].name} ${player1.hand[1].name}`
  let hand2 = `${river[0].name} ${river[1].name} ${river[2].name} ${river[3].name} ${river[4].name} ${opponent.hand[0].name} ${player1.hand[1].name}`
  let winner = poker.judgeWinner([hand1, hand2]); 

  if(winner == 0){
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "You won round " + roundNum + " !"
    player1.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
    console.log(1)
  }else{
    mydiv.style.display = "";
    options.style.display = "none";
    mydiv.style.height = "6em";
    message.innerHTML = "Sorry, your opponent won round " + roundNum + " !"
    opponent.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
    console.log(2)
  }
}


function nextRound(){
  if(player1.bankaccount > 0){
    roundNum++;
    message.innerHTML = "Would you like to play the next round?"
    mydiv.style.height = "";
    options.style.display = "";
    mydiv.style.display = "block"
    //gameStart();
  }
}




//Game Over
function gameOver(){
  mydiv.style.display = "";
  options.style.display = "none";
  message.innerHTML = "Sorry, you have run out of money. Game over. You lost."
}



// for (var i = 0; i < player1.bankaccount; i += 2) {

// int i = 0;
// while(i < this.getRound() || this.getRounds() == 0) {
// //some 30 lines code
// i++
// }