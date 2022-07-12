$(window).on("load", function () {
    if (window.location.href.indexOf("?reset=1") > 0) {
        setTimeout(removeLoader, 100);
    }
    else if (window.location.href.indexOf("?extended=1") > 0) {
        setTimeout(removeLoader, 100);
    }
    else if (window.location.href.indexOf("?shifted=1") > 0) {
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

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?upsell_added=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?upsell_added=1#");
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?upsell_added=1");
        }
        else if (window.location.href.indexOf("upsell_added=1") < 1 && window.location.href.indexOf("model_upgraded=1") > 0) {
            $("#balance_value").html("$103.57");
            $("#balance_value_top").html("$103.57");
            $("#balance_value_bottom").html("$103.57");
            $("#current_model_textfield").html('Harley-Davidson® Tri Glide® Ultra <a href="https://www.eaglerider.com/losangeles/tri-glide-ultra" target="_blank"><span class="material-icons" style="font-size:15px;vertical-align:text-bottom;margin-left:.15rem;color:#fe7b10">launch</span></a>');

            $("#steps_wide_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1#");
            $("#steps_wide_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#steps_wide_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#steps_wide_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

            $("#steps_normal_link_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1#");
            $("#steps_normal_link_bike").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
            $("#steps_normal_link_extras").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#steps_normal_link_review").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-review-and-update.html?model_upgraded=1");

            $("#next_btn_top").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");
            $("#next_btn_footer").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-add-extras.html?model_upgraded=1");

            $("#change_details").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-pickup-and-dropoff.html?model_upgraded=1#");
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?model_upgraded=1");
        }
        else if (window.location.href.indexOf("?extended=1") > 0) {
            $("#widget_reset_div").removeClass('d-none');
            $("#availability_msg").removeClass('d-none');
            $("#dropoff_date_time_fieldbox").addClass('widget-input-changed');
            $("#dropoff_date_input").html('11/03/2022');
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection.html?extended=1");
        }
        else if (window.location.href.indexOf("?shifted=1") > 0) {
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
