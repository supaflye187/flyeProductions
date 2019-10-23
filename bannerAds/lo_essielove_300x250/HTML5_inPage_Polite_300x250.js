// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
//var container;
var bgExit;
var ctaBtn;
var rollOverTxt;
var hitArea_01;
var hitArea_02;
var hitArea_03;
var hitArea_04;
var bottle_01;
var bottle_02;
var bottle_03;
var bottle_04;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	bgExit = document.getElementById('background_exit_dc');
	ctaBtn = document.getElementById('ctaBtn');
	rollOverTxt = document.getElementById('txt_rollOver');

    hitArea_01 = document.getElementById('hitArea_01');
	hitArea_02 = document.getElementById('hitArea_02');
	hitArea_03 = document.getElementById('hitArea_03');
	hitArea_04 = document.getElementById('hitArea_04');

	bottle_01 = document.getElementById('bottle_01');
	bottle_02 = document.getElementById('bottle_02');
	bottle_03 = document.getElementById('bottle_03');
	bottle_04 = document.getElementById('bottle_04');

	//Bring in listeners i.e. if a user clicks or rollovers
	addListeners();
}

//Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', hitArea_clickThrough, false);
	//HitArea 1 Events
	hitArea_01.addEventListener('mouseover', hitArea_01_MouseOver, false);
	hitArea_01.addEventListener('mouseout', hitArea_01_MouseOut, false);
	hitArea_01.addEventListener('click', hitArea_clickThrough, false);

	//HitArea 2 Events
	hitArea_02.addEventListener('mouseover', hitArea_02_MouseOver, false);
	hitArea_02.addEventListener('mouseout', hitArea_02_MouseOut, false);
	hitArea_02.addEventListener('click', hitArea_clickThrough, false);

	//HitArea 3 Events
	hitArea_03.addEventListener('mouseover', hitArea_03_MouseOver, false);
	hitArea_03.addEventListener('mouseout', hitArea_03_MouseOut, false);
	hitArea_03.addEventListener('click', hitArea_clickThrough, false);

	//HitArea 4 Events
	hitArea_04.addEventListener('mouseover', hitArea_04_MouseOver, false);
	hitArea_04.addEventListener('mouseout', hitArea_04_MouseOut, false);
	hitArea_04.addEventListener('click', hitArea_clickThrough, false);

	//Cta Button Interact
	ctaBtn.addEventListener('mouseover', ctaBtn_Over, false);
	ctaBtn.addEventListener('mouseout', ctaBtn_Out, false);
	ctaBtn.addEventListener('click', hitArea_clickThrough, false);

}

hitArea_01_MouseOver = function() {
	//MouseOver Function
        $("#bottle_01").animate({opacity: 1}, 100);
        $("#bottle_02").animate({opacity: 0}, 100);
        $("#bottle_03").animate({opacity: 0}, 100);
        $("#bottle_04").animate({opacity: 0}, 100);
        rollOverTxt.setAttribute("style","opacity:0"); 
}

hitArea_02_MouseOver = function() {
	//MouseOver Function
        $("#bottle_01").animate({opacity: 0}, 100);
        $("#bottle_02").animate({opacity: 1}, 100);
        $("#bottle_03").animate({opacity: 0}, 100);
        $("#bottle_04").animate({opacity: 0}, 100);
        rollOverTxt.setAttribute("style","opacity:0");  
}

hitArea_03_MouseOver = function() {
	//MouseOver Function
        $("#bottle_01").animate({opacity: 0}, 100);
        $("#bottle_02").animate({opacity: 0}, 100);
        $("#bottle_03").animate({opacity: 1}, 100);
        $("#bottle_04").animate({opacity: 0}, 100);
        rollOverTxt.setAttribute("style","opacity:0");  
}

hitArea_04_MouseOver = function() {
	//MouseOver Function
        $("#bottle_01").animate({opacity: 0}, 100);
        $("#bottle_02").animate({opacity: 0}, 100);
        $("#bottle_03").animate({opacity: 0}, 100);
        $("#bottle_04").animate({opacity: 1}, 100);
        rollOverTxt.setAttribute("style","opacity:0");  
}


hitArea_01_MouseOut = function(e) {
	//MouseOut Function
		$("#bottle_01").animate({opacity: 0}, 100);
        $("#bottle_02").animate({opacity: 0}, 100);
        $("#bottle_03").animate({opacity: 0}, 100);
        $("#bottle_04").animate({opacity: 0}, 100);
	rollOverTxt.setAttribute("style","opacity:1");
}

hitArea_02_MouseOut = function(e) {
	//MouseOut Function
		$("#bottle_01").animate({opacity: 0}, 100);
        $("#bottle_02").animate({opacity: 0}, 100);
        $("#bottle_03").animate({opacity: 0}, 100);
        $("#bottle_04").animate({opacity: 0}, 100);
	rollOverTxt.setAttribute("style","opacity:1");
}

hitArea_03_MouseOut = function(e) {
	//MouseOut Function
		$("#bottle_01").animate({opacity: 0}, 100);
        $("#bottle_02").animate({opacity: 0}, 100);
        $("#bottle_03").animate({opacity: 0}, 100);
        $("#bottle_04").animate({opacity: 0}, 100);
	rollOverTxt.setAttribute("style","opacity:1");
}

hitArea_04_MouseOut = function(e) {
	//MouseOut Function
		$("#bottle_01").animate({opacity: 0}, 100);
        $("#bottle_02").animate({opacity: 0}, 100);
        $("#bottle_03").animate({opacity: 0}, 100);
        $("#bottle_04").animate({opacity: 0}, 100);
	rollOverTxt.setAttribute("style","opacity:1");
}

hitArea_clickThrough = function () {
	//Call Exits
	Enabler.exit('HTML5_Background_Clickthrough');
}

ctaBtn_Over = function () {
	$("#ctaBtn").animate({top:'200px'}, 300);
}

ctaBtn_Out = function () {
	$("#ctaBtn").animate({top:'205px'}, 300);
}

init();




