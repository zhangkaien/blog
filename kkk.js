// document.onload = function(){

// }
// alert(window.innerWidth);
var div2Width;

$(document).ready(
	function(){
		if(window.screen.availWidth < 900){

			div2Width = 230;
			var bodyWidth = $(document).width();
			var bodyHeight = $(window).height();
			$("#leftImage,#rightImage").css("display","none");
			$("#div1,#div3").width((bodyWidth-div2Width)/2);
			$("#div2").width(div2Width);

			$("#div33 ul li,#div11 ul li,#div11,#div33,#content,#content-wrap").width(bodyWidth);
			$("#div11 ul,#div33 ul,#content-scroll").width(bodyWidth+20);
			$("#div11,#div33,#content-wrap #content-scroll,#content").height(bodyHeight-70);
			

			// $("#div11,#div33,#div1,#div3,#div2").animate({
			// 	opacity:1
			// },500,function(){
			// 	$("html").css("backgroundColor","rgb(192,185,170)");
			// });
			$("#content-wrap").animate({
			top:"70px"
		},550,function(){
			$("html").css("backgroundColor","rgb(192,185,170)");
		});
			$("#div2").css("margin-left","-"+(div2Width/2)+"px");
		$("#div2").animate({
			top:"0px",
			opacity:1
		},500);
		$("#div1,#div3").animate({
			
			top:"0px",
			opacity:1
		},500);
		$("#div11,#div33").css("opacity","1");
			$("#div1").click(function(){
				$("#content-wrap").css("display","none");
				$("#div11").css("display","block");
				$("#div33").css("display","none");

			});
			$("#div11").click(function(){
				$("#div11").css("display","none");
				$("#content-wrap").css("display","block");
			});

			$("#div3").click(function(){
				$("#content-wrap").css("display","none");
				$("#div33").css("display","block");
				$("#div11").css("display","none");
				$("#div3").width(bodyWidth);
				$("#div3 input").width(200);
				$("#div1,#div2").css("display","none");
				$("#div3 input").focus();
			});
			$("#div33").click(function(){
				$("#div33").css("display","none");
				$("#content-wrap").css("display","block");
				$("#div3 input").blur();
				$("#div3").width((bodyWidth-div2Width)/2);
				$("#div3 input").width(0);
				$("#div1,#div2").css("display","block");

			});

			$(window).resize(function(){
				var bodyWidth = $(document).width();
			var bodyHeight = $(window).height();
			$("#div2").width(div2Width);
			$("#div11,#div33,#leftImage,#rightImage").css("display","none");
			$("#div1,#div3").width((bodyWidth-div2Width)/2);
			$("#div33 ul li,#div11 ul li,#div11,#div33,#content,#comment-wrap").width(bodyWidth);
			$("#div11 ul,#div33 ul,#content-scroll").width(bodyWidth+15);
			$("#div11,#div33,#content-wrap #content-scroll,#content").height(bodyHeight);
			});

		}else{
			div2Width = 800;
			$("#div2").width(800);
	var bodyWidth = $(document).width();
	var bodyHeight = $(window).height();
	$("#share-wrap,#comment-wrap,#div33 ul li,#rightImage img,#leftImage img,#div11 ul li,#div33,#div1,#div3,#div11").width((bodyWidth-div2Width)/2);
	$("#div33 ul,#div11 ul").width((bodyWidth-div2Width)/2+20);
	$("#div3 input").width((bodyWidth-div2Width)/3.5);
	$("#div11 ul,#div33 ul,#div22,#div11,#div33,#share-wrap,#content,#comment-wrap,#content-scroll,#content-wrap,#rightImage img,#leftImage img").height(bodyHeight-70);
	$("#content-wrap").width(bodyWidth);
	// if ($("#div1").width() < 150 ) {
	// 	$("#div1,#div3").text("");
	// }
	// if ($("#div1").width() >= 150) {
	// 	$("#div1").text("目录");
	// 	$("#div3").text("搜索");
	// }

		$("#content-wrap").animate({
			top:"70px"
		},550,function(){
			$("html").css("backgroundColor","rgb(192,185,170)");
		});
		$("#div2").animate({
			top:"0px",
			opacity:1
		},500);
		$("#div1,#div3").animate({
			
			top:"0px",
			opacity:1
		},500);
		$("#leftImage").animate({
			left:"0px"
		},850);
		$("#rightImage").animate({
			right:"0px"
		},850);

		$("#div1").mouseover(function(){
			$("#leftImage").css("display","none");
			$("#div1").animate({
				opacity:0.65
			},200);
			
			$("#div11").css("display","block");
			$("#div11").animate({
				opacity:0.65
			},200);
		});

		$("#div2").mouseover(function(){
			$("#div22").css("display","inline-block");
			$("#div2").animate({
				opacity:0.7
			},300);
			$("#div22").animate({
				opacity:0.7,
			},200);
			$(".content-h-font").css("display","none");
			$(".content-p-font").css("display","none");
		});


		$("#div1").mouseout(function(event){
		if(event.clientX >= $("#div11").width()){
			$("#div1").animate({
				opacity:1
			},200);
			$("#div11").animate({
				opacity:0
			},200);
			$("#div11").css("display","none");
			$("#leftImage").css("display","block");
		}
	});

		$("#div11").mouseout(function(event){
			if(event.clientX >= $("#div11").width()){
				$("#div1").animate({
				opacity:1
			},200);
			$("#div11").animate({
				opacity:0
			},200);
			$("#div11").css("display","none");
			$("#leftImage").css("display","block");
			}
			
		});

		$("#div2").mouseout(function(){
		$("#div2").animate({
			opacity:1
		},200);
		$("#div22").animate({
			opacity:0
		},200);
		$("#div22").css("display","none");
		// window.location.reload(true);
		$(".content-h-font").css("display","block");
		$(".content-p-font").css("display","block");
	});

		$("#div3").mouseover(function(){
			$("#div3 input").focus();
			$("#div3").animate({
				opacity:0.7
			},200);
			$("#div33").css("display","block");
			$("#div33").animate({
				opacity:0.7
			},200);
			$("#div3 input").css("backgroundColor","#fff");
			$("#rightImage").css("display","none");
		});


		$("#div3").mouseout(function(event){
		// alert(event.clientX + " " + ($("#div1").width()+div2Width));
		if(event.clientX <= ($("#div1").width()+div2Width)){
			$("#div3").animate({
			opacity:1
		},200);
			$("#div33").animate({
				opacity:0
			},200);
			$("#div33").css("display","none");
			$("#div3 input").blur();
			$("#div3 input").css("backgroundColor","#5aa");
			$("#rightImage").css("display","block");
		}
		
	});

		$("#div33").mouseout(function(){
			if(event.clientX <= ($("#div1").width()+div2Width)){
				$("#div33").animate({
				opacity:0
			},200);
			$("#div33").css("display","none");
			$("#div3").animate({
			opacity:1
		},200);
			$("#div3 input").blur();
			$("#div3 input").css("backgroundColor","#5aa");
			$("#rightImage").css("display","block");
			}
			
		});
		


		$(window).resize(function(){
			var bodyWidth = $("body").width();
			var bodyHeight = $(window).height();
		$("#div33 ul li,#rightImage,#leftImage,#share-wrap,#comment-wrap,#div11 ul li,#div33,#div11,#div3,#div1,#leftImage img,#rightImage img").width((bodyWidth-div2Width)/2);

	$("#div33 ul,#div11 ul").width((bodyWidth-div2Width)/2+20);
	
	$("#div3 input").width((bodyWidth-div2Width)/3.5);
	$("#div11 ul,#div33 ul,#div22,#div11,#div33,#share-wrap,#content,#comment-wrap,#content-scroll,#content-wrap,#leftImage img,#rightImage img").height(bodyHeight-70);
	$("#content-wrap").width(bodyWidth);

	// if ($("#div1").width() < 150 ) {
	// 	$("#div1,#div3").text("");
	// }
	// if ($("#div1").width() >= 150) {
	// 	$("#div1").text("目录");
	// 	$("#div3").text("搜索");
	// }
		});

		}
	

	});
