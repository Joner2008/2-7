basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
    }
})
