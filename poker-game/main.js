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
let playNum = player1.bankaccount       //loop through rounds:
let round = 0
while (playNum > 0) {
  // for (let i = 1; i > 0; i++) {
      doLoop();
      round++
  }
  if(playNum <= 0){
    gameOver()
  }

//Loop:
function doLoop(){
  
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
    message.innerHTML = "Ok fine, dont play with me :( " 
 });

var options = document.querySelector('.options')
var message = document.querySelector('.message')

//2. If click yes -- dealing message, and deal hands


mybtn.addEventListener('click', () => {
  setTimeout(() => {
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "Round" + i
  }, 500);
  setTimeout(() => {
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "Dealing...."
  }, 1000);
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
  // setTimeout(() => {
  //   announceWinner()
  // }, 10000);
});
//Reorganize: separate code into funcitons - then call those functions in the settimeout

//Deal:
function deal (){
  deck1.deal()
  console.log(player1.hand)
  console.log(opponent.hand)
  console.log(river)
  console.log(player1.hand[0])
  console.log(player1.hand[1])
  document.querySelector("#p1").innerHTML = player1.hand[0].name;
  document.querySelector("#p2").innerHTML = player1.hand[1].name;
  document.querySelector("#o1").innerHTML = opponent.hand[0].name;
  document.querySelector("#o2").innerHTML = opponent.hand[1].name;
  document.querySelector("#r1").innerHTML = river[0].name;
  document.querySelector("#r2").innerHTML = river[1].name;
  document.querySelector("#r3").innerHTML = river[2].name;
  document.querySelector("#r4").innerHTML = river[3].name;
  document.querySelector("#r5").innerHTML = river[4].name;
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
  // console.log(hand1)
  // console.log(hand2)
  let winner = poker.judgeWinner([hand1, hand2]); // 1

  if(winner == 0){
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "You won round i!"
    player1.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
  }else{
    mydiv.style.display = "";
    options.style.display = "none";
    message.innerHTML = "Sorry, your opponent won round i."
    opponent.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
  }
}
} //end of the doLoop()


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