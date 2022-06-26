let root = document.getElementById("root");
let moreOrLess = document.getElementById("more");
var clicked = false;

var newElement1 = document.createElement("p");
var newContent1 = document.createTextNode("Tekst in ons nieuw element");
newElement1.appendChild(newContent1);

let newElement = document.createElement("a");
let newContent = document.createTextNode("Klik mij!");
newElement.appendChild(newContent);
let newAttribute = document.createAttribute("href");
newAttribute.value = "http://www.wikipedia.org/";
newElement.setAttributeNode(newAttribute);


moreOrLess.onclick = function(){
  if(!clicked){
    root.appendChild(newElement);
    root.appendChild(newElement1);
    clicked = !clicked;
  }else{
    root.removeChild(newElement1);
    root.removeChild(newElement);
    clicked = !clicked;
  }
  
}





/*
{
    let newElement = document.createElement("a");
    let newContent = document.createTextNode("Klik mij!");
    newElement.appendChild(newContent);
    let newAttribute = document.createAttribute("href");
    newAttribute.value = "http://www.wikipedia.org/";
    newElement.setAttributeNode(newAttribute);
    root.appendChild(newElement);
}

{
    let newElement1 = document.createElement("p");
    let newElement2 = document.createElement("p");
    let newElement3 = document.createElement("p");
    let newElement4 = document.createElement("p");

    let newContent1 = document.createTextNode("Eerste");
    let newContent2 = document.createTextNode("Tweede");
    let newContent3 = document.createTextNode("Derde");
    let newContent4 = document.createTextNode("Vierde");

    newElement1.appendChild(newContent1);
    newElement2.appendChild(newContent2);
    newElement3.appendChild(newContent3);
    newElement4.appendChild(newContent4);

    root.insertAdjacentElement('beforebegin', newElement1);
    root.insertAdjacentElement('afterbegin', newElement2);
    root.insertAdjacentElement('beforeend', newElement3);
    root.insertAdjacentElement('afterend', newElement4);
}*/