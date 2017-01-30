class Board{
  constructor(){
    this.width = 1100
    this.height = 650
  }

  render(){
    let $board = $('#board')
    $board.html()
  }

  startGame(){
    let music = document.createElement('audio')
    music.setAttribute('src', 'audio/Earth Wind and Fire- Shining Star - from YouTube.mp3')
    document.addEventListener("click", start)
    function start() {
      music.play()
      $("#start").remove()
      //rock.animateRock()
    }
  }
  // checkCollision(){
  //   if ((($('.rock')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock')[0].style["left"] == $('#dog')[0].style["left"])) ||
  //     (($('.rock_1')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_1')[0].style["left"] == $('#dog')[0].style["left"])) ||
  //     (($('.rock_2')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_2')[0].style["left"] == $('#dog')[0].style["left"])) ||
  //     (($('.rock_3')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_3')[0].style["left"] == $('#dog')[0].style["left"])) ||
  //     (($('.rock_4')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_4')[0].style["left"] == $('#dog')[0].style["left"])) ||
  //     (($('.rock_5')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_5')[0].style["left"] == $('#dog')[0].style["left"]))) {
  //     alert("you lose")
  //   }
  // }

  //   $('.rock')[0].style["top"]
  // "127.239px"
  // $('.rock')[0].style["left"]
  // "108px"
  // $('#dog')[0].style["left"]
  // "0px"
  // $('#dog')[0].style["bottom"]
  // "225px"


//   checkCollision(){
//   let $collision = $('#dog').collision(“.rock”)
//     $collision.alert('You lose!')
//     let loserMusic = document.createElement('audio')
//     loserMusic.setAttribute('src', 'audio/Lost-life-sound-effect.mp3')
//     loserMusic.play()
// }
// testCollision(position1, size1, position2, size2) {
//  if (((position1.left + size1.width)  > position2.left) &&
//  ((position1.top  + size1.height) > position2.top)  &&
//  ((position2.left + size2.width)  > position1.left) &&
//  ((position2.top  + size2.height) > position1.top)) {
//    triggerExplosion(position1.top, position1.left);
//  }
// }

}
