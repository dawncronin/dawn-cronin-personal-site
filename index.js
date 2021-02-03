
let leftArrow = document.querySelector(".left")
let rightArrow = document.querySelector(".right")

let images = document.querySelectorAll(".bsimage")

let curPosition = 0

images.forEach((image, i) => {
    if (i === curPosition) {
        image.style.display = "inline-block"
    } else {
        image.style.display = "none"
    }
})

leftArrow.addEventListener("click", () => {
    curPosition -= 1
    if (curPosition >= images.length) {
        curPosition = curPosition%images.length
    }
    if (curPosition < 0) {
        curPosition = images.length + curPosition
    }
    images.forEach((image, i) => {
        if (i === curPosition) {
            image.style.display = "inline-block"
        } else {
            image.style.display = "none"
        }
    })
})

rightArrow.addEventListener("click", () => {
    curPosition += 1
    if (curPosition >= images.length) {
        curPosition = curPosition%images.length
    }
    images.forEach((image, i) => {
        if (i === curPosition) {
            image.style.display = "inline-block"
        } else {
            image.style.display = "none"
        }
    })
})