$(document).ready(function(){
  let board = new Board()
  board.render()
  //let player = new Player()
  //}
  board.startGame()
  let dog = new Dog()
  //board.checkCollision() //setInterval
  dog.render()
  dog.moveDog()
  let rock = new Rock()
  rock.render()
  rock.animateRock()
})
