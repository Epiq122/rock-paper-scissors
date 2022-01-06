const computerPlay = () => {
  // these are our 3 options for the game
  const options = ['rock', 'paper', 'scissors'];
  // randomlly selects of the options
  const randomNumber = Math.floor(Math.random() * 3);
  // returns the random option
  return options[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
  // this is where we compare the player and computer selection
  if (playerSelection === computerSelection) {
    return 'It is a tie!';
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You lose! Paper beats rock.';
    } else {
      return 'You win! Rock beats scissors.';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You lose! Scissors beats paper.';
    } else {
      return 'You win! Paper beats rock.';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You lose! Rock beats scissors.';
    } else {
      return 'You win! Scissors beats paper.';
    }
  }
};

// const playerSelection = prompt('Rock, Paper, or Scissors?');
// const computerSelection = computerPlay();
// alert(playRound(playerSelection, computerSelection));

// const game = () => {
//   // this is where we play the game
//   // this is where we get the player selection
//   const playerSelection = prompt('Please select rock, paper or scissors.');
//   // this is where we get the computer selection
//   const computerSelection = computerPlay();
//   // this is where we display the result
//   alert(playRound(playerSelection, computerSelection));
// };

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// add rock event addEventListener
rock.addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = computerPlay();
  alert(playRound(playerSelection, computerSelection));
});
paper.addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = computerPlay();
  alert(playRound(playerSelection, computerSelection));
});
scissors.addEventListener('click', () => {
  const playerSelection = 'scissors';
  const computerSelection = computerPlay();
  alert(playRound(playerSelection, computerSelection));
});
