document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

})

const header = document.querySelector( '.header' )
const headerNavigation = document.querySelector( '.header-nav' )
const navButton = document.querySelector( '.burger-button')

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY

    if (scrollTop > 0) {
        if (!header.classList.contains( 'scrolled' )) {
            header.classList.add( 'scrolled' )
            navButton.classList.add( 'scrolled' )
        }
    }   else {
        if (header.classList.contains( 'scrolled' )) {
            header.classList.remove( 'scrolled' )
            navButton.classList.remove( 'scrolled' )
        }
    }
})
