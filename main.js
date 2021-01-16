// Slides content
const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst",
  },
];

// Selectors
const image = document.querySelector(`img.slider`);
const h1 = document.querySelector(`h1.slider`);
const dots = [...document.querySelectorAll(`.dots span`)];

// Function interface
const time = 4000;
let active = 0;

// Change dot function
const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

// Change slide function
const changeSlide = () => {
  active++;

  if (active === slideList.length) {
    active = 0;
  }

  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;

  changeDot();
};

// Change interval
let changeInterval = setInterval(changeSlide, time);

// Key change function
const keyChangeSlide = (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    clearInterval(changeInterval);
    e.keyCode === 37 ? active-- : active++;

    if (active === slideList.length) {
      active = 0;
    } else if (active === -1) {
      active = slideList.length - 1;
    }

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();

    changeInterval = setInterval(changeSlide, time);
  }
};

// Key change listener
window.addEventListener(`keydown`, keyChangeSlide);
