
/* hiding the nav on scroll*/

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10px";
  }
  prevScrollpos = currentScrollPos;
}

/*Displaying and hiding links for mobile*/


const btnHamburger = document.querySelector('#btnHamburger');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
  else { // Open Hamburger Menu
    header.classList.add('open');
    fadeElems.forEach(function(element){
     
     
    });

  }  
});