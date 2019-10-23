// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var bgExit;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	bgExit = document.getElementById('background_exit_dc');
		
	//Setup Background Image (this can be done in CSS as well)
	//content.style.backgroundImage = "url("+Enabler.getUrl('DCRM_HTML5_inPageFloating_Polite_300x250.jpg')+")";
	
	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
	
	//Show Ad
	//container.style.display = "block";
	
}


//Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
	//hideBtn.addEventListener('click', closeButtonClickHandler, false);
	//showBtn.addEventListener('click', openButtonClickHandler, false);
}


bgExitHandler = function(e) {
	//Call Exits
	Enabler.exit('HTML5_Background_Clickthrough');
	//Enabler.closeCompanion();
}

init();




