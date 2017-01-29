$(document).ready(function(){
  let board = new Board()
  board.render()
  let music = document.createElement('audio')
  music.setAttribute('src', 'audio/Earth Wind and Fire- Shining Star - from YouTube.mp3')
  //$('#start').click(function() {
  music.play()
  //}
  let dog = new Dog()
  dog.render()
  dog.moveDog()
  board.checkCollision()
  let rock = new Rock()
  rock.render()
  rock.animateRock()

})

// function start() {
//   document.addEventListener('keydown', moveDog)
  //
  // START.style.display = 'none'
