import { generateNumberList, shuffleArray, generateCardList } from "../utility";

describe("generateNumberList", () => {
	test("generates a list of numbers correctly", () => {
		const length = 5;
		const numbers = generateNumberList(length);
		expect(numbers).toHaveLength(length * 2);
	});
});

describe("shuffleArray", () => {
	test("shuffles the array correctly", () => {
		const array = [1, 2, 3, 4, 5];
		const shuffledArray = shuffleArray(array.slice());
		expect(shuffledArray).toHaveLength(array.length);
		expect(shuffledArray).not.toEqual(array);
	});
});

describe("generateCardList", () => {
	test("generates a list of cards correctly", () => {
		const length = 5;
		const cardList = generateCardList(length);
		expect(cardList).toHaveLength(length * 2);
	});
});
