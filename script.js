"use strict";
const form = document.querySelector("form");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const emailAddress = document.querySelector(".email-address");
const radioBtns = document.querySelectorAll(".radio-btn");
const message = document.querySelector(".message");
const checkBox = document.querySelector(".check-box");
const successMsg = document.querySelector(".sucess-msg");
const firstNameError = document.querySelector(".firstname-error-msg");
const lastNameError = document.querySelector(".lastname-error-msg");
const emailError = document.querySelector(".email-error-msg");
const radioError = document.querySelector(".radio-error-msg");
const messageError = document.querySelector(".message-error-msg");
const checkBoxError = document.querySelector(".check-error-msg");

const firstNameSuccess = document.querySelector(".firstname-success-msg");
const lastNameSuccess = document.querySelector(".lastname-success-msg");
const emailSuccess = document.querySelector(".email-success-msg");
const messageSuccess = document.querySelector(".message-success-msg");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const radioBtn1 = document.querySelector(".radio-1").checked;
  const radioBtn2 = document.querySelector(".radio-2").checked;
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const emailValue = emailAddress.value;
  const messageValue = message.value;
  let valid = true;

  firstNameError.classList.add("hidden");
  lastNameError.classList.add("hidden");
  emailError.classList.add("hidden");
  radioError.classList.add("hidden");
  messageError.classList.add("hidden");
  checkBoxError.classList.add("hidden");

  firstName.classList.remove("active--error");
  lastName.classList.remove("active--error");
  emailAddress.classList.remove("active--error");
  message.classList.remove("active--error");

  if (firstName.value === "") {
    firstNameError.classList.remove("hidden");
    firstName.classList.add("active--error");
    valid = false;
  }

  if (lastName.value === "") {
    lastNameError.classList.remove("hidden");
    lastName.classList.add("active--error");

    valid = false;
  }

  if (!emailPattern.test(emailAddress.value)) {
    emailError.classList.remove("hidden");
    emailAddress.classList.add("active--error");
    valid = false;
  }

  if (!radioBtn1 && !radioBtn2) {
    radioError.classList.remove("hidden");
    valid = false;
  }

  if (message.value === "") {
    messageError.classList.remove("hidden");
    message.classList.add("active--error");
    valid = false;
  }

  if (!checkBox.checked) {
    checkBoxError.classList.remove("hidden");
    valid = false;
  }

  if (valid === true) {
    window.location.reload();

    // successMsg.classList.remove("hidden");
    // firstNameSuccess.textContent = `First Name : ${firstNameValue}`;
    // lastNameSuccess.textContent = `Last Name : ${lastNameValue}`;
    // emailSuccess.textContent = `Email : ${emailValue}`;
    // messageSuccess.textContent = `Message : ${messageValue}`;
    alert(`
      All fields are valid!
      First Name: ${firstNameValue}
      Last Name: ${lastNameValue}
      Email: ${emailValue}
      Message: ${messageValue}`);
  } else {
    e.preventDefault();
  }
});
