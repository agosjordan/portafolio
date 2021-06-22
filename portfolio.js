var sticky = navbar.offsetTop;
var navLink = document.getElementsByClassName("nav-link")

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
  navLink.map(item => {
    item.addEventListener("click", function(){
      this.classList.toggle("active")  
    })
  });
}
