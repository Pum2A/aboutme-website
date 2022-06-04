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
document.querySelector('#contactContent #contactP').addEventListener('click', () => {
    const contactPAfter = document.querySelector('#contactPAfter')
    const stylecontactPAfter = getComputedStyle(contactPAfter)
    if(stylecontactPAfter.display == 'none'){
        contactPAfter.style.display ='flex'
    } else {
        contactPAfter.style.display ='none'
    }

})
document.querySelector('#contactContent #contactP2').addEventListener('click', () => {
    const contactPAfter2 = document.querySelector('#contactPAfter2')
    const stylecontactPAfter2 = getComputedStyle(contactPAfter2)
    if(stylecontactPAfter2.display == 'none'){
        contactPAfter2.style.display ='flex'
    } else {
        contactPAfter2.style.display ='none'
    }

})
document.querySelector('#contactContent #contactP3').addEventListener('click', () => {
    const contactPAfter3 = document.querySelector('#contactPAfter3')
    const stylecontactPAfter3 = getComputedStyle(contactPAfter3)
    if(stylecontactPAfter3.display == 'none'){
        contactPAfter3.style.display ='flex'
    } else {
        contactPAfter3.style.display ='none'
    }

})
document.querySelector('#contactContent #contactP4').addEventListener('click', () => {
    const contactPAfter4 = document.querySelector('#contactPAfter4')
    const stylecontactPAfter4 = getComputedStyle(contactPAfter4)
    if(stylecontactPAfter4.display == 'none'){
        contactPAfter4.style.display ='flex'
    } else {
        contactPAfter4.style.display ='none'
    }

})

