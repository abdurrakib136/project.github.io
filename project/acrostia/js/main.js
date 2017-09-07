$(document).ready(function(){
	
	$(window).load(function(){
		
		$(".loader").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
	$('.tab_list_item').mixItUp();
	
	  $('.carousel').carousel({
		interval: 6000
    });
	
	 $('.navbar').sticky();
	
	$('body').scrollspy({ target: '#collapse_menu' });
	
	$('#collapse_menu ul li>a').smoothScroll();
	$(".scroltop").fadeOut();
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100){
			$(".scroltop").fadeIn();
			
		}else{
			$(".scroltop").fadeOut();
		}
		
	});
	$(".scroltop").click(function(){
		$("html, body").animate({scrollTop: 0}, 1000);
		return false;
	});

	
});

