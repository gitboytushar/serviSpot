// Import functions from firebase sdk as per requirements
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js'

import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js'

// Firebase configurations
const firebaseConfig = {
  apiKey: 'AIzaSyCcQzxQRK_VGEDxzwRF-f1lt9GSTzCuVtI',
  authDomain: 'servispot-60457.firebaseapp.com',
  projectId: 'servispot-60457',
  storageBucket: 'servispot-60457.appspot.com',
  messagingSenderId: '470477008799',
  appId: '1:470477008799:web:bcd6b1e8e200ccf1b2d7aa'
}

const app = initializeApp(firebaseConfig) // Initialize app with configurations

const auth = getAuth()
auth.languageCode = 'en';
const provider = new GoogleAuthProvider(); // User choice to Sign in with google button

// ----------------------------------- Custom Functions --------------------------------------

// User Alerts inside Modals (auth status)
function showMessage(message, signUpMessage) {
  var messageDiv = document.getElementById('signUpMessage')

  messageDiv.innerHTML = message
  messageDiv.style.display = 'block'

  setTimeout(function () {
    messageDiv.style.display = 'none'
  }, 7000);
}

function showMessageSignIn(message, signInMessage) {
  var messageDiv = document.getElementById('signInMessage')

  messageDiv.innerHTML = message
  messageDiv.style.display = 'block'

  setTimeout(function () {
    messageDiv.style.display = 'none'
  }, 7000);
}

// Funtion to provide user access
function changeThings(userLoggedIn) {
  const showSignUpToUser = document.querySelector('.sub-hover-link.signup-btn')
  const showSignUpCTA = document.querySelector('.cta-btn.signup-btn')
  const showSignInToUser = document.querySelector('.sub-hover-link.signin-btn')
  const showSignOutToUser = document.querySelector('.signout-btn')
  const serviceBtn1 = document.querySelector('.cta-btn.service-btn1')
  const serviceBtn2 = document.querySelector('.cta-btn.service-btn2')
  const serviceBtn3 = document.querySelector('.cta-btn.service-btn3')

  if (userLoggedIn) {
    showSignUpToUser.style.display = 'none'
    showSignUpCTA.style.display = 'none'

    showSignInToUser.style.display = 'none'

    showSignOutToUser.style.display = 'flex' // show sign out button after sign in

    // activate service buttons
    serviceBtn1.classList.add('active')
    serviceBtn2.classList.add('active')
    serviceBtn3.classList.add('active')
  } else {
    showSignUpToUser.style.display = 'flex'
    showSignUpCTA.style.display = 'flex'

    showSignInToUser.style.display = 'flex'

    showSignOutToUser.style.display = 'none' // hide sign out button after sign out

    // de-activate service buttons
    serviceBtn1.classList.remove('active')
    serviceBtn2.classList.remove('active')
    serviceBtn3.classList.remove('active')
  }
}

// --------------------------------------------------- Registration • Firestore Sign up ----------------------------------------------
const signUp = document.getElementById('submitSignUp')

signUp.addEventListener('click', event => {
  event.preventDefault() // page don't reload itself

  const email = document.getElementById('rEmail').value
  const password = document.getElementById('rPassword').value

  const auth = getAuth()
  const db = getFirestore()

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user
      const userData = {
        email: email,
        password: password
      }

      // green background for success alert
      document.getElementById('signUpMessage').classList.remove('error');
      document.getElementById('signUpMessage').classList.add('success');
      showMessage('Account Created Successfully.', 'signUpMessage')

      const docRef = doc(db, 'users', user.uid)

      setDoc(docRef, userData)
        .then(() => {
          setTimeout(function () {
            // if user successfully created his account, he will be directed to signIn modal
            closeSignupModal();
            showSigninModal();
          }, 2000);
        })
        .catch(error => {
          console.error('error writing document', error)
        })
    })
    .catch(error => {
      const errorCode = error.code
      if (errorCode == 'auth/email-already-in-use') {
        showMessage('Email Address Already Exists!', 'signUpMessage')
      } else if (errorCode === 'auth/weak-password') {
        showMessage('WEAK Password: Minimum length is 6 characters', 'signUpMessage')
      } else if (errorCode === 'auth/invalid-email') {
        showMessage('Invalid Email Address!', 'signUpMessage')
      } else {
        showMessage('Unable to create User :(', 'signUpMessage')
      }
      // red background for error alert
      document.getElementById('signUpMessage').classList.remove('success');
      document.getElementById('signUpMessage').classList.add('error');
    })
})

// ------------------------------------------------- Authentication • Firestore Sign in ---------------------------------------------
const signIn = document.getElementById('submitSignIn')

signIn.addEventListener('click', (event) => {
  event.preventDefault()

  const email = document.getElementById('signin-email').value
  const password = document.getElementById('signin-password').value

  const auth = getAuth()

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    showMessageSignIn('Login Successful.', 'signInMessage')

    // green background alert
    document.getElementById('signInMessage').classList.remove('error');
    document.getElementById('signInMessage').classList.add('success');

    const user = userCredential.user
    localStorage.setItem('loggedInUserId', user.uid)

    // wait 2s to show sign in success
    setTimeout(function () {
      window.location.reload()
    }, 2000);
  }).catch((error) => {
    const errorCode = error.code

    if (errorCode === 'auth/invalid-credential') {
      showMessageSignIn('Incorrect Email or Password.', 'signInMessage')
    } else {
      showMessageSignIn('Account does Not Exist !!!', 'signInMessage')
    }

    // red background for error alert
    document.getElementById('signInMessage').classList.remove('success');
    document.getElementById('signInMessage').classList.add('error');
  })
})

// ------------------------------------------------------------------- Google Sign in ----------------------------------------------------
const googleLoginSignUp = document.getElementById('googleSignUp')
const googleLoginSignIn = document.getElementById('googleSignIn')
function handleGoogleSignIn(event) {
  event.preventDefault()

  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;

    // console.log(user) // for developer, chrome inspect console output
    
    localStorage.setItem('loggedInUserId', user.uid) // set uid in localStorage
    window.location.reload()

  }).catch((error) => {
    const errorMessage = error.message;
    console.error('Error in Google Sign In: ', errorMessage);
  });
}
// Function called as per user scenario
googleLoginSignUp.addEventListener('click', handleGoogleSignIn)
googleLoginSignIn.addEventListener('click', handleGoogleSignIn)

// ------------------------------------------------------------- Logging Out ------------------------------------------------------------
const logoutButton = document.querySelector('.signout-btn')

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('loggedInUserId') // delete uid from the localStorage

  signOut(auth).then(() => {
    window.location.reload()
  }).catch((error) => {
    console.log('Error in Signing Out: ', error)
  })
})

// -------------------------------------------------------------- User Access -----------------------------------------------------------
onAuthStateChanged(auth, (user) => {
  const loggedInUserId = localStorage.getItem('loggedInUserId')

  if (loggedInUserId) {
    changeThings(true) // activate services for user
  } else {
    changeThings(false)
    scrollToHome() // after logout scroll user to the page top :)
  }
})