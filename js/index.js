
// Make all the links buttons
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

var element = document.getElementById('root'),
  style = window.getComputedStyle(element);

var currentX = style.x
var currentY = style.y
var borderBottom = style.border-bottom;
var borderRight = style.border-right;

function glide () {
  
}

function switchDirection () {

}
