import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { WINDOW_WIDTH_MD } from '../common/global'

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	toggleMobileMenu()
} )

/**
 * Open / close mobile menu.
 */
const toggleMobileMenu = () => {
	const navButton		= document.querySelector( '.burger-button' ),
		navItems		= document.querySelector( '.nav-items' ),
		lang			= document.querySelector( '.header-lang' ),
		targetElement	= document.querySelector( '#bodyLock' )

	// Mobile menu button click.
	navButton.addEventListener( 'click', () => {
		if( ! navButton.classList.contains( 'active' ) )
			navButton.classList.add( 'active' )
		else
			navButton.classList.remove( 'active' )

		if( ! navItems.classList.contains( 'opened' ) ){
			navItems.classList.add( 'opened' )
			disableBodyScroll( targetElement )
		}	else {
			navItems.classList.remove( 'opened' )
			enableBodyScroll( targetElement )
		}

		if( ! lang.classList.contains( 'opened' ) )
			lang.classList.add( 'opened' )
	} )

	// Close mobile menu - remove active classes.
	const closeMobileMenu = () => {
		if( targetElement && ! navItems.classList.contains( 'opened' ) ) return

		navItems.classList.remove( 'opened' )
		navButton.classList.remove( 'active' )
		enableBodyScroll( targetElement )
	}

	// Close mobile menu on menu item click.
	navItems.addEventListener( 'click', closeMobileMenu )

	// Window on resize event.
	window.addEventListener( 'resize', () => {
		const windowWidth = window.innerWidth

		// If window >= medium scrrens width.
		if( windowWidth >= WINDOW_WIDTH_MD ) closeMobileMenu()
	} )
}