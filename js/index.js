
document.documentElement.style.setProperty("--transx", "");

links = ['search', 'loading', 'expland', 'sound', 'navigate', 'landing']

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
