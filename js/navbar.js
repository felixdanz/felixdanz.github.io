window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var offsetTop = navbar.offsetTop;

function myFunction() 
{
    if (window.pageYOffset > offsetTop) {
        navbar.classList.add("navbar-sticky")
    } else {
        navbar.classList.remove("navbar-sticky");
    }
}