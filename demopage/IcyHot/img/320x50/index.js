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



(lib.back_image = function() {
	this.initialize(img.back_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,314);


(lib.ctaBtn = function() {
	this.initialize(img.ctaBtn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,42);


(lib.drip_01 = function() {
	this.initialize(img.drip_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,90);


(lib.drip_01a = function() {
	this.initialize(img.drip_01a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,116);


(lib.drip_02 = function() {
	this.initialize(img.drip_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,90);


(lib.drip_03 = function() {
	this.initialize(img.drip_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,90);


(lib.drip_image = function() {
	this.initialize(img.drip_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,90);


(lib.sprayBottle = function() {
	this.initialize(img.sprayBottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,90);


(lib.text_sheet = function() {
	this.initialize(img.text_sheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,264);// helper functions:

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


(lib.txt_trademark = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ApLCmIAAlLISXAAIAAFLg");
	mask.setTransform(531.3,-502.375);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(300,-750);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_trademark, new cjs.Rectangle(472.5,-519,117.60000000000002,33), null);


(lib.txt_rise = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ak/EnIAApNIJ/AAIAAJNg");
	mask.setTransform(177.6,-36.5);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(150,-231);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_rise, new cjs.Rectangle(150,-66,59.599999999999994,59), null);


(lib.txt_peoplePrefer = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("A00DFIAAmJMAppAAAIAAGJg");
	mask.setTransform(29.3,-110.25);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-125,-136);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_peoplePrefer, new cjs.Rectangle(-104,-130,266.6,39.5), null);


(lib.txt_over = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AkGDIIAAmPIINAAIAAGPg");
	mask.setTransform(50.3,-192.55);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-124,-259);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_over, new cjs.Rectangle(24,-212.5,52.599999999999994,40), null);


(lib.txt_onTheGo = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AwPD8IAAn4MAgfAAAIAAH4g");
	mask.setTransform(434.55,-137.2);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-36,-269);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onTheGo, new cjs.Rectangle(330.6,-162.4,192.39999999999998,50.5), null);


(lib.txt_lessMessy = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AsuEfIAAo+IZdAAIAAI+g");
	mask.setTransform(36.55,-134.2);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-37,-268);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_lessMessy, new cjs.Rectangle(-37,-162.9,155.1,57.5), null);


(lib.txt_IcyHot_02 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AuhEEIAAoHIdDAAIAAIHg");
	mask.setTransform(446.05,-40);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(149,-230);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_IcyHot_02, new cjs.Rectangle(353.1,-66,186,52), null);


(lib.txt_fromPain = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AqvD1IAAnpIVeAAIAAHpg");
	mask.setTransform(277.3,-37.5);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(149,-230);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fromPain, new cjs.Rectangle(208.6,-62,137.50000000000003,49), null);


(lib.txt_easyApply = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AwFDyIAAnkMAgLAAAIAAHkg");
	mask.setTransform(223.55,-136.2);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-37,-269);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_easyApply, new cjs.Rectangle(120.6,-160.4,206.00000000000003,48.5), null);


(lib.txt_disclaimer = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AnOBpIAAjRIOdAAIAADRg");
	mask.setTransform(339.4,-495.65);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(300,-750);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_disclaimer, new cjs.Rectangle(300,-506.1,85.69999999999999,20.100000000000023), null);


(lib.txt_biofreeze = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AoWC8IAAl3IQuAAIAAF3g");
	mask.setTransform(131.55,-190.75);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-124,-259);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_biofreeze, new cjs.Rectangle(78,-209.5,107.1,37.5), null);


(lib.spray_bottle = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sprayBottle();
	this.instance.setTransform(-143,-451,0.5697,0.5697);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spray_bottle, new cjs.Rectangle(-143,-451,25.099999999999994,51.30000000000001), null);


(lib.Icy_hot_logo = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ArhDDIAAmFIXDAAIAAGFg");
	mask.setTransform(-53.7,-71.5);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-125,-136);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Icy_hot_logo, new cjs.Rectangle(-125,-91,145.1,39), null);


(lib.drip_03_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.drip_03();
	this.instance.setTransform(-150,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_03_1, new cjs.Rectangle(-150,-57.5,318,90), null);


(lib.drip_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.drip_02();
	this.instance.setTransform(-150,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_02_1, new cjs.Rectangle(-150,-57.5,318,90), null);


(lib.drip_01a_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.drip_image();
	this.instance.setTransform(-173,-50,1.1167,1.1167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.drip_01a();
	this.instance_1.setTransform(-150,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_01a_mc, new cjs.Rectangle(-173,-58,355.1,116), null);


(lib.drip_01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.drip_01();
	this.instance.setTransform(-177,-52,1.1104,1.1104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_01_1, new cjs.Rectangle(-177,-52,353.1,100), null);


(lib.ctaBtn_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ctaBtn();
	this.instance.setTransform(-43,-231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn_1, new cjs.Rectangle(-43,-231,173,42), null);


(lib.back_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.back_image();
	this.instance.setTransform(-177.35,-58,0.3695,0.3695);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_mc, new cjs.Rectangle(-177.3,-58,354.70000000000005,116), null);


(lib.back_image_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// line_animation
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAIcIAAw3");
	this.shape.setTransform(1,-115.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAApdIAAS7");
	this.shape_1.setTransform(1,-100.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAqWIAAUt");
	this.shape_2.setTransform(1,-88.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAArHIAAWP");
	this.shape_3.setTransform(1,-77.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAArwIAAXh");
	this.shape_4.setTransform(1,-68.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAsSIAAYl");
	this.shape_5.setTransform(1,-60.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAsvIAAZf");
	this.shape_6.setTransform(1,-54.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAtGIAAaN");
	this.shape_7.setTransform(1,-49.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAtZIAAaz");
	this.shape_8.setTransform(1,-45.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAtoIAAbR");
	this.shape_9.setTransform(1,-42);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAt0IAAbp");
	this.shape_10.setTransform(1,-39.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAt9IAAb7");
	this.shape_11.setTransform(1,-37.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAuDIAAcH");
	this.shape_12.setTransform(1,-36);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAuIIAAcR");
	this.shape_13.setTransform(1,-34.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAuLIAAcX");
	this.shape_14.setTransform(1,-34.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAuNIAAcb");
	this.shape_15.setTransform(1,-33.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAuPIAAcf");
	this.shape_16.setTransform(1,-33.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAuQIAAch");
	this.shape_17.setTransform(1,-33.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2,2,1).p("AAAORIAA8h");
	this.shape_18.setTransform(1,-33.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},22).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:-33.5}}]},1).to({state:[{t:this.shape_16,p:{y:-33.325}}]},1).to({state:[{t:this.shape_17,p:{y:-33.25}}]},1).to({state:[{t:this.shape_17,p:{y:-33.225}}]},1).to({state:[{t:this.shape_17,p:{y:-33.225}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},12).to({state:[]},1).wait(3));

	// hotSpray_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_17 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_18 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_19 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_20 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_21 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_22 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_23 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_24 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_25 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_26 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_27 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_28 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_29 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_30 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_31 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_32 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_33 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_34 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_35 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_36 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_37 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_38 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_39 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_40 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_41 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_42 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_43 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_55 = new cjs.Graphics().p("AmfJJIAKyZQACAFKsgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:-200.8699,y:0.525}).wait(1).to({graphics:mask_graphics_17,x:-191.7699,y:0.525}).wait(1).to({graphics:mask_graphics_18,x:-183.6699,y:0.525}).wait(1).to({graphics:mask_graphics_19,x:-176.4699,y:0.525}).wait(1).to({graphics:mask_graphics_20,x:-170.1199,y:0.525}).wait(1).to({graphics:mask_graphics_21,x:-164.5199,y:0.525}).wait(1).to({graphics:mask_graphics_22,x:-159.6699,y:0.525}).wait(1).to({graphics:mask_graphics_23,x:-155.4199,y:0.525}).wait(1).to({graphics:mask_graphics_24,x:-151.8199,y:0.525}).wait(1).to({graphics:mask_graphics_25,x:-148.7199,y:0.525}).wait(1).to({graphics:mask_graphics_26,x:-146.0699,y:0.525}).wait(1).to({graphics:mask_graphics_27,x:-143.8699,y:0.525}).wait(1).to({graphics:mask_graphics_28,x:-142.0699,y:0.525}).wait(1).to({graphics:mask_graphics_29,x:-140.5699,y:0.525}).wait(1).to({graphics:mask_graphics_30,x:-139.3699,y:0.525}).wait(1).to({graphics:mask_graphics_31,x:-138.4199,y:0.525}).wait(1).to({graphics:mask_graphics_32,x:-137.6699,y:0.525}).wait(1).to({graphics:mask_graphics_33,x:-137.0699,y:0.525}).wait(1).to({graphics:mask_graphics_34,x:-136.6699,y:0.525}).wait(1).to({graphics:mask_graphics_35,x:-136.3699,y:0.525}).wait(1).to({graphics:mask_graphics_36,x:-136.1699,y:0.525}).wait(1).to({graphics:mask_graphics_37,x:-136.0199,y:0.525}).wait(1).to({graphics:mask_graphics_38,x:-135.9699,y:0.525}).wait(1).to({graphics:mask_graphics_39,x:-135.9199,y:0.525}).wait(1).to({graphics:mask_graphics_40,x:-135.8699,y:0.525}).wait(1).to({graphics:mask_graphics_41,x:-135.8699,y:0.525}).wait(1).to({graphics:mask_graphics_42,x:-135.8699,y:0.525}).wait(1).to({graphics:mask_graphics_43,x:-135.8699,y:0.525}).wait(12).to({graphics:mask_graphics_55,x:-135.8699,y:0.525}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// hotSpray_LT
	this.instance = new lib.drip_01a_mc();
	this.instance.setTransform(-69,-0.45);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({x:-4},27,cjs.Ease.quartOut).wait(12).to({_off:true},1).wait(3));

	// hotSpray_RT_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_16 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_19 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_22 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_23 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_25 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_27 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_35 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_36 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_38 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_40 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_42 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");
	var mask_1_graphics_55 = new cjs.Graphics().p("Aj1JiIgFhDQgGg3gHg3QgNhtgHABQgIACgcgJQgfgKgegQQgcgPgDgcQAAgGAGg4QADgdApgVQAVgKAUgFQgpjdgJhpQgFg0AhgnIAVgVQAJgIgDgDQgXgXAJgyQAFgaAJgVIAKgNQAMgOADgIQAFgMgZgUIAOgFQALgGgNgJQgWgQAEgVQACgLAGgHQgBgCFogJIFpgJIgFTDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_1_graphics_16,x:190.9481,y:0.025}).wait(1).to({graphics:mask_1_graphics_17,x:182.8981,y:0.025}).wait(1).to({graphics:mask_1_graphics_18,x:175.6981,y:0.025}).wait(1).to({graphics:mask_1_graphics_19,x:169.3481,y:0.025}).wait(1).to({graphics:mask_1_graphics_20,x:163.7481,y:0.025}).wait(1).to({graphics:mask_1_graphics_21,x:158.7981,y:0.025}).wait(1).to({graphics:mask_1_graphics_22,x:154.4981,y:0.025}).wait(1).to({graphics:mask_1_graphics_23,x:150.7481,y:0.025}).wait(1).to({graphics:mask_1_graphics_24,x:147.5481,y:0.025}).wait(1).to({graphics:mask_1_graphics_25,x:144.7981,y:0.025}).wait(1).to({graphics:mask_1_graphics_26,x:142.4981,y:0.025}).wait(1).to({graphics:mask_1_graphics_27,x:140.5481,y:0.025}).wait(1).to({graphics:mask_1_graphics_28,x:138.9481,y:0.025}).wait(1).to({graphics:mask_1_graphics_29,x:137.5981,y:0.025}).wait(1).to({graphics:mask_1_graphics_30,x:136.5481,y:0.025}).wait(1).to({graphics:mask_1_graphics_31,x:135.6981,y:0.025}).wait(1).to({graphics:mask_1_graphics_32,x:135.0481,y:0.025}).wait(1).to({graphics:mask_1_graphics_33,x:134.5481,y:0.025}).wait(1).to({graphics:mask_1_graphics_34,x:134.1481,y:0.025}).wait(1).to({graphics:mask_1_graphics_35,x:133.8981,y:0.025}).wait(1).to({graphics:mask_1_graphics_36,x:133.6981,y:0.025}).wait(1).to({graphics:mask_1_graphics_37,x:133.5981,y:0.025}).wait(1).to({graphics:mask_1_graphics_38,x:133.4981,y:0.025}).wait(1).to({graphics:mask_1_graphics_39,x:133.4981,y:0.025}).wait(1).to({graphics:mask_1_graphics_40,x:133.4481,y:0.025}).wait(1).to({graphics:mask_1_graphics_41,x:133.4481,y:0.025}).wait(1).to({graphics:mask_1_graphics_42,x:133.4481,y:0.025}).wait(1).to({graphics:mask_1_graphics_43,x:133.4481,y:0.025}).wait(12).to({graphics:mask_1_graphics_55,x:133.4481,y:0.025}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// hotSpray_RT
	this.instance_1 = new lib.drip_01a_mc();
	this.instance_1.setTransform(53.5,-0.45);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({x:-4},27,cjs.Ease.quartOut).wait(12).to({_off:true},1).wait(3));

	// Layer_1
	this.instance_2 = new lib.back_mc();
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},16).wait(39).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242,-170.5,474.2,230.6);


(lib.drip_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_112 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(112).call(this.frame_112).wait(1));

	// Layer_6
	this.instance = new lib.back_image_1("synched",0);
	this.instance.setTransform(3.35,-5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({startPosition:47},0).to({alpha:0},9).to({_off:true},1).wait(56));

	// drip_01
	this.instance_1 = new lib.drip_01_1();
	this.instance_1.setTransform(4.8,-4.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(20).to({alpha:0},18).wait(28));

	// drip_02
	this.instance_2 = new lib.drip_02_1();
	this.instance_2.setTransform(-5.25,7.75,1.1033,1.1033);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).wait(27).to({alpha:0},18).wait(1));

	// drip_03
	this.instance_3 = new lib.drip_03_1();
	this.instance_3.setTransform(-5.9,8.15,1.1066,1.1066);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.6,-175.8,474.1,230.60000000000002);


// stage content:
(lib.ICY_DrySpray_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [358];
	// timeline functions:
	this.frame_358 = function() {
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(358).call(this.frame_358).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A41jvMAxrAAAIAAHfMgxrAAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(359));

	// trademark
	this.instance = new lib.txt_trademark();
	this.instance.setTransform(10.1,150.05,0.5251,0.5251,0,0,0,2.9,-290.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// disclaimer
	this.instance_1 = new lib.txt_disclaimer();
	this.instance_1.setTransform(17.35,320.1,0.56,0.56,0,0,0,-37.3,-4.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},11).wait(109).to({alpha:0},10).wait(1).to({x:57.35,y:318.6},0).to({alpha:1},9).wait(219));

	// txt_people_prefer
	this.instance_2 = new lib.txt_peoplePrefer();
	this.instance_2.setTransform(68.95,71.45,0.56,0.56,0,0,0,-3.6,-7.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// icyHot_logo_01
	this.instance_3 = new lib.Icy_hot_logo();
	this.instance_3.setTransform(68,95.3,0.5061,0.5061,0,0,0,-2.8,48);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},11).wait(101).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_over
	this.instance_4 = new lib.txt_over();
	this.instance_4.setTransform(67.85,301.6,0.56,0.56,0,0,0,-4.8,284);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_biofreeze
	this.instance_5 = new lib.txt_biofreeze();
	this.instance_5.setTransform(68.2,233.45,0.56,0.56,0,0,0,-4.2,162.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// drip_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ArPD4IAAnvIWfAAIAAHvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:248.075,y:24.825}).wait(131).to({graphics:null,x:0,y:0}).wait(228));

	// drip_animation
	this.instance_6 = new lib.drip_animation("synched",0,false);
	this.instance_6.setTransform(252.45,27.85,0.4587,0.4587,0,0,0,0.8,0.1);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_lessMessy
	this.instance_7 = new lib.txt_lessMessy();
	this.instance_7.setTransform(59.75,94.8,0.4933,0.4933,0,0,0,0.3,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(151).to({_off:false},0).wait(65).to({alpha:0},10).to({_off:true},1).wait(132));

	// txt_easyApply
	this.instance_8 = new lib.txt_easyApply();
	this.instance_8.setTransform(59.75,95.3,0.4933,0.4933,0,0,0,0.3,0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(158).to({_off:false},0).wait(60).to({alpha:0},10).to({_off:true},1).wait(130));

	// txt_onTheGo
	this.instance_9 = new lib.txt_onTheGo();
	this.instance_9.setTransform(59,94.55,0.4933,0.4933,0,0,0,0.3,0.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(164).to({_off:false},0).wait(56).to({alpha:0},10).to({_off:true},1).wait(128));

	// spray_bottle
	this.instance_10 = new lib.spray_bottle();
	this.instance_10.setTransform(150.5,504);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(131).to({_off:false},0).to({y:448.5},11,cjs.Ease.quadOut).to({y:449.5},5).wait(212));

	// txt_rise
	this.instance_11 = new lib.txt_rise();
	this.instance_11.setTransform(69.95,57.7,0.4474,0.4474,0,0,0,0.2,0.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(231).to({_off:false},0).to({y:45.2,alpha:1},9).wait(119));

	// txt_FromPain
	this.instance_12 = new lib.txt_fromPain();
	this.instance_12.setTransform(92.25,-1.45,0.4474,0.4474,0,0,0,49.8,-103.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(240).to({_off:false},0).to({alpha:1},9).wait(110));

	// txt_icyHot_02
	this.instance_13 = new lib.txt_IcyHot_02();
	this.instance_13.setTransform(272.3,26.35,0.4902,0.4902,0,0,0,448.2,-39.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(249).to({_off:false},0).to({alpha:1},10).wait(100));

	// cta_btn_Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_259 = new cjs.Graphics().p("AmnBsQgcAAgHgJQgFgHAAggIAAh6QAAgfAFgGQAGgIAdAAINKAAQAeAAAHAIQAIAHAAAeIAAB6QAAAfgIAIQgHAJgeAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_1_graphics_259,x:85.15,y:27.725}).wait(100));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUYg");
	this.shape_1.setTransform(31.025,-4);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUZg");
	this.shape_2.setTransform(31.125,-3.95);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUYg");
	this.shape_3.setTransform(31.325,-3.9);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUZg");
	this.shape_4.setTransform(32.575,-3.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},268).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4,p:{x:32.575,y:-3.4}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4,p:{x:42.975,y:0.65}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4,p:{x:134.475,y:36.2}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:151.875,y:42.95}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268).to({_off:false},0).wait(2).to({_off:true},1).wait(6).to({_off:false,x:38.875,y:-0.95},0).to({_off:true},1).wait(6).to({_off:false,x:106.075,y:25.15},0).wait(1).to({x:117.875,y:29.75},0).wait(1).to({x:127.225,y:33.35},0).to({_off:true},1).wait(4).to({_off:false,x:149.125,y:41.9},0).to({_off:true},1).wait(1).to({_off:false,x:151.225,y:42.7},0).to({_off:true},1).wait(4).to({_off:false,x:151.975,y:43},0).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(271).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:31.775,y:-3.7},0).to({_off:true},1).wait(5).to({_off:false,x:48.525,y:2.8},0).to({_off:true},1).wait(2).to({_off:false,x:76.925,y:13.85},0).to({_off:true},1).wait(5).to({_off:false,x:140.025,y:38.35},0).wait(1).to({x:144.125,y:39.95},0).to({_off:true},1).wait(2).to({_off:false,x:150.425,y:42.4},0).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(272).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:33.875,y:-2.9},0).wait(1).to({x:35.925,y:-2.1},0).to({_off:true},1).wait(3).to({_off:false,x:55.775,y:5.65},0).wait(1).to({x:65.125,y:9.25},0).to({_off:true},1).wait(1).to({_off:false,x:91.525,y:19.5},0).to({_off:true},1).wait(6).to({_off:false,x:147.075,y:41.1},0).to({_off:true},1).wait(3).to({_off:false,x:151.675,y:42.9},0).to({_off:true},1).wait(1).to({_off:false,x:151.975,y:43},0).wait(1).to({_off:true},1).wait(61));

	// ctaBtn
	this.instance_14 = new lib.ctaBtn_1();
	this.instance_14.setTransform(85.65,27.3,0.5415,0.5415,0,0,0,44.1,-210.8);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(259).to({_off:false},0).to({alpha:1},9).wait(91));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D0707").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_5.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(359));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(160,-74.1,399.29999999999995,221.29999999999998);
// library properties:
lib.properties = {
	id: '772C3DE947D34FE6BD5A9DB7A0B9B804',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"back_image.jpg", id:"back_image"},
		{src:"ctaBtn.png", id:"ctaBtn"},
		{src:"drip_01.jpg", id:"drip_01"},
		{src:"drip_01a.jpg", id:"drip_01a"},
		{src:"drip_02.jpg", id:"drip_02"},
		{src:"drip_03.jpg", id:"drip_03"},
		{src:"drip_image.jpg", id:"drip_image"},
		{src:"sprayBottle.jpg", id:"sprayBottle"},
		{src:"text_sheet.png", id:"text_sheet"}
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
an.compositions['772C3DE947D34FE6BD5A9DB7A0B9B804'] = {
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