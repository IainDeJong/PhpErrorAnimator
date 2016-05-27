//Adds some nice sliding animation to the PHP Debug Errors you get during programming. Customize to your liking. Don't forget to include JQuery and animate.css to your site header.

$(document).ready(function() { 
	$(".xdebug-error:even").addClass("animated slideInRight");
	$(".xdebug-error:odd").addClass("animated slideInLeft");
	});
