audio = ['alert', 'ds_death', 'explosion', 'miau', 'rdm', 'splat']

audio.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stop_audio()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stop_audio() {
    audio.forEach(sound => {
        sample = document.getElementById(sound)
        sample.pause()
        sample.currentTime = 0
    })
}
