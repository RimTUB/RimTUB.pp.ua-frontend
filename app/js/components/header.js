const menu = document.querySelector('.menu')
const menuList = document.querySelector('.menu ul')
const dropdown = document.querySelector('.menu__more ul')
const dropdownBtn = menu.querySelector('.menu__btn')

const allItems = Array.from(menuList.querySelectorAll('li'))
const visibleCount = 4

if (allItems.length > visibleCount) {
	dropdownBtn.style.display = 'block'

	const hiddenItems = allItems.slice(visibleCount)
	hiddenItems.forEach(item => menuList.removeChild(item))

	hiddenItems.forEach(item => dropdown.appendChild(item))
}

dropdownBtn.addEventListener('click', () => {
	dropdownBtn.classList.toggle('active')
	dropdownBtn.setAttribute('aria-expanded', dropdownBtn.classList.contains('active'))
})

document.addEventListener('click', (e) => {
	if (!menu.contains(e.target)) {
		dropdownBtn.classList.remove('active')
		dropdownBtn.setAttribute('aria-expanded', 'false')
	}
})


