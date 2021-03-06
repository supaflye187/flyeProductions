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
		T1.to('#img3, #logo',1,{opacity:1},"start+=4.7");
		
		T1.to('#copy3',1,{right:0},"start+=4.9");
		
		T1.to('#img3',1,{opacity:0},"start+=6.3");
		T1.to('#img4',1,{opacity:1},"start+=6.3");
		
		T1.to('#img4',1,{opacity:0},"start+=7.7");
		T1.to('#img5',1,{opacity:1},"start+=7.7");
		
		T1.to('#img5, #copy3',1,{opacity:0},"start+=8.9");
		
		T1.to('#btl1',1,{right:0},"start+=9.1");
		T1.to('#btl2',1,{right:0},"start+=9.3");
		T1.to('#btl3',1,{right:0},"start+=9.4");
		T1.to('#btl4',1,{right:0},"start+=9.6");
		
		T1.to('#copy4',1,{opacity:1},"start+=10.4");
		
		T1.to('#btl1, #btl2, #btl3, #btl4, #copy4, #logo',1,{opacity:0},"start+=12.4");
		T1.to('#last',1,{opacity:1},"start+=12.4");
		
		T1.to('#man',1,{right:0},"start+=13.2");
		T1.to('#cta',1,{opacity:1},"start+=14");
		
		
	}