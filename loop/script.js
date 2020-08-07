function PrintNumber(){
    var num1 = document.getElementById('First').value;
    var num2 = document.getElementById('Second').value;
    if(num1 == "" || num2 == ""){
        alert("Please enter a number");
        return false;
    }
    if(Number(num1) > Number(num2)){
        alert("Num1 cannot be larger than Num2");
        return false;
    }
    var operation = document.getElementById('operation').value;
    document.getElementById('Printer').innerHTML = "";
    if(operation == "All"){
        for(let i = Number(num1) ; i <= Number(num2) ; i = Number(i) + 1){
            document.getElementById('Printer').innerHTML = document.getElementById('Printer').innerHTML + i + " ";
        }
    }
    if(operation == "Even"){
        if(Number(num1)%2 == 1){
            num1 = Number(num1) + 1;
        }
        for(let i = Number(num1) ; i <= Number(num2) ; i = Number(i) + 2){
            document.getElementById('Printer').innerHTML = document.getElementById('Printer').innerHTML + i + " ";
        }
    }   
    if(operation == "Odd"){
        if(Number(num1)%2 == 0){
            num1 = Number(num1) + 1;
        }
        for(let i = Number(num1) ; i <= Number(num2) ; i = Number(i) + 2){
            document.getElementById('Printer').innerHTML = document.getElementById('Printer').innerHTML + i + " ";
        }
    }   

}