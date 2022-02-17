// sticky nav
// sticky nav
window.addEventListener('scroll', function(){
    let nav = document.querySelector('.nav-bar');
    nav.classList.toggle('sticky', window.scrollY > 0)

})


// nav animate
// nav animate
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links')
const linkFade = document.querySelectorAll('.nav-links li')
const logo = document.querySelector('logo')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    logo.classList.toggle('enabled')


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

// image animation
// image animation
let imageItems = [...document.querySelectorAll('.img-wrap')];
let titles = [...document.querySelectorAll('.img-text')];

let options = {
    rootmargin: '0px',
    threshold: 0.2
}

let setItemActive = (entries => {
    console.log(entries)
});

let observer = new IntersectionObserver(setItemActive, options);

imageItems.forEach((item, idx) => {
    item.children[0].style.backgroundImage = `url(./images${idx+1}.jpeg)`;
    idx % 2 == 0 ? item.style.left = '40%' : item.style.left = '5%';
    observer.observe(item)
})






























