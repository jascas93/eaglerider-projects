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
            $("#steps-full-top").addClass("d-none");
            $("#steps-slim-top").addClass("d-none");
            $("#steps-slim-top").removeClass("visible-for-smd");
            $("#page_titles_row").addClass("pt-4");
            $("#main_page_title").html("Modify Your Reservation");
        }
        else if (window.location.href.indexOf("added_upsell=1") > 0 && window.location.href.indexOf("model_upgrade=1") < 1) {
            $("#total_value_1").html("$243.97");
            $("#paid_value_1").html("($208.97)");
            $("#balance_value_1").html("$35");
            $("#vip_zero_line_item_1").removeClass("d-none");
            $("#vip_zero_line_item_1").addClass("line-item-updated");
            $("#total_value_2").html("$243.97");
            $("#paid_value_2").html("($208.97)");
            $("#balance_value_2").html("$35");
            $("#vip_zero_line_item_2").removeClass("d-none");
            $("#vip_zero_line_item_2").addClass("line-item-updated");
            $("#payment_info_reservation_total").html("$243.97");
            $("#payment_info_store_credit_row").removeClass("d-none");
            $("#payment_info_remaining_balance").html("$35");
            $("#payment_info_payment_methods").removeClass("d-none");
            $("#no_payment_due_text").addClass("d-none")
            $("#cta_btn_row").removeClass("d-none")
            $("#balance_value_top").html("$35");
            $("#balance_value_bottom").html("$35");
        }
    },10);
});
