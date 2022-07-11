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
    },10);
    setTimeout(function() {
        if (window.location.href.indexOf("?extended=1") > 0) {
            $("#widget_reset_div").removeClass('d-none');
            $("#availability_msg").removeClass('d-none');
            $("#dropoff_date_time_fieldbox").addClass('widget-input-changed');
            $("#dropoff_date_input").html('11/03/2022');
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection-no-change.html?extended=1");
        }
    },10);
    setTimeout(function() {
        if (window.location.href.indexOf("?shifted=1") > 0) {
            $("#widget_reset_div").removeClass('d-none');
            $("#availability_msg").removeClass('d-none');
            $("#pickup_date_time_fieldbox").addClass('widget-input-changed');
            $("#pickup_date_input").html('11/15/2022');
            $("#dropoff_date_time_fieldbox").addClass('widget-input-changed');
            $("#dropoff_date_input").html('11/16/2022');
            $("#search_availability_btn").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/prototypes/modify-reservation-bike-selection-no-change.html?shifted=1");
        }
    },10);
});
