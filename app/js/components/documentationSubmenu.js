import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

const link = document.querySelector('[data-documentation-link]')

if (link) {
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
		theme: 'material',
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
		if (e.key === ' ')  {
			e.preventDefault()
			instance.show()
		}

		if (e.key === 'Escape') {
			instance.hide()
			link.focus()
		}
	})
}

// document.addEventListener('DOMContentLoaded', () => {
//   const link = document.querySelector('[data-documentation-link]')

//   if (!link) return

//   const instance = tippy(link, {
//     content: `
//       <ul data-documentation-submenu role="menu" id="docs-submenu" style="list-style:none;margin:0;padding:0;">
//         <li role="none">
//           <a role="menuitem" href="https://mirror.docs.rimtub.pp.ua">Mirror</a>
//         </li>
//       </ul>
//     `,
//     trigger: 'manual',
//     interactive: true,
//     placement: 'bottom',
//     theme: 'translucent',
// 		animation: 'fade',
//     allowHTML: true,
//     onShow(instance) {
//       link.setAttribute('aria-expanded', 'true')
//       // фокус на первую ссылку в меню
//       instance.popper.querySelector('a')?.focus()
//     },
//     onHide(instance) {
//       link.setAttribute('aria-expanded', 'false')
//     }
//   })

//   // ПКМ — показать меню
//   link.addEventListener('contextmenu', (e) => {
//     e.preventDefault()
//     instance.show()
//   })

//   // Клавиши Shift+F10 или ContextMenu
//   link.addEventListener('keydown', (e) => {
//     if (e.key === 'ContextMenu' || (e.shiftKey && e.key === 'F10')) {
//       e.preventDefault()
//       instance.show()
//     }

//     if (e.key === 'Escape') {
//       instance.hide()
//       link.focus()
//     }
//   })

//   // Закрытие при клике вне
//   document.addEventListener('click', (e) => {
//     if (!instance.popper.contains(e.target) && e.target !== link) {
//       instance.hide()
//     }
//   })
// })


// class DocumentationSubmenu {
// 	constructor() {
// 		this.link = document.querySelector('[data-documentation-link]')
// 		this.submenu = document.querySelector('[data-documentation-submenu]')
// 		this.init()
// 	}

// 	init() {
// 		this.link.addEventListener('contextmenu', this.rightClick)
// 	}

// 	openMenu() {
// 		this.submenu.style.display = 'block'
// 		this.submenu.classList.add('is-open')
// 		this.link.setAttribute('aria-expanded', 'true')
// 	}

// 	closeMenu() {
// 		this.submenu.style.display = 'none'
// 		this.submenu.classList.remove('is-open')
// 		this.link.setAttribute('aria-expanded', 'false')
// 	}

// 	rightClick(e) {
// 		e.preventDefault()
// 		this.openMenu()
// 	}
// }