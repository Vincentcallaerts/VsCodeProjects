function lampUit() {
    document.getElementById("lamp").src = "img/pic_bulboff.gif";

}
function lampAan() {
    document.getElementById("lamp").src = "img/pic_bulbon.gif";

}
var bool = false;
function lampFoolproof(){
    if(!bool){
        document.getElementById("lamp").src = "img/pic_bulbon.gif";
        bool = !bool;
    }else{
        document.getElementById("lamp").src = "img/pic_bulboff.gif";
        bool = !bool;
    }
}