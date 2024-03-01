audio = ['', '', '', '', '', '']

audio.forEach(sound => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click', () {

    })
    doscument.getElementById('buttons').appendChild(btn)


})
