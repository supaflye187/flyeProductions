(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,33);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,103);


(lib.box_01 = function() {
	this.initialize(img.box_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,41);


(lib.box_2 = function() {
	this.initialize(img.box_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,58);


(lib.box_outline = function() {
	this.initialize(img.box_outline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,137);


(lib.box_outline_blue = function() {
	this.initialize(img.box_outline_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,137);


(lib.brownBG = function() {
	this.initialize(img.brownBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.clock_arm = function() {
	this.initialize(img.clock_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,24);


(lib.clock_BG = function() {
	this.initialize(img.clock_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.clock_ticks = function() {
	this.initialize(img.clock_ticks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,92);


(lib.clock_yellow_bar = function() {
	this.initialize(img.clock_yellow_bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,32);


(lib.ctaTxt = function() {
	this.initialize(img.ctaTxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,16);


(lib.dr_image = function() {
	this.initialize(img.dr_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,67);


(lib.dr_stethoscope = function() {
	this.initialize(img.dr_stethoscope);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,23);


(lib.magnifyGlass = function() {
	this.initialize(img.magnifyGlass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,107);


(lib.safeCare_logo = function() {
	this.initialize(img.safeCare_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,126);


(lib.stairPart = function() {
	this.initialize(img.stairPart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,65);


(lib.trashCan = function() {
	this.initialize(img.trashCan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,95);


(lib.trashCan_yellow_bar = function() {
	this.initialize(img.trashCan_yellow_bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,52);


(lib.txt_painful = function() {
	this.initialize(img.txt_painful);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,80);


(lib.txt_staySafe = function() {
	this.initialize(img.txt_staySafe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,115);


(lib.txt_weCanMakeItBetter = function() {
	this.initialize(img.txt_weCanMakeItBetter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,72);


(lib.white_bg = function() {
	this.initialize(img.white_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,181);


(lib.wht_trashcan = function() {
	this.initialize(img.wht_trashcan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,35);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_withUs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvCFmIAAnGIeEAAIAAHGg");
	mask.setTransform(-2.2,35.775);

	// Layer_1
	this.instance = new lib.txt_staySafe();
	this.instance.setTransform(-87,-56);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_withUs, new cjs.Rectangle(-151,-282,300,600), null);


(lib.txt_staySafe_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvCDjIAAnFIeEAAIAAHFg");
	mask.setTransform(-2.2,-39.2);

	// Layer_1
	this.instance = new lib.txt_staySafe();
	this.instance.setTransform(-87,-56);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_staySafe_1, new cjs.Rectangle(-151,-282,300,600), null);


(lib.txt_moving = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt_painful();
	this.instance.setTransform(-113,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_moving, new cjs.Rectangle(-113,-40,225,80), null);


(lib.txt_makeBetter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.txt_weCanMakeItBetter();
	this.instance.setTransform(-131.5,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_makeBetter, new cjs.Rectangle(-131.5,-36,263,72), null);


(lib.txt_healthy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvCDcIAAm3IeEAAIAAG3g");
	mask.setTransform(-2.2,5.55);

	// Layer_1
	this.instance = new lib.txt_staySafe();
	this.instance.setTransform(-87,-56);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_healthy, new cjs.Rectangle(-151,-282,300,600), null);


(lib.cta_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ctaTxt();
	this.instance.setTransform(-101,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_txt, new cjs.Rectangle(-101,-8,201,16), null);


(lib.BSWH_staySafe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.safeCare_logo();
	this.instance.setTransform(-85,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_staySafe, new cjs.Rectangle(-85,-63,191,126), null);


(lib.BSWH_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BSWH_Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB71B").s().p("AAKE+IAAk0ICcCcIAACYgAililIAAiYICcAAIAAE0g");
	this.shape.setTransform(1.175,-56.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003DA6").s().p("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");
	this.shape_1.setTransform(-0.8281,-14.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008FBE").s().p("Ak9CmIAAicIE0AAIibCcgAAKgJICcicICZAAIAACcg");
	this.shape_2.setTransform(1.15,-56.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_Logo, new cjs.Rectangle(-212,-103,422.4,177.2), null);


(lib.box_outline_blue_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// box_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDAyIAAhjIAHAAIAABjg");
	var mask_graphics_1 = new cjs.Graphics().p("AiMAyIAAhjIEZAAIAABjg");
	var mask_graphics_2 = new cjs.Graphics().p("AkLAyIAAhjIIXAAIAABjg");
	var mask_graphics_3 = new cjs.Graphics().p("AmAAyIAAhjIMBAAIAABjg");
	var mask_graphics_4 = new cjs.Graphics().p("AnsAyIAAhjIPZAAIAABjg");
	var mask_graphics_5 = new cjs.Graphics().p("ApNAyIAAhjISbAAIAABjg");
	var mask_graphics_6 = new cjs.Graphics().p("AqmAyIAAhjIVNAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-67.325,y:-63.2}).wait(1).to({graphics:mask_graphics_1,x:-53.625,y:-63.2}).wait(1).to({graphics:mask_graphics_2,x:-40.925,y:-63.2}).wait(1).to({graphics:mask_graphics_3,x:-29.175,y:-63.2}).wait(1).to({graphics:mask_graphics_4,x:-18.425,y:-63.2}).wait(1).to({graphics:mask_graphics_5,x:-8.65,y:-63.2}).wait(1).to({graphics:mask_graphics_6,x:0.175,y:-63.2}).wait(354));

	// box_image
	this.instance = new lib.box_outline_blue();
	this.instance.setTransform(-69,-68);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	// box_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("AgxAHIAAgNIBjAAIAAANg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AgyCoIAClQIBjABIgCFQg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AgzFJIAEqSIBjABIgEKRg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AgzHqIAEvTIBjAAIgEPUg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ag0KLIAG0WIBjABIgGUVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:63.45,y:-57.5}).wait(1).to({graphics:mask_1_graphics_7,x:63.4,y:-41.45}).wait(1).to({graphics:mask_1_graphics_8,x:63.325,y:-25.45}).wait(1).to({graphics:mask_1_graphics_9,x:63.275,y:-9.4}).wait(1).to({graphics:mask_1_graphics_10,x:63.2,y:6.6}).wait(350));

	// box_image
	this.instance_1 = new lib.box_outline_blue();
	this.instance_1.setTransform(-69,-68);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(354));

	// box_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_10 = new cjs.Graphics().p("AgBAyIAAhjIADAAIAABjg");
	var mask_2_graphics_11 = new cjs.Graphics().p("Ah/AyIAAhjID/AAIAABjg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Aj8AyIAAhjIH5AAIAABjg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Al6AyIAAhjIL0AAIAABjg");
	var mask_2_graphics_14 = new cjs.Graphics().p("An3AyIAAhjIPvAAIAABjg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Ap0AyIAAhjITpAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_2_graphics_10,x:57.925,y:65.3}).wait(1).to({graphics:mask_2_graphics_11,x:45.375,y:65.3}).wait(1).to({graphics:mask_2_graphics_12,x:32.85,y:65.3}).wait(1).to({graphics:mask_2_graphics_13,x:20.3,y:65.3}).wait(1).to({graphics:mask_2_graphics_14,x:7.775,y:65.3}).wait(1).to({graphics:mask_2_graphics_15,x:-4.775,y:65.3}).wait(345));

	// box_image
	this.instance_2 = new lib.box_outline_blue();
	this.instance_2.setTransform(-69,-68);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(350));

	// box_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_15 = new cjs.Graphics().p("AgxACIAAgEIBjABIAAAEg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AgxBEIAAiIIBjABIAACIg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AgxCGIAAkLIBjAAIAAEMg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AgxDHIAAmOIBjABIAAGOg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AgxEJIAAoSIBjABIAAISg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AgxFLIAAqWIBjABIAAKWg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AgxGNIAAsZIBjAAIAAMZg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AgxHOIAAucIBjABIAAOcg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AgxIQIAAwgIBjABIAAQgg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AgxJSIAAyjIBjAAIAASjg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_3_graphics_15,x:-63.1,y:60.15}).wait(1).to({graphics:mask_3_graphics_16,x:-63.1,y:53.575}).wait(1).to({graphics:mask_3_graphics_17,x:-63.1,y:47}).wait(1).to({graphics:mask_3_graphics_18,x:-63.1,y:40.45}).wait(1).to({graphics:mask_3_graphics_19,x:-63.1,y:33.875}).wait(1).to({graphics:mask_3_graphics_20,x:-63.1,y:27.3}).wait(1).to({graphics:mask_3_graphics_21,x:-63.1,y:20.725}).wait(1).to({graphics:mask_3_graphics_22,x:-63.1,y:14.175}).wait(1).to({graphics:mask_3_graphics_23,x:-63.1,y:7.6}).wait(1).to({graphics:mask_3_graphics_24,x:-63.1,y:1.025}).wait(336));

	// box_image
	this.instance_3 = new lib.box_outline_blue();
	this.instance_3.setTransform(-69,-68);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(345));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-289,300,600);


(lib.box_outline_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// box_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgDAyIAAhjIAHAAIAABjg");
	var mask_graphics_1 = new cjs.Graphics().p("AiMAyIAAhjIEZAAIAABjg");
	var mask_graphics_2 = new cjs.Graphics().p("AkLAyIAAhjIIXAAIAABjg");
	var mask_graphics_3 = new cjs.Graphics().p("AmAAyIAAhjIMBAAIAABjg");
	var mask_graphics_4 = new cjs.Graphics().p("AnsAyIAAhjIPZAAIAABjg");
	var mask_graphics_5 = new cjs.Graphics().p("ApNAyIAAhjISbAAIAABjg");
	var mask_graphics_6 = new cjs.Graphics().p("AqmAyIAAhjIVNAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-67.325,y:-63.2}).wait(1).to({graphics:mask_graphics_1,x:-53.625,y:-63.2}).wait(1).to({graphics:mask_graphics_2,x:-40.925,y:-63.2}).wait(1).to({graphics:mask_graphics_3,x:-29.175,y:-63.2}).wait(1).to({graphics:mask_graphics_4,x:-18.425,y:-63.2}).wait(1).to({graphics:mask_graphics_5,x:-8.65,y:-63.2}).wait(1).to({graphics:mask_graphics_6,x:0.175,y:-63.2}).wait(72));

	// box_image
	this.instance = new lib.box_outline();
	this.instance.setTransform(-69,-68);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78));

	// box_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("AgxAHIAAgNIBjAAIAAANg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AgyCoIAClQIBjABIgCFQg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AgzFJIAEqSIBjABIgEKRg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AgzHqIAEvTIBjAAIgEPUg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ag0KLIAG0WIBjABIgGUVg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:63.45,y:-57.5}).wait(1).to({graphics:mask_1_graphics_7,x:63.4,y:-41.45}).wait(1).to({graphics:mask_1_graphics_8,x:63.325,y:-25.45}).wait(1).to({graphics:mask_1_graphics_9,x:63.275,y:-9.4}).wait(1).to({graphics:mask_1_graphics_10,x:63.2,y:6.6}).wait(68));

	// box_image
	this.instance_1 = new lib.box_outline();
	this.instance_1.setTransform(-69,-68);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(72));

	// box_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_10 = new cjs.Graphics().p("AgBAyIAAhjIADAAIAABjg");
	var mask_2_graphics_11 = new cjs.Graphics().p("Ah/AyIAAhjID/AAIAABjg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Aj8AyIAAhjIH5AAIAABjg");
	var mask_2_graphics_13 = new cjs.Graphics().p("Al6AyIAAhjIL0AAIAABjg");
	var mask_2_graphics_14 = new cjs.Graphics().p("An3AyIAAhjIPvAAIAABjg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Ap0AyIAAhjITpAAIAABjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_2_graphics_10,x:57.925,y:65.3}).wait(1).to({graphics:mask_2_graphics_11,x:45.375,y:65.3}).wait(1).to({graphics:mask_2_graphics_12,x:32.85,y:65.3}).wait(1).to({graphics:mask_2_graphics_13,x:20.3,y:65.3}).wait(1).to({graphics:mask_2_graphics_14,x:7.775,y:65.3}).wait(1).to({graphics:mask_2_graphics_15,x:-4.775,y:65.3}).wait(63));

	// box_image
	this.instance_2 = new lib.box_outline();
	this.instance_2.setTransform(-69,-68);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(68));

	// box_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_15 = new cjs.Graphics().p("AgxACIAAgEIBjABIAAAEg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AgxBEIAAiIIBjABIAACIg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AgxCGIAAkLIBjAAIAAEMg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AgxDHIAAmOIBjABIAAGOg");
	var mask_3_graphics_19 = new cjs.Graphics().p("AgxEJIAAoSIBjABIAAISg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AgxFLIAAqWIBjABIAAKWg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AgxGNIAAsZIBjAAIAAMZg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AgxHOIAAucIBjABIAAOcg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AgxIQIAAwgIBjABIAAQgg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AgxJSIAAyjIBjAAIAASjg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_3_graphics_15,x:-63.1,y:60.15}).wait(1).to({graphics:mask_3_graphics_16,x:-63.1,y:53.575}).wait(1).to({graphics:mask_3_graphics_17,x:-63.1,y:47}).wait(1).to({graphics:mask_3_graphics_18,x:-63.1,y:40.45}).wait(1).to({graphics:mask_3_graphics_19,x:-63.1,y:33.875}).wait(1).to({graphics:mask_3_graphics_20,x:-63.1,y:27.3}).wait(1).to({graphics:mask_3_graphics_21,x:-63.1,y:20.725}).wait(1).to({graphics:mask_3_graphics_22,x:-63.1,y:14.175}).wait(1).to({graphics:mask_3_graphics_23,x:-63.1,y:7.6}).wait(1).to({graphics:mask_3_graphics_24,x:-63.1,y:1.025}).wait(54));

	// box_image
	this.instance_3 = new lib.box_outline();
	this.instance_3.setTransform(-69,-68);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(63));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-289,300,600);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.brownBG();
	this.instance.setTransform(1042,-300,1,1,0,0,180);

	this.instance_1 = new lib.brownBG();
	this.instance_1.setTransform(444,-300);

	this.instance_2 = new lib.brownBG();
	this.instance_2.setTransform(446,-300,1,1,0,0,180);

	this.instance_3 = new lib.brownBG();
	this.instance_3.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-150,-300,1192,600), null);


(lib.trashcan_yellow_bar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.trashCan_yellow_bar();
	this.instance.setTransform(-9,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trashcan_yellow_bar, new cjs.Rectangle(-9,-26,17,52), null);


(lib.trashCan_outline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmUHfIAAu9IMpAAIAAO9g");
	mask.setTransform(1,8.375);

	// Layer_1
	this.instance = new lib.trashCan();
	this.instance.setTransform(-37,-48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trashCan_outline, new cjs.Rectangle(-37,-39.5,74,86.5), null);


(lib.trashCan_lid = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkvA6IAAhyIJfAAIAAByg");
	mask.setTransform(-0.375,-44.75);

	// Layer_1
	this.instance = new lib.trashCan();
	this.instance.setTransform(-37,-48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trashCan_lid, new cjs.Rectangle(-30.7,-48,60.7,9), null);


(lib.trashcan_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wht_trashcan();
	this.instance.setTransform(-17,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trashcan_bg, new cjs.Rectangle(-17,-18,34,35), null);


(lib.stairs_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stairPart();
	this.instance.setTransform(73,-52);

	this.instance_1 = new lib.stairPart();
	this.instance_1.setTransform(49,-36);

	this.instance_2 = new lib.stairPart();
	this.instance_2.setTransform(25,-20);

	this.instance_3 = new lib.stairPart();
	this.instance_3.setTransform(25,-3,1,1,0,0,180);

	this.instance_4 = new lib.stairPart();
	this.instance_4.setTransform(-23,12);

	this.instance_5 = new lib.stairPart();
	this.instance_5.setTransform(-23,27,1,1,0,0,180);

	this.instance_6 = new lib.stairPart();
	this.instance_6.setTransform(-47,44,1,1,0,0,180);

	this.instance_7 = new lib.stairPart();
	this.instance_7.setTransform(-95,61);

	this.instance_8 = new lib.stairPart();
	this.instance_8.setTransform(73,-89);

	this.instance_9 = new lib.stairPart();
	this.instance_9.setTransform(49,-73);

	this.instance_10 = new lib.stairPart();
	this.instance_10.setTransform(25,-57);

	this.instance_11 = new lib.stairPart();
	this.instance_11.setTransform(25,-40,1,1,0,0,180);

	this.instance_12 = new lib.stairPart();
	this.instance_12.setTransform(-23,-25);

	this.instance_13 = new lib.stairPart();
	this.instance_13.setTransform(-23,-10,1,1,0,0,180);

	this.instance_14 = new lib.stairPart();
	this.instance_14.setTransform(-47,7,1,1,0,0,180);

	this.instance_15 = new lib.stairPart();
	this.instance_15.setTransform(-95,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stairs_mc, new cjs.Rectangle(-95,-89,192,215), null);


(lib.stethoscope_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhaiYICmAOIAOEGIiqAdg");
	mask.setTransform(11.85,-0.95);

	// Layer_1
	this.instance = new lib.dr_stethoscope();
	this.instance.setTransform(-13,-12);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stethoscope_02, new cjs.Rectangle(2.8,-12,12.2,23), null);


(lib.stethoscope_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhaiYIClAOIAPEGIiqAdg");
	mask.setTransform(-4.9,-0.95);

	// Layer_1
	this.instance = new lib.dr_stethoscope();
	this.instance.setTransform(-13,-12);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stethoscope_01, new cjs.Rectangle(-13,-12,17.2,23), null);


(lib.magnifying_glass_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.magnifyGlass();
	this.instance.setTransform(-40,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.magnifying_glass_mc, new cjs.Rectangle(-40,-40,95,107), null);


(lib.clock_yellow_bar_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clock_yellow_bar();
	this.instance.setTransform(-9,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_yellow_bar_1, new cjs.Rectangle(-9,-13,17,32), null);


(lib.clock_ticks_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clock_ticks();
	this.instance.setTransform(-46,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_ticks_1, new cjs.Rectangle(-46,-46,92,92), null);


(lib.clock_min = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AijgyIBqguQBpgvgBgCIB1CSIioCRg");
	mask.setTransform(-8.975,5.575);

	// Layer_1
	this.instance = new lib.clock_arm();
	this.instance.setTransform(-15,-12);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_min, new cjs.Rectangle(-15,-9,22.4,21), null);


(lib.clock_hour = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clock_arm();
	this.instance.setTransform(-15,-12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_hour, new cjs.Rectangle(-15,-12,30,24), null);


(lib.clock_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clock_BG();
	this.instance.setTransform(-46,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_bg, new cjs.Rectangle(-46,-46,92,92), null);


(lib.box_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.box_2();
	this.instance.setTransform(-39,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box_02, new cjs.Rectangle(-39,-29,78,58), null);


(lib.box_01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.box_01();
	this.instance.setTransform(-25,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.box_01_1, new cjs.Rectangle(-25,-20.5,50,41), null);


(lib.arrow_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arrow();
	this.instance.setTransform(-23.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow_mc, new cjs.Rectangle(-23.5,-16.5,47,33), null);


(lib.torso_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah2DrQgPgDhmh6QF2lWAAgCIBhBrQAAAZgGAcQgKA5gYATQglAhiiCTQhfA1gSAAIgCAAg");
	mask.setTransform(-1.375,-5.4946);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-45,-43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.torso_mc, new cjs.Rectangle(-25,-29,47.3,47), null);


(lib.spike_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AipBkIAAAAgAiYAAIAPhjIEzCVIlTAyQACAAAPhkg");
	mask.setTransform(-25.75,-15);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-43,-43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spike_03, new cjs.Rectangle(-42.7,-25,34,20), null);


(lib.spike_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiXhNQACABDChlIBrFjg");
	mask.setTransform(-24.75,-26.25);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-43,-43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spike_02, new cjs.Rectangle(-40,-43,30.5,34.5), null);


(lib.spike_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah3iuIDvAFIiYFYg");
	mask.setTransform(-6.25,-26);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-43,-43);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spike_01, new cjs.Rectangle(-18.2,-43,24,34.5), null);


(lib.leg_front_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAlCEIgSgJQhXhmgagZQgTgUgFgkQgFglAPgPQAhghAnAWQAUAKANARIA+BGQA9BGAAALIAAAeQgFATgbARQgUAMgTAAIgMgBg");
	mask.setTransform(5.0375,6.3447);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-33,-53);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leg_front_top_mc, new cjs.Rectangle(-7,-6.9,24.1,26.6), null);


(lib.leg_front_bottom_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgBCqQgjgIgkgPIgBiFQgBiFAEgGQABgRAHgLQAMgUAtgCQArgCAXARQALAJADAJIgHEqQAAAUgeAAQgQAAgXgGg");
	mask.setTransform(13.69,33.4044);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-33,-53);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leg_front_bottom_mc, new cjs.Rectangle(6.3,15.8,14.899999999999999,34.2), null);


(lib.leg_back_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgLCFQgpgIgPgHQgYgLAAgUQAAgSAYhkIAZhmQAZACAZAFQA0AKAHAPQAbA9gCAdQgCAYgQBcIgcARQgYAMgVAAIgMgBg");
	mask.setTransform(-10.7931,5.3438);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-36,-55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leg_back_top_mc, new cjs.Rectangle(-20,-8.1,18.4,26.9), null);


(lib.leg_back_bottom_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhZB6QgJgjAZhzQANg6ANgzQAjgGAhAAQBGAAABAfQACAgggBfQgQAwgQAqIg2AeQgVAJgPAAQgXAAgGgWg");
	mask.setTransform(-14.689,34.7983);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-36,-55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leg_back_bottom_mc, new cjs.Rectangle(-23.9,20.4,18.5,27.6), null);


(lib.head_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah/B9QhBhEAHgaQAQg5AuhLQA+hnAzAQIDCCRQADASgBAZQgDAzgTAoQgTAqhWAhQhEAZghAAQgWAAg/hCg");
	mask.setTransform(3.0553,-5.608);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-77,-16);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head_mc, new cjs.Rectangle(-15.5,-16,30.5,29.5), null);


(lib.arm_top_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AADBhQgYgTgpg+QgVgegQgcIARgaQAUgdANgKIAaAHIB7CMQAAAfgIAGQgVATgLAFQgOAHgMAAQgQAAgPgLg");
	mask.setTransform(19.55,-8.0568);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-48,-42);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_top_mc, new cjs.Rectangle(9.6,-18.8,20,21.6), null);


(lib.arm_bottom_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgoCIQgcgbgMgOQgUgWACgjQACgjAQg2IAPgvIAJgLQAMgOAOgIQArgbAwAeQAvAfgLBdQgFAugPApQgXAWgbASQgfAWgSAAQgMAAgGgJg");
	mask.setTransform(24.7195,10.762);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(-48,-42);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_bottom_mc, new cjs.Rectangle(14.8,-3.7,19.900000000000002,29), null);


(lib.white_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhbEBIAAilIBWhWIAAD7gAAJDQQgDgDAAgFIAAAAQAAgFADgDIAAAAQADgDAFAAIAAAAQAFAAADADIAAAAQADADAAAFIAAAAQAAAFgDADIAAAAQgDADgFAAIAAAAQgFAAgDgDgAALDBQgDADAAAEIAAAAQAAAEADADIAAAAQACACAEAAIAAAAQAEAAACgCIAAAAQADgDAAgEIAAAAQAAgEgDgDIAAAAQgCgCgEAAIAAAAQgEAAgCACgAAUDOIgDgFIgCAAIAAAFIgCAAIAAgNIAFAAQAEAAAAAEIAAAAQAAABAAABQAAAAAAABQgBAAgBAAQAAABgBAAIAAAAIAEAFgAAPDHIACAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAAAgBIAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAgBAAIAAAAIgCAAgAAFCxIAAirIBXBWIAABVgABcBcIhXhWID8AAIAABWgAiwBcIAAhWICrAAIhWBWgAAFgFIAAj7IBXAAIAAClIBVAAIAABWgAgFgFIj7AAIAAhWIClAAIAAhVIBWAAIAACrg");
	mask.setTransform(0.1525,-22.2687);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(1,142,190,0)","#FFFFFF","rgba(1,142,190,0)"],[0,0.463,1],-20.7,18.4,20.8,-18.4).s().p("AlzgBIGflvIFIFyImfFvg");
	this.shape.setTransform(-41.275,12.375);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(47).to({_off:false},0).wait(1).to({x:-41.075,y:12.225},0).wait(1).to({x:-40.475,y:11.725},0).wait(1).to({x:-39.475,y:10.875},0).wait(1).to({x:-38.075,y:9.775},0).wait(1).to({x:-36.275,y:8.275},0).wait(1).to({x:-34.025,y:6.475},0).wait(1).to({x:-31.425,y:4.325},0).wait(1).to({x:-28.425,y:1.875},0).wait(1).to({x:-24.975,y:-0.925},0).wait(1).to({x:-21.175,y:-4.025},0).wait(1).to({x:-16.975,y:-7.475},0).wait(1).to({x:-12.325,y:-11.275},0).wait(1).to({x:-7.325,y:-15.375},0).wait(1).to({x:-1.875,y:-19.775},0).wait(1).to({x:3.825,y:-24.475},0).wait(1).to({x:9.275,y:-28.875},0).wait(1).to({x:14.275,y:-32.975},0).wait(1).to({x:18.925,y:-36.775},0).wait(1).to({x:23.125,y:-40.225},0).wait(1).to({x:26.925,y:-43.325},0).wait(1).to({x:30.375,y:-46.125},0).wait(1).to({x:33.375,y:-48.575},0).wait(1).to({x:35.975,y:-50.725},0).wait(1).to({x:38.225,y:-52.525},0).wait(1).to({x:40.025,y:-53.975},0).wait(1).to({x:41.425,y:-55.125},0).wait(1).to({x:42.425,y:-55.975},0).wait(1).to({x:43.025,y:-56.475},0).wait(1).to({x:43.225,y:-56.625},0).wait(199));

	// Layer_4
	this.instance = new lib.BSWH_Logo();
	this.instance.setTransform(-1.05,1.05,0.551,0.551,0,0,0,-0.9,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(275));

	// Layer_1
	this.instance_1 = new lib.white_bg();
	this.instance_1.setTransform(-156,-100,1.04,1.0994);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(275));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-100,312,199);


(lib.Frame_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BSWH_Logo
	this.instance = new lib.BSWH_staySafe();
	this.instance.setTransform(-3.35,-197.2,4.1812,4.1812,-24.6994,0,0,-0.1,-0.1);
	this.instance.alpha = 0.0508;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:0,regY:0,scaleX:0.9841,scaleY:0.9841,rotation:0,x:-3,y:-197,alpha:1},4,cjs.Ease.circOut).to({scaleX:1,scaleY:1},3).wait(465));

	// txt_staySafe
	this.instance_1 = new lib.txt_staySafe_1();
	this.instance_1.setTransform(0.35,-68.75,1,1,0,0,0,-1.7,-35.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-80.75,alpha:1},10,cjs.Ease.quadOut).wait(465));

	// txt_healthy
	this.instance_2 = new lib.txt_healthy();
	this.instance_2.setTransform(0.85,-28.05,1,1,0,0,0,-1.2,5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:-40.05,alpha:1},10,cjs.Ease.quadOut).wait(462));

	// txt_withUs
	this.instance_3 = new lib.txt_withUs();
	this.instance_3.setTransform(1.35,10.3,1,1,0,0,0,-1.2,42.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({y:-1.7,alpha:1},10,cjs.Ease.quadOut).wait(459));

	// cta_txt
	this.instance_4 = new lib.cta_txt();
	this.instance_4.setTransform(2.55,60,1,1,0,0,0,-0.5,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({alpha:1},14,cjs.Ease.quadOut).wait(448));

	// white_bg
	this.instance_5 = new lib.white_box();
	this.instance_5.setTransform(2.05,412.05,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:215.05},16,cjs.Ease.quadOut).to({y:219.05},3).wait(456));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435.7,-621.4,945.5999999999999,1133);


(lib.trashCan_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Box_02
	this.instance = new lib.box_outline_blue_1("synched",0);
	this.instance.setTransform(-0.35,-48.5,1,1,0,0,0,-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479));

	// yellow_bar
	this.instance_1 = new lib.trashcan_yellow_bar();
	this.instance_1.setTransform(19.25,-134.7,1,1,0,0,0,-0.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({y:-38.7,alpha:1},5).to({y:-44.7},2).wait(458));

	// lid
	this.instance_2 = new lib.trashCan_lid();
	this.instance_2.setTransform(26.35,-94.6,0.4724,1,73.6026,0,0,21.9,-42.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({regX:22.2,regY:-42.9,scaleX:1,rotation:-4.4538,x:21.1,y:-90.85},4).to({regX:22.1,regY:-42.8,rotation:0,x:21,y:-90.8},2).wait(465));

	// trash_can
	this.instance_3 = new lib.trashCan_outline();
	this.instance_3.setTransform(-70.25,56.25,0.1977,0.1977,55.8905,0,0,1,4.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:4.2,scaleX:0.78,scaleY:0.78,rotation:28.4902,x:-20.3,y:28.15,alpha:1},3).to({regY:4.1,scaleX:0.9999,scaleY:0.9999,rotation:18.9937,x:-4.65,y:-7.45},2).to({scaleX:1,scaleY:1,rotation:0,x:4.75,y:-52.85},2).to({x:-0.25,y:-43.85},4,cjs.Ease.quadOut).wait(468));

	// wht_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("Aj5F0IAAroIHzAAIAALog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-0.975,y:-44.25}).wait(465));

	// white_bg
	this.instance_4 = new lib.trashcan_bg();
	this.instance_4.setTransform(-1.75,24.85,0.8235,1.0428,0,0,0,0,-0.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regY:-0.6,scaleX:0.9117,scaleY:1.1428,y:-33.55,alpha:1},5).to({regY:-0.5,scaleX:1,scaleY:1,y:-29.45},2).wait(458));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-160.7,151.4,239.6);


(lib.stair_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Box_02
	this.instance = new lib.box_outline_black("synched",0);
	this.instance.setTransform(-0.35,-48.5,1,1,0,0,0,-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(358));

	// mask_stairs (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnfHMIAAuXIO/AAIAAOXg");
	mask.setTransform(-1,-45.475);

	// stairs
	this.instance_1 = new lib.stairs_mc();
	this.instance_1.setTransform(46,27.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1,regY:18.5,x:47,y:33.15},0).wait(1).to({y:20.5},0).wait(1).to({y:8.8},0).wait(1).to({y:-1.55},0).wait(1).to({y:-10.25},0).wait(1).to({y:-17.35},0).wait(1).to({y:-23},0).wait(1).to({regX:0,regY:0,x:46,y:-46},0).wait(1).to({regX:1,regY:18.5,x:47,y:-25.85},0).wait(1).to({y:-24.4},0).wait(1).to({y:-23.1},0).wait(1).to({y:-21.95},0).wait(1).to({regX:0,regY:0,x:46,y:-39.5},0).wait(1).to({x:-50,y:23.5},29,cjs.Ease.quadOut).wait(315));

	// arrow
	this.instance_2 = new lib.arrow_mc();
	this.instance_2.setTransform(-108.55,-19.5,0.0909,0.0909);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1,x:-10.5,y:-72},6).to({x:-21.5,y:-65},2).to({x:-13.5,y:-69.5},2).to({x:-20,y:-66},2).to({x:-18.5,y:-67.5},2).wait(344));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.7,-116.9,178.9,137);


(lib.Dr_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stethoscope_01
	this.instance = new lib.stethoscope_01();
	this.instance.setTransform(-9.25,0.45,1,1,0,0,0,-5.2,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.4567,y:0.4},7).to({regX:-5.3,regY:-10.9,rotation:-3.7454,x:-9.35,y:0.5},8).to({regX:-5.2,regY:-11,rotation:0,x:-9.25,y:0.45},9).wait(241));

	// stethoscope_02
	this.instance_1 = new lib.stethoscope_02();
	this.instance_1.setTransform(8.1,1.05,1,1,0,0,0,10.2,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:3.7454,x:8.15,y:1},7).to({rotation:-5.1924,x:8.1,y:1.05},8).to({rotation:0},9).wait(240));

	// dr
	this.instance_2 = new lib.dr_image();
	this.instance_2.setTransform(-23,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(265));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-34,45,67);


(lib.clock_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Box_03
	this.instance = new lib.box_outline_blue_1("synched",0);
	this.instance.setTransform(-0.35,98.7,1,1,0,0,0,-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(488));

	// yellow_bar
	this.instance_1 = new lib.clock_yellow_bar_1();
	this.instance_1.setTransform(-2,34.3,1,1,0,0,0,-0.5,3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:72.8,alpha:1},5).to({y:69.3},3).wait(479));

	// clock_min
	this.instance_2 = new lib.clock_min();
	this.instance_2.setTransform(-1.8,99.5,0.231,0.2763,-79.3943,0,0,-11.8,8.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({regX:-11.7,regY:8.5,scaleX:1.1259,scaleY:1.1339,rotation:-79.3923,y:99.45},4).to({scaleX:1,scaleY:1,rotation:-30.1505,x:-1.95,y:99.5},3).wait(1).to({regY:8.6,rotation:-18.2016,x:-1.85},0).to({regX:-11.5,regY:8.4,scaleX:0.9999,scaleY:0.9999,rotation:88.3901,y:99.65},9).to({regY:8.3,rotation:153.9249,x:-1.75},5).to({regX:-11.7,regY:8.4,scaleX:1,scaleY:1,rotation:280.6078,x:-1.95,y:99.45},9,cjs.Ease.quadOut).wait(452));

	// clock_hour
	this.instance_3 = new lib.clock_hour();
	this.instance_3.setTransform(-1.5,99.55,0.1695,0.1523,0,0,0,-11.2,8.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({regY:8.3,scaleX:1.0819,scaleY:1.0614,x:-1.45,y:99.5},4).to({scaleX:1,scaleY:1},3).wait(4).to({regY:8.4,rotation:15.2231,y:99.6},0).to({regY:8.3,rotation:166.0068,x:-1.55},9).to({scaleX:0.9999,scaleY:0.9999,rotation:219.3672,y:99.65},5).to({scaleX:1,scaleY:1,rotation:360,x:-1.45,y:99.5},9,cjs.Ease.quadOut).wait(452));

	// clock_ticks
	this.instance_4 = new lib.clock_ticks_1();
	this.instance_4.setTransform(-2,100.1,0.0533,0.0533,0,0,0,0,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({regY:0,scaleX:1.2391,scaleY:1.2391,y:100.05},4).to({scaleX:1,scaleY:1},3).wait(469));

	// clock_bg
	this.instance_5 = new lib.clock_bg();
	this.instance_5.setTransform(-2,100.1,0.0507,0.0507,0,0,0,0,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:1.1785,scaleY:1.1785,x:-2.1,y:100.15},4).to({regX:0,regY:0,scaleX:0.9511,scaleY:0.9511,x:-2,y:100.05},3).wait(472));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,18.3,136.10000000000002,149);


(lib.box_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Box_01
	this.instance = new lib.box_outline_black("synched",0);
	this.instance.setTransform(-0.35,-194.1,1,1,0,0,0,-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(357).to({startPosition:45},0).to({_off:true},1).wait(2));

	// box_02
	this.instance_1 = new lib.box_02();
	this.instance_1.setTransform(-7.45,-82.5,1.269,0.79,13.2278);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-0.2,regY:-0.1,scaleX:0.8644,scaleY:1.247,rotation:21.1918,x:30.85,y:-246.2,alpha:1},7,cjs.Ease.cubicIn).to({regX:-0.4,scaleX:0.9678,scaleY:0.9572,rotation:0.8476,x:-0.55,y:-175.75},5,cjs.Ease.quartIn).wait(1).to({regX:0,regY:0,scaleX:1.0056,scaleY:0.9267,rotation:0.5472,x:-0.6081,y:-174.777},0).wait(1).to({scaleX:1.0356,scaleY:0.9025,rotation:0.3093,x:-0.9709,y:-174.0856},0).wait(1).to({scaleX:1.0583,scaleY:0.884,rotation:0.1285,x:-1.2466,y:-173.5603},0).wait(1).to({regX:-0.2,regY:-0.2,scaleX:1.0745,scaleY:0.871,rotation:0,x:-1.75,y:-173.25},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-2,y:-174.5},4).wait(337).to({_off:true},1).wait(2));

	// box_01
	this.instance_2 = new lib.box_01_1();
	this.instance_2.setTransform(-9.95,-188.95,0.6761,0.7394,-1.7915,0,0,-0.1,-0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({scaleX:0.764,scaleY:1.1443,rotation:-10.7568,x:-31.5,y:-268.15},5).to({regY:-0.2,scaleX:0.941,scaleY:1.036,rotation:-2.6896,x:-17.9,y:-231.3},3).to({regX:0,regY:0,scaleX:1.12,scaleY:0.9024,rotation:0,x:-13.5,y:-223.5},1).to({scaleX:1,scaleY:1,y:-225.55},3).wait(333).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-294.6,143.4,245.70000000000002);


(lib.patient_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spike_03
	this.instance = new lib.spike_03();
	this.instance.setTransform(-72.15,76.3,1,1,0,0,0,-25.2,-15.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:-19.15,y:80.3,alpha:1},4).to({x:-27.65,y:78.8},3).wait(7).to({x:-72.15,y:76.3,alpha:0},0).to({x:-19.15,y:80.3,alpha:1},3).to({x:-27.65,y:78.8},3).wait(315).to({_off:true},1).wait(2));

	// spike_02
	this.instance_1 = new lib.spike_02();
	this.instance_1.setTransform(-50.95,36.5,1,1,0,0,0,-24,-26);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:false},0).to({x:-19.45,y:76.5,alpha:1},4).to({x:-26.95,y:68},3).to({_off:true},5).wait(1).to({_off:false,x:-50.95,y:36.5,alpha:0},0).to({x:-19.45,y:76.5,alpha:1},4).to({x:-26.95,y:68},3).wait(313).to({_off:true},1).wait(2));

	// spike_01
	this.instance_2 = new lib.spike_01();
	this.instance_2.setTransform(-2.95,29.2,1,1,0,0,0,-7.5,-25.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({x:-10.45,y:75.7,alpha:1},4).to({x:-9.95,y:67.2},3).to({_off:true},4).wait(2).to({_off:false,x:-2.95,y:29.2,alpha:0},0).to({x:-10.45,y:75.7,alpha:1},4).to({x:-9.95,y:67.2},3).wait(312).to({_off:true},1).wait(2));

	// head
	this.instance_3 = new lib.head_mc();
	this.instance_3.setTransform(-13.35,46.2,1,1,0,0,0,0.1,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({x:-8.75},5).to({x:-13.35},5,cjs.Ease.quadIn).wait(1).to({regX:-0.3,regY:-1.2,x:-1,y:49.2},0).wait(1).to({regX:0.1,regY:-1.1,x:11.3,y:52.3},0).wait(1).to({regX:-0.3,regY:-1.2,x:18.4,y:56.95},0).wait(1).to({regX:0.1,regY:-1.1,x:24.5,y:60.65},0).wait(1).to({regX:-0.3,regY:-1.2,x:27,y:63.85},0).wait(1).to({x:29,y:66.1},0).wait(1).to({x:30.25,y:67.55},0).wait(1).to({regX:0.1,regY:-1.1,x:31.35,y:68.4},0).to({x:30.15,y:67.2},3).wait(10).to({x:35.75,y:74.8},3).to({x:28.15,y:63.9},3).to({x:30.15,y:67.2},3).wait(309).to({_off:true},1).wait(2));

	// torso
	this.instance_4 = new lib.torso_mc();
	this.instance_4.setTransform(-14.05,103.25,1,1,-47.4396,0,0,-12.5,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({rotation:0,x:-14.1},8,cjs.Ease.cubicOut).wait(13).to({x:-13.1,y:106.75},3).to({x:-14.1,y:103.25},3).wait(312).to({_off:true},1).wait(2));

	// arm_top
	this.instance_5 = new lib.arm_top_mc();
	this.instance_5.setTransform(-9.55,73.2,1,1,29.7258,0,0,14,-14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({x:-12.55,y:66.7},5).to({x:-9.55,y:73.2},5).to({regY:-14.8,rotation:0,x:17,y:81.25},8,cjs.Ease.cubicOut).wait(13).to({x:18,y:84.75},3).to({x:17,y:81.25},3).wait(312).to({_off:true},1).wait(2));

	// arm_bottom
	this.instance_6 = new lib.arm_bottom_mc();
	this.instance_6.setTransform(-7.25,89.35,1,1,-12.7147,0,0,24.8,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({rotation:-26.9295,x:-9.2,y:83.3},5).to({rotation:-12.7147,x:-7.25,y:89.35},5).to({regX:24.9,rotation:0,x:27.05,y:94.25},8,cjs.Ease.cubicOut).wait(13).to({rotation:-31.2354,x:28.1,y:97.75},3).to({rotation:0,x:27.05,y:94.25},3).wait(312).to({_off:true},1).wait(2));

	// front_leg_top
	this.instance_7 = new lib.leg_front_top_mc();
	this.instance_7.setTransform(-14,106.35,1,1,26.1967,0,0,-0.5,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({regX:-0.8,regY:-0.2,rotation:0,x:-14.3,y:106.7},8,cjs.Ease.cubicOut).wait(13).to({rotation:-7.7195,x:-14.65,y:109.3},3).to({rotation:0,x:-14.3,y:106.7},3).wait(312).to({_off:true},1).wait(2));

	// front_leg_bottom
	this.instance_8 = new lib.leg_front_bottom_mc();
	this.instance_8.setTransform(-8.9,124.35,1,1,0,0,0,14,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({regY:20,x:-1.4,y:123.35},8,cjs.Ease.cubicOut).wait(13).to({regY:20.1,rotation:4.5124,x:0.4,y:124.2},3).to({regY:20,rotation:0,x:-1.4,y:123.35},3).wait(312).to({_off:true},1).wait(2));

	// back_leg_top
	this.instance_9 = new lib.leg_back_top_mc();
	this.instance_9.setTransform(-17.95,103.75,1,1,-6.9625,0,0,-7.8,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({regY:-3.2,rotation:1.9763,y:103.7},8,cjs.Ease.cubicOut).wait(13).to({rotation:1.9763},0).to({rotation:-4.4976,x:-16.8,y:106.75},3).to({rotation:1.9763,x:-17.95,y:103.7},3).wait(312).to({rotation:1.9763},0).to({_off:true},1).wait(2));

	// back_leg_bottom
	this.instance_10 = new lib.leg_back_bottom_mc();
	this.instance_10.setTransform(-18.3,124.7,1,1,0,0,0,-11.8,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({x:-21.55},8,cjs.Ease.cubicOut).wait(13).to({rotation:13.7133,x:-17.95,y:128.05},3).to({rotation:0,x:-21.55,y:124.7},3).wait(312).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,11.5,180.10000000000002,176.4);


(lib.back_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Box_03
	this.instance = new lib.box_outline_black("synched",0);
	this.instance.setTransform(-0.35,98.7,1,1,0,0,0,-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},358).wait(1));

	// patient
	this.instance_1 = new lib.patient_mc("synched",0);
	this.instance_1.setTransform(-17.15,202.15,0.3829,0.3829,0,0,0,-18.3,98.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-18.4,scaleX:0.8867,scaleY:0.8867,x:-17.25,y:99.65,alpha:1,startPosition:8},8,cjs.Ease.quadOut).to({y:104.65,startPosition:10},2).wait(9).to({startPosition:19},0).to({scaleX:0.9813,scaleY:0.9813,x:-18.85,y:99.45,startPosition:27},8).wait(332));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,14.7,157,208.5);


(lib.Frame_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Box_animation
	this.instance = new lib.box_animation("synched",0);
	this.instance.setTransform(0.4,-154.15,1,1,0,0,0,-0.4,-155.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},358).wait(1));

	// stair_animation
	this.instance_1 = new lib.stair_animation("synched",0);
	this.instance_1.setTransform(15.95,17.4,1,1,0,0,0,16.1,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},358).wait(1));

	// back_animation
	this.instance_2 = new lib.back_animation("synched",0);
	this.instance_2.setTransform(-0.25,131.15,1,1,0,0,0,-0.4,131.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(359));

	// txt
	this.instance_3 = new lib.txt_moving();
	this.instance_3.setTransform(0,242.1,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:232.1},8).to({_off:true},350).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.magnify_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// magnifyingGlass
	this.instance = new lib.magnifying_glass_mc();
	this.instance.setTransform(-1.5,-195.05,0.3474,0.3474,0,0,0,7.5,13.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:13.5,scaleX:1.0211,scaleY:1.0211,y:-195,alpha:1},6).to({scaleX:1,scaleY:1,y:-195.05},4).to({regX:7.6,scaleX:1.2058,scaleY:1.2058,x:21.65,y:-170},6).to({regX:7.5,regY:13.4,scaleX:1.075,scaleY:1.075,x:-40.45,y:-212.2},13,cjs.Ease.quadInOut).to({x:42.55,y:-184.2},8,cjs.Ease.quadInOut).to({scaleX:1.0189,scaleY:1.0189,x:-2.45,y:-195.2},9,cjs.Ease.cubicInOut).wait(447).to({_off:true},1).wait(3));

	// Magifying_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhNBNQgfggAAgtQAAgsAfggQAhggAsgBQAtABAgAgQAgAgAAAsQAAAtggAgQggAhgtAAQgsAAghghg");
	var mask_graphics_1 = new cjs.Graphics().p("AhmBmQgqgqAAg8QAAg7AqgrQArgqA7AAQA8AAAqAqQArArAAA7QAAA8grAqQgqArg8AAQg7AAgrgrg");
	var mask_graphics_2 = new cjs.Graphics().p("Ah/B/Qg0g1AAhKQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhKAAg1g1g");
	var mask_graphics_3 = new cjs.Graphics().p("AiYCYQg/g/AAhZQAAhZA/g/QBAg+BYgBQBZABA/A+QBAA/AABZQAABZhAA/Qg/A/hZAAQhYAAhAg/g");
	var mask_graphics_4 = new cjs.Graphics().p("AiwCxQhKhJAAhoQAAhnBKhJQBJhKBnAAQBoAABKBKQBJBJAABnQAABohJBJQhKBKhoAAQhnAAhJhKg");
	var mask_graphics_5 = new cjs.Graphics().p("AjJDKQhVhUAAh2QAAh2BVhUQBThTB2AAQB2AABUBTQBUBUAAB2QAAB2hUBUQhUBUh2AAQh2AAhThUg");
	var mask_graphics_6 = new cjs.Graphics().p("AjjDjQheheAAiFQAAiEBehfQBfheCEAAQCFAABeBeQBfBfAACEQAACFhfBeQheBfiFAAQiEAAhfhfg");
	var mask_graphics_7 = new cjs.Graphics().p("AjiDiQhdhdAAiEQAAiEBdheQBeheCEAAQCEAABeBeQBeBeAACEQAACEheBdQheBeiEAAQiEAAheheg");
	var mask_graphics_8 = new cjs.Graphics().p("AjhDhQhdhdABiEQgBiDBdhdQBehdCDAAQCEAABdBdQBeBdAACDQAACEheBdQhdBdiEAAQiDAAhehdg");
	var mask_graphics_9 = new cjs.Graphics().p("AjfDgQhdhdABiDQgBiCBdhdQBdhdCCAAQCDAABdBdQBcBdABCCQgBCDhcBdQhdBdiDAAQiCAAhdhdg");
	var mask_graphics_10 = new cjs.Graphics().p("AjeDeQhchbAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBdBcAACCQAACDhdBbQhcBdiCAAQiCAAhchdg");
	var mask_graphics_11 = new cjs.Graphics().p("AjlDmQhghfAAiHQAAiGBghgQBfhfCGAAQCHAABfBfQBgBgAACGQAACHhgBfQhfBgiHAAQiGAAhfhgg");
	var mask_graphics_12 = new cjs.Graphics().p("AjtDuQhjhjAAiLQAAiKBjhjQBjhjCKAAQCLAABjBjQBjBjAACKQAACLhjBjQhjBjiLAAQiKAAhjhjg");
	var mask_graphics_13 = new cjs.Graphics().p("Aj1D1QhlhlAAiQQAAiPBlhmQBmhlCPAAQCQAABlBlQBmBmAACPQAACQhmBlQhlBmiQAAQiPAAhmhmg");
	var mask_graphics_14 = new cjs.Graphics().p("Aj9D9QhohpAAiUQAAiUBohpQBphoCUAAQCUAABpBoQBpBpAACUQAACUhpBpQhpBpiUAAQiUAAhphpg");
	var mask_graphics_15 = new cjs.Graphics().p("AkEEFQhshtAAiYQAAiYBshsQBshsCYAAQCZAABsBsQBsBsAACYQAACYhsBtQhsBsiZAAQiYAAhshsg");
	var mask_graphics_16 = new cjs.Graphics().p("AkMEMQhvhvAAidQAAicBvhwQBwhvCcAAQCdAABvBvQBwBwAACcQAACdhwBvQhvBwidAAQicAAhwhwg");
	var mask_graphics_17 = new cjs.Graphics().p("AkMEMQhuhvAAidQAAicBuhwQBwhuCcAAQCdAABvBuQBvBwAACcQAACdhvBvQhvBvidAAQicAAhwhvg");
	var mask_graphics_18 = new cjs.Graphics().p("AkLELQhuhvAAicQAAibBuhwQBwhuCbAAQCcAABvBuQBvBwAACbQAACchvBvQhvBvicAAQibAAhwhvg");
	var mask_graphics_19 = new cjs.Graphics().p("AkIEJQhuhugBibQABiaBuhvQBthuCbABQCbgBBuBuQBuBvABCaQgBCbhuBuQhuBuibAAQibAAhthug");
	var mask_graphics_20 = new cjs.Graphics().p("AkGEGQhthsAAiaQAAiZBthuQBthsCZAAQCaAABtBsQBtBuAACZQAACahtBsQhtBuiaAAQiZAAhthug");
	var mask_graphics_21 = new cjs.Graphics().p("AkEEEQhqhrAAiZQAAiXBqhtQBthrCXAAQCYAABrBrQBsBtAACXQAACZhsBrQhrBsiYgBQiXABhthsg");
	var mask_graphics_22 = new cjs.Graphics().p("Aj/EAQhqhqAAiWQAAiVBqhrQBqhpCVAAQCWAABqBpQBqBrAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	var mask_graphics_23 = new cjs.Graphics().p("Aj7D7QhohoAAiTQAAiSBohpQBphoCSAAQCUAABoBoQBoBpAACSQAACThoBoQhoBpiUAAQiSAAhphpg");
	var mask_graphics_24 = new cjs.Graphics().p("Aj3D3QhmhmgBiRQABiQBmhoQBnhmCQAAQCSAABmBmQBnBogBCQQABCRhnBmQhmBoiSAAQiQAAhnhog");
	var mask_graphics_25 = new cjs.Graphics().p("Aj0D1QhlhmAAiPQAAiOBlhmQBmhlCOAAQCQAABlBlQBlBmAACOQAACPhlBmQhlBliQAAQiOAAhmhlg");
	var mask_graphics_26 = new cjs.Graphics().p("AjyDyQhkhkAAiOQAAiNBkhlQBlhkCOAAQCNAABlBkQBkBlAACNQAACOhkBkQhlBliNAAQiOAAhlhlg");
	var mask_graphics_27 = new cjs.Graphics().p("AjwDxQhjhkAAiNQAAiMBjhlQBkhiCNgBQCMABBjBiQBlBlgBCMQABCNhlBkQhjBjiMABQiNgBhkhjg");
	var mask_graphics_28 = new cjs.Graphics().p("AjvDvQhjhjAAiMQAAiLBjhkQBkhjCLAAQCNAABjBjQBjBkAACLQAACMhjBjQhjBkiNAAQiLAAhkhkg");
	var mask_graphics_29 = new cjs.Graphics().p("AjuDvQhkhjABiMQgBiLBkhkQBjhjCLAAQCNAABjBjQBiBkABCLQgBCMhiBjQhjBjiNAAQiLAAhjhjg");
	var mask_graphics_30 = new cjs.Graphics().p("AjuDvQhkhjABiMQgBiLBkhkQBjhjCLAAQCMAABkBjQBiBkABCLQgBCMhiBjQhkBjiMAAQiLAAhjhjg");
	var mask_graphics_31 = new cjs.Graphics().p("AjvDvQhihjgBiMQABiLBihkQBkhjCMAAQCLAABjBjQBkBkgBCLQABCMhkBjQhjBjiLAAQiMAAhkhjg");
	var mask_graphics_32 = new cjs.Graphics().p("AjvDvQhihjgBiMQABiLBihkQBkhjCMAAQCLAABjBjQBkBkgBCLQABCMhkBjQhjBjiLAAQiMAAhkhjg");
	var mask_graphics_33 = new cjs.Graphics().p("AjuDvQhkhjABiMQgBiLBkhkQBjhiCLAAQCNAABjBiQBiBkAACLQAACMhiBjQhjBkiNgBQiLABhjhkg");
	var mask_graphics_34 = new cjs.Graphics().p("AjvDvQhjhjAAiMQAAiLBjhkQBkhjCLAAQCMAABkBjQBjBkAACLQAACMhjBjQhkBjiMAAQiLAAhkhjg");
	var mask_graphics_35 = new cjs.Graphics().p("AjuDvQhjhjAAiMQAAiLBjhkQBjhiCMgBQCMABBiBiQBjBkAACLQAACMhjBjQhiBjiMABQiMgBhjhjg");
	var mask_graphics_36 = new cjs.Graphics().p("AjvDvQhihjgBiMQABiLBihkQBkhiCMAAQCMAABiBiQBkBkgBCLQABCMhkBjQhiBjiMAAQiMAAhkhjg");
	var mask_graphics_37 = new cjs.Graphics().p("AjuDvQhjhjAAiMQAAiLBjhkQBjhjCMAAQCMAABiBjQBjBkAACLQAACMhjBjQhiBjiMABQiMgBhjhjg");
	var mask_graphics_38 = new cjs.Graphics().p("AjsDsQhihiAAiKQAAiJBihjQBihiCKAAQCLAABiBiQBiBjAACJQAACKhiBiQhiBjiLAAQiKAAhihjg");
	var mask_graphics_39 = new cjs.Graphics().p("AjqDqQhhhhAAiJQAAiIBhhiQBihgCIAAQCJAABiBgQBhBiAACIQAACJhhBhQhiBhiJAAQiIAAhihhg");
	var mask_graphics_40 = new cjs.Graphics().p("AjoDoQhghgAAiIQAAiHBghhQBhhgCIAAQCHAABhBgQBgBhAACHQAACIhgBgQhhBhiHAAQiIAAhhhhg");
	var mask_graphics_41 = new cjs.Graphics().p("AjmDmQhfhfAAiHQAAiGBfhgQBghfCHAAQCGAABfBfQBhBggBCGQABCHhhBfQhfBgiGAAQiHAAhghgg");
	var mask_graphics_42 = new cjs.Graphics().p("AjlDlQhfhfABiGQgBiFBfhgQBghfCGAAQCFAABfBfQBfBgABCFQgBCGhfBfQhfBfiFAAQiGAAhghfg");
	var mask_graphics_43 = new cjs.Graphics().p("AjjDkQhfhfAAiFQAAiEBfhgQBfheCEAAQCGAABeBeQBfBgAACEQAACFhfBfQheBfiGAAQiEAAhfhfg");
	var mask_graphics_44 = new cjs.Graphics().p("AjjDjQheheAAiFQAAiEBehfQBfheCFAAQCEAABfBeQBeBfAACEQAACFheBeQhfBfiEAAQiFAAhfhfg");
	var mask_graphics_45 = new cjs.Graphics().p("AjiDjQheheAAiFQAAiEBehfQBehdCEAAQCFAABeBdQBeBfAACEQAACFheBeQheBeiFAAQiEAAheheg");
	var mask_graphics_46 = new cjs.Graphics().p("AjiDiQheheAAiEQAAiDBehfQBeheCEAAQCFAABeBeQBeBfAACDQAACEheBeQheBfiFAAQiEAAhehfg");
	var mask_graphics_493 = new cjs.Graphics().p("AjiDiQheheAAiEQAAiDBehfQBeheCEAAQCFAABeBeQBeBfAACDQAACEheBeQheBfiFAAQiEAAhehfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-4.65,y:-200.25}).wait(1).to({graphics:mask_graphics_1,x:-5.675,y:-201.95}).wait(1).to({graphics:mask_graphics_2,x:-6.675,y:-203.625}).wait(1).to({graphics:mask_graphics_3,x:-7.7,y:-205.3}).wait(1).to({graphics:mask_graphics_4,x:-8.75,y:-207}).wait(1).to({graphics:mask_graphics_5,x:-9.75,y:-208.675}).wait(1).to({graphics:mask_graphics_6,x:-10.775,y:-210.375}).wait(1).to({graphics:mask_graphics_7,x:-10.7,y:-210.3}).wait(1).to({graphics:mask_graphics_8,x:-10.65,y:-210.2}).wait(1).to({graphics:mask_graphics_9,x:-10.6,y:-210.125}).wait(1).to({graphics:mask_graphics_10,x:-10.55,y:-210.05}).wait(1).to({graphics:mask_graphics_11,x:-7.025,y:-206.425}).wait(1).to({graphics:mask_graphics_12,x:-3.475,y:-202.775}).wait(1).to({graphics:mask_graphics_13,x:0.075,y:-199.125}).wait(1).to({graphics:mask_graphics_14,x:3.6,y:-195.5}).wait(1).to({graphics:mask_graphics_15,x:7.15,y:-191.85}).wait(1).to({graphics:mask_graphics_16,x:10.675,y:-188.225}).wait(1).to({graphics:mask_graphics_17,x:9.975,y:-188.7}).wait(1).to({graphics:mask_graphics_18,x:7.8,y:-190.125}).wait(1).to({graphics:mask_graphics_19,x:4.2,y:-192.5}).wait(1).to({graphics:mask_graphics_20,x:-0.85,y:-195.8}).wait(1).to({graphics:mask_graphics_21,x:-7.3,y:-200.1}).wait(1).to({graphics:mask_graphics_22,x:-15.225,y:-205.3}).wait(1).to({graphics:mask_graphics_23,x:-24.25,y:-211.225}).wait(1).to({graphics:mask_graphics_24,x:-32.15,y:-216.425}).wait(1).to({graphics:mask_graphics_25,x:-38.625,y:-220.725}).wait(1).to({graphics:mask_graphics_26,x:-43.675,y:-224.025}).wait(1).to({graphics:mask_graphics_27,x:-47.25,y:-226.4}).wait(1).to({graphics:mask_graphics_28,x:-49.45,y:-227.825}).wait(1).to({graphics:mask_graphics_29,x:-50.15,y:-228.3}).wait(1).to({graphics:mask_graphics_30,x:-47.55,y:-227.4}).wait(1).to({graphics:mask_graphics_31,x:-39.75,y:-224.8}).wait(1).to({graphics:mask_graphics_32,x:-26.8,y:-220.4}).wait(1).to({graphics:mask_graphics_33,x:-8.65,y:-214.3}).wait(1).to({graphics:mask_graphics_34,x:9.5,y:-208.15}).wait(1).to({graphics:mask_graphics_35,x:22.5,y:-203.8}).wait(1).to({graphics:mask_graphics_36,x:30.25,y:-201.15}).wait(1).to({graphics:mask_graphics_37,x:32.85,y:-200.3}).wait(1).to({graphics:mask_graphics_38,x:23.525,y:-202.425}).wait(1).to({graphics:mask_graphics_39,x:15.275,y:-204.3}).wait(1).to({graphics:mask_graphics_40,x:8.125,y:-205.925}).wait(1).to({graphics:mask_graphics_41,x:2.1,y:-207.325}).wait(1).to({graphics:mask_graphics_42,x:-2.85,y:-208.45}).wait(1).to({graphics:mask_graphics_43,x:-6.7,y:-209.325}).wait(1).to({graphics:mask_graphics_44,x:-9.45,y:-209.95}).wait(1).to({graphics:mask_graphics_45,x:-11.1,y:-210.325}).wait(1).to({graphics:mask_graphics_46,x:-11.65,y:-210.45}).wait(447).to({graphics:mask_graphics_493,x:-11.65,y:-210.45}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// Dr_mc
	this.instance_1 = new lib.Dr_mc("synched",0);
	this.instance_1.setTransform(-11,-176,3.2403,3.2403,0,0,0,-0.8,-0.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({regX:-0.5,scaleX:1,scaleY:1,x:-10,y:-206,alpha:1},30).wait(447).to({startPosition:182},0).to({_off:true},1).wait(3));

	// Box_01
	this.instance_2 = new lib.box_outline_blue_1("synched",0);
	this.instance_2.setTransform(-0.35,-194.1,1,1,0,0,0,-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(493).to({startPosition:133},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-269.6,185.1,164.10000000000002);


(lib.Frame_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clock_animation
	this.instance = new lib.clock_animation("synched",0);
	this.instance.setTransform(-1.2,98.5,1,1,0,0,0,-0.4,98.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(494));

	// trashCan_animation
	this.instance_1 = new lib.trashCan_animation("synched",0);
	this.instance_1.setTransform(-9.2,-25.1,1,1,0,0,0,-7.5,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(494));

	// magnify_animation
	this.instance_2 = new lib.magnify_animation("synched",0);
	this.instance_2.setTransform(-0.1,-194.55,1,1,0,0,0,-0.4,-194.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(494));

	// text_Better
	this.instance_3 = new lib.txt_makeBetter();
	this.instance_3.setTransform(-0.5,348);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:229},10,cjs.Ease.quadOut).wait(484));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,684);


// stage content:
(lib.BSWH_moving_300x600_v02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXRgutMAujAAAMAAABdbMgujAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(334));

	// Frame_01
	this.instance = new lib.Frame_01("synched",0);
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({mode:"independent"},0).to({x:-150},23,cjs.Ease.quadInOut).to({_off:true},1).wait(259));

	// Frame_02
	this.instance_1 = new lib.Frame_02("single",0);
	this.instance_1.setTransform(449.05,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({x:149.9,y:300.75,mode:"independent"},23,cjs.Ease.quadInOut).wait(67).to({x:150.05,y:300},0).to({x:-151.95},24,cjs.Ease.quadInOut).to({_off:true},1).wait(168));

	// Frame_03
	this.instance_2 = new lib.Frame_03("single",0);
	this.instance_2.setTransform(450.05,300,1,1,0,0,0,0,9.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(153).to({_off:false},0).to({x:148.05,mode:"independent"},24,cjs.Ease.quadInOut).wait(157));

	// background
	this.instance_3 = new lib.background();
	this.instance_3.setTransform(596,300,1,1,0,0,0,446,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({x:294},31,cjs.Ease.quadInOut).wait(71).to({x:4},32,cjs.Ease.quadInOut).wait(149));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-442,300,1634,501.9);
// library properties:
lib.properties = {
	id: 'B5667063D0B4493788B67C1C568AC454',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arrow.png", id:"arrow"},
		{src:"images/back.png", id:"back"},
		{src:"images/box_01.png", id:"box_01"},
		{src:"images/box_2.png", id:"box_2"},
		{src:"images/box_outline.png", id:"box_outline"},
		{src:"images/box_outline_blue.png", id:"box_outline_blue"},
		{src:"images/brownBG.jpg", id:"brownBG"},
		{src:"images/clock_arm.png", id:"clock_arm"},
		{src:"images/clock_BG.png", id:"clock_BG"},
		{src:"images/clock_ticks.png", id:"clock_ticks"},
		{src:"images/clock_yellow_bar.png", id:"clock_yellow_bar"},
		{src:"images/ctaTxt.png", id:"ctaTxt"},
		{src:"images/dr_image.png", id:"dr_image"},
		{src:"images/dr_stethoscope.png", id:"dr_stethoscope"},
		{src:"images/magnifyGlass.png", id:"magnifyGlass"},
		{src:"images/safeCare_logo.png", id:"safeCare_logo"},
		{src:"images/stairPart.png", id:"stairPart"},
		{src:"images/trashCan.png", id:"trashCan"},
		{src:"images/trashCan_yellow_bar.png", id:"trashCan_yellow_bar"},
		{src:"images/txt_painful.png", id:"txt_painful"},
		{src:"images/txt_staySafe.png", id:"txt_staySafe"},
		{src:"images/txt_weCanMakeItBetter.png", id:"txt_weCanMakeItBetter"},
		{src:"images/white_bg.jpg", id:"white_bg"},
		{src:"images/wht_trashcan.png", id:"wht_trashcan"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B5667063D0B4493788B67C1C568AC454'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;