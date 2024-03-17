import { Card } from "./components/card";
import { renderCards } from "./components/cardGrid";
import { renderHeader } from "./components/header";
import "./style.css";
import { generateCardList } from "./utility";

const cardNumbersLength = 18;
const cardList: Card[] = generateCardList(cardNumbersLength);

const appElement = document.getElementById("app");
if (appElement !== null) {
	appElement.innerHTML = "";
}

const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";

const headerContainer = document.createElement("div");
headerContainer.id = "header-container";

appElement?.appendChild(headerContainer);
appElement?.appendChild(gridContainer);

renderHeader();
renderCards(cardList);
