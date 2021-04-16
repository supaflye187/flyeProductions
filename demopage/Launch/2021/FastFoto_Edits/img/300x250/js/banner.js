	var banner = document.getElementById('wrapper');
	var T1;
	window.onload = function() {
		allAnimation();
	};
	function allAnimation(){
		banner.style.visibility = 'visible';
			
		T1 = new TimelineMax({repeat:0,repeatDelay:0});		
		
		T1.add("start");
		
		T1.to('#img1',1,{opacity:0},"start+=0.3");
		T1.to('#img2',1,{opacity:0},"start+=0.5");
		T1.to('#img3',1,{opacity:0},"start+=0.7");
		T1.to('#img4',1,{opacity:0},"start+=0.9");
		T1.to('#img5',1,{opacity:0},"start+=1.1");
		T1.to('#img6',1,{opacity:0},"start+=1.3");
		T1.to('#img7',1,{opacity:0},"start+=1.1");
		
		T1.to('#bg1',1,{opacity:0},"start+=3.8");
		T1.to('#bg2, #cover, #cover-img, #cover-img2',1,{bottom:0},"start+=3.9");
		T1.to('#copy',1,{bottom:0},"start+=4.2");
		
		T1.to('#copy',1,{opacity:0},"start+=6.1");
		T1.to('#copy2',1,{opacity:1},"start+=6.1");
		
		T1.to('#cover-img',1,{bottom:-71},"start+=6.6");
		T1.to('#cover-img2',1,{bottom:-46});
		
		T1.to('#bg2, #cover, #cover-img, #cover-img2, #copy2',1,{opacity:0},"start+=8.4");
		T1.to('#printer',1,{opacity:1},"start+=8.4");
		
		T1.to('#copy3',1,{left:0},"start+=8.6");
		T1.to('#copy4',1,{right:0},"start+=8.6");
		
		T1.to('#printer, #copy3, #copy4',1,{opacity:0},"start+=11");
		T1.to('#copy5',1,{opacity:1},"start+=11.5");
		T1.to('#copy6',1,{opacity:1},"start+=11.8");
		T1.to('#photo',1,{opacity:1},"start+=12.5");
		T1.to('#copy7',1,{opacity:1},"start+=12.7");
		
		T1.to('#copy5, #copy6, #photo, #copy7',1,{opacity:0},"start+=14.4");
		T1.to('#last-printer',1,{opacity:1},"start+=14.4");
		T1.to('#l-lady',1,{left:0},"start+=14.6");
		T1.to('#r-man',1,{right:0},"start+=14.6");
		T1.to('#copy8',1,{opacity:1},"start+=14.7");
		T1.to('#cta',1,{opacity:1},"start+=14.9");
	}