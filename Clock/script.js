var months = [
    'January','Febuary','March','April','May','June','july','August','September','October','November','December'
]
function displayTime(){
    var Today = new Date();
    var hrs = Today.getHours();
    var unit = "AM";
    if(Number(hrs)>12){
        hrs = Number(hrs) - 12
        unit= "PM"
    }
    if(Number(hrs)<10){
        hrs = "0"+hrs;
    }
    var min = Today.getMinutes();
    if(Number(min)<10){
        min = "0"+min;
    }
    var secs = Today.getSeconds();
    if(Number(secs)<10){
        secs = "0"+secs
    }
    document.getElementById('Time').innerHTML = hrs + ":" + min + ":" + secs + "  " + unit;
    var date = Today.getDate();
    if(Number(date)<10){
        date = "0"+date;
    }
    var month = Today.getMonth();
    month = months[month];
    var year = Today.getFullYear();
    document.getElementById('Date').innerHTML = date + " " + month + " " + year;
    setTimeout(displayTime,500);
}
var quotes = [
    'Quote1','Quote2','Quote3','Quote4','Quote5'
]
var number = 0
function displayQuote(){
    document.getElementById('Quote').innerHTML = quotes[number];
    number = number + 1;
    if(number == 5){
        number = 0;
    }
    setTimeout(displayQuote , 5000);
}