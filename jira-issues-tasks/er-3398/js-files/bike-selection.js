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
            $("#model_upgrade_card_link").addClass("btn--shockwave is-active");
            $("#next_btn_top").removeClass("btn--shockwave is-active");
            $("#next_btn_bottom").removeClass("btn--shockwave is-active");
            $("#next_btn_footer").removeClass("btn--shockwave is-active");
        }
        else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") < 1) {
            $("#balance_value").html("$35");
            $("#balance_value_top").html("$35");
            $("#balance_value_bottom").html("$35");
            $("#select_model_upgrade_btn").removeClass("btn--shockwave is-active");
            $("#next_btn_top").addClass("btn--shockwave is-active");
            $("#next_btn_bottom").addClass("btn--shockwave is-active");
            $("#next_btn_footer").addClass("btn--shockwave is-active");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1#");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1#");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");

            $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
            $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1");
            $("#model_upgrade_card_link").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
        }
        else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0) {
            $("#model_chosen_bike_card").removeClass("d-none");
            $("#model_upgrade_bike_card").addClass("d-none");
            $("#old_model_textfield").removeClass("d-none");
            $("#balance_value").html("$103.57");
            $("#balance_value_top").html("$103.57");
            $("#balance_value_bottom").html("$103.57");
            $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
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
            $("#next_btn_top").addClass("btn--shockwave is-active");
            $("#next_btn_bottom").addClass("btn--shockwave is-active");
            $("#next_btn_footer").addClass("btn--shockwave is-active");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1#");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1#");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");

            $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
            $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1");
            $("#model_chosen_card_link").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html");
        }
        else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") > 0) {
            $("#model_chosen_bike_card").removeClass("d-none");
            $("#model_upgrade_bike_card").addClass("d-none");
            $("#old_model_textfield").removeClass("d-none");
            $("#balance_value").html("$138.57");
            $("#balance_value_top").html("$138.57");
            $("#balance_value_bottom").html("$138.57");
            $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');
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
            $("#next_btn_top").addClass("btn--shockwave is-active");
            $("#next_btn_bottom").addClass("btn--shockwave is-active");
            $("#next_btn_footer").addClass("btn--shockwave is-active");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1#");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1#");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");

            $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
            $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1");
            $("#model_chosen_card_link").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
        }
        else if (window.location.href.indexOf("?extended=1") > 0) {
            $("#select_trike_btn").addClass("is-active");
            $("#next_btn_top").removeClass("is-active");
            $("#old_dropoff_date_textfield").removeClass("d-none");
            $("#current_dropoff_date_textfield").html("11/03/2022 12:00 PM");
            $("#balance_value_top").html("$209");
            $("#balance_value_bottom").html("$209");
            $("#rental_days_textfield").html("2 Rental Days");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1#");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1#");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");

            $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1");
            $("#model_upgrade_card_link").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1&model_upgraded=1");
        }
        else if (window.location.href.indexOf("?shifted=1") > 0) {
            $("#current_model_textfield").addClass("text-danger fw-500");
            $("#mini_error_note").removeClass("d-none");
            $("#old_pickup_date_textfield").removeClass("d-none");
            $("#current_pickup_date_textfield").html("11/15/2022 12:00 PM");
            $("#old_dropoff_date_textfield").removeClass("d-none");
            $("#current_dropoff_date_textfield").html("11/16/2022 12:00 PM");

            $("#balance_value_top").html("$-");
            $("#balance_value_bottom").html("$-");

            $("#bike_selection_unavailable_msg").removeClass("d-none");

            $("#current_bike_selection_wrapper").addClass("listing-unavailable");
            $("#current_bike_selection_status").addClass("listing-unavailable");
            $("#current_bike_selection_header").addClass("listing-unavailable");
            $("#current_bike_selection_img").addClass("listing-unavailable");
            $("#current_bike_selection_footer").addClass("listing-unavailable");
            $("#current_bike_selection_footer>.club-ribbon").addClass("listing-unavailable");
            $("#selected_current_price").addClass("listing-unavailable");
            $("#selected_full_price").addClass("listing-unavailable");
            $("#selected_club_savings").addClass("listing-unavailable");

            $("#current_selection_available").addClass("d-none");
            $("#current_selection_unavailable").removeClass("d-none");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#steps_wide_link_extras").addClass("cursor-not-allowed");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#steps_wide_link_review").addClass("cursor-not-allowed");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#steps_wide_link_extras").addClass("cursor-not-allowed");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?shifted=1#");
            $("#steps_wide_link_review").addClass("cursor-not-allowed");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#next_btn_top").removeClass("is-active");
            $("#next_btn_top").addClass("disabled-btn cursor-not-allowed");
            $("#next_btn_bottom").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#next_btn_bottom").addClass("disabled-btn cursor-not-allowed");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1#");
            $("#next_btn_footer").addClass("disabled-btn cursor-not-allowed");

            $("#go_back_btn_1").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1");
            $("#go_back_btn_2").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shifted=1");
            $("#model_upgrade_card_link").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?shifted=1&model_upgraded=1");
        }
        else {
            console.log("no change");
        }
    },10);
    $(document).mousemove(function(){
         if($("#model_upgrade_card_link:hover").length != 0){
            $("#model_upgrade_bike_card_img").attr("style", "transform: scale(1.05);");
            $("#select_model_upgrade_btn").attr("style", "background-color: #d95700; border-color: #d95700;");
        }
        else if($("#model_chosen_card_link:hover").length != 0){
           $("#model_chosen_bike_card_img").attr("style", "transform: scale(1.05);");
           $("#select_model_chosen_btn").attr("style", "background-color: #d95700; border-color: #d95700;");
       }
        else{
            $("#model_upgrade_bike_card_img").attr("style", "");
            $("#select_model_upgrade_btn").attr("style", "");
            $("#model_chosen_bike_card_img").attr("style", "");
            $("#select_model_chosen_btn").attr("style", "");
        }
    });
});
