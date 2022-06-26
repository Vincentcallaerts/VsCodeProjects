//buttons
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
//card text
var scorePlayer = document.getElementById("scoreSpeler");
var scorePc = document.getElementById("scorePc");
var winnaar = document.getElementById("winnaar");

var internalScorePlayer = 0;
var internalScorePc = 0;
setScore();

rock.addEventListener("click", function() {
    
    winnaar.innerText = "";

    switch(getRndInteger(0,2)){
        case 0:
            //rock
            winnaar.innerText = "Gelijkspel";
    break;
        case 1:
            //paper
            winnaar.innerText = "Computer wint: Computer paper Speler rock";
            internalScorePc++;
            setScore();
    break;
        case 2:
            //scissors
            winnaar.innerText = "Speler wint: Speler rock Computer scissors";
            internalScorePlayer++;
            setScore();
    break;
    }
    checkEnd();

    
});
paper.addEventListener("click", function() {
    
    winnaar.innerText = "";

    switch(getRndInteger(0,2)){
        case 0:
            //rock
            winnaar.innerText = "Speler wint: Speler paper Computer rock";
            internalScorePlayer++;
            setScore();
    break;
        case 1:
            //paper
            winnaar.innerText = "Gelijkspel";

    break;
        case 2:
            //scissors
            winnaar.innerText = "Computer wint: Computer scissors Speler rock";
            internalScorePc++;
            setScore();
    break;
    }
    checkEnd();

    
});
scissor.addEventListener("click", function() {
    
    winnaar.innerText = "";

    switch(getRndInteger(0,2)){
        case 0:
            //rock
            winnaar.innerText = "Computer wint: Computer rock Speler scissors";
            internalScorePc++;
            setScore();
            
    break;
        case 1:
            //paper
            winnaar.innerText = "Speler wint: Speler scissors Computer paper";
            internalScorePlayer++;
            setScore();
    break;
        case 2:
            //scissors
            winnaar.innerText = "Gelijkspel";
            setScore();
    break;
    }
    checkEnd();
    
});
function checkEnd(){
    if(internalScorePlayer === 3){
        alert("Speler won het spel " + internalScorePlayer + " tegen " + internalScorePc );
        internalScorePlayer = 0;
        internalScorePc = 0;
        winnaar.innerText = "";
        setScore();
    }
    if(internalScorePc === 3){
        alert("Pc won het spel " + internalScorePc + " tegen " + internalScorePlayer );
        internalScorePlayer = 0;
        internalScorePc = 0;
        setScore();
    }
}
function setScore(){
    scorePc.innerText = "Score speler: " + internalScorePc;
    scorePlayer.innerText = "Score computer: " +internalScorePlayer;
}
function getRndInteger(min, max) {
    //min max invullen als 0 en 2
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
