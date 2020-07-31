function addvalue(number){
    document.getElementById('answer').value = document.getElementById('answer').value + number;
}
function allclear(){
    document.getElementById('answer').value = "";
}
function calculate(){
    var answer =  document.getElementById('answer').value;
    var result = eval(answer);
    document.getElementById('answer').value = result;
}