$(window).on("load", function () {
    if (window.location.href.indexOf("?reset=1") > 0) {
        setTimeout(removeLoader, 100);
    }
    else if (window.location.href.indexOf("?extend_now=1") > 0) {
        setTimeout(removeLoader, 100);
    }
    else if (window.location.href.indexOf("?shift_now=1") > 0) {
        setTimeout(removeLoader, 100);
    }
    else {
        setTimeout(removeLoader, 800); //wait x ms
    }
});
function removeLoader() {
    $("#page_loading").fadeOut(400, function () {
        $("#page_loading").hide();
    });
}

$(document).ready(function () {
    setTimeout(function() {
        if (window.location.href.indexOf("?reset=1") > 0) {
            $("#widget_reset_div").addClass('d-none');
            $("#availability_msg").addClass('d-none');
            $("#pickup_date_time_fieldbox").removeClass('widget-input-changed');
            $("#pickup_date_input").html('11/01/2022');
            $("#dropoff_date_time_fieldbox").removeClass('widget-input-changed');
            $("#dropoff_date_input").html('11/02/2022');
        }
        else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") < 1) {
            $("#balance_value").html("$35");
            $("#balance_value_top").html("$35");
            $("#balance_value_bottom").html("$35");

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1#");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1#");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1#");
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");

            $("#original_scenario_link").attr("href", "#");
            $("#original_scenario_link").attr("data-bs-toggle", "modal");
            $("#original_scenario_link").attr("data-bs-target", "#extend_notify");
            $("#continue_with_original").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
            $("#extend_scenario_link").attr("href", "#");
            $("#extend_scenario_link").attr("data-bs-toggle", "modal");
            $("#extend_scenario_link").attr("data-bs-target", "#extend_notify");
            $("#continue_with_extend").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extend_now=1#go_to_widget");
            $("#shift_scenario_link").attr("href", "#");
            $("#shift_scenario_link").attr("data-bs-toggle", "modal");
            $("#shift_scenario_link").attr("data-bs-target", "#shift_notify");
            $("#continue_with_shift").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shift_now=1#go_to_widget");
        }
        else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0) {
            $("#balance_value").html("$103.57");
            $("#balance_value_top").html("$103.57");
            $("#balance_value_bottom").html("$103.57");

            $("#old_model_textfield").removeClass("d-none");
            $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons url-new-tab">launch</span></a>');

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1#");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1#");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1#");
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");

            $("#original_scenario_link").attr("href", "#");
            $("#original_scenario_link").attr("data-bs-toggle", "modal");
            $("#original_scenario_link").attr("data-bs-target", "#original_notify");
            $("#continue_with_original").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
            $("#extend_scenario_link").attr("href", "#");
            $("#extend_scenario_link").attr("data-bs-toggle", "modal");
            $("#extend_scenario_link").attr("data-bs-target", "#extend_notify");
            $("#continue_with_extend").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extend_now=1#go_to_widget");
            $("#shift_scenario_link").attr("href", "#");
            $("#shift_scenario_link").attr("data-bs-toggle", "modal");
            $("#shift_scenario_link").attr("data-bs-target", "#shift_notify");
            $("#continue_with_shift").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shift_now=1#go_to_widget");

        }
        else if (window.location.href.indexOf("upsell_added=1") > 0 && window.location.href.indexOf("model_upgraded=1") > 0) {
            $("#balance_value").html("$138.57");
            $("#balance_value_top").html("$138.57");
            $("#balance_value_bottom").html("$138.57");

            $("#old_model_textfield").removeClass("d-none");
            $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons url-new-tab">launch</span></a>');

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1#");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1#");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1&model_upgraded=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?upsell_added=1&model_upgraded=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1&model_upgraded=1#");
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1&model_upgraded=1");

            $("#original_scenario_link").attr("href", "#");
            $("#original_scenario_link").attr("data-bs-toggle", "modal");
            $("#original_scenario_link").attr("data-bs-target", "#original_notify");
            $("#continue_with_original").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
            $("#extend_scenario_link").attr("href", "#");
            $("#extend_scenario_link").attr("data-bs-toggle", "modal");
            $("#extend_scenario_link").attr("data-bs-target", "#extend_notify");
            $("#continue_with_extend").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extend_now=1#go_to_widget");
            $("#shift_scenario_link").attr("href", "#");
            $("#shift_scenario_link").attr("data-bs-toggle", "modal");
            $("#shift_scenario_link").attr("data-bs-target", "#shift_notify");
            $("#continue_with_shift").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shift_now=1#go_to_widget");
        }
        else if (window.location.href.indexOf("?extend_now=1") > 0) {
            $("#widget_reset_div").removeClass('d-none');
            $("#availability_msg").removeClass('d-none');
            $("#dropoff_date_time_fieldbox").addClass('widget-input-changed');
            $("#dropoff_date_input").html('11/03/2022');
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        }
        else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") < 1 && window.location.href.indexOf("extended=1") > 0) {
            $("#old_dropoff_date_textfield").removeClass("d-none");
            $("#current_dropoff_date_textfield").html("11/03/2022 12:00 PM");
            $("#rental_days_textfield").html("2 Rental Days");

            $("#balance_value_top").html("$209");
            $("#balance_value_bottom").html("$209");

            $("#dropoff_date_input").html('11/03/2022');

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1#");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1#");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?extended=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?extended=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extended=1#");
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");

            $("#original_scenario_link").attr("href", "#");
            $("#original_scenario_link").attr("data-bs-toggle", "modal");
            $("#original_scenario_link").attr("data-bs-target", "#original_notify");
            $("#continue_with_original").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html");
            $("#extend_scenario_link").attr("href", "#");
            $("#extend_scenario_link").attr("data-bs-toggle", "modal");
            $("#extend_scenario_link").attr("data-bs-target", "#extend_notify");
            $("#continue_with_extend").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?extend_now=1#go_to_widget");
            $("#shift_scenario_link").attr("href", "#");
            $("#shift_scenario_link").attr("data-bs-toggle", "modal");
            $("#shift_scenario_link").attr("data-bs-target", "#shift_notify");
            $("#continue_with_shift").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?shif_now=1#go_to_widget");
        }
        else if (window.location.href.indexOf("?shift_now=1") > 0) {
            $("#widget_reset_div").removeClass('d-none');
            $("#availability_msg").removeClass('d-none');
            $("#pickup_date_time_fieldbox").addClass('widget-input-changed');
            $("#pickup_date_input").html('11/15/2022');
            $("#dropoff_date_time_fieldbox").addClass('widget-input-changed');
            $("#dropoff_date_input").html('11/16/2022');
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?shifted=1");
        }
    },10);
});
