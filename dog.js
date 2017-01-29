class Dog {
  constructor(player) {
    this.player = player
    // this.score = 0 score being kept by game? Will change later.
  }

  render(){
    let $dog = $('#dog')
    $dog.html()
    // alert("hey")
  }

  moveDog() {
    $(document).on("keydown", (key) => {
      if (key.which == 38) { // up
        this.moveDogUp() // move the spaceship up
      } if (key.which == 40) {
        this.moveDogDown() // move the spaceship down
      } if (key.which == 39) {
        this.moveDogRight()
      } if (key.which == 37) {
        this.moveDogLeft()
      }
  })
}

  dogPosition(){ //starting point of dog
    return parseInt($(".container #board #dog").css("bottom"))
  }


  moveDogUp() {
    let dogItself = this
    function move() {
      var newDogPosition = (dogItself.dogPosition() + 50)
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
      var newDogPosition = (dogItself.dogPosition() - 50)
      if (newDogPosition > 0) {
        return $('#dog').css('bottom', (newDogPosition.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
  }

  dogPosition2(){
    return parseInt($(".container #board #dog").css("left"))
  }

  moveDogRight() {
    let dogItself = this
    function move() {
      var newDogPosition2 = (dogItself.dogPosition2() + 50)
      if (newDogPosition2 < 925) {
        return $('#dog').css('left', (newDogPosition2.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
  }

  moveDogLeft() {
    let dogItself = this
    function move() {
      var newDogPosition2 = (dogItself.dogPosition2() - 50)
      if (newDogPosition2 > 0) {
        return $('#dog').css('left', (newDogPosition2.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
  }

  // checkCollision(){
  //   alert("You Lose")
  //   //var list = $("#selector").collision(".obstacle");
  //   // let $collision = $("#dog").collision(".rock")
  //   //   $collision.alert("You Lose!")
  //   }

}
