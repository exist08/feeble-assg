const hamburger = document.getElementById('hamburger-icon')
const mobileMenu = document.getElementById('mobile-menu')
hamburger.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active')
})