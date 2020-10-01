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



(lib.background_gradient = function() {
	this.initialize(img.background_gradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,80);


(lib.board = function() {
	this.initialize(img.board);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,79);


(lib.bswh_icon = function() {
	this.initialize(img.bswh_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,127);


(lib.bubble_blue = function() {
	this.initialize(img.bubble_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,265,157);


(lib.bubble_teal = function() {
	this.initialize(img.bubble_teal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,178);


(lib.calendar = function() {
	this.initialize(img.calendar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,564,661);


(lib.cta_btn = function() {
	this.initialize(img.cta_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,80);


(lib.finger = function() {
	this.initialize(img.finger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,233);


(lib.finger_sdw = function() {
	this.initialize(img.finger_sdw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,233);


(lib.frame_04 = function() {
	this.initialize(img.frame_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,305);


(lib.happy_01 = function() {
	this.initialize(img.happy_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,165);


(lib.happy_02 = function() {
	this.initialize(img.happy_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,209);


(lib.pen = function() {
	this.initialize(img.pen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,172);


(lib.people = function() {
	this.initialize(img.people);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,146);


(lib.person_img = function() {
	this.initialize(img.person_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,184);


(lib.smartPhone_img = function() {
	this.initialize(img.smartPhone_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,44);// helper functions:

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


(lib.teal_bubble = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjQEXQgPgYgkgtIgFgEQgJgFgUABIiNACIgCnMQgBgZALgIIM+AAIARAEQARAJgBAdQgBAdAADWIABDQIoKABIgQgCQgQABgIAOQgNAVghApIgNAJIgHABQgKAAgHgLg");
	mask.setTransform(0.6017,0.2488);

	// Layer_1
	this.instance = new lib.bubble_teal();
	this.instance.setTransform(-44.3,-29.1,0.3271,0.3271);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teal_bubble, new cjs.Rectangle(-43.1,-28.7,87.4,57.8), null);


(lib.Phone_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.smartPhone_img();
	this.instance.setTransform(-136.5,-15,0.6826,0.6826);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Phone_mc, new cjs.Rectangle(-136.5,-15,273.1,30.1), null);


(lib.person_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjaDbQhbhbAAiAQAAiABbhaQBahbCAAAQCAAABbBbQBbBaAACAQAACAhbBbQhbBbiAAAQiAAAhahbg");
	mask.setTransform(0.05,0.05);

	// Layer_1
	this.instance = new lib.person_img();
	this.instance.setTransform(-31,-31,0.3369,0.3369);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.person_mc, new cjs.Rectangle(-30.9,-30.9,61.9,61.9), null);


(lib.People_mc_02 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ABdGuQgMgBgCgHIAAgHQANgZAOiOQAGhHAFhDIg2BMIAKCVIgyAQIgMBaIhYAAIgKhXIg9gJIAFgkQAEgkgDAAQgFgBgUAIIgBCgIhEgBIgCifIgRABIgFCfIhHABIAAilIg3gKQgDgJANjLIhOhwQgZghAHgYQADgNAIgGIBVhMQAggiAPgOQAJgIAcgJIAagIIgDgZIgJgZIgGgLQgQgIADgLQABgGAEgEIABgeQACgNAJgJIAIgGQATgQAhAFIAcAIQAIABAAAPIgCAOIAAApQAAAlgBALQAAAHgPAHQgHAEgHACQAIAMAJACQAFABAHAEIAGADIAiAcQALACAHALIAFAKQAKAAAKAFQAGADACAIQACAGgCAFQgBAEACAEIADAHQAAABABAAQAAABABAAQAAAAABAAQABAAABgBQADgBADgEQADgDARgDIAVgDQADAAABAGIgBAFIAFAFQAHADAMASIALARIAOAPIgHAFIAFAOIAEAZQACARgPAJQgGAFgHABIAHAUQAfAIANArQAHAXABAUIARgFIAZggIAIgvQABgJASAAIASACIAIApQAGgMAhgQIAggOIAAgSIAJgEIgPgKQgWgzAGgwQADgYAIgOQAOgTAdgEIAbAAIAHgUQAKgKAUAFQAFAKgDASIgEARIACASQAKAJACApIABAoQAAATgOAKQgHAFgHABIAPAeQAgAAAgAaQAQAOAKAOQBBFtAFAUQADAMgIAJQgFAEgFACIAVACIl+ABgAl4h6IgMARQgGAHACAFIASAXQAFAFABgFIAAgGIAAgpQAAgHgEAAIgEACg");
	mask.setTransform(-40.9016,-0.136);

	// Layer_3
	this.instance = new lib.people();
	this.instance.setTransform(-89,-51,0.6505,0.6505);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.People_mc_02, new cjs.Rectangle(-88.4,-44.5,95,88.5), null);


(lib.People_mc_01 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AEyGhQgNgMgDgKIAAgJIg8gBIABA8Ig4gDIADg3IgbgDIAChVIgXgFIAAg9QgBg7gDAIQgFANgaAEIgCgZQgOgCAAgKQAAgGAHgRIAHgRIgZgBIgCgkIgPgBIgCAoIgsABIgLFBIlkAAIgFnCQAAgQAegPQAPgHAPgFQAAgRANgIIAGgHQAEgJgIgGQgHgGgNgXIgRgdQgIgKAIgPIgegtQgfgvgEgNQgFgMAIgPQAEgIAFgFIgPgbIgCgVQgCgVACgIQABgIANAEIANAGIAUASIAAAoIANAFIAvBLQANgIAPAIQAJAEAJgDIAMgEQADAAANAJQANAKAIABQALACAEARQADAQgIAPIASgcQAVgeAOgJQAOgKAXACQAMAAAIADIAFgcIgPgCQgSgVAHgkQAEgTAHgOQgRgCgCgWQgDgTAHgPQAFgJALAQIAJASIAFgIQALgHAiAIQAgAHADAfQgDAfAFADQAKAIgdAUIgUAUIgDAqIAOACQAQAEAMAEQAUAIAoAtIAyg6QAHgKAKgCIAPgZIgHhLIAAgOQAEgOAVgFQAUgEAWAGQALAEAHAEQBSBpAUAhQANAUgEAYIgGAVIA+CCQAIAPgJAZQgFANgGAIIgrAyIAhDhIgXASIAKBIIgRANIAyA8QAAAChBAEgAl9G+IAAAAIAFAAg");
	mask.setTransform(44.2757,-0.4736);

	// Layer_3
	this.instance = new lib.people();
	this.instance.setTransform(-89,-51,0.6505,0.6505);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.People_mc_01, new cjs.Rectangle(4.2,-45.1,80.2,89.1), null);


(lib.pen_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pen();
	this.instance.setTransform(-42.55,-19.95,0.232,0.232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pen_1, new cjs.Rectangle(-42.5,-19.9,85.1,39.9), null);


(lib.happy_02_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AkVEWQhzhzAAijQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzg");
	mask.setTransform(0.5,-0.25);

	// Layer_1
	this.instance = new lib.happy_02();
	this.instance.setTransform(-38.5,-38.5,0.3685,0.3685);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.happy_02_1, new cjs.Rectangle(-38.5,-38.5,77,77), null);


(lib.happy_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.happy_01();
	this.instance.setTransform(-27.3,-27.3,0.3312,0.3312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.happy_01_1, new cjs.Rectangle(-27.3,-27.3,54.7,54.7), null);


(lib.frame_04_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AvBPtIEI/yQGfADGeAEQM/AJgBAJIk2fyg");
	mask.setTransform(10.8,-26.95);

	// Layer_1
	this.instance = new lib.frame_04();
	this.instance.setTransform(-83,-127,0.6552,0.6552);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame_04_1, new cjs.Rectangle(-83,-127,187.4,199.8), null);


(lib.Finger_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AkNGiQgRgJhNh9Qgng/gjg8Qh/jtgjg3QgPgXgOguQgPg1gCgvQgIh/BZABQBUACBHBLQAXAYASAcIAOAYQAqA9AvBBQBeCBAWARQAnAaATAPQAiAaANAeQAUAvBRCFIB9BfIgCjhQBIi2AIgWQAHgXAwhIIAvgVQA1gXAjgGQAlgHAqARQAkAPAUAWQAOAQAUBKQALAlAHAgQADACAEDRIADDRQjeADjiAAIhzABQlTAAgOgJg");
	mask.setTransform(1.2957,1.1594);

	// Layer_1
	this.instance = new lib.finger();
	this.instance.setTransform(-64.65,-42.05,0.3611,0.3611);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.finger_sdw();
	this.instance_1.setTransform(-59,-41,0.3474,0.3596);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Finger_mc, new cjs.Rectangle(-63.4,-41.5,128.8,84.3), null);


(lib.calendar_animation = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.calendar();
	this.instance.setTransform(-64.85,-76.05,0.2301,0.2301);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.calendar_animation, new cjs.Rectangle(-64.8,-76,129.7,152.1), null);


(lib.bswh_icon_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bswh_icon();
	this.instance.setTransform(-43,-43,0.677,0.677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bswh_icon_1, new cjs.Rectangle(-43,-43,86,86), null);


(lib.BSWH_BottomBar = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003DA6").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGgAgKgLQgFAFAAAGQAAAHAFAFQAEAFAGAAQAHAAAEgFQAFgFAAgHQAAgGgFgFQgEgFgHAAQgGAAgEAFgAAGAMIgGgKIgDAAIAAAKIgEAAIAAgWIAIAAQAIAAAAAGQAAAFgFAAIAGALgAgDAAIADAAQAFAAABgEQAAgDgGAAIgDAAg");
	this.shape.setTransform(-77.1118,11.5722,0.3422,0.3422);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008FBE").s().p("AhsA5IAAg1IBpAAIg1A1gAAEgDIA1g1IA0AAIAAA1g");
	this.shape_1.setTransform(-78.2,-0.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB71B").s().p("AAEBtIAAhpIA1A1IAAA0gAg4g4IAAg0IA1AAIAABpg");
	this.shape_2.setTransform(-78.2,-0.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003DA6").s().p("AsbCeIAAhlIA2g1IAACagAhCB0IAAgWIgVAAIAAAWIgMAAIAAg0IAMAAIAAAUIAVAAIAAgUIAMAAIAAA0gAirB0IAAgrIgPAAIAAgJIArAAIAAAJIgQAAIAAArgAkJB0IAAg0IAMAAIAAArIAaAAIAAAJgAlAB0IgEgLIgTAAIgFALIgLAAIAUg0IALAAIAUA0gAlVBgIAOAAIgGgTIgBAAgAm4B0IAAg0IAnAAIAAAJIgbAAIAAAMIAZAAIAAAJIgZAAIAAANIAcAAIAAAJgAn0B0IAAgWIgWAAIAAAWIgLAAIAAg0IALAAIAAAUIAWAAIAAgUIALAAIAAA0gAqpA5Ig1g1ICaAAIAAA1gAlcAnQgCgCAAgEQAAgEACgCQACgCAEAAIAEAAQAEAAADgEQAHgMADgHIACgHQAAgFgEgKIgQgsIgEgLQgDgEgFgBIgFgBIgBgDQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIATAAIASAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIgFABQgBAAgBABQgBAAAAAAQgBAAAAABQAAAAAAAAQAAADAGARIAGATQAFAOABAAQACgBAGgOIAHgQQAHgQAAgFQAAgCgFgBIgGgBIgBgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAiAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBADIgDABQgFABgEAEIgJARIgLAXIggBDQgEAKgJAAQgFAAgCgDgAIxgCIgZg6QgSAlgHAVIgDABIgDgBIgOghIgohWQgDgIgCgCQgEgEgFAAIgGgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAVABIAYgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBADIgFABQgGAAAAADQAAADAKAZIAkBMIAQghIADgIIgBgGIgXgxQgDgGgDgCQgCgDgGAAIgEgBIgBgDIABgCIAWABIAXgBQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAIgBADIgFABQgGAAgBACQAAACACAHIAQAjIANgaQAFgNAAgDQgBgEgFAAIgGgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAUABIAUgBIABACIgBADIgGABQgFAAgFAGIgHAMQgIAPgIARIgCAGIACAEIAVAvIASgrIARgpIAGgTQAAgEgHAAIgGgBIgBgDIABgCIAWABQAKgBAGgDIAKgIIACAAIAAABIAAAaIAAAsIAAADQAOgLAOAAQAOAAAHAJQAGAGAAAMIAAAjQAAALABADQABADAGAAIAFABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgUgBIgTABIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAFgBQAFAAABgDQABgDAAgLIAAgeQAAgKgEgGQgGgGgJAAQgJAAgHAGIgEAEIAAAHIAAAjQAAALABADQABADAFAAIAFABIABADQAAAAAAABQAAAAgBAAQAAABAAAAQAAAAgBAAIgTgBIgUABIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAEgBQAGAAABgDQABgDAAgLIAAheQAAgJgBgCQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgEACgDAEIgNAdIgPAiIgaA/IgCABIgDgBgAg5gJQgCgDgCgJIgCgQIADgCIADABQAJAfAaAAQAMAAAHgIQAGgGAAgKQAAgIgDgGQgDgIgLgHIgTgNQgWgPAAgUQAAgPALgKQALgKAUAAQAJAAAJACIAHABIADALIABAPIgDABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgDgKgFgFQgGgIgNAAQgOAAgGAIQgFAGAAAJQAAAOASALIAQALQAZAPAAAYQAAARgMAKQgLALgUAAQgTAAgNgIgANPgFQgIgEgEgGQgJgLAAgQQAAgTAMgOQAMgOASAAQAMAAAJAIQAIAHAAAKIgBAGQgBABgLAAIgmAAQgFAAAAABQgBAAAAAFQAAAQAJAKQAKAMAPAAQAGAAAEgCQAFgCAEgGQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQgFAKgKAFQgIAEgJAAQgKAAgIgDgANRhMQgHAGAAAGQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABAAIAPAAQASAAADgCQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgFgDgEQgFgEgIAAQgIAAgIAGgAMPgIQgEgFAAgLIAAgvIgBgFIgDgBIgGAAIgBgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAJgDAEgEQAFgDAEgIIACgBIADABIAAAKIAAADIADAAIAXAAQACACAAADQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgXAAIgDABIgBAEIAAAmQAAALADAGQADAGAJAAIAGgBIAFgDIACACIAAACQgIAJgOAAQgMAAgFgGgAEYgIQgEgFAAgLIAAgvIgBgFIgEgBIgFAAIgBgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAJgDAEgEQAFgEAEgHIACgBIACABIAAAKIABADIADAAIAXAAQACACAAADQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBAAIgXAAIgEABIAAAEIAAAmQAAALACAGQAEAGAJAAIAGgBIAFgDIACACIAAACQgIAJgOAAQgMAAgFgGgADZgIQgDgFAAgLIAAgvIgBgFIgEgBIgFAAIgBgCQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAJgDAEgEQAFgEAEgHIACgBIACABIAAAKQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIADAAIAXAAQACACAAADQAAABAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgXAAIgEABIAAAEIAAAmQAAALACAGQAEAGAJAAIAFgBIAGgDIACACIAAACQgJAJgNAAQgMAAgGgGgAB4gNQgMgMAAgTQAAgTANgNQAMgNATAAQARAAAMAMQANAMAAATQAAAUgMAMQgNAMgTAAQgSAAgMgLgACEhJQgHAKAAAQQAAAQAHALQAIAMAMAAQAMAAAHgLQAFgJAAgOQAAgQgGgLQgHgNgOAAQgKAAgHAJgAArgMQgMgMAAgSQAAgTAMgNQAOgPAXAAQALAAAIAEQADADAAAFQAAADgCADQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgKgLgLAAQgMAAgHAIQgJAJAAAQQAAANAIAKQAJAMAQAAQAIAAAGgDQAFgDADgHIADABQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQgFALgKAGQgJAEgKAAQgRAAgLgKgAjTgNQgMgMAAgTQAAgTAMgNQANgNASAAQASAAAMAMQAMAMAAATQAAAUgMAMQgMAMgTAAQgSAAgMgLgAjHhJQgHAKAAAQQAAAQAHALQAHAMANAAQAMAAAGgLQAGgJAAgOQAAgQgHgLQgHgNgNAAQgLAAgGAJgAl9gIIgDgDIgDABIgFAEIgHADIgIABQgJAAgGgEQgGgGAAgJQAAgGADgEQAEgEAKgDIAZgJQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAIABgEIAAgJQAAgIgCgEQgEgGgJAAQgFAAgDACQgFACAAAFQAAAGgCABQgFAEgHAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAgIANgJQANgJAMAAQALAAAFAHQAGAGgBAMIgBAkQgBARAKAAIAGgBIACgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAACgFAEQgGADgHAAQgIAAgFgGgAmKgmQgKADgEADQgEADAAAGQAAAEADAEQADAEAHAAQADAAAEgCIAGgDQAAAAAAgBQABAAAAgBQAAAAAAgBQABgBAAAAIAAgGIAAgMQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgJACgAFegNQgNgLAAgPQAAgXAYgKQgIgJAAgJQAAgLAHgHQAIgIALAAQAHAAAGAFQAGAEAAAHQAAAGgGAFQgEADgEAAQgEAAACgDIACgDQABgDgBgEQgBgCgDgDQgDgCgEAAQgGgBgDAEQgEADAAAFQAAAFAEAEQADAEALAGQASAJAHAHQANALAJATQAHgJAAgLQAAgHgEgHQgDgDgFgBQgGAAgEADIgDABQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAgFAFgEQAGgDAHAAIAKABIAIACQAEAAABgCIABgBIABAAIABABQAAALgNAEQACAGAAAHQAAAPgLAMQAFAJAFADQAFAEAHAAIAGgBIADgBQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAEgGABQgGACgIAAQgIAAgFgCQgFgCgHgGQgKAGgIACQgHACgJAAQgTAAgNgKgAFigzQAAAPALAMQALAMAPAAQAFAAAFgBIALgEIgJgMIgFgHQgHgLgIgHIgNgLIgFgDQgLACAAAPgAreidIA1AAIAABlIg1A1gAuAgDIAAg1IBlAAIA2A1gALlgFIgTABIgCgCQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAIAEgBQAGAAABgDQABgDAAgLIAAgkIAAgIQgBgDgEgCIgCgCIgBgBIABgCIAKgFQAIgDADgCQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgBAZIAAAmQAAALACADQABADAFAAIAFABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBACIgTgBgAhsgFIgTABIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAEgBQAFAAABgDQABgDAAgLIAAgkIAAgIQgBgDgEgCIgCgCIAAgBIAAgCQAKgDALgHIACABIAAAMIABACIALgJQAGgEAFAAQAEAAADADQACACAAAEQAAAEgDADQgCACgEAAIgEgBQgFgEgEAAQgFAAgDAFQgCADAAAMIAAAdQAAALABADQABADAGAAIAHABIABADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgXgBgAj6gFIgUABIgCgCIABgDIAFgBQAGAAABgDQABgDAAgLIAAheQAAgJgBgCQgBgDgFgDIgCgBIgBgCIABgCQAQgFAGgEIADABIgBAaIAABiQAAALABADQACADAFAAIAFABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgBACIgUgBgAoJgFIgXABIgBgCQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAEgBQAIgBABgEQACgEAAgQIAAhOQAAgMgCgEQgBgEgHAAIgGgBQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAQgCAcAAQAXAAALAGQAQAIAAARQAAALgGAHQgFAGgKAFQAAAAABABQAAAAAAABQABAAABAAQAAABABAAQALACAHAIQAKAKAAAOQAAATgOAKQgOALgbAAIgZgBgAn/hJQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIAAAfQAAARAEAFQAFAGAMAAQAOAAAJgHQAJgHAAgPQAAgPgIgJQgLgLgWAAQgIAAgCABgAn+iFIgCACIgBADIAAAqQAAAEACABQABABAIAAQAQgBAIgGQAIgGAAgOQAAgOgJgHQgJgGgMAAIgKABgALchsQgDgDAAgEQAAgFADgDQADgDAFAAQAEAAADADQADADAAAFQAAAFgDACQgDADgFAAQgFAAgCgDg");
	this.shape_3.setTransform(-4.325,-0.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.instance = new lib.cta_btn();
	this.instance.setTransform(94,-28,0.6877,0.6877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.background_gradient();
	this.instance_1.setTransform(199.75,-29,60.1451,0.6841,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BSWH_BottomBar, new cjs.Rectangle(-101,-29,300.8,56), null);


(lib.board_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Am5ETQg8AAgUgtQgGgOgCgNIAAmVQACgNAGgOQAUgtA8AAIN6AAIAMABQAPACAMAIQAnAVADA4IAAAAIAAF7IgBAAQgFAzgkAUQgMAIgPACIgMABg");
	mask.setTransform(-0.075,0.725);

	// Layer_1
	this.instance = new lib.board();
	this.instance.setTransform(-53.45,-27.1,0.6851,0.6851);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.board_mc, new cjs.Rectangle(-53,-26.8,105.9,53.8), null);


(lib.blue_bubble = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Am1EEIAAmcQAAgFADgFQAHgLAPAAQAYADALgCQASgCAOgUQAVgfAQgUQAGgJAIgEQARgKAOATIAuA9QABAEAFAEQAKAIAVAAII9gBIATAEQATAIAAAYIAHGPg");
	mask.setTransform(0.275,0.0138);

	// Layer_1
	this.instance = new lib.bubble_blue();
	this.instance.setTransform(-44.1,-26.1,0.3329,0.3329);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_bubble, new cjs.Rectangle(-43.5,-26.1,87.6,52.3), null);


(lib.Background_TEMP = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F5F5F5","#FCFCFC","#FCFCFC","#FCFCFC","#FDFDFD","#FDFDFD","#FCFCFC","#FCFCFC","#F0F0F0"],[0,0.071,0.188,0.341,0.514,0.631,0.769,0.933,1],-150,0,150,0).s().p("A3bPKIAA+TMAu3AAAIAAeTg");
	this.shape.setTransform(-2.025,-27.7016,1,1.0387);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background_TEMP, new cjs.Rectangle(-152,-128.4,300,201.5), null);


(lib.yellow_paper_shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACYKvQgcgKjkhKIjfhIIg2gRQg7gUgdgNQgTgJAAgKQAKgBASAHQARAIAIgBQAZgDAqhKIAlhJIJGDUQATgIAkh4QASg9APg7ICMsaQgKgIksgNIkpgLIFbjDQBFAeBEAqQCIBWgDA+QgGBfgVCOQgVCTgFA9QgZFTg/EJQgfCEgbBAQhCgShIgcg");
	mask.setTransform(-13.8956,-18.675);

	// Layer_2
	this.instance = new lib.calendar_animation();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellow_paper_shadow, new cjs.Rectangle(-62.8,-76,97.8,130.7), null);


(lib.white_paper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah5GgIlpiHQAYgMAbgSQA1gmAOgiQAphjAOgpQAqh8AfibQAeiaAUhFQALgkAGgGIAIgWQALgWATABIEoATIETAQIAZABQAXAGgIAcQgIAdg+FZIhGGJQgJAzgnBpQgmBmgJACIAAAAQgJAAlliFg");
	mask.setTransform(-13.4984,-19.354);

	// Layer_2
	this.instance = new lib.calendar_animation();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white_paper, new cjs.Rectangle(-61.7,-74.2,96.5,109.80000000000001), null);


(lib.paper_fold_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlnhmQgOgMgFgdQgDgOABgMQAAgLAUAHILUFOQANAHAEAJg");
	mask.setTransform(-26.6292,18.198);

	// Layer_2
	this.instance = new lib.calendar_animation();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_fold_mc, new cjs.Rectangle(-64.7,0.5,76.2,35.4), null);


(lib.calendar_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paper_fold_Mask
	this.instance = new lib.paper_fold_mc();
	this.instance.setTransform(-1.1,-72.95,0.8281,0.8281,-17.8994,0,0,-27.9,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:-26.6,regY:18.2,scaleX:0.8355,scaleY:0.8355,rotation:-17.1321,x:-1.45,y:-69.9},0).wait(1).to({scaleX:0.856,scaleY:0.856,rotation:-14.9918,x:-4.7,y:-58.95},0).wait(1).to({scaleX:0.9298,scaleY:0.9298,rotation:-7.3084,x:-16.45,y:-19.45},0).wait(1).to({scaleX:0.9772,scaleY:0.9772,rotation:-2.3753,x:-23.9,y:5.85},0).wait(1).to({scaleX:0.9924,scaleY:0.9924,rotation:-0.7908,x:-26.3,y:14},0).wait(1).to({scaleX:0.9985,scaleY:0.9984,rotation:-0.1618,x:-27.25,y:17.2},0).wait(1).to({regX:-28.1,regY:18.9,scaleX:1,scaleY:1,rotation:0,x:-28.95,y:18.85},0).wait(59));

	// fold_shdw_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhBIZQlRhwg4geQgHgEArgoQANgMAVgoQAqhRAsiPQAVh3AXiLQAtkXAGhkIAGgnQAMgnAdgCIJbAgQAVAFgFASIhVLDQgKBcgUBwQgnDfguBgQidgying4g");
	var mask_graphics_1 = new cjs.Graphics().p("AhBIZQlRhwg4geQgHgEArgoQANgMAVgoQAqhRAsiPQAVh3AXiLQAtkXAGhkIAGgnQAMgnAdgCIJbAgQAVAFgFASIhVLDQgKBcgUBwQgnDfguBgQidgying4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-10.8646,y:-9.975}).wait(1).to({graphics:mask_graphics_1,x:-10.8646,y:-9.975}).wait(8).to({graphics:null,x:0,y:0}).wait(58));

	// fold_shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A08E43","#C7B852","rgba(213,192,82,0)"],[0,0.576,1],-820.4,70.7,818,70.7).s().p("AgZAVQibgCiTgEIASglQDQgBDrAVQB1AJBMALQgbAFiJAAIi8gCg");
	this.shape.setTransform(1.2,-70.5713);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9F8D42","#C4B550","rgba(211,189,81,0)"],[0,0.576,1],-820.3,70.4,818.1,70.4).s().p("AgZAWQiagEiSgHIARgkQDQACDpAXQB2ALBLALQgVAEhTAAQhZAAiegEg");
	this.shape_1.setTransform(0.35,-66.5811);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#9B8941","#BDAB4C","rgba(205,180,77,0)"],[0,0.576,1],-819.9,69.3,818.5,69.3).s().p("AgZAWQiZgJiPgMIARglQDOAODnAdQBzAPBKAMQgMADgiAAQhUAAjZgPg");
	this.shape_2.setTransform(-1.95,-55.3857);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8F7B3B","#A28A3D","rgba(182,149,65,0)"],[0,0.576,1],-818.4,65.3,820,65.3).s().p("AgZAXQiQgdiJggIASgmIGhBrICyAtIgNABQhAAAj/g2g");
	this.shape_3.setTransform(-10.3,-14.9536);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#877238","#907533","rgba(168,129,58,0)"],[0,0.576,1],-817.4,62.7,821,62.7).s().p("AgZAXQiMgqiDgtIARgmQDGBMDQBHQBpAlBCAUIgKABQg6AAj/hQg");
	this.shape_4.setTransform(-15.65,11.0337);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#846F37","#8B6E30","rgba(163,122,55,0)"],[0,0.576,1],-817.1,61.9,821.3,61.9).s().p("AgZAXQiKguiCgyIARglQDEBUDPBMQBnAnBAAWIgIAAQg5AAj+hYg");
	this.shape_5.setTransform(-17.375,19.3809);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#836E36","#896C2E","rgba(161,120,54,0)"],[0,0.576,1],-817,61.5,821.4,61.5).s().p("AgZAXQiKgwiBgzIARgmQDEBXDNBPQBoAnA/AXIgIABQg4AAj+hcg");
	this.shape_6.setTransform(-18.05,22.7049);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#836E36","#886B2E","rgba(161,119,54,0)"],[0,0.576,1],-817,61.4,821.4,61.4).s().p("AgZAXQiKgxiBgzIASgmQDDBYDNBPQBnAoBAAXIgIABQg4AAj+hdg");
	this.shape_7.setTransform(-18.225,23.5546);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).wait(58));

	// yellowPaper_Shadow_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A2iGTIIwwUMAkVAFoIiDObg");
	var mask_1_graphics_1 = new cjs.Graphics().p("A2iGTIIwwUMAkVAFoIiEOcg");
	var mask_1_graphics_2 = new cjs.Graphics().p("A2fGTQEUoCEXoVMAkUAFoIiNOhg");
	var mask_1_graphics_3 = new cjs.Graphics().p("A2VGWQEFnnESo6MAkUAFoIi4Oug");
	var mask_1_graphics_4 = new cjs.Graphics().p("A17GcQDemeEFqcMAkUAFoIkvPVg");
	var mask_1_graphics_5 = new cjs.Graphics().p("A1EGpQCLkCDqtuMAkUAFoIomQng");
	var mask_1_graphics_6 = new cjs.Graphics().p("A0MG2QA3hnDOxAMAkUAFoIsdR7g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AzyG9QAQgeDByjMAkUAFoIuUShg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AzoG/IC9zLMAkUAFoIu/Sxg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AzmG/QgCAFC7zRMAkUAFoIvJS0g");
	var mask_1_graphics_10 = new cjs.Graphics().p("AzmHAQgCAEC7zRMAkUAFoIvKS0g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:24.3,y:-128.2}).wait(1).to({graphics:mask_1_graphics_1,x:24.3,y:-128.1}).wait(1).to({graphics:mask_1_graphics_2,x:24.15,y:-126.5}).wait(1).to({graphics:mask_1_graphics_3,x:23.525,y:-119.6}).wait(1).to({graphics:mask_1_graphics_4,x:21.9,y:-100.975}).wait(1).to({graphics:mask_1_graphics_5,x:18.425,y:-61.7}).wait(1).to({graphics:mask_1_graphics_6,x:14.95,y:-22.425}).wait(1).to({graphics:mask_1_graphics_7,x:13.325,y:-3.825}).wait(1).to({graphics:mask_1_graphics_8,x:12.7,y:3.1}).wait(1).to({graphics:mask_1_graphics_9,x:12.5484,y:4.7}).wait(1).to({graphics:mask_1_graphics_10,x:12.5484,y:4.8}).wait(57));

	// yellowPaperShadow
	this.instance_1 = new lib.yellow_paper_shadow();
	this.instance_1.alpha = 0;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},11).wait(56));

	// Layer_1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AtOH5QgCADidoXIicoZMAkTAFoIz1MBg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AtOH5QgCADidoXIicoZMAkTAFoIz1MBg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AtOH0QgCADidoXIicoZMAkTAFoIz2MLg");
	var mask_2_graphics_3 = new cjs.Graphics().p("AtOHoQgCADidoXIicoZMAkTAFoIz8Mjg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AtOG7QgCADidoXIicoZMAkTAFoI0PN9g");
	var mask_2_graphics_5 = new cjs.Graphics().p("AtOGeQgCADidoXIicoZMAkTAFoI0cO3g");
	var mask_2_graphics_6 = new cjs.Graphics().p("AtPGVQgBADidoXIidoZMAkVAFoI0gPJg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AtOGRQgCADidoXIicoZMAkTAFoI0iPRg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AtPGQQgBADidoXIidoZMAkUAFoI0iPTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:52.25,y:-125.775}).wait(1).to({graphics:mask_2_graphics_1,x:52.25,y:-125.775}).wait(1).to({graphics:mask_2_graphics_2,x:51.15,y:-121.725}).wait(1).to({graphics:mask_2_graphics_3,x:48.1,y:-110.475}).wait(1).to({graphics:mask_2_graphics_4,x:37.2,y:-69.975}).wait(1).to({graphics:mask_2_graphics_5,x:30.2,y:-43.975}).wait(1).to({graphics:mask_2_graphics_6,x:27.9,y:-35.625}).wait(1).to({graphics:mask_2_graphics_7,x:27.05,y:-32.3}).wait(1).to({graphics:mask_2_graphics_8,x:26.8,y:-31.45}).wait(59));

	// Layer_3
	this.instance_2 = new lib.white_paper();

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67));

	// yellow_paper
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DFC958").s().p("AhBIZQlRhwg4geQgHgEArgoQANgMAVgoQAqhRAsiPQAVh3AXiLQAtkXAGhkIAGgnQAMgnAdgCIJbAgQAVAFgFASIhVLDQgKBcgUBwQgnDfguBgQidgying4g");
	this.shape_8.setTransform(-10.8646,-9.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(67));

	// main_pad_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AmgL8QhRg+g+hBIBkjUQAdhmA2oCQAakCAVjuQAUhhAogjQAPgNBigPQBhgOB4gIQE0gUBHAoQA6AgASKwIAOH7QAKD8ARA+QAiB4k+AjQhbAKiiAHQiVAGghAFIgTABQhZAAiShwg");
	mask_3.setTransform(1.0392,1.0096);

	// main_pad
	this.instance_3 = new lib.calendar_animation();

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-171.4,152.3,247.5);


(lib.Phone_animation = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BSWH_BottomBar();
	this.instance.setTransform(-47.45,92.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("Au0IRIAAwhIdpAAIAAQhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:4.875,y:-14.375}).wait(229));

	// People_01
	this.instance_1 = new lib.People_mc_01();
	this.instance_1.setTransform(3.5,91.55);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({scaleX:1.017,scaleY:1.017,x:3,y:-6.95},10,cjs.Ease.quartOut).to({y:-5.95},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:3.5},20,cjs.Ease.quadInOut).to({y:-6.95},4).to({y:91.55},10,cjs.Ease.quadIn).wait(181));

	// People_02
	this.instance_2 = new lib.People_mc_02();
	this.instance_2.setTransform(3.5,91.55);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({scaleX:1.017,scaleY:1.017,x:3,y:-6.95},10,cjs.Ease.quartOut).to({y:-5.95},4,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:3.5},20,cjs.Ease.quadInOut).to({y:-6.95},4).to({y:91.55},10,cjs.Ease.quadIn).wait(180));

	// Layer_8
	this.instance_3 = new lib.board_mc();
	this.instance_3.setTransform(3.45,99.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:0.9638,scaleY:0.9638,x:3.6,y:-32.6},10,cjs.Ease.quartOut).to({y:-30.6},4,cjs.Ease.quartInOut).wait(1).to({regX:-0.1,regY:0.1,x:3.35,y:-30.4},0).wait(1).to({scaleX:0.9639,scaleY:0.9639},0).wait(1).to({scaleX:0.964,scaleY:0.964},0).wait(1).to({scaleX:0.9642,scaleY:0.9642},0).wait(1).to({scaleX:0.9644,scaleY:0.9644},0).wait(1).to({scaleX:0.9647,scaleY:0.9647},0).wait(1).to({scaleX:0.9651,scaleY:0.9651},0).wait(1).to({scaleX:0.9657,scaleY:0.9657},0).wait(1).to({scaleX:0.9663,scaleY:0.9663},0).wait(1).to({scaleX:0.9671,scaleY:0.9671},0).wait(1).to({scaleX:0.968,scaleY:0.968},0).wait(1).to({scaleX:0.9693,scaleY:0.9693,y:-30.45},0).wait(1).to({scaleX:0.9708,scaleY:0.9708},0).wait(1).to({scaleX:0.9729,scaleY:0.9729},0).wait(1).to({scaleX:0.9756,scaleY:0.9756,x:3.3,y:-30.5},0).wait(1).to({scaleX:0.9795,scaleY:0.9795,y:-30.55},0).wait(1).to({scaleX:0.9851,scaleY:0.9851,x:3.25,y:-30.6},0).wait(1).to({scaleX:0.9915,scaleY:0.9915,x:3.2,y:-30.65},0).wait(1).to({scaleX:0.9965,scaleY:0.9965,y:-30.7},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:3.45,y:-30.9},0).wait(1).to({regX:-0.1,regY:0.1,x:3.35,y:-31.05},0).wait(1).to({y:-31.35},0).wait(1).to({y:-31.75},0).wait(1).to({regX:0,regY:0,x:3.45,y:-32.4},0).to({y:104.1},10,cjs.Ease.quadIn).wait(179));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_65 = new cjs.Graphics().p("AzzKDIAA0FMAnnAAAIAAUFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_1_graphics_65,x:10.275,y:-23.225}).wait(180));

	// happy_02
	this.instance_4 = new lib.happy_02_1();
	this.instance_4.setTransform(64.5,93.5,0.6883,0.6883);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({scaleX:1,scaleY:1,x:82.5,y:-13},12,cjs.Ease.quadInOut).to({x:84.5,y:-11.5},3).to({y:-9.5},17).to({y:-12},18).to({scaleX:0.8027,scaleY:0.8027,x:64.75,y:93.4},11,cjs.Ease.cubicIn).wait(119));

	// happy_01
	this.instance_5 = new lib.happy_01_1();
	this.instance_5.setTransform(39.3,118.3,0.6703,0.6703);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(68).to({_off:false},0).to({scaleX:1,scaleY:1,x:38.3,y:6.8},12,cjs.Ease.quadInOut).to({x:39.3,y:8.3},3).to({y:10.3},18).to({y:7.8},15).to({scaleX:0.8027,scaleY:0.8027,x:28.45,y:109.3},10,cjs.Ease.cubicIn).wait(119));

	// blue_bubble
	this.instance_6 = new lib.blue_bubble();
	this.instance_6.setTransform(-47.9,120.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(65).to({_off:false},0).to({y:13.6},12,cjs.Ease.quadInOut).to({y:15.1},3).to({y:17.1},15).to({y:14.6},19).to({scaleX:0.8027,scaleY:0.8027,x:-41.5,y:114.75},12,cjs.Ease.cubicIn).wait(119));

	// teal_bubble
	this.instance_7 = new lib.teal_bubble();
	this.instance_7.setTransform(17.3,85.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).to({y:-21.4},12,cjs.Ease.quadInOut).to({y:-19.9},3).to({y:-17.9},17).to({y:-20.4},18).to({scaleX:0.8027,scaleY:0.8027,x:10.85,y:86.65},9,cjs.Ease.cubicIn).wait(119));

	// Layer_25 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_70 = new cjs.Graphics().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	var mask_2_graphics_71 = new cjs.Graphics().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	var mask_2_graphics_72 = new cjs.Graphics().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgEAAgFgEg");
	var mask_2_graphics_73 = new cjs.Graphics().p("AgUAVQgJgJAAgMQAAgLAJgKQAJgHALgBQAMABAKAHQAHAKABALQgBAMgHAJQgKAJgMAAQgLAAgJgJg");
	var mask_2_graphics_74 = new cjs.Graphics().p("AgxAzQgWgWAAgdQAAgdAWgVQAUgVAdAAQAeAAAVAVQAVAVAAAdQAAAdgVAWQgVAVgeAAQgdAAgUgVg");
	var mask_2_graphics_75 = new cjs.Graphics().p("AhxByQgvgvAAhDQAAhCAvgvQAvgvBCAAQBDAAAvAvQAvAvAABCQAABDgvAvQgvAvhDAAQhCAAgvgvg");
	var mask_2_graphics_76 = new cjs.Graphics().p("AixCxQhIhJgBhoQABhnBIhJQBKhKBnABQBogBBJBKQBKBJAABnQAABohKBJQhJBJhoAAQhnAAhKhJg");
	var mask_2_graphics_77 = new cjs.Graphics().p("AjODPQhWhVAAh6QAAh5BWhVQBWhWB4AAQB5AABWBWQBWBVAAB5QAAB6hWBVQhWBWh5AAQh4AAhWhWg");
	var mask_2_graphics_78 = new cjs.Graphics().p("AjZDbQhbhbABiAQgBh/BbhbQBahZB/gBQCAABBaBZQBaBbAAB/QAACAhaBbQhaBZiAABQh/gBhahZg");
	var mask_2_graphics_79 = new cjs.Graphics().p("AjcDdQhchbAAiCQAAiBBchbQBchbCAAAQCBAABcBbQBcBbAACBQAACChcBbQhcBbiBAAQiAAAhchbg");
	var mask_2_graphics_80 = new cjs.Graphics().p("AjcDdQhchbAAiCQAAiBBchbQBchbCAAAQCBAABcBbQBcBbAACBQAACChcBbQhcBbiBAAQiAAAhchbg");
	var mask_2_graphics_112 = new cjs.Graphics().p("AjcDdQhchbAAiCQAAiBBchbQBchbCAAAQCBAABcBbQBcBbAACBQAACChcBbQhcBbiBAAQiAAAhchbg");
	var mask_2_graphics_113 = new cjs.Graphics().p("AjbDcQhchbAAiBQAAiABchcQBbhbCAABQCBgBBcBbQBaBcABCAQgBCBhaBbQhcBciBgBQiAABhbhcg");
	var mask_2_graphics_114 = new cjs.Graphics().p("AjXDYQhahaAAh+QAAh9BahaQBZhaB+ABQB+gBBaBaQBZBaAAB9QAAB+hZBaQhaBah+gBQh+ABhZhag");
	var mask_2_graphics_115 = new cjs.Graphics().p("AjLDMQhUhVgBh3QABh2BUhVQBUhVB3AAQB3AABVBVQBUBVAAB2QAAB3hUBVQhVBVh3AAQh3AAhUhVg");
	var mask_2_graphics_116 = new cjs.Graphics().p("Ai0C1QhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpQAABqhLBLQhLBLhqAAQhpAAhLhLg");
	var mask_2_graphics_117 = new cjs.Graphics().p("AiOCPQg7g7AAhUQAAhTA7g7QA7g7BTgBQBUABA7A7QA7A7AABTQAABUg7A7Qg7A7hUAAQhTAAg7g7g");
	var mask_2_graphics_118 = new cjs.Graphics().p("AhVBWQgkgjAAgzQAAgyAkgjQAjgkAyAAQAzAAAjAkQAkAjAAAyQAAAzgkAjQgjAkgzAAQgyAAgjgkg");
	var mask_2_graphics_119 = new cjs.Graphics().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_2_graphics_70,x:-76.05,y:-38.25}).wait(1).to({graphics:mask_2_graphics_71,x:-76.05,y:-38.25}).wait(1).to({graphics:mask_2_graphics_72,x:-76.05,y:-38.25}).wait(1).to({graphics:mask_2_graphics_73,x:-76.05,y:-38.25}).wait(1).to({graphics:mask_2_graphics_74,x:-76.05,y:-38.25}).wait(1).to({graphics:mask_2_graphics_75,x:-76.025,y:-38.225}).wait(1).to({graphics:mask_2_graphics_76,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_77,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_78,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_79,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_80,x:-76,y:-38.25}).wait(32).to({graphics:mask_2_graphics_112,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_113,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_114,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_115,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_116,x:-76,y:-38.25}).wait(1).to({graphics:mask_2_graphics_117,x:-76.025,y:-38.25}).wait(1).to({graphics:mask_2_graphics_118,x:-76.05,y:-38.25}).wait(1).to({graphics:mask_2_graphics_119,x:-76.05,y:-38.25}).wait(1).to({graphics:null,x:0,y:0}).wait(125));

	// person
	this.instance_8 = new lib.person_mc();
	this.instance_8.setTransform(-76.55,-38);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).wait(49).to({_off:true},1).wait(125));

	// Pen_animation
	this.instance_9 = new lib.pen_1();
	this.instance_9.setTransform(296.45,-35.6,3.1246,3.1246,0,0,0,0,-0.1);
	this.instance_9.alpha = 0.4805;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(143).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:34,y:-7.95,alpha:1},7,cjs.Ease.quartOut).wait(4).to({x:44,y:-5.45},8,cjs.Ease.quartInOut).wait(17).to({regY:-0.1,scaleX:3.1246,scaleY:3.1246,x:296.45,y:-35.6,alpha:0.4805},7,cjs.Ease.cubicIn).wait(59));

	// calendar_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_128 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_182 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_183 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_184 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_185 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_186 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_187 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_188 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_189 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_190 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_191 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_192 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_193 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_194 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");
	var mask_3_graphics_195 = new cjs.Graphics().p("Au/KtIAA1ZId/AAIAAVZg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(128).to({graphics:mask_3_graphics_128,x:2.525,y:-27.975}).wait(54).to({graphics:mask_3_graphics_182,x:2.525,y:-27.975}).wait(1).to({graphics:mask_3_graphics_183,x:2.525,y:-26.525}).wait(1).to({graphics:mask_3_graphics_184,x:2.525,y:-22.925}).wait(1).to({graphics:mask_3_graphics_185,x:2.525,y:-21.475}).wait(1).to({graphics:mask_3_graphics_186,x:2.525,y:-21.475}).wait(1).to({graphics:mask_3_graphics_187,x:2.525,y:-21.825}).wait(1).to({graphics:mask_3_graphics_188,x:2.525,y:-23.125}).wait(1).to({graphics:mask_3_graphics_189,x:2.525,y:-26.775}).wait(1).to({graphics:mask_3_graphics_190,x:2.525,y:-34.425}).wait(1).to({graphics:mask_3_graphics_191,x:2.525,y:-48.325}).wait(1).to({graphics:mask_3_graphics_192,x:2.525,y:-71.175}).wait(1).to({graphics:mask_3_graphics_193,x:2.525,y:-106.275}).wait(1).to({graphics:mask_3_graphics_194,x:2.525,y:-157.275}).wait(1).to({graphics:mask_3_graphics_195,x:2.525,y:-228.475}).wait(50));

	// pen_mark
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(245,210,95,0.678)").ss(2,1,1).p("AA0AOIhngb");
	this.shape.setTransform(-2.55,0.725);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(154).to({_off:false},0).to({_off:true},42).wait(49));

	// calendar_mc
	this.instance_10 = new lib.calendar_mc("single",0);
	this.instance_10.setTransform(12.85,127.05);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(128).to({_off:false},0).wait(1).to({regX:-4.3,regY:-10.7,x:8.55,y:66.6},0).wait(1).to({y:35.85},0).wait(1).to({y:15.9},0).wait(1).to({regX:0,regY:0,x:12.85,y:13.35,mode:"synched",loop:false},0).wait(1).to({regX:-4.3,regY:-10.7,x:8.55,y:-5.7,startPosition:1},0).wait(1).to({y:-11.25,startPosition:2},0).wait(1).to({y:-14.95,startPosition:3},0).wait(1).to({y:-17.3,startPosition:4},0).wait(1).to({y:-18.7,startPosition:5},0).wait(1).to({y:-19.4,startPosition:6},0).wait(1).to({regX:0,regY:0,x:12.85,y:-8.95,startPosition:7},0).to({y:-4.95,startPosition:11},4,cjs.Ease.quadInOut).wait(102));

	// Layer_16 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("A3bPeIAA+7MAu3AAAIAAe7g");
	mask_4.setTransform(2,-31.95);

	// Finger
	this.instance_11 = new lib.Finger_mc();
	this.instance_11.setTransform(259.65,133,1.6806,1.6806);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(204).to({_off:false},0).to({scaleX:1.0619,scaleY:1.0619,x:89.65,y:26.05},10,cjs.Ease.quartOut).to({scaleX:1,scaleY:1,x:86.65,y:25.05},2).to({scaleX:1.0619,scaleY:1.0619,x:89.65,y:26.05},2).wait(27));

	// Layer_17
	this.instance_12 = new lib.bswh_icon_1();
	this.instance_12.setTransform(9.95,-13.95,1.115,1.115);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(195).to({_off:false},0).to({scaleX:0.9419,scaleY:0.9419,x:10,y:-14,alpha:1},9,cjs.Ease.quartOut).wait(11).to({scaleX:0.8729,scaleY:0.8729},2).to({scaleX:0.9419,scaleY:0.9419},2).wait(26));

	// endPhone
	this.instance_13 = new lib.frame_04_1();
	this.instance_13.setTransform(3.25,-6.05,1.1155,1.1155,0,0,0,0,-0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(195).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:-5.95,alpha:1},9,cjs.Ease.quartOut).wait(41));

	// phone_mc
	this.instance_14 = new lib.Phone_mc();
	this.instance_14.setTransform(305,42.65);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:-2.5},7,cjs.Ease.quadOut).to({x:0},4,cjs.Ease.quadInOut).wait(2).to({y:47.15},3).to({y:41.15},5).to({y:42.65},5).wait(156).to({y:49.15},3,cjs.Ease.quadInOut).to({y:-157.85},10,cjs.Ease.quartIn).wait(50));

	// Layer_6
	this.instance_15 = new lib.Background_TEMP();
	this.instance_15.setTransform(3.8,-4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(245));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.4,-172.8,590,292.4);


// stage content:
(lib.Animation_Test = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// Layer_1
	this.instance = new lib.Phone_animation();
	this.instance.setTransform(152,125.35,1,1,0,0,0,3.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(360));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(149,123.2,441.1,127.8);
// library properties:
lib.properties = {
	id: '6451239B8A37429DB09D14421F24A0BA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"background_gradient.jpg", id:"background_gradient"},
		{src:"board.jpg", id:"board"},
		{src:"bswh_icon.png", id:"bswh_icon"},
		{src:"bubble_blue.jpg", id:"bubble_blue"},
		{src:"bubble_teal.jpg", id:"bubble_teal"},
		{src:"calendar.png", id:"calendar"},
		{src:"cta_btn.jpg", id:"cta_btn"},
		{src:"finger.jpg", id:"finger"},
		{src:"finger_sdw.png", id:"finger_sdw"},
		{src:"frame_04.jpg", id:"frame_04"},
		{src:"happy_01.png", id:"happy_01"},
		{src:"happy_02.jpg", id:"happy_02"},
		{src:"pen.png", id:"pen"},
		{src:"people.jpg", id:"people"},
		{src:"person_img.jpg", id:"person_img"},
		{src:"smartPhone_img.png", id:"smartPhone_img"}
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
an.compositions['6451239B8A37429DB09D14421F24A0BA'] = {
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