import { Card, generateCard } from "../card";
import "./style.css";

export const renderCards = (cards: Card[]): void => {
	const appElement = document.getElementById("app");
	if (appElement) {
		appElement.innerHTML = "";
		const cardElementList = cards.map((card) => generateCard(card)).join("");
		const gridElement = `<div class="grid-container">${cardElementList}</div>`;
		appElement.innerHTML = gridElement;
	}
};
