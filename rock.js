class Rock {
  constructor() {
  }

  render() {
    //let $start = $('#start')
    //$start.document.addEventListener('click', $start.remove())
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

  // randomizedPosition() {
  //   var h = $('#board').height() - 15 // 650-15 = H: 635
  //   var newH = Math.floor(Math.random() * h) // .5 * 635 = 317
  //   var w = $('#board').width() - 15 // 1100 - 15 = W: 1085
  //   var newW = Math.floor(.10 * w) // .35 * 1085 = 379.75
  //   return [newH, newW]
  // }
  //
  // randomizedAnotherPosition() {
  //   var h = $('#board').height() - 10
  //   var newH = Math.floor(.15 * h)
  //   var w = $('#board').width() - 10 //Math.max()
  //   var newW = Math.floor(Math.random() * w)
  //   return [newH, newW]
  // }

  animateRock() {
    // var newPosition = this.randomizedPosition()
    //var newPosition1 = this.randomizedAnotherPosition()
    debugger
    $('.rock').animate({ bottom: 100, left: 250 })
    $('.rock_1').animate({ bottom: 150, left: 300 })
    $('.rock_2').animate({ bottom: 200, left: 325 })
    $('.rock_3').animate({ bottom: 250, left: 400 })
    $('.rock_4').animate({ bottom: 300, left: 450 })
    $('.rock_5').animate({ bottom: 350, left: 500 })
    this.animateRock()
      setInterval(function() {this.animateRock()}, 200)
  }

  // checkCollision(){
  //   alert("You Lose")
  //   //var list = $("#selector").collision(".obstacle");
  //   // let $collision = $("#dog").collision(".rock")
  //   //   $collision.alert("You Lose!")
  //   }
}
