var sticky = navbar.offsetTop;
var navLink = document.getElementsByClassName("nav-link")
var btnSubmit = document.getElementsByClassName("btnSubmit")

window.onscroll = function() {stickyNavbar()};
navBar()

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
     navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  } 
}


function navBar(){
  for (var i = 1; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function() {
      var current = document.getElementsByClassName(" active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

