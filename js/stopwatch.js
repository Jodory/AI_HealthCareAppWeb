let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
let hour, min, sec;


const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')

function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
    printTime();

    timerId = setTimeout(startClock, 1000);
}

//시계 중지
function pauseClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
    // let record = "<h2>" + getTimeFormatString() + "</h2>"
    // document.querySelector(".record").innerHTML = record

}

// 시계 초기화
function resetClock() {
    pauseClock();
    stopwatch.innerText = "00:00:00";
    time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}



start.addEventListener('click', function() {
    pause.style.display = "contents"
    reset.style.display = "contents"
    start.style.display = "none"
    startClock()
})
pause.addEventListener('click', function() {
    pause.style.display = "none"
    reset.style.display = "contents"
    start.style.display = "contents"
    pauseClock()
})
reset.addEventListener('click', function() {
    pause.style.display = "none"
    reset.style.display = "none"
    start.style.display = "contents"
    resetClock()
})