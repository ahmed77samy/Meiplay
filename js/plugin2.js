/*
templete-name: meiplay;
The owner of the templete: ahmed samy;
Template-version: 1.0.0;
Date created: 14/2/2020
*/
/*logo*/
$(".logo img").click(function () {
	window.open("index.html","_self")
})
/*logo*/
/*nav*/
$(document).scroll(function() {
	if($("nav").offset().top >= 100) {
		$("nav").css({
			background: "var(--cwh)",
			borderBottom:"none"
		})
	}else{
		$("nav").css({
			background: "transparent",
			borderBottom: "2px solid rgba(255, 255, 255, .10)"
		})
	}
})
$(document).ready(function() {
	if($("nav").offset().top >= 100) {
		$("nav").css({
			background: "var(--cwh)",
			borderBottom:"none"
		})
	}else{
		$("nav").css({
			background: "transparent",
			borderBottom: "2px solid rgba(255, 255, 255, .10)"
		})
	}
})
/*nav*/
/*bannercontainer*/
$(document).ready(function () {
	$(".tp-banner").revolution({
		delay: 50000,
		fullScreen: "on",
		onHoverStop: false,
		hideTimerBar: "on",
		navigationType: "arrows",
		keyboardNavigation: "off",
		touchenabled: "off"
	})
})
/*bannercontainer*/
/*customer*/
$(".customer .person .name").click(function () {
    let data = $(this).data("paper");
    $(".customer .person .name.active").removeClass("active")
    $(this).addClass("active");
    $(`.customer .paper .response.active`).fadeOut(600)
    $(`.customer .paper .response.active`).removeClass("active")
    $(`.customer .paper .response${data}`).addClass("active")
    $(`.customer .paper .response${data}`).fadeIn(600)
})
$(document).ready(function () {
    $(`.customer .paper .response.active`).fadeIn()
})
/*customer*/
/*choose-us*/
$(".choose-us .tabs .item").click(function () {
    let data = $(this).data("navsection");
    $(".choose-us .tabs .item.active").removeClass("active");
    $(this).addClass("active");
    $(`.choose-us .parent .row.active`).fadeOut(600)
    $(`.choose-us .parent .row.active`).removeClass("active")
    $(`.choose-us .parent .row${data}`).addClass("active")
    $(`.choose-us .parent .row${data}`).fadeIn(600)
})
$(document).ready(function () {
        $(`.choose-us .parent .row.active`).fadeIn()
})
/*choose-us*/









