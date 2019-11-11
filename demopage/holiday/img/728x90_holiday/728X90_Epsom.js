// JavaScript Document



		// DOUBLECLICK LOADER FUNCTION
		// //Initialize Enabler
		// if (Enabler.isInitialized()) {
		// 	init();
		// } else {
		// 	Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
		// }
		// //Run when Enabler is ready
		// function init(){
		// 	//politeInit();
		// 	//Load in Javascript
		// 	if(Enabler.isPageLoaded()){
		// 		politeInit();
		// 	}else{
		// 		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
		// 	}
		// }


		//DEFAULT LOADER FUNCTION
		window.onload = function () {
				console.log("Loading Content...");
				politeInit();
		}

		var tl = new TimelineLite();


		function politeInit() {
			document.getElementById("container").style.display="block";
			//console.log("content loaded...XX");
			startAni();
			}

			// Set Elements as Variables
			function startAni(){
				var BG = document.getElementById('BG');
				var shaq_01 = document.getElementById('shaq_01');
				var shaq_02 = document.getElementById('shaq_02');
				var epsonPrinter = document.getElementById('epsonPrinter');
				var inkBottles = document.getElementById('inkBottles');
				var e_yellow = document.getElementById('e_yellow');
				// var e_black = document.getElementById('e_black');
				var e_group = document.getElementById('e_group');
				var e_blue = document.getElementById('e_blue');
				var e_pink = document.getElementById('e_pink');
				var epson_logo = document.getElementById('epson_logo');
				var epson_sm = document.getElementById('epson_sm');
				var epson_lg = document.getElementById('epson_lg');
				//var ecoTank_sm = document.getElementById('ecoTank_sm');
				//var ecoTank_lg = document.getElementById('ecoTank_lg');
				var txt_justFill = document.getElementById('txt_justFill');
				var txt_EcoTankPrinters = document.getElementById('txt_EcoTankPrinters');
				var txt_GetEcoTank = document.getElementById('txt_GetEcoTank');
				
				
				
				var txt_bigTank = document.getElementById('txt_bigTank');
				var cartridges_01 = document.getElementById('catridges_01');
				var cartridges_02 = document.getElementById('catridges_02');
				var cartridges_03 = document.getElementById('catridges_03');
				// var arrow = document.getElementById('arrow');
				var whiteBG = document.getElementById('whiteBG');


					//Timeline Function - can set multiple Timelines
					tl_main = new TimelineLite();

				//ex.
				 //Frame animations start
				 //FRAME 01 - IN
				 //============================================================
				 tl_main.to(shaq_01, 0.3, {opacity:1, ease: Power1.easeOut})
				 .to(epson_lg, 0.3, {opacity:1, left: '0px', ease: Power1.easeOut})
				 	.to(catridges_01, 1, {opacity:0, ease: Power1.easeOut})
				 	.to(catridges_02, 1, {opacity:0, ease: Power1.easeOut})
					.to(catridges_03, 1, {opacity:0, ease: Power1.easeOut})
				 
				 //FRAME 01 - OUT
					.to(shaq_01, 1, {opacity:0, ease: Elastic.easeOut.config(1, 0.8)})
				 
				 //FRAME 02 - IN
				 	//=========================================================
				 	//.to(e_blue, 0.5, {opacity:1, left:"0", ease: Power1.easeOut}, "-=1.0")
				 	//.to(e_pink, 0.5, {opacity:1, ease: Power1.easeOut}, "-=0.5")
				 
					//.to(e_yellow, 0.5, {opacity:1, ease: Power1.easeOut}, "-=0.5")
				 
				 //  .to(e_yellow, 0.5, {opacity:1, ease: Power1.easeOut}, "-=0.5")
					//MM  .to(txt_bigTank, 1, {opacity:1, ease: Elastic.easeOut.config(1, 0.8)},"-=1.0")
					//MM  .to(epson_lg, 1, {opacity:1, ease: Elastic.easeOut.config(1, 0.8)},"-=1.0")
					//MM  .to(epson_logo, 1, {opacity:1, ease: Elastic.easeOut.config(1, 0.8)},"-=1.0")

				 	//FRAME 02 - OUT
					//========================================================
				 	//.to(e_blue, 0.3, {opacity:1, ease: Power1.easeOut})
				 	
				 	//.to(ecoTank_sm, 0.3, {opacity:1, ease: Power1.easeOut},'-=0.3')
					
				 	

					//.to(e_blue, 0.3, {opacity:0, ease: Power1.easeOut}, "+=0.3")
	
					//.to(e_pink, 0.3, {opacity:1, ease: Power1.easeOut})

					//.to(e_pink, 0.3, {opacity:0, ease: Power1.easeOut}, "+=0.3")

					//.to(e_yellow, 0.3, {opacity:1, ease: Power1.easeOut})
					
					
					//.to(e_yellow, 1, {opacity:0, ease: Power1.easeOut}, "+=1.0")
					//MM  .to(txt_bigTank, 1, {opacity:0, ease: Power1.easeOut}, "-=1.0")
				 
				 	
				 	//.to(e_group, 1, {opacity:1, ease: Power1.easeOut})
				 	//.to(e_group, 1, {opacity:0, ease: Power1.easeOut}, "+=2.0")
		
				 //MM make these
				 
				 	
				 
				 
					//.to(epson_logo, 1, {opacity:0, ease: Power1.easeOut}, "-=1.0")
					//.to(epson_lg, 1, {opacity:0, ease: Power1.easeOut}, "-=1.0")
					


					.to(epsonPrinter, 0.5, {opacity:1, left:"0px", ease: Power1.easeOut})
				 	.to(inkBottles, 0.5, {opacity:1, left:"0px", ease: Power1.easeOut})
					
					
					
				 	.to(txt_EcoTankPrinters, 1, {opacity:1, ease: Power1.easeOut}, "-=1.0")
					.to(txt_justFill, 1, {opacity:1, ease: Power1.easeOut}, "-=1.0")
				 	//.to(ecoTank_sm, 0.3, {opacity:0, ease: Power1.easeOut}, "-=1.0")
				 	
				 	
					.to(shaq_02, 0.5, {opacity:1, left:'0px', ease: Power1.easeOut}, "-=1.0")
				 .to(txt_GetEcoTank, 1, {opacity:1, ease: Power1.easeOut}, "-=1.0")
				 	//.to(ecoTank_lg, 1, {opacity:1, left:'0px', ease: Power1.easeOut}, "-=1.0")
					.to(ctaBtn, 1, {opacity:1, left:'14px', top:'-2px', ease: Power1.easeOut}, "-=0.5")
         
			}

			/*Clicktag for DC Studio*/
			// function clickTag() {
			// 	Enabler.exit('HTML5_Background_Clickthrough');
			// }

			//DC STUDIO clickTag Event Handler
			//document.getElementById('linkLayer').addEventListener('click', clickTag, false);