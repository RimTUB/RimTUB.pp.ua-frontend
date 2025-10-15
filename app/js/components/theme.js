class Theme {
	constructor() {
		this.root = document.documentElement
		this.themeBtn = document.querySelector('.theme')
		this.lightIcon = document.querySelector('.theme__icon--light')
    this.darkIcon = document.querySelector('.theme__icon--dark')

		this.init()
	}

	init() {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme === 'dark') {
			this.setDark()
		}
		else if (savedTheme === 'light') {
			this.setLight()
		}
		else {
			this.systemTheme()
		}

		this.themeBtn.addEventListener('click', () => {
			this.clickBtn()
		})

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				e.matches ? this.setDark() : this.setLight()
			}
		})
	}

	setLight() {
		this.root.classList.remove('dark-theme')
		localStorage.setItem('theme', 'light')
		this.themeBtn.setAttribute('aria-label', 'switch to dark theme')
		this.darkIcon.style.display = 'block'
		this.lightIcon.style.display = 'none'
	}

	setDark() {
		this.root.classList.add('dark-theme')
		localStorage.setItem('theme', 'dark')
		this.themeBtn.setAttribute('aria-label', 'switch to light theme')
		this.darkIcon.style.display = 'none'
		this.lightIcon.style.display = 'block'
	}

	systemTheme() {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches
		mediaQuery ? this.setDark() : this.setLight()
	}

	clickBtn() {
		if (this.root.classList.contains('dark-theme')) {
			this.setLight()
		}
		else {
			this.setDark()
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new Theme()
})