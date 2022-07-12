// Page Loading Screen
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
});
function removeLoader() {
    $("#page_loading").fadeOut(400, function () {
        $("#page_loading").hide();
    });
}

// Different Variations of the Page
$(document).ready(function () {
    setTimeout(function() {
        if (window.location.href.indexOf("?welcome=1") > 0) {
            $("#modify_welcome").modal("show");
            $("#steps_normal_row").addClass("d-none");
            $("#steps_wide").addClass("d-none");
            $("#steps_small").addClass("d-none");
            $("#steps_small").removeClass("visible-for-smd");
            $("#page_titles_row").addClass("pt-4");
            $("#main_page_title").html("Modify Your Reservation");
        }
        else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") < 1 && window.location.href.indexOf("extended=1") < 1 && window.location.href.indexOf("shifted=1") < 1) {
            $("#total_value_1").html("$243.97");
            $("#paid_value_1").html("($208.97)");
            $("#balance_value_1").html("$35");
            $("#vip_zero_line_item_1").removeClass("d-none");
            $("#vip_zero_line_item_1").addClass("line-item-updated");
            $("#vip_zero_line_item_2").removeClass("d-none");
            $("#vip_zero_line_item_2").addClass("line-item-updated");
            $("#total_value_2").html("$243.97");
            $("#paid_value_2").html("($208.97)");
            $("#balance_value_2").html("$35");

            $("#payment_info_reservation_total").html("$243.97");
            $("#payment_info_store_credit_row").removeClass("d-none");
            $("#payment_info_remaining_balance").html("$35");
            $("#payment_info_payment_methods").removeClass("d-none");
            $("#no_payment_due_text").addClass("d-none");
            $("#cta_btn_row").removeClass("d-none");

            $("#balance_value_top").html("$35");
            $("#balance_value_bottom").html("$35");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");

            $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
            $("#change_pickup_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
            $("#change_dropoff_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");

            $("#add_extras_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#add_extras_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
        }
        else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("extended=1") < 1 && window.location.href.indexOf("shifted=1") < 1) {
            $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
            $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
            $("#old_bike_model_name").removeClass("d-none");
            $("#tm_item_1").html("1 Day @ $335 /Day");
            $("#tm_item_2").html("1 Day @ $335 /Day");
            $("#tm_price_1").html("$335");
            $("#tm_price_2").html("$335");
            $("#discount_price_1").html("-$67");
            $("#discount_price_2").html("-$67");
            $("#surcharge_price_1").html("$17.42");
            $("#surcharge_price_2").html("$17.42");
            $("#tax_price_1").html("$27.12");
            $("#tax_price_2").html("$27.12");
            $("#total_value_1").html("$312.54");
            $("#paid_value_1").html("($208.97)");
            $("#balance_value_1").html("$103.57");
            $("#total_value_2").html("$312.54");
            $("#paid_value_2").html("($208.97)");
            $("#balance_value_2").html("$103.57");
            $("#payment_info_reservation_total").html("$312.54");
            $("#payment_info_store_credit_row").removeClass("d-none");
            $("#payment_info_membership_credit_row").removeClass("d-none");
            $("#payment_info_remaining_balance").html("$103.57");
            $("#payment_info_payment_methods").removeClass("d-none");
            $("#no_payment_due_text").addClass("d-none");
            $("#cta_btn_row").removeClass("d-none");
            $("#balance_value_top").html("$103.57");
            $("#balance_value_bottom").html("$103.57");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");

            $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#change_pickup_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
            $("#change_dropoff_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");

            $("#add_extras_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#add_extras_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
        }
        else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("extended=1") < 1 && window.location.href.indexOf("shifted=1") < 1) {
            $("#old_bike_model_name").removeClass("d-none");
            $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
            $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");

            $("#tm_item_1").html("1 Day @ $335 /Day");
            $("#tm_item_2").html("1 Day @ $335 /Day");
            $("#tm_price_1").html("$335");
            $("#tm_price_2").html("$335");
            $("#discount_price_1").html("-$67");
            $("#discount_price_2").html("-$67");
            $("#surcharge_price_1").html("$17.42");
            $("#surcharge_price_2").html("$17.42");
            $("#tax_price_1").html("$27.12");
            $("#tax_price_2").html("$27.12");
            $("#vip_zero_line_item_1").removeClass("d-none");
            $("#vip_zero_line_item_1").addClass("line-item-updated");
            $("#vip_zero_line_item_2").removeClass("d-none");
            $("#vip_zero_line_item_2").addClass("line-item-updated");
            $("#total_value_1").html("$356.54");
            $("#paid_value_1").html("($208.97)");
            $("#balance_value_1").html("$138.57");
            $("#total_value_2").html("$356.54");
            $("#paid_value_2").html("($208.97)");
            $("#balance_value_2").html("$138.57");
            $("#payment_info_reservation_total").html("$356.54");
            $("#payment_info_store_credit_row").removeClass("d-none");
            $("#payment_info_membership_credit_row").removeClass("d-none");
            $("#payment_info_remaining_balance").html("$138.57");
            $("#payment_info_payment_methods").removeClass("d-none");
            $("#no_payment_due_text").addClass("d-none");
            $("#cta_btn_row").removeClass("d-none");
            $("#balance_value_top").html("$138.57");
            $("#balance_value_bottom").html("$138.57");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");

            $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
            $("#change_pickup_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
            $("#change_dropoff_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");

            $("#add_extras_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#add_extras_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
        }
        else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") < 1 && window.location.href.indexOf("extended=1") > 0 && window.location.href.indexOf("shifted=1") < 1) {
            $("#old_dropoff_date_textfield").removeClass("d-none");
            $("#current_dropoff_date_textfield").html("Thu, Nov 3, 2022");
            $("#change_pickup_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#change_dropoff_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");

            $("#tm_item_1").html("2 Day @ $224 /Day");
            $("#tm_item_2").html("2 Day @ $224 /Day");
            $("#tm_price_1").html("$448");
            $("#tm_price_2").html("$448");
            $("#discount_price_1").html("-$89.60");
            $("#discount_price_2").html("-$89.60");
            $("#surcharge_price_1").html("$23.30");
            $("#surcharge_price_2").html("$23.30");
            $("#tax_price_1").html("$36.27");
            $("#tax_price_2").html("$36.27");
            $("#total_value_1").html("$417.97");
            $("#total_value_2").html("$417.97");
            $("#paid_value_1").html("($208.97)");
            $("#paid_value_2").html("($208.97)");
            $("#balance_value_1").html("$209");
            $("#balance_value_2").html("$209");

            $("#balance_value_top").html("$209");
            $("#balance_value_bottom").html("$209");

            $("#payment_info_reservation_total").html("$417.97");
            $("#payment_info_store_credit_row").removeClass("d-none");
            $("#payment_info_membership_credit_row").removeClass("d-none");
            $("#payment_info_remaining_balance").html("$209");
            $("#payment_info_payment_methods").removeClass("d-none");
            $("#no_payment_due_text").addClass("d-none");
            $("#cta_btn_row").removeClass("d-none");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1#");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1#");

            $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
            $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
            $("#add_extras_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#add_extras_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
        }
        else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0 && window.location.href.indexOf("extended=1") < 1 && window.location.href.indexOf("shifted=1") > 0) {
            $("#old_bike_model_name").removeClass("d-none");
            $("#current_bike_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
            $("#current_bike_model_name").html("Harley-Davidson® Tri Glide® Ultra");
            $("#old_pickup_date_textfield").removeClass("d-none");
            $("#current_pickup_date_textfield").html("11/15/2022 12:00 PM");
            $("#old_dropoff_date_textfield").removeClass("d-none");
            $("#current_dropoff_date_textfield").html("11/16/2022 12:00 PM");

            $("#tm_item_1").html("1 Day @ $335 /Day");
            $("#tm_item_2").html("1 Day @ $335 /Day");
            $("#tm_price_1").html("$335");
            $("#tm_price_2").html("$335");
            $("#discount_price_1").html("-$67");
            $("#discount_price_2").html("-$67");
            $("#surcharge_price_1").html("$17.42");
            $("#surcharge_price_2").html("$17.42");
            $("#tax_price_1").html("$27.12");
            $("#tax_price_2").html("$27.12");
            $("#total_value_1").html("$312.54");
            $("#paid_value_1").html("($208.97)");
            $("#balance_value_1").html("$103.57");
            $("#total_value_2").html("$312.54");
            $("#paid_value_2").html("($208.97)");
            $("#balance_value_2").html("$103.57");

            $("#payment_info_reservation_total").html("$312.54");
            $("#payment_info_store_credit_row").removeClass("d-none");
            $("#payment_info_membership_credit_row").removeClass("d-none");
            $("#payment_info_remaining_balance").html("$103.57");
            $("#payment_info_payment_methods").removeClass("d-none");
            $("#no_payment_due_text").addClass("d-none");
            $("#cta_btn_row").removeClass("d-none");

            $("#balance_value_top").html("$103.57");
            $("#balance_value_bottom").html("$103.57");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1#");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1&model_upgraded=1#");

            $("#change_model_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1&model_upgraded=1");
            $("#change_pickup_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");
            $("#change_dropoff_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1&model_upgraded=1");

            $("#add_extras_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1");
            $("#add_extras_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1");
        }
    },10);
});
