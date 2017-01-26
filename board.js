class Board{
  constructor(){
    this.positions = [['x','x','x','x','x','x','x','x','x','x','x'], ['x','x','x','x','x','x','x','x','x','x','x'], ['x','x','x','x','x','x','x','x','x','x','x'], ['x','x','x','x','x','x','x','x','x','x','x'], ['x','x','x','x','x','x','x','x','x','x','x']]
  }

  render(){
    let $board = $('#board')
    $board.html.forEach(this.positions, i) => {
      $board.append(`<div class="square" id='$(i)'>$(position)</div>`)
    }
    callback()
  }
}
