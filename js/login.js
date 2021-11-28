const loginForm = document.querySelector(".login__form");
const loginInput = loginForm.querySelector(".login__input-name");
const todoName = document.querySelector(".todo__name");

function paintUserName(userName) {
    todoName.innerText = userName;
}

function submitLoginForm(event) {
    event.preventDefault();
    // save user name
    const userName = loginInput.value;
    localStorage.setItem("username", userName);
    paintUserName(userName);
    // 화면 변경
    login.classList.remove("on");
    todo.classList.add("on");
}

loginForm.addEventListener("submit", submitLoginForm);

// get user name
const userName = localStorage.getItem("username");
if (userName != null) {
    paintUserName(userName);
} 