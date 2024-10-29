document.getElementById("root").insertAdjacentHTML(
  "beforeend",
  `
  <div class="signUp-form">
    <h1>Signup Form</h1>
  <form onsubmit="handleFormSubmit(event)">
  <div class="form-group">
  <label for="firstName">Enter First Name</label>
  <input type="text" id="firstName" name="firstName">
  <p class="error-message" id="firstNameError"></p>
  </div>
    <div class="form-group">
  <label for="lastName">Enter Last Name</label>
  <input type="text" id="lastName" name="lastName">
  <p class="error-message" id="lastNameError"></p>
  </div>
    <div class="form-group">
  <label for="email">Enter Email</label>
  <input type="email" id="email" name="email">
    <p class="error-message" id="emailError"></p>

  </div>
    <div class="form-group">
  <label for="password">Enter Password</label>
  <input type="password" id="password" name="password">
    <p class="error-message" id="passwordError"></p>
  </div>
  <button type="submit" class="submit-btn">Submit</button>
  </form>
  </div>
    `
);

const inputBoxes = document.querySelectorAll(".signUp-form input");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.querySelector(".submit-btn");
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{8,}$/;

firstNameError.classList.add("d-none");
lastNameError.classList.add("d-none");
emailError.classList.add("d-none");
passwordError.classList.add("d-none");

inputBoxes.forEach((inputBox) => {
  if (!inputBox.value) {
    submitBtn.setAttribute("disabled", true);
  }

  inputBox.addEventListener("input", (event) => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (event.target.id === "firstName") {
      if (event.target.value && !nameRegex.test(event.target.value)) {
        firstNameError.innerText = "Value should be only Alphabetical.";
        firstNameError.classList.remove("d-none");
      } else {
        firstNameError.innerText = "";
        firstNameError.classList.add("d-none");
      }
    } else if (event.target.id === "lastName") {
      if (event.target.value && !nameRegex.test(event.target.value)) {
        lastNameError.innerText = "Value should be only Alphabetical.";
        lastNameError.classList.remove("d-none");
      } else {
        lastNameError.innerText = "";
        lastNameError.classList.add("d-none");
      }
    } else if (event.target.id === "email") {
      if (event.target.value && !emailRegex.test(event.target.value)) {
        emailError.innerText = "Enter a valid email address.";
        emailError.classList.remove("d-none");
      } else {
        emailError.innerText = "";
        emailError.classList.add("d-none");
      }
    } else if (event.target.id === "password") {
      if (event.target.value && !passwordRegex.test(event.target.value)) {
        passwordError.innerText =
          "Password must be at least 8 characters, including at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (@#$%&*).";
        passwordError.classList.remove("d-none");
      } else {
        passwordError.innerText = "";
        passwordError.classList.add("d-none");
      }
    }

    const isFirstNameValid = firstName && nameRegex.test(firstName);
    const isLastNameValid = lastName && nameRegex.test(lastName);
    const isEmailValid = email && emailRegex.test(email);
    const isPasswordValid = password && passwordRegex.test(password);

    if (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid
    ) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", true);
    }
  });
});

function handleFormSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const formData = {
    firstName,
    lastName,
    email,
    password,
  };

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  submitBtn.setAttribute("disabled", true);

  console.log("formData", formData);
}
