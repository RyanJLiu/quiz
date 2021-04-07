function Try(){
    var button =document.createElement("BUTTON");
    button.innerHTML="change this document";
    document.body.appendChild(button);
    button.addEventListener("click",change);
} 
    
function change() { 
    $("#cgu").empty().append("CSIE@CGU"); 
    $("#good").empty().append("怎麼那麼棒！！."); 
} 