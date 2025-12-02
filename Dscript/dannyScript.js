/*JavaScript code written by Danny Pierse for Homepage and Café Page*/

/*HOMEPAGE FORM*/

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
 
  if (name === "" || email === "" || message === "") {
    alert("Please fill in every field.");
    return;
  }
 
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }
  
  document.getElementById("contactForm").style.display="none";
	setTimeout(function() {
	alert(name + " thank you for your details. We will be in touch via " + email + " shortly.");
	document.getElementById("contactForm").reset();

    /*show the form again*/
    document.getElementById("contactForm").style.display = "block";
	}, 100);
});

/*CAROUSEL - reference: https://www.w3schools.com/howto/howto_js_slideshow.asp*/

let carouselImages = document.querySelectorAll('.carousel-container img');
let currentIndex = 0;
let totalImages = carouselImages.length;

/*show the first image*/
carouselImages[currentIndex].classList.add('active');

/*function to show the next image*/
function showNextImage() {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    carouselImages[currentIndex].classList.add('active');
}

/*change image every 2 seconds*/
setInterval(showNextImage, 2000);
