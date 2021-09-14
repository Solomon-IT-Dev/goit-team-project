(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-head-open]'),
    openModalBtnMenu: document.querySelector('[data-head-open-menu]'),
    closeModalBtn: document.querySelector('[data-head-close]'),
    modal: document.querySelector('[data-head-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMenu.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    //document.body.classList.toggle("modal-open");
    document.body.classList.toggle("is-noscroll");
  }
})();