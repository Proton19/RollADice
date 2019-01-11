const textArea = document.querySelector(".paragraph--textarea-rolled");
const rollButton = document.querySelector(".button--dice-roll");

rollButton.addEventListener("click", function() {
	// Use a randomly generated number between 1-6 to target image that matches rolled dice
	let roll = Math.floor(Math.random((min = 1), (max = 7)) * (max - min) + 1);
	let rolledDice = document.querySelector(`div[data-key="${roll}"]`);

	// Target all images, convert nodelist to array and loop over while deleting active state
	let dice = document.querySelectorAll(".dice");
	let diceArr = Array.from(dice);
	diceArr.forEach(dice => {
		dice.classList.remove("dice-active");
	});

	// Add active state to rolled dice and update text area
	rolledDice.classList.add("dice-active");
	textArea.innerHTML = `You rolled a ${roll}`;
});
