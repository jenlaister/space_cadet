class Asteroids() {
  constructor() {
    this.rock = rock
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
