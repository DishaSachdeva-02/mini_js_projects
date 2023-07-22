var increment=document.getElementById("btninc");
var decrement=document.getElementById("btndec");
var counter=document.getElementById("counter");
var reset=document.getElementById("reset");
var value=counter.innerText;
increment.addEventListener("click",inc);
decrement.addEventListener("click",dec);
reset.addEventListener("click",res);
function dec(){
    value=value-1;
    counter.innerText=value;
    console.log(value);
}
function inc(){
    value=value+1;
    counter.innerText=value;
}
function res(){
    value=0;
    counter.innerText=value;
}
