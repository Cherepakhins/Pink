const reviewSlider = () => {
  const btns = document.querySelectorAll(".review-slider__btn");
  const btn1 = document.querySelector("#reviewBtn1");
  const btn2 = document.querySelector("#reviewBtn2");
  const btn3 = document.querySelector("#reviewBtn3");
  const authors = document.querySelectorAll(".author");
  const reviews = document.querySelectorAll(".review__item");

  const btnNext = document.querySelector(".prev");
  const btnPrev = document.querySelector(".next");

  function removeClass() {
    authors.forEach((author) => {
      author.classList.remove("author--current");
    });

    reviews.forEach((review) => {
      review.classList.remove("review__item--current");
    });

    btns.forEach((btn) => {
      btn.classList.remove("slider__btn--active");
    });
  }

  btn1.addEventListener("click", (e) => {
    removeClass();
    authors[0].classList.add("author--current");
    reviews[0].classList.add("review__item--current");
    e.target.classList.add("slider__btn--active");
  });

  btn2.addEventListener("click", (e) => {
    removeClass();
    authors[1].classList.add("author--current");
    reviews[1].classList.add("review__item--current");
    e.target.classList.add("slider__btn--active");
  });

  btn3.addEventListener("click", (e) => {
    removeClass();
    authors[2].classList.add("author--current");
    reviews[2].classList.add("review__item--current");
    e.target.classList.add("slider__btn--active");
  });

  let i = 0;
  btnNext.addEventListener("click", () => {
    if (i === authors.length - 1) {
      i = i - (authors.length - 1);
      removeClass();
      authors[i].classList.add("author--current");
      reviews[i].classList.add("review__item--current");
    } else {
      i = i + 1;
      removeClass();
      authors[i].classList.add("author--current");
      reviews[i].classList.add("review__item--current");
    }
  });
  
  btnPrev.addEventListener("click", () => {
    if (i === 0) {
      i = authors.length - 1;
      removeClass();
      authors[i].classList.add("author--current");
      reviews[i].classList.add("review__item--current");
    } else {
      i = i - 1;
      removeClass();
      authors[i].classList.add("author--current");
      reviews[i].classList.add("review__item--current");
    }
  });
};

reviewSlider();
