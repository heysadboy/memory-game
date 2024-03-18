import { EGridChoice } from "../types";

export const START_TIME = (gridChoice: EGridChoice) => {
	if (gridChoice === EGridChoice.first) return "02:00";
	if (gridChoice === EGridChoice.second) return "04:00";
	if (gridChoice === EGridChoice.third) return "06:00";

	return "02:00";
};
export const TIMER_FINISH_MESSAGE = "Time's up!";
export const GAME_MESSAGE = (username: string) => `Gotta catch 'em all, ${username}!`;
export const WIN_MESSAGE = "You caught 'em all!";
