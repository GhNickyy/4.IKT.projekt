var cards = document.querySelectorAll('.card');
next = 1;
[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

let currentSlide = 0;

function startSlider() {
  let imageCount = document.querySelectorAll("img");

  if (imageCount.length === 0) {
    imageCount = document.querySelectorAll("img");
    images.style.transform = `translateX(0px)`;
    return;
  }

  let images = document.querySelector("ul");
  images.style.transform = `translateX(-${currentSlide * 450}px)`;

  if (currentSlide === imageCount.length - 1) {
    next = -1 * next ;
    currentSlide += next;
  } else if(currentSlide === 0) {
    next = 1;
    currentSlide += next;
  } else {
    currentSlide += next;
  }
}

setInterval(() => {
  startSlider();
}, 5000);