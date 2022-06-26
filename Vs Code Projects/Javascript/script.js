var kerstboom = "";
for(var i=1; i<=30; i++){
    kerstboom +="  - "
    for(var x = 1; x <= 30-i; x++){
        kerstboom += "-"
    }
    
    for(var j = 1; j <= i; j++){
        kerstboom += "* ";
    }
    for(var x = 1; x <= 30-i; x++){
        kerstboom += "-"
    }
    kerstboom +="  - "
    kerstboom += "<br>";
}
kerstboom += "-----------------------* * * * * * * -----------------------<br>";
kerstboom += "-----------------------* * * * * * * -----------------------<br>";
kerstboom += "-----------------------* * * * * * * -----------------------<br>";

document.write(kerstboom);