function Myfunction(){
    alert('Welcome to my quiz');
}
function Quizcode(){
    function getscore(Answer){
        var option = document.getElementsByName(Answer);
        if(option[0].checked){
            return Number(option[0].value);
        }
        if(option[1].checked){
            return Number(option[1].value);
        }
        if(option[2].checked){
            return Number(option[2].value);
        }
    }
    var name = document.getElementById('Name').value;
    if(name == ""){
        alert('please enter your name')
        return false;
    }
    var score = getscore('Answer1')+getscore('Answer2')+getscore('Answer3')+getscore('Answer4')+getscore('Answer5');
    if(score== 0 || score== 1){
        document.getElementById('Score').innerHTML = name+" Better luck next time! your score is "+score;
        document.getElementById('Score').style.color = "red";
    }
    if(score== 2 || score== 3){
        document.getElementById('Score').innerHTML = name+" Not too bad! your score is "+score;
        document.getElementById('Score').style.color = "orange";
    }
    if(score== 4 || score== 5){
        document.getElementById('Score').innerHTML = name+" Congratulations! your score is "+score;
        document.getElementById('Score').style.color = "green";
    }
}