class Rock {
  constructor() {
  }

  render() {
    let $rock = $('.rock')
    let $rock_1 = $('.rock_1')
    let $rock_2 = $('.rock_2')
    let $rock_3 = $('.rock_3')
    let $rock_4 = $('.rock_4')
    let $rock_5 = $('.rock_5')
    $rock.html()
    $rock_1.html()
    $rock_2.html()
    $rock_3.html()
    $rock_4.html()
    $rock_5.html()
  }

  randomizedPosition() {
    var h = $('#board').height() - 15
    var newH = Math.floor(Math.random() * h)
    return newH
  }

  anotherRandoPosition() {
    var w = $('#board').width() - 50
    var newW = Math.floor(Math.random() * w)
    return newW
  }

  animateRock() {
    var newPosition = this.randomizedPosition()
    var newPosition2 = this.anotherRandoPosition()
    $('.rock').animate({ bottom: newPosition, left: 300 }, {duration: 1000})
    $('.rock_1').animate({ bottom: newPosition, right: newPosition2 }, {duration: 1050})
    $('.rock_2').animate({ top: newPosition, right: newPosition2 }, {duration: 1000})
    $('.rock_3').animate({ bottom: newPosition, left: 650 }, {duration: 3000})
    $('.rock_4').animate({ top: newPosition, right: newPosition2 }, {duration: 1950})
    $('.rock_5').animate({ bottom: newPosition, right: newPosition2 }, {duration: 2000})
  }

  moveRock() {
    var rockItself = this
    //this.movingRocks = setInterval(function(){rockItself.animateRock()}, 100)
    setInterval(function(){rockItself.animateRock()}, 100)
  }

  // stopRock() {
  //   clearInterval(this.movingRocks)
  // }


}
