import { Card } from "./components/card";
import { renderCards } from "./components/cardGrid";
import { renderHeader } from "./components/header";
import { renderMessage } from "./components/message";
import { renderWelcomeScreen } from "./components/welcomeScreen";
import { TIMER_FINISH_MESSAGE } from "./constants";
import "./style.css";
import { EGameStatus, EGridChoice } from "./types";
import { generateCardList, getGameStatus } from "./utility";

let cardNumbersLength = 8;
let gameTime = 120000;
let gridChoice = EGridChoice.first;
let username = "User";
let cardList: Card[] = [];

const appElement = document.getElementById("app");
if (appElement !== null) {
	appElement.innerHTML = "";
}

const welcomeScreenContainer = document.createElement("div");
welcomeScreenContainer.id = "welcome-screen-container";
appElement?.appendChild(welcomeScreenContainer);
renderWelcomeScreen();

const firstGridElement = document.getElementById("first-grid-choice");
const secondGridElement = document.getElementById("second-grid-choice");
const thirdGridElement = document.getElementById("third-grid-choice");

if (firstGridElement !== null && secondGridElement !== null && thirdGridElement !== null) {
	firstGridElement.addEventListener("click", () => {
		cardNumbersLength = 8;
		gameTime = 120000;
		gridChoice = EGridChoice.first;
		firstGridElement.className = "selected-grid-choice";
		secondGridElement.className = "choice-button";
		thirdGridElement.className = "choice-button";
	});

	secondGridElement.addEventListener("click", () => {
		cardNumbersLength = 18;
		gameTime = 240000;
		gridChoice = EGridChoice.second;
		firstGridElement.className = "choice-button";
		secondGridElement.className = "selected-grid-choice";
		thirdGridElement.className = "choice-button";
	});

	thirdGridElement.addEventListener("click", () => {
		cardNumbersLength = 32;
		gameTime = 360000;
		gridChoice = EGridChoice.third;
		firstGridElement.className = "choice-button";
		secondGridElement.className = "choice-button";
		thirdGridElement.className = "selected-grid-choice";
	});
}

const usernameElementContent = (<HTMLInputElement>document.getElementById("username")).value;
if (usernameElementContent !== "") {
	username = usernameElementContent;
}

const startGameButton = document.getElementById("start-game-button");

if (startGameButton !== null) {
	startGameButton.addEventListener("click", () => {
		renderGameScreen();
	});
}

const renderGameScreen = () => {
	if (appElement !== null) {
		appElement.innerHTML = "";
	}

	const gridContainer = document.createElement("div");
	gridContainer.id = "grid-container";

	const messageContainer = document.createElement("div");
	messageContainer.id = "message-container";

	const headerContainer = document.createElement("div");
	headerContainer.id = "header-container";

	appElement?.appendChild(headerContainer);
	appElement?.appendChild(messageContainer);
	appElement?.appendChild(gridContainer);

	cardList = generateCardList(cardNumbersLength);
	renderHeader(gridChoice);
	renderMessage(username);
	renderCards(cardList, gridChoice);

	const resetHeader = () => {
		const totalMovesElement = document.getElementById("total-moves");
		if (totalMovesElement !== null) {
			totalMovesElement.textContent = "0";
		}

		const scoreElement = document.getElementById("score");
		if (scoreElement !== null) {
			scoreElement.textContent = "0";
		}
	};

	const startButton = document.getElementById("start-button");

	if (startButton !== null) {
		startButton.className = "active-start-button";

		startButton.addEventListener("click", () => {
			const timerDiv = document.getElementById("timer");

			startButton.className = "inactive-start-button";
			startButton.textContent = "START";

			if (timerDiv === null) {
				return;
			}

			const targetTime = new Date(Date.now() + gameTime);
			cardList = generateCardList(cardNumbersLength);
			renderMessage(username);
			renderCards(cardList, gridChoice);

			if (getGameStatus() === EGameStatus.finish) {
				resetHeader();
			}

			const timerInterval = setInterval(() => {
				const currentTime = new Date();
				const remainingTime = Math.max(targetTime.getTime() - currentTime.getTime(), 0);

				const minutes = Math.floor(remainingTime / 60000);
				const seconds = Math.floor((remainingTime % 60000) / 1000);

				timerDiv.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
					.toString()
					.padStart(2, "0")}`;

				if (remainingTime === 0) {
					clearInterval(timerInterval);
					timerDiv.textContent = TIMER_FINISH_MESSAGE;
					startButton.textContent = "RESTART";
					startButton.className = "active-start-button";
				}
			}, 1000);
		});
	}
};
