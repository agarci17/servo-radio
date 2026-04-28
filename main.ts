radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        microshield.Servo(microshield.Servos.S1, 0)
    }
    if (receivedNumber == 2) {
        microshield.Servo(microshield.Servos.S1, 45)
    }
    if (receivedNumber == 3) {
        microshield.Servo(microshield.Servos.S1, 90)
    }
    if (receivedNumber == 4) {
        microshield.Servo(microshield.Servos.S1, 140)
    }
    if (receivedNumber == 5) {
        microshield.Servo(microshield.Servos.S1, 180)
    }
})
radio.setGroup(178)
