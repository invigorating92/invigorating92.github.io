const clock = document.querySelector(".clock");



function newClock(){
    const date = new Date();
const hours = String(date.getHours()).padEnd(2,"0"),
    minutes = String(date.getMinutes()).padStart(2,"0"),
    seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`
    // 예전방식:삼항연산자 사용
    // clock.innerHTML = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
    // 처음 생각해낸 방법
    // clock.innerHTML = `${hours<10 ? "0"+hours : hours}:${minutes<10 ? "0"+minutes : minutes}:${seconds<10 ? "0"+seconds` : seconds}`;
    
}


setInterval(newClock, 1000);