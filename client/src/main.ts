import { Card } from "./components/card";
import { renderCards } from "./components/cardGrid";
import "./style.css";
import { generateCardList } from "./utility";

const cardNumbersLength = 18;
const correctGuessedList: number[] = [];
let currentGuess = 0;
const cardList: Card[] = generateCardList(cardNumbersLength);

const handleCardClick = (card: Card) => {
	const guessedNumber = Number(card.key.substring(0, card.key.indexOf("_")));
	if (currentGuess === 0) {
		currentGuess = guessedNumber;
	} else if (currentGuess === guessedNumber) {
		correctGuessedList.push(guessedNumber);
		renderCards(cardList, correctGuessedList);
	} else {
		currentGuess = 0;
	}
};

renderCards(cardList, correctGuessedList);

cardList.forEach((card) => {
	const cardById = document.getElementById(`card-container-${card.key}`);
	if (cardById) {
		cardById.addEventListener("click", () => handleCardClick(card));
	}
});
