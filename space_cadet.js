class SpaceCadet{
  constructor(){
    this.board = new Board()
    this.player1 = player1
    this.player2 = player2
  }

  render(){
    this.board.render(this.addEventHandlers.bind(this))
  }



}
