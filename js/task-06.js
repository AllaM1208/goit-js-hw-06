const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.length;

  validationInput.classList.remove("valid", "invalid");

  if (inputValue === requiredLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});