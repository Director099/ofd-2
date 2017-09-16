function Lalala() {
	$('.line-grey').each(function() {
		var BlockH = $(this).height();
		$(this).find('.img-setiing').css('height', BlockH + 40);
	});
}

$(document).ready(function() {
	Lalala();
	$("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

	$('.tovar-navigation .tab').click(function() {
		$('.tovar-navigation .tab').removeClass('active');
		$(this).addClass('active');
	});	
	$(window).resize(function() {
		Lalala();
	});
});

