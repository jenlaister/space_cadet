class Board{
  constructor(){
    this.width = 1100
    this.height = 650
    // up = 38
    // down = 40
    // right > 39
    // left < 37
  }

  render(){
    let $board = $('#board')
    $board.html()
  }

  checkCollision(){
    if ((($('.rock')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock')[0].style["left"] == $('#dog')[0].style["left"])) ||
      (($('.rock_1')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_1')[0].style["left"] == $('#dog')[0].style["left"])) ||
      (($('.rock_2')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_2')[0].style["left"] == $('#dog')[0].style["left"])) ||
      (($('.rock_3')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_3')[0].style["left"] == $('#dog')[0].style["left"])) ||
      (($('.rock_4')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_4')[0].style["left"] == $('#dog')[0].style["left"])) ||
      (($('.rock_5')[0].style["bottom"] == $('#dog')[0].style["bottom"]) && ($('.rock_5')[0].style["left"] == $('#dog')[0].style["left"]))) {
      alert("you lose")
    }
  }

//   $('.rock')[0].style["top"]
// "127.239px"
// $('.rock')[0].style["left"]
// "108px"
//
// $('#dog')[0].style["left"]
// "0px"
//
// $('#dog')[0].style["bottom"]
// "225px"

}
