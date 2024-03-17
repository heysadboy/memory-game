import "./style.css";
export interface Card {
	key: string;
	imageLocation: string;
}

export const generateCard = (card: Card, isGuessed: boolean): HTMLElement => {
	const cardWrapper = document.createElement("div");

	cardWrapper.id = `card-container-${card.key}`;
	let cardElement = "";

	if (isGuessed === true) {
		cardWrapper.className = "selected-card";
		cardElement = `<img
			src="${card.imageLocation}"
			alt="Image ${card.key}"
			width="100"
			height="100"
		/>`;
	} else {
		cardWrapper.className = "card";
		cardElement = `<img
			src="../public/images/pokeball.png"
			alt="Image ${card.key}"
			width="100"
			height="100"
		/>`;
	}
	cardWrapper.innerHTML = cardElement;
	return cardWrapper;
};
