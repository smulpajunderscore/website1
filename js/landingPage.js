toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show_nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show_modal')
})
