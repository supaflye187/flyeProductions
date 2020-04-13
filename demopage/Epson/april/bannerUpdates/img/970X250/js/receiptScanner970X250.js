// JavaScript Document
window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){return setTimeout(f, 1000/60)}

window.cancelAnimationFrame = window.cancelAnimationFrame
                              || window.mozCancelAnimationFrame
                              || function(requestID){clearTimeout(requestID)} //fall back

var init = false;
var bannerWidth = 2000;
var bannerHeight = 250;
var maxReceipts = 50;
var receipts;
var receiptsLength;


function politeInit(){
	loadReceipts();
	document.getElementById("01-need").style.opacity = "1.0";
	document.getElementById("01-receipt").style.opacity = "1.0";
	document.getElementById("01-relief").style.opacity = "1.0";
	
}
//document.getElementById("01-need").addEventListener("transitionend", loadReceipts, false);
///////////    SCENE ONE      /////////////////
var scatterReceipt = '<svg id = "receipt1" class = "overlap receipt objectShadow" viewBox="0 0 80 196"><image xlink:href="images/01-receipt.jpg" clip-path="url(#00-receipt)" width="80" height="196" /></svg>';

var scatterReceiptHTML = "";
function loadReceipts(){
	if(!init){
		for(var i = 0; i < maxReceipts; i++){
			document.getElementById("scatteredReceipts").innerHTML += scatterReceipt;
			scatterReceiptHTML.innerHTML += scatterReceipt;
			if((i+1) == maxReceipts){
				scatterReceiptHTML = scatterReceipt;
				scatterReceipts();
			}
		}
	}
	init = true;
}

function scatterReceipts(){
	receipts = document.getElementsByClassName("receipt");
	receiptsLength = receipts.length;
	requestNum = (receipts.length-1);
	var receiptX;
	var receiptY;
	var receiptRotation;
	for (var i = 0; i < receipts.length; i++) {
		var receiptX = (Math.floor(Math.random() * bannerWidth)/2);
		var receiptY = (Math.floor(Math.random() * (bannerHeight)/2)-40);
		var receiptRotation = Math.floor(Math.random() * 360);
		receipts.item(i).style.transform = "translate("+receiptX+"px, "+receiptY+"px) rotate("+receiptRotation+"deg)";
		receipts.item(i).style.transition = "all 0.15s ease-in-out";
		if((i+1) == maxReceipts){
			document.getElementById("white-back").style.opacity = "0.0";
		}
	}
}
document.getElementById("white-back").addEventListener("transitionend", blowAway, false);

function blowAway(){
	requestframeref = requestAnimationFrame(blowReceiptsAway);
	document.getElementById("shaq-white-back").style.opacity = "0.0";
}


var requestframeref;
var oldTime = 0;
var requestNum = 0;
var animationInt = 48;
var titleNum = 0;

