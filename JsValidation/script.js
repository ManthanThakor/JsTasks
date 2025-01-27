function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  let isValid = true;

  document
    .querySelectorAll(".error-message")
    .forEach((span) => (span.textContent = ""));

  const firstName = document.getElementById("firstName").value.trim();
  if (!firstName) {
    document.getElementById("firstNameError").textContent =
      "First Name is required.";
    isValid = false;
  }

  const surname = document.getElementById("surname").value.trim();
  if (!surname) {
    document.getElementById("surnameError").textContent =
      "Surname is required.";
    isValid = false;
  }

  const address = document.getElementById("address").value.trim();
  if (!address) {
    document.getElementById("addressError").textContent =
      "Address is required.";
    isValid = false;
  }

  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    document.getElementById("genderError").textContent = "Gender is required.";
    isValid = false;
  }

  const pinCode = document.getElementById("pinCode").value;

  if (isNaN(pinCode)) {
    document.getElementById("pinCodeError").textContent =
      "Pin Code must be a valid number.";
    isValid = false;
  } else if (pinCode.length < 4) {
    document.getElementById("pinCodeError").textContent =
      "Pin Code must be at least 4 digits.";
    isValid = false;
  }

  const city = document.getElementById("city").value.trim();
  if (!city) {
    document.getElementById("cityError").textContent = "City is required.";
    isValid = false;
  }

  const education = document.querySelectorAll(
    'input[name="education"]:checked'
  );
  let hasSSC = false;
  let hasHighSchool = false;

  for (let i = 0; i < education.length; i++) {
    if (education[i].value === "SSC") {
      console.log(education[i].value + "1");
      hasSSC = true;
    } else {
      console.log(hasSSC);
    }
    if (education[i].value === "High School") {
      console.log(education[i].value + "2");
      hasHighSchool = true;
    } else {
      console.log(hasHighSchool);
    }
  }
  // t ||f = f
  // f || t = f
  // f || f = t
  // t || t = t
  if (!hasSSC || !hasHighSchool) {
    document.getElementById("educationError").textContent =
      "Both SSC and High School education are required.";
    isValid = false;
  }

  const email = document.getElementById("email").value.trim();
  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    isValid = false;
  }

  const password = document.getElementById("password").value;
  let isValidPassword = true;

  if (!/[A-Z]/.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must include at least 1 uppercase letter.";
    isValidPassword = false;
  }

  if (!/[!@#$%^&*]/.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must include at least 1 special character.";
    isValidPassword = false;
  }

  if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters.";
    isValidPassword = false;
  }

  if (!isValidPassword) {
    isValid = false;
  }

  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    alert("Thank you for Registration!");
    document.getElementById("registrationForm").reset();
  }
}
