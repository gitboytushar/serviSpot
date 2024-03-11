//submit button activation!
document.addEventListener('DOMContentLoaded', function () {
  var myForm = document.querySelector('form')

  var submitBtn = document.getElementById('submitBtn')

  myForm.addEventListener('input', function () {
    // Check if the form is filled
    var isFormFilled = Array.from(myForm.elements).every(function (element) {
      // describing elements, required to be filled to active the submit button
      return (
        (element.type !== 'text' &&
          element.type !== 'email' &&
          element.type !== 'textarea') ||
        element.value.trim() !== ''
      )
    })

    // Toggle the filled state style of submit button
    submitBtn.classList.toggle('filled', isFormFilled)
  })
})