function blowReceiptsAway(timestamp){
	if(oldTime == 0){
		oldTime = timestamp;
	}
	
	//document.getElementById("01-shaq-blow").style.transform = "translate(" + (Math.floor(Math.random() * 3) + "px,2px)";
	var jitterX = Math.floor(Math.random() * 3);
	var jitterY = Math.floor(Math.random() * 3);
	document.getElementById("shaq-blower").style.transform = "translate(" + jitterX + "px," + jitterY + "px)";
	
	if(timestamp > (oldTime + animationInt)){
	
		oldTime = 0;

		requestNum--;
		if(requestNum == -14){
			cancelAnimationFrame(requestframeref);
			//move shaq off screen
			document.getElementById("shaq-blow").style.transition = "all 0.35s ease-in-out";
			//document.getElementById("shaq-blow").style.transform = "translate(300px, 0px)";
			document.getElementById("shaq-blow").style.opacity = "0.0";
			document.getElementById("shaq-blower").style.opacity = "0.0";
			
			//document.getElementById("shaq-blow").style.transform = "rotateX(-90deg)";
			
			//document.getElementById("better-title").style.transition = "all 0.05s ease-in-out";
			//document.getElementById("better-title").style.transform = "translate(0px, -164px)";// rotate(-33deg)
			//set animation for betterway
			animationInt = 2000;
			requestframeref = requestAnimationFrame(betterWayJitter);
			
		} else {
			requestframeref = requestAnimationFrame(blowReceiptsAway);
		}
		
	} else {
		
		//console.log("blow away: " + requestNum + "timestamp: " + timestamp + " and OLD TIME plus 1250: " + (oldTime + animationInt));
		if(requestNum > -1){
			var receiptX = Math.floor(Math.random() * bannerWidth);
			var receiptY = Math.floor(Math.random() * bannerHeight);
			var receiptRotation = Math.floor(Math.random() * 720);

			receipts.item(requestNum).style.transform = "translate("+receiptX+"px, "+receiptY+"px) rotate("+receiptRotation+"deg) scale(4.0)";
			receipts.item(requestNum).style.opacity = "0.0";

			//blow apart title

			if(titleNum == 1){
				document.getElementById("01-need").style.transform = "translate("+receiptX+"px, "+receiptY+"px) rotate("+receiptRotation+"deg) scale(4.0)";
				document.getElementById("01-need").style.opacity = "0.0";
			} else if(titleNum == 2){
				document.getElementById("01-receipt").style.transform = "translate("+receiptX+"px, "+receiptY+"px) rotate("+receiptRotation+"deg) scale(4.0)";
				document.getElementById("01-receipt").style.opacity = "0.0";
			} else if(titleNum == 3){
				document.getElementById("01-relief").style.transform = "translate("+receiptX+"px, "+receiptY+"px) rotate("+receiptRotation+"deg) scale(4.0)";
				document.getElementById("01-relief").style.opacity = "0.0";
			}
		}

		requestframeref = requestAnimationFrame(blowReceiptsAway);
		titleNum = titleNum+1;
		
	}
	
}
//document.getElementById("rightArm").addEventListener("transitionend", shakeCartridge, false);
///////////    SCENE ONE      /////////////////


/// SCENE TWO
var betterTitleOpacity = 0;
function betterWayJitter(timestamp){
	if(oldTime == 0){
		oldTime = timestamp;
	}
	
	//console.log("TIMESTAMP: "+ timestamp + " TARGET: " + (oldTime + animationInt));
	if(timestamp > (oldTime + animationInt)){
//if(1 == "stop"){
		cancelAnimationFrame(requestframeref);
		
		
		document.getElementById("receipt-scanner-container").style.opacity = "1.0";
		
		document.getElementById("shaq-better-way").style.transition = "all 0.35s ease-in-out";
		document.getElementById("shaq-better-way").style.transform = "translate(0px, 290px)";
		//document.getElementById("shaq-better-way-blower").style.transform = "translate(0px, 290px)";
		document.getElementById("shaq-better-way").style.opacity = "0.0";
		
		document.getElementById("better-title").style.transition = "all 0.35s ease-in-out";
		document.getElementById("better-title").style.transform = "translate(200px, 290px)";
		document.getElementById("better-title").style.opacity = "0.0";
document.getElementById("better-title").addEventListener("transitionend", animateTitlesThree, false);
		
		//animated the receipt 
		//document.getElementById("scanner-receipt-motion").style.top = "80px";
		//document.getElementById("scanner-receipt-motion").style.transform  = "translate(-4px, 450px) scale(0.55)";
		
		document.getElementById("scanner-receipt-motion").style.transform = "translate(57px, 80px) scale(0.55)";
		
		//transform: translate(-4px, 329px) scale(0.55);
		
		
		//document.getElementById("scanner-receipt-motion").style.transform = "translate(83px, 76px) scale(0.7)";
		
setTimeout(stressGoesAway, 5250);
		
	} else {
		//console.log("jitter");
		
		var jitterX = Math.floor(Math.random() * 2);
		var jitterY = Math.floor(Math.random() * 1);
		//CANCEL BLOWER JITTER  :(  document.getElementById("shaq-better-way-blower").style.transform = "translate(" + jitterX + "px," + jitterY + "px)";
		
		//document.getElementById("better-title").style.transform = "translate(0px, 0px) rotate(-33deg)";
		betterTitleOpacity = (betterTitleOpacity + 5);
		//console.log("betterTitleOpacity: " + betterTitleOpacity);
		if(betterTitleOpacity<100){
			document.getElementById("better-title").style.opacity = "0."+betterTitleOpacity;
		}
		
		//DISABLE  //  document.getElementById("better-title").style.transform = "translate(-" + jitterY + "px,-" + jitterX + "px) rotate(-33deg)";
		requestframeref = requestAnimationFrame(betterWayJitter);
	}
}


