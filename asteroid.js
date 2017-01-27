class Asteroid {
  constructor() {
    this.height = 20
    this.width = 20
  }

  render(x) {
    let $asteroid = $('.asteroid')
    $asteroid.html()
  }

  asteroidPosition(){ //starting point of asteroids
    return parseInt($(".container #board .asteroid").css("right"))
  }

  moveAsteroids() {
    let asteroidItself = this
    function move() {
      var astpos = asteroidPosition()
      //var newAsteroidPosition = (asteroidItself.asteroidPosition() - 100)
      if (astpos >= 0) { //
        debugger
        var asteroidMovement = `${asteroidItself.asteroidPosition += 2}px` // speed of asteroids
        return $('.asteroid').css('right', (asteroidItself.asteroidMovement.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
    }
    window.requestAnimationFrame(move)
  }

  // gameInterval = setInterval(function() {
  //   render(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  // }, 1000)
}
