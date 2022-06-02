'use strict'
const hamburger = document.querySelector('.top span')
const nav = document.querySelector('nav');
const styleNav = getComputedStyle(nav);


hamburger.addEventListener('click', () => {
    if(styleNav.display == 'none') {

        nav.style.display = 'flex';
        hamburger.innerText = 'close';
        nav.style.left = '0%'

    } else {
        nav.style.display = 'none'
        hamburger.innerText = 'menu';
    }

});