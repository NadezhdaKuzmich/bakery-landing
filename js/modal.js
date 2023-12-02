const body = document.querySelector("body");
const modal = document.querySelector(".backdrop");
const btnsOpen = document.querySelectorAll(".modal-btn-open");
const btnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => {
  body.classList.toggle("fixed");
  modal.classList.toggle("is-hidden");
};

btnsOpen.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});

btnClose.addEventListener("click", toggleModal);