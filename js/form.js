const form = () => {
  const form = document.getElementById("form");
  const modal = document.getElementById("modal");
  const modalBtn = document.getElementById("modalBtn");

  function closeModal() {
    modal.classList.remove("modal--succesful");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const achievements = document.querySelectorAll(
      ".achievements__input:checked"
    );
    const checkedValues = Array.from(achievements).map((cb) => cb.value);
    const formData = new FormData(form);

    const data = {
      name:
        formData.get("surname") +
        " " +
        formData.get("name") +
        " " +
        formData.get("patronymic"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      achievements: checkedValues,
      device: formData.get("deviceChoice"),
      comment: formData.get("comment"),
    };

    const formList = JSON.stringify(data);
    console.log(formList);
    
    modal.classList.add("modal--succesful");
    setTimeout(closeModal, 5000);
  });

  modalBtn.addEventListener("click", () => {
    modal.classList.remove("modal--succesful");
  });
};

form();
