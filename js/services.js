/*
templete-name: meiplay;
The owner of the templete: ahmed samy;
Template-version: 1.0.0;
Date created: 14/2/2020
*//*the functions*/
/*counter*/
function fun(ele,innerintpram,startpram,e) {
	$(document).on("scroll",function () {
		if(startpram >= e){
			return false
		}else if(startpram <= e){
			if(ele.offset().top - $(window).innerHeight() <= $(document).scrollTop()){
				let innerint = innerintpram;
				let start = startpram;
				let interval = setInterval(function () {
					ele.text(start)
					start = start + 1;
					if(start === innerint){
						clearInterval(interval);
						startpram = start
					}
				},.1)
			}
		}
	})
}
/*counter*/
/*the functions*/
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
/*services*/
$(".services .parent .parent-rotation .ser").click(function () {
    window.open("service detail.html","_self")
})
/*services*/
/*counter*/
fun($(".Counter .count.one h2"),8705,8505,8605);
fun($(".Counter .count.two h2"),480,280,380);
fun($(".Counter .count.three h2"),626,426,526);
fun($(".Counter .count.four h2"),9774,9574,9674);
/*counter*/