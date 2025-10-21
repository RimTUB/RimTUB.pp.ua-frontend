const translateListLinks = document.querySelectorAll('.translate__list li a')
const body = document.body

const allLangs = Array.from(translateListLinks).map(link => link.lang)

translateListLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault()

		const lang = link.lang
		let pathName = window.location.pathname

		let pathParts = pathName.split('/').filter(part => part)

		if (allLangs.includes(pathParts[0])) {
			pathParts.shift()
		}

		if (lang !== 'en') {
			pathParts.unshift(lang)
		}

		const newPath = '/' + pathParts.join('/')
		console.log(newPath);


		window.location.assign(newPath)
		
		body.setAttribute('lang', lang)

		translateListLinks.forEach(otherLink => {
			if (otherLink === link) {
				otherLink.setAttribute('data-translate-active', '')
				otherLink.setAttribute('aria-current', 'true')
			}
			else {
				otherLink.removeAttribute('data-translate-active')
				otherLink.removeAttribute('aria-current')
			}
		})
	})
})

