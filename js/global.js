/*
templete-name: meiplay;
The owner of the templete: ahmed samy;
Template-version: 1.0.0;
Date created: 14/2/2020
*/
/*preventDefault*/
// window.oncontextmenu = function (e) {
//    e.preventDefault()
// }
// window.onkeydown = function (e) {
// 	if(e.keyCode === 17){
// 		addEventListener("keydown", (x) => {
// 			if(x.keyCode === 85){
// 				x.preventDefault()
// 			}else if(x.keyCode === 16){
// 				addEventListener("keydown", (z) => {
// 					if(z.keyCode === 73){
// 						z.preventDefault()
// 					}
// 				})
// 			}else if(x.keyCode === 83){
// 				x.preventDefault()
// 			}
// 		})
// 	}
// 	if(e.keyCode === 123){
// 		e.preventDefault()
// 	}
// }
/*preventDefault*/
/*loader*/
$(window).ready(function () {
    $(".loading").fadeOut(400,function() {
        $(".loader").addClass("stop")
    });
    
})
/*loader*/

/*to-up*/
$(document).scroll(function () {
	if($(".to-up").offset().top >= 800){
		$(".to-up").addClass("show")
	}else{
        $(".to-up").removeClass("show")
    }
})

$(document).ready(function () {
	if($(".to-up").offset().top >= 800){
		$(".to-up").addClass("show")
	}else{
        $(".to-up").removeClass("show")
    }
})

$(".to-up").click(function () {
    $("html ,body").animate({
        scrollTop: 0
    },700)
})
/*to-up*/

/*themes*/
let alllink = Array.from(document.querySelectorAll(`link[href]`))
let themes = alllink.filter(function (ele) {
    return ele.getAttribute("href").includes("theme")
})
$(".themes .icon").click(function () {
    $(".themes").toggleClass("show")
})
$(".themes .color").click(function () {
	let themeactive = $(".themes .color.active").data("color")
	let theme = $(this).data("color")
	let datathis = $(this).data("this")
    sessionStorage.setItem("coloractive",themeactive)
    sessionStorage.setItem("color",theme)
	sessionStorage.setItem("this",datathis)
    $(".themes .color.active").removeClass("active");
    $(this).addClass("active");
    let href = $(themes[0]).attr("href").replace(sessionStorage.getItem("coloractive"),sessionStorage.getItem("color"))
    $(themes[0]).attr("href",href)
})
$("document").ready(function () {
    if(sessionStorage.getItem("color") === null ||sessionStorage.getItem("this") === null ||sessionStorage.getItem("coloractive") === null){
        sessionStorage.setItem("color","theme")
        sessionStorage.setItem("this",".one")
        sessionStorage.setItem("coloractive","theme")
        $(`.themes .color${sessionStorage.getItem("this")}`).addClass("active");
        let href = $(themes[0]).attr("href").replace(sessionStorage.getItem("coloractive"),sessionStorage.getItem("color"))
        $(themes[0]).attr("href",href)
    }
    else{
        let href = $(themes[0]).attr("href").replace("theme",sessionStorage.getItem("color"))
		$(themes[0]).attr("href",href);
		$(".themes .color.active").removeClass("active");
		$(`.themes .color${sessionStorage.getItem("this")}`).addClass("active");
    }
})
/*themes*/

/*search*/
$("header .menu-search .icon-search").click(function () {
	$("header nav .menu-search .overlay").fadeIn()
})
$("header nav .menu-search .overlay .off").click(function () {
	$("header nav .menu-search .overlay").fadeOut()
})
/*search*/

/*menu*/
$("header .menu-search .icon-menu").click(function () {
	$("header nav .menu-search .menu").fadeIn()
})
$("header nav .menu-search .menu .off").click(function () {
	$("header nav .menu-search .menu").fadeOut()
})
$("header nav .menu-search .menu ul .drop-menu").click(function () {
    let data = $(this).data("fade");
	if($(this).hasClass("active")){
		$(this).removeClass("active")
		$(`${data}`).slideUp()
		$(this).siblings().css({
			opacity: 1,
			visibility: "visible"
		})
	}else{
		$(this).addClass("active")
		$(`${data}`).slideDown()
		$(this).siblings().css({
			opacity: 0,
			visibility: "hidden"
		})
	}
})
/*menu*/