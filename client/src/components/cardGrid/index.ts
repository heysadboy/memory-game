import { WIN_MESSAGE } from "../../constants";
import { EGameStatus, EGridChoice, EMoveType } from "../../types";
import { getGameStatus } from "../../utility";
import { Card, generateCard } from "../card";
import "./style.css";

let correctGuessedList: string[] = [];
let currentGuess = "";
let cards: Card[] = [];
let totalMoves = 0;
let score = 0;

const checkCardMove = (cardKey: string): EMoveType => {
	totalMoves++;

	if (currentGuess === "") {
		currentGuess = cardKey;
		return EMoveType.newMove;
	}

	if (correctGuessedList.includes(cardKey)) {
		currentGuess = "";
		return EMoveType.sameCard;
	}

	if (currentGuess === cardKey) {
		currentGuess = "";
		return EMoveType.sameCard;
	}

	const guessedNumber = Number(cardKey.substring(0, cardKey.indexOf("_")));
	const currentGuessNumber = Number(currentGuess.substring(0, currentGuess.indexOf("_")));

	if (currentGuessNumber === guessedNumber) {
		correctGuessedList.push(currentGuess);
		correctGuessedList.push(cardKey);
		currentGuess = "";
		return EMoveType.correctCard;
	}

	currentGuess = cardKey;
	return EMoveType.wrongCard;
};

const handleCardClick = (card: Card, gridChoice: EGridChoice) => {
	// Only enable click action on the card when timer starts
	if (getGameStatus() !== EGameStatus.progress) {
		return;
	}

	const cardMoveResult = checkCardMove(card.key);

	if (cardMoveResult === EMoveType.correctCard) {
		score += 10;
	}

	updateCards(gridChoice);

	const totalMovesElement = document.getElementById("total-moves");
	if (totalMovesElement !== null) {
		totalMovesElement.textContent = String(totalMoves);
	}

	const scoreElement = document.getElementById("score");
	if (scoreElement !== null) {
		scoreElement.textContent = String(score);
	}

	if (cards.length === correctGuessedList.length) {
		const messageElement = document.getElementById("game-message");
		if (messageElement !== null) {
			messageElement.textContent = WIN_MESSAGE;
		}
	}
};

const updateCards = (gridChoice: EGridChoice) => {
	const gridContainer = document.getElementById("grid-container");
	if (gridContainer === null) {
		return;
	}

	gridContainer.innerHTML = "";
	const gridElement = document.createElement("div");

	if (gridChoice === EGridChoice.first) {
		gridElement.className = "first-grid-container";
	}

	if (gridChoice === EGridChoice.second) {
		gridElement.className = "second-grid-container";
	}

	if (gridChoice === EGridChoice.third) {
		gridElement.className = "third-grid-container";
	}

	cards.forEach((card) => {
		gridElement.appendChild(
			generateCard(card, card.key == currentGuess, correctGuessedList.includes(card.key))
		);
	});

	gridContainer.appendChild(gridElement);

	cards.forEach((card) => {
		const cardById = document.getElementById(`card-container-${card.key}`);
		if (cardById) {
			cardById.addEventListener("click", () => handleCardClick(card, gridChoice));
		}
	});
};

export const renderCards = (cardList: Card[], gridChoice: EGridChoice): void => {
	correctGuessedList = [];
	currentGuess = "";
	cards = cardList;
	totalMoves = 0;
	score = 0;
	updateCards(gridChoice);
};
