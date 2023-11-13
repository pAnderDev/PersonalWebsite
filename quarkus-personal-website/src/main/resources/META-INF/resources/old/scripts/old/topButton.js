document.addEventListener("DOMContentLoaded", function () {

    var topButton = document.getElementById("topbttn");
    let main = document.querySelector(".main-content");

    function scrollFunction() {

        const scrollHeight = main.scrollHeight;
        const scrollTop = main.scrollTop;
        const clientHeight = main.clientHeight;

        console.log(`scrollHeight: ${scrollHeight}, scrollTop: ${scrollTop}, clientHeight: ${clientHeight}`);  // Log the values to see if they are correct

        
        if (scrollTop + clientHeight >= scrollHeight - 25) {
            topButton.style.display = "block";
        }
        else {
            topButton.style.display = "none";
        }
    }

    function topFunction() {
        main.scrollTop = 0; //For Safari
        main.scrollTop = 0; //for all other browsers
    }

    main.addEventListener("scroll", scrollFunction);

    // Add event listener for the top button click
    if(topButton) {
        topButton.addEventListener("click", topFunction);
    }
    else {
        console.log("Element with id 'topbttn' was not found");
    }
});
