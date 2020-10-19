//This is where our ad interactivity code will live.

//this function runs on page load
window.onload = function (event){
	//here we store the cta button in a variable
	var cta = document.getElementById("cta");

/*	AdWords Exit: here we listen for CTA clicks and call ExitApi.exit()
	*/
	cta.addEventListener("click", ExitApi.exit);
	
//console.log("CLICKED");
}