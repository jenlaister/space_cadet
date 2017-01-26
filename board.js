class Board{
  constructor(){
    this.width = 800
    this.height = 600
    // this.player1 = dog
    // this.upArrow = 38
    // this.downArrow = 40
    // right > 39
    // left < 37
  }

  render(){
    let img = './css/img/bg.png'
    let $board = $('#board')
    $board.append(`<img src=${img} height="600" width="800">`)
}
}
