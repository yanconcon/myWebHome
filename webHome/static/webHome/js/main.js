$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //回到顶部
    $( "#toTop").click( function () {
        $( "html,body").animate({ "scrollTop" : 0 }, 1000);
    });
    //回到底部
    var windowHeight = parseInt($("body").css("height" ));//整个页面的高度
    $( "#toBottom").click(function () {
        $( "html,body").animate({ "scrollTop" : windowHeight }, 1000);
    });

});




