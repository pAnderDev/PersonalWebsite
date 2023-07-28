let topButton = document.getElementById("topbttn");

//When the user scrolls down 20px from the top of the document show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 5 | document.documentElement.scrollTop > 5) {
        topButton.style.display = "block";
    } 
    else {
        topButton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //for all other browsers
}