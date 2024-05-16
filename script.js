document.addEventListener("DOMContentLoaded", function() {
    let sqr1 = document.querySelector("#square1");
    let sqr2 = document.querySelector("#square2");
    let sqr3 = document.querySelector("#square3");

    sqr1.addEventListener("mouseover", mouseOver);
    sqr1.addEventListener("mouseout", mouseOut);

    sqr2.addEventListener("mouseover", mouseOver);
    sqr2.addEventListener("mouseout", mouseOut);

    sqr3.addEventListener("mouseover", mouseOver);
    sqr3.addEventListener("mouseout", mouseOut);

    function mouseOver(event) {
        if (event.target === sqr1) {
            sqr2.style.backgroundColor = "#6F4E37";
            sqr3.style.backgroundColor = "#6F4E37";
        } else if (event.target === sqr2) {
            sqr1.style.backgroundColor = "#6F4E37";
            sqr3.style.backgroundColor = "#6F4E37";
        } else if (event.target === sqr3) {
            sqr1.style.backgroundColor = "#6F4E37";
            sqr2.style.backgroundColor = "#6F4E37";
        }
    }

    function mouseOut(event) {
        if (event.target === sqr1) {
            sqr2.style.backgroundColor = "#E6E6FA";
            sqr3.style.backgroundColor = "#E6E6FA";
        } else if (event.target === sqr2) {
            sqr1.style.backgroundColor = "#E6E6FA";
            sqr3.style.backgroundColor = "#E6E6FA";
        } else if (event.target === sqr3) {
            sqr1.style.backgroundColor = "#E6E6FA";
            sqr2.style.backgroundColor = "#E6E6FA";
        }
    }
});
