// Page Loader
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
});
function removeLoader() {
    $("#page_loading").fadeOut(400, function () {
        $("#page_loading").hide();
    });
}


//Different Page Variations
$(document).ready(function () {
    setTimeout(function() {
        if (window.location.href.indexOf("?upsell=1") > 0) {
            $("#add_vip_zero").trigger("click");
        }
        else if (window.location.href.indexOf("?model_upgrade=1") > 0) {
            $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
            $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
            $("#old_model_textfield").removeClass("d-none");
            $("#current_model_textfield").html("Harley-Davidson® Tri Glide® Ultra");
            $("#ccurrent_model_url").attr("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
            $("#tm_item").html("1 Day @ $335 /Day");
            $("#tm_price").html("$335");
            $("#discount_price").html("-$67");
            $("#surcharge_price").html("$17.42");
            $("#tax_price").html("$27.12");
            $("#total_value").html("$312.54");
            $("#paid_value").html("($208.97)");
            $("#balance_value").html("$103.57");
            $("#balance_value_top").html("$103.57");
            $("#balance_value_bottom").html("$103.57");
        }
        else if ($("add_vip_zero").is(":checked")) {
            $("#vip_zero_line_item").removeClass("d-none");
        }
        else {
            $("#continue_to_review_btn_top").addClass("btn--shockwave", "is-active");
            $("#continue_to_review_btn_bottom").addClass("btn--shockwave", "is-active");
            $("#footer_continue").addClass("btn--shockwave", "is-active");
        }
    },10);
});


//function checkbox_changed(e) {
//    if (e.checked) {
//        document.getElementById("add_vip_zero").classList.remove("input-focus-on-load");
//        document.getElementById("continue_to_review_btn_top").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
//        document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
//        document.getElementById("footer_continue").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
//        (document.getElementById("balance_value").innerHTML = "$35");
//        (document.getElementById("balance_value_top").innerHTML = "$35");
//        (document.getElementById("balance_value_bottom").innerHTML = "$35");
//        (document.getElementById("total_value").innerHTML = "$243.97");
//        document.getElementById("vip_zero_td").classList.remove("d-none");
//        document.getElementById("continue_to_review_btn_top").classList.add("btn--shockwave", "is-active");
//        document.getElementById("continue_to_review_btn_bottom").classList.add("btn--shockwave", "is-active");
//        document.getElementById("footer_continue").classList.add("btn--shockwave", "is-active");
//    }
//    else {
//        document.getElementById("add_vip_zero").classList.add("input-focus-on-load");
//        document.getElementById("continue_to_review_btn_top").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html");
//        document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html");
//        document.getElementById("footer_continue").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html");
//        (document.getElementById("balance_value").innerHTML = "$0");
//        (document.getElementById("balance_value_top").innerHTML = "$0");
//        (document.getElementById("balance_value_bottom").innerHTML = "$0");
//        (document.getElementById("total_value").innerHTML = "$208.97");
//        document.getElementById("vip_zero_td").classList.add("d-none");
//        document.getElementById("continue_to_review_btn_top").classList.remove("btn--shockwave", "is-active");
//        document.getElementById("continue_to_review_btn_bottom").classList.remove("btn--shockwave", "is-active");
//        document.getElementById("footer_continue").classList.remove("btn--shockwave", "is-active");
//    }
//}

//function checkbox_changed(e) {
//    e.checked ? document.getElementById("add_vip_zero").classList.remove("input-focus-on-load") : document.getElementById("add_vip_zero").classList.add("input-focus-on-load"),
//    e.checked ? document.getElementById("continue_to_review_btn_top").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html") : document.getElementById("continue_to_review_btn_top").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html"),
//    e.checked ? document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html") : document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html"),
//    e.checked ? document.getElementById("footer_continue").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html") : document.getElementById("footer_continue").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html"),
//    e.checked ? (document.getElementById("balance_value").innerHTML = "$35") : (document.getElementById("balance_value").innerHTML = "$0"),
//    e.checked ? (document.getElementById("balance_value_top").innerHTML = "$35") : (document.getElementById("balance_value_top").innerHTML = "$0"),
//    e.checked ? (document.getElementById("balance_value_bottom").innerHTML = "$35") : (document.getElementById("balance_value_bottom").innerHTML = "$0"),
//    e.checked ? (document.getElementById("total_value").innerHTML = "$243.97") : (document.getElementById("total_value").innerHTML = "$208.97"),
//    e.checked ? document.getElementById("vip_zero_td").classList.remove("d-none") : document.getElementById("vip_zero_td").classList.add("d-none"),
//    e.checked ? document.getElementById("continue_to_review_btn_top").classList.add("btn--shockwave", "is-active") : document.getElementById("continue_to_review_btn_top").classList.remove("btn--shockwave", "is-active"),
//    e.checked ? document.getElementById("continue_to_review_btn_bottom").classList.add("btn--shockwave", "is-active") : document.getElementById("continue_to_review_btn_bottom").classList.remove("btn--shockwave", "is-active"),
//    e.checked ? document.getElementById("footer_continue").classList.add("btn--shockwave", "is-active") : document.getElementById("footer_continue").classList.remove("btn--shockwave", "is-active");
//}
