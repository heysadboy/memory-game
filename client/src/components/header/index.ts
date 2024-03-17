import { START_TIME, TIMER_FINISH_MESSAGE } from "../../constants";
import "./style.css";

export const renderHeader = () => {
	const headerContainer = document.getElementById("header-container");
	if (headerContainer === null) {
		return;
	}

	const headerElement = document.createElement("div");
	headerElement.className = "grid-header";

	const header = `<div id="timer">${START_TIME}</div>
		<div id="total-moves">0</div>
		<div id="score">0</div>
		<button id="start-button">START</button>`;
        
	headerElement.innerHTML = header;
	headerContainer.appendChild(headerElement);

	const startButton = document.getElementById("start-button");

	if (startButton === null) {
		return;
	}

	startButton.className = "active-start-button";

	startButton.addEventListener("click", () => {
		const timerDiv = document.getElementById("timer");

		startButton.className = "inactive-start-button";

		if (timerDiv === null) {
			return;
		}

		const targetTime = new Date(Date.now() + 120000);

		const timerInterval = setInterval(() => {
			const currentTime = new Date();
			const remainingTime = Math.max(targetTime.getTime() - currentTime.getTime(), 0);

			const minutes = Math.floor(remainingTime / 60000);
			const seconds = Math.floor((remainingTime % 60000) / 1000);

			timerDiv.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
				.toString()
				.padStart(2, "0")}`;

			if (remainingTime === 0) {
				clearInterval(timerInterval);
				timerDiv.textContent = TIMER_FINISH_MESSAGE;
				startButton.className = "active-start-button";
			}
		}, 1000);
	});
};
