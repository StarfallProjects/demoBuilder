document.addEventListener("DOMContentLoaded", function(e){    
let helps = document.getElementsByClassName("helpIcon");
let close = document.getElementsByClassName("closeIcon");

for(let i=0; i < helps.length; i++){
    helps[i].addEventListener("click", function(e){     
        let helpFrame = document.getElementById("helpFrame");   
        helpFrame.src = "/csh/" + e.target.id + "/";
        helpFrame.style = "display: block";        
    });
}
for(let i=0; i < close.length; i++){
    close[i].addEventListener("click", function(e){
        window.frameElement.src = "";
        window.frameElement.style = "display: none";        
    });
}
});

