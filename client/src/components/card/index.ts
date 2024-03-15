import "./style.css";

export interface Card {
	key: number;
	imageLocation: string;
}

export const generateCard = (card: Card): string => {
	const cardElement = `
	<div class="card">
	  <img src="${card.imageLocation}" alt="Image ${card.key} width="100" height="100" />
	</div>
  `;
	return cardElement;
};
