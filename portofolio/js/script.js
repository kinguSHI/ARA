document.addEventListener("DOMContentLoaded", function () {

    const home = document.querySelector(".home");

    if (home) {
        setTimeout(() => {
            home.classList.add("show");
        }, 200);
    }

    
});

/* =========================================
   MOUSE AURORA EFFECT
========================================= */

const mouseGlow = document.createElement("div");

mouseGlow.classList.add("mouse-glow");

document.body.appendChild(mouseGlow);


document.addEventListener("mousemove", function (event) {

    mouseGlow.style.left = event.clientX + "px";
    mouseGlow.style.top = event.clientY + "px";

});