loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')
console.log("hello")

load = 0
int = setInterval(blurring, 25)

function blurring() {
    load++
    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100
    bg.style.filter = `blur(${30 - (load/100) * 30}px)`
}
