let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
let mainTitle = document.getElementById("main-title")
mainTitle.innerText = "Hey I'm Dom, Welcome!"
  // Part 2
document.body.style.backgroundColor = "pink"
  // Part 3
let favThings = document.getElementById("favorite-things")
favThings.removeChild(favThings.lastElementChild)
//other way to do this: document.querySelector("#favorite-things li:last-child").remove()
  // Part 4
let specialTitle = document.querySelectorAll("special-title")
for (let i=0; i<specialTitle.length; i++){
  specialTitle[i].style.fontSize = "2rem";
}
  // Part 5
  pastRaces = document.getElementById("past-races")
  for (let i=0; i<pastRaces.children.length; i++){
    if(pastRaces.children[i].textContent == "Chicago"){ 
      pastRaces.children[i].remove();
    }
}
// pastRace = document.querySelector('#past-races')
//   for(let i = 0; i < pastRace.children.length; i++){
//     pastRace.children[i].textContent == "Chicago" ? pastRace.children[i].remove() : console.log('no')
//   }
// Part 6
let newLi = document.createElement('li');
pastRaces.appendChild(newLi);
newLi.textContent = "NYC";
//shorter code: pastRace.innerHTML += '<li>Saigon</li>'
  // Part 7
let newDiv = document.createElement('div');
newDiv.classList.add('blog-post');
newDiv.classList.add('purple');
let mainDiv = document.querySelector('.main');

let newH2 = document.createElement('h2');
newH2.textContent = "NYC";

let newP = document.createElement('p')
newP.textContent = "I drove over the Brooklyn Bridge";

newDiv.appendChild(newH2);
newDiv.appendChild(newP);
mainDiv.appendChild(newDiv);
  // Part 8
let quoteTitle = document.querySelector('#quote-title')
quoteTitle.addEventListener('click', randomQuote)
  // Part 9
let blogPost = document.querySelectorAll('.blog-post')
blogPost.forEach(function(element) {
  element.addEventListener('mouseout', function(){  
    element.classList.toggle('red')
    element.classList.toggle('purple')
  })
  element.addEventListener('mouseenter', function(){  
    element.classList.toggle('purple')
    element.classList.toggle('red')
  })
})
});
