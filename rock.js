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

  randomizedPosition() {
    var h = $('#board').height() - 25 // 650-15 = H: 635
    var newH = Math.floor(Math.random() * h) // .5 * 635 = 317
    //var w = $('#board').width() - 100 // 1100 - 15 = W: 1085
    //var newW = Math.floor(Math.random() * w) // .35 * 1085 = 379.75
    //return [newH, newW]
    return newH
  }

  animateRock() {
    var newPosition = this.randomizedPosition()
    $('.rock').animate({ bottom: newPosition, right: 100 }, {duration: 1000})
    $('.rock_1').animate({ bottom: newPosition, right: 300 }, {duration: 950})
    $('.rock_2').animate({ bottom: newPosition, right: 400 }, {duration: 800})
    $('.rock_3').animate({ bottom: newPosition, right: 550 }, {duration: 2000})
    $('.rock_4').animate({ bottom: newPosition, right: 750 }, {duration: 1050})
    $('.rock_5').animate({ bottom: newPosition, right: 850 }, {duration: 700})
    this.animateRock()
    //setInterval(animateRock{}, 1000)
  }
  // $('.rock_1').animate({ bottom: newPosition[0], right: newPosition[1] }, {duration: 750})

}
