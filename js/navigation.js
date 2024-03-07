nav = document.querySelector('.nav')

window.addEventListener('scroll', fix_nav)

function fix_nav() {
    if (window.scrollY > 256) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
