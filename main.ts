enum RadioMessage {
    message1 = 49434,
    beep = 9406,
    beeep = 26125
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendNumber(1)
})
radio.setGroup(1)
