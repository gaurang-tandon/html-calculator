// console.log("Hello Gaurang!");
var x = document.getElementById("result").innerHTML;
console.log(x);
var alreadyRun=false;
//------------------------------------------------------------------------------//
var result = 0 ;
var temp = false ;
//------------------------------------------------------------------------------//
function clearClick(){
    document.getElementById("result").innerHTML = "" ;
    return alreadyRun=false;
}
//------------------------------------------------------------------------------//
function multiClicked(){
    if(alreadyRun===false){
        if((document.getElementById("result").innerHTML)==""){
            alert("Multiplication Or Division cannot be used before operand");
        }
        else{
            document.getElementById("result").innerHTML += document.getElementById("multiplication").innerText ;
        }
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function diviClicked(){
    if(alreadyRun===false){
        if((document.getElementById("result").innerHTML)==""){
            alert("Multiplication Or Division cannot be used before operand");
        }
        else{
            document.getElementById("result").innerHTML += document.getElementById("division").innerText ;
        }
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function substClicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("substraction").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function additClicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("addition").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function deciClicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("decimal").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num9Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number9").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num8Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number8").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num7Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number7").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num6Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number6").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num5Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number5").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num4Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number4").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num3Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number3").innerText ;
    }
    else{
    alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num2Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number2").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num1Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number1").innerText ;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function num0Clicked(){
    if(alreadyRun===false){
        document.getElementById("result").innerHTML += document.getElementById("number0").innerText;
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
function equals(){
    if(alreadyRun===false){
        if((document.getElementById("result").innerHTML)==""){
            alert("Please Enter Something To Calculate Before Evaluating");
        }
        else{
            document.getElementById("result").innerHTML += "<h4>"+eval(document.getElementById("result").innerHTML)+"</h4><br>";
            return alreadyRun = true ;
        }
    }
    else{
        alert('Please use "C" to clear before any other Calculations');
    }
}
//------------------------------------------------------------------------------//
