function scrollToHome(home) {
  var section = document.getElementById('home');
  var navbarHeight = document.querySelector('.main-nav').offsetHeight;
  var distanceFromTop = 15; // Adjust this value as needed

  if (section) {
    var offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - distanceFromTop;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
}

function scrollToSection1(section1) {
  var section = document.getElementById('section1');
  var navbarHeight = document.querySelector('.main-nav').offsetHeight;
  var distanceFromTop = 15; // Adjust this value as needed

  if (section) {
    var offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - distanceFromTop;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
}

function scrollToSection2(section2) {
  var section = document.getElementById('section2');
  var navbarHeight = document.querySelector('.main-nav').offsetHeight;
  var distanceFromTop = 15; // Adjust this value as needed

  if (section) {
    var offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - distanceFromTop;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
}

function scrollToSection3(section3) {
  var section = document.getElementById('section3');
  var navbarHeight = document.querySelector('.main-nav').offsetHeight;
  var distanceFromTop = 15; // Adjust this value as needed

  if (section) {
    var offset = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight - distanceFromTop;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }
}