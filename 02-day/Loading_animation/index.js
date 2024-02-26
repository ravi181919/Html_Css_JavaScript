
window.addEventListener('load',() => {
    const contant = document.querySelector('.loadingAnimaton')
    const con = document.querySelector('#conatainer')
    
    // Alternatively, use a timer to hide the loader for timed displays:
    setTimeout(() => {

    // Add a CSS class for fading out animation
    contant.classList.add('fade-out') 
    contant.style.display = 'none'
    contant.classList.remove('loadingAnimaton')
    con.style.display = 'flex'
   }, 2000) // Hide after 2 seconds
})
