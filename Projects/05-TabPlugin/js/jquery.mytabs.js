
(function($) {

	$.fn.myTabs = function () {		// Exposing a function to jQuery. Making it available in jquery (?)
		return $(this).each(init);	//.each is a jquery function that applies something to each element in the jquery element. Init it short for initialize, and it's a function. So we're initializing each set of tabs independently. Then asking it to return the result of this expression (allows us to chain it to other stuff)
	};	

	function init() {	// Defining the function init
		var $tabs = $(this);

		$tabs.on("click", ".tab-nav .tab", onClick)	// Referencing the classes in the HTML doc.  All of the elements that are tab, inside the tab-nav. We want to assign events to those specifically, not all tabs.
			.addClass("mytabs");	// applying the class 'mytabs'.
	}

	function onClick(e) {
		var $target = $(e.target),
			$parent = $target.parents(".mytabs"),	// declaring a variable of parent and assigning it the value of mytabs (the html class)
			$sibs = $target.siblings(),	// didn't put a specific parameter (inside brackets), because we want all of the siblings to be grabbed.
			$content = $parent.find(".tab-content .tab"),	//looking for the nearest parent, then trying to find the elements of class tab inside the class tab-content
			id = $target.attr("href");	//referencing href in the html to activate the variable id (?). Referencing e.g. <a href="#one">. Taking the #one and storing it in id, so id represents it when being used.

		$sibs.removeClass("active");	// removing the class active from $sibs. Like this, when you click on another tab, it removes the other tabs. Because when you choose one tab, technically you're just asking it to show itself, and others to hide.
		$content.removeClass("active");

		$target.addClass("active");
		$content.filter(id).addClass("active");

	}

})(jQuery)
