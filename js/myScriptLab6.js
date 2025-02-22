function changeVista(viewId) {
  const views = document.querySelectorAll(".view");
  views.forEach((view) => view.classList.remove("active"));
  const selectedView = document.getElementById(viewId);
  selectedView.classList.add("active");
}
const inputField = document.getElementById("password");
const feedback = document.getElementById("feedback");

inputField.addEventListener("keyup", function () {
  const password = inputField.value;
  let errorMessage = [];

  if (!/[1234567890]/.test(password)) {
    errorMessage.push("You must include a number!");
  }

  if (!/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/.test(password)) {
    errorMessage.push("You must include Capital letters!");
  }

  if (!/[!@#$%^&*(),.?":{}|<>_-]/.test(password)) {
    errorMessage.push("You must include a symbol!");
  }

  if (password.length < 8) {
    errorMessage.push("Your password must have at least 8 characters!");
  }

  if (errorMessage.length > 0) {
    feedback.innerHTML = errorMessage.join("<br>");
    feedback.className = "error";
  } else {
    feedback.textContent = "Valid Password. Confirm your password below";
    feedback.className = "valid";
  }
});

const inputConfirmation = document.getElementById("confirm-pass");
const confirmationFeedback = document.getElementById("confirmationFeedback");

inputConfirmation.addEventListener("keyup", function () {
  const confirmation = inputConfirmation.value;
  const password = inputField.value;

  let confirmationMessage = [];

  if (confirmation != password) {
    confirmationMessage.push("Passwords do not match");
  }

  if (confirmationMessage.length > 0) {
    confirmationFeedback.innerHTML = confirmationMessage.join("<br>");
    confirmationFeedback.className = "error";
  } else {
    confirmationFeedback.textContent = "Passwords match";
    confirmationFeedback.className = "valid";
  }
});

function enableButton() {
  const finalPassword = inputField.value;
  const finalConfirmPassword = inputConfirmation.value;
  console.log(finalPassword);
  console.log(finalConfirmPassword);
  if (finalPassword === finalConfirmPassword) {
    second_button.disabled = false;
  } else {
    second_button.disabled = true;
  }
}

function changeVista2(viewId) {
  const views = document.querySelectorAll(".view");
  views.forEach((view) => view.classList.remove("active"));
  const selectedView = document.getElementById(viewId);
  selectedView.classList.add("active");
}

inputConfirmation.addEventListener("keyup", enableButton);
