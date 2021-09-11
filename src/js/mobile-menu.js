(() => {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menuBtnClose = document.querySelector('[data-menu-button-close]');
  const menuRef = document.querySelector('[data-menu]');
  menuBtn.addEventListener("click", toggleNavMenu);
  menuBtnClose.addEventListener("click", toggleNavMenu);

  function toggleNavMenu() {
    menuBtn.classList.toggle("is-open");
    menuBtnClose.classList.toggle("is-open");
    menuRef.classList.toggle("is-open");
    //menuRef.classList.toggle("visually-hidden");
    //mainRef.classList.toggle("is-overflow-hidden");
    const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
    menuBtn.setAttribute("aria-expanded", !expanded)
    menuBtnClose.setAttribute("aria-expanded", !expanded)
  }
})();