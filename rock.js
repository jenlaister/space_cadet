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
    var h = $('#board').height() - 50
    var newH = Math.floor(Math.random() * h)
    var w = $('#board').width() - 75
    var newW = Math.floor(Math.random() * w)
    return [newH, newW]
  }

  randomizedAnotherPosition() {
    var h = $('#board').height() - 25
    var newH = Math.floor(Math.random() * h)
    var w = $('#board').width() - 100
    var newW = Math.floor(Math.random() * w)
    return [newH, newW]
  }

  animateRock() {
    var newPosition = this.randomizedPosition()
    var newPosition1 = this.randomizedAnotherPosition()
    $('.rock').animate({ top: newPosition[0], left: newPosition[1] })
    $('.rock_1').animate({ top: newPosition1[0], right: newPosition1[1] })
    $('.rock_2').animate({ right: newPosition[0], top: newPosition1[1] })
    $('.rock_3').animate({ left: newPosition1[0], top: newPosition[1] })
    $('.rock_4').animate({ top: newPosition[0], right: newPosition1[1] })
    $('.rock_5').animate({ left: newPosition1[0], top: newPosition[1] })
    this.animateRock()
  }
}
