class Dog {
  constructor(player) {
    this.player = player
    this.height = 75
    this.width = 125
    this.dogEl = document.getElementById('dog')

    // this.score = 0 score being kept by game? Will change later.
  }


  render(){
    let $dog = $('#dog')
    $dog.html()
  }
  //
  // var dogPosition = "325px"
  // var positionBottom = "0px"
  // var positionTop = "650px"
  // var positionLeft = "0px"
  // var positionRight = "1100px"

  moveDog() {
  // this.addEventListener.bind(this))
    $(document).on("keyup", (key) => {

      if (key.which == 38) { // up
        moveDogUp() // move the spaceship up
      } else if(key.which == 40) { // down
        moveDogDown() // move the spaceship down, $(event.target) ?
      }
    })
  }

  dogPosition(){
    return parseInt($(".container #board #dog").css("bottom"))
  }

  moveDogUp() {
  window.requestAnimationFrame(function() {
    if (dogPosition < 650) {
      var newDogPosition = `${dogPosition + 50}px`
    }
  })
}

  moveDogdown() {
  window.requestAnimationFrame(function() {
    if (dogPosition > 0) {
      var newDogPosition = `${dogPosition - 50}px`
    }
  })
  }

  parsePosition(position){
    return parseInt(position)
  }

}

// function start() {
//   document.addEventListener('keydown', moveDog)
  //
  // START.style.display = 'none'
