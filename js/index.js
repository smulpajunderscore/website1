
document.documentElement.style.setProperty("--transx", "");

links = ['search', 'loading', 'expland', 'sound', 'navigate', 'landing']

links.forEach(link => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = link
    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})
