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

  if (!/[!.-_]/.test(password)) {
    errorMessage.push("You must include a symbol!");
  }

  if (password.length < 8) {
    errorMessage.push("Your password must have at least 8 characters!");
  }

  if (errorMessage.length > 0) {
    feedback.textContent = errorMessage.join("\n");
    feedback.className = "error";
  } else {
    feedback.textContent = "Valid Password";
    feedback.className = "valid";
  }
});
