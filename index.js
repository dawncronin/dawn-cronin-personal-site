
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

// Spoiled arrows


let leftArrow2 = document.querySelector(".left-2")
let rightArrow2 = document.querySelector(".right-2")

let images2 = document.querySelectorAll(".simage")

let curPosition2 = 0

images2.forEach((image, i) => {
    if (i === curPosition2) {
        image.style.display = "inline-block"
    } else {
        image.style.display = "none"
    }
})

leftArrow2.addEventListener("click", () => {
    curPosition2 -= 1
    if (curPosition2 >= images2.length) {
        curPosition2 = curPosition2%images2.length
    }
    if (curPosition2 < 0) {
        curPosition2 = images2.length + curPosition2
    }
    images2.forEach((image, i) => {
        if (i === curPosition2) {
            image.style.display = "inline-block"
        } else {
            image.style.display = "none"
        }
    })
})

rightArrow2.addEventListener("click", () => {
    curPosition2 += 1
    if (curPosition2 >= images2.length) {
        curPosition2 = curPosition2%images2.length
    }
    images2.forEach((image, i) => {
        if (i === curPosition2) {
            image.style.display = "inline-block"
        } else {
            image.style.display = "none"
        }
    })
})