$(function(){
	$(".buy").click(function(){
		$(".tip").slideDown(300);
		$(".mask").show();
	});
	$(".tip").click(function(){
		$(".tip").slideUp(300);
		$(".mask").hide();
	})
	$(".mask").click(function(){
		$(".tip").slideUp(300);
		$(".mask").hide();
	})
})
