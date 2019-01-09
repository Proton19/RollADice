const textArea = document.querySelector(".paragraph--textarea-rolled");

function diceRoll(min = 1, max = 7) {
	let roll = Math.floor(Math.random() * (max - min) + 1);
	let rolledDice = document.querySelector(`div[data-key="${roll}"]`);
	console.log(rolledDice);
	// rolledDice.style.classList.add("dice-active");
	textArea.innerHTML = `You rolled a ${roll}`;
}
