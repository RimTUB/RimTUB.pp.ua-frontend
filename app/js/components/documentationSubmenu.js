import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

const links = document.querySelectorAll('[data-documentation-link]')

links.forEach(link => {
	const instance = tippy(link, {
		content: `
					<ul data-documentation-submenu>
						<li>
							<a href="https://mirror.docs.rimtub.pp.ua" target="_blank">Mirror</a>
						</li>
					</ul>
				`,
		trigger: 'manual',
		interactive: true,
		allowHTML: true,
		placement: 'bottom',
		animation: 'perspective-extreme',
		theme: 'submenu',
		onShow(instance) {
			link.setAttribute('aria-expanded', 'true')
			instance.popper.querySelector('a')?.focus()
		},
		onHide(instance) {
			link.setAttribute('aria-expanded', 'false')
			link.focus()
		}
	})

	link.addEventListener('contextmenu', (e) => {
		e.preventDefault()
		instance.show()
	})

	link.addEventListener('keydown', (e) => {
		if (e.key === ' ') {
			e.preventDefault()
			instance.show()
		}

		if (e.key === 'Escape') {
			instance.hide()
			link.focus()
		}
	})
})