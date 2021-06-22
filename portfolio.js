var sticky = navbar.offsetTop;
var navLink = document.getElementsByClassName("nav-link")
var btnSubmit = document.getElementsByClassName("btnSubmit")

window.onscroll = function() {stickyNavbar()};
form()

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
     navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  } 
}

function form() {
  btnSubmit.addEventListener("click", function(){
    btnSubmit.textContent = "¡ENVIADO!"
  })
}

