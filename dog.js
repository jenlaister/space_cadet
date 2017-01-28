class Dog {
  constructor(player) {
    this.player = player
    // this.score = 0 score being kept by game? Will change later.
  }

  render(){
    let $dog = $('#dog')
    $dog.html()
  }

  moveDog() {
    $(document).on("keyup", (key) => {
      if (key.which == 38) { // up
        this.moveDogUp() // move the spaceship up
      }
      if (key.which == 40) {
        this.moveDogDown() // move the spaceship down
      }
    })
  }

  dogPosition(){ //starting point of dog
    return parseInt($(".container #board #dog").css("bottom"))
  }

  moveDogUp() {
    let dogItself = this
    function move() {
      var newDogPosition = (dogItself.dogPosition() + 25)
      if (newDogPosition < 595) {
        return $('#dog').css('bottom', (newDogPosition.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
  }
  window.requestAnimationFrame(move)
}

  moveDogDown() {
    let dogItself = this
    function move() {
      var newDogPosition = (dogItself.dogPosition() - 25)
      if (newDogPosition > 0) {
        return $('#dog').css('bottom', (newDogPosition.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
  }

}

// parsePosition(position){
//   return parseInt(position)
// }
// function start() {
//   document.addEventListener('keydown', moveDog)
  //
  // START.style.display = 'none'
