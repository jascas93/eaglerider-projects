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
        //$("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-street-glide-touring-edition-1.jpeg");
        //$("#current_bike_model_name").html("Harley-Davidson® Street Glide® Touring Edition");
        //$("#old_model_textfield").removeClass("d-none");
        //$("#current_model_textfield").html("Harley-Davidson® Tri Glide® Ultra");
        //$("#current_model_url").attr("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
        //$("#tm_item").html("1 Day @ $335 /Day");
        //$("#tm_price").html("$335");
        //$("#discount_price").html("-$67");
        //$("#surcharge_price").html("$17.42");
        //$("#tax_price").html("$27.12");
        $("#total_value").html("$$243.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$35");
        $("#balance_value_top").html("$35");
        $("#balance_value_bottom").html("$35");
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#continue_to_review_btn_top").addClass("btn--shockwave", "is-active");
        $("#continue_to_review_btn_bottom").addClass("btn--shockwave", "is-active");
        $("#footer_continue").addClass("btn--shockwave", "is-active");
        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("?upsell=1") > 0) {
        $("#vip_zero_line_item").addClass("d-none");
    }
    else {
        console.log("not checked");
    }
}
