audio = ['1', '2', '3', '4', '5', '6']

audio.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () {
        stop_audio()
        document.getElementById(sound).play()
    })
    doscument.getElementById('buttons').appendChild(btn)
})

function stop_audio() {
    sounds.forEach(sound => {
        audio = document.getElementById(sound)
        audio.pause()
        audio.currentTime = 0
    })
}
