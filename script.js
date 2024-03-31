// let computerChoice;


//creating a object to keep track of the scores

let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore: function () {
    return `No of matches Won - ${ score.win }
    Lost - ${ score.lost }
    Tie - ${ score.tie }`
  }
};


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
      score.win++;
      return 'User is the winer';
    } else if (computerMove === 'stump') {
      score.lost++;
      return 'Computer is the winner ';
    } else if (computerMove === 'bat') {
      score.tie++;
      return `It's a draw`
    }
  } else if (userMove === 'ball') {
    if (computerMove === 'bat') {
      score.lost++;
      return 'Computer  is the winer'
    } else if (computerMove === 'stump') {
      score.win++;
      return 'User  is the winner '
    } else {
      score.tie++;
      return `It's a draw`
    }
  } else {  //stump 
    if (computerMove === 'bat') {
      score.win++;
      return 'User  is the winer';
    } else if (computerMove === 'ball') {
      score.lost++;
      return 'Computer   is the winner '
    } else {
      score.tie++;
      return `It's a draw`
    }
  }
}



function showResult(userMove, computerMove, result) {
  alert(`your choice is ${userMove}  and  computer choice is ${computerMove} and  
  ${result}
  ${score.displayScore()}`);

}