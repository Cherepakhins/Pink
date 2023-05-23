const filterSlider = () => {
  const inputs = document.querySelectorAll(".editor-photo__input");
  const filters = document.querySelectorAll(".editor-photo__filter");
  const edPhFilter1 = document.querySelector("#edPhFilter1");
  const edPhFilter2 = document.querySelector("#edPhFilter2");
  const edPhFilter3 = document.querySelector("#edPhFilter3");

  const edPhINput1 = document.querySelector("#edPhINput1");
  const edPhINput2 = document.querySelector("#edPhINput2");
  const edPhINput3 = document.querySelector("#edPhINput3");

  function removeClass() {
    inputs.forEach((input) => {
      input.classList.remove("editor-photo__input--active");

      filters.forEach((filter) => {
        filter.classList.remove("editor-photo__filter--current");
      });
    });
  }

  edPhFilter1.addEventListener("click", () => {
    removeClass();
    edPhFilter1.classList.add("editor-photo__filter--current");
    edPhINput1.classList.add("editor-photo__input--active");
  });

  edPhFilter2.addEventListener("click", () => {
    removeClass();
    edPhFilter2.classList.add("editor-photo__filter--current");
    edPhINput2.classList.add("editor-photo__input--active");
  });

  edPhFilter3.addEventListener("click", () => {
    removeClass();
    edPhFilter3.classList.add("editor-photo__filter--current");
    edPhINput3.classList.add("editor-photo__input--active");
  });
};
filterSlider();
