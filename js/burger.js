const burger = () => {
  const btnBurgerOpen = document.querySelector("#openBtnBurger");
  const mobileMenu = document.querySelector("#mobileMenu");
  const nav = document.querySelector("#nav");

  btnBurgerOpen.addEventListener("click", () => {
    btnBurgerOpen.classList.toggle("burger--open");
    btnBurgerOpen.classList.toggle("burger--close");
    mobileMenu.classList.toggle("none");
    nav.classList.toggle("nav--active");
  });
};
burger();
