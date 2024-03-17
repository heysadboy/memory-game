import { Card } from "./components/card";
import { renderCards } from "./components/cardGrid";
import { renderHeader } from "./components/header";
import { renderMessage } from "./components/message";
import { TIMER_FINISH_MESSAGE } from "./constants";
import "./style.css";
import { EGameStatus } from "./types";
import { generateCardList, getGameStatus } from "./utility";

const cardNumbersLength = 18;
let cardList: Card[] = generateCardList(cardNumbersLength);

const appElement = document.getElementById("app");
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

renderHeader();
renderMessage();
renderCards(cardList);

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

		const targetTime = new Date(Date.now() + 120000);
		cardList = generateCardList(cardNumbersLength);
		renderMessage();
		renderCards(cardList);

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
