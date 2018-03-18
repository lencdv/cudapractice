$( document ).ready(function() {
	$( ".hamburger" ).click(function() { 
		$( ".nav__links--list").css( "flex-flow", "column nowrap" );
		$( ".nav__links--list").css( "align-items", "center" );
		$( ".nav__links" ).toggle( "slow" ); 
	});
});