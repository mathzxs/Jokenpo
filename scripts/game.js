const displayRound = (roundNum) => {
  console.log(`Round ${roundNum}:`);
};

const getPlayerChoice = () => {
  let player = prompt('Rock, paper, or scissors?').toLowerCase().trim();
  while (!['scissors', 'rock', 'paper'].includes(player)) {
    player = prompt('Invalid choice. Rock, paper, or scissors?').toLowerCase().trim();
  }
  return player;
};

const getComputerChoice = () => {
  return ['scissors', 'rock', 'paper'][Math.floor(Math.random() * 3)];
};

const playRound = (roundNum) => {
  displayRound(roundNum);
  const player = getPlayerChoice();
  const computer = getComputerChoice();
  console.log(`You played ${player} and the computer played ${computer}.`);
  if (player === computer) {
    console.log('Tie!');
    return 0;
  } else if (player === 'rock') {
    if (computer === 'scissors') {
      console.log('You win!');
      return 1;
    } else {
      console.log('You lose.');
      return -1;
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      console.log('You win!');
      return 1;
    } else {
      console.log('You lose.');
      return -1;
    }
  } else if (player === 'scissors') {
    if (computer === 'paper') {
      console.log('You win!');
      return 1;
    } else {
      console.log('You lose.');
      return -1;
    }
  }
};

const displayScore = (wins, losses, ties) => {
  console.log(`Score: Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
};

const playGame = (rounds) => {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  for (let i = 0; i < rounds; i++) {
    const result = playRound(i + 1);
    if (result === 1) {
      wins++;
    } else if (result === -1) {
      losses++;
    } else {
      ties++;
    }
    displayScore(wins, losses, ties);
  }
  console.log(`Final Results: Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
};

const jokenpo = () => {
  let playAgain = true;
  while (playAgain) {
    console.clear();
    const rounds = 5;
    playGame(rounds);
    playAgain = window.confirm('Do you want to play again?');
  }
};

jokenpo();
