import { START_TIME } from "../../constants";
import "./style.css";

export const renderHeader = () => {
	const headerContainer = document.getElementById("header-container");
	if (headerContainer === null) {
		return;
	}

	headerContainer.innerHTML = "";

	const headerElement = document.createElement("div");
	headerElement.className = "grid-header";

	const header = `<div id="timer">${START_TIME}</div>
		<div id="total-moves">0</div>
		<div id="score">0</div>
		<button id="start-button">START</button>`;

	headerElement.innerHTML = header;
	headerContainer.appendChild(headerElement);
};
