const times = document.querySelectorAll(".time");
const dayText = document.querySelector(".day");
const todoDay = document.querySelector(".todo__list-title");

function getClock() {
    const utc = new Date();
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const date = new Date(utc+KR_TIME_DIFF);
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());
    const weekDay = String(date.getWeekDay());

    times.forEach(item => item.innerText = `${hour}:${minute}:${second}`);
    dayText.innerText = `${month}월 ${day}일 ${weekDay}요일`;
    todoDay.innerText = `${month}월 ${day}일 ${weekDay}요일의 할 일`;
}

Date.prototype.getWeekDay = function() {
    var weekday = ["일", "월", "화", "수", "목", "금", "토"];
    return weekday[this.getDay()];
}

getClock();
setInterval(getClock, 1000);