(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-head-open]'),
    openModalBtnMenu: document.querySelector('[data-head-open-menu]'),
    closeModalBtn: document.querySelector('[data-head-close]'),
    modal: document.querySelector('[data-head-modal]'),
    mainMenu : document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.openModalBtnMenu.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  
  function openModal() {
    refs.modal.classList.toggle('is-hidden');
    if (document.body.classList.contains("is-noscroll") == false) {
      document.body.classList.toggle("is-noscroll");
    }
  }
  function closeModal() {
    refs.modal.classList.toggle('is-hidden');
    if ((document.body.classList.contains("is-noscroll") == true) && (refs.mainMenu.classList.contains("is-open") == false)) {
      document.body.classList.toggle("is-noscroll");
    }
    //document.body.classList.toggle("modal-open");
  }
})();