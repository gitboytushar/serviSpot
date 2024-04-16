// const toggleButton = document.getElementById('menu-icon')
// const navLinks = document.getElementById('menu')
// const navLinksList = navLinks.querySelectorAll('a')

// toggleButton.addEventListener('click', () => {
//   navLinks.classList.toggle('active')
// })

// navLinksList.forEach(link => {
//   link.addEventListener('click', () => {
//     navLinks.classList.remove('active')
//   })
// })

const toggleButton = document.getElementById('menu-icon');
const navLinks = document.getElementById('menu');
const navLinksList = navLinks.querySelectorAll('a');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Prevent scrolling to the top when the menu icon is clicked
  if (navLinks.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    document.body.style.overflow = ''; // Enable scrolling
  }
});

navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = ''; // Enable scrolling when a menu item is clicked
  });
});
