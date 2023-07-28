let topButton = document.getElementById("topbttn");
let main = document.getElementsByClassName("main-content");
//When the user scrolls down 20px from the top of the document show the button
main.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.main.scrollTop > 5 | document.main.scrollTop > 5) {
        topButton.style.display = "block";
    } 
    else {
        topButton.style.display = "none";
    }
}


function topFunction() {
    document.main.scrollTop = 0; //For Safari
    document.main.scrollTop = 0; //for all other browsers
}