const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});
function checkInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(nameValue === '') {
      setErrorFor(name, "Enter your name:");
    } else {
      setSuccessFor(name);
    }
    if(emailValue === '') {
      setErrorFor(email, "Enter your email:");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email is not valid');
    } else {
      setSuccessFor(email);
    }
    if(passwordValue === '') {
      setErrorFor(password, 'Password should not be blank');
    } else {
      setSuccessFor(password);
    }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
formControl.className = 'form-control error';
  small.innerText = message;
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