function animateTitlesThree(){
	document.getElementById("epsonTitle").style.opacity = "1.0";
	setTimeout(animateReceiptScannersTitle, 500);
}

function animateReceiptScannersTitle(){
	document.getElementById("receiptScannersTitle").style.opacity = "1.0";
	setTimeout(receiptsGoIn, 3000);
}

function receiptsGoIn(){
	document.getElementById("epsonTitle").style.top = "-640px";
	document.getElementById("receiptScannersTitle").style.top = "-640px";
	
	document.getElementById("receiptsGoInTitle").style.opacity = "1.0";
	document.getElementById("receiptsGoInTitle").style.top = "10px";
	
	document.getElementById("scanner-receipt-motion").style.transition = "all 0.25s ease-in-out";
	//document.getElementById("scanner-receipt-motion").style.transform = "translate(10px, 170px) scale(0.45)";
	
	document.getElementById("scanner-receipt-motion").style.transform = "translate(528px, -40px) scale(0.6)";
	   // transform: translate(28px, -69px) scale(0.22);
	
	//document.getElementById("scanner-receipt-motion").style.transform = "transform: translate(-4px, 329px) scale(0.55)";

	var receiptScannerEle = document.getElementsByClassName("receipt-scanner");
	for (var i = 0; i < receiptScannerEle.length; i++) {
	   //receiptScannerEle[i].style.transform = "translate(17px, 238px) scale(1.0)";
		receiptScannerEle[i].style.transform = "translate(532px, 49px) scale(1.3)";
	}
	
	document.getElementById("shaq-receipt-scanner").style.opacity = "0.0";
	document.getElementById("shaq-receipt-scanner-forearm").style.opacity = "0.0";
	//document.getElementById("shaq-receipt-scanner-smiles").style.opacity = "0.0";

	setTimeout(stressGoesAway, 1000);
	
	
//DISABLE 160X600  document.getElementById("shaq-receipt-scanner-smiles").style.opacity = "1.0";
	
	//document.getElementById("scanner-receipt-motion").addEventListener("transitionend", stressGoesAway, false);
	
}

function stressGoesAway(){
	document.getElementById("scanner-receipt-motion").style.transition = "all 5.25s ease-in-out";
	document.getElementById("scanner-receipt-motion").style.transform = "translate(528px, 40px) scale(0.6)";
	/* MOVE 160 X600
	document.getElementById("shaq-receipt-scanner").style.opacity = "0.0";
	document.getElementById("shaq-receipt-scanner-forearm").style.opacity = "0.0";
	
	document.getElementById("shaq-receipt-scanner-smiles").style.opacity = "0.0";
  document.getElementById("receiptsGoInTitle").style.top = "55px";  */

/*  160 variation  
	document.getElementById("receipt-scanner-container").style.left = "7px";
	document.getElementById("receipt-scanner-container").style.top = "-200px";*/
	/* document.getElementById("receipt-scanner-container").style.transform = "scale(1.55)"; */

	setTimeout(initSceneFour, 250);

}

function initSceneFour(){
	
	document.getElementById("receiptScannersTitle").style.opacity = "0.0";
	//document.getElementById("receiptsGoInTitle").style.opacity = "0.0";
	document.getElementById("epsonTitle").style.opacity = "0.0";
	
/* 160X600 MOVE TO STRESS GOES AWAY  
	document.getElementById("receipt-scanner-container").style.left = "7px";
	document.getElementById("receipt-scanner-container").style.top = "-35px";
*/
	document.getElementById("scanner-receipt-motion").style.transition = "all 0.25s ease-in-out";
	document.getElementById("laptop").style.transform = "translate(627px, 9px) scale(0.85)";
	document.getElementById("laptop").style.opacity = "1.0";
	
	//document.getElementById("arrow").style.top = "385px";
	document.getElementById("arrow").style.opacity = "1.0";
	document.getElementById("arrow").style.left = "701px";
	
	//MOVE TO FINAL SCENE document.getElementById("scanner-receipt-motion").style.top = "0px";
	
	/* document.getElementById("arrow").style.left = "143px";
	document.getElementById("laptop").style.transform = "translate(-40px, 454px) scale(1.5)";
	transform: translate(-40px, 454px) scale(1.5);
	*/
	
	document.getElementById("stressGoesAway").style.opacity = "1.0";
	//document.getElementById("laptop").style.transform = "translate(389px, -78px) scale(0.55)";
    setTimeout(initSceneFive, 2500);
}


