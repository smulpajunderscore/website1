toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show_nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show_modal')
})

close.addEventListener('click', () => {
    modal.classList.remove('show_modal')
})
