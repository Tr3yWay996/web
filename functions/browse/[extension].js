import ExtensionsHtml from "../../browse/extensions.html"

function insertMetadata(data, html) {
	let meta = ''

	for (const key in data) {
		meta += `<meta name="${key}" content="${data[key]}">`
	}

	return html.replace('<!-- META -->', meta)
}

export const onRequest = async(context) => {
	const url = new URL(context.request.url)

	const meta = {
		'theme-color': '#4642f5',
		'description': '',
		'og:description': '',
		'og:title': 'blueprint.zip',
		'og:image': '/.assets/brand/og-browse.jpg',
		'og:url': context.request.url,
		'og:type': 'website',
		'twitter:card': 'summary_large_image',
		'twitter:url': context.request.url,
		'twitter:title': 'blueprint.zip',
		'twitter:description': '',
		'twitter:image': '/.assets/brand/og-browse.jpg'
	}

	if (url.pathname.endsWith('/')) {
		url.pathname = url.pathname.slice(0, -1)
	}

	if (!url.pathname.includes('assets') && !url.pathname.includes('.js') && !url.pathname.includes('.css')) {
		const data = await fetch('https://api.blueprintframe.work/api/extensions').then((res) => res.json()).catch(() => null),
			extension = url.pathname.split('/').pop()

		if (!data) {
			return new Response(insertMetadata(meta, ExtensionsHtml), {
				headers: {
					'Content-Type': 'text/html'
				}
			})
		}

		if (data.some((x) => x.identifier === extension || x.id.toString() === extension)) {
			const extensionData = data.find((x) => x.identifier === extension || x.id.toString() === extension)

			if (!extensionData) return context.env.ASSETS.fetch(url)

			return new Response(insertMetadata({
				...meta,
				'og:title': `${extensionData.name}`,
				'description': `${extensionData.summary}`,
				'og:description': `${extensionData.summary}`,
				'og:image': extensionData.banner,
				'twitter:title': `${extensionData.name}`,
				'twitter:description': `${extensionData.summary}`,
				'twitter:image': extensionData.banner
			}, ExtensionsHtml), {
				headers: {
					'Content-Type': 'text/html'
				}
			})
		}
	}

	return context.env.ASSETS.fetch(url)
}