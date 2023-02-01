//Texas Hold Em


//SETUP:
//Card Class - suit and rank -> pushed to deck                            DONE
//Deck class - holds 54 cards in array, can shuffle and deal              DONE
//Table - holds 5 cards                                                   DONE
//Players: you and opponent - each need 2 cards, bank account and methods
//Rank order of winning hands
//


//Part 1: Card setup
let suit = ["H", "D", "C", "S"]
let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
let river = []

//Player Class
class Player{             
  constructor(name){       
    this.name = name,
    this.bankaccount = 100,
    this.hand = []
  }
  bet(){ //increase bet
    this.bankaccount -= 10;
  }
  hold(){ //no increase bet
    
  }
}

let player1 = new Player("player1")
let opponent = new Player("opponent")

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
deck1.deal()

console.log(player1.hand)
console.log(opponent.hand)
console.log(river)  
//console.log(deck1)
//console.log(deck1.deck.length)


//Part 3: Rank order for winning Hands using npm
var poker = require('poker-hands');

hand1 = `${river[0].name} ${river[1].name} ${river[2].name} ${river[3].name} ${river[4].name} ${player1.hand[0].name} ${player1.hand[1].name}`

hand2 = `${river[0].name} ${river[1].name} ${river[2].name} ${river[3].name} ${river[4].name} ${opponent.hand[0].name} ${player1.hand[1].name}`
console.log(hand1)
console.log(hand2)
winner = poker.judgeWinner([hand1, hand2]); // 1
if(winner == 0){
  console.log("You won!")
}else{
  console.log("Sorry, the computer won.")
}


//Part 4: Game Play
//1. Are you ready to play? 
  window.addEventListener("load", function() {
    document.getElementById("box").style.display = "";
  })
//2. Place your bets - prompt
//3. Dealing.....
//4. Flipping the 
//5. Increase your bet?
