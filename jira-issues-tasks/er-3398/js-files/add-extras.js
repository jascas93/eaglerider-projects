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
function addVIPZero() {
    // Get the checkbox
    var checkBox = document.getElementById("add_vip_zero");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        console.log("checked");
    } else {
        console.log("not checked");
    }
}
