const card = document.querySelector('#cards')
const yesBtn = document.querySelector('.yes')
const noBtn = document.querySelector('.no')

const cardRect = card.getBoundingClientRect()
const noRect = noBtn.getBoundingClientRect()

yesBtn.addEventListener('click', () => {
    const addElemnt = document.createElement('h1')
    addElemnt.innerText = '❤️'
    console.log(addElemnt);
    card.appendChild(addElemnt)
})

noBtn.addEventListener('mouseover', () => {
    const width = Math.floor(Math.random() * (cardRect.width - noRect.width)) + 1;
    const height = Math.floor(Math.random() * (cardRect.height - noRect.height)) + 1;
    noBtn.style.left = width + 'px';
    noBtn.style.top = height + 'px';
})

