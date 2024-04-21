let macImg = document.querySelector('.mac-photo')
let whiteMac = document.querySelector('#white-mac')
let greyMac = document.querySelector('#grey-mac')
let colorName = document.querySelector('.color-name')
let price = document.querySelector('.price')

let memoryBtns = document.querySelectorAll('.memory-item')

let whitePrice = '$1,999';
let greyPrice = '$2,599';


whiteMac.onclick = () => {
    greyMac.classList.remove('active-btn')
    whiteMac.classList.add('active-btn')
    colorName.innerText = 'White'
    macImg.style.backgroundImage = `url('./img/mac-white.png')`
    price.innerText = whitePrice
};

greyMac.onclick = () => {
    whiteMac.classList.remove('active-btn')
    greyMac.classList.add('active-btn')
    colorName.innerText = 'Space Gray'
    macImg.style.backgroundImage = `url('./img/mac-gray.png')`
    price.innerText = greyPrice
}


memoryBtns.forEach(btn => {
    btn.onclick = () => {
        memoryBtns.forEach(btn => btn.classList.remove('active-mem'))
        btn.classList.add('active-mem')
        
        
        if (btn.innerText.includes('512 GB')) {
            price.innerText = greyMac.classList.contains('active-btn') ? '$2,599' : '$1,999'
        } else if (btn.innerText.includes('1 TB')) {
            price.innerText = greyMac.classList.contains('active-btn') ? '$2,799' : '$2,199'
        } else if (btn.innerText.includes('2 TB')) {
            price.innerText = greyMac.classList.contains('active-btn') ? '$3,199' : '$2,599' 
        } else if (btn.innerText.includes('4 TB')) {
            price.innerText = greyMac.classList.contains('active-btn') ? '$3,799' : '$3,199' 
        }
    }
})
