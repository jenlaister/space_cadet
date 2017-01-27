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

  // var dogPosition = "325px"
  // var positionBottom = "0px"
  // var positionTop = "650px"
  // var positionLeft = "0px"
  // var positionRight = "1100px"

  moveDog() {
  // this.addEventListener.bind(this))
    $(document).on("keyup", (key) => {
      if (key.which == 38) { // up
        this.moveDogUp() // move the spaceship up
      } else if(key.which == 40) { // down
        this.moveDogDown() // move the spaceship down, $(event.target) ?
      }
    })
  }

  dogPosition(){
    return parseInt($(".container #board #dog").css("bottom"))
  }


  moveDogUp() {
    let dogItself = this
    window.requestAnimationFrame( () => {
      if (dogItself.dogPosition() < 650) {
        var newDogPosition = (dogItself.dogPosition() + 50).toString().concat('px')
        // debugger
        return $('#dog').css('bottom')
      }
  })
}

  moveDogdown() {
    let dogItself = this
    window.requestAnimationFrame(function() {
      if (dogItself.dogPosition > 0) {
        var newDogPosition = (dogItself.dogPosition() - 50).toString().concat('px')
        newDogPosition
        return $('#dog').css('bottom').append(`${newDogPosition}`)
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
