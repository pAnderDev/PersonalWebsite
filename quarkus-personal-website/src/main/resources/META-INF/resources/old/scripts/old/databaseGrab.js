$(document).ready(function () {
    //Make AJAX request to fetch CVData
    $.get("/cv", function (cvData) {
        //populate html elements with data
        $("#name").text(cvData[0].name);
        $("#major").text(cvData[0].major);
        $("#email").text(cvData[0].email);
        $("#phone").text(cvData[0].phone);
    });
});