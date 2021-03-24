 function Try(){
 var button =document.createElement("BUTTON");
 button.innerHTML="change this document";
 document.body.appendChild(button);
 button.addEventListener("click",change);
 } 
 
 function change() { 
 var header = document.getElementById("cgu"); 
 header.innerHTML = "CSIE@CGU"; 
 
 var para = document.getElementById("good"); 
 para.innerHTML = "怎麼那麼棒！！."; 
 } 