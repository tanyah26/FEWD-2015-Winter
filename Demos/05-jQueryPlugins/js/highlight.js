
(function($) {	//defining an anonymous function - ie one that doesnt have a name and can only be used there, once. And we're making $ parameter available inside this function, and making it act as a reference to the jQuery library

	// onclick function below used to be in main.js, but we moved it here in its own file, so that can reference it/link to it from any other webpage easily, without having to rewrite the code each time on each page.
	function onClick(e) {  	// first parameter of an event handler will be (e) (or 'event, or whatever you call it'). But has to be an event.
		var $target = $(e.target);	// the event (e) is a JS object that contains lots of data. So here we are defining the variable e (?)
			$sibs = $target.siblings(); // Siblings are elements within the same group, e.g. in this case, list items within a list

		$sibs.removeClass("highlight") // Will ensure that once you click on a new element, the previously highlighted one wont be highlighted anymore, and only the one you just clicked remains highlighted.

		$target.addClass("highlight")  // Will add a class. Specifically references the class defined in in HTML called 'highlight', which highlights the text you clck on
	}

	$.fn.highlight = function() { //defining a namespace of highlight, and making it equal to a function. 
		$(this).on("click", onClick); // 'this' always references the function. Wrapping it in a jquery query to make sure jquery is always available. .on is a jquery function that activates an event - in this case the "click". The Click will then run the function/handler 'onClick'

	}

})(jQuery); //When we're running this function, we're passing it in jQuery.




		
