const IMAGES = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR72ZO1tHEQmBLjK8DDTaqWyP1XmOpSSc0yrZhhOYZDE6Gd5m2iNJIr2qDU9hx7QjEw1MI&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fL5D-RAxf0JdcBXzjucr-yeHhxuSz6CNq-3-dp0UPA&s",
    "https://image.shutterstock.com/image-photo/flat-stone-podium-magical-forest-260nw-2322254753.jpg"
]
const TITLES = [
    "Foggy morning",
    "Sunny City",
    "Furiious Waves",
]
let currentIndex = 0
const EFFECTS = [
    "animate__fadeInLeft",
    "animate__fadeInRight",
    "animate__bounceInRight",
    "animate__bounceInLeft"
]
function showImage(n) {
    let i = Math.round(Math.random() * 3)
    carouselSlides.innerHTML = `<img src="${IMAGES[n]}" class="animate__animated ${EFFECTS[i]}" style="width: 800px; height: 600px;">`
}
function showTitle(n) {
    carouselTitles.innerHTML = `<h4>${TITLES[n]}</h4>`
}
function prev() {
    currentIndex--
    if (currentIndex < 0) {
        currentIndex = 2
    }
    showTitle(currentIndex)
    showImage(currentIndex)
    showIndicators(currentIndex)
}
function showIndicators (n) {
    carouselIndicators.innerHTML = ``
    for(let i=0; i<IMAGES.length; i++) {
        if (i == n){
            carouselIndicators.innerHTML += `+`
        } else {
            carouselIndicators.innerHTML += `-`
        }
    }
}
function action() {
    if (event.key === "ArrowLeft") {
        prev()
    } else if (event.key === "ArrowRight") {
        next()
    }
}
function next() {
        currentIndex++
        if (currentIndex > 2) {
            currentIndex = 0
        }
        showTitle(currentIndex)
        showImage(currentIndex)
        showIndicators(currentIndex)
}
showImage(currentIndex)
showIndicators(currentIndex)
showTitle(currentIndex)
function play() {
    setInterval(next , 5000)
}
