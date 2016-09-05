
# Default PAGE object:
page = PAGE

## Favicon
#page.shortcutIcon = {$resDir}/Public/Icons/favicon.ico

## CSS Dateien laden
page.includeCSS {
	foundation = {$resDir}/Public/Css/foundation.css
	app = {$resDir}/Public/Css/app.css
	font = https://fonts.googleapis.com/css?family=Roboto:400,900italic,900,700italic,700,500italic,500,400italic,300italic,300,100italic,100
	icon = {$resDir}/Public/Css/Icons/foundation-icons.css
	masterslider = {$resDir}/Public/masterslider/style/masterslider.css
	masterslidertheme = {$resDir}/Public/masterslider/skins/light-4/style.css
	slick = http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css
	slicktheme = {$resDir}/Public/slick/slick-theme.css
}

## JavaScript laden

page.includeJSFooter {
	vendor = {$resDir}/Public/JavaScript/vendor/jquery.js
	whatinput = {$resDir}/Public/JavaScript/vendor/what-input.js
	foundation = {$resDir}/Public/JavaScript/vendor/foundation.js
	masterslider = {$resDir}/Public/masterslider/masterslider.min.js
	slick = http://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js
	migrate = http://code.jquery.com/jquery-migrate-1.2.1.min.js



	app = {$resDir}/Public/JavaScript/app.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	partialRootPath = {$resDir}/Private/Partials
	layoutRootPath = {$resDir}/Private/Layouts

	variables {
		contentMain < styles.content.get
	}

	#file = {$resDir}/Private/Templates/DefaultTemplate.html
}

page.10.file.stdWrap.cObject = CASE
page.10.file.stdWrap.cObject {
	key.data = pagelayout

	# Default Template
	default = TEXT
	default.value = {$resDir}/Private/Templates/DefaultTemplate.html

	pagets__1 < .default

}