function initSceneFive(){
	
	//document.getElementById("arrow").style.left = "88px";
	//document.getElementById("arrow").style.top = "432px";
	//document.getElementById("arrow").style.animation = "upAndDown 0.5s 7";
	
	/* 160 X600 
	document.getElementById("receipt-scanner-container").style.left = "-57px";
	document.getElementById("receipt-scanner-container").style.top = "-24px";
	document.getElementById("receipt-scanner-container").style.transform = "scale(0.55)";
	
	document.getElementById("receipt-scanner").style.opacity = "0.0";
	document.getElementById("receipt-scanner").style.opacity = "0.0";
	
	
	
	
	*/
	
	// RECEPT SCANNER scale down
	//    transform: translate(85px, 151px) scale(1.20);
	
	var receiptScannerEle = document.getElementsByClassName("receipt-scanner");
	for (var i = 0; i < receiptScannerEle.length; i++) {
	   //receiptScannerEle[i].style.transform = "translate(17px, 238px) scale(1.0)";
		receiptScannerEle[i].style.transform = "translate(560px, 52px) scale(0.85)";
	}
	
	document.getElementById("laptop").style.transform = "translate(635px, 12px) scale(1.15)";
	document.getElementById("scanner-receipt-motion").style.transform = "translate(555px, -10px) scale(0.4)";
	//alert('here')
	
	
	//document.getElementById("receipt-scanner").style.opacity = "0.0";
	
	document.getElementById("stressGoesAway").style.top = "-300px";
	document.getElementById("receiptsGoInTitle").style.top = "-300px";
	document.getElementById("autoOrganize").style.opacity = "1.0";
	
	document.getElementById("scanner-receipt-catch").style.opacity = "0.0";
	
	setTimeout(initSceneSix, 3500);
}



function initSceneSix(){
	document.getElementById("arrow").style.right = "932px";
	
	
	var receiptScannerEle = document.getElementsByClassName("receipt-scanner");
	for (var i = 0; i < receiptScannerEle.length; i++) {
	   //receiptScannerEle[i].style.transform = "translate(17px, 238px) scale(1.0)";
		//receiptScannerEle[i].style.transform = "translate(85px, 246px) scale(1.55)";
		receiptScannerEle[i].style.transform = "translate(65px, 82px) scale(1.3)";
	}
	document.getElementById("receipt-scanner").style.opacity = "0.0";
	
	
	
	document.getElementById("scanner-receipt-motion").style.top = "0px";
	//document.getElementById("scanner-receipt-motion").style.transform = "translate(83px, 147px) scale(0.7)";
	document.getElementById("scanner-receipt-motion").style.transform = "translate(59px, -3px) scale(0.54)";
	
	
	
	document.getElementById("arrow").style.opacity = "0.0";
	document.getElementById("laptop").style.transform = "translate(8000px, 0px) scale(1.0)";
	
	
	document.getElementById("autoOrganize").style.top = "800px";
	
	//document.getElementById("receipt-scanner-container").style.left = "63px";
	//document.getElementById("receipt-scanner-container").style.top = "87px";
	//document.getElementById("receipt-scanner-container").style.transform = "scale(1.0)";
	
	
	document.getElementById("pieceOfCake").style.opacity = "1.0";
	document.getElementById("cta").style.opacity = "1.0";
	document.getElementById("piece-of-cake").style.left = "0px";
	
	document.getElementById("receipt-scanner-drawer").style.top = "-27px";
	
	
	
		
	//document.getElementById("stressGoesAway").style.top = "290px";
	
}


