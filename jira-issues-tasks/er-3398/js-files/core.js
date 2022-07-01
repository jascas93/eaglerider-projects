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
        if (window.location.href.indexOf("?change=1") > 0) {
            $("#select_trike_btn").addClass("is-active");
            $("#add_extras_btn_top").removeClass("is-active");
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
