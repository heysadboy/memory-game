export enum EGameStatus {
	start,
	progress,
	finish,
}

export enum EMoveType {
	newMove,
	sameCard,
	wrongCard,
	correctCard,
}

export enum EGridChoice {
	first,
	second,
	third,
}

export interface IUserDetail {
	username: string;
	score: number;
	totalMoves: number;
}
