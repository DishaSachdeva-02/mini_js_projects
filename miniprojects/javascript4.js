var main=document.getElementById("second");
var btn=document.getElementById("first");


var alpha="0123456789ABCDEF";
var newvalue="#";
var curvalue="#";
function changecolor(){
    for(var i=0;i<6;i++){
        newvalue=newvalue+alpha[Math.floor(Math.random()*16)];
         
    }
    
    console.log(newvalue);
    return newvalue;
}
function changecolorbody(){
    for(var i=0;i<6;i++){
        
        curvalue=curvalue+alpha[Math.floor(Math.random()*16)];   
    }
    
    console.log(curvalue);
    return curvalue;
}
function colorchange(){
    document.body.style.backgroundColor=changecolorbody();
    main.style.backgroundColor=changecolor();
    btn.style.borderRadius="10px";
    btn.style.boxShadow="5px 5px 5px grey"
    newvalue="#";
    curvalue="#";
}