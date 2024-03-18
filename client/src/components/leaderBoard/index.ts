import { IUserDetail } from "../../types";

export const renderLeaderBoard = () => {
	fetch("http://localhost:8888/get-data")
		.then((r) => r.json())
		.then((response: IUserDetail[]) => {
			const userDetails = response;

			// Sort the array
			userDetails.sort((a: IUserDetail, b: IUserDetail) => {
				if(b.score === a.score) {
					return a.totalMoves - b.totalMoves;
				}
				return b.score - a.score;
			});

			let userDetailsTable = ` <table>
			<tr>
				<th>Username</th>
				<th>Score</th>
			</tr>
		`;

			userDetails.forEach((user) => {
				userDetailsTable += `
				<tr>
					<td>${user.username}</td>
					<td>${user.score}</td>
				</tr>
			`;
			});

			userDetailsTable += "</table>";

			const tableContainer = document.getElementById("table-container");
			if (tableContainer != null) {
				tableContainer.innerHTML = userDetailsTable;
				tableContainer.style.visibility = "visible";
			}
		})
		.catch((err) => console.error(err));
};
