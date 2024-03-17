import "./style.css";
export interface Card {
	key: string;
	imageLocation: string;
}

export const generateCard = (card: Card, isGuessed: boolean, isCorrect: boolean): HTMLElement => {
	const cardWrapper = document.createElement("div");

	cardWrapper.id = `card-container-${card.key}`;
	let cardElement = "";

	if (isGuessed === true || isCorrect === true) {
		cardWrapper.className = isCorrect ? "correct-card" : "selected-card";
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
