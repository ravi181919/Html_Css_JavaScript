const addButton = document.querySelector('.addMe')
const output = document.querySelector('.Output')
const reset = document.querySelector('.reset')

addButton.addEventListener('click', () => {
    const firstNum = parseInt(document.getElementById('fNum').value);
    const secondNum = parseInt(document.getElementById('secNum').value);

    if (firstNum && secondNum) {
        const final = firstNum + secondNum 
        output.textContent = final
    }
    else{
        alert('! Please enter the numbers')
    }
})

reset.addEventListener('click', () => 
{
    document.getElementById('fNum').value = null;
    document.getElementById('secNum').value = null;
    output.textContent = 0
})