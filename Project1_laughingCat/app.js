const normalCat = document.querySelector('.normal');
const laughingCat = document.querySelector('.laughing');

// Add event listener
normalCat.addEventListener('click', () => {
   
    laughingCat.classList.add('active');
    normalCat.classList.remove('active');

        
})
laughingCat.addEventListener('click', () => {
    
    normalCat.classList.add('active');
    laughingCat.classList.remove('active');
    
})
