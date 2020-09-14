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
p.nominalBounds = new cjs.Rectangle(0,0,118,27);


(lib.drip_01 = function() {
	this.initialize(img.drip_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,115);


(lib.drip_01a = function() {
	this.initialize(img.drip_01a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,116);


(lib.drip_02 = function() {
	this.initialize(img.drip_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,115);


(lib.drip_03 = function() {
	this.initialize(img.drip_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,115);


(lib.sprayBottle = function() {
	this.initialize(img.sprayBottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,239);


(lib.text_sheet = function() {
	this.initialize(img.text_sheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,418);// helper functions:

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
	mask.graphics.p("Aq3B5IAAjxIVvAAIAADxg");
	mask.setTransform(95.05,-338.375);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-62,-741);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_trademark, new cjs.Rectangle(25.5,-350.5,139.1,24.30000000000001), null);


(lib.txt_theyAgree = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AqdkyIAAmBIU7AAIAAGBg");
	mask.setTransform(35.05,-69.225);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-28,-219);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_theyAgree, new cjs.Rectangle(-28,-138.4,130.1,38.5), null);


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
	mask.graphics.p("AobH5IAAvxIQ3AAIAAPxg");
	mask.setTransform(63.05,-14);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(4,-276);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_rise, new cjs.Rectangle(9.1,-64.5,108,101), null);


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
	mask.graphics.p("AzLDFIAAmKMAmXAAAIAAGKg");
	mask.setTransform(-3.2,-85.8);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-137,-105);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_peoplePrefer, new cjs.Rectangle(-126,-105,245.6,39), null);


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
	mask.graphics.p("AjZDQIAAmeIGzAAIAAGeg");
	mask.setTransform(18.35,-165.75);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-137,-227);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_over, new cjs.Rectangle(-3.4,-186.5,43.6,41.5), null);


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
	mask.graphics.p("ArKCdIAAk6IWVAAIAAE6g");
	mask.setTransform(62.55,-21.2);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-28,-218);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onTheGo, new cjs.Rectangle(-8.9,-36.9,143,31.5), null);


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
	mask.graphics.p("Aqdh5IAAmBIU7AAIAAGBg");
	mask.setTransform(56.55,-50.725);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-28,-218);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_lessMessy, new cjs.Rectangle(-10.4,-101.4,134,38.50000000000001), null);


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
	mask.graphics.p("AqbIwIAAl8IU3AAIAAF8g");
	mask.setTransform(61.3,56);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(4,-276);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_IcyHot_02, new cjs.Rectangle(4,74,124.1,38), null);


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
	mask.graphics.p("AoeC7IAAl1IQ9AAIAAF1g");
	mask.setTransform(61.3,55.25);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(4,-275);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fromPain, new cjs.Rectangle(7.1,36.5,108.5,37.5), null);


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
	mask.graphics.p("Ap/CiIAAlEIT/AAIAAFEg");
	mask.setTransform(55.05,-51.7);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-28,-219);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_easyApply, new cjs.Rectangle(-8.9,-67.9,128,32.50000000000001), null);


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
	mask.graphics.p("AlYBVIAAipIKyAAIAACpg");
	mask.setTransform(-30.45,-335.5);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-62,-741);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_disclaimer, new cjs.Rectangle(-62,-344,66.1,17), null);


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
	mask.graphics.p("AnlETIAAolIPLAAIAAIlg");
	mask.setTransform(89.05,-161);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-137,-228);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_biofreeze, new cjs.Rectangle(40.5,-188.5,88.5,55), null);


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
	this.instance.setTransform(-118,-437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spray_bottle, new cjs.Rectangle(-118,-437,85,239), null);


