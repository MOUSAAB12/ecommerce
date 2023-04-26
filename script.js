
// function toggleDropdown() 
// if(document.getElementById("main").style.display = "none"){
//    document.getElementById("main").style.display = "block";
// }else{
//    document.getElementById("main").style.display = "none";
// }
function toggleDropdown() {
   document.getElementById("main").classList.toggle('active');
   document.querySelector("#nav-icon1").classList.toggle("open")

   if (isToggle) {
       document.body.style.overflow = "hidden";
       document.body.style.userSelect = "none";
       headerMobile.style.backgroundColor = "white";
       headerMobile.style.backdropFilter = "initial";

   } else {
       document.body.style.overflow = "auto";
       document.body.style.userSelect = "auto";

       headerMobile.style.backgroundColor = "rgba(255, 255, 255, 0.6)"
       headerMobile.style.backdropFilter = "blur(5px)";
   }
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// const toggleHumberger = () => {
//     document.querySelector("#nav-icon1").classList.toggle("open")
// }
