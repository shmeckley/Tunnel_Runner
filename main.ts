function check () {
    basic.pause(1)
    tiem += 1
    if (_4[playerx] == 1) {
        basic.clearScreen()
        basic.showIcon(IconNames.No)
        while (!(input.buttonIsPressed(Button.AB))) {
            basic.showString("" + (score - 5))
        }
        control.reset()
    }
    if (tiem >= speedtween) {
        speedtween = 80 * 0.99 ** score + 20
        score += 1
        draw_walls()
    }
}
function draw_walls () {
    tiem = 0
    _4 = _3
    _3 = _2
    _2 = _1
    _1 = _0
    pathmaker()
    x = 0
    y = 0
    while (x < 5) {
        if (_0[x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        x += 1
    }
    y += 1
    x = 0
    while (x < 5) {
        if (_1[x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        x += 1
    }
    y += 1
    x = 0
    while (x < 5) {
        if (_2[x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        x += 1
    }
    y += 1
    x = 0
    while (x < 5) {
        if (_3[x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        x += 1
    }
    y += 1
    x = 0
    while (x < 5) {
        if (_4[x] == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        x += 1
    }
}
function pathmaker () {
    path = newpath
    newpath = path + randint(-1, 1)
    if (newpath > 4) {
        newpath = 3
    }
    if (newpath < 0) {
        newpath = 1
    }
    x0 = 1
    x1 = 1
    x2 = 1
    x3 = 1
    x4 = 1
    if (newpath == 0 || path == 0) {
        x0 = 0
    }
    if (newpath == 1 || path == 1) {
        x1 = 0
    }
    if (newpath == 2 || path == 2) {
        x2 = 0
    }
    if (newpath == 3 || path == 3) {
        x3 = 0
    }
    if (newpath == 4 || path == 4) {
        x4 = 0
    }
    _0 = [
    x0,
    x1,
    x2,
    x3,
    x4
    ]
}
let x4 = 0
let x3 = 0
let x2 = 0
let x1 = 0
let x0 = 0
let y = 0
let x = 0
let playerx = 0
let path = 0
let newpath = 0
let tiem = 0
let speedtween = 0
let score = 0
let _4: number[] = []
let _3: number[] = []
let _2: number[] = []
let _1: number[] = []
let _0: number[] = []
while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
    led.plot(2, 4)
}
led.unplot(2, 4)
score = 0
speedtween = 100
_0 = [
0,
0,
0,
0,
0
]
_1 = [
0,
0,
0,
0,
0
]
_2 = [
0,
0,
0,
0,
0
]
_3 = [
0,
0,
0,
0,
0
]
_4 = [
0,
0,
0,
0,
0
]
tiem = 0
newpath = 2
path = 2
playerx = 2
while (true) {
    if (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        while (true) {
            if (input.buttonIsPressed(Button.A)) {
                led.unplot(playerx, 4)
                playerx += -1
                if (playerx < 0) {
                    playerx += 1
                }
                break;
            }
            if (input.buttonIsPressed(Button.B)) {
                led.unplot(playerx, 4)
                playerx += 1
                if (playerx > 4) {
                    playerx += -1
                }
                break;
            }
            check()
            led.plotBrightness(playerx, 4, 100)
        }
    }
    check()
    led.plotBrightness(playerx, 4, 100)
}
