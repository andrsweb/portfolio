import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

})

const formButton = document.querySelector( '.contacts-button' )
const formItems = document.querySelector( '.popup' )
const closeButton = document.querySelector( '.close-button' )
const targetElement = document.querySelector('#popup-lock');

formButton.addEventListener('click', () => {
    if ( ! formItems.classList.contains( 'opened' ) ) {
        formItems.classList.add( 'opened' )
        disableBodyScroll( targetElement )
    }
})

closeButton.addEventListener('click', () => {
    if ( formItems.classList.contains( 'opened' ) ) {
        formItems.classList.remove( 'opened' )
        enableBodyScroll( targetElement )
    }
})
