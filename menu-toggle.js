const toggleButton = document.getElementById('menu-icon')
const navLinks = document.getElementById('menu')
const navLinksList = navLinks.querySelectorAll('a')

const menuIconImg = toggleButton.querySelector('img') // menu-icon is inside the toggleButton

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden' // Disable scrolling
    menuIconImg.src = 'assets/cancel-icon.svg' // Change to cancel-icon
  } else {
    document.body.style.overflow = '' // Enable scrolling
    menuIconImg.src = 'assets/menu-icon.svg' // Change back to menu-icon
  }
})

navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
    document.body.style.overflow = '' // Enable scrolling when a navLink is clicked
    menuIconImg.src = 'assets/menu-icon.svg' // Change back to menu=icon
  })
})