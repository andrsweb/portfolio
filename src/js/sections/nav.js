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

const setNewLocale = locale => {
	if( ! locale ) return

	const allLangs = document.querySelectorAll( '.lang' )

	if( ! allLangs.length ) return

	allLangs.forEach( lang => {
		const langLocale = lang.dataset.lang

		if( langLocale === locale ){
			if( ! lang.classList.contains( 'active' ) ) lang.classList.add( 'active' )
		}	else {
			if( lang.classList.contains( 'active' ) ) lang.classList.remove( 'active' )
		}
	} )
}

