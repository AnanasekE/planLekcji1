start()

function start() {
    var date = new Date()
    var day = date.getDay()

    document.getElementById('select').value = day

    changePlan()
    

}

function changePlan() {
    var day = document.getElementById('select').value
    var selectors = ['day1', 'day2', 'day3', 'day4', 'day5']
    var showingSelector = 'day' + day

    selectors.forEach(function (selector) {
        var el = document.getElementsByClassName(selector)[0]

        el.style.display = 'none'
    })

    var plan = document.getElementsByClassName(showingSelector)[0]

    plan.style.display = 'block'
}

function clockTick() {
    var d = new Date()
    var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()

    document.getElementById('time').innerHTML = hour + ':' + minutes + ':' + seconds

    dateTick()
}

setInterval(clockTick, 1000)

function dateTick() {
    var t = new Date()

    var day = t.getDate()
    var month = t.getMonth() + 1
    var year = t.getFullYear()

    document.getElementById('date').innerHTML = day + '/' + month + '/' + year
}

var lessonsHours = {
    1: ['08:55', '09:40'],
    2: ['09:50', '10:35'],
    3: ['10:50', '11:35'],
    4: ['11:45', '12:30'],
    5: ['13:00', '13:45'],
    6: ['14:00', '14:45'],
    7: ['14:55', '15:40'],
    8: ['15:45', '16:30']
};

var setTimer = function() {
    var counterDate = new Date();
    var time = counterDate.getHours() + ':' + counterDate.getMinutes();
    var config = lessonsHours;

    var hour = Number(time.split(':')[0]);
    var minute = Number(time.split(':')[1]);

    var lesson = false;

    for (key in config) {
        var lessonTimes = config[key];

        var lessonHourStart = Number(lessonTimes[0].split(':')[0]);
        var lessonMinuteStart = Number(lessonTimes[0].split(':')[1]);
        var lessonHourStop = Number(lessonTimes[1].split(':')[0]);
        var lessonMinuteStop = Number(lessonTimes[1].split(':')[1]);

        if (
            (lessonHourStart <= hour && lessonHourStop >= hour) &&
            (hour === lessonHourStart && hour !== lessonHourStop ? minute >= lessonMinuteStart : minute < lessonMinuteStop)
        ) {
            lesson = true;
        }
    }
    if (lesson){
        document.getElementById('isLesson').innerText = "Masz lekcje :C"
    }
    else{
        document.getElementById('isLesson').innerText = "Nie masz lekcji :D"
    }
    
   
}
var startTimer = setInterval(setTimer, 1000);


function weekday() {
    var day = new Date()
    var day = day.getDay()
    
    
    if (day == 6) {
        document.getElementById('isWeekday').innerText = "Nie ma szkoły :D"
    }
    else if (day == 0) {
        document.getElementById('isWeekday').innerText = "Nie ma szkoły :D"
    }
    else {
        document.getElementById('isWeekday').innerText = "Jest szkoła :C"
    }
    


}