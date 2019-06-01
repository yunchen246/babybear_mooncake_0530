
$(document).ready(function() {


   $('.kind-all-btn').on('click', function(event) {
   	event.preventDefault();
   	/* Act on the event */
   	 	$('.kind-all-open').slideToggle();
   });

   $('.kind-sale-btn').on('click', function(event) {
   	event.preventDefault();
   	/* Act on the event */
   		$('.kind-sale-open').slideToggle();
   });

   $('.kind-mon-btn').on('click', function(event) {
   	event.preventDefault();
   	/* Act on the event */
   		$('.kind-mon-open').slideToggle();
   });

    $('.kind-baby-btn').on('click', function(event) {
   	event.preventDefault();
   	/* Act on the event */
   		$('.kind-baby-open').slideToggle();
   });

});