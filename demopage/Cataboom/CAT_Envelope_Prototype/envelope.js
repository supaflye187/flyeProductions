
var imgSrc = winSolution();

function winSolution() {
	switch(winNum) {
		case 1:
		  var imgSrc = "images/img_01.png";
		  break;
		case 2:
			var imgSrc = "images/img_02.png";
		  break;
		case 3:
			var imgSrc = "images/img_03.png";
		  break;
		default:
			var imgSrc = "images/img_01.png";
	  }
	  return imgSrc;
	}