export const setNewLocale = locale => {
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
