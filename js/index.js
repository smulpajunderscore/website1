
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

// Animate the buttons /!\CURRENTLY DOES NOT WORK/!\
var element = document.getElementById('root'),
  style = window.getComputedStyle(element);
var currentX = style.x
var currentY = style.y
var borderBottom = style.border-bottom;
var borderRight = style.border-right;

changeX = 5;
changeY = 5;

function getCoordinates () {
  element.setProperty('--x-new', currentX + changeX)
  element.setProperty('--y-new', currentX + changeY)
}

function switchDirection () {
  if (currentX <= 0 || currentX >= borderRight) {
    changeX = changeX * -1;
  }
  if (currentY <= 0 || currentY >= borderBottom) {
    changeY = changeY * -1;
  }
}
