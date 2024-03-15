import { Card, generateCard } from "../card";
import "./style.css";

export const renderCards = (cards: Card[], correctGuessedList: number[]): void => {
	const appElement = document.getElementById("app");
	if (appElement === null) {
		return;
	}
	appElement.innerHTML = "";
	const gridElement = document.createElement("div");
	gridElement.className = "grid-container";

	cards.forEach((card) => {
		const cardKey = Number(card.key.substring(0, card.key.indexOf("_")));
		gridElement.appendChild(generateCard(card, correctGuessedList.includes(cardKey)));
	});
	appElement.appendChild(gridElement);
};
