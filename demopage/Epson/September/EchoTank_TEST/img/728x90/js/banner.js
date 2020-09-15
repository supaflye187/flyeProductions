	var banner = document.getElementById('wrapper');
	var T1;
	window.onload = function() {
		allAnimation();
	};
	function allAnimation(){
		banner.style.visibility = 'visible';
			
		T1 = new TimelineMax({repeat:0,repeatDelay:0});		
		
		T1.add("start");
		
		T1.to('#copy1',1,{opacity:1},"start+=0.3");
		
		T1.to('#img1, #copy1',1,{opacity:0},"start+=2.5");
		T1.to('#img2, #copy2',1,{opacity:1},"start+=2.5");
		
		T1.to('#img2, #copy2',1,{opacity:0},"start+=4.7");
		T1.to('#img3, #logo2',1,{opacity:1},"start+=4.7");
		
		T1.to('#copy3',1,{bottom:0},"start+=4.9");
		
		T1.to('#btl',1,{right:0},"start+=5.2");
		
		T1.to('#btl, #copy3',1,{opacity:0},"start+=7.5");
		T1.to('#last, #copy4, #copy5',1,{opacity:1},"start+=7.7");
		
		T1.to('#man',1,{right:0},"start+=8");
		T1.to('#cta',1,{opacity:1},"start+=8.7");
		
		
	}