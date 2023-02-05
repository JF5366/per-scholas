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
      player1.hand.unshift(this.deck[cardIndex])           //push that card to a hand
      let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
    for(let i=0; i<2; i++){  //loop twice to put 2 cards in opponents hand
       let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
       opponent.hand.unshift(this.deck[cardIndex])           //push that card to a hand
       let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
      for(let i=0; i<5; i++){  //loop twice to put 2 cards in opponents hand
       let cardIndex = Math.floor(Math.random()*this.deck.length) //get random num
       river.unshift(this.deck[cardIndex])           //push that card to the river
       let removedCard = this.deck.splice(cardIndex, 1)   //delete that card from the array
     }
  }
}

let deck1 = new Deck()
deck1.setup()
// console.log(player1.hand)
// console.log(opponent.hand)
// console.log(river)  
//console.log(deck1)
//console.log(deck1.deck.length)




//Part 2: Game Play
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

function gameStart(){   //Gameplay "loop" set through this function with timeouts
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
  dealNew();
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



//Deal:
function dealNew (){
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
    player1.hand.splice(2,2)       //remove cards from previous hand
    opponent.hand.splice(2,2) 
    river.splice(5,5) 
    console.log(p1.innerHTML)
  //CHANGE Card Images
  switch (p1.innerHTML) {
    case "AH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AH.png')"
      break;
    case "AC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AC.png')"
      break;
    case "AD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AD.png')"
      break;
    case "AS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/AS.png')"
      break;
    
    case "2H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2H.png')"
      break;
    case "2C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2C.png')"
      break;
    case "2D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2D.png')"
      break;
    case "2S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/2S.png')"
      break;
    
    case "3H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3H.png')"
      break;
    case "3C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3C.png')"
      break;
    case "3D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3D.png')"
      break;
    case "3S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/3S.png')"
      break;
    
     case "4H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4H.png')"
      break;
    case "4C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4C.png')"
      break;
    case "4D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4D.png')"
      break;
    case "4S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/4S.png')"
      break;
    
    case "5H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5H.png')"
      break;
    case "5C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5C.png')"
      break;
    case "5D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5D.png')"
      break;
    case "5S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/5S.png')"
      break;
    
    case "6H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6H.png')"
      break;
    case "6C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6C.png')"
      break;
    case "6D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6D.png')"
      break;
    case "6S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/6S.png')"
      break;
    
    case "7H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7H.png')"
      break;
    case "7C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7C.png')"
      break;
    case "7D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7D.png')"
      break;
    case "7S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/7S.png')"
      break;
    
    case "8H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8H.png')"
      break;
    case "8C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8C.png')"
      break;
    case "8D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8D.png')"
      break;
    case "8S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/8S.png')"
      break;
      
    case "9H":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9H.png')"
      break;
    case "9C":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9C.png')"
      break;
    case "9D":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9D.png')"
      break;
    case "9S":
      p1.parentNode.style.backgroundImage = "url('../CardImages/9S.png')"
      break;
    
    case "TH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TH.png')"
      break;
    case "TC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TC.png')"
      break;
    case "TD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TD.png')"
      break;
    case "TS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/TS.png')"
      break;
      
    case "JH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JH.png')"
      break;
    case "JC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JC.png')"
      break;
    case "JD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JD.png')"
      break;
    case "JS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/JS.png')"
      break;
      
    case "QH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QH.png')"
      break;
    case "QC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QC.png')"
      break;
    case "QD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QD.png')"
      break;
    case "QS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/QS.png')"
      break;
    
    case "KH":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KH.png')"
      break;
    case "KC":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KC.png')"
      break;
    case "KD":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KD.png')"
      break;
    case "KS":
      p1.parentNode.style.backgroundImage = "url('../CardImages/KS.png')"
      break;
    default:
      p1.parentNode.style.backgroundImage = "url('../CardImages/cardBack.png')"
  } // end of case switch p1




 } // end of dealNew()


function placeBet (){   //Place your bets
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



function findWinner(){   //who wins the round?
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
    //console.log(1)
  }else{
    mydiv.style.display = "";
    options.style.display = "none";
    mydiv.style.height = "6em";
    message.innerHTML = "Sorry, your opponent won round " + roundNum + " !"
    opponent.win()
    playerBank.innerHTML = player1.bankaccount
    opponentBank.innerHTML = opponent.bankaccount
    //console.log(2)
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


