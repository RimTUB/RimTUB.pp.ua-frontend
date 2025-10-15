import TransferElements from 'transfer-elements';

class TranslateFocus {

	selectors = {
		translate: '.translate',
		link: '.translate__link',
		list: '.translate__list'
	}

	constructor() {
		this.translate = document.querySelector(this.selectors.translate)
		this.link = this.translate.querySelector(this.selectors.link)
		this.list = this.translate.querySelector(this.selectors.list)
		this.init()
	}

	init() {
		this.translate.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				this.openMenu()
			}

			if (e.key === 'Escape') {
				this.closeMenu()
				this.link.focus()
			}
		})

		this.translate.addEventListener('focusout', (e) => {
			if (!this.translate.contains(e.relatedTarget)) {
				this.closeMenu()
			}
		})

		this.translate.addEventListener('mouseenter', () => {
			this.openMenu(false)
		})

		this.translate.addEventListener('mouseleave', () => {
			this.closeMenu(false)
		})
	}

	openMenu(attribute = true) {
		this.translate.classList.add('is-open')
		if (attribute) {
			this.link.setAttribute('aria-expanded', 'true')
		}
		this.list.hidden = false
	}

	closeMenu(attribute = true) {
		this.translate.classList.remove('is-open')
		if (attribute) {
			this.link.setAttribute('aria-expanded', 'false')
		}
		this.list.hidden = true
	}
}

new TranslateFocus()


new TransferElements({
  sourceElement: document.querySelector('.translate'), // какой элемент надо перенести
  breakpoints: {
    900: {
      targetElement: document.querySelector('.menu'), // куда надо перенести
      targetPosition: 0 // указать позицию перед каким элементом должно встать, по умолчанию 0
    }
  }
})
