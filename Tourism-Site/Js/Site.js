function test(){
    var a=document.getElementById("cds").maxLength;
    var b=document.getElementById("cds").value.length;
    var c=a-b;
    document.getElementById("cd").innerHTML=c;
}
document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;