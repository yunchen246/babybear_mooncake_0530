$(document).ready(function() {
	$('#gototop a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});
});