// Page Loading Screen
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
});
function removeLoader() {
    $("#page_loading").fadeOut(400, function () {
        $("#page_loading").hide();
    });
}

// Show Welcome Modal
$(document).ready(function () {
    if (window.location.href.indexOf("?welcome=1") > 0) {
        $("#modify_welcome").modal("show");
    }
});

// Different Variations of the Page
$(document).ready(function () {
    setTimeout(function() {
        if (window.location.href.indexOf("?welcome=1") > 0) {
            $("#steps_normal_row").addClass("d-none");
            $("#steps-full-top").addClass("d-none");
            $("#steps-slim-top").addClass("d-none");
            $("#steps-slim-top").removeClass("visible-for-smd");
            $("#page_titles_row").addClass("pt-4");
            $("#main_page_title").html("Modify Your Reservation");
            $("#cta_btn_row").addClass("d-none");
        }
    },10);
});
