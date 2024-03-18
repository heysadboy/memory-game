import { renderCards } from "../components/cardGrid";
import { Card } from "../components/card";
import { EGridChoice } from "../types";

describe("renderCards", () => {
	let mockCardList: Card[];
	let mockGridChoice: EGridChoice;
	let gridContainer: HTMLElement;

	beforeEach(() => {
		mockCardList = [
			{ key: "1_1", imageLocation: "image1.jpg" },
			{ key: "2_2", imageLocation: "image2.jpg" },
		];

		mockGridChoice = EGridChoice.first;

		gridContainer = document.createElement("div");
		gridContainer.id = "grid-container";
		document.body.appendChild(gridContainer);
	});

	afterEach(() => {
		document.body.removeChild(gridContainer);
	});

	test("renders cards correctly in the first grid container", () => {
		renderCards(mockCardList, mockGridChoice);

		expect(gridContainer.querySelector(".first-grid-container")).not.toBeNull();

		mockCardList.forEach((card) => {
			const cardElement = gridContainer.querySelector(`#card-container-${card.key}`);
			expect(cardElement).not.toBeNull();
			expect(cardElement?.querySelector("img")).not.toBeNull();
		});
	});
});
