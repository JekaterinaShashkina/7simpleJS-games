// document.addEventListener("DOMContentLoaded", () => {
const cardArray = [
  {
    name: "fries",
    img: "img/fries.png",
  },

  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
  {
    name: "fries",
    img: "img/fries.png",
  },

  {
    name: "milkshake",
    img: "img/milkshake.png",
  },
  {
    name: "ice-cream",
    img: "img/ice-cream.png",
  },
  {
    name: "hotdog",
    img: "img/hotdog.png",
  },
  {
    name: "cheeseburger",
    img: "img/cheeseburger.png",
  },
  {
    name: "pizza",
    img: "img/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector(".grid");
const resultDisplay = document.querySelector(".result");

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);

    gridDisplay.append(card);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll(".grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("You have clicked the same image");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("you found the match");
    cards[optionOneId].setAttribute("src", "img/white.png");
    cards[optionTwoId].setAttribute("src", "img/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "img/blank.png");
    cards[optionTwoId].setAttribute("src", "img/blank.png");
    alert("Sorry, try again!");
  }
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations you them all!";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

createBoard();
// });
