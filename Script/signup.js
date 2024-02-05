pwShowHide = document.querySelectorAll(".showHidePw");
pwFields = document.querySelectorAll(".password");

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

// =============================================================//
// //Form Validation;
const form = document.getElementById("form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    storeData();
    console.log("Form submitted successfully!");
    resetForm(); // Resets the form fields after successful submission
  }
});

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  return isNameValid && isEmailValid && isPasswordValid;
}

// Refactored function to validate the user name email password;
function validateName() {
  const trimmedName = userName.value.trim();
  const regex = /^[a-zA-Z\s-']{3,30}$/;
  if (trimmedName === "") {
    setErrorMsg(userName, "This field is required");
    return false;
  } else if (!regex.test(trimmedName)) {
    setErrorMsg(
      userName,
      "Invalid format. Minimum of 3 characters required. Only letters, spaces, hyphens, and apostrophes are allowed."
    );
    return false;
  } else {
    setSuccess(userName);
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (userEmail.value.trim() === "") {
    setErrorMsg(userEmail, "This field is required");
    return false;
  } else if (!emailRegex.test(userEmail.value.trim())) {
    setErrorMsg(userEmail, "Please enter a valid email address");
    return false;
  } else {
    setSuccess(userEmail);
    return true;
  }
}

function validatePassword() {
  const password = userPassword.value.trim();
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (password === "") {
    setErrorMsg(userPassword, "This field is required");
    return false;
  } else if (!passwordRegex.test(password)) {
    setErrorMsg(
      userPassword,
      "Password must be at least 8 characters long, contain upper and lower case letters, at least one digit, and at least one special character."
    );
    return false;
  } else {
    setSuccess(userPassword);
    return true;
  }
}

function resetForm() {
  userName.value = "";
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

function storeData() {
  const userData = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  let users = JSON.parse(localStorage.getItem("userData")) || [];
  const findUser = users.find((value) => value.email === userData.email);

  if (!findUser) {
    users.push(userData);
    localStorage.setItem("userData", JSON.stringify(users))
    alert("Sign Up Successfully")
    // window.location.href= 'login'

  } else {
    alert("Email address already exists");
  }
}













// Ek sath cheking Code ?
// function getData() {
//   const email = userEmail.value.trim();
//   const password = userPassword.value.trim();
//   const users = JSON.parse(localStorage.getItem("userData")) || [];
//   const userIndex = users.findIndex(user => user.email === email && user.password === password);
//   //means user ko -1 nhi milta hai tu if execute hboga warna else line number find-page notification ?
//   if (userIndex !== -1) {
//     alert("Sign in Successfully");
//     window.location.replace("home.html")
//   } else {
//     alert("Email and password do not match");
//   }


//   console.log(userIndex, "userIndex");
// }









// ============================================================///
//second tarika

// const form = document.getElementById("form");
// const userName = document.getElementById("name");
// const userEmail = document.getElementById("email");
// const userPassword = document.getElementById("password");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (validateForm()) {
//     storeData();
//     console.log("Form submitted successfully!");
//     resetForm();
//   }
// });

// function validateForm() {
//   return validateField(userName, /^[a-zA-Z\s-']{3,}$/, "Invalid name format. Minimum of 3 characters required. Only letters, spaces, hyphens, and apostrophes are allowed.") &&
//          validateField(userEmail, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, "Invalid email format.") &&
//          validateField(userPassword, /.+/, "This field is required");
// }

// function validateField(input, regex, errorMsg) {
//   const trimmedValue = input.value.trim();
//   if (trimmedValue === "") {
//     setErrorMsg(input, "This field is required");
//     return false;
//   } else if (!regex.test(trimmedValue)) {
//     setErrorMsg(input, errorMsg);
//     return false;
//   } else {
//     setSuccessMsg(input);
//     return true;
//   }
// }

// function resetForm() {
//   userName.value = "";
//   userEmail.value = "";
//   userPassword.value = "";
//   // resetErrorMessages(); // Implement this function to reset error messages
// }

// function setErrorMsg(input, errorMsg) {
//   const formControl = input.parentElement;
//   const errorDisplay = formControl.querySelector(".error");
//   errorDisplay.innerText = errorMsg;
//   formControl.classList.add("errorBorder");
//   formControl.classList.remove("success");
// }

// function setSuccessMsg(input) {
//   const formControl = input.parentElement;
//   const errorDisplay = formControl.querySelector(".error");
//   errorDisplay.innerText = '';
//   formControl.classList.remove("errorBorder");
//   formControl.classList.add("success");
// }

