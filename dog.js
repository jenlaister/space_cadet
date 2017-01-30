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
    $(document).on("keydown", (key) => {
      if (key.which == 38) { // up
        this.moveDogUp()
      } if (key.which == 40) { // down
        this.moveDogDown()
      } if (key.which == 39) { // right
        this.moveDogRight()
      } if (key.which == 37) { // left
        this.moveDogLeft()
      }
    })
  }

  dogPosition(){ //starting point of dog for up & down
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

  dogPosition2() { //starting point of dog for left & right
    return parseInt($(".container #board #dog").css("left"))
  }

  moveDogRight() {
    let dogItself = this
    function move() {
      var newDogPosition2 = (dogItself.dogPosition2() + 50)
      if (newDogPosition2 < 1000) {
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
      if (newDogPosition2 > -50) {
        return $('#dog').css('left', (newDogPosition2.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
  }
}
