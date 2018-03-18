$( document ).ready(function() {
	$( ".nav__links" ).hide();
	$( ".hamburger" ).click(function() { 
		$( ".nav__links" ).toggle( "fast" ); 
	});
});