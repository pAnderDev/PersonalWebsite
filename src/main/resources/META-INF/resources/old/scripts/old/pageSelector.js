$(document).ready(function() {
    // Load the 'About' page by default
    $('.main-content').load('pages/about.html');

    $('.nav-link').click(function(e) {
        e.preventDefault(); //preven the default action (jump to link target)
        var fileToLoad = $(this).data('content'); //get the file name from the data-content attribute
        $('.main-content').load(fileToLoad);
    });
});