(lib.line_animation_03 = function(mode,startPosition,loop,reversed) {
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
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(100));

	// line_animation_01
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B0FF").ss(3,1,1).p("AAGAAIgLAA");
	this.shape.setTransform(19.175,-191.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00B0FF").ss(3,1,1).p("AijAAIFHAA");
	this.shape_1.setTransform(-20.65,-191.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B0FF").ss(3,1,1).p("AkeAAII9AA");
	this.shape_2.setTransform(-51.625,-191.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B0FF").ss(3,1,1).p("Al2AAILtAA");
	this.shape_3.setTransform(-73.75,-191.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00B0FF").ss(3,1,1).p("AmqAAINVAA");
	this.shape_4.setTransform(-87.025,-191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00B0FF").ss(3,1,1).p("AG9AAIt5AA");
	this.shape_5.setTransform(-91.45,-191.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00B0FF").ss(3,1,1).p("AkxAAIJjAA");
	this.shape_6.setTransform(-105.45,-191.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00B0FF").ss(3,1,1).p("AimAAIFMAA");
	this.shape_7.setTransform(-119.45,-191.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00B0FF").ss(3,1,1).p("AAcAAIg3AA");
	this.shape_8.setTransform(-133.45,-191.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00B0FF").ss(3,1,1).p("AgeAAIA+AA");
	this.shape_9.setTransform(-133.05,-191.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00B0FF").ss(3,1,1).p("AgjAAIBHAA");
	this.shape_10.setTransform(-132.625,-191.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00B0FF").ss(3,1,1).p("AgnAAIBPAA");
	this.shape_11.setTransform(-132.225,-191.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00B0FF").ss(3,1,1).p("AAsAAIhXAA");
	this.shape_12.setTransform(-131.825,-191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},56).to({state:[]},1).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.7,-192.7,159,3);


(lib.line_animation_02 = function(mode,startPosition,loop,reversed) {
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
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(100));

	// line_animation_01
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B0FF").ss(3,1,1).p("AAGAAIgLAA");
	this.shape.setTransform(19.175,-191.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00B0FF").ss(3,1,1).p("AhRAAICjAA");
	this.shape_1.setTransform(-15.425,-191.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B0FF").ss(3,1,1).p("AiNAAIEbAA");
	this.shape_2.setTransform(-42.35,-191.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B0FF").ss(3,1,1).p("Ai3AAIFvAA");
	this.shape_3.setTransform(-61.575,-191.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00B0FF").ss(3,1,1).p("AjQAAIGhAA");
	this.shape_4.setTransform(-73.1,-191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00B0FF").ss(3,1,1).p("ADaAAImzAA");
	this.shape_5.setTransform(-76.95,-191.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00B0FF").ss(3,1,1).p("AiZAAIEzAA");
	this.shape_6.setTransform(-83.2,-191.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00B0FF").ss(3,1,1).p("AhaAAIC1AA");
	this.shape_7.setTransform(-89.45,-191.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00B0FF").ss(3,1,1).p("AAcAAIg3AA");
	this.shape_8.setTransform(-95.7,-191.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00B0FF").ss(3,1,1).p("AgfAAIA/AA");
	this.shape_9.setTransform(-95.475,-191.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00B0FF").ss(3,1,1).p("AgiAAIBFAA");
	this.shape_10.setTransform(-95.25,-191.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00B0FF").ss(3,1,1).p("AgnAAIBPAA");
	this.shape_11.setTransform(-95.025,-191.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00B0FF").ss(3,1,1).p("AAsAAIhXAA");
	this.shape_12.setTransform(-94.825,-191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},61).to({state:[]},1).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.7,-192.7,122,3);


(lib.line_animation = function(mode,startPosition,loop,reversed) {
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
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(100));

	// line_animation_01
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00B0FF").ss(3,1,1).p("AAGAAIgLAA");
	this.shape.setTransform(19.175,-191.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00B0FF").ss(3,1,1).p("AhRAAICjAA");
	this.shape_1.setTransform(-5.725,-191.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B0FF").ss(3,1,1).p("AiNAAIEbAA");
	this.shape_2.setTransform(-25.05,-191.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B0FF").ss(3,1,1).p("Ai3AAIFvAA");
	this.shape_3.setTransform(-38.875,-191.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00B0FF").ss(3,1,1).p("AjQAAIGhAA");
	this.shape_4.setTransform(-47.2,-191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00B0FF").ss(3,1,1).p("ADaAAImzAA");
	this.shape_5.setTransform(-49.95,-191.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00B0FF").ss(3,1,1).p("AiZAAIEzAA");
	this.shape_6.setTransform(-56.275,-191.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00B0FF").ss(3,1,1).p("AhaAAIC1AA");
	this.shape_7.setTransform(-62.625,-191.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00B0FF").ss(3,1,1).p("AAcAAIg3AA");
	this.shape_8.setTransform(-68.95,-191.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00B0FF").ss(3,1,1).p("AgfAAIA+AA");
	this.shape_9.setTransform(-68.6,-191.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00B0FF").ss(3,1,1).p("AgiAAIBFAA");
	this.shape_10.setTransform(-68.25,-191.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00B0FF").ss(3,1,1).p("AgnAAIBPAA");
	this.shape_11.setTransform(-67.925,-191.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00B0FF").ss(3,1,1).p("AAsAAIhXAA");
	this.shape_12.setTransform(-67.575,-191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},67).to({state:[]},1).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.4,-192.7,94.7,3);


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
	mask.graphics.p("AqsDkIAAnHIVZAAIAAHHg");
	mask.setTransform(-73.95,-42.75);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-138,-105);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Icy_hot_logo, new cjs.Rectangle(-138,-65.5,132.6,45.5), null);


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

}).prototype = getMCSymbolPrototype(lib.drip_03_1, new cjs.Rectangle(-150,-57.5,300,115), null);


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

}).prototype = getMCSymbolPrototype(lib.drip_02_1, new cjs.Rectangle(-150,-57.5,300,115), null);


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

	// Layer_1
	this.instance = new lib.drip_01a();
	this.instance.setTransform(-150,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_01a_mc, new cjs.Rectangle(-150,-58,300,116), null);


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

	// Layer_1
	this.instance = new lib.drip_01();
	this.instance.setTransform(-150,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drip_01_1, new cjs.Rectangle(-150,-57.5,300,115), null);


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
	this.instance.setTransform(-5,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn_1, new cjs.Rectangle(-5,-58,118,27), null);


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
	var mask_graphics_16 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_17 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_18 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_19 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_20 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_21 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_22 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_23 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_24 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_25 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_26 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_27 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_28 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_29 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_30 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_31 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_32 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_33 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_34 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_35 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_36 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_37 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_38 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_39 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_40 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_41 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_42 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_43 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");
	var mask_graphics_55 = new cjs.Graphics().p("AkxJJIAKyZQACAFHQgMIALAaQAJAegFAOQgDAJAaAEQAfAFAJAbQAXBJgIAgIgXBfQAUAWASAiQAkBEgLA9IhaHiQATAKASARQAmAhAAAeQAAAhgZAYQgVAVgYACQgRABgTAXQgJAMgFALg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:-189.8699,y:0.525}).wait(1).to({graphics:mask_graphics_17,x:-180.7699,y:0.525}).wait(1).to({graphics:mask_graphics_18,x:-172.6699,y:0.525}).wait(1).to({graphics:mask_graphics_19,x:-165.4699,y:0.525}).wait(1).to({graphics:mask_graphics_20,x:-159.1199,y:0.525}).wait(1).to({graphics:mask_graphics_21,x:-153.5199,y:0.525}).wait(1).to({graphics:mask_graphics_22,x:-148.6699,y:0.525}).wait(1).to({graphics:mask_graphics_23,x:-144.4199,y:0.525}).wait(1).to({graphics:mask_graphics_24,x:-140.8199,y:0.525}).wait(1).to({graphics:mask_graphics_25,x:-137.7199,y:0.525}).wait(1).to({graphics:mask_graphics_26,x:-135.0699,y:0.525}).wait(1).to({graphics:mask_graphics_27,x:-132.8699,y:0.525}).wait(1).to({graphics:mask_graphics_28,x:-131.0699,y:0.525}).wait(1).to({graphics:mask_graphics_29,x:-129.5699,y:0.525}).wait(1).to({graphics:mask_graphics_30,x:-128.3699,y:0.525}).wait(1).to({graphics:mask_graphics_31,x:-127.4199,y:0.525}).wait(1).to({graphics:mask_graphics_32,x:-126.6699,y:0.525}).wait(1).to({graphics:mask_graphics_33,x:-126.0699,y:0.525}).wait(1).to({graphics:mask_graphics_34,x:-125.6699,y:0.525}).wait(1).to({graphics:mask_graphics_35,x:-125.3699,y:0.525}).wait(1).to({graphics:mask_graphics_36,x:-125.1699,y:0.525}).wait(1).to({graphics:mask_graphics_37,x:-125.0199,y:0.525}).wait(1).to({graphics:mask_graphics_38,x:-124.9699,y:0.525}).wait(1).to({graphics:mask_graphics_39,x:-124.9199,y:0.525}).wait(1).to({graphics:mask_graphics_40,x:-124.8699,y:0.525}).wait(1).to({graphics:mask_graphics_41,x:-124.8699,y:0.525}).wait(1).to({graphics:mask_graphics_42,x:-124.8699,y:0.525}).wait(1).to({graphics:mask_graphics_43,x:-124.8699,y:0.525}).wait(12).to({graphics:mask_graphics_55,x:-124.8699,y:0.525}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

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
	var mask_1_graphics_16 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AiCJiIgFhDQgFg3gHg3QgOhtgGABQgJACgcgJQgfgKgegQQgcgPgCgcQgBgGAGg4QADgdAqgVQAUgKAUgFQgpjdgJhpQgEg0AhgnIAVgVQAIgIgDgDQgXgXAKgyQAEgaAJgVIALgNQALgOADgIQAFgMgZgUIAOgFQALgGgMgJQgWgQAEgVQACgLAGgHQgCgCD1gJID2gJIgcTDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_1_graphics_16,x:179.3981,y:0.025}).wait(1).to({graphics:mask_1_graphics_17,x:171.3481,y:0.025}).wait(1).to({graphics:mask_1_graphics_18,x:164.1481,y:0.025}).wait(1).to({graphics:mask_1_graphics_19,x:157.7981,y:0.025}).wait(1).to({graphics:mask_1_graphics_20,x:152.1981,y:0.025}).wait(1).to({graphics:mask_1_graphics_21,x:147.2481,y:0.025}).wait(1).to({graphics:mask_1_graphics_22,x:142.9481,y:0.025}).wait(1).to({graphics:mask_1_graphics_23,x:139.1981,y:0.025}).wait(1).to({graphics:mask_1_graphics_24,x:135.9981,y:0.025}).wait(1).to({graphics:mask_1_graphics_25,x:133.2481,y:0.025}).wait(1).to({graphics:mask_1_graphics_26,x:130.9481,y:0.025}).wait(1).to({graphics:mask_1_graphics_27,x:128.9981,y:0.025}).wait(1).to({graphics:mask_1_graphics_28,x:127.3981,y:0.025}).wait(1).to({graphics:mask_1_graphics_29,x:126.0481,y:0.025}).wait(1).to({graphics:mask_1_graphics_30,x:124.9981,y:0.025}).wait(1).to({graphics:mask_1_graphics_31,x:124.1481,y:0.025}).wait(1).to({graphics:mask_1_graphics_32,x:123.4981,y:0.025}).wait(1).to({graphics:mask_1_graphics_33,x:122.9981,y:0.025}).wait(1).to({graphics:mask_1_graphics_34,x:122.5981,y:0.025}).wait(1).to({graphics:mask_1_graphics_35,x:122.3481,y:0.025}).wait(1).to({graphics:mask_1_graphics_36,x:122.1481,y:0.025}).wait(1).to({graphics:mask_1_graphics_37,x:122.0481,y:0.025}).wait(1).to({graphics:mask_1_graphics_38,x:121.9481,y:0.025}).wait(1).to({graphics:mask_1_graphics_39,x:121.9481,y:0.025}).wait(1).to({graphics:mask_1_graphics_40,x:121.8981,y:0.025}).wait(1).to({graphics:mask_1_graphics_41,x:121.8981,y:0.025}).wait(1).to({graphics:mask_1_graphics_42,x:121.8981,y:0.025}).wait(1).to({graphics:mask_1_graphics_43,x:121.8981,y:0.025}).wait(12).to({graphics:mask_1_graphics_55,x:121.8981,y:0.025}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

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
p.nominalBounds = new cjs.Rectangle(-219,-170.5,422.5,230.6);


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
	this.instance.setTransform(3.35,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({startPosition:47},0).to({alpha:0,startPosition:28},9).to({_off:true},1).wait(56));

	// drip_01
	this.instance_1 = new lib.drip_01_1();
	this.instance_1.setTransform(0,-0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(20).to({alpha:0},18).wait(28));

	// drip_02
	this.instance_2 = new lib.drip_02_1();
	this.instance_2.setTransform(0,-0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).wait(27).to({alpha:0},18).wait(1));

	// drip_03
	this.instance_3 = new lib.drip_03_1();
	this.instance_3.setTransform(0,-0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.6,-171,422.5,230.6);


// stage content:
(lib.ICY_DrySpray_300x250 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("A3RzXMAujAAAMAAAAmvMgujAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(359));

	// trademark
	this.instance = new lib.txt_trademark();
	this.instance.setTransform(136.05,281.9,1,1,0,0,0,2.8,-291.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// disclaimer
	this.instance_1 = new lib.txt_disclaimer();
	this.instance_1.setTransform(95.05,568.45,1,1,0,0,0,-37.7,-4.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},11).wait(109).to({alpha:0},10).wait(1).to({x:187.55,y:569.45},0).to({alpha:1},7).wait(221));

	// txt_people_prefer
	this.instance_2 = new lib.txt_peoplePrefer();
	this.instance_2.setTransform(152.4,126.45,1,1,0,0,0,-4,-7.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// icyHot_logo_01
	this.instance_3 = new lib.Icy_hot_logo();
	this.instance_3.setTransform(153.6,181.5,1,1,0,0,0,-3.2,47.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({alpha:1},11).wait(101).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_over
	this.instance_4 = new lib.txt_over();
	this.instance_4.setTransform(150.55,540.1,1,1,0,0,0,-5.2,283.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_biofreeze
	this.instance_5 = new lib.txt_biofreeze();
	this.instance_5.setTransform(151.25,418.05,1,1,0,0,0,-4.5,161.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// drip_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A35JnIAAzNMAvzAAAIAATNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150.575,y:188.075}).wait(131).to({graphics:null,x:0,y:0}).wait(228));

	// drip_animation
	this.instance_6 = new lib.drip_animation("synched",0,false);
	this.instance_6.setTransform(145.2,189.05,1.0894,1.0894,0,0,0,0.1,-0.4);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({startPosition:112},0).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_theyAgree
	this.instance_7 = new lib.txt_theyAgree();
	this.instance_7.setTransform(154.5,183.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147).to({_off:false},0).to({alpha:1},8).wait(59).to({alpha:0},10).to({_off:true},1).wait(134));

	// txt_lessMessy
	this.instance_8 = new lib.txt_lessMessy();
	this.instance_8.setTransform(154.5,182.75);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(151).to({_off:false},0).to({alpha:1},8).wait(57).to({alpha:0},10).to({_off:true},1).wait(132));

	// line_animation_01
	this.instance_9 = new lib.line_animation("synched",0,false);
	this.instance_9.setTransform(161.2,102.05,1,1,0,0,0,-43.9,-191.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(147).to({_off:false},0).wait(69).to({startPosition:69},0).to({alpha:0,startPosition:79},10).to({_off:true},1).wait(132));

	// txt_easyApply
	this.instance_10 = new lib.txt_easyApply();
	this.instance_10.setTransform(154.5,183.75);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(158).to({_off:false},0).to({alpha:1},8).wait(52).to({alpha:0},10).to({_off:true},1).wait(130));

	// line_animation_02
	this.instance_11 = new lib.line_animation_02("synched",0,false);
	this.instance_11.setTransform(188,132.05,1,1,0,0,0,-43.9,-191.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(155).to({_off:false},0).wait(63).to({startPosition:63},0).to({alpha:0,startPosition:73},10).to({_off:true},1).wait(130));

	// txt_onTheGo
	this.instance_12 = new lib.txt_onTheGo();
	this.instance_12.setTransform(154,183.25);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(164).to({_off:false},0).to({alpha:1},8).wait(48).to({alpha:0},10).to({_off:true},1).wait(128));

	// line_animation_03
	this.instance_13 = new lib.line_animation_03("synched",0,false);
	this.instance_13.setTransform(225.5,162.05,1,1,0,0,0,-43.9,-191.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(162).to({_off:false},0).wait(58).to({startPosition:58},0).to({alpha:0,startPosition:68},10).to({_off:true},1).wait(128));

	// spray_bottle
	this.instance_14 = new lib.spray_bottle();
	this.instance_14.setTransform(150.5,693.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(131).to({_off:false},0).to({y:445.5},11,cjs.Ease.quadOut).to({y:448.5},5).wait(212));

	// txt_rise
	this.instance_15 = new lib.txt_rise();
	this.instance_15.setTransform(139.5,132.25);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(231).to({_off:false},0).to({y:86.25,alpha:1},9,cjs.Ease.quadOut).wait(119));

	// txt_FromPain
	this.instance_16 = new lib.txt_fromPain();
	this.instance_16.setTransform(189.3,-17.95,1,1,0,0,0,49.5,-103.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(240).to({_off:false},0).to({alpha:1},9).wait(110));

	// txt_icyHot_02
	this.instance_17 = new lib.txt_IcyHot_02();
	this.instance_17.setTransform(189.3,-17.95,1,1,0,0,0,49.5,-103.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(249).to({_off:false},0).to({alpha:1},10).wait(100));

	// cta_btn_Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_259 = new cjs.Graphics().p("ACpRzQg8AAAAg8IAAiZQAAg8A8AAIQuAAQA8AAAAA8IAACZQAAA8g8AAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_1_graphics_259,x:129.925,y:113.9}).wait(100));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUZg");
	this.shape_1.setTransform(124.025,194.05);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUYg");
	this.shape_2.setTransform(124.425,194.1);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUYg");
	this.shape_3.setTransform(126.125,194.35);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0YIElC/ItWUZg");
	this.shape_4.setTransform(130.675,195.05);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268).to({_off:false},0).wait(2).to({x:124.075},0).wait(1).to({x:124.175},0).to({_off:true},1).wait(5).to({_off:false,x:134.675,y:195.65},0).to({_off:true},1).wait(1).to({_off:false,x:147.725,y:197.65},0).to({_off:true},1).wait(3).to({_off:false,x:206.025,y:206.55},0).to({_off:true},1).wait(3).to({_off:false,x:264.325,y:215.45},0).to({_off:true},1).wait(1).to({_off:false,x:277.375,y:217.45},0).to({_off:true},1).wait(5).to({_off:false,x:287.875,y:219.05},0).wait(1).to({x:287.975},0).wait(1).to({x:288.025},0).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(272).to({_off:false},0).wait(1).to({x:125.025,y:194.2},0).to({_off:true},1).wait(1).to({_off:false,x:127.925,y:194.65},0).to({_off:true},1).wait(4).to({_off:false,x:157.625,y:199.15},0).to({_off:true},1).wait(1).to({_off:false,x:186.225,y:203.55},0).to({_off:true},1).wait(5).to({_off:false,x:271.825,y:216.6},0).to({_off:true},1).wait(1).to({_off:false,x:281.375,y:218.05},0).to({_off:true},1).wait(7).to({_off:false,x:288.025,y:219.05},0).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(274).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false,x:170.275,y:201.1},0).to({_off:true},1).wait(2).to({_off:false,x:225.775,y:209.55},0).wait(1).to({x:241.775,y:212},0).to({_off:true},1).wait(6).to({_off:false,x:285.925,y:218.75},0).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(276).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,x:140.225,y:196.5},0).to({_off:true},1).wait(7).to({_off:false,x:254.425,y:213.95},0).to({_off:true},1).wait(4).to({_off:false,x:284.125,y:218.45},0).to({_off:true},1).wait(1).to({_off:false,x:287.025,y:218.9},0).wait(1).to({x:287.625,y:219},0).to({_off:true},1).wait(64));

	// ctaBtn
	this.instance_18 = new lib.ctaBtn_1();
	this.instance_18.setTransform(146,258.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(259).to({_off:false},0).to({alpha:1},9).wait(91));

	// background
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D0707").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(359));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(147.6,-65.4,281.70000000000005,560.9);
// library properties:
lib.properties = {
	id: '772C3DE947D34FE6BD5A9DB7A0B9B804',
	width: 300,
	height: 250,
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