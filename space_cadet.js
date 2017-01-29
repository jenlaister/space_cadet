class SpaceCadet{
  constructor(){
    this.board = new Board()
    this.player = player
  }

//
//   checkCollision(rock) {
//     // rocks are 20px high
//     // DOG is 80px high
//     // GAME_HEIGHT = 650px;
//     if (top > 650) {
//       const rockLeftEdge = positionToInteger(Dog.style.left)
//       const dogRight = dogLeftEdge + 40;
//       const rockLeftEdge = positionToInteger(rock.style.left)
//       const rockRightEdge = rockLeftEdge + 20;
//
//       return (
//         (rockLeftEdge <= Dog.dogPositionLeftEdge && rockRightEdge >= Dog.dogPositionLeftEdge) ||
//         (rockLeftEdge >= Dog.dogPositionLeftEdge && rockRightEdge <= Dog.dogPositionRightEdge) ||
//         (rockLeftEdge <= Dog.dogPositionRightEdge && rockRightEdge >= Dog.dogPositionRightEdge)
//       )
//     }
//
//   start() {
//   document.addEventListener('keydown', Dog.moveDog)
//   const START = document.getElementById('start')
//   START.style.display = 'none'
//   }
//  youWin() {
//  if Dog.dogPosition reaches the end of the board(1050px)
// alert ('you win')
//  }
//
//   endGame() {
//    $('rock').remove()
//    $('rock_1').remove()
//    $('rock_2').remove()
//    $('rock_3').remove()
//    $('rock_4').remove()
//    $('rock_5').remove()
//    document.removeEventListener('keydown', Dog.moveDog)
//    START.innerHTML = 'Play again?'
//    START.style.display = 'inline'
//    return alert('WHOMP WHOMP - YOU LOSE!!!')
//  }
// }
}
