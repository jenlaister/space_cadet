class Dog {
  constructor(player) {
    this.player = player
    // this.score = 0
    // score being kept by game? Will change later.
  }
  render(){
    this.board.render(this.addEventHandlers.bind(this))
    this.dog.render()
  }

  addEventHandlers(){
    $('.square').click((event) => {
      this.updateBoard(event.target.id)
      this.playCount += 1
      $(event.target).text(currentPlayer)
    })
  }

}
