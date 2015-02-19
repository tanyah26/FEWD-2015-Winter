var $display;	//

$(document).ready(function() {	// document.ready is saying when doc loaded HTML and is ready to do functions, then do the thing that's in the brackets. Function part is just something you have to memorize.
	$display = $(".display");	// Giving display a value of .display. Put in ("") because referencing a class from HTML.

	$(".digit, .operator").on("click", onButtonPress); // When user clicks on digit or operaor class element, will run the onButtonPress function

	$(".clear").on("click", ClearTotal)

	$(".equals").on("click", EvaluateInput) // When clicking on equals sign, will run the EvaluateInput function

});

// React to button press
function onButtonPress(e) { // e is just referencing whatever was clicked in this instance
	var $button = $(e.currentTarget), //assigning the var button to whatever was just clicked. currentTarget is a jquery function (need to remember it) that looks for/determines the exact element you clicked on (e.g. button with number 3 on it, versus number 9)
		action = $button.data("action"), // look for data-action="..." .data is another jquery function. "action" is the "data-action" we defined in html
		value = $display.val(); // value is being assigned display. Empty brackets are empty because we've already globally assigned the variable to display (see line 1), so we dont NEED to redefine it. But we could it we wanted to (inside those brackets)
								// .val is a jquery function. Takes the value of your html element. So in this case, whatever is inside your button.

	if (value == 0) {	// == is a comparison. Seeing if the value is 0. If it's 0, assign value that is action.
		value = action;
	} else {
		value += action; // if the value isn't zero (e.g. on button 9, value isn't zero but 9), then take whatever the value is, and add it to zero. 
	}

	updateDisplay(value); // We're naming the function updateDisplay.  Giving it a value.
}

// Evaluate user input

function EvaluateInput() {
	try {		// putting code that might fail here (inside 'try'). So that we can tell the code that if it fails (e.g. if put ((7x+=, this is what we do as a backup. Catching an error so it won't happen.
		var $total = eval($display.val());	// Giving the variable the name 'total'. Then take display.val (defined above), and tries to evaluate it. Eval is a js thing you have to learn.
		$display.val($total) // displaying the total that has been evaluated in previous line, in the calculator screen.
	}
	catch(err) {
		$display.val("error")
	}

}

// Update display

function updateDisplay(value) {
	$display.val(value);	//Giving display a value 'value'
}

// Clear the current input

function ClearTotal() {
	$display.val(0)

}

