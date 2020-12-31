(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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


(lib.learnMore = function() {
	this.initialize(img.learnMore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,88);


(lib.sprayBottle = function() {
	this.initialize(img.sprayBottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,313);


(lib.text_sheet = function() {
	this.initialize(img.text_sheet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,623);// helper functions:

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
	mask.graphics.p("AssCNIAAkZIZZAAIAAEZg");
	mask.setTransform(-43.7,-13.875);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-114,-603);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_trademark, new cjs.Rectangle(-114,-28,151.6,28.3), null);


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
	mask.graphics.p("AqdDAIAAl/IU7AAIAAF/g");
	mask.setTransform(-49.45,-120.2);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-122.5,-311.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_theyAgree, new cjs.Rectangle(-116.4,-139.4,134,38.5), null);


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
	mask.graphics.p("AqbJBIAAyCIU3AAIAASCg");
	mask.setTransform(9.8,0.25);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-73,-415);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_rise, new cjs.Rectangle(-56.9,-57.5,133.5,115.5), null);


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
	mask.graphics.p("AzLDGIAAmKMAmXAAAIAAGKg");
	mask.setTransform(-5.2,-8.25);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-127,-27);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_peoplePrefer, new cjs.Rectangle(-127,-27,244.6,38.5), null);


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
	mask.graphics.p("Am1ETIAAolINrAAIAAIlg");
	mask.setTransform(-82.7,-6);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-127,-150);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_over, new cjs.Rectangle(-126.5,-33.5,87.6,55), null);


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
	mask.graphics.p("AwPDBIAAmBMAgfAAAIAAGBg");
	mask.setTransform(9.55,10.8);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-122.5,-311.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onTheGo, new cjs.Rectangle(-94.4,-8.4,208,38.5), null);


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
	mask.graphics.p("AqdhPIAAmBIU7AAIAAGBg");
	mask.setTransform(-28.95,-46.475);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-122.5,-311.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_lessMessy, new cjs.Rectangle(-95.9,-92.9,134,38.50000000000001), null);


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
	mask.graphics.p("AqaC+IAAl7IU1AAIAAF7g");
	mask.setTransform(10.3,127);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-73,-415);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_IcyHot_02, new cjs.Rectangle(-56.4,108,133.5,38), null);


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
	mask.graphics.p("AqaD1IAAnpIU1AAIAAHpg");
	mask.setTransform(9.3,81.5);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-73,-415);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fromPain, new cjs.Rectangle(-57.4,57,133.5,49), null);


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
	mask.graphics.p("AsBDAIAAmAIYDAAIAAGAg");
	mask.setTransform(-17.45,-32.2);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-122.5,-311.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_easyApply, new cjs.Rectangle(-94.4,-51.4,154,38.5), null);


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
	mask.graphics.p("AssBpIAAjRIZZAAIAADRg");
	mask.setTransform(-43.7,9.5);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-114,-603);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_disclaimer, new cjs.Rectangle(-114,-1,151.6,21), null);


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
	mask.graphics.p("AsRETIAAolIYjAAIAAIlg");
	mask.setTransform(39.05,-6);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-127,-150);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_biofreeze, new cjs.Rectangle(-39.5,-33.5,157.1,55), null);


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
	this.instance.setTransform(-61.5,-156.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spray_bottle, new cjs.Rectangle(-61.5,-156.5,123,313), null);


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
	this.shape_1.graphics.f().s("#00B0FF").ss(3,1,1).p("AjvAAIHfAA");
	this.shape_1.setTransform(-37.125,-191.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B0FF").ss(3,1,1).p("AmkAAINKAA");
	this.shape_2.setTransform(-80.9,-191.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B0FF").ss(3,1,1).p("AomAAIRNAA");
	this.shape_3.setTransform(-112.175,-191.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00B0FF").ss(3,1,1).p("Ap0AAITpAA");
	this.shape_4.setTransform(-130.95,-191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00B0FF").ss(3,1,1).p("AKPAAI0dAA");
	this.shape_5.setTransform(-137.2,-191.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00B0FF").ss(3,1,1).p("AnCAAIOFAA");
	this.shape_6.setTransform(-157.575,-191.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00B0FF").ss(3,1,1).p("Aj3AAIHvAA");
	this.shape_7.setTransform(-177.95,-191.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00B0FF").ss(3,1,1).p("AAsAAIhXAA");
	this.shape_8.setTransform(-198.325,-191.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00B0FF").ss(3,1,1).p("AgvAAIBfAA");
	this.shape_9.setTransform(-197.875,-191.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00B0FF").ss(3,1,1).p("Ag0AAIBpAA");
	this.shape_10.setTransform(-197.45,-191.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00B0FF").ss(3,1,1).p("Ag4AAIBxAA");
	this.shape_11.setTransform(-197,-191.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00B0FF").ss(3,1,1).p("AA9AAIh5AA");
	this.shape_12.setTransform(-196.575,-191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},45).to({state:[]},1).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.2,-192.7,225.5,3);


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
	this.shape_1.graphics.f().s("#00B0FF").ss(3,1,1).p("AirAAIFXAA");
	this.shape_1.setTransform(-24.175,-191.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B0FF").ss(3,1,1).p("AktAAIJbAA");
	this.shape_2.setTransform(-57.85,-191.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B0FF").ss(3,1,1).p("AmJAAIMTAA");
	this.shape_3.setTransform(-81.925,-191.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00B0FF").ss(3,1,1).p("AnAAAIOBAA");
	this.shape_4.setTransform(-96.4,-191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00B0FF").ss(3,1,1).p("AHTAAIumAA");
	this.shape_5.setTransform(-101.2,-191.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00B0FF").ss(3,1,1).p("AlFAAIKLAA");
	this.shape_6.setTransform(-115.225,-191.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00B0FF").ss(3,1,1).p("Ai4AAIFxAA");
	this.shape_7.setTransform(-129.3,-191.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00B0FF").ss(3,1,1).p("AAsAAIhXAA");
	this.shape_8.setTransform(-143.325,-191.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00B0FF").ss(3,1,1).p("AgvAAIBfAA");
	this.shape_9.setTransform(-142.875,-191.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00B0FF").ss(3,1,1).p("Ag0AAIBpAA");
	this.shape_10.setTransform(-142.45,-191.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00B0FF").ss(3,1,1).p("Ag4AAIBxAA");
	this.shape_11.setTransform(-142,-191.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00B0FF").ss(3,1,1).p("AA9AAIh5AA");
	this.shape_12.setTransform(-141.575,-191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},50).to({state:[]},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.4,-192.7,170.70000000000002,3);


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
	this.shape_1.graphics.f().s("#00B0FF").ss(3,1,1).p("AirAAIFXAA");
	this.shape_1.setTransform(-9.575,-191.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00B0FF").ss(3,1,1).p("AktAAIJbAA");
	this.shape_2.setTransform(-31.95,-191.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00B0FF").ss(3,1,1).p("AmJAAIMTAA");
	this.shape_3.setTransform(-47.925,-191.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00B0FF").ss(3,1,1).p("AnAAAIOBAA");
	this.shape_4.setTransform(-57.5,-191.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00B0FF").ss(3,1,1).p("AHUAAIunAA");
	this.shape_5.setTransform(-60.7,-191.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00B0FF").ss(3,1,1).p("AlFAAIKLAA");
	this.shape_6.setTransform(-74.825,-191.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00B0FF").ss(3,1,1).p("Ai4AAIFxAA");
	this.shape_7.setTransform(-88.95,-191.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00B0FF").ss(3,1,1).p("AAsAAIhXAA");
	this.shape_8.setTransform(-103.075,-191.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00B0FF").ss(3,1,1).p("AgvAAIBfAA");
	this.shape_9.setTransform(-102.625,-191.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00B0FF").ss(3,1,1).p("Ag0AAIBpAA");
	this.shape_10.setTransform(-102.2,-191.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00B0FF").ss(3,1,1).p("Ag4AAIBxAA");
	this.shape_11.setTransform(-101.75,-191.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00B0FF").ss(3,1,1).p("AA9AAIh5AA");
	this.shape_12.setTransform(-101.325,-191.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},56).to({state:[]},1).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-192.7,130.20000000000002,3);


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
	mask.graphics.p("A0HGDIAAsGMAoPAAAIAAMGg");
	mask.setTransform(-1.7,48.75);

	// Layer_1
	this.instance = new lib.text_sheet();
	this.instance.setTransform(-127,-27);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Icy_hot_logo, new cjs.Rectangle(-127,10,245,77.5), null);


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


(lib.ctaBtn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.learnMore();
	this.instance.setTransform(-67,-22,0.5001,0.5001);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-67,-22,135.1,44), null);


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
(lib.ICY_DrySpray_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,0,3).p("EgXRgutMAujAAAMAAABdbMgujAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(359));

	// txt_people_prefer
	this.instance = new lib.txt_peoplePrefer();
	this.instance.setTransform(152.4,126.45,1,1,0,0,0,-4,-7.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// icyHot_logo_01
	this.instance_1 = new lib.Icy_hot_logo();
	this.instance_1.setTransform(153.6,181.5,1,1,0,0,0,-3.2,47.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},11).wait(101).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_over
	this.instance_2 = new lib.txt_over();
	this.instance_2.setTransform(150.55,540.1,1,1,0,0,0,-5.2,283.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// txt_biofreeze
	this.instance_3 = new lib.txt_biofreeze();
	this.instance_3.setTransform(151.25,418.05,1,1,0,0,0,-4.5,161.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(16).to({_off:false},0).to({alpha:1},11).wait(93).to({alpha:0},10).to({_off:true},1).wait(228));

	// drip_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A35I1IAAxpMAvzAAAIAARpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150.575,y:380.575}).wait(131).to({graphics:null,x:0,y:0}).wait(228));

	// drip_animation
	this.instance_4 = new lib.drip_animation("synched",0,false);
	this.instance_4.setTransform(150.05,380.1,1,1,0,0,0,0,-0.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({startPosition:112},0).to({alpha:0,startPosition:84},10).to({_off:true},1).wait(228));

	// txt_theyAgree
	this.instance_5 = new lib.txt_theyAgree();
	this.instance_5.setTransform(154.5,183.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(147).to({_off:false},0).to({alpha:1},8).wait(59).to({alpha:0},10).to({_off:true},1).wait(134));

	// txt_lessMessy
	this.instance_6 = new lib.txt_lessMessy();
	this.instance_6.setTransform(154.5,182.75);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(151).to({_off:false},0).to({alpha:1},8).wait(57).to({alpha:0},10).to({_off:true},1).wait(132));

	// line_animation_01
	this.instance_7 = new lib.line_animation("synched",0,false);
	this.instance_7.setTransform(105.95,109.05,1,1,0,0,0,-43.9,-191.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147).to({_off:false},0).wait(69).to({startPosition:50},0).to({alpha:0,startPosition:60},10).to({_off:true},1).wait(132));

	// txt_easyApply
	this.instance_8 = new lib.txt_easyApply();
	this.instance_8.setTransform(154.5,183.75);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(158).to({_off:false},0).to({alpha:1},8).wait(52).to({alpha:0},10).to({_off:true},1).wait(130));

	// line_animation_02
	this.instance_9 = new lib.line_animation_02("synched",0,false);
	this.instance_9.setTransform(146.5,153.55,1,1,0,0,0,-43.9,-191.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(155).to({_off:false},0).wait(63).to({startPosition:42},0).to({alpha:0,startPosition:52},10).to({_off:true},1).wait(130));

	// txt_onTheGo
	this.instance_10 = new lib.txt_onTheGo();
	this.instance_10.setTransform(154,183.25);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(164).to({_off:false},0).to({alpha:1},8).wait(48).to({alpha:0},10).to({_off:true},1).wait(128));

	// line_animation_03
	this.instance_11 = new lib.line_animation_03("synched",0,false);
	this.instance_11.setTransform(201.5,196.05,1,1,0,0,0,-43.9,-191.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(162).to({_off:false},0).wait(58).to({startPosition:35},0).to({alpha:0,startPosition:45},10).to({_off:true},1).wait(128));

	// spray_bottle
	this.instance_12 = new lib.spray_bottle();
	this.instance_12.setTransform(150.5,760.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(131).to({_off:false},0).to({y:445.5},11,cjs.Ease.quadOut).to({y:448.5},5).wait(212));

	// txt_rise
	this.instance_13 = new lib.txt_rise();
	this.instance_13.setTransform(139.5,132.25);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(231).to({_off:false},0).to({y:86.25,alpha:1},9,cjs.Ease.quadOut).wait(119));

	// txt_FromPain
	this.instance_14 = new lib.txt_fromPain();
	this.instance_14.setTransform(189.3,-17.95,1,1,0,0,0,49.5,-103.5);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(240).to({_off:false},0).to({alpha:1},9).wait(110));

	// txt_icyHot_02
	this.instance_15 = new lib.txt_IcyHot_02();
	this.instance_15.setTransform(189.3,-17.95,1,1,0,0,0,49.5,-103.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(249).to({_off:false},0).to({alpha:1},10).wait(100));

	// cta_btn_Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_259 = new cjs.Graphics().p("AoWCJQg8gBAAg7IAAiYQAAg9A8AAIQtAAQA8AAAAA9IAACYQAAA7g8ABg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_1_graphics_259,x:146.275,y:258.65}).wait(100));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.6,-9.6,14.7,9.5).s().p("Ao9ItINW0ZIElDAItWUYg");
	this.shape_1.setTransform(48.525,244.05);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(268).to({_off:false},0).wait(2).to({x:48.575},0).wait(1).to({x:48.675},0).wait(1).to({x:49.075},0).wait(1).to({x:49.825},0).wait(1).to({x:51.225},0).wait(1).to({x:53.525},0).wait(1).to({x:57.025},0).wait(1).to({x:62.125},0).wait(1).to({x:69.275},0).wait(1).to({x:78.875},0).wait(1).to({x:91.525},0).wait(1).to({x:107.775},0).wait(1).to({x:128.225},0).wait(1).to({x:153.525},0).wait(1).to({x:178.825},0).wait(1).to({x:199.275},0).wait(1).to({x:215.525},0).wait(1).to({x:228.175},0).wait(1).to({x:237.775},0).wait(1).to({x:244.925},0).wait(1).to({x:250.025},0).wait(1).to({x:253.525},0).wait(1).to({x:255.825},0).wait(1).to({x:257.225},0).wait(1).to({x:257.975},0).wait(1).to({x:258.375},0).wait(1).to({x:258.475},0).wait(1).to({x:258.525},0).wait(62));

	// ctaBtn
	this.instance_16 = new lib.ctaBtn();
	this.instance_16.setTransform(146,258.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(259).to({_off:false},0).to({alpha:1},9).wait(91));

	// trademark
	this.instance_17 = new lib.txt_trademark();
	this.instance_17.setTransform(136.05,281.9,1,1,0,0,0,2.8,-291.2);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},11).wait(109).to({alpha:0},10).to({_off:true},1).wait(228));

	// disclaimer
	this.instance_18 = new lib.txt_disclaimer();
	this.instance_18.setTransform(95.05,568.45,1,1,0,0,0,-37.7,-4.4);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({alpha:1},11).wait(348));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D0707").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_2.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(359));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(147.6,-29.4,164.20000000000002,946.4);
// library properties:
lib.properties = {
	id: '772C3DE947D34FE6BD5A9DB7A0B9B804',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"back_image.jpg", id:"back_image"},
		{src:"drip_01.jpg", id:"drip_01"},
		{src:"drip_01a.jpg", id:"drip_01a"},
		{src:"drip_02.jpg", id:"drip_02"},
		{src:"drip_03.jpg", id:"drip_03"},
		{src:"learnMore.png", id:"learnMore"},
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;