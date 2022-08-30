var Animation = function() {
	var hFrom = $(window).scrollTop();
	var hTo = $(window).scrollTop() + ($(window).height() / 3);
	if ($(".int-fact-counters").offset().top > hFrom && $(".int-fact-counters").offset().top < hTo){
		//if ( $(".int-fact-counters").attr('data-spincrement') == 0) {
				//$(".int-fact-counters").attr('data-spincrement', 1);
				$('.fct-count span').delay(500).spincrement({
					thousandSeparator: "",
					duration: 3000
				});
		//}
	}
};
$(window).scroll(function() {
	Animation();
});
Animation();