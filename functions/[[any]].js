import BrowseHtml from "../browse/index.html"
import ExtensionHtml from "../browse/extensions/index.html"

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
		'description': 'Powerful, fast and developer-friendly extension framework for Pterodactyl. Utilize extension APIs, inject HTML, modify stylesheets, package extensions and so much more.',
		'og:description': 'Powerful, fast and developer-friendly extension framework for Pterodactyl. Utilize extension APIs, inject HTML, modify stylesheets, package extensions and so much more.',
		'og:title': 'blueprint.zip',
		'og:image': '/.assets/brand/og.jpg',
		'og:url': context.request.url,
		'og:type': 'website',
		'twitter:card': 'summary_large_image',
		'twitter:url': context.request.url,
		'twitter:title': 'blueprint.zip',
		'twitter:description': 'Powerful, fast and developer-friendly extension framework for Pterodactyl. Utilize extension APIs, inject HTML, modify stylesheets, package extensions and so much more.',
		'twitter:image': '/.assets/brand/og.jpg',
	}

	if (url.pathname.startsWith('/browse')) {
		if (url.pathname.startsWith('/browse/extensions')) {
			const extension = url.hash.slice(1)

			const data = await fetch(`https://api.blueprintframe.work/api/extensions/${extension}`).then((res) => res.json()).catch(() => null)
			if (!data) return Response.redirect('/browse', 301)

			return new Response(insertMetadata({
				...meta,
				'og:title': `blueprint.zip | ${data.name}`,
				'description': `${meta.description}\n\n${data.summary}`,
				'og:description': `${meta['og:description']}\n\n${data.summary}`,
				'og:image': data.banner,
				'twitter:title': `blueprint.zip | ${data.name}`,
				'twitter:description': `${meta['twitter:description']}\n\n${data.summary}`,
				'twitter:image': data.banner
			}, ExtensionHtml), {
				headers: {
					'Content-Type': 'text/html'
				}
			})
		}

		meta['og:image'] = '/.assets/brand/og-browse.jpg'
		meta['twitter:image'] = '/.assets/brand/og-browse.jpg'

		const data = await fetch('https://api.blueprintframe.work/api/extensions').then((res) => res.json()).catch(() => null)
		if (data) {
			return new Response(insertMetadata({
				...meta,
				'og:title': 'blueprint.zip | Browse Extensions',
				'description': `${meta.description}\n\nBrowse ${data.length} extensions for blueprint.zip.`,
				'og:description': `${meta['og:description']}\n\nBrowse ${data.length} extensions for blueprint.zip.`,
				'twitter:title': 'blueprint.zip | Browse Extensions',
				'twitter:description': `${meta['twitter:description']}\n\nBrowse ${data.length} extensions for blueprint.zip.`
			}, BrowseHtml), {
				headers: {
					'Content-Type': 'text/html'
				}
			})
		}

		return new Response(insertMetadata(meta, BrowseHtml), {
			headers: {
				'Content-Type': 'text/html'
			}
		})
	}

	return context.env.ASSETS.fetch(url)
}