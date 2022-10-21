const root = document.querySelector(".root");
const myForm = document.getElementById("my_form");
const submitBtn = document.getElementById("submitBtn");
const anotherBtn = document.querySelector(".another_button");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const passwordsDiv = document.querySelector(".passwords");

submitBtn.addEventListener("click", submitForm);

function checkPassword() {
  const lastChildClass =
    passwordsDiv.children[passwordsDiv.children.length - 1].className;
  if (lastChildClass == "error") {
    const childToRemove =
      passwordsDiv.children[passwordsDiv.children.length - 1];
    passwordsDiv.removeChild(childToRemove);
  }
  if (password.value !== "") {
    if (password.value !== confirmPassword.value) {
      const errorP = document.createElement("p");
      errorP.innerText = "* Passwords do not match";
      errorP.classList.add("error");
      errorP.style.color = "red";
      passwordsDiv.appendChild(errorP);
    }
  } else if (password.value == "" || confirmPassword.value == "") {
    console.log("enter a password");
  }
}

function submitForm(e) {
  e.preventDefault();
  checkPassword();
}
