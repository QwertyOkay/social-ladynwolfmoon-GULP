(() => {
  const form = document.querySelector("[data-register]");
  const registrationModalBackdrop = document.querySelector("[data-backdrop]");

  // Show formData and close modal by submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    toggleRegistrationModal();

    form.reset();

    document.getElementById("gameFrame").src =
      "https://bgaming-network.com/play/LuckyLadyMoon/FUN?server=demo";
  });

  function toggleRegistrationModal() {
    registrationModalBackdrop.classList.toggle("is-hidden");
  }

  // Hide modal by click on backdrop
  registrationModalBackdrop.addEventListener("click", hideModalWindowOnBlur);

  function hideModalWindowOnBlur(e) {
    if (e.target === e.currentTarget) {
      toggleRegistrationModal();
    }
  }
})();
