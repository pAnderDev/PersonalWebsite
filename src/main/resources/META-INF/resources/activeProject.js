$(document).ready(function() {
    $('.card-style-horizontal .card-horizontal:not(:first)').hide();
})

$(document).ready(function () {

    $(".bar").click(function () {
        // Remove active class from all bars
        $(".bar").removeClass("active");
        // Add active class to the clicked bar
        $(this).addClass("active");

        // Get the index of the clicked bar
        const index = $(this).index();

        // Hide all cards
        $(".card-horizontal").hide();

        // Show the card corresponding to the clicked bar
        $(".card-horizontal").eq(index).show();

    });
});
