import "./style.css";

export interface Card {
	title: string;
	description: string;
}

export const renderCard = (card: Card): HTMLElement => {
	const cardElement = document.createElement("div");
	cardElement.className = "card";
	cardElement.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    `;
	return cardElement;
};
