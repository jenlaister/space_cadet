class Cheese {
  constructor() {
    this.height = 20
    this.width = 20
    // Cheese.all.push(this) = []
  }

  // Cheese.all = []

  render() {
    let $cheese = $('.cheese')
    $cheese.html()
  }

  // render(){
  //   let $cheese = setInterval(function(){
  //     createCheesePosition(Math.floor(Math.random() * 630))}, 1000)
  // }
  //
  // createCheesePosition(x){
  //   return $('.cheese').css('bottom',`${x}px`)
  // }

  cheesePosition(){ //starting point of cheeses. Gives you a number
    return parseInt($(".container #board .cheese").css("left"))
  }


  moveCheeses(){
    let cheeseItself = this
    $(document).on("keyup", (key) => {
      setInterval(function() {cheeseItself.moveLeft()}, 200)
    })
  }

  moveLeft(){
    let cheeseItself = this
    function move(){
      var newCheesePosition = (cheeseItself.cheesePosition() - 40)
      if (newCheesePosition > 0) {
        return $('.cheese').css('left', (newCheesePosition.toString().concat('px')))
        window.requestAnimationFrame(move)
      }
      if (newCheesePosition == -30) {
        $('.cheese').css('left', (newCheesePosition.toString().concat('px'))).remove()
      }
    }
    window.requestAnimationFrame(move)
  }



  // gameInterval = setInterval(function() {
  //   render(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  // }, 1000)
}
