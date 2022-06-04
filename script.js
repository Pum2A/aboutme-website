'use strict'
const hamburger = document.querySelector('.top span')
const nav = document.querySelector('nav');
const styleNav = getComputedStyle(nav);
const search = document.querySelector('#search')
const searchInput = document.querySelector('#inputSearch')
const styleSearchInput = getComputedStyle(inputSearch)



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
    if(styleSearchInput.display == 'none') {

        searchInput.style.display = 'flex';
        search.innerText = 'close';

    } else {
        searchInput.style.display = 'none'
        search.innerText = 'search';
    }
});
document.querySelector('#contactContent').addEventListener('click', (event) => {
    if(event.target.id === 'contactP'){
        event.target.style.display = 'none'
    }

})