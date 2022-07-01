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
    setTimeout(function () {
        if (window.location.href.indexOf("?upsell=1") > 0) {
            $("#add_vip_zero").trigger("click");
        }
    }, 10);
});

if (window.location.href.indexOf("?model.changed=trike") > 0) {
    document.getElementById("current_bike_model_img").setAttribute("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
    document.getElementById("current_bike_model_name").innerHTML = "Harley-Davidson® Tri Glide® Ultra";
    document.getElementById("old_model_textfield").classList.remove("d-none");
    document.getElementById("current_model_textfield").innerHTML = "Harley-Davidson® Tri Glide® Ultra";
    document.getElementById("ccurrent_model_url").setAttribute("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
    document.getElementById("tm_item").innerHTML = "1 Day @ $335 /Day";
    document.getElementById("tm_price").innerHTML = "$335";
    document.getElementById("tm_line_item").classList.add("line-item-updated");
    document.getElementById("discount_price").innerHTML = "-$67";
    document.getElementById("discount_line_item").classList.add("line-item-updated");
    document.getElementById("surcharge_price").innerHTML = "$17.42";
    document.getElementById("surcharge_line_item").classList.add("line-item-updated");
    document.getElementById("tax_price").innerHTML = "$27.12";
    document.getElementById("tax_line_item").classList.add("line-item-updated");
    document.getElementById("total_value").innerHTML = "$312.54";
    document.getElementById("total_line_item").classList.add("line-item-updated");
    document.getElementById("paid_value").innerHTML = "($208.97)";
    document.getElementById("balance_value").innerHTML = "$103.57";
    document.getElementById("balance_value_top").innerHTML = "$103.57";
    document.getElementById("balance_value_bottom").innerHTML = "$103.57";
}

function checkbox_changed(e) {
    if (e.checked && window.location.href.indexOf("?model.changed=trike") < 1) {
        document.getElementById("add_vip_zero").classList.remove("input-focus-on-load");
        document.getElementById("continue_to_review_btn_top").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("footer_continue").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("balance_value").innerHTML = "$35";
        document.getElementById("balance_value_top").innerHTML = "$35";
        document.getElementById("balance_value_bottom").innerHTML = "$35";
        document.getElementById("total_value").innerHTML = "$243.97";
        document.getElementById("vip_zero_line_item").classList.remove("d-none");
        document.getElementById("vip_zero_line_item").classList.add("line-item-updated");
        document.getElementById("continue_to_review_btn_top").classList.add("btn--shockwave", "is-active");
        document.getElementById("continue_to_review_btn_bottom").classList.add("btn--shockwave", "is-active");
        document.getElementById("footer_continue").classList.add("btn--shockwave", "is-active");
    } else if (e.checked == false && window.location.href.indexOf("?model.changed=trike") > 0) {
        document.getElementById("current_bike_model_img").setAttribute("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        document.getElementById("current_bike_model_name").innerHTML = "Harley-Davidson® Tri Glide® Ultra";
        document.getElementById("old_model_textfield").classList.remove("d-none");
        document.getElementById("current_model_textfield").innerHTML = "Harley-Davidson® Tri Glide® Ultra";
        document.getElementById("ccurrent_model_url").setAttribute("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
        document.getElementById("tm_item").innerHTML = "1 Day @ $335 /Day";
        document.getElementById("tm_price").innerHTML = "$335";
        document.getElementById("tm_line_item").classList.add("line-item-updated");
        document.getElementById("discount_price").innerHTML = "-$67";
        document.getElementById("discount_line_item").classList.add("line-item-updated");
        document.getElementById("surcharge_price").innerHTML = "$17.42";
        document.getElementById("surcharge_line_item").classList.add("line-item-updated");
        document.getElementById("tax_price").innerHTML = "$27.12";
        document.getElementById("tax_line_item").classList.add("line-item-updated");
        document.getElementById("total_value").innerHTML = "$312.54";
        document.getElementById("total_line_item").classList.add("line-item-updated");
        document.getElementById("paid_value").innerHTML = "($208.97)";
        document.getElementById("balance_value").innerHTML = "$103.57";
        document.getElementById("balance_value_top").innerHTML = "$103.57";
        document.getElementById("balance_value_bottom").innerHTML = "$103.57";
    } else if (e.checked && window.location.href.indexOf("?model.changed=trike") > 0) {
        document.getElementById("add_vip_zero").classList.remove("input-focus-on-load");
        document.getElementById("continue_to_review_btn_top").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("footer_continue").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("balance_value").innerHTML = "$138.57";
        document.getElementById("balance_value_top").innerHTML = "$138.57";
        document.getElementById("balance_value_bottom").innerHTML = "$138.57";
        document.getElementById("total_value").innerHTML = "$243.97";
        document.getElementById("continue_to_review_btn_top").classList.add("btn--shockwave", "is-active");
        document.getElementById("continue_to_review_btn_bottom").classList.add("btn--shockwave", "is-active");
        document.getElementById("footer_continue").classList.add("btn--shockwave", "is-active");
    } else {
        document.getElementById("add_vip_zero").classList.add("input-focus-on-load");
        document.getElementById("continue_to_review_btn_top").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html");
        document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html");
        document.getElementById("footer_continue").setAttribute("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-no-change.html");
        document.getElementById("balance_value").innerHTML = "$0";
        document.getElementById("balance_value_top").innerHTML = "$0";
        document.getElementById("balance_value_bottom").innerHTML = "$0";
        document.getElementById("total_value").innerHTML = "$208.97";
        document.getElementById("vip_zero_line_item").classList.add("d-none");
        document.getElementById("vip_zero_line_item").classList.remove("line-item-updated");
        document.getElementById("continue_to_review_btn_top").classList.remove("btn--shockwave", "is-active");
        document.getElementById("continue_to_review_btn_bottom").classList.remove("btn--shockwave", "is-active");
        document.getElementById("footer_continue").classList.remove("btn--shockwave", "is-active");
    }
}

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
