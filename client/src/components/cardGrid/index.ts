import { Card, generateCard } from "../card";
import "./style.css";

const correctGuessedList: string[] = [];
let currentGuess = "";
let cards: Card[] = [];

const handleCardClick = (card: Card) => {
	const guessedNumber = Number(card.key.substring(0, card.key.indexOf("_")));
	const currentGuessNumber = Number(currentGuess.substring(0, currentGuess.indexOf("_")));
	if (currentGuess === "") {
		currentGuess = card.key;
	} else if (currentGuessNumber === guessedNumber && currentGuess !== card.key) {
		correctGuessedList.push(currentGuess);
		correctGuessedList.push(card.key);
		currentGuess = "";
	} else {
		currentGuess = "";
	}
	updateCards();
};

const updateCards = () => {
	const appElement = document.getElementById("app");
	if (appElement === null) {
		return;
	}
	appElement.innerHTML = "";
	const gridElement = document.createElement("div");
	gridElement.className = "grid-container";
	cards.forEach((card) => {
		gridElement.appendChild(generateCard(card, correctGuessedList.includes(card.key)));
	});
	appElement.appendChild(gridElement);
	cards.forEach((card) => {
		const cardById = document.getElementById(`card-container-${card.key}`);
		if (cardById) {
			cardById.addEventListener("click", () => handleCardClick(card));
		}
	});
};

export const renderCards = (cardList: Card[]): void => {
	cards = cardList;
	updateCards();
};
