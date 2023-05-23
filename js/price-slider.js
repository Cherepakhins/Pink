const priceSlider = () => {
    const btns = document.querySelectorAll('.price-slider__btn');

  const sliderBtn1 = document.querySelector("#sliderBtn1");
  const sliderBtn2 = document.querySelector("#sliderBtn2");
  const sliderBtn3 = document.querySelector("#sliderBtn3");
  const priceTable = document.querySelector(".price__table");

  function removeClass(){
    priceTable.classList.remove("price__table--col1");
    priceTable.classList.remove("price__table--col2");
    priceTable.classList.remove("price__table--col3");

    btns.forEach((btn)=>{
        btn.classList.remove('slider__btn--active')
    })
    
  }

  sliderBtn1.addEventListener("click", () => {
    removeClass()

    priceTable.classList.add("price__table--col1");
    sliderBtn1.classList.add("slider__btn--active");
    
  });

  sliderBtn2.addEventListener("click", () => {
    removeClass()

    priceTable.classList.add("price__table--col2");
    sliderBtn2.classList.add("slider__btn--active");
  });

  sliderBtn3.addEventListener("click", () => {
    removeClass()

    priceTable.classList.add("price__table--col3");
    sliderBtn3.classList.add("slider__btn--active");
  });
};
priceSlider();
