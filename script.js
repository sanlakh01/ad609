(function(){
    "use strict";
    console.log(`reading js`);
    
    const title = document.querySelector("#overlay1");
    const start = document.querySelector("#start");
    const inst = document.querySelector("#overlay2");
    const content = document.querySelector("#content");
    const ina = document.querySelector("#ina");
    const access = document.querySelector("#access");

    title.addEventListener("click",  function(event){
        event.preventDefault();
        title.className = "hide";
    })

    start.addEventListener("click", function(event){
        event.preventDefault();
        inst.className = "hide";
    })
    content.addEventListener("click", function(event){
        event.preventDefault();
        ina.className = "hide";
        access.className = "show";
    })
})();