const filter = () => {
  const crop = document.querySelector("#crop");
  const fill = document.querySelector("#fill");
  const contrast = document.querySelector("#contrast");
  const edImg = document.querySelector(".editor-photo__wrapper");
  const currentImg = document.querySelector("#currentImg");

  const btnPost = document.querySelector(".btn-post");
  const btnCancel = document.querySelector(".btn-cancel");
  const photoList = document.querySelector(".photos__list");

  const valueCropDefault = crop.value;
  const valueFillDefault = fill.value;
  const valueContrastDefault = contrast.value;

  function defaultFilters() {
    currentImg.style.backgroundSize = `${valueCropDefault}%`;
    currentImg.style.filter = `grayscale(${valueFillDefault}%)`;
    currentImg.style.filter = `contrast(${valueContrastDefault}%)`;
  }

  defaultFilters();

  function removeCard() {
    const card = document.querySelector("#card");
    if (card) card.remove();


  }

  crop.addEventListener("change", () => {
    let valueCrop = crop.value;
    currentImg.style.backgroundSize = `${valueCrop}%`;
  });

  fill.addEventListener("change", () => {
    let valueFill = fill.value;
    currentImg.style.filter = `grayscale(${valueFill}%)`;
  });

  contrast.addEventListener("change", () => {
    let valueContrast = contrast.value;
    currentImg.style.filter = `contrast(${valueContrast}%)`;
  });

  btnPost.addEventListener("click", () => {
    removeCard();
    currentImg.classList.add(
      "editor-photo__img--mob",
      "editor-photo__img--tab",
      "editor-photo__img--des"
    );

    const imgPost = currentImg.outerHTML;

    const photosCard = `
    <li class="photos__card" id="newCard">
            ${imgPost}
            <div class="wrapper-comment">
              <span class="line"
                ><p class="photos__name">Возможное имя</p>
                <p class="photos__time">Только что</p></span
              >

              <p class="photos__comment">Возможный комментарий</p>
              <span class="line"
                ><svg
                  class="like-icon"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.46867 12C6.3589 12.0014 6.25012 11.9798 6.14988 11.9367C6.04963 11.8935 5.96033 11.8298 5.88815 11.75C1.95926 7.42 1.03665 6.44 0.860416 6.17C0.307088 5.49497 0.00416162 4.66056 0 3.8C0.00441359 3.07425 0.223059 2.36473 0.63034 1.7545C1.03762 1.14428 1.61668 0.658598 2.29973 0.354328C2.98278 0.0500576 3.74155 -0.0602132 4.48721 0.036425C5.23287 0.133063 5.93456 0.432611 6.51014 0.9C7.22774 0.319491 8.13412 0.00090711 9.07066 0C10.1136 0.00264761 11.1129 0.404172 11.8494 1.11652C12.5859 1.82888 12.9995 2.79391 12.9995 3.8C13.014 4.67715 12.6845 5.5272 12.0769 6.18L7.03883 11.74C6.9678 11.8185 6.88016 11.8814 6.78182 11.9246C6.68348 11.9677 6.5767 11.99 6.46867 11.99V12ZM2.07329 5.28C2.29099 5.54 4.63381 8.12 6.46867 10.14L10.947 5.2C11.3073 4.81798 11.5005 4.3163 11.486 3.8C11.486 3.18205 11.2316 2.5894 10.7786 2.15244C10.3256 1.71548 9.71126 1.47 9.07066 1.47C8.69007 1.47297 8.31512 1.55909 7.97398 1.7219C7.63285 1.8847 7.33439 2.11996 7.10103 2.41C7.02566 2.49603 6.9321 2.56553 6.82661 2.61382C6.72113 2.66211 6.60615 2.68809 6.48941 2.69C6.37337 2.68847 6.25936 2.6605 6.15667 2.60836C6.05398 2.55622 5.96552 2.4814 5.89852 2.39C5.66784 2.10104 5.37087 1.86758 5.03093 1.70796C4.69099 1.54833 4.31732 1.46688 3.93926 1.47C3.48505 1.47534 3.04153 1.6036 2.65919 1.84016C2.27684 2.07673 1.97103 2.41211 1.77658 2.8081C1.58213 3.2041 1.50684 3.64481 1.5593 4.08006C1.61176 4.51531 1.78985 4.9276 2.07329 5.27V5.28Z"
                    fill="#D22856"
                  />
                </svg>
                <p class="photos__likes">Поставь лайк первым!</p></span
              >
            </div>
          </li>
    `;
    photoList.insertAdjacentHTML("beforeend", photosCard);

    currentImg.remove();
   
    const card = `
            <div class="catalog-promo" id='card'>
              Спасибо, что воспользовались нашим сервисом
            </div>`;

    edImg.insertAdjacentHTML("afterbegin", card);
    btnPost.disabled  = true;
    btnCancel.disabled  = true;
  });

  btnCancel.addEventListener("click", () => {
    defaultFilters();
  });
};

filter();
