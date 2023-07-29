let topButton = document.getElementById("topbttn");
let main = document.querySelector(".main-content");
//When the user scrolls down 20px from the top of the document show the button
main.onscroll = function() {scrollFunction()};

function scrollFunction() {

    const scrollHeight = main.scrollHeight;
    const scrollTop = main.scrollTop;
    const clientHeight = main.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight - 25 || main.scrollTop > scrollHeight - 25) {
        topButton.style.display = "block";
        topButton.classList.add("show");
        
    } 
    else {
        topButton.classList.remove("show");
        topButton.style.display = "none";
    }
}


function topFunction() {
    main.scrollTop = 0; //For Safari
    main.scrollTop = 0; //for all other browsers
}

main.addEventListener("scroll", scrollFunction);

// Add event listener for the top button click
topButton.addEventListener("click", topFunction);