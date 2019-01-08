const textArea = document.querySelector(".paragraph--textarea-rolled");

function diceRoll(min = 1, max = 7) {
	let roll = Math.floor(Math.random() * (max - min) + 1);
	textArea.innerHTML = `You rolled a ${roll}`;
	if (roll <= 6) {
		dice = document.querySelector(`div--dice-${roll}`);
		dice.style.classList.add("dice-active");
	}
	console.log(roll);
}
