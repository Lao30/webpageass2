// menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });

//cta button
function goToContactSection() {
    window.location.href = 'get-involved.html#contact-section';
  }

//alert number
function showAlert() {
  alert("You will be redirected to a new tab.");
  return true;
}


//carousel image
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

//initialization on loading
showImage(currentIndex);

//autonext
setInterval(() => {
  nextImage();
}, 3000);