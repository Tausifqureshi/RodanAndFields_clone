//modal code;
function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

pwShowHide = document.querySelectorAll(".showHidePw");
pwFields = document.querySelectorAll("#userpassword");

//Js code to Show/Hide Password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

//Form-Validation?
const form = document.getElementById("form");
const userEmail = document.getElementById("useremail");
const userPassword = document.getElementById("userpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    getData();
    // resetForm();
  }
});

function getData() {
  const email = userEmail.value.trim();
  const password = userPassword.value.trim();
  const users = JSON.parse(localStorage.getItem("userData")) || [];
  const user = users.find((user) => user.email === email);
  //means user ko -1 nhi milta hai tu if execute hboga warna else line number 48 find-page notification ?

  if (!user) {
    setErrorMsg(userEmail, "Email does not match");
    return;
  }
  if (user.password !== password) {
    setErrorMsg(userPassword, "Password does not match");
    return;
  }
  alert("Sign in Successfully");
  localStorage.setItem("loginuser", JSON.stringify(user));
  setSuccess(userEmail);
  setSuccess(userPassword);
  window.location.replace("home.html");
}

function validateForm() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  return isEmailValid && isPasswordValid;
}
// Refactored function to validate the email password;
function validateEmail() {
  // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const email = userEmail.value.trim();
  console.log(email);

  if (email === "") {
    setErrorMsg(userEmail, "This field is required");
    return false;
  }
  // else if (!emailRegex.test(userEmail.value.trim())) {
  //   setErrorMsg(userEmail, "Please enter a valid email address");
  //   return false;
  // }
  else {
    setSuccess(userEmail);
    return true;
  }
}

function validatePassword() {
  // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const password = userPassword.value.trim();
  console.log(password);

  if (password === "") {
    setErrorMsg(userPassword, "This field is required");
    return false;
  }
  //     else if (!passwordRegex.test(password)) {
  // setErrorMsg(
  //         userPassword,
  //         "Password must be at least 8 characters long, contain upper and lower case letters, at least one digit, and at least one special character."
  //       );
  //       return false;
  //     }
  else {
    setSuccess(userPassword);
    return true;
  }
}

function resetForm() {
  userEmail.value = "";
  userPassword.value = "";
  // resetErrorMessages();
}

function setErrorMsg(input, errorMsg) {
  const formControl = input.parentElement;
  const errorDisplay = formControl.querySelector(".error");
  errorDisplay.innerText = errorMsg;

  formControl.classList.add("errorBorder");
  formControl.classList.remove("success");
}

function setSuccess(el) {
  //is parameters se jis input ki value right borderColor green hoga?
  const formControl = el.parentElement;
  const errorDisplay = formControl.querySelector(".error");
  errorDisplay.innerText = "";

  formControl.classList.remove("errorBorder");
  formControl.classList.add("success");
}

// function getData() {
// let users = JSON.parse(localStorage.getItem("userData")) || [];
//     // const findUser = users.findIndex((value) => value.email === userData.email);
// console.log("userData",users)

//   }


// Scroll Bar
let header = document.querySelector("#section-hero");
let footerElemnt = document.querySelector("#footer-top");
let scrollElemnt = document.createElement("div");
scrollElemnt.classList.add("back-to-top");
scrollElemnt.innerText = "UP";
footerElemnt.after(scrollElemnt);

function scrollTop() {
  header.scrollIntoView({ behavior: "smooth" });
}

scrollElemnt.addEventListener("click", scrollTop);


