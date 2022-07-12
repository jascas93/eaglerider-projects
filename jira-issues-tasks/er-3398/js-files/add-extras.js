// Page Loader
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
    if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") < 1) {
        $("#add_vip_zero").trigger("click");
    }
    else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("shifted=1") < 1) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');

        $("#tm_item").html("1 Day @ $335 /Day");
        $("#tm_price").html("$335");
        $("#discount_price").html("-$67");
        $("#surcharge_price").html("$17.42");
        $("#tax_price").html("$27.12");
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#total_value").html("$312.54");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$103.57");

        $("#balance_value_top").html("$103.57");
        $("#balance_value_bottom").html("$103.57");

        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
    }
    else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("shifted=1") > 0) {
        $("#add_vip_zero").removeClass("input-focus-on-load btn--shockwave is-active")
        $("#add_vip_zero").attr("disabled")

        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
        $("#old_pickup_date_textfield").removeClass("d-none");
        $("#current_pickup_date_textfield").html("11/15/2022 12:00 PM");
        $("#old_dropoff_date_textfield").removeClass("d-none");
        $("#current_dropoff_date_textfield").html("11/16/2022 12:00 PM");

        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");

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

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
    }
    else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") > 0) {
        $("#add_vip_zero").trigger("click");
    }
    else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") < 1 && window.location.href.indexOf("extended=1") > 0) {
        $("#old_dropoff_date_textfield").removeClass("d-none");
        $("#current_dropoff_date_textfield").html("11/03/2022 12:00 PM");
        $("#rental_days_textfield").html("2 Rental Days");
        $("#tm_item").html("2 Day @ $224 /Day");
        $("#tm_price").html("$448");
        $("#discount_price").html("-$89.60");
        $("#surcharge_price").html("$23.30");
        $("#tax_price").html("$36.27");
        $("#total_value").html("$417.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$209");
        $("#balance_value_top").html("$209");
        $("#balance_value_bottom").html("$209");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
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

    if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") < 1) {
        $("#total_value").html("$243.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$35");
        $("#balance_value_top").html("$35");
        $("#balance_value_bottom").html("$35");
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
    }
    else if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") < 1) {
        $("#total_value").html("$243.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$35");
        $("#balance_value_top").html("$35");
        $("#balance_value_bottom").html("$35");
        $("#vip_zero_line_item").removeClass("d-none");
        $("#vip_zero_line_item").addClass("line-item-updated");
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") < 1) {
        $("#total_value").html("$208.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$0");
        $("#balance_value_top").html("$0");
        $("#balance_value_bottom").html("$0");
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#next_btn_top").removeClass("btn--shockwave is-active");
        $("#next_btn_bottom").removeClass("btn--shockwave is-active");
        $("#next_btn_footer").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
    }
    else if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("shifted=1") < 1) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
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
        $("#next_btn_top").removeClass("btn--shockwave is-active");
        $("#next_btn_bottom").removeClass("btn--shockwave is-active");
        $("#next_btn_footer").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("shifted=1") < 1) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
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
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
    }
    else if (checkBox.checked == true && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("shifted=1") < 1) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
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
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("shifted=1") < 1) {
        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
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
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") < 1) {
        $("#total_value").html("$208.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$0");
        $("#balance_value_top").html("$0");
        $("#balance_value_bottom").html("$0");
        $("#vip_zero_line_item").addClass("d-none");
        $("#vip_zero_line_item").removeClass("line-item-updated");
        $("#next_btn_top").removeClass("btn--shockwave is-active");
        $("#next_btn_bottom").removeClass("btn--shockwave is-active");
        $("#next_btn_footer").removeClass("btn--shockwave is-active");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") < 1 && window.location.href.indexOf("extended=1") > 0) {
        $("#old_dropoff_date_textfield").removeClass("d-none");
        $("#current_dropoff_date_textfield").html("11/03/2022 12:00 PM");
        $("#rental_days_textfield").html("2 Rental Days");
        $("#tm_item").html("2 Day @ $224 /Day");
        $("#tm_price").html("$448");
        $("#discount_price").html("-$89.60");
        $("#surcharge_price").html("$23.30");
        $("#tax_price").html("$36.27");
        $("#total_value").html("$417.97");
        $("#paid_value").html("($208.97)");
        $("#balance_value").html("$209");
        $("#balance_value_top").html("$209");
        $("#balance_value_bottom").html("$209");

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
    }
    else if (checkBox.checked == false && window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("shifted=1") > 0) {
        $("#add_vip_zero").removeClass("input-focus-on-load btn--shockwave is-active")
        $("#add_vip_zero").attr("disabled")

        $("#old_model_textfield").removeClass("d-none");
        $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
        $("#old_pickup_date_textfield").removeClass("d-none");
        $("#current_pickup_date_textfield").html("11/15/2022 12:00 PM");
        $("#old_dropoff_date_textfield").removeClass("d-none");
        $("#current_dropoff_date_textfield").html("11/16/2022 12:00 PM");

        $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
        $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");

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

        $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
        $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
        $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1#");
        $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");

        $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
        $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
        $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1#");
        $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");

        $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");
        $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");
        $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1");
        $("#next_btn_top").addClass("btn--shockwave is-active");
        $("#next_btn_bottom").addClass("btn--shockwave is-active");
        $("#next_btn_footer").addClass("btn--shockwave is-active");

        $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
        $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");

        $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
        $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
    }
    else {
        console.log("not checked");
    }
}
