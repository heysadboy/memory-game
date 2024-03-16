import { Card } from "./components/card";
import { renderCards } from "./components/cardGrid";
import "./style.css";
import { generateCardList } from "./utility";

const cardNumbersLength = 18;
const cardList: Card[] = generateCardList(cardNumbersLength);

renderCards(cardList);
