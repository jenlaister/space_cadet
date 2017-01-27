class Asteroids() {
  constructor() {
    this.height = 20
    this.width = 20
    const asteroid = document.getElementById('asteroid')
  }

  render() {
    let $asteroid = $('#asteroid')
    $asteroid.html()
  }
}

function move(rock) {
  var top = 0

  function step() {
    rock.style.top = `${top += 2}px`

    if (top < 200) {
      window.requestAnimationFrame(step)
    }
  }

  window.requestAnimationFrame(step)
}


//   gameInterval = setInterval(function() {
//     createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
//   }, 1000)
// }
