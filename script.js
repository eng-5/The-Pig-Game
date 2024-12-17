var score, round, score, globalScore, activePlayer, gamePlaying;
init();
function diceRoll() {
	if (gamePlaying) {
		var random;
		random = Math.floor(Math.random() * 6) + 1;
		diceDom.style.display = "block";
		diceDom.src = "img/dice/dice-" + random + ".png";
		score += random;
		if (random !== 1) {
			document.querySelector(".score-" + activePlayer).textContent = score;
		} else {
			score = 0;
			document.querySelector(".score-" + activePlayer).textContent = score;
			nextPlayer();
		}
	}
}
function nextPlayer() {
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	document.querySelector(".change-0").classList.toggle("active");
	document.querySelector(".change-1").classList.toggle("active");
}
function buttonHold() {
	if (gamePlaying) {
		roundVariable = document.querySelector(".round-score-" + activePlayer);
		if (activePlayer === 0) {
			globalScore[activePlayer] += score;
			roundVariable.textContent = globalScore[activePlayer];
		} else {
			globalScore[activePlayer] += score;
			roundVariable.textContent = globalScore[activePlayer];
		}
		check();
	}
	function check() {
		if (globalScore[activePlayer] >= 20) {
			document.querySelector(".player-name-" + activePlayer).textContent = "Winner";
			document.querySelector(".player-name-" + activePlayer).classList.add("winner");
			score = 0;
			document.querySelector(".score-" + activePlayer).textContent = score;
			diceDom.style.display = "none";
			gamePlaying = false;
		} else {
			score = 0;
			document.querySelector(".score-" + activePlayer).textContent = score;
			diceDom.style.display = "none";
			nextPlayer();
		}
	}
}

// else if (globalScore_1 >= 20) {
// 	document.querySelector(".player-name-1").textContent = "Winner";
// 	gamePlaying = false;
// }

function init() {
	score = 0;
	globalScore = [0, 0];
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector(".score-0").textContent = "0";
	document.querySelector(".score-1").textContent = "0";
	document.querySelector(".round-score-0").textContent = "0";
	document.querySelector(".round-score-1").textContent = "0";
	document.querySelector(".player-name-0").textContent = "Player 1";
	document.querySelector(".player-name-1").textContent = "Player 2";
	document.querySelector(".player-name-0").classList.remove("winner");
	document.querySelector(".player-name-1").classList.remove("winner");
	diceDom = document.querySelector(".dice");
	diceDom.style.display = "none";
	document.querySelector(".btn-roll").addEventListener("click", diceRoll);
	document.querySelector(".btn-hold").addEventListener("click", buttonHold);
}
document.querySelector(".btn-new-game").addEventListener("click", init);
