const jokenpo = () => {
  let playAgain = true;
  while (playAgain) {
    console.clear();
    const rounds = 5;
    let wins = 0;
    let losses = 0;
    let ties = 0;
    const options = ['scissors', 'rock', 'paper'];

    for (let i = 0; i < rounds; i++) {
      console.log(`Round ${i + 1}:`);
      let player = prompt('Rock, paper, or scissors?').toLowerCase();
      while (!options.includes(player)) {
        player = prompt('Invalid choice. Rock, paper, or scissors?').toLowerCase();
      }
      const computer = options[Math.floor(Math.random() * options.length)];
      console.log(`You played ${player} and the computer played ${computer}.`);
      if (player === computer) {
        console.log('Tie!');
        ties++;
      } else if (player === 'rock') {
        if (computer === 'scissors') {
          console.log('You win!');
          wins++;
        } else {
          console.log('You lose.');
          losses++;
        }
      } else if (player === 'paper') {
        if (computer === 'rock') {
          console.log('You win!');
          wins++;
        } else {
          console.log('You lose.');
          losses++;
        }
      } else if (player === 'scissors') {
        if (computer === 'paper') {
          console.log('You win!');
          wins++;
        } else {
          console.log('You lose.');
          losses++;
        }
      }
      console.log(`Score: Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
    }
    console.log(`Final Results: Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
    playAgain = window.confirm('Do you want to play again?');
    if (playAgain===true){
    console.clear()
   };
  }
};

jokenpo();

