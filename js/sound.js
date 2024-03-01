audio = ['', '', '', '', '', '']

audio.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () {
        docuemtn.ElementByIf(sound).play
    })
    doscument.getElementById('buttons').appendChild(btn)


})
