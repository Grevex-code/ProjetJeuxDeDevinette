// Générer un nombre aléatoire entre 1 et 100
let nombreMystere = Math.floor(Math.random() * 100) + 1;

document.getElementById('submitGuess').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess').value);
    const resultMessage = document.getElementById('resultMessage');

    if (guess === nombreMystere) {
        resultMessage.textContent = "Bravo, tu as deviné le bon nombre !";
        resultMessage.style.color = 'green';
    } else if (guess > nombreMystere) {
        resultMessage.textContent = "Trop grand ! Réessaie.";
        resultMessage.style.color = 'red';
    } else {
        resultMessage.textContent = "Trop petit ! Réessaie.";
        resultMessage.style.color = 'red';
    }
});
