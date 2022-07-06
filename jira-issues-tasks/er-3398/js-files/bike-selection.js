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
        if (window.location.href.indexOf("change_model=1") > 0) {
            $("#select_model_upgrade_btn").addClass("btn--shockwave is-active");
            $("#add_extras_btn_top").removeClass("btn--shockwave is-active");
            $("#add_extras_btn_bottom").removeClass("btn--shockwave is-active");
            $("#footer_continue").removeClass("btn--shockwave is-active");
        }
        else if (window.location.href.indexOf("model_upgraded=1") > 0) {
            $("#model_chosen_bike_card").removeClass("d-none");
            $("#cbs_model_name").html("Harley-Davidson® Tri Glide® Ultra");
            $("#cbs_model_class").html("3-Wheel");
            $("#cbs_model_img").attr("src", "https://raw.githubusercontent.com/jascas93/eaglerider-projects/main/jira-issues-tasks/er-3398/assets/hd-tri-glide-for-rent.jpeg");
            $("#cbs_model_price_per_day").html("$268");
            $("#cbs_model_price_per_day_old").html("$335");
            $("#cbs_model_price_full").html("$268");
            $("#cbs_model_price_full_old").html("$335");
            $("#cbs_model_x_days").html("1 day");
            $("#cbs_model_club_savings").html("Membership Savings of $67 (-20% Off)");
            $("#select_model_upgrade_btn").removeClass("btn--shockwave is-active");
            $("#add_extras_btn_top").removeClass("btn--shockwave is-active");
            $("#add_extras_btn_bottom").removeClass("btn--shockwave is-active");
            $("#footer_continue").removeClass("btn--shockwave is-active");
        }
        else if (window.location.href.indexOf("?extended=1") > 0) {
            $("#select_trike_btn").addClass("is-active");
            $("#add_extras_btn_top").removeClass("is-active");
            $("#old_dropoff_date_textfield").removeClass("d-none");
            $("#current_dropoff_date_textfield").html("11/03/2022 12:00 PM");
            $("#balance_value_top").html("$209");
            $("#balance_value_bottom").html("$209");
            $("#rental_days_textfield").html("2 Rental Days");
            $("#pick_drop_btn_link_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?extended=1");
            $("#pick_drop_btn_link_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?extended=1");
            $("#pick_drop_btn_link_3").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?extended=1");
            $("#pick_drop_btn_link_4").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?extended=1");
        }
        else if (window.location.href.indexOf("?shifted=1") > 0) {
            $("#bike_selection_unavailable_msg").removeClass("d-none");
            $("#select_trike_btn").addClass("is-active");
            $("#select_trike_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-add-extras-model-upgrade-trike.html?shifted=1");
            $(".bike-listing-card-link").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-add-extras-model-upgrade-trike.html?shifted=1");
            $("#add_extras_btn_top").removeClass("is-active");
            $("#add_extras_btn_top").addClass("disabled-btn cursor-not-allowed");
            $("#add_extras_btn_top").attr("href", "#");
            $("#add_extras_btn_bottom").addClass("disabled-btn cursor-not-allowed");
            $("#add_extras_btn_bottom").attr("href", "#");
            $("#footer_continue").addClass("disabled-btn cursor-not-allowed");
            $("#footer_continue").attr("href", "#");
            $("#current_model_textfield").addClass("text-danger fw-500");
            $("#mini_error_note").removeClass("d-none");
            $("#old_pickup_date_textfield").removeClass("d-none");
            $("#current_pickup_date_textfield").html("11/15/2022 12:00 PM");
            $("#old_dropoff_date_textfield").removeClass("d-none");
            $("#current_dropoff_date_textfield").html("11/16/2022 12:00 PM");
            $("#balance_value_top").html("$-");
            $("#balance_value_bottom").html("$-");
            $("#current_selection_available").addClass("d-none");
            $("#current_selection_unavailable").removeClass("d-none");
            $("#pick_drop_btn_link_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?shifted=1");
            $("#pick_drop_btn_link_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?shifted=1");
            $("#pick_drop_btn_link_3").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?shifted=1");
            $("#pick_drop_btn_link_4").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-pickup-dropoff-details-no-change.html?shifted=1");
            $("#current_bike_selection_wrapper").addClass("listing-unavailable");
            $("#current_bike_selection_status").addClass("listing-unavailable");
            $("#current_bike_selection_header").addClass("listing-unavailable");
            $("#current_bike_selection_img").addClass("listing-unavailable");
            $("#current_bike_selection_footer").addClass("listing-unavailable");
            $("#current_bike_selection_footer>.club-ribbon").addClass("listing-unavailable");
            $("#selected_current_price").addClass("listing-unavailable");
            $("#selected_full_price").addClass("listing-unavailable");
            $("#selected_club_savings").addClass("listing-unavailable");
        }
        else {
            $("#select_trike_btn").removeClass("btn-primary-focus");
            $("#add_extras_btn_top").addClass("btn-primary-focus");
        }
    },10);
});
