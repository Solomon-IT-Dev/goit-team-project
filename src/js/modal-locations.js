(() => {
  const refs = {
    openModalBtn: document.querySelector('[locations-modal-open]'),
    closeModalBtn: document.querySelector('[locations-modal-close]'),
    modal: document.querySelector('[locations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();