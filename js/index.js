
document.documentElement.style.setProperty("--transx", "");

links = ['search', 'loading', 'expland', 'sound', 'navigate', 'landing']

links.forEach(link => {
    btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = link
    btn.addEventListener('click', () => {
        location.href = document.getElementById(link);
    })
    document.getElementById('buttons').appendChild(btn)
})
