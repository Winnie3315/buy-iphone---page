let colorText = document.querySelector('.color')
let colorItems = document.querySelectorAll('.color-item')
let display = document.querySelector('#display')

let blue = document.querySelector('#blue-box')
let pink = document.querySelector('#pink-box')
let yellow = document.querySelector('#yellow-box')
let green = document.querySelector('#green-box')
let black = document.querySelector('#black-box')

let blueImg = document.querySelector('#blue')
let pinkImg = document.querySelector('#pink')
let yellowImg = document.querySelector('#yellow')
let greenImg = document.querySelector('#green')
let blackImg = document.querySelector('#black')



let currentColor = 'blue';



colorItems.forEach((itm) =>{
    itm.onclick = () =>{
        let colorBtn = itm.getAttribute('id')
        colorText.innerText = `Color ${colorBtn}`
        currentColor = colorBtn
    }
})

blue.onmouseenter = () => {
    colorText.innerText = 'Color - blue'
}
blue.onmouseleave = () => {
    colorText.innerText = `Color - ${currentColor}`
}
pink.onmouseenter = () => {
    colorText.innerText = 'Color - pink'
}
pink.onmouseleave = () => {
    colorText.innerText = `Color - ${currentColor}`
}
yellow.onmouseenter = () => {
    colorText.innerText = 'Color - yellow'
}
yellow.onmouseleave = () => {
    colorText.innerText = `Color - ${currentColor}`
}
green.onmouseenter = () => {
    colorText.innerText = 'Color - green'
}
green.onmouseleave = () => {
    colorText.innerText = `Color - ${currentColor}`
}
black.onmouseenter = () => {
    colorText.innerText = 'Color - black'
}
black.onmouseleave = () => {
    colorText.innerText = `Color - ${currentColor}`
}


pink.onclick = () => {
    colorText.innerText = 'Color - pink'

    pink.style.border = '2px solid rgb(0, 113, 227)'
    blue.style.border = '0'
    yellow.style.border = '0'
    green.style.border = '0'
    black.style.border = '0'

    pinkImg.classList.remove('unvisible')
    blueImg.classList.add('unvisible')
    yellowImg.classList.add('unvisible')
    greenImg.classList.add('unvisible')
    blackImg.classList.add('unvisible')
}
yellow.onclick = () => {
    colorText.innerText = 'Color - yellow'

    yellow.style.border = '2px solid rgb(0, 113, 227)'
    blue.style.border = '0'
    pink.style.border = '0'
    green.style.border = '0'
    black.style.border = '0'

    yellowImg.classList.remove('unvisible')
    blueImg.classList.add('unvisible')
    pinkImg.classList.add('unvisible')
    greenImg.classList.add('unvisible')
    blackImg.classList.add('unvisible')
}
green.onclick = () => {
    colorText.innerText = 'Color - green'

    green.style.border = '2px solid rgb(0, 113, 227)'
    blue.style.border = '0'
    pink.style.border = '0'
    yellow.style.border = '0'
    black.style.border = '0'

    greenImg.classList.remove('unvisible')
    blueImg.classList.add('unvisible')
    pinkImg.classList.add('unvisible')
    yellowImg.classList.add('unvisible')
    blackImg.classList.add('unvisible')
}
black.onclick = () => {
    colorText.innerText = 'Color - black'

    black.style.border = '2px solid rgb(0, 113, 227)'
    blue.style.border = '0'
    pink.style.border = '0'
    yellow.style.border = '0'
    green.style.border = '0'

    blackImg.classList.remove('unvisible')
    blueImg.classList.add('unvisible')
    pinkImg.classList.add('unvisible')
    yellowImg.classList.add('unvisible')
    greenImg.classList.add('unvisible')
}
blue.onclick = () => {
    colorText.innerText = 'Color - blue'

    blue.style.border = '2px solid rgb(0, 113, 227)'
    green.style.border = '0'
    pink.style.border = '0'
    yellow.style.border = '0'
    black.style.border = '0'

    blueImg.classList.remove('unvisible')
    greenImg.classList.add('unvisible')
    pinkImg.classList.add('unvisible')
    yellowImg.classList.add('unvisible')
    blackImg.classList.add('unvisible')
}



