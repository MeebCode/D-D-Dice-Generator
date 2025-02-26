/* script.js */
window.roll = function(sides) {
    rollDice(sides);
}

function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById("result").innerText = `You rolled a d${sides}: ${result}`;
}