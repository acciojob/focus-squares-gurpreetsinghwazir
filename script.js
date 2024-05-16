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

    function mouseOver() {
		sqr2.style.backgroundColor = "#6F4E37";
		sqr3.style.backgroundColor = "#6F4E37";
	        
    }

    function mouseOut() {
         // revert to original color
		
		sqr2.style.backgroundColor = "#E6E6FA";
		sqr3.style.backgroundColor = "#E6E6FA";
    }

});
