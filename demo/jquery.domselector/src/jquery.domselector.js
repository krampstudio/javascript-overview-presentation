/**
 * jQuery Dom Selector plugin
 * Copyright (C) 2012  Bertrand CHEVRIER, KrampStudio
 * 
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/> 
 * 
 * @author <a href="mailto:chevrier.bertrand@gmail.com">Bertrand Chevrier</a>
 * @license http://www.gnu.org/licenses/gpl-3.0.txt
 * @version $version$
 * @requires jquery >= 1.7
 */
(function( $ ){
    "use strict";
    
	/**
	 * Enables you to select data using the DOM
	 * @class DomSelector
	 */
    var DomSelector = {
		/** Default options */
        _opts : {
            mode : 'once',	//
			selectedClass : 'selected'
        },
		
		/**
		 * Initialize the selection
		 * 
		 * @memberOf DomSelector
		 * @param {Object} options
		 * @param {String} [options.mode="once"] the selection mode in: once, normal, exclusive
		 * @param {String} [options.selectedClass="selected"] css class applied on selected element
		 */
		_init : function(options){
			$.extend(DomSelector._opts, options);
			var opts = DomSelector._opts,
				selectMode = function selection($elt, selectedClass){
					if(opts.mode === 'once') {
						$elt.addClass(selectedClass);
					} else {
						$elt.toggleClass(selectedClass);
					}
				},
				$elts = this;
			return this.each(function() {
                var $elt = $(this);
				$elt.on('click', function(event){
					event.preventDefault;
					if(opts.mode === 'exclusive'){
						$elts.removeClass(opts.selectedClass);
					}
					selectMode($(this), opts.selectedClass);
					
					//trigger the 'selection.domselector' Event
					$elt.trigger('selection.domselector', $elt.domSelector('getSelected'));
					return false;
				});
			});
		},
		/**
		 * Get the currently selected elements
		 * @return {Array|String} the selected data
		 */
		getSelected : function(){
			var opts = DomSelector._opts,
				selected = [];
            this.each(function() {
                var $elt = $(this);
                if($elt.hasClass(opts.selectedClass)){
					switch($elt.prop("tagName").toLowerCase()){
						case 'img':
							selected.push($elt.attr('src')); break;
						case 'a':
							selected.push($elt.attr('href')); break;
						default :
							selected.push($elt.text()); break;
					}
                }
            }); 
            
            return (selected.length === 1) ? selected[0] : selected;
		}
	};
		

	/**
	 * jQuery plugin wrapper for the DomSelector object
	 */
    $.fn.domSelector = function( method ) {        
        if ( DomSelector[method] ) {
            if(/^_/.test(method)){
                $.error( 'Trying to call a private method ' +  method + ' on jQuery.domSelector' );
			} else {
                return DomSelector[method].apply( this, Array.prototype.slice.call( arguments, 1 ));      
			}
        } else if ( typeof method === 'object' || ! method ) {
            return DomSelector._init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.domSelector' );
        }    
    };
})( jQuery );
