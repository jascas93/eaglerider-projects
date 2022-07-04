// Page Loader
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
    if (window.location.href.indexOf("?upsell=1") > 0) {
            $("#add_vip_zero").trigger("click");
        }
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
    if (checkBox.checked == true && window.location.href.indexOf("?upsell=1") > 0) {
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#continue_to_review_btn_top").addClass("btn--shockwave", "is-active");
        $("#continue_to_review_btn_bottom").addClass("btn--shockwave", "is-active");
        $("#footer_continue").addClass("btn--shockwave", "is-active");
        $("#total_value").html("$$243.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$35");
        $("#balance_value_top").html("$35");
        $("#balance_value_bottom").html("$35");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("?upsell=1") > 0) {
        $("#vip_zero_line_item").addClass("d-none");
    }
    else {
        console.log("not checked");
    }
}
