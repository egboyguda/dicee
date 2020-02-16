var num1;
var num2;
checkRef();
//check kun an browser gin reload
if(checkRef() === true){
    //generate randon number range 6
    num1 = Math.floor((Math.random() * 6) + 1);
    num2 = Math.floor((Math.random() * 6) + 1);
    //debugging purpose
    console.log(num1 +" "+ num2);
    //check kun hain a daog
    if(num1>num2){
        document.querySelector("h1").textContent ="🚩Player one win";
        diceNum("dice1",num1);
        diceNum("dice2",num2);
    }
    else if (num1 < num2){
        document.querySelector("h1").textContent = "Player Two win🚩";
        diceNum("dice1", num1);
        diceNum("dice2", num2);
    }
    else{
        document.querySelector("h1").textContent = "Draw please try to refresh again";
        diceNum("dice1", num1);
        diceNum("dice2", num2);
    }
}
else{
    console.log("not reloaded site")
}

//function pag iba sa dice
function diceNum(player,num) {
            document.querySelector("."+player+" img").setAttribute("src", "img/dice" + num + ".png");
}

//check kun gin reload an page
function checkRef(){
    if (window.performance) {
        console.log("window.performance works fine on this browser");
    }
    if (performance.navigation.type == 1) {
        console.log("This page is reloaded");
        return true;

    } else {
        console.log("This page is not reloaded");
        return false;
    }
}