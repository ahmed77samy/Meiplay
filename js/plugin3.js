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
$(".customer .people .name").click(function () {
    let data = $(this).data("paper");
    $(".customer .people .name.active").removeClass("active")
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
/*arrow people*/
let i = 0;
$(".arrow").click(function () {
	if($(this).hasClass("left")){
		if($(`.people .main .to-left .child.one`).offset().left >= 40){
			i = 0
			$(".people .main .to-left").css({
				transform: `translatex(${i}px)`
			})
		}else{
			i += 356
			$(".people .main .to-left").css({
				transform: `translatex(${i}px)`
			})
		}
	}else if($(this).hasClass("right")){
		if($(`.people .main .to-left .child.eight`).offset().left - $(window).width() <= -300){
			i = 0
			$(".people .main .to-left").css({
				transform: `translatex(${i}px)`
			})
		}else{
			i = i - 356
			$(".people .main .to-left").css({
				transform: `translatex(${i}px)`
			})
		}
	}
})
/*arrow people*/
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