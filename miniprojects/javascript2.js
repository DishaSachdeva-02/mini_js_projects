var btn=document.getElementById("btn");
btn.addEventListener("click",colorchange);
var alpha="0123456789ABCDEF";
var newvalue="#";
function changecolor(){
    for(var i=0;i<6;i++){
        newvalue=newvalue+alpha[Math.floor(Math.random()*16)];
    }
    
    console.log(newvalue);
    return newvalue;
}
function colorchange(){
    document.body.style.backgroundColor=changecolor();
    btn.style.borderRadius="10px";
    newvalue="#";
   
}

