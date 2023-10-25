const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const slides = document.getElementsByClassName('slider-img');
let currentSlide = 0;

const buttons = document.getElementsByClassName('points-item');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    slideSwitch(buttons[i].dataset.name)
  });
}

function slideSwitch(slideNumber) {
  if (typeof slideNumber === 'number') {
    for (let i = 0; i < slides.length; i++) {
      if (i != slideNumber) {
        slides[i].classList.remove('active');
      } else {
        slides[i].classList.add('active');
      }
    }
  } else {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].dataset.name != slideNumber) {
        slides[i].classList.remove('active');
      } else {
        slides[i].classList.add('active');
      }
    }
  }
}

function validSlideNumberCheck(slideNumber) {
  let validNumber = slideNumber;

  if (slideNumber < 0) {
    validNumber = slides.length - 1;
  } else if (slideNumber > slides.length - 1) {
    validNumber = 0;
  }

  currentSlide = validNumber;

  return currentSlide;
}

btnLeft.addEventListener('click', () => {
    let newSlide = currentSlide - 1;
    slideSwitch(validSlideNumberCheck(newSlide));
})



btnRight.onclick = function() {
  let newSlide = currentSlide + 1;
  slideSwitch(validSlideNumberCheck(newSlide));
}
