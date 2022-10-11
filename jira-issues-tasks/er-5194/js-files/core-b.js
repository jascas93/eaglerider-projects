// Page Loading Screen
$(window).on("load", function () {
    setTimeout(removeLoader, 600); //wait x ms
});
function removeLoader() {
    $("#page_loading").fadeOut(300, function () {
        $("#page_loading").hide();
    });
}
// Different Variations of the Page
$(document).ready(function () {
    setTimeout(function() {
        //if (window.location.href.indexOf("?light=1") > 0) {
        //    $(".home-header").attr("style", "background-color: #F9F9F9;");
        //    $(".greeting-text").attr("style", "color: inherit;");
        //    $(".sub-greeting-message").attr("style", "color: inherit;");
        //    $(".stats-label").attr("style", "color: #797979;");
        //    $(".stats-value").attr("style", "color: inherit;");
        //    $(".quick-link").attr("style", "color: inherit;");
        //    $("#color_mode").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-5194/prototypes/main-tabs/home.html");
        //}
        //else
        //if (window.location.href.indexOf("?align-btn") > 0) {
        //    $(".floating-btn").attr("style", "width: 422px;");
        //}
        if ($(window).innerWidth() > 422 && window.location.href.indexOf("?dark=1") < 1) {
            $(".floating-btn").attr("style", "width: 422px;");
        }
        else if ($(window).innerWidth() > 422 && window.location.href.indexOf("?dark=1") > 0) {
            $(".floating-btn").attr("style", "width: 422px;");
            $('meta[name="theme-color"]').attr("content", "#303030");
            $(".top-divider").attr("style", "background-color: #303030;");
            $(".home-header").attr("style", "background-color: #303030;");
            $(".greeting-text").attr("style", "color: #fff;");
            $(".sub-greeting-message").attr("style", "color: #efefef;");
            $(".stats-label").attr("style", "color: #aeaeae;");
            $(".stats-value").attr("style", "color: #efefef;");
            $(".quick-link").attr("style", "color: #efefef;");
            $("#color_mode").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-5194/prototypes/main-tabs/home-b.html");
            $("#greeting_title").html("Good Evening, Hal");
            $("#emoji_icon").html("🌙");
        }
        else if ($(window).innerWidth() <= 422 && window.location.href.indexOf("?dark=1") > 0) {
            $('meta[name="theme-color"]').attr("content", "#303030");
            $(".top-divider").attr("style", "background-color: #303030;");
            $(".home-header").attr("style", "background-color: #303030;");
            $(".greeting-text").attr("style", "color: #fff;");
            $(".sub-greeting-message").attr("style", "color: #efefef;");
            $(".stats-label").attr("style", "color: #aeaeae;");
            $(".stats-value").attr("style", "color: #efefef;");
            $(".quick-link").attr("style", "color: #efefef;");
            $("#color_mode").attr("href", "https://jascas93.github.io/eaglerider-projects/jira-issues-tasks/er-5194/prototypes/main-tabs/home-b.html");
            $("#greeting_title").html("Good Evening, Hal");
            $("#emoji_icon").html("🌙");
        }
    },10);
});

// Show floating widget
const checkpoint = 300;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        document.getElementById("floating-widget").remove("hide-me");
    } else {
        document.getElementById("floating-widget").add("hide-me");
    }
});


// Carousel Sliders
const slider = document.querySelector(".carousel-inner");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});
