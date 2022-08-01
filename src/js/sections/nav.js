import {setNewLocale} from '../common/global' 

document.addEventListener( 'DOMContentLoaded', () => {
	'use strict'

	changeLang()
})

const changeLang = () => {
	const langsParents = document.querySelectorAll( '.header-lang' )

	if ( ! langsParents.length ) return

	langsParents.forEach( langsParent => {
		const langs = langsParent.querySelectorAll( '.lang' )

		if ( ! langs.length ) return

		langs.forEach( lang => {
			lang.addEventListener( 'click', () => {
				if ( lang.classList.contains( 'active' ) ) return

				const activeLang = langsParent.querySelector( '.lang.active' )

				if ( activeLang ) activeLang.classList.remove( 'active' )

				lang.classList.add( 'active' )

				// Check for language type in data-attribute (ru|eng in our case).
				const locale = lang.dataset.lang

				if( locale ) setNewLocale( locale )
			})
		})
	} )
}


