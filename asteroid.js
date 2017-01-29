class Asteroid {
  constructor() {
    this.height = 20
    this.width = 20
    // Asteroid.all.push(this) = []
  }

  // Asteroid.all = []

  render() {
    let $asteroid = $('.asteroid')
    $asteroid.html()
  }

  // render(){
  //   let $asteroid = setInterval(function(){
  //     createAsteroidPosition(Math.floor(Math.random() * 630))}, 1000)
  // }
  //
  // createAsteroidPosition(x){
  //   return $('.asteroid').css('bottom',`${x}px`)
  // }

  asteroidPosition(){ //starting point of asteroids. Gives you a number
    return parseInt($(".container #board .asteroid").css("left"))
  }


  moveAsteroids(){
    let asteroidItself = this
    $(document).on("keyup", (key) => {
      setInterval(function() {asteroidItself.moveLeft()}, 200)
    })
  }

  moveLeft(){
    let asteroidItself = this
    function move(){
      var newAsteroidPosition = (asteroidItself.asteroidPosition() - 40)
      if (newAsteroidPosition > 0) {
        return $('.asteroid').css('left', (newAsteroidPosition.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
      if (newAsteroidPosition == -30) {
        $('.asteroid').css('left', (newAsteroidPosition.toString().concat('px'))).remove()
      }
    }
    window.requestAnimationFrame(move)
  }



  // gameInterval = setInterval(function() {
  //   render(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  // }, 1000)
}
