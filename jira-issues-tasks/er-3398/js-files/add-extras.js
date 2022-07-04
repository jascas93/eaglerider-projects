// Page Loader
$(window).on("load", function () {
    setTimeout(removeLoader, 800); //wait x ms
});
function removeLoader() {
    $("#page_loading").fadeOut(400, function () {
        $("#page_loading").hide();
    });
}

// Different Page Variations
function addVIPZero() {
    // Get the checkbox
    var checkBox = document.getElementById("add_vip_zero");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true && window.location.href.indexOf("?upsell=1") > 0) {
        document.getElementById("add_vip_zero").classList.remove("input-focus-on-load");
        document.getElementById("continue_to_review_btn_top").setAttribute("href", "https:jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("continue_to_review_btn_bottom").setAttribute("href", "https:jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("footer_continue").setAttribute("href", "https:jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-3398/mockups/new/modify-reservation-review-and-update-added-vip-zero.html");
        document.getElementById("balance_value").innerHTML = "$35";
        document.getElementById("balance_value_top").innerHTML = "$35";
        document.getElementById("balance_value_bottom").innerHTML = "$35";
        document.getElementById("total_value").innerHTML = "$243.97";
        document.getElementById("vip_zero_td").classList.remove("d-none");
        document.getElementById("continue_to_review_btn_top").classList.add("btn--shockwave", "is-active");
        document.getElementById("continue_to_review_btn_bottom").classList.add("btn--shockwave", "is-active");
        document.getElementById("footer_continue").classList.add("btn--shockwave", "is-active");
    } else {
        console.log("not checked");
    }
}
