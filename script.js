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
// document.querySelector('#contactContent').addEventListener('click', (event) => {
//     const contactPAfter = document.querySelector('#contactPAfter')
//     const stylecontactPAfter = getComputedStyle(contactPAfter)
//     if(event.target.id === 'contactP'){
//         contactPAfter.style.display ='flex'
//     } else {
//         contactPAfter.style.display ='none'
//     }

// })

document.querySelectorAll('#contactP').forEach((element) => {
    element.addEventListener('click', () =>{
        const contactPAfter = document.querySelector('#contactPAfter')
        const styleContactPAfter = getComputedStyle(contactPAfter4)
        if(styleContactPAfter.display == 'none'){
            contactPAfter.style.display ='flex'
        } else {
            contactPAfter.style.display ='none'
        }
    })
})