// let computerChoice;


//creating a object to keep track of the scores

let scoreStr = localStorage.getItem('Score');  //this will fetch the data item labbeled as Score in this case the stored score object in local storage 
// let score;

//checking if a data is present in scoreStr 
// if (scoreStr !== undefined) {

  //if data exists then since it is a stribg ub  JSON format we will convert it to  java script object 
  // score = JSON.parse(scoreStr);
// } else {

  // if the data is not fetched from the local storage then default score will be initialized . 
//   score = {
//     win: 0,
//     lost: 0,
//     tie: 0,

//   };
// }

// better way to write above code
let score
resetScore(scoreStr);
function resetScore(scoreStr) {
   score = scoreStr ? JSON.parse(scoreStr) :{

    win: 0,
    lost: 0,
    tie: 0,

  };

  score.displayScore = function () {
    return `No of matches Won - ${score.win}
    Lost - ${score.lost}
    Tie - ${score.tie}`;
  };
}


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

  //storing score in local storage

  localStorage.setItem('Score', JSON.stringify(score)); 


  alert(`your choice is ${userMove}  and  computer choice is ${computerMove} and  
  ${result}
  ${score.displayScore()}`);

}