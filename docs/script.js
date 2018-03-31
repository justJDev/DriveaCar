(function( $ ) {

	$(function() {

		// Elementy HTML a BODY
		var body = $('body,html');
		// Element menu
		var menu = $('#listafixed');

		// Všechny odkazy, kterým atribut href začíná znakem #
		$('a[href^="#"]').click(function(event) {
			// Element, kam odkazuje kotva
			var element = $(this.hash);
			// Pokud neexistuje, neprovedeme nic
			if (!element.length) {
				return false;
			}

			// Zastavíme defaultní operaci - přesměrování na kotvu
			event.preventDefault();
			// Scrollujeme stránku na daný element
			body.animate({
				scrollTop: element.offset().top-menu.height()
			}, 500);
		});

	});

})( jQuery );