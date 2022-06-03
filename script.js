'use strict'
const hamburger = document.querySelector('.top span')
const nav = document.querySelector('nav');
const styleNav = getComputedStyle(nav);
const search = document.querySelector('.search')

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

search.addEventListener('click', () => {
    if(styleNav.display == 'none') {

        nav.style.display = 'flex';
        search.innerText = 'close';
        nav.style.left = '0%'

    } else {
        nav.style.display = 'none'
        search.innerText = 'search';
    }
})