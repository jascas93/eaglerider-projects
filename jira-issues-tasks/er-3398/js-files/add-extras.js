// Page Loader
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
});
function removeLoader() {
    $("#page_loading").fadeOut(400, function () {
        $("#page_loading").hide();
    });
}


// Different Page Variations
$(document).ready(function () {
    const $checkBox = $("#add_vip_zero");
    if ($checkBox.is(":checked")) {
        console.log("VIP zero checked");
    }
    else {
        console.log("NOT checked");
    }
});
