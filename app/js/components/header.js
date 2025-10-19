class MenuItems {
	selectors = {
		menu: '.menu',
		list: '.menu__list',
		submenu: '.menu__submenu',
		button: '.menu__btn',
	}

	visibleCount = 4

	constructor() {
		this.menu = document.querySelector(this.selectors.menu)
		this.menuList = document.querySelector(this.selectors.list)
		this.dropdown = document.querySelector(this.selectors.submenu)
		this.dropdownBtn = this.menu.querySelector(this.selectors.button)
		this.allItems = Array.from(this.menuList.querySelectorAll('li'))

		this.init()
	}

	init() {
		const mediaQuery = window.matchMedia('(min-width: 56.25rem)')
		if (mediaQuery.matches) {
			if (this.allItems.length > this.visibleCount) {
			this.dropdownBtn.style.display = 'block'

			const hiddenItems = this.allItems.slice(this.visibleCount)

			hiddenItems.forEach(item => this.menuList.removeChild(item))
			hiddenItems.forEach(item => this.dropdown.appendChild(item))
		}
		}


		this.dropdownBtn.addEventListener('click', () => {
			this.dropdownToggle()
		})

		document.addEventListener('click', (e) => {
			this.closeDropdown(e)
		})
	}

	dropdownToggle() {
		this.dropdownBtn.classList.toggle('active')
		this.dropdownBtn.setAttribute('aria-expanded', this.dropdownBtn.classList.contains('active'))
	}

	closeDropdown(e) {
		if (!this.menu.contains(e.target)) {
			this.dropdownBtn.classList.remove('active')
			this.dropdownBtn.setAttribute('aria-expanded', 'false')
		}
	}
}

new MenuItems()

const headerInner = document.querySelector('.header__inner')
const header = document.querySelector('.header')

const heightHeaderInner = headerInner.offsetHeight
document.documentElement.style.setProperty('--header-height', `${heightHeaderInner}px`)

const headerPadding = getComputedStyle(header).paddingBlock
document.documentElement.style.setProperty('--header-padding', headerPadding)


