import { Card } from "./components/card";
import { renderCards } from "./components/cardGrid";
import "./style.css";

// Write your code here

// You can delete this 👍
type Response = {
	message: string;
};
fetch("http://localhost:8888?message=hello")
	.then((r) => r.json())
	.then((response: Response) => {
		console.log("server response: ", response?.message);
	})
	.catch((err) => console.error(err));

const cards: Card[] = [
	{ title: "Card 1", description: "Description for Card 1" },
	{ title: "Card 2", description: "Description for Card 2" },
	{ title: "Card 3", description: "Description for Card 3" },
];

renderCards(cards);
