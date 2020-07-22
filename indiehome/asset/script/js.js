var index = 1;
tampil(index);

function geser(n) {
  tampil(index += n);
}

// Thumbnail image controls
function current(n) {
  tampil(index = n);
}

function tampil(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
}

window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('nav-scrolling-active', windowPosition);
    
  });

