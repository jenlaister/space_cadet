class Rock {
  constructor(height, width) {
    this.height = 20,
    this.width = 20,
    //this.board.width = 1050
    //this.board = document.getElementById('board')
    this.rocksCollect = []
  }

  render() {
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
         if (rockMovement < 1050) { //
           return $('.rock').css('right', (rockMovement.toString().concat('px')))
           window.requestAnimationFrame(move)
         }
      }
      window.requestAnimationFrame(move)
    }
  }
    //rockItself.rock.remove()
    //rockItself.rocksCollect.push(rockItself.rock)
    //return rocksCollect

//   var gameInterval = null
//    gameInterval = setInterval(function() {
//     this.render(Math.floor(Math.random() *  (this.board.width - 20)))
//   }, 1000)
// }
