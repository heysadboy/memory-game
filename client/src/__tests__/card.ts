import { generateCard, Card } from "../components/card";

describe("generateCard", () => {
	const mockCard: Card = {
		key: "1",
		imageLocation: "example-image-url",
	};

	test("returns a div element with correct class and image when isGuessed is true", () => {
		const createElementMock = jest
			.spyOn(document, "createElement")
			.mockReturnValue(document.createElement("div"));

		const element = generateCard(mockCard, true, false);

		expect(createElementMock).toHaveBeenCalledWith("div");

		expect(element.tagName).toBe("DIV");
		expect(element.className).toContain("selected-card");
		expect(element.innerHTML).toContain(mockCard.imageLocation);

		createElementMock.mockRestore();
	});

	test("returns a div element with correct class and default image when isGuessed is false", () => {
		const createElementMock = jest
			.spyOn(document, "createElement")
			.mockReturnValue(document.createElement("div"));

		const element = generateCard(mockCard, false, false);

		expect(createElementMock).toHaveBeenCalledWith("div");

		expect(element.tagName).toBe("DIV");
		expect(element.className).toContain("card");
		expect(element.innerHTML).toContain("../public/images/pokeball.png");

		createElementMock.mockRestore();
	});
});
