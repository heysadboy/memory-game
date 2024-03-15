import "./style.css";

export interface Card {
	key: string;
	imageLocation: string;
}

export const generateCard = (card: Card, isGuessed: boolean): HTMLElement => {
	const cardWrapper = document.createElement("div");
	let cardElement = "";

	if (isGuessed === true) {
		cardElement = `<div class="flip-card" id="card-container-${card.key}">
			<img src="${card.imageLocation}" alt="Image ${card.key}" width="100" height="100" />
		</div>`;
	} else {
		cardElement = `
			<div class="flip-card" id="card-container-${card.key}">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<img
							src="../public/images/pokeball.png"
							alt="Image Pokeball"
							width="100"
							height="100"
						/>
					</div>
					<div class="flip-card-back">
						<img src="${card.imageLocation}" alt="Image ${card.key}" width="100" height="100" />
					</div>
				</div>
			</div>
		`;
	}
	cardWrapper.innerHTML = cardElement;
	return cardWrapper;
};
