(function(){
    "use strict";
    console.log(`reading js`);

    const content = document.querySelector("#overlay button");
    const overlay = document.getElementById("overlay");

    content.addEventListener("click", function(event){
        
        event.preventDefault();

        overlay.className = "hide";
    })
})();