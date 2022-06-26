var vooraanPlus = document.getElementById("myBtn1");
var vooraanMin = document.getElementById("myBtn2");
var achteraanPlus = document.getElementById("myBtn3");
var achteraanMin = document.getElementById("myBtn4");
var selfAdd = document.getElementById("selfAdd");


var arrayText = document.getElementById("textArray");
var arrayLength = document.getElementById("lengthArray");


var myArray = ["start","mijn","array"];
arrayText.innerText = myArray.join(" ");
arrayLength.innerText = myArray.length;

selfAdd.addEventListener("click", function() {
    
    var selfAddedtext = document.getElementById("selfAdded").value;
    myArray.unshift(selfAddedtext);
    arrayText.innerText = myArray.join(" ");
    arrayLength.innerText = myArray.length;
    document.getElementById('selfAdded').value = '';
    
});
vooraanPlus.addEventListener("click", function() {
    
    myArray.unshift("aaa")
    arrayText.innerText = myArray.join(" ");
    arrayLength.innerText = myArray.length;
    
});

achteraanPlus.addEventListener("click", function() {
    myArray.push("zzz")
    arrayText.innerText = myArray.join(" ");
    arrayLength.innerText = myArray.length;

});
vooraanMin.addEventListener("click", function() {
    if(checkFront()){
        myArray.shift();
        arrayText.innerText = myArray.join(" ");
        arrayLength.innerText = myArray.length;
    }else{
        console.log("mag nu niet");
    }
    

});
achteraanMin.addEventListener("click", function() {
    if(checkFront()){
        myArray.pop();
        arrayText.innerText = myArray.join(" ");
        arrayLength.innerText = myArray.length;
    }else{
        console.log("mag nu niet");
    }
});

function checkFront(){
    if(myArray[0] === "aaa"){
        return true;
    }else{
        return false;
    }
}

function checkBack(){
    if(myArray[myArray.length-1] === "zzz"){
        return true;
    }else{
        return false;
    }
}