audio = ['', '', '', '', '', '']

audio.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    doscument.getElementById('buttons').appendChild(btn)


})
