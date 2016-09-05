config {
	pageRendererTemplateFile = {$resDir}/Private/Templates/PageRenderer.html

	absRefPrefix = /
	tx_realurl_enable = 1
	prefixLocalAnchors = 1

	disablePrefixComment = 1

	spamProtectEmailAddresses = 1
	spamProtectEmailAddresses_atSubst = (at)

	compressCss = 0
	concatenateCss = 0

	compressJs = 0
	concatenateJs = 0

	contentObjectExceptionHandler = 0
}

plugin.tx_news {
	settings {
		# only for DETAILS VIEW
		detail {
			media {
				image {
					maxWidth = 970
					maxHeight = 364
				}
			}
		}
		# only for LIST VIEW
		list {
			media {
				image {
					maxWidth = 970
					maxHeight = 364
				}
			}
		}
	}
}