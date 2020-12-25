let a = 0
basic.forever(function () {
    a = input.compassHeading()
    if (a < 45 || a > 315) {
        basic.showString("N")
    } else if (a < 135) {
        basic.showString("E")
    } else if (a < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
