const timeWeather = document.querySelector(".time-weather");
const login = document.querySelector(".login");
const todo = document.querySelector(".todo");

const loginBackBtn = document.querySelector(".login .btn--back");
const todoBackBtn = document.querySelector(".todo .btn--back");



// 화면 움직이기, user 이름 저장.
function clickWindow() {
    timeWeather.classList.remove("on");
    // get user name
    const userName = localStorage.getItem("username");
    if (userName != null) {
        todo.classList.add("on");
    } else {
        login.classList.add("on");
    }
}

function clickLoginBackBtn() {
    login.classList.remove("on");
    timeWeather.classList.add("on");
}
function clickTodoBackBtn() {
    todo.classList.remove("on");
    login.classList.add("on");
}



timeWeather.addEventListener("click", clickWindow);
loginBackBtn.addEventListener("click", clickLoginBackBtn);
todoBackBtn.addEventListener("click", clickTodoBackBtn);