(function(){
    "use strict";
    console.log(`reading js`);
    
    const title = document.querySelector("#overlay1");
    const start = document.querySelector("#start");
    const inst = document.querySelector("#overlay2");

    title.addEventListener("click",  function(event){
        event.preventDefault();
        title.className = "hide";
    })

    start.addEventListener("click", function(event){
        event.preventDefault();
        inst.className = "hide";
    })
})();