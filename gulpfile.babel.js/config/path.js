const pathSrc   = './src';
const pathDest  = './public';

export default {
	root	: pathDest,

	html	: {
		src		: [pathSrc + '/html/*.html'],
		watch	: pathSrc + '/html/**/*.html',
		dest	: pathDest
	},

	scss	: {
		src		: pathSrc + '/scss/main.scss',
		watch	: pathSrc + '/scss/**/*.scss',
		dest	: pathDest + '/scss'
	},

	js		: {
		src		: pathSrc + '/js/main.js',
		watch	: pathSrc + '/js/**/*.js',
		dest	: pathDest + '/js'
	},

	img		: {
		src		: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		watch	: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
		dest	: pathDest + '/img'
	},

	fonts	: {
		src		: pathSrc + '/fonts/**/*.{eot,ttf,otfotc,ttc,woff,woff2,svg}',
		watch	: pathSrc + '/fonts/**/*.{eot,ttf,otfotc,ttc,woff,woff2,svg}',
		dest	: pathDest + '/fonts'
	},

	del		: {
		clean	: [
			`${pathDest}/*.html`,
			`${pathDest}/js/**/*`,
			`${pathDest}/scss/**/*`,
			`${pathDest}/img/**/*`,
			`${pathDest}/fonts/**/*`
		]
	}
};