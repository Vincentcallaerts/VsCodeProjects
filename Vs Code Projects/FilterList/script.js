var allPtags = document.getElementsByClassName("box");
var textBox = document.getElementById("textbox");
textBox.onkeyup = function() {

    var textValue = document.getElementById("textbox").value;
    for (i = 0; i < allPtags.length; i++) {
        
        if(!(allPtags[i].innerText.includes(textValue))){
            allPtags[i].classList.replace("enabled","disabled")
        }else{
            allPtags[i].classList.replace("disabled","enabled")

        }
    }
}