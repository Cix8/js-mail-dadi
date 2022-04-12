let userNumber = Math.floor(Math.random() * 6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero del giocatore: ", userNumber);
console.log("Numero del computer: ", computerNumber);

let userWins = false;

if (userNumber > computerNumber) {
    userWins = true;
} else if (userNumber === computerNumber) {
    userWins = 'pareggio';
}

console.log("Il giocatore ha vinto: ", userWins);