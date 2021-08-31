//Declarations
const taskbar_middle_icons = document.querySelectorAll(".taskbar-middle-icons");

//Get Day---Date
function getDayDate(){
    var currentTime = new Date();
    var dd = String(currentTime.getDate()).padStart(2, '0');
    var mm = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentTime.getFullYear();

    //day
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var today = mm + '-' + dd + '-' + yyyy;
    var arr = [
        weekday[currentTime.getDay()],
        today
    ];
    return arr;
}

//Happen on Window Load
window.onload = function(){
    updateTime();
    var arr = getDayDate();
    document.getElementById("dynamicDateTime_Day").innerHTML = arr[0];
    document.getElementById("dynamicDateTime_Date").innerHTML = arr[1];
}

//handle time with UPDATE
function updateTime(){
    console.log("call")
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById("dynamicDateTime_Time").innerHTML = strTime;
}
setInterval(updateTime, (10000));

//Click Event Handler
for (let i = 0; i < taskbar_middle_icons.length; i++) {
    const element = taskbar_middle_icons[i];
    $(element).click(function() { 
        var id = $(this).attr('id');
        console.log(id);
        cpu_function(id);
        return false; 
    });
}

//CPU Function
function cpu_function(idName) {
    if(idName === 'windows_logo')
        windows_logo_click(idName);
}

//Functions
function windows_logo_click(idName) {
    
}