const toggleButton = document.getElementById('menu-icon')
const navLinks = document.getElementById('menu')
const navLinksList = navLinks.querySelectorAll('a')

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })
})