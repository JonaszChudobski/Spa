(() => {
  const refs = {
    openModalBtn: document.querySelector("#enquiry"),
    closeModalBtn: document.querySelector("#close"),
    modal: document.querySelector(".reviews__contact-form"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
