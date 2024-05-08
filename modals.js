// Open/Close the modals
function showSignupModal() {
  document.querySelector('.overlay').classList.add('show-overlay')
  document.querySelector('.signup-container').classList.add('show-signup-container')
  document.body.style.overflow = 'hidden' // stops the homepage scrolling
}

function showSigninModal() {
  document.querySelector('.overlay').classList.add('show-overlay')
  document.querySelector('.signin-container').classList.add('show-signin-container')
  document.body.style.overflow = 'hidden'
}

// User clicks close modal button
function closeSignupModal() {
  document.querySelector('.overlay').classList.remove('show-overlay')
  document.querySelector('.signup-container').classList.remove('show-signup-container')
  document.body.style.overflow = '' // restores that scrolling
}

function closeSigninModal() {
  document.querySelector('.overlay').classList.remove('show-overlay')
  document.querySelector('.signin-container').classList.remove('show-signin-container')
  document.body.style.overflow = ''
}

// sign-Up nav-links clicked in account
var signup_btn = document.querySelector('.signup-btn')
signup_btn.addEventListener('click', showSignupModal)

// sign-In nav-links clicked in account
var signin_btn = document.querySelector('.signin-btn')
signin_btn.addEventListener('click', showSigninModal)

// switch between modal from links inside modals
document.querySelector('.jump2signin').addEventListener('click', function () {
  closeSignupModal();
  showSigninModal();
});

document.querySelector('.jump2signup').addEventListener('click', function () {
  closeSigninModal();
  showSignupModal();
});