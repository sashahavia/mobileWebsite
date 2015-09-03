$(document).ready(function(){
	var isMobile = $(window).width <= 952; 
	var mobile = 0;

	$("#mob").click(function(){
		$("#mobileNav").hide();
		$("nav ul li").show();
		mobile++;
		console.log("mobile" + mobile);
	});
	
	
	$(window).resize(function(){
		//console.log($(window).width());
		if (mobile == 1) {
			if ($(window).width() >= 985) {
				//console.log(isMobile);
					$("nav ul li").css({
						"border": "solid 0px white",
						"display": "inline-block",
						"width": "auto",
						"margin-left": "20px"
					});
					console.log("This > than 952 " + mobile);
					$("#mobileNav").hide();
					mobile = 0;
				//($(window).width() <= 952) 
			}
			if ($(window).width() <= 985) {
				$("nav ul li").css({
					"border-bottom": "solid 1px black",
						"display": "none",
						"width": "100%",
						"margin-left": "0px"
				});
				console.log("This < than 952 " + mobile);
				$("#mobileNav").show();
			}
		}else if(mobile == 0){
			console.log("This mobile 0 " + mobile);
			if ($(window).width() >= 985) {
				//console.log(isMobile);
					$("nav ul li").css({
						"border": "solid 0px white",
						"display": "inline-block",
						"width": "auto",
						"margin-left": "20px"
					});
					console.log("This > than 952 " + mobile);
					$("#mobileNav").hide();
					mobile = 0;
				//($(window).width() <= 952) 
			}
			if ($(window).width() <= 985) {
				$("nav ul li").css({
					"border-bottom": "solid 1px black",
						"display": "none",
						"width": "100%",
						"margin-left": "0px"
				});
				console.log("This < than 952 " + mobile);
				$("#mobileNav").show();
			}
			
		}

	});

	
});