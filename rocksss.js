class Rock {
  constructor(height, width) {
    this.height = 20,
    this.width = 20,
    this.gameInterval = null;
    this.startEl = document.getElementById('start');
    this.rocksCollect = [];
  }

  render(x) {
    let $rock = $('.rock')
    $rock.html()
  }
  rockPosition(){ //starting point of rocks
    return parseInt($(".container #board .rock").css("right")) // 0px
  }


  moveRock() {
    let rockItself = this
     function move() {
      var rockMovement = (rockItself.rockPosition() + 50) // speed of rocks
       if (rockMovement < 1050) {
        return $('.rock').css('right', (rockMovement.toString().concat('px')))
        window.requestAnimationFrame(move)
        } else {
        rockItself.rock.remove()
        }
      }
      window.requestAnimationFrame(move)
        this.rocksCollect.push(rockItself.rock)
        return rockItself.rock
      }

  startMovement() {
  //document.addEventListener('keydown', moveRock)
  //this.startEl.style.display = 'none'
  this.gameInterval = setInterval(function() {
    this.render(Math.floor(Math.random() *  (1100 - 20)))
  }, 1000)
}
}
  //document.addEventListener('keydown', moveRock()) here or space_cadet
