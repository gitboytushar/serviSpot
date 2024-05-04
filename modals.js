// Open and Closes the User Authentication modals

function showSignupModal() {
  document.querySelector('.overlay').classList.add('show-overlay')
  document
    .querySelector('.signup-container')
    .classList.add('show-signup-container')
  document.body.style.overflow = 'hidden' // stops the homepage scrolling
}

function showSigninModal () {
  document.querySelector('.overlay').classList.add('show-overlay')
  document
    .querySelector('.signin-container')
    .classList.add('show-signin-container')
  document.body.style.overflow = 'hidden' // stops the homepage scrolling
}

// called when user clicks on the close-btn
function closeSignupModal () {
  document.querySelector('.overlay').classList.remove('show-overlay')
  document
    .querySelector('.signup-container')
    .classList.remove('show-signup-container')
  document.body.style.overflow = '' // restores that scrolling
}

function closeSigninModal () {
  document.querySelector('.overlay').classList.remove('show-overlay')
  document
    .querySelector('.signin-container')
    .classList.remove('show-signin-container')
  document.body.style.overflow = '' // restores that scrolling
}

// when sign-UP-btn is clicked in account-nav-links
var signup_btn = document.querySelector('.signup-btn')
signup_btn.addEventListener('click', showSignupModal)

// when sign-IN-btn is clicked in account-nav-links
var signin_btn = document.querySelector('.signin-btn')
signin_btn.addEventListener('click', showSigninModal)

// Close the first modal and open the second modal when switching modals within the modal content
document.querySelector('.jump2signin').addEventListener('click', function() {
  closeSignupModal();
  showSigninModal();
});

document.querySelector('.jump2signup').addEventListener('click', function() {
  closeSigninModal();
  showSignupModal();
});