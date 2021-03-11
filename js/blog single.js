/*
templete-name: meiplay;
The owner of the templete: ahmed samy;
Template-version: 1.0.0;
Date created: 14/2/2020
*/
/*logo*/
$(".logo img").click(function () {
	window.open("../index.html","_self")
})
/*logo*/
/*nav*/
$(document).scroll(function() {
	if($("nav").offset().top >= 100) {
		$("nav").css({
			background: "var(--cbk)",
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
			background: "var(--cbk)",
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