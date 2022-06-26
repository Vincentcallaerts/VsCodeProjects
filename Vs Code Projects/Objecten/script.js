class persoon {
    constructor(naam,geslacht,hobbies,img) {
        this.naam = naam;
        this.geslacht = geslacht;
        this.hobbies = hobbies;
        this.img = img;
    }
    zegHallo() {

        let newDiv = document.createElement("div");
        newDiv.classList.add("card");
        newDiv.classList.add("p-3");


        let newH5 = document.createElement("h5");
        let newH5Content = document.createTextNode(this.naam);
        newH5.classList.add("card-title");

        if(this.geslacht){
            newH5.classList.add("boy");
        }else{
            newH5.classList.add("girl");
        }

        newH5.appendChild(newH5Content);

        let newDivbody = document.createElement("div");
        newDivbody.classList.add("card-body");

        let newImg = document.createElement("img");
        newImg.src = this.img;

        let newP = document.createElement("h5");
        let newPContent = document.createTextNode("Hobbies: ");
        newP.appendChild(newPContent);

        root.appendChild(newDiv);
        newDiv.appendChild(newH5);
        newDiv.appendChild(newDivbody);

        newDivbody.appendChild(newImg);
        newDivbody.appendChild(newP);
        // hobbies hier gezet weet niet of dit anders voor ishuess zou zorgen
        
        for(var i = 0; i < this.hobbies.length; i++){
            let newLi = document.createElement("li");
            let newLiContent = document.createTextNode(this.hobbies[i]);
            newLi.appendChild(newLiContent);
            newDivbody.appendChild(newLi);
        }
    }
}
function dagIedereen(){
    for(var i = 0; i < this.personen.length; i++){
        personen[i].zegHallo();
    }
}

let root = document.getElementById("root");

var jan = new persoon("jan", true, ["Saassb", "Vodddlvo", "BMW"], "img/boy2.jpg");
var fien = new persoon("fien", false, ["Saab", "Volffvo", "BMW"], "img/girl1.jpg");
var koen = new persoon("koen",true,["Sassab", "Volvaao", "BMWss"],"img/boy3.jpg");
var niels = new persoon("niels",true,["Saab", "Volvo", "BMddW"],"img/boy4.jpg");
var tessa = new persoon("tessa",false,["Saab", "Volvo", "BMW"],"img/girl2.jpg");
var sara = new persoon("sara",false,["Saab", "Volvo", "BMfffW"],"img/girl3.jpg");


var personen = [jan,fien,koen,niels,tessa,sara,jan];

dagIedereen();
sara.zegHallo();
