import { Card, renderCard } from "../card";

export const renderCards = (cards: Card[]): void => {
	const appElement = document.getElementById("app");
	if (appElement) {
		appElement.innerHTML = "";
		cards.forEach((card) => {
			const cardElement = renderCard(card);
			appElement.appendChild(cardElement);
		});
	}
};
