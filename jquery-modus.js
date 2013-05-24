/**
 * jQuery Modus
 *
 * This is a reeeally lightweight jQuery modal window.
 *
 * Author: Mikita Stankiewicz
 * Version: 0.2
 */
;( function( $, window, document, undefined ) {
	/**
	 * Constructor
	 */
	var Modus = function() {
		// ehm..
	};
	
	/**
	 * Prototype
	 */
	Modus.prototype = {
		obj: null,
		
		/**
		 * Init
		 */
		init: function() {
			if( 0 == $( '#modus' ).length )
				return;
			
			var self = this;
			
			$( window ).resize( function() {
				$( '#modus .modus-window' ).css( {
					left: $( this ).width() / 2 - $( '#modus .modus-window' ).width() / 2 + 'px',
					top: $( this ).height() / 2 - $( '#modus .modus-window' ).height() / 2 + 'px'
				} );
			} ).trigger( 'resize' ).keydown( function( e ) {
				if( 27 == e.keyCode )
					self.close();
			} );
			
			$( '#modus .dismiss-modus, #modus.modus-overlay' ).click( function( e ) {
				e.preventDefault();
				
				self.close();
			} );
			
			$( '#modus .modus-window' ).click( function( e ) {
				e.stopPropagation();
			} );
		},
		
		/**
		 * Open
		 *
		 * @param string content
		 */
		open: function( content ) {
			if( $( '#modus' ).length )
				$( '#modus' ).remove();
			
			$( 'body' ).append( '<div id="modus" class="modus-overlay"><div class="modus-window"><div class="modus-wrapper"><a class="dismiss-modus" href="#"></a><div class="modus-content">' + content + '</div></div></div></div>' );
			
			this.init();
		},
		
		/**
		 * Close
		 */
		close: function() {
			// so far :P
			$( '#modus' ).remove();
		}
	};
	
	/**
	 * Plugin
	 * I could make it even more simplier...
	 */
	$.fn.modus = function( content ) {
		var m = new Modus();
		
		if( 'undefined' != typeof content )
			m.open( content );
		
		return m;
	};
} )( jQuery, window, document );