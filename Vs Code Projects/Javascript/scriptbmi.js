var inputKg = prompt("Hoeveel Kg weeg je");
var inputM = prompt("Hoeveel M groot ben je");
var bmi = inputKg/(inputM*inputM);

console.log(bmi);

if(bmi < 18.5){
    console.log("Ondergewicht");
}else if(18.5 <= bmi && bmi <=24.9){
    console.log("Gezond");
}
else if(24.9 <= bmi && bmi <=29.9){
    console.log("Overgewicht");
}
else if(bmi > 30){
    console.log("Obesitas");
}

switch(true){
    case (bmi < 18.5):
        console.log("Ondergewicht") 
        break;
    case (18.5 <= bmi && bmi <24.9):
        console.log("Gezond")
        break;
    case (24.9 <= bmi && bmi <=29.9):
        console.log("Overgewicht")
        break;
    case (bmi > 30):
        console.log("Obesitas")
        break;
    1
}