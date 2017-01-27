class Dog {
  constructor(player) {
    this.player = player
    this.height = 75
    this.width = 125
    const dog = document.getElementById('dog')
    // this.score = 0 score being kept by game? Will change later.
  }

  render(){
    let $dog = $('#dog')
    $dog.html()
  }

  moveDog() {
  this.addEventHandlers.bind(this))
    $('#dog').on('keypress', function(key) => {
      if (key.which == 38) { // up
        moveDogUp() // move the spaceship up
      } else if(key.which == 40) { // down
        moveDogDown() // move the spaceship down, $(event.target) ?
      }
    })
  }

  moveDogUp() {
  window.requestAnimationFrame(function() {
    const up = positionToInteger(dog.up)
    if (up > 0) {
      dog.up = `${bottom - 4}px`;
    }
  })
}

  moveDogdown() {
  window.requestAnimationFrame(function() {
    const down = positionToInteger(dog.down)
    if (top < 675) {     //width: 1100, height: 750
      dog.down = `${down + 4}px`;
    }
  })
}

}
function positionToInteger(p) {
  return parseInt(p.split('px')[0])
}

// function start() {
//   document.addEventListener('keydown', moveDog)
  //
  // START.style.display = 'none'
