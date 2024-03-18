import { renderHeader } from "../components/header";
import { EGridChoice } from "../types";

describe("renderHeader", () => {
	let headerContainer: HTMLElement;

	beforeEach(() => {
		headerContainer = document.createElement("div");
		headerContainer.id = "header-container";
		document.body.appendChild(headerContainer);
	});

	afterEach(() => {
		document.body.removeChild(headerContainer);
	});

	test("renders header with correct content for first grid choice", () => {
		renderHeader(EGridChoice.first);

		const headerElement = headerContainer.querySelector(".grid-header");
		expect(headerElement).not.toBeNull();

		expect(headerContainer.querySelector("#timer")).not.toBeNull();
		expect(headerContainer.querySelector("#total-moves")).not.toBeNull();
		expect(headerContainer.querySelector("#score")).not.toBeNull();
		expect(headerContainer.querySelector("#start-button")).not.toBeNull();
	});

	test("renders header with correct content for second grid choice", () => {
		renderHeader(EGridChoice.second);

		const headerElement = headerContainer.querySelector(".grid-header");
		expect(headerElement).not.toBeNull();

		expect(headerContainer.querySelector("#timer")).not.toBeNull();
		expect(headerContainer.querySelector("#total-moves")).not.toBeNull();
		expect(headerContainer.querySelector("#score")).not.toBeNull();
		expect(headerContainer.querySelector("#start-button")).not.toBeNull();
	});
});
