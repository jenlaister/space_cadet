class Dog {
  constructor(player) {
    this.player = player
    this.height = 60
    this.width = 60
    // this.score = 0 score being kept by game? Will change later.
  }

  render(){
    let $dog = $('#dog')
    $dog.html('dog')
    this.addEventHandlers.bind(this))
  }
}

  addEventHandlers(){
    $('#dog').on('keypress', function(key) => {
      if (key.which == 38) { // up
        $(event.target).
        // move the spaceship up
      } else {
        $(event.target).
        // move the spaceship down
      }
    })
  }
}

// function move(rock) {
//   var top = 0
//
//   function step() {
//     rock.style.top = `${top += 2}px`
//
//     if (top < 200) {
//       window.requestAnimationFrame(step)
//     }
//   }
//
//   window.requestAnimationFrame(step)
// }




// function hitSpaceship?(rock) {
//   const top
// asteroids 20px
// spaceship 90px wide, 60px height
// }
