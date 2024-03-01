const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      fulimgbox = document.getElementById("fulimgbox"),//CATALOGO
      fulimg = document.getElementById("fulimg"),
      img1 = document.querySelector(".img1"),
      text = document.getElementById("text");



btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())


setInterval(() => {
    moveToRight()
},3000);



let operacion = 0,
    couter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (couter >= sliderSection.length-1) {
        couter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return;
    }

    couter++
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.6s"
}

function moveToLeft() {
    couter --;
    if (couter < 0) {
        couter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)

        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return;
    }

    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.6s"
}

//***********************TARJETA**************************************************************** */


 // JavaScript para ocultar la tarjeta cuando se despliega el menú
 document.addEventListener("DOMContentLoaded", function() {
    var navbarToggle = document.querySelector(".navbar-toggler");
    var cardContainer = document.getElementById("cardContainer");

    navbarToggle.addEventListener("click", function() {
      if (cardContainer.style.display !== "none") {
        cardContainer.style.display = "none";
      } else {
        cardContainer.style.display = "block";
      }
    });

    // Ocultar la tarjeta cuando se hace clic en un enlace de la barra de navegación
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(function(navLink) {
      navLink.addEventListener("click", function() {
        cardContainer.style.display = "none";
      });
    });
  });


  //*********************************************************************************************/
//CATALOGO 


function OpenFullClick(reference) 
{
    fulimgbox.style.display = "flex";
    fulimg.src = reference
}

function closeimg()
{
    fulimgbox.style.display = "none";
}
