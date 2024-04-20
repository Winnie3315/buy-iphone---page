let macImg = document.querySelector('.mac-photo')
let whiteMac = document.querySelector('#white-mac')
let greyMac = document.querySelector('#grey-mac')
let colorName = document.querySelector('.color-name')
let price = document.querySelector('.price')

let memoryBtns = document.querySelectorAll('.memory-item')

let macs = {
    'whiteMac': {
        'activeBtn': 'active-btn',
        'colorName': 'White',
        'imgUrl': './img/mac-white.png'
    },
    'greyMac': {
        'activeBtn': 'active-btn',
        'colorName': 'Space Gray',
        'imgUrl': './img/mac-gray.png'
    }
}

for (let mac in macs) {
    let btn = document.querySelector(`#${mac}`);
    btn.onclick = () => {
        whiteMac.classList.remove('active-btn');
        greyMac.classList.remove('active-btn');
        
        btn.classList.add(macs[mac].activeBtn);
        colorName.innerText = macs[mac].colorName;
        macImg.style.backgroundImage = `url('${macs[mac].imgUrl}')`;
    }
}


let priceList = {
    '200': '$2,199',
    '600': '$2,599',
    '1,200': '$3,199',
    'default': '$1,999'
}

memoryBtns.forEach(btn => {
    btn.onclick = () => {
        memoryBtns.forEach(btn => {
            btn.classList.remove('active-mem')
        })
        btn.classList.add('active-mem')

        let priceText = priceList['default'];


        for(let itm in priceList){
            if (btn.innerText.includes(itm)) {
                priceText = priceList[itm]; 
                break;
            }
        }
        price.innerText = priceText;
    }
})
  