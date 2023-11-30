const modal = document.querySelector('.backdrop');
const btnOpen = document.querySelector('.modal-btn-open');
const btnClose = document.querySelector('.modal-btn-close');
const toggleModal = () => modal.classList.toggle('is-hidden');

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);