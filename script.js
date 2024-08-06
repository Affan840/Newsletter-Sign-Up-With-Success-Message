let btn = document.querySelector(".submit");
let dismiss = document.querySelector(".dismiss");
let email = document.querySelector("#email");
let input = document.querySelector("input");
let error = document.querySelector(".msg");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let success = document.querySelector(".success");
let main = document.querySelector("main");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  emailValidator();
});
dismiss.addEventListener("click", (e) => {
  dismissMsg();
});

function emailValidator() {
  if (
    !email.value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    email.classList.add('red');
    email.classList.add('redColor');
    error.style.display = 'block';
} else {
    email.classList.remove("red");
    email.classList.remove('redColor');
    error.style.display = 'none';
    submitMsg();
  }
}

function submitMsg() {
  left.style.display = 'none';
  right.style.display = 'none';
  success.style.display = 'flex';
  main.classList.add('size')
}

function dismissMsg() {
    input.value = '';
  left.style.display = 'flex';
  right.style.display = 'flex';
  success.style.display = 'none';
  main.classList.remove("size");
}

