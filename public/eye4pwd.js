const eyeSignUp = document.getElementById('eyeSignUp')
const eyeSignIn = document.getElementById('eyeSignIn')

const passwordSignUp = document.getElementById('rPassword')
const passwordSignIn = document.getElementById('signin-password')

eyeSignUp.onclick = function () {
   if (passwordSignUp.type == 'password') {
      passwordSignUp.type = 'text'
      eyeSignUp.src = 'assets/eyeON.svg'
   } else {
      passwordSignUp.type = 'password'
      eyeSignUp.src = 'assets/eyeOFF.svg'
   }

   eyeSignUp.classList.add('animate') // Add animate class
   setTimeout(() => {
      eyeSignUp.classList.remove('animate') // Remove it after 0.5s
   }, 500)
}

eyeSignIn.onclick = function () {
   if (passwordSignIn.type == 'password') {
      passwordSignIn.type = 'text'
      eyeSignIn.src = 'assets/eyeON.svg'
   } else {
      passwordSignIn.type = 'password'
      eyeSignIn.src = 'assets/eyeOFF.svg'
   }

   eyeSignIn.classList.add('animate')
   setTimeout(() => {
      eyeSignIn.classList.remove('animate')
   }, 500)
}