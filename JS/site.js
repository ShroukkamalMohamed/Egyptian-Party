// ?=====================>>>Elements===============================
let sideMenuInnerWidth = $(".menu").innerWidth();
let txtMessage = document.getElementById("txtMessage");
let remain = document.getElementById("remain");
let singerTitle = document.getElementsByClassName(" opend");
// !=========================>>>>PageLoad==========================
setInterval(function () {
    var countDownDate = new Date("Jan 30, 2024 15:37:25").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $("#daySpan").text(days + " D");
    $("#hoursSpan").text(hours + " h");
    $("#minSpan").text(minutes + " m");
    $("#secSpan").text(seconds + " s");

}, 100);
// ^=========================>>>function===========================
function colseSideMenu() {
    $(".sideMenu").animate({ "left": - sideMenuInnerWidth });
    $(".status").text("Open");
}
function openSideMenu() {
    $(".sideMenu").animate({ "left": 0 });
    $(".status").text("Close");
}
// ~=========================>>>>>Events===========================

$(".icon").click(function (e) {
    let iconOffset = $(".sideMenu").offset().left;
    if (iconOffset === 0) {
        colseSideMenu();
    }
    else {
        openSideMenu();
    }
});
$(".closeIcon").click(function (e) {
    colseSideMenu();
})

txtMessage.addEventListener("input", function () {
    const characterLength = 100;
    const currentLength = txtMessage.value.length;
    remain.innerHTML = currentLength >= 100 ? "your available character finished" : characterLength - currentLength;
});


function toggleSingerBody(element) {
    var singerBody = element.nextElementSibling;
    var isHidden = singerBody.style.maxHeight === '0px';

    var allSingerBodies = document.querySelectorAll('.singerBody');
    allSingerBodies.forEach(function (body) {
        if (body !== singerBody) {
            body.style.maxHeight = '0';
        }
    });

    if (isHidden) {
        singerBody.style.maxHeight = singerBody.scrollHeight + 'px';
    } else {
        singerBody.style.maxHeight = '0';
    }
}