var addCommentbtn = document.getElementById("addCommentbtn");
var boddy = document.getElementById("root")

addCommentbtn.addEventListener("click", function() {
    
    let newDiv = document.createElement("div");
    newDiv.classList.add("d-flex");
    newDiv.classList.add("justify-content-center");

    let newDivCard = document.createElement("div");
    newDivCard.classList.add("card");

    let newDivboddy = document.createElement("div");
    newDivboddy.classList.add("card-body");

    let newP = document.createElement("p");
    newP.classList.add("card-text");
    let comment = document.getElementById("addComment").value;
    let newContentP = document.createTextNode(comment);
    newP.appendChild(newContentP);

    let newBtn = document.createElement("a");
    newBtn.addEventListener("click",addForm);
    newBtn.classList.add("btn");
    newBtn.classList.add("btn-primary");
    newBtn.classList.add("btnComment");

    let newBtnContent = document.createTextNode("Comment Meer");
    
    newBtn.appendChild(newBtnContent);

    let newDivComment = document.createElement("div");
    newDivComment.classList.add("comments");
    newDivComment.classList.add("d-flex");
    newDivComment.classList.add("justify-content-center");
    newDivComment.classList.add("card");

    boddy.appendChild(newDiv);
    newDiv.appendChild(newDivboddy);
    newDivboddy.appendChild(newP);
    newDivboddy.appendChild(newBtn);
    newDivboddy.appendChild(newDivComment);
});
function addCommentToParent(text){

    let correctCommet = boddy.getElementsByClassName("me")[0].parentElement;
    let parent = correctCommet.getElementsByClassName("comments")[0];

    let newDiv = document.createElement("div");
    newDiv.classList.add("d-flex");
    newDiv.classList.add("justify-content-center");

    let newDivCard = document.createElement("div");
    newDivCard.classList.add("card");

    let newDivboddy = document.createElement("div");
    newDivboddy.classList.add("card-body");

    let newP = document.createElement("p");
    newP.classList.add("card-text");
    let newContentP = document.createTextNode(text);
    newP.appendChild(newContentP);

    let newBtn = document.createElement("a");
    newBtn.addEventListener("click",addForm);
    newBtn.classList.add("btn");
    newBtn.classList.add("btn-primary");
    newBtn.classList.add("btnComment");
    let newBtnContent = document.createTextNode("Comment Meer");
    
    newBtn.appendChild(newBtnContent);

    let newDivComment = document.createElement("div");
    newDivComment.classList.add("comments");
    newDivComment.classList.add("card");

    parent.appendChild(newDiv);
    newDiv.appendChild(newDivboddy);
    newDivboddy.appendChild(newP);
    newDivboddy.appendChild(newBtn);
    newDivboddy.appendChild(newDivComment);
}
function addForm(){

    var elements = boddy.getElementsByClassName("me");
    if(elements.length === 0){
        this.removeEventListener("click",addForm);
    
        console.log(elements.length);

        let form = document.createElement("input");
        form.setAttribute('type', 'text');
        form.classList.add("me");
    
        let newBtn = document.createElement("a");
        newBtn.addEventListener("click",postAntwoord);
        newBtn.classList.add("btn");
        newBtn.classList.add("btn-primary");
        newBtn.classList.add("btnComment");
        let newBtnContent = document.createTextNode("Comment Meer");
        newBtn.appendChild(newBtnContent);
    
        this.parentElement.appendChild(form);
        this.parentElement.appendChild(newBtn);
    }   
}
function postAntwoord(){

    let parent = document.getElementsByClassName("me")[0].parentElement;
    let valueComment = parent.children[3].value + "";
    addCommentToParent(valueComment);
    parent.removeChild(parent.children[3]);
    parent.removeChild(parent.children[3]);
    parent.children[1].addEventListener("click",addForm);
    
}