jQuery(document).ready(function($) {
//--

	$('.slwUp').addClass("invisible").viewportChecker({
		    classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'visible motion-slwUp', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});

	$('.fstSpin').addClass("invisible").viewportChecker({
		    classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
		    classToAdd: 'visible motion-fstSpin', // Class to add to the elements when they are visible,
		    removeClassAfterAnimation: false, // Remove added classes after animation has finished
		   	repeat: true, // Add the possibility to remove the class if the elements are not visible
		    scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
	});

//--
});