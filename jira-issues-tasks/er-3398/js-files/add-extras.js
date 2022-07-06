// Page Loader
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
    if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgrade=1") < 1) {
        $("#add_vip_zero").trigger("click");
    }
    else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgrade=1") > 0) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html("Harley-Davidson® Tri Glide® Ultra");
        $("#current_model_url").attr("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
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
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#continue_to_review_btn_top").removeClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").removeClass("btn--shockwave is-active");
        $("#footer_continue").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
    }
    else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgrade=1") > 0) {
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
    var checkBox = document.getElementById("add_vip_zero");

    if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgrade=1") < 1) {
        $("#total_value").html("$243.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$35");
        $("#balance_value_top").html("$35");
        $("#balance_value_bottom").html("$35");
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#continue_to_review_btn_top").addClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").addClass("btn--shockwave is-active");
        $("#footer_continue").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
    }
    else if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgrade=1") < 1) {
        $("#total_value").html("$243.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$35");
        $("#balance_value_top").html("$35");
        $("#balance_value_bottom").html("$35");
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#continue_to_review_btn_top").addClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").addClass("btn--shockwave is-active");
        $("#footer_continue").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgrade=1") < 1) {
        $("#total_value").html("$208.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$0");
        $("#balance_value_top").html("$0");
        $("#balance_value_bottom").html("$0");
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#continue_to_review_btn_top").removeClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").removeClass("btn--shockwave is-active");
        $("#footer_continue").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
    }
    else if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgrade=1") > 0) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html("Harley-Davidson® Tri Glide® Ultra");
        $("#current_model_url").attr("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
        $("#tm_item").html("1 Day @ $335 /Day");
        $("#tm_price").html("$335");
        $("#discount_price").html("-$67");
        $("#surcharge_price").html("$17.42");
        $("#tax_price").html("$27.12");
        $("#total_value").html("$356.54");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$138.57");
        $("#balance_value_top").html("$138.57");
        $("#balance_value_bottom").html("$138.57");
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#continue_to_review_btn_top").removeClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").removeClass("btn--shockwave is-active");
        $("#footer_continue").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgrade=1") > 0) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html("Harley-Davidson® Tri Glide® Ultra");
        $("#current_model_url").attr("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
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
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#continue_to_review_btn_top").removeClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").removeClass("btn--shockwave is-active");
        $("#footer_continue").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?model_upgrade=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgrade=1");
    }
    else if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgrade=1") > 0) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html("Harley-Davidson® Tri Glide® Ultra");
        $("#current_model_url").attr("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
        $("#tm_item").html("1 Day @ $335 /Day");
        $("#tm_price").html("$335");
        $("#discount_price").html("-$67");
        $("#surcharge_price").html("$17.42");
        $("#tax_price").html("$27.12");
        $("#total_value").html("$356.54");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$138.57");
        $("#balance_value_top").html("$138.57");
        $("#balance_value_bottom").html("$138.57");
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#continue_to_review_btn_top").removeClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").removeClass("btn--shockwave is-active");
        $("#footer_continue").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1&model_upgrade=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1&model_upgrade=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1&model_upgrade=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgrade=1") > 0) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html("Harley-Davidson® Tri Glide® Ultra");
        $("#current_model_url").attr("src", "https://www.eaglerider.com/losangeles/tri-glide-ultra");
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
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#continue_to_review_btn_top").removeClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").removeClass("btn--shockwave is-active");
        $("#footer_continue").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1&model_upgrade=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1&model_upgrade=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgrade=1");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgrade=1");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html?upsell_added=1&model_upgrade=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgrade=1");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgrade=1") < 1) {
        $("#total_value").html("$208.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$0");
        $("#balance_value_top").html("$0");
        $("#balance_value_bottom").html("$0");
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#continue_to_review_btn_top").removeClass("btn--shockwave is-active");
        $("#continue_to_review_btn_bottom").removeClass("btn--shockwave is-active");
        $("#footer_continue").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#continue_to_review_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#continue_to_review_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#footer_continue").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#back_bike_selection").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#go_back").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff-details.html");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
    }
    else {
        console.log("not checked");
    }
}
