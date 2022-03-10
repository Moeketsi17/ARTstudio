// sticky nav
// sticky nav
// window.addEventListener('scroll', function(){
//     let nav = document.querySelector('.nav-bar');
//     nav.classList.toggle('sticky', window.scrollY > 0)
// });


// nav animate
// nav animate
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links')
const linkFade = document.querySelectorAll('.nav-links li a')
const logo = document.querySelector('logo')

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
    logo.classList.toggle('enabled');

    
});


 // smooth scroll 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#js-scroll'),
    smooth: true,
    smoothMobile: true,
    inertia: 0.75
});


anime.timeline()
    .add({
        targets: '.anime-js-title .letter',
        translateY: [60, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 600 + 30 * i
    });

// project subtitle animation 
TweenMax.from(".project__container-subtitle", 2, {
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

// project image fade 
TweenMax.from(".project__image-one", 2, {
    opacity: 0,
    ease: Expo.easeInOut
});

// image animation
// image animation
// let imageItems = [...document.querySelectorAll('.img-wrap')];
// let titles = [...document.querySelectorAll('.img-text')];

// let options = {
//     rootmargin: '0px',
//     threshold: 0.2
// }

// let setItemActive = (entries => {
//     console.log(entries)
// });

// let observer = new IntersectionObserver(setItemActive, options);

// imageItems.forEach((item, idx) => {
//     item.children[0].style.backgroundImage = `url(./images${idx+1}.jpeg)`;
//     idx % 2 == 0 ? item.style.left = '40%' : item.style.left = '5%';
//     observer.observe(item)
// })






























