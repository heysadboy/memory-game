import { Card } from "../components/card";
import { START_TIME, TIMER_FINISH_MESSAGE } from "../constants";
import { EGameStatus } from "../types";

const generateNumberList = (cardNumbersLength: number) => {
	const cardNumbers = [...Array(cardNumbersLength).keys(), ...Array(cardNumbersLength).keys()];
	return shuffleArray(cardNumbers);
};

// Shuffling by using Durstenfeld algorithm
const shuffleArray = (array: number[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const generateCardList = (cardNumbersLength: number): Card[] => {
	const cardList: Card[] = [];
	const numbersList = generateNumberList(cardNumbersLength);

	numbersList.forEach((i, index) => {
		const card = { key: `${i + 1}_${index + 1}`, imageLocation: `../public/images/${i + 1}.png` };
		cardList.push(card);
	});

	return cardList;
};

export const getGameStatus = () => {
	const timerElement = document.getElementById("timer");
	if (timerElement?.textContent === START_TIME) {
		return EGameStatus.start;
	}

	if (timerElement?.textContent === TIMER_FINISH_MESSAGE) {
		return EGameStatus.finish;
	}

	return EGameStatus.progress;
};
