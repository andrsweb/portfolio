import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

})

const navButton = document.querySelector( '.burger-button' )
const navItems  = document.querySelector( '.nav-items' )
const lang = document.querySelector( '.header-lang')

navButton.addEventListener('click', () => {

	if ( ! navButton.classList.contains('active')) { 
		navButton.classList.add('active') 
	}	else {
			navButton.classList.remove('active')
	}
	if ( ! navItems.classList.contains('opened')) {
		navItems.classList.add('opened')
	}	else {
			navItems.classList.remove('opened')	
	}
	if ( ! lang.classList.contains('opened')) {
		lang.classList.add('opened')
	}	else {
			lang.classList.remove('opened')	
	}
})
