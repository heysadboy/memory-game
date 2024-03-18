import "./style.css";

export const renderWelcomeScreen = () => {
	const welcomeScreenContainer = document.getElementById("welcome-screen-container");
	if (welcomeScreenContainer === null) {
		return;
	}
	welcomeScreenContainer.className = "welcome-screen-container";
	welcomeScreenContainer.innerHTML = "";

	const welcomeScreenContent = `<h1 class="app-title">Memory Game</h1>
		<div class="details-container">
			<div class="game-details-container">
				<input id="username" type="text" placeholder="User" />
				<div class="grid-size-container">
					<p>Select Grid Size</p>
					<div class="choice-button-container">
						<button id="first-grid-choice" class="choice-button">4 * 4</button>
						<button id="second-grid-choice" class="choice-button">6 * 6</button>
						<button id="third-grid-choice" class="choice-button">8 * 8</button>
					</div>
				</div>
				<button id="start-game-button" class="inactive-start-game-button">START</button>
			</div>
			<div id="table-container" class="table-container"></div>
		</div>`;

	welcomeScreenContainer.innerHTML = welcomeScreenContent;
};
