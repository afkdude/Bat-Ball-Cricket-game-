// let computerChoice;

function generateComputerChoice() {
  // let computerChoice;   //local variable 
  let randomNumber = Math.random() * 3;


  if (randomNumber > 0 && randomNumber <= 1) {
    return 'bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'ball';
  } else {
    return 'stump';
  }

}



function getResult(userMove, computerMove) {  //computerMove same as computerChoice

  if (userMove === 'bat') {
    if (computerMove === 'ball') {
      return 'user is the winer'
    } else if (computerMove === 'stump') {
      return 'computer is the winner '
    } else if(computerMove === 'bat') {
      return `it's a draw`
    }
  } else if (userMove === 'ball') {
    if (computerMove === 'bat') {
      return 'computer  is the winer'
    } else if (computerMove === 'stump') {
      return 'user  is the winner '
    } else {
      return `it's a draw`
    }
  } else {  //stump 
    if (computerMove === 'bat') {
      return 'user  is the winer'
    } else if (computerMove === 'ball') {
      return 'computer   is the winner '
    } else {
      return `it's a draw`
    }
  }
}



function showResult(userMove, computerMove ,result) {
  alert(`your choice is ${userMove}  and  computer choice is ${computerMove} and  ${result}`);
}