import { GAME_MESSAGE } from "../../constants";
import "./style.css";

export const renderMessage = () => {
	const messageContainer = document.getElementById("message-container");
	if (messageContainer === null) {
		return;
	}

	messageContainer.innerHTML = "";

	const messageElement = document.createElement("div");
	const gameMessage = `<div id="game-message">${GAME_MESSAGE}</div>`;

	messageElement.innerHTML = gameMessage;
	messageContainer.appendChild(messageElement);
};
