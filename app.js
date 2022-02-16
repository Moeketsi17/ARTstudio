
// nav animate
// nav animate
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links')
const linkFade = document.querySelectorAll('.nav-links li a')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // navlink fade in
    linkFade.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.6s ease forwards ${index / 4 + 0.3}s `
        }
        console.log(index)
    })

})


































