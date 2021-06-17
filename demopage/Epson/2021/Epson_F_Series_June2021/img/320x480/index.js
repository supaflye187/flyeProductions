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



(lib.items = function() {
	this.initialize(img.items);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,405);


(lib.pinkPrint = function() {
	this.initialize(img.pinkPrint);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,181);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,149);


(lib.purplePrinter = function() {
	this.initialize(img.purplePrinter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,459,279);


(lib.yellow_print = function() {
	this.initialize(img.yellow_print);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,149,103);// helper functions:

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


(lib.yellowCup_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AIZLLQi6gbhuhDQjGh5gtkJQgyknAYh/QAWhyBdgYIDgAFQDuAPBEAyIBiBIQBAAxAlAuQBrB/hBCIQgbA3guB5QgyCBgXAzQhSC5hSAAIgLgBg");
	mask.setTransform(88.2568,71.5625);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-61.05,-82.45);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowCup_mc, new cjs.Rectangle(84.6,39,91.9,104.1), null);


(lib.waterBottle_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AsMMcIAA43INyAAIAAY3g");
	mask.setTransform(-78.0892,7.7354);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-166.9,-72.35,1.0097,1.0097);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waterBottle_mc, new cjs.Rectangle(-156.2,-71.9,88.29999999999998,159.3), null);


(lib.txt_toMake = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("ALlBnQgPgFgJgLQgKgLgFgPQgFgPAAgSQAAgRAFgNQAGgQAJgLQAKgLAPgHQANgHARAAQATAAAPAIQAPAIAJAMQAKANAEAPQAFARgCARIhzAAQAAAKACAIQADAIAFAHQAFAGAIAEQAIADALAAQAPAAAJgGQAKgGAEgNIAhAAQgDANgHAKQgHAKgJAGQgJAHgMAEQgMADgMAAQgTAAgOgHgAMsANQAAgHgEgHQgDgHgEgGQgFgGgIgDQgHgDgJAAQgIAAgIADQgHACgFAGQgGAHgDAHQgDAGAAAIIBQAAIAAAAgADYBnQgOgFgKgLQgJgLgFgPQgGgPAAgSQAAgRAGgNQAFgQAKgLQAKgLAOgHQAOgHARAAQASAAAQAIQAOAIAKAMQAJANAEAPQAFARgCARIhzAAQAAAKACAIQADAIAGAHQAEAGAIAEQAIADALAAQAPAAAJgGQAKgGAEgNIAhAAQgDANgHAKQgGAKgJAGQgKAHgMAEQgLADgNAAQgSAAgPgHgAEgANQgBgHgDgHQgDgHgFgGQgFgGgHgDQgHgDgJAAQgJAAgIADQgGACgGAGQgFAHgDAHQgEAGAAAIIBRAAIAAAAgAgTBuQgKAAgHgEQgHgEgCgLQgKAKgPAFQgPAEgOAAQgLAAgJgDQgKgCgHgGQgIgFgFgKQgEgIAAgMQAAgOAGgKQAFgIAJgFQAIgGALgCIA2gJQAHgBADgFQAFgCAAgIQAAgGgEgEQgDgFgEgCIgLgDIgLAAQgOgBgKAHQgJAGgBAMIgjAAQABgPAGgJQAHgLAKgGQAJgGANgDQAMgCANAAQAMAAALACQALADAJAFQAJAGAFAJQAGAIAAANIAABPQAAAGABAEQACABAFAAIAHAAIAAAYIgPAEgAhDAiIghAFIgKAFQgEADgCAFQgCAEAAAHQAAAFADAFIAIAGIALACIAJABIANgBQAHgCAGgDQAFgDAEgHQAEgFAAgHIAAgbQgIAFgLACgAqCBnQgOgGgLgKQgKgLgFgPQgFgPAAgTQAAgRAFgPQAFgPAKgLQALgKAOgHQAOgGAUAAQASAAAPAGQAPAHAJAKQALALAFAPQAGAPAAARQAAATgGAPQgFAPgLALQgJAKgPAGQgPAHgSAAQgUAAgOgHgAp0gWQgJAFgGAIQgFAIgCAJQgDAKAAAJQAAAKADAKQACAKAFAIQAGAIAJAGQAIADAMAAQALAAAJgDQAIgGAFgIQAGgIADgKQACgKAAgKQAAgJgCgKQgDgJgGgIQgFgIgIgFQgJgEgLAAQgMAAgIAEgAHYBpQgIgDgFgEQgEgGgCgIIgCgRIAAhbIgaAAIAAgaIAaAAIAAgvIAjAAIAAAvIAfAAIAAAaIgfAAIAABcIACAHIAFAEIAJACIAPgCIAAAbIgXABQgOAAgIgCgAJ/BqIAAhiQgBgSgGgIQgIgJgQABQgIAAgHADQgHACgFAGQgFAHgCAHQgEAGAAAIIAABdIgiAAIAAjXIAiAAIAABQIABAAQAHgLAMgGQANgIAQAAQAZAAAPANQAPAOAAAbIAABqgAB+BqIgvhMIgVAUIAAA4IgiAAIAAjXIAiAAIAAB5IA+g+IArAAIg8A5IBBBjgAjcBqIAAhbIAAgRQgBgHgDgGQgDgGgFgDQgGgDgKABQgSgBgHALQgIALAAAUIAABbIgjAAIAAhkQAAgQgFgIQgHgJgPABQgHgBgGADQgGADgFAFQgFAFgCAIQgEAHAAAJIAABdIgiAAIAAicIAhAAIAAAWIAAAAIAJgKQAFgFAFgDQAGgEAHgCQAHgCAKAAQAOAAAMAHQANAGAFANQAJgMALgGQALgIARAAQAZAAAOAMQAOAMAAAdIAABrgAsJBqIAAi3IhFAAIAAggICvAAIAAAgIhFAAIAAC3g");
	this.shape.setTransform(24.7326,92.2509,0.7959,0.7959);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_toMake, new cjs.Rectangle(-62.9,-15.1,155.1,116.1), null);


(lib.txt_SureColor = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgMAfQgHgCgEgEQgFgFgCgGQgEgGAAgIQAAgHAEgGQACgGAFgEQAEgFAHgCQAGgDAGAAQAHAAAGADQAHACAEAFQAFAEADAGQADAGAAAHQAAAIgDAGQgDAGgFAFQgEAEgHACQgGADgHAAQgGAAgGgDgAgJgXQgFACgDADQgEAEgBAEQgDAFAAAFQAAAGADAFQABAFAEADQADAEAFACQAEACAFAAQAFAAAFgCQAEgCAEgEQAEgDACgFQACgFgBgGQABgFgCgFQgCgEgEgEQgEgDgEgCQgFgCgFAAQgFAAgEACgAAIATIgIgQIgFAAIAAAQIgHAAIAAglIANAAQAHAAADADQAFACAAAGIgBAFIgCACIgEACIgDAAIAKARgAgFgCIAFAAIAGgBQAAAAABgBQAAAAAAAAQABgBAAgBQAAAAAAgBIgBgDIgBgBIgDgBIgDAAIgFAAg");
	this.shape.setTransform(75.3,39.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AguBKIAAiQIAmAAIAAAbIABAAQADgGAEgGQAEgGAGgEQAGgEAHgCQAHgCAIAAIAJABIAAAlIgHgBIgIAAQgLAAgHADQgIAEgEAGQgEAGgCAJQgCAIAAAJIAABBg");
	this.shape_1.setTransform(66.025,46.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgeBHQgNgFgKgKQgKgLgGgOQgFgOAAgQQAAgRAFgPQAGgOAKgKQAKgJANgGQAOgFAQAAQARAAAOAFQANAGALAJQAJAKAGAOQAFAPAAARQAAAQgFAOQgGAOgJALQgLAKgNAFQgOAFgRAAQgQAAgOgFgAgQgpQgGAEgEAGQgFAHgCAIQgBAJAAAIIABARQACAHAFAHQAEAGAGAEQAHAFAJAAQAKAAAHgFQAHgEAEgGQAEgHACgHIABgRQAAgIgBgJQgCgIgEgHQgEgGgHgEQgHgEgKAAQgJAAgHAEg");
	this.shape_2.setTransform(51.15,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgTBkIAAjHIAnAAIAADHg");
	this.shape_3.setTransform(38.875,44.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgeBHQgNgFgLgKQgJgLgFgOQgGgOAAgQQAAgRAGgPQAFgOAJgKQALgJANgGQAOgFAQAAQARAAAOAFQANAGALAJQAJAKAFAOQAGAPAAARQAAAQgGAOQgFAOgJALQgLAKgNAFQgOAFgRAAQgQAAgOgFgAgQgpQgGAEgFAGQgEAHgBAIQgCAJAAAIIACARQABAHAEAHQAFAGAGAEQAHAFAJAAQAKAAAHgFQAGgEAFgGQAEgHABgHIACgRQAAgIgCgJQgBgIgEgHQgFgGgGgEQgHgEgKAAQgJAAgHAEg");
	this.shape_4.setTransform(26.55,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgjBhQgTgJgMgOQgNgOgGgSQgHgTAAgWQAAgWAHgSQAGgUANgOQAMgOATgJQASgHAWgBQARAAAOAFQAPAFAMAJQALAJAIANQAHAOACARIgqAAQgBgIgEgFQgEgHgGgEQgGgFgHgDQgIgDgIAAQgOAAgKAGQgKAFgHALQgGAJgDAMQgDANAAAMQAAANADAMQADALAGAKQAHAJAKAGQAKAGAOAAQAUAAAMgNQALgMACgUIArAAQgCATgHAPQgHAPgLAKQgMALgPAGQgPAGgTAAQgWgBgSgHg");
	this.shape_5.setTransform(7.525,44.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgcBGQgOgEgJgLQgKgKgFgOQgFgOAAgQQAAgQAFgOQAFgOAKgKQAKgKAOgGQANgGAQAAQASAAAOAHQAOAHAIAMQAJAMAEAPQAEAQgBAQIhnAAQAAATAJAJQAJAJAQAAQAMAAAJgHQAJgFACgHIAjAAQgJAagRALQgSALgYAAQgQAAgOgGgAgOgqQgGAEgEAEQgEAFgBAFIgCAKIA/AAQgCgPgIgJQgHgHgOAAQgJAAgGADg");
	this.shape_6.setTransform(-11.015,46.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AguBKIAAiQIAmAAIAAAbIABAAQADgGAEgGQAEgGAGgEQAGgEAHgCQAHgCAIAAIAJABIAAAlIgHgBIgIAAQgLAAgHADQgIAEgEAGQgEAGgCAJQgCAIAAAJIAABBg");
	this.shape_7.setTransform(-23.875,46.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgoBGQgKgEgHgIQgFgHgDgLQgCgLAAgOIAAhYIAoAAIAABRQAAASAFAJQAGAIAOAAQAQAAAHgJQAHgKAAgWIAAhLIAoAAIAACQIgmAAIAAgUIgBAAQgHAMgMAGQgMAFgMAAQgQAAgKgEg");
	this.shape_8.setTransform(-38.5,47.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgeBkQgPgEgMgIQgMgJgHgOQgHgNAAgSIAqAAQAAAKAEAHQAEAHAGAEQAGAFAIACQAIACAIAAIAMgBQAHgBAGgDQAGgDAEgFQAEgFAAgIQAAgHgFgFQgGgGgIgDIgTgGIgVgGIgVgGQgLgEgIgFQgJgHgFgKQgFgJAAgOQAAgPAGgMQAHgLAKgIQALgHAOgEQANgEANAAQAPAAAPAEQAOAEALAHQALAIAHAMQAHAMAAASIgrAAQgBgJgDgGQgDgGgFgDQgGgEgHgBIgNgCIgLABQgFACgFADQgEACgDAFQgDAEAAAGQAAAGACAEQADADAGAEIATAFIAdAIIAPAFQAKADAKAGQAKAFAHALQAHALAAARQAAAOgFALQgFAMgLAJQgKAIgQAEQgQAFgUABQgPAAgQgFg");
	this.shape_9.setTransform(-56.025,44.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_SureColor, new cjs.Rectangle(-67.1,24.9,148.7,37.4), null);


(lib.txt_PrintWithThe = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgXA6QgKgFgIgIQgIgIgDgMQgEgLAAgOQAAgMAEgLQAEgLAHgJQAIgJAKgFQALgFAMAAQAOAAAMAGQALAGAHAKQAHAJAEANQADAMgCANIhWAAQAAAHADAGQABAGAEAFQAEAFAGADQAGADAHAAQAMAAAGgFQAIgFADgKIAZAAQgCAKgFAHQgFAIgIAFQgHAFgJADQgIADgKAAQgNAAgLgFgAAegKQAAgGgDgGQgCgFgDgFQgEgEgGgDQgFgCgHAAQgFAAgGACQgFADgEAEQgEAEgDAGQgDAGAAAGIA8AAIAAAAg");
	this.shape.setTransform(87.8,94.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaBSIAAhLQAAgNgGgGQgFgGgMAAQgGgBgFADQgFACgEAFQgEAEgCAFQgCAFAAAHIAABGIgaAAIAAijIAaAAIAAA9IABAAQAEgIAKgGQAKgFAKAAQAUAAALAKQALAKAAATIAABSg");
	this.shape_1.setTransform(74.8,92.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABBMQgFgCgEgEQgDgEgCgFIgBgNIAAhGIgUAAIAAgTIAUAAIAAgkIAZAAIAAAkIAYAAIAAATIgYAAIAAA/IAAAHIACAFIAEADIAHABIAFAAIAGgBIAAAVIgJAAIgIABQgLAAgGgCg");
	this.shape_2.setTransform(64.325,93.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaBSIAAhLQAAgNgGgGQgGgGgMAAQgFgBgFADQgGACgDAFQgEAEgCAFQgCAFAAAHIAABGIgaAAIAAijIAaAAIAAA9IAAAAQAFgIAKgGQAJgFALAAQATAAAMAKQALAKAAATIAABSg");
	this.shape_3.setTransform(47.85,92.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBMQgFgCgEgEQgDgEgCgFIgBgNIAAhGIgUAAIAAgTIAUAAIAAgkIAZAAIAAAkIAYAAIAAATIgYAAIAAA/IAAAHIACAFIAEADIAHABIAFAAIAGgBIAAAVIgJAAIgIABQgLAAgGgCg");
	this.shape_4.setTransform(37.375,93.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBSIAAh2IAZAAIAAB2gAgMg4IAAgZIAZAAIAAAZg");
	this.shape_5.setTransform(31,92.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAWA8IgWhXIAAAAIgVBXIgcAAIglh3IAdAAIAWBYIABAAIAXhYIAZAAIAVBYIAAAAIAZhYIAbAAIgmB3g");
	this.shape_6.setTransform(19.4,94.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABBMQgFgCgEgEQgDgEgCgFIgBgNIAAhGIgUAAIAAgTIAUAAIAAgkIAZAAIAAAkIAYAAIAAATIgYAAIAAA/IAAAHIACAFIAEADIAHABIAFAAIAGgBIAAAVIgJAAIgIABQgLAAgGgCg");
	this.shape_7.setTransform(0.275,93.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAaA9IAAhKQAAgOgGgGQgFgGgMAAQgGgBgFADQgFACgEAFQgEAEgCAGQgCAFAAAHIAABFIgaAAIAAh2IAYAAIAAASIABAAQAGgKAJgGQAKgFALAAQAUAAALAKQALAKAAAUIAABRg");
	this.shape_8.setTransform(-9.9,94.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMBSIAAh2IAZAAIAAB2gAgMg4IAAgZIAZAAIAAAZg");
	this.shape_9.setTransform(-19.15,92.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiA9IAAh2IAZAAIAAAXIAAAAQABgEAEgGQADgEAEgEQAEgEAGgCQAGgCAGAAIAGAAIAEABIAAAZIgGgBIgGAAQgGAAgGADQgGACgEAFQgEAFgCAIQgDAIAAAJIAAA4g");
	this.shape_10.setTransform(-25.075,94.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag/BSIAAijIBHAAQASAAALAFQALAFAGAIQAGAHACAJQACAJAAAHQAAAIgCAJQgCAJgGAGQgGAIgLAFQgLAFgSAAIgrAAIAAA/gAgjgEIApAAIAKgBQAGgBAEgDQAEgDADgFQACgFAAgJQAAgHgCgGQgCgFgEgEQgEgCgFgBIgLgCIgqAAg");
	this.shape_11.setTransform(-37,92.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_PrintWithThe, new cjs.Rectangle(-46.7,76.9,142.4,30.599999999999994), null);


(lib.txt_printingLeader = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape.setTransform(119.225,94.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AAqBkQgDgKgBgMIgDgaQgCgPgIgIQgHgHgQAAIgrAAIAABOIgsAAIAAjHIBrAAQANAAALAFQAKAEAJAHQAHAIAEAKQAEAJAAAMQAAASgHANQgHAMgSAGIAAABQAJACAFAFQAFAFADAFQAEAHACAIIABAOIABAMIABANIADAMQABAHADAEgAgpgJIAvAAQAPABAIgHQAHgHAAgPQAAgOgHgHQgIgGgPgBIgvAAg");
	this.shape_1.setTransform(105.85,86.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AhLBkIAAjHICVAAIAAAlIhpAAIAAArIBgAAIAAAhIhgAAIAAAxIBrAAIAAAlg");
	this.shape_2.setTransform(86.875,86.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AhXBkIAAjHIBVAAQATAAAQAHQARAFANAMQALANAIASQAGATAAAZQAAAUgFAUQgGASgLANQgLANgRAJQgRAHgXAAgAgrA/IAmAAQAJAAAJgDQAJgDAHgHQAHgIAEgLQAFgMAAgQQgBgOgDgMQgCgMgIgJQgGgJgLgEQgLgFgQAAIgeAAg");
	this.shape_3.setTransform(67.6,86.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AA0BkIgPgsIhKAAIgQAsIgsAAIBMjHIAsAAIBKDHgAgaAXIA0AAIgahIIAAAAg");
	this.shape_4.setTransform(47.4,86.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AhLBkIAAjHICVAAIAAAlIhpAAIAAArIBgAAIAAAhIhgAAIAAAxIBrAAIAAAlg");
	this.shape_5.setTransform(29.375,86.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AhGBkIAAjHIAsAAIAACiIBhAAIAAAlg");
	this.shape_6.setTransform(12.425,86.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYBjQgLgDgJgFQgJgGgGgJQgGgIgBgNIAoAAQACALAJAFQAIAEAJAAQARAAAIgKQAIgKgBgQIAAgTIAAAAQgHAMgMAGQgMAFgMAAQgQAAgMgGQgLgFgIgLQgIgKgDgMQgEgNAAgPQAAgOAFgNQADgNAIgKQAIgKAMgGQALgFAPgBQAOABALAFQAKAFAIAMIAAAAIAAgTIAmAAIAACHQAAAJgCAKQgDAMgIAJQgHAKgPAHQgPAGgYAAQgLAAgLgCgAgNhEQgGAEgEAGQgEAGgCAHQgCAIAAAHIACAQQABAIAEAGQAEAFAGAEQAGAEAIAAQAJAAAGgDQAHgEAEgFQAEgFACgHQACgIAAgHQAAgJgBgIQgCgIgEgHQgEgFgGgEQgHgEgKABQgHAAgGACg");
	this.shape_7.setTransform(-13.325,91.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAcBKIAAhRQAAgRgGgJQgFgJgPAAQgPAAgHAKQgHAJAAAWIAABLIgoAAIAAiQIAmAAIAAAVIAAAAQAJgNAMgGQALgFAMAAQAQAAAKAEQALAEAFAIQAGAIACALQADALAAANIAABYg");
	this.shape_8.setTransform(-29.95,88.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_9.setTransform(-41.925,86.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGBdQgHgBgHgEQgGgDgEgHQgDgHAAgLIAAhUIgZAAIAAgbIAZAAIAAgrIAmAAIAAArIAdAAIAAAbIgdAAIAABHQABAKADADQADAEAKAAIAHgBIAFgBIAAAfIgLABIgLABg");
	this.shape_10.setTransform(-50.7,86.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcBKIAAhRQAAgRgGgJQgFgJgOAAQgQAAgHAKQgHAJAAAWIAABLIgoAAIAAiQIAmAAIAAAVIAAAAQAJgNALgGQALgFANAAQAQAAAKAEQAKAEAHAIQAFAIADALQACALAAANIAABYg");
	this.shape_11.setTransform(-63.9,88.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_12.setTransform(-75.875,86.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBKIAAiQIAmAAIAAAbIABAAQADgGAEgGQAEgGAGgEQAGgEAHgCQAHgCAIAAIAJABIAAAlIgHgBIgIAAQgLAAgHADQgIAEgEAGQgEAGgCAJQgCAIAAAJIAABBg");
	this.shape_13.setTransform(-84.275,88.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhJBkIAAjDIAmAAIAAATIABAAQAHgMALgFQALgFANgBQARAAAMAHQANAGAIALQAIAKAEAPQAEANAAAQQAAAPgEAMQgEAOgIAKQgIAKgMAHQgMAFgQAAQgMABgMgGQgLgFgHgLIgBAAIAABFgAgQhBQgHAFgEAGQgEAGgCAIQgBAJAAAJIABARQACAIAEAGQAEAGAHAEQAHAEAJAAQAJAAAHgEQAGgEAFgGQADgGACgIIACgRIgCgRQgCgJgEgGQgEgGgHgFQgGgDgJAAQgKAAgGADg");
	this.shape_14.setTransform(-98.775,91.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_printingLeader, new cjs.Rectangle(-109.6,67,234.8,37.900000000000006), null);


(lib.txt_highSpeed = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAkBkIAAhiQAAgNgIgHQgHgIgOAAQgKAAgJAEQgIACgEAHQgGAGgDAHQgCAJAAAJIAABSIgYAAIAAjHIAYAAIAABNIAAAAQADgHAFgFQAFgEAHgDIAMgFIANgBQAPAAAJAEQAJADAGAIQAGAGACALQADAJAAALIAABfg");
	this.shape.setTransform(103.8,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUBeIgPgBQgGgBgEgEQgEgEgCgFQgCgHAAgKIAAhaIgZAAIAAgWIAZAAIAAgrIAXAAIAAArIAdAAIAAAWIgdAAIAABYIAAAHIADAEIAFABIAKABIALAAIAAAVg");
	this.shape_1.setTransform(90.975,80.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBkIAAiQIAXAAIAACQgAgLhGIAAgdIAXAAIAAAdg");
	this.shape_2.setTransform(83.425,80);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeBJIgehzIAAAAIgcBzIgaAAIguiQIAaAAIAhB1IAAAAIAdh1IAZAAIAfB1IAAAAIAhh1IAYAAIguCQg");
	this.shape_3.setTransform(69.375,82.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBgQgNgHgIgKQgIgKgFgOQgDgOAAgPQAAgPADgNQAEgOAJgKQAIgKANgHQAMgFARAAIAKABIAOADQAGADAGAFQAFADAEAHIABAAIAAhKIAYAAIAADGIgYAAIAAgTIgBAAQgGAMgMAGQgMAEgPAAQgRAAgMgFgAgTgXQgIAFgGAIQgFAHgCAKQgCAKAAAKQAAALADAJQACAKAGAHQAFAIAIAFQAJAEAKAAQAMAAAJgFQAIgEAGgJQAFgHACgKQADgJAAgLQAAgLgDgJQgDgJgFgIQgFgHgJgFQgJgEgMAAQgLAAgIAEg");
	this.shape_4.setTransform(41.55,80.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaBGQgNgFgJgLQgIgKgFgOQgEgOgBgQQAAgQAFgNQAFgOAKgKQAJgLAMgFQANgGANABQAUAAAMAHQANAJAIAMQAIAMACAPQADAOAAANIhrAAQgBAIADAKQACAIAGAGQAGAHAIAEQAJAEALAAQAPAAAJgHQAKgHADgOIAYAAQgFAYgQAMQgRAMgYAAQgRABgMgGgAgQgzQgHAEgFAFQgGAGgDAIQgDAHAAAIIBSAAQgBgIgDgIQgDgHgGgGQgFgFgIgEQgHgCgJAAQgIAAgIACg");
	this.shape_5.setTransform(26.0286,82.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaBGQgNgFgJgLQgIgKgFgOQgEgOgBgQQAAgQAFgNQAFgOAKgKQAJgLAMgFQANgGANABQAUAAAMAHQANAJAIAMQAIAMACAPQADAOAAANIhrAAQgBAIADAKQACAIAGAGQAGAHAIAEQAJAEALAAQAPAAAJgHQAKgHADgOIAYAAQgFAYgQAMQgRAMgYAAQgRABgMgGgAgQgzQgHAEgFAFQgGAGgDAIQgDAHAAAIIBSAAQgBgIgDgIQgDgHgGgGQgFgFgIgEQgHgCgJAAQgIAAgIACg");
	this.shape_6.setTransform(10.6786,82.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhEBlIAAjGIAYAAIAAATIABAAQAGgMAMgFQANgGAOABQARAAAMAFQANAHAIAKQAIALAFAOQAEANAAAPQAAAQgEAMQgEAOgJALQgIAKgMAGQgNAGgQgBIgLgBIgNgDQgHgDgFgEQgGgFgEgGIgBAAIAABKgAgVhLQgIAFgFAIQgGAIgCAJQgDAKAAAKQAAAKADAKQADAJAFAIQAFAHAJAFQAJAFALAAQAMAAAJgFQAIgEAFgJQAFgHACgKQACgKAAgKQAAgKgCgKQgDgKgFgHQgGgHgIgFQgJgEgKAAQgMAAgJAEg");
	this.shape_7.setTransform(-5.225,85.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWBJQgLgDgIgFQgIgGgGgKQgEgJgCgNIAZAAQAAAHADAGQADAGAGADQAGADAGACIANABIAMgBIAMgDQAFgDADgDQADgFABgGQAAgKgIgFQgHgFgKgDIgWgEQgMgDgLgEQgKgDgIgIQgGgJAAgOQAAgKAFgIQAFgIAHgFQAIgFAJgCQAKgCAKAAQALAAALACQAKABAIAGQAIAFAEAJQAGAIAAAOIgYAAQAAgIgDgEQgEgFgEgDIgKgDIgLgBIgLAAIgKADQgFACgCAEQgDADAAAGQAAAGAFAEQADAEAIADIAPAEIAPAEIARAFQAJADAHADQAGAFAEAHQAFAHAAAKQAAAOgGAIQgFAIgJAGQgJAFgLACQgLACgLAAQgLAAgLgCg");
	this.shape_8.setTransform(-21.3,82.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnALIAAgVIBQAAIAAAVg");
	this.shape_9.setTransform(-34.05,82.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBkIAAhiQAAgNgIgHQgHgIgPAAQgJAAgJAEQgHACgFAHQgGAGgCAHQgDAJAAAJIAABSIgYAAIAAjHIAYAAIAABNIAAAAQADgHAFgFQAFgEAHgDIAMgFIANgBQAPAAAIAEQAKADAGAIQAGAGACALQADAJAAALIAABfg");
	this.shape_10.setTransform(-47.6,80);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBlQgLgCgIgFQgJgFgFgIQgGgIgBgMIAYAAQABAGADAFQAEAEAGADQAFADAGABIAMABQALAAAJgEQAIgEAFgHQAFgHADgKQACgKAAgMIAAgKIAAAAQgHAOgMAGQgNAGgMAAQgRAAgMgGQgMgGgIgJQgIgKgEgOQgEgMAAgPQAAgNADgNQAEgOAHgLQAIgLANgHQANgHASAAQAOAAALAGQALAGAHAMIAAAAIAAgVIAWAAIAACDQAAAkgQASQgQARgiAAQgKAAgKgCgAgRhNQgIAEgFAIQgFAHgDAJQgCAKAAAKQAAAKACAKQACAJAFAIQAEAIAIAFQAIAEALAAQAMAAAIgEQAIgFAFgIQAFgIADgJQACgKAAgLQAAgJgCgJQgCgKgFgHQgFgHgIgFQgIgEgLAAQgLAAgIAEg");
	this.shape_11.setTransform(-64.175,85.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBkIAAiQIAXAAIAACQgAgLhGIAAgdIAXAAIAAAdg");
	this.shape_12.setTransform(-75.225,80);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA0BkIAAhcIhoAAIAABcIgaAAIAAjHIAaAAIAABWIBoAAIAAhWIAbAAIAADHg");
	this.shape_13.setTransform(-88.775,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highSpeed, new cjs.Rectangle(-100.9,61.4,215,36.6), null);


(lib.txt_goWith = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgEBhQgIgBgGgDQgGgCgGgFQgFgEgEgHIAAAAIAAATIgdAAIAAi/IAeAAIAABHIABAAQADgFAFgEIAKgHIAMgFIALgBQAQAAAMAGQANAGAIAKQAIAKAEANQAEANAAAPQAAAOgEANQgDAOgIAKQgHAKgLAGQgMAGgPAAgAgdgKQgKAMAAAXQAAAKADAJQADAJAFAHQAFAGAHAEQAHAEAJAAQAKAAAHgFQAIgEAFgHQAEgHACgIQACgJAAgJQAAgKgCgJQgDgIgFgHQgEgGgIgFQgHgEgJAAQgTAAgKAOg");
	this.shape.setTransform(116.875,83.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwA6QgNgOAAgbIAAhYIAfAAIAABVQABASAGAIQAIAHAMAAQAJAAAGgDQAHgDAEgFQAEgFACgHQACgHgBgIIAAhQIAgAAIAACLIgfAAIAAgUIgBAAQgFALgMAGQgKAHgLAAQgcAAgMgOg");
	this.shape_1.setTransform(100.2,86.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBHQgLgDgIgGQgIgHgFgJQgFgJAAgMIAfAAQABANAJAGQAJAFALAAIAKAAIAKgDQAFgCAEgEQADgDgBgGQAAgGgEgEQgEgEgGgCIgPgEIgPgDIgRgFQgIgDgGgDQgHgFgDgHQgEgHAAgLQAAgLAFgIQAGgHAIgFQAJgFAKgCQALgCAJAAQAKAAAKADQAKACAIAFQAIAFAFAJQAFAIACALIghAAQgCgLgIgDQgIgEgJAAIgIAAIgIACQgEACgDADQgCACAAAFQAAAGAEADQADAEAHACIANAEIARADIARAFQAIADAGAEQAGAEAEAHQAEAHAAAKQAAANgGAIQgFAJgJAFQgJAGgLACQgMADgKAAQgNAAgLgDg");
	this.shape_2.setTransform(85.175,86.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmAOIAAgcIBNAAIAAAcg");
	this.shape_3.setTransform(72.5,85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbBEQgNgFgJgKQgIgKgFgNQgEgOAAgQQAAgOAEgNQAFgOAJgKQAJgKAMgGQANgGAOAAQARAAANAHQANAHAJALQAIAMAEAPQAEAOgCAPIhmAAQAAAIADAIQACAHAFAGQAEAFAHAEQAHADAJAAQANAAAJgGQAIgFAEgMIAdAAQgCALgGAJQgGAJgIAGQgJAGgKADQgLAEgLAAQgPAAgNgGgAAjgLQAAgIgDgGQgCgHgFgFQgEgFgHgDQgGgDgIAAQgHAAgHACQgGADgFAFQgFAFgCAHQgDAHgBAIIBHAAIAAAAg");
	this.shape_4.setTransform(59.5583,86.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3BgIAAgaIAHABIAIABIAJgBIAGgFIADgGIADgHIAEgMIg1iJIAiAAIAjBmIABAAIAjhmIAgAAIg2CRIgIASQgDAKgFAGQgFAHgHADQgJAEgLABQgLAAgLgCg");
	this.shape_5.setTransform(44.55,88.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfBcQgMgGgJgKQgIgKgEgNQgEgOAAgQQAAgSAFgNQAFgOAJgJQAIgJALgEQALgEALAAIANABIAMAEQAHADAFAEQAFAEAEAGIABAAIAAhHIAeAAIAAC/IgdAAIAAgTIAAAAQgHANgLAFQgMAFgMAAQgRAAgMgGgAgRgTQgHAEgFAHQgEAHgCAJQgCAIgBAKQABAJACAIQACAJAFAHQAFAHAHAEQAIAEAIAAQAKAAAIgFQAHgEAFgHQAFgHACgJQADgJAAgJQAAgXgLgMQgLgNgRAAQgKAAgIAFg");
	this.shape_6.setTransform(28.6,83.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAjBGQgHgEgBgJQgKAIgNAEQgMAFgNAAQgJAAgJgDQgJgDgGgFQgHgFgEgHQgEgIAAgKQAAgNAFgIQAFgIAIgEQAHgFAKgCIATgDIAPgCIANgCQAGgCAEgDQADgEAAgGQAAgGgDgEIgHgGIgJgDIgJAAQgNAAgIAFQgJAGgBALIgfAAQABgOAGgJQAGgJAIgFQAJgFALgCQALgDAMAAQAJAAAKADQAKACAIAFQAIAEAFAIQAFAIAAALIAABHQAAAFABADQACACAEAAIADAAIAFAAIAAAVIgEABIgGABIgFABIgFABQgJAAgGgEgAAHAFIgUADIgJACIgIAFQgEACgCAEQgCAEAAAGQAAAGADADQADAEAEACIAJACIAKABIAKgBQAGgBAFgEQAFgDAEgFQADgFAAgHIAAgXQgHAEgKABg");
	this.shape_7.setTransform(5.375,86.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAeBgIAAhYQAAgPgHgHQgGgIgOAAQgHAAgGADQgGADgFAFQgEAFgCAGQgCAGgBAIIAABSIgeAAIAAi/IAeAAIAABHIABAAQAFgJAMgHQALgGANAAQAXAAANAMQANAMAAAWIAABgg");
	this.shape_8.setTransform(-18.35,83.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AABBZQgGgCgEgEQgEgFgCgHIgCgPIAAhSIgXAAIAAgWIAXAAIAAgrIAeAAIAAArIAcAAIAAAWIgcAAIAABKIAAAJIADAFQABACADACIAIABIAHAAIAGgBIAAAXIgKACIgKABQgMAAgIgDg");
	this.shape_9.setTransform(-31.1,84.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOBgIAAiKIAdAAIAACKgAgOhCIAAgdIAdAAIAAAdg");
	this.shape_10.setTransform(-39.025,83.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaBGIgZhnIgBAAIgZBnIghAAIgriLIAhAAIAcBnIAAAAIAahnIAeAAIAZBnIABAAIAchnIAgAAIgsCLg");
	this.shape_11.setTransform(-53.1,86.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdBEQgNgGgJgJQgJgKgFgNQgEgOAAgQQAAgPAEgOQAFgNAJgKQAJgKANgFQANgGAQAAQARAAANAGQANAFAJAKQAJAKAFANQAEAOAAAPQAAAQgEAOQgFANgJAKQgJAJgNAGQgNAGgRAAQgQAAgNgGgAgRgsQgHAEgFAHQgFAHgCAJQgDAJAAAIQAAAJADAJQACAJAFAHQAFAHAHAEQAIAEAJAAQAKAAAIgEQAHgEAFgHQAFgHACgJQADgJAAgJQAAgIgDgJQgCgJgFgHQgFgHgHgEQgIgEgKAAQgJAAgIAEg");
	this.shape_12.setTransform(-79.775,86.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBdQgRgIgMgOQgMgOgGgRQgHgTAAgVQAAgTAHgTQAGgSAMgOQAMgNARgJQARgIAVAAQAPAAAPAEQAOAFALAIQALAIAHAMQAHANACAQIghAAQgBgJgEgIQgFgHgHgFQgGgEgJgDQgIgCgJgBQgPABgLAGQgLAGgHALQgHAKgDANQgEAOAAAMQAAAOAEANQADAOAHAKQAHAKALAHQALAFAPAAQANABAKgEQAKgEAHgGQAGgIAEgJQADgKABgNIg0AAIAAgYIBTAAIAABlIgWAAIgFgXQgOAPgNAGQgOAGgRAAQgVAAgRgIg");
	this.shape_13.setTransform(-98.575,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_goWith, new cjs.Rectangle(-110.6,64.7,237.89999999999998,36.2), null);


(lib.txt_flourescent_ink = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF0092").s().p("AgWAWIAAgrIAtAAIAAArg");
	this.shape.setTransform(103.975,90.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0092").s().p("AAYBnIgohDIgQAQIAAAzIgpAAIAAjOIApAAIAABvIAzg1IAxAAIg5A2IA/Beg");
	this.shape_1.setTransform(92.85,82.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0092").s().p("AAdBNIAAhTQAAgTgFgKQgHgIgOgBQgQAAgHALQgIAKAAAWIAABOIgqAAIAAiVIAoAAIAAAVIABAAQAHgNANgGQAMgGANAAQAQAAALAEQAKAFAHAIQAGAIACAMQACALABAOIAABbg");
	this.shape_2.setTransform(75.1,84.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0092").s().p("AgTBnIAAiUIAnAAIAACUgAgThFIAAgiIAnAAIAAAig");
	this.shape_3.setTransform(62.95,82.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0092").s().p("AAGBhQgHgBgHgEQgGgEgEgHQgEgHAAgLIAAhYIgZAAIAAgbIAZAAIAAgtIAoAAIAAAtIAeAAIAAAbIgeAAIAABKQAAAKAEADQADAEAKAAIAHAAIAGgBIAAAgIgLABIgNAAg");
	this.shape_4.setTransform(46.225,82.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0092").s().p("AAdBNIAAhTQAAgTgGgKQgFgIgPgBQgQAAgIALQgHAKAAAWIAABOIgpAAIAAiVIAnAAIAAAVIAAAAQAJgNAMgGQALgGANAAQARAAAKAEQALAFAGAIQAGAIADAMQACALAAAOIAABbg");
	this.shape_5.setTransform(32.85,84.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0092").s().p("AgdBJQgOgFgKgLQgKgKgGgPQgFgPAAgRQAAgPAGgPQAFgOAKgMQALgJAOgHQAOgGAQAAQATAAAOAIQAOAHAJANQAKAMAEAPQAEAQgCARIhrAAQABAUAKAJQAJAJAQAAQANAAAJgGQAJgHACgGIAkAAQgJAbgSALQgSAMgZAAQgRAAgOgGgAgPgrQgGACgEAGQgEAFgCAFIgCAKIBCAAQgDgQgHgIQgHgIgPAAQgJAAgHAEg");
	this.shape_6.setTransform(16.1205,85.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0092").s().p("AgcBJQgOgFgKgKQgKgLgGgOQgFgOAAgRQAAgQAFgPQAFgPAKgLQAKgLAOgGQAOgGARAAQAOAAANADQALAEAKAHQAKAHAGALQAGALABAOIgpAAQgDgagbAAQgJAAgGAFQgHAEgEAHQgFAIgBAIIgCAQIACAQQACAJADAGQAEAIAHADQAHAFAIAAQAPAAAIgJQAIgIACgNIAoAAQgEAegUAPQgTAQgeAAQgPAAgOgGg");
	this.shape_7.setTransform(-0.15,85.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0092").s().p("AgYBMQgMgDgKgGQgJgFgHgLQgGgJgBgPIAoAAQAAAGADAFQACAEAFAEQADADAHABIAKABIAJgBIAJgDQAEgCADgEQACgDAAgGQAAgJgMgEQgMgFgVgFIgSgFQgIgDgIgDQgGgFgEgGQgEgHAAgKQAAgPAFgIQAGgKAKgFQAJgFALgDQAMgCAMAAQALAAAMACQAMACAIAGQAJAFAGAKQAGAJABAOIgnAAQgBgMgIgEQgIgEgKAAIgHAAIgIACIgGAEQgCADAAAEQAAAGAEADQAEAEAHACIANAEIASAEIARAFQAJACAGAFQAHAEAEAIQAFAGAAALQgBAPgGAJQgGAKgJAHQgKAGgMACQgNADgMAAQgMAAgNgDg");
	this.shape_8.setTransform(-16.25,85.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0092").s().p("AgdBJQgOgFgKgLQgKgKgGgPQgFgPAAgRQAAgPAGgPQAFgOAKgMQALgJAOgHQAOgGAQAAQATAAAOAIQAOAHAJANQAKAMAEAPQAEAQgCARIhrAAQABAUAKAJQAJAJAQAAQANAAAJgGQAJgHACgGIAkAAQgJAbgSALQgSAMgZAAQgRAAgOgGgAgPgrQgGACgEAGQgEAFgCAFIgCAKIBCAAQgDgQgHgIQgHgIgPAAQgJAAgHAEg");
	this.shape_9.setTransform(-32.1795,85.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0092").s().p("AgvBNIAAiVIAnAAIAAAcIAAAAQAEgHAEgGQAEgGAGgEQAHgFAHgCQAIgCAHAAIAKACIAAAlIgIgBIgIAAQgLABgHADQgJAEgFAHQgDAGgCAIQgCAJAAAJIAABEg");
	this.shape_10.setTransform(-45.2,84.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0092").s().p("AgfBKQgOgGgLgKQgKgLgFgPQgFgOAAgSQAAgQAFgPQAFgPAKgLQALgKAOgGQAPgFAQAAQARAAAPAFQAPAGAKAKQAKALAFAPQAFAPAAAQQAAASgFAOQgFAPgKALQgKAKgPAGQgPAFgRAAQgQAAgPgFgAgQgrQgHAFgFAGQgEAHgBAJQgCAIAAAIIACASQABAIAEAHQAFAHAHAEQAGAEAKAAQALAAAGgEQAHgEAFgHQAEgHABgIQACgJABgJQgBgIgCgIQgBgJgEgHQgFgGgHgFQgGgEgLAAQgKAAgGAEg");
	this.shape_11.setTransform(-60.3,85.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0092").s().p("AgqBJQgKgFgHgIQgFgIgDgMQgCgLgBgOIAAhbIAqAAIAABUQAAASAFAKQAGAIAQABQAPgBAHgJQAIgKAAgXIAAhOIAqAAIAACVIgoAAIAAgVIgBAAQgHANgNAGQgLAGgOAAQgQAAgLgEg");
	this.shape_12.setTransform(-77.55,85.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0092").s().p("AgTBnIAAjOIAnAAIAADOg");
	this.shape_13.setTransform(-89.7,82.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0092").s().p("AhIBnIAAjOICRAAIAAAnIhjAAIAAAvIBVAAIAAAjIhVAAIAABVg");
	this.shape_14.setTransform(-101.175,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_flourescent_ink, new cjs.Rectangle(-112.4,62.4,230.4,38.6), null);


(lib.txt_ExpandCP = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgYBvQgMgCgKgGQgLgGgGgKQgHgJgBgOIAjAAQABAHAFAFQADAFAFACQAFADAGABIAMAAQAVAAALgKQAKgLAAgUIAAgYIgBAAQgIANgMAIQgNAHgOAAQgTAAgOgGQgNgHgJgMQgJgLgEgOQgDgPAAgSQgBgQAFgOQAFgPAKgLQAIgLAOgGQANgHASAAQAOAAANAHQAMAGAHAOIABAAIAAgWIAjAAIAACWQgBAkgTASQgVASglAAQgMAAgMgDgAgThQQgJAFgEAIQgFAIgCAKQgCAKAAAKQAAAKACAJQADAJAFAHQAFAHAHAFQAIAFALAAQAMAAAHgFQAJgFAFgIQAFgHACgKQACgKABgKQgBgKgCgKQgDgJgEgIQgGgHgIgEQgIgFgLAAQgMAAgHAFg");
	this.shape.setTransform(111.4,126.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAjBSIAAhkQAAgSgIgJQgHgIgRAAQgHAAgIADQgHAEgFAFQgEAGgDAHQgDAIAAAJIAABdIgjAAIAAieIAiAAIAAAXIAAAAQAIgMANgIQANgIAOAAQAbAAAPAOQAPANAAAbIAABtg");
	this.shape_1.setTransform(93.8,123.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQBuIAAieIAiAAIAACegAgQhMIAAghIAiAAIAAAhg");
	this.shape_2.setTransform(81.4,120.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACBmQgIgDgFgFQgFgFgBgIIgCgRIAAhdIgbAAIAAgaIAbAAIAAgxIAiAAIAAAxIAgAAIAAAaIggAAIAABUIAAAJIADAHQABADAEABIAJACIAHgBIAIgBIAAAbIgMACIgLABQgOAAgIgDg");
	this.shape_3.setTransform(72.525,121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAjBSIAAhkQgBgSgHgJQgIgIgPAAQgIAAgIADQgHAEgEAFQgFAGgDAHQgDAIAAAJIAABdIgjAAIAAieIAhAAIAAAXIABAAQAIgMANgIQANgIAPAAQAaAAAPAOQAPANAAAbIAABtg");
	this.shape_4.setTransform(58.85,123.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQBuIAAieIAiAAIAACegAgQhMIAAghIAiAAIAAAhg");
	this.shape_5.setTransform(46.45,120.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AguBSIAAieIAhAAIAAAeIABAAQABgGAFgGQAEgGAGgGQAGgFAIgDQAHgDAIAAIAJAAIAFABIAAAiIgIgBIgHAAQgJAAgIADQgIAEgGAGQgFAIgDAJQgEALAAAMIAABMg");
	this.shape_6.setTransform(38.625,123.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhOBvIAAjZIAhAAIAAAWIABAAQAHgOANgHQAOgFAOAAQATAAAOAGQAOAHAKALQAIAMAFAPQAFAQAAARQAAAQgEAPQgFAPgIAMQgIALgOAHQgMAHgSAAIgPgCIgOgEQgHgDgHgFQgFgEgEgHIgBAAIAABPgAghhDQgLAQAAAZQAAAMADAKQADAJAFAIQAHAIAIAEQAHAEALAAQAMAAAIgFQAIgFAGgIQAFgHACgKQADgJAAgLQAAgLgDgKQgDgLgGgHQgFgIgIgFQgIgEgLAAQgWAAgLAPg");
	this.shape_7.setTransform(23.25,126.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsARIAAghIBZAAIAAAhg");
	this.shape_8.setTransform(7.6,122.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABQBSIAAhcIAAgSQgBgHgDgGQgDgGgFgDQgGgDgKAAQgSAAgIALQgIALAAAUIAABdIgjAAIAAhmQAAgQgGgJQgGgIgQAAQgGAAgHADQgGADgFAFQgFAFgDAIQgDAHAAAKIAABeIgjAAIAAieIAiAAIAAAVIAAAAIAJgKQAFgFAFgDQAGgEAIgCQAHgCAKAAQAOAAANAHQALAGAFANQAJgLAMgHQAMgIARAAQAaAAAOANQAOAMAAAdIAABtg");
	this.shape_9.setTransform(-11.675,123.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghBOQgPgHgLgLQgKgLgFgPQgGgQABgSQgBgRAGgQQAFgPAKgLQALgMAPgGQAPgGASAAQAUAAAOAGQAPAGAKAMQALALAFAPQAFAQABARQgBASgFAQQgFAPgLALQgKALgPAHQgOAGgUAAQgSAAgPgGgAgTgyQgJAEgFAIQgGAIgCAKQgDALAAAJQAAAKADAKQACAKAGAIQAFAIAJAFQAJAFAKAAQAMAAAJgFQAIgFAGgIQAFgIADgKQADgKAAgKQAAgJgDgLQgDgKgFgIQgGgIgIgEQgJgFgMAAQgKAAgJAFg");
	this.shape_10.setTransform(-34.1,123.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACBmQgIgDgFgFQgFgFgBgIIgCgRIAAhdIgbAAIAAgaIAbAAIAAgxIAiAAIAAAxIAgAAIAAAaIggAAIAABUIAAAJIADAHQABADAEABIAJACIAHgBIAIgBIAAAbIgMACIgLABQgOAAgIgDg");
	this.shape_11.setTransform(-48.425,121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcBRQgMgEgKgHQgJgHgGgKQgFgKAAgOIAjAAQACAPAKAGQAKAGANAAIAMgBIALgCQAGgDADgEQAEgEAAgHQgBgGgFgFQgEgEgHgDIgQgEIgSgEIgTgFQgJgEgIgEQgHgFgEgIQgFgIAAgMQAAgNAHgJQAGgJAKgFQAJgGAMgCQAMgCALAAQALAAALADQAMACAJAGQAJAGAGAJQAGAKACANIglAAQgCgNgKgEQgJgEgLAAIgJAAIgJADQgEABgEAEQgDADAAAFQABAGAEAFQAEAEAIACIAPAFIAUAEIASAFQAJADAIAFQAHAEAEAJQAFAIAAALQAAAOgGAKQgHAKgKAGQgLAHgNACQgMADgMAAQgPAAgNgDg");
	this.shape_12.setTransform(-61.1,123.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag3BCQgOgQAAgfIAAhkIAjAAIAABgQAAAWAIAIQAJAJAOAAQAKAAAHgDQAIgEAEgFQAFgGACgIQACgIAAgKIAAhbIAjAAIAACfIgjAAIAAgXIAAAAQgHAMgNAIQgMAHgNAAQgfAAgOgQg");
	this.shape_13.setTransform(-77.95,123.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeBOQgPgHgJgLQgKgLgFgPQgFgPAAgRQAAgRAEgQQAFgQAKgLQAKgMAPgGQAPgHASAAQAOAAANADQAMAEAKAHQAKAHAGALQAGALABAPIgjAAQgCgPgKgIQgKgHgOAAQgGAAgIACQgIACgGAHQgHAGgEALQgEALAAASQAAAJACAKQACAKAGAIQAEAIAJAFQAIAEAKAAQAPAAALgJQAJgKADgRIAjAAQgFAfgTARQgSAQgfAAQgSAAgOgGg");
	this.shape_14.setTransform(-95.125,123.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag6BnIAAjIIAqAAIAAAnIAAAAQACgIAGgIQAGgIAHgGQAIgHAJgDQAKgEAKAAIALAAIAGABIAAArIgKgCIgJAAQgLAAgKAEQgKAFgIAIQgGAJgEANQgFANAAAPIAABgg");
	this.shape_15.setTransform(114.775,88.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhGBUQgRgUAAgoIAAh+IAsAAIAAB6QAAAaAKALQAKALASAAQAOAAAJgEQAJgEAGgIQAGgHACgKQADgKAAgMIAAhzIAsAAIAADIIgrAAIAAgcIgBAAQgIAPgQAJQgRAJgPAAQgoAAgSgTg");
	this.shape_16.setTransform(96.475,89.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgqBiQgSgIgOgOQgNgOgGgUQgIgTABgXQgBgWAIgUQAGgTANgOQAOgOASgIQATgIAXAAQAYAAATAIQATAIANAOQANAOAHATQAHAUgBAWQABAXgHATQgHAUgNAOQgNAOgTAIQgTAIgYAAQgXAAgTgIgAgZhAQgKAGgIALQgGAJgEANQgDANAAAMQAAANADAMQAEANAGALQAIAKAKAGQALAGAOAAQAPAAALgGQAKgGAHgKQAHgLAEgNQADgMAAgNQAAgMgDgNQgEgNgHgJQgHgLgKgGQgLgGgPAAQgOAAgLAGg");
	this.shape_17.setTransform(74.85,89);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhQCKIAAgmIALACIAKABQAIAAAFgCQAFgBAEgFIAFgIIAFgMIAFgQIhNjHIAxAAIA0CWIAAAAIAziWIAvAAIhPDUIgKAaQgGAMgGAJQgIAKgLAGQgLAFgSAAQgPAAgQgCg");
	this.shape_18.setTransform(54.175,93);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3283").s().p("AgzCFQgRgJgLgPQgLgPgGgTQgFgUAAgVQAAgUAFgSQAGgTALgPQALgOARgIQARgJAWAAQARAAAQAHQAQAIAJAPIABAAIAAhlIA3AAIAAEVIg0AAIAAgaIgBAAQgKAQgPAHQgQAIgTgBQgXAAgRgIgAgUgWQgKAGgFAIQgGAIgCAMQgDALAAANQAAAMADALQACAMAGAJQAGAJAKAGQAJAFAMABQANAAAJgGQAJgFAGgKQAFgJADgMQACgLAAgNQAAgMgCgLQgDgMgFgIQgGgIgJgGQgJgFgNgBQgNABgJAFg");
	this.shape_19.setTransform(20.975,85.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3283").s().p("AAnBnIAAhwQAAgZgIgNQgHgMgUAAQgWAAgKAOQgKANAAAfIAABoIg3AAIAAjIIA0AAIAAAcIABAAQALgRARgIQAPgIASAAQAWAAAOAGQAPAGAIAKQAIALADAQQADAPAAATIAAB6g");
	this.shape_20.setTransform(-1.575,88.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3283").s().p("Ag4BmQgMgDgJgIQgJgHgGgLQgFgMAAgPQAAgRAGgLQAGgLAKgHQAJgGAMgDIAZgFIAZgDIAUgEQAJgCAGgFQAFgEAAgJQAAgJgDgFQgDgFgFgDQgFgDgGgBIgOgBQgPAAgKAHQgJAHgCAQIg3AAQABgTAJgNQAIgNAOgIQANgHAQgEQARgDAQAAIAeACQAQACANAHQAMAGAJALQAIALAAASIAABoIACAaQABAMAEAHIg4AAIgCgKIgCgKQgNAOgSAFQgRAGgTAAQgOAAgNgEgAAbAHIgLADIgNACIgMACIgMADIgLAFQgEAEgDAFQgDAFAAAIQAAAHADAFQADAFAFADIAKAEIANABQAQAAAIgFQAJgGAFgHQAEgIABgIIABgMIAAgVg");
	this.shape_21.setTransform(-23.95,88.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3283").s().p("AhlCLIAAkPIA0AAIAAAaIABAAQAKgRAQgHQAPgIASAAQAYAAARAJQARAKALAOQALAPAGAUQAFATAAAVQAAAVgFARQgGATgLAOQgLAPgQAJQgRAIgWAAQgSAAgPgHQgQgIgKgPIgBAAIAABggAgXhbQgJAHgGAIQgFAJgDAMQgCAMAAAMQAAAMADAMQACALAGAIQAFAJAKAFQAJAGANAAQANAAAJgGQAJgFAGgJQAFgIADgLQACgMAAgMQAAgMgCgMQgDgMgGgJQgGgJgJgGQgJgFgMAAQgOAAgJAFg");
	this.shape_22.setTransform(-46.025,92.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A3283").s().p("AAqBlIgqhAIgqBAIg+AAIBJhpIhChgIA/AAIAiA1IAjg1IA+AAIhDBfIBLBqg");
	this.shape_23.setTransform(-68.35,89);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A3283").s().p("AhoCLIAAkVIDOAAIAAA0IiRAAIAAA7ICFAAIAAAvIiFAAIAABDICUAAIAAA0g");
	this.shape_24.setTransform(-90.325,85.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ExpandCP, new cjs.Rectangle(-106.4,58.4,230,82.29999999999998), null);


(lib.txt_DyeSub = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgWBHQgMgCgJgGQgIgGgGgJQgGgJgBgOIAlAAQAAAGACAFQADAEAEADQAEADAFABIAKABIAJgBIAIgDIAGgFQADgDgBgGQAAgIgLgEQgMgFgTgEIgRgFQgIgCgFgDQgHgFgDgGQgFgHAAgIQAAgOAGgJQAFgIAIgFQAJgGALgCQALgBALAAQALgBALADQAKACAJAFQAIAFAFAJQAGAIABANIgkAAQgBgLgIgEQgHgEgKABIgHAAIgHACIgFADQgCADAAAEQAAAGADACQAFAEAFACIAOAEIAPADIAQAFQAJADAGAEQAGADAEAHQAEAHgBAJQABAOgGAJQgFAJgKAGQgJAGgKACQgMADgMgBQgLABgMgDg");
	this.shape.setTransform(119.4,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgsBIIAAiLIAlAAIAAAaIAAAAQADgGAEgGQAEgFAGgEQAGgEAGgCQAHgDAIAAIAIACIAAAjIgHgBIgHAAQgKAAgIADQgHAEgEAGQgEAGgCAIQgBAIgBAJIAAA/g");
	this.shape_1.setTransform(106.85,51.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgbBFQgOgGgJgJQgJgLgFgNQgFgOAAgQQAAgOAFgOQAFgOAKgJQAJgKANgGQANgFAPAAQASgBANAIQAOAGAIAMQAJALADAQQAEAPgBAOIhkAAQABATAJAIQAIAJAQAAQALAAAJgGQAIgGACgGIAiAAQgIAZgRALQgRALgYgBQgPAAgNgEgAgOgpQgGAEgEAEQgDAFgCAFIgCAJIA+AAQgDgOgHgIQgHgHgOgBQgIAAgGADg");
	this.shape_2.setTransform(92.46,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AAGBaQgHgBgGgEQgGgDgEgHQgDgGAAgLIAAhRIgYAAIAAgaIAYAAIAAgpIAlAAIAAApIAcAAIAAAaIgcAAIAABEQAAAKADADQADAEAKAAIAGgBIAGgBIAAAeIgLABIgLABg");
	this.shape_3.setTransform(79.075,49.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAbBIIAAhOQAAgRgFgJQgFgIgOAAQgPAAgHAJQgHAJAAAWIAABIIgnAAIAAiLIAlAAIAAAUIABAAQAHgNAMgFQAKgGAMAAQAQAAAKAFQAKAEAGAHQAFAIACAKQACALABANIAABVg");
	this.shape_4.setTransform(65.7,51.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgSBgIAAiKIAlAAIAACKgAgShAIAAgfIAlAAIAAAfg");
	this.shape_5.setTransform(53.475,49.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgsBIIAAiLIAkAAIAAAaIABAAQADgGAEgGQAEgFAGgEQAGgEAHgCQAHgDAGAAIAJACIAAAjIgHgBIgHAAQgLAAgGADQgIAEgFAGQgDAGgBAIQgCAIgBAJIAAA/g");
	this.shape_6.setTransform(44.7,51.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AhMBgIAAi/IBWAAQASAAANAFQAMAFAJAJQAHAIAEALQAEALAAAMQAAAMgEALQgEALgHAIQgJAJgMAFQgNAFgSAAIgrAAIAABFgAghgFIAhAAIAMgBQAHgBAGgDQAEgDADgGQAEgGAAgJQAAgJgEgGQgDgFgEgDQgGgDgHgBIgMgCIghAAg");
	this.shape_7.setTransform(29.55,49.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgOBdQgNgFgFgMIgBAAIAAASIgkAAIAAi/IAmAAIAABGIABAAQAGgLAMgFQAMgFANAAQAKAAAKAFQALAEAHAIQAJAKAFAOQAGANgBASQABAUgGANQgFAOgJAKQgHAIgLAEQgKAFgKAAQgPAAgMgFgAgOgPQgHAEgDAFQgFAGgBAIQgCAIAAAJQAAAJACAHQABAJAFAGQADAGAHAEQAGADAIAAQAIAAAGgDQAGgEAEgGQAEgGACgJQACgHAAgJQAAgJgCgIQgCgIgEgGQgEgFgGgEQgGgEgIAAQgIAAgGAEg");
	this.shape_8.setTransform(3.05,49.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgnBEQgJgFgGgHQgGgIgCgKQgDgLAAgNIAAhVIAnAAIAABOQAAASAFAIQAGAJANAAQAPgBAHgIQAHgKAAgWIAAhIIAmAAIAACLIgkAAIAAgTIgBAAQgHALgLAGQgLAFgNAAQgPAAgKgDg");
	this.shape_9.setTransform(-14.2,51.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgdBhQgPgEgMgIQgLgJgHgMQgHgOABgSIApAAQAAAKADAHQAEAHAGAEQAFAEAIACQAIACAHAAIANgBQAGgBAGgCQAFgDAEgFQAEgFAAgHQAAgIgFgEQgFgFgIgEIgTgGIgTgEIgVgIQgLgEgIgFQgIgGgFgJQgFgJAAgNQAAgPAGgLQAHgLAKgHQAKgIANgDQANgEANAAQAOAAAOAEQAOADALAIQALAHAGAMQAHALAAARIgpAAQgBgIgDgGQgDgGgFgDQgFgDgHgCIgOgBIgKABQgFABgEADQgEACgDAEQgDAFAAAGQAAAGACADQADADAGADIASAHIAcAHIAPAEQAJADAKAGQAJAFAHALQAHAKAAARQAAAMgFAMQgFALgKAJQgKAHgPAFQgQAFgTAAQgPAAgPgEg");
	this.shape_10.setTransform(-31.6767,49.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgnARIAAghIBQAAIAAAhg");
	this.shape_11.setTransform(-46.65,51.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgbBFQgOgGgJgJQgJgLgFgNQgFgOAAgQQAAgOAFgOQAFgOAKgJQAJgKANgGQANgFAPAAQASgBANAIQAOAGAIAMQAJALADAQQAEAPgBAOIhkAAQABATAJAIQAIAJAQAAQALAAAJgGQAIgGACgGIAiAAQgIAZgRALQgRALgYgBQgPAAgNgEgAgOgpQgGAEgEAEQgDAFgCAFIgCAJIA+AAQgDgOgHgIQgHgHgOgBQgIAAgGADg");
	this.shape_12.setTransform(-60.59,51.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgtBeIgMgBIAAggIALABIALABQAIgBADgFQAEgGAAgGQAAgEgCgEIgxiCIAqAAIAeBeIAAAAIAfheIAoAAIg7CcQgFARgLAHQgLAHgUAAg");
	this.shape_13.setTransform(-76.1,54.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AhUBgIAAi/IBTAAQASAAAQAFQAPAGANAMQALAMAHASQAGASABAYQAAAUgGASQgGASgLAMQgLANgQAIQgQAHgVAAgAgqA9IAmAAQAIAAAJgDQAIgDAHgHQAHgHAEgLQAEgLAAgQQAAgOgDgLQgDgMgGgJQgHgIgKgEQgLgFgPAAIgeAAg");
	this.shape_14.setTransform(-93.45,49.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_DyeSub, new cjs.Rectangle(-105.8,30.4,235.39999999999998,36.199999999999996), null);


(lib.txt_capabilites = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AghAhIAAhBIBDAAIAABBg");
	this.shape.setTransform(121.1,125.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgkBxQgSgEgOgJQgPgJgJgPQgKgPAAgWIA6AAQAAAKAEAHQAEAHAHAFQAGAEAJACIAQACIANgBIAOgFQAFgDAEgGQAEgFAAgIQAAgOgSgHQgTgGgggHIgagIQgMgEgKgFQgKgHgGgKQgGgKAAgPQAAgVAIgOQAJgOAOgIQAOgIAQgDQASgDASAAQARAAARADQARAEANAIQANAIAJAOQAJANACAVIg6AAQgCgSgMgGQgMgGgPAAIgLAAIgLADIgIAGQgEAFAAAGQAAAJAGAFQAGAFAKADIAVAGIAZAGIAbAHQAMAEAKAHQAKAGAGALQAGAKAAAQQAAAWgJAPQgJAPgOAJQgOAJgSADQgTAEgSAAQgTAAgTgEg");
	this.shape_1.setTransform(104.3,117.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgsBtQgVgJgOgPQgPgQgIgVQgIgWAAgaQAAgYAIgVQAJgWAPgPQAPgQAVgJQAUgJAZAAQAcAAAVALQAVALAOASQANATAGAYQAGAXgBAZIigAAQABAeAOANQAOANAZAAQASAAAOgJQANgJADgLIA2AAQgNAogbASQgaARgmAAQgaAAgVgIgAgWhBQgKAFgGAHQgGAHgCAJIgDAOIBjAAQgFgXgLgMQgLgMgWAAQgOAAgJAFg");
	this.shape_2.setTransform(81.09,117.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgeCZIAAjdIA9AAIAADdgAgehmIAAgzIA9AAIAAAzg");
	this.shape_3.setTransform(63.9,113.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAICPQgLgBgJgGQgKgGgGgKQgGgKABgRIAAiCIglAAIAAgpIAlAAIAAhDIA7AAIAABDIAtAAIAAApIgtAAIAABtQAAAPAGAGQAFAFAPAAIAKgBIAJAAIAAAuIgRACIgTAAg");
	this.shape_4.setTransform(51.3,114.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgdCZIAAjdIA8AAIAADdgAgdhmIAAgzIA8AAIAAAzg");
	this.shape_5.setTransform(39.05,113.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgeCZIAAkyIA8AAIAAEyg");
	this.shape_6.setTransform(28.65,113.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgdCZIAAjdIA8AAIAADdgAgdhmIAAgzIA8AAIAAAzg");
	this.shape_7.setTransform(18.25,113.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgXCVQgTgIgKgTIgBAAIAAAdIg6AAIAAkyIA8AAIAABvIABAAQAMgRATgIQATgHAUAAQAQAAARAGQAQAHANAOQAOAPAHAWQAJAVAAAeQAAAfgJAWQgHAWgOAOQgNAPgQAGQgRAHgQAAQgYAAgTgHgAgYgZQgKAGgGAKQgHAJgDANQgCANAAAOQAAAOACANQADAMAHAKQAGAKAKAGQAKAGAOAAQANAAAJgGQAKgGAGgKQAHgKADgMQACgNAAgOQAAgOgCgNQgDgNgHgJQgGgKgKgGQgJgFgNAAQgOAAgKAFg");
	this.shape_8.setTransform(0.65,113.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("Ag9BxQgOgEgLgIQgKgIgGgNQgFgMAAgRQAAgTAGgNQAHgMAKgHQALgGANgEIAcgGIAbgDIAXgEQAKgDAGgFQAGgFgBgJQAAgKgDgGQgDgGgFgDQgGgDgHgBIgPgBQgRAAgLAIQgKAHgCASIg9AAQACgVAJgOQAJgPAPgIQAPgJASgDQASgEASAAIAiACQARADAOAHQAOAGAJANQAKAMAAAUIAABzIABAdQACANAEAHIg+AAIgCgKIgCgLQgPAPgTAGQgTAGgVAAQgQAAgNgEgAAeAIIgNADIgOACIgNACIgOAEIgLAGQgFADgDAGQgEAFAAAJQAAAIAEAGQADAFAFAEIAMAEIAOABQARAAAKgGQAKgGAEgIQAFgIABgJIABgOIAAgXg");
	this.shape_9.setTransform(-24.675,117.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AhwCZIAAksIA6AAIAAAdIABAAQAKgSASgIQARgIAUAAQAaAAATAJQATALANAQQAMAQAGAWQAGAWAAAXQAAAXgGATQgGAVgMAQQgMAQgTAJQgSAJgZAAQgUAAgRgIQgRgIgMgQIAAAAIAABpgAgZhkQgLAGgGAKQgGAKgDANQgCAMAAAOQAAAOACANQAEALAFALQAHAJAKAGQAKAGAPAAQAOAAAKgGQAKgGAGgJQAHgLACgLQADgNAAgOQAAgNgDgMQgDgNgGgLQgHgKgKgGQgKgGgNAAQgQAAgJAGg");
	this.shape_10.setTransform(-48.85,120.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("Ag9BxQgOgEgLgIQgKgIgGgNQgFgMAAgRQAAgTAGgNQAHgMAKgHQALgGANgEIAcgGIAbgDIAXgEQAKgDAGgFQAGgFgBgJQAAgKgDgGQgDgGgFgDQgGgDgHgBIgPgBQgRAAgLAIQgKAHgCASIg9AAQACgVAJgOQAJgPAPgIQAPgJASgDQASgEASAAIAiACQARADAOAHQAOAGAJANQAKAMAAAUIAABzIABAdQACANAEAHIg+AAIgCgKIgCgLQgPAPgTAGQgTAGgVAAQgQAAgNgEgAAeAIIgNADIgOACIgNACIgOAEIgLAGQgFADgDAGQgEAFAAAJQAAAIAEAGQADAFAFAEIAMAEIAOABQARAAAKgGQAKgGAEgIQAFgIABgJIABgOIAAgXg");
	this.shape_11.setTransform(-74.275,117.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgqBtQgVgJgPgPQgOgPgJgVQgHgVAAgZQgBgYAIgXQAHgWAPgQQAOgQAWgJQAUgJAbAAQAUAAASAFQASAFAOALQAPAKAJAQQAJAQACAVIg9AAQgFgmgoAAQgNAAgKAHQgKAGgGALQgGAKgDANQgDANAAALQAAAMADANQACAMAHAKQAFAKAKAHQAKAGANAAQAWAAAMgMQAMgMADgVIA7AAQgHAsgcAYQgcAXgtAAQgYAAgUgIg");
	this.shape_12.setTransform(-97.9,117.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_capabilites, new cjs.Rectangle(-112.5,84.5,241.2,55.30000000000001), null);


(lib.txt_best = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("AgoAvQAHgBAIgFIAMgLIAIgQQADgIAAgIIgnAAIAAhSIBTAAIAABSQAAASgHAPQgHAPgLALQgLAMgOAHQgQAIgQACg");
	this.shape.setTransform(92.925,116.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AB8DBQgdgJgYgQQgWgQgOgaQgOgZABgkIBSAAQAAATAHANQAGAOANAJQALAIAQAEQAPADAQAAIAYgBQANgCAMgGQALgFAIgJQAHgJAAgPQAAgQgKgKQgKgIgPgIIh5giQgUgJgQgLQgQgMgKgSQgKgTAAgaQAAgeANgWQAMgVAVgPQAUgOAagHQAZgHAaAAQAfgBAbAIQAcAGAVAPQAWAPANAXQAMAYAAAhIhSAAQgBgRgGgLQgGgMgKgFQgKgIgOgCIgcgDIgVACQgKACgIAGQgJAFgFAJQgGAHAAAMQAAAMAFAHQAEAHANAGIB7AiQATAGATAMQASAMAOAUQAOAVAAAgQgBAagJAXQgLAXgUAQQgUAQgeAKQgdAIgoABQgfgBgegHgAHjDAIAAk3IhzAAIAAhHIE6AAIAABHIhzAAIAAE3gAkvDAIAAl+IEeAAIAABHIjKAAIAABRIC6AAIAABBIi6AAIAABeIDOAAIAABHgAqpDAIAAl+IC1AAQAbAAAWAFQAXAEAQAMQAQALAJASQAJASAAAbQAAAdgNATQgNATgaAMQAjALARAZQASAZAAAjQAAAegMAVQgLAVgSAOQgUANgYAGQgYAHgbAAgApVB+IBaAAIAYgCQAMgDAIgFQAJgGAEgJQAGgKgBgPQAAgegQgMQgRgMgbAAIhcAAgApVgjIBWAAQAWAAAPgLQAOgLAAgYQAAgOgEgHQgGgJgIgFQgHgFgLgCIhlgCg");
	this.shape_1.setTransform(22.5,97.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_best, new cjs.Rectangle(-68.6,-30.6,165.7,156.1), null);


(lib.socks_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ajha4QhHgEhxgzQh5g3hehNQhthagkhbQgrhrBDhfQB3ioF+lSIFmkwIBTAHQBmAMBbAWQElBJBRCcQBRCdh6FCQg+ChhNCCQieBYi0BWQlZCnh2AAIgIgBg");
	mask.setTransform(79.653,172.0618);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-127.25,-22.4,0.9036,0.9036);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.socks_mc, new cjs.Rectangle(1,206.1,158.3,137.50000000000003), null);


(lib.sixtyFour_in = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _4_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAoIAAhOIAbAAIAABOgAgjAoIAAhOIAaAAIAABOg");
	this.shape.setTransform(58.9,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIBWIAAgoIhHAAIAAggIBJhjIAgAAIAABnIAWAAIAAAcIgWAAIAAAogAgkASIAsAAIAAg7IAAAAg");
	this.shape_1.setTransform(45.675,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBSQgNgIgIgNQgHgMgDgQQgDgQAAgQQAAgPAEgQQADgQAIgNQAJgNAMgIQANgIARAAQALAAAKADQAKADAHAGQAHAGAFAJQAFAJABALIghAAQgCgIgGgHQgGgGgJAAQgIAAgHAGQgGAFgEAIQgDAIgCAJIgCAQIABABQAHgKAJgFQAKgEALAAQALAAALAFQALAEAHAIQAHAIADAJQADALAAAKQAAANgEALQgEAMgIAIQgIAJgLAFQgLAEgOAAQgSAAgNgHgAgJAAQgFACgEAFQgDAEgCAGQgCAGAAAGQAAAGACAGQACAFAEAFQADAFAFACQAFADAGAAQAGAAAFgDQAFgCADgFQAEgEACgGIABgLQAAgHgBgFQgCgGgDgFQgDgEgFgDQgFgCgHAAQgGAAgFACg");
	this.shape_2.setTransform(31.325,37.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AlZCaIAAkyIKzAAIAAEyg");
	this.shape_3.setTransform(45.775,37.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sixtyFour_in, new cjs.Rectangle(11.2,18.7,69.2,35.400000000000006), null);


(lib.shirt_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AuNdZIAsxMQAqxMgGAAID6AAICqjSIHzBQIF8CWIBEBnQBRCABEB5QDZGGAGC7IgTAyQgYA8gZAyQhTCghFAAIjIgyIgGBqQgFCCAFB/QASGVB2DVg");
	mask.setTransform(-54.975,188.05);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-128.95,-12.3,0.95,0.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_mc, new cjs.Rectangle(-128.9,135.1,165,237.4), null);


(lib.redCup_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AjzH/Qg3gOg9g5Qg6g3gvhNQhsizAdiJIAhiaQAZheApg/QBwitEXgaQByAZB/AtQD8BaA4BkQBDB3gRCyQgRCxhTBLQhYBRjyBSQi9BBhsAAQgjAAgbgIg");
	mask.setTransform(44.3651,-45.0953);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-226.05,-248.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redCup_mc, new cjs.Rectangle(-10.6,-96.9,102.6,103.7), null);


(lib.purple_Printer_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.purplePrinter();
	this.instance.setTransform(-336.6,-30.8,0.9948,0.9949);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purple_Printer_mc, new cjs.Rectangle(-336.6,-30.8,456.70000000000005,277.6), null);


(lib.printer_03 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgpDARpQgsmRB6jEQA5heCihDQA4gYD7hNQC+g6BRg4QBzhPgHh6QgMjeABlrQAAlVgBgOQgFhDBIg0QAWgQAcgNIAXgKIADkEQAAgUAKgWQAUgqA0gDMArdAAAIDTALQA/AGAZANQAOAJAOAPQAcAeAAAhIAEDDIAPgMQAQgJAIAQQALAWAIAKQAKANATAMQAVAOAeAsQAfAvAAAZIAEEmIKOMoIBoTFMhRPACjQguihgWjIg");
	mask.setTransform(-24.2099,-8.45);

	// Layer_3
	this.instance = new lib.purplePrinter();
	this.instance.setTransform(-242.35,-158.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_03, new cjs.Rectangle(-242.3,-157.5,459,277.6), null);


(lib.printer_02_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.yellow_print();
	this.instance.setTransform(-65.3,-46.85,1.1705,1.1705);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.printer();
	this.instance_1.setTransform(-132.5,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_02_mc, new cjs.Rectangle(-132.5,-70.5,318,149), null);


(lib.printer_01_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pinkPrint();
	this.instance.setTransform(-82.95,81.05,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.printer();
	this.instance_1.setTransform(-162,51.8,1.0528,1.0528);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_01_mc, new cjs.Rectangle(-162,51.8,334.8,156.89999999999998), null);


(lib.mouseMat_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("As4D4IDQtJQFrAoFpAqQLUBUgHAHIhoP2g");
	mask.setTransform(18.3865,50.3053);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-213.6,-45.9,1.0418,1.0418);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouseMat_mc, new cjs.Rectangle(-64.1,-9.1,165,118.8), null);


(lib.learnMore_CTA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIA6AAIAAAOIgoAAIAAARIAlAAIAAAMIglAAIAAAUIApAAIAAAOg");
	this.shape.setTransform(34.225,-0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAnIgCgJIgBgKQgBgGgDgDQgDgCgGAAIgQAAIAAAeIgSAAIAAhNIAqAAQAFAAAEABIAHAFIAFAHQACAEAAAEQAAAHgDAFQgDAFgHACIAGADIADAEIACAGIABAGIAAAEIAAAFIABAFIACAEgAgPgDIASAAQAFAAADgCQADgDAAgGQAAgGgDgCQgDgDgFAAIgSAAg");
	this.shape_1.setTransform(26.625,-0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgIQgDgHAAgJQAAgHADgIQADgIAFgFQAFgGAHgDQAHgDAIAAQAJAAAHADQAHADAFAGQAFAFADAIQADAIAAAHQAAAJgDAHQgDAIgFAFQgFAGgHADQgHADgJAAQgIAAgHgDgAgJgXQgEACgCAEQgDADgBAFIgBAJIABAKQABAFADADQACAEAEACQAEADAFAAQAGAAAEgDQAEgCADgEQACgDABgFIABgKIgBgJQgBgFgCgDQgDgEgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_2.setTransform(18.125,-0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaAnIAAg2IgTA2IgNAAIgTg2IAAAAIAAA2IgQAAIAAhNIAYAAIASA1IARg1IAYAAIAABNg");
	this.shape_3.setTransform(8.775,-0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAnIgggzIAAAAIAAAzIgQAAIAAhNIARAAIAgAzIAAgzIAQAAIAABNg");
	this.shape_4.setTransform(-3.525,-0.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAnIgCgJIgBgKQgBgGgDgDQgDgCgGAAIgQAAIAAAeIgSAAIAAhNIAqAAQAFAAAEABIAHAFIAFAHQACAEAAAEQAAAHgDAFQgDAFgHACIAGADIADAEIACAGIABAGIAAAEIAAAFIABAFIACAEgAgPgDIASAAQAFAAADgCQADgDAAgGQAAgGgDgCQgDgDgFAAIgSAAg");
	this.shape_5.setTransform(-11.475,-0.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUAnIgFgRIgdAAIgGARIgRAAIAdhNIARAAIAdBNgAgJAJIATAAIgKgcIAAAAg");
	this.shape_6.setTransform(-19.425,-0.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAnIAAhNIA6AAIAAAOIgoAAIAAARIAlAAIAAAMIglAAIAAAUIApAAIAAAOg");
	this.shape_7.setTransform(-26.675,-0.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAnIAAhNIASAAIAAA/IAlAAIAAAOg");
	this.shape_8.setTransform(-33.475,-0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0044F0").s().p("AmTCUQg8AAAAg9IAAitQAAg9A8AAIMnAAQA8AAAAA9IAACtQAAA9g8AAg");
	this.shape_9.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.learnMore_CTA, new cjs.Rectangle(-46.3,-14.7,92.69999999999999,29.5), null);


(lib.epson_Logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2A3283").s().p("ABUBPQgQgGgJgMQgLgLgFgQQgGgPAAgRQAAgTAGgPQAFgPALgMQAJgNAQgGQAPgIATAAQATAAAQAIQAPAGAJANQALAMAGAPQAFAPAAATQAAARgFAPQgGAQgLALQgJAMgPAGQgQAIgTgBQgTABgPgIgABigyQgJAFgGAIQgFAIgCAKQgDALAAAKQAAAJADAKQACAKAFAIQAGAHAJAFQAIAFAMAAQAMAAAJgFQAIgFAGgHQAFgIACgKQADgKAAgJQAAgKgDgLQgCgKgFgIQgGgIgIgFQgJgFgMAAQgMAAgIAFgAhEBTQgNgDgKgIQgKgHgGgLQgFgLAAgPIAjAAQAAAIADAGQADAGAGADQAEAEAHACIANABIAKAAQAHgBAEgDQAFgCADgEQAEgEAAgGQAAgHgFgFIgLgGIgzgPQgJgDgHgFQgHgFgEgIQgFgIAAgLQAAgNAGgKQAFgIAJgHQAJgGALgDQALgDALgBQANAAAMADQAMAEAIAGQAJAHAFAJQAGALAAAOIgiAAQgBgIgCgFQgDgEgEgCQgFgEgFgBIgNgBIgIAAIgIAFQgEACgCADQgCADAAAGQAAAFABACQACADAFAEIA2AOIAPAHQAIAFAGAIQAFAKAAAOQAAALgEAJQgEAKgJAIQgIAGgNAFQgMADgRAAQgNABgNgEgAE7BTIhEhuIAABuIgiAAIAAikIAlAAIBEBtIABAAIAAhtIAhAAIAACkgAkHBTIAAikIBLAAQAPAAAKAEQALAEAHAIQAGAHAEAKQADAKAAAJQAAALgDAKQgEAIgGAHQgHAHgLAFQgKAFgPgBIgnAAIAAA8gAjjgEIAoAAIAKgEQAFgDADgFQACgEAAgJQAAgHgCgFQgDgEgFgDQgEgDgGgBIgoAAgAmaBTIAAikIB6AAIAAAeIhWAAIAAAjIBQAAIAAAbIhQAAIAAApIBZAAIAAAfgAGDgxQgEgBgCgCIgEgGIgBgIIABgHIAEgGQACgDAEgBIAGgBQAEAAADABQAEABACADIAFAGIAAAHIAAAIIgFAGQgCACgEABQgDACgEgBIgGgBgAGEhPIgEADQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBAGIABAHIADADIAEAEIAFABIAGgBIAFgEIACgDIABgHIgBgGIgCgEIgFgDIgGAAIgFAAgAGNg4IgEgIIgDAAIAAAIIgEAAIAAgUIAHAAIAHABQACACAAADIAAADIgCABIgBABIgCABIAFAIgAGGhDIADAAIAEAAIAAgDIAAgCIAAgBIgHAAg");
	this.shape.setTransform(10.475,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-30.6,5.9,82.2,17.299999999999997), null);


(lib.fortyFour_in = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _4_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAqIAAhTIAcAAIAABTgAglAqIAAhTIAcAAIAABTg");
	this.shape.setTransform(-8.425,219.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAJBbIAAgqIhMAAIAAgiIBOhpIAhAAIAABtIAYAAIAAAeIgYAAIAAAqgAgmATIAvAAIAAg+IgBAAg");
	this.shape_1.setTransform(-22.175,224.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBbIAAgqIhMAAIAAgiIBOhpIAhAAIAABtIAYAAIAAAeIgYAAIAAAqgAgmATIAvAAIAAg+IgBAAg");
	this.shape_2.setTransform(-37.125,224.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AlhCbIAAk1ILDAAIAAE1g");
	this.shape_3.setTransform(-26.475,224.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fortyFour_in, new cjs.Rectangle(-61.8,206.3,70.7,35), null);


// stage content:
(lib.Epson_FSeries_320x480 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(289));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(40.45,18.35,0.9135,0.9135,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.9609},7).wait(282));

	// cta_btn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_257 = new cjs.Graphics().p("AoWDDQhPAAAAhPIAAAAIAAjnQAAhPBPAAIAAAAIQtAAQBPAAAABPIAAAAIAADnQAABPhPAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(257).to({graphics:mask_graphics_257,x:159.5331,y:445.2997}).wait(32));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16.1,-10.6,15.9,10.4).s().p("Ap0JiIOn2WIFCDTIuoWWg");
	this.shape_1.setTransform(71.125,423.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16.1,-10.6,15.9,10.3).s().p("ApzJiIOm2UIFBDRIumWUg");
	this.shape_2.setTransform(72.625,423.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16.1,-10.5,15.8,10.3).s().p("ApwJfIOi2OIFADRIujWOg");
	this.shape_3.setTransform(77.1,425.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16,-10.4,15.7,10.3).s().p("AptJbIOd2FIE+DQIudWFg");
	this.shape_4.setTransform(84.6,427.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.8,-10.4,15.6,10.1).s().p("ApnJWIOU15IE7DOIuVV5g");
	this.shape_5.setTransform(95.125,430);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.6,-10.3,15.4,10).s().p("ApfJPIOI1oIE4DLIuKVog");
	this.shape_6.setTransform(108.6,433.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.3,-10.1,15.2,9.9).s().p("ApWJGIN71TIEyDIIt7VTg");
	this.shape_7.setTransform(125.075,438.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.1,-9.9,14.9,9.7).s().p("ApMI8INs07IEtDEItsU7g");
	this.shape_8.setTransform(144.575,443.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.8,-9.7,14.6,9.5).s().p("ApAIwINb0gIEmDBItaUgg");
	this.shape_9.setTransform(166.3,449.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.5,-9.5,14.4,9.4).s().p("Ao1ImINK0IIEhC+ItKUHg");
	this.shape_10.setTransform(185.775,454.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.3,-9.3,14.1,9.3).s().p("AosIdIM9zzIEcC6Is9Tzg");
	this.shape_11.setTransform(202.275,459.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.1,-9.2,13.9,9.1).s().p("AolIXIMzzjIEYC3IsyTig");
	this.shape_12.setTransform(215.75,462.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.9,-9.1,13.8,9).s().p("AofIRIMpzWIEWC2IsqTVg");
	this.shape_13.setTransform(226.275,465.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.8,-9.1,13.7,8.9).s().p("AobINIMjzNIEUC1IskTMg");
	this.shape_14.setTransform(233.775,467.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.8,-9,13.6,8.9).s().p("AoZIKIMhzGIESCzIshTHg");
	this.shape_15.setTransform(238.25,469);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.7,-9,13.6,8.9).s().p("AoYIJIMfzEIESCzIsfTEg");
	this.shape_16.setTransform(239.75,469.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},257).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(17));

	// learnMore_CTA
	this.instance_1 = new lib.learnMore_CTA();
	this.instance_1.setTransform(159.65,445.45,1.3245,1.3245,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(251).to({_off:false},0).to({alpha:1},8).wait(30));

	// txt_DyeSub
	this.instance_2 = new lib.txt_DyeSub();
	this.instance_2.setTransform(149.15,71.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(246).to({_off:false},0).to({alpha:1},8).wait(35));

	// txt_SureColor
	this.instance_3 = new lib.txt_SureColor();
	this.instance_3.setTransform(149.65,45.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(246).to({_off:false},0).to({alpha:1},8).wait(35));

	// printer_01_mc
	this.instance_4 = new lib.printer_03();
	this.instance_4.setTransform(296.6,353.35,0.5373,0.5373,0,0,0,0.3,0.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(241).to({_off:false},0).to({x:196.6,alpha:1},9,cjs.Ease.quadOut).wait(39));

	// fortyFour_in
	this.instance_5 = new lib.fortyFour_in();
	this.instance_5.setTransform(415.8,53.75,0.9297,0.9297);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(241).to({_off:false},0).to({x:315.8,alpha:1},9,cjs.Ease.quadOut).wait(39));

	// printer_02_mc
	this.instance_6 = new lib.printer_02_mc();
	this.instance_6.setTransform(-9.55,249.1,0.8657,0.8657,0,0,0,0.2,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(238).to({_off:false},0).to({x:101.45,alpha:1},9,cjs.Ease.quadOut).wait(42));

	// sixtyFour_in
	this.instance_7 = new lib.sixtyFour_in();
	this.instance_7.setTransform(-126.4,142.55);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(238).to({_off:false},0).to({x:-15.4,alpha:1},9,cjs.Ease.quadOut).wait(42));

	// txt_PrintWithThe
	this.instance_8 = new lib.txt_PrintWithThe();
	this.instance_8.setTransform(209.9,84.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(201).to({_off:false},0).to({y:103.9,alpha:1},3,cjs.Ease.quadOut).wait(26).to({x:289.9,alpha:0},7,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// txt_toMake
	this.instance_9 = new lib.txt_toMake();
	this.instance_9.setTransform(267.2,102.85);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(166).to({_off:false},0).to({x:207.2,alpha:1},9,cjs.Ease.quadOut).wait(25).to({y:114.85,alpha:0},3,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// txt_best
	this.instance_10 = new lib.txt_best();
	this.instance_10.setTransform(272.7,136.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(166).to({_off:false},0).to({x:212.7,alpha:1},9,cjs.Ease.quadOut).wait(55).to({x:292.7,alpha:0},7,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// purple_Printer_mc
	this.instance_11 = new lib.purple_Printer_mc();
	this.instance_11.setTransform(16,145.05);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(166).to({_off:false},0).to({x:76,alpha:1},9,cjs.Ease.quadOut).wait(55).to({x:6,alpha:0},7,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// txt_highSpeed
	this.instance_12 = new lib.txt_highSpeed();
	this.instance_12.setTransform(134.65,55.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(116).to({_off:false},0).to({x:144.65,alpha:1},10,cjs.Ease.quadOut).wait(33).to({scaleX:0.6694,scaleY:0.6694,x:147.55,y:83.85,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// txt_flourescent_ink
	this.instance_13 = new lib.txt_flourescent_ink();
	this.instance_13.setTransform(146.25,82.75);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(121).to({_off:false},0).to({x:156.25,alpha:1},10,cjs.Ease.quadOut).wait(28).to({scaleX:0.6694,scaleY:0.6694,x:155.3,y:102.05,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// txt_goWith
	this.instance_14 = new lib.txt_goWith();
	this.instance_14.setTransform(136.2,55.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(65).to({_off:false},0).to({x:146.2,alpha:1},10,cjs.Ease.quadOut).wait(29).to({x:160.7,alpha:0},9,cjs.Ease.quadIn).wait(176));

	// txt_printingLeader
	this.instance_15 = new lib.txt_printingLeader();
	this.instance_15.setTransform(136.7,79.85);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(69).to({_off:false},0).to({x:146.7,alpha:1},10,cjs.Ease.quadOut).wait(28).to({x:161.2,alpha:0},9,cjs.Ease.quadIn).wait(173));

	// printer_01_mc
	this.instance_16 = new lib.printer_01_mc();
	this.instance_16.setTransform(153.65,197.2,0.7941,0.7941,0,0,0,0.2,0.2);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(65).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.9503,scaleY:0.9503,x:153.6,y:177.15,alpha:1},10,cjs.Ease.quadOut).wait(84).to({scaleX:0.6361,scaleY:0.6361,x:153.55,y:165.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// txt_capabilites
	this.instance_17 = new lib.txt_capabilites();
	this.instance_17.setTransform(162,159.6);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(23).to({_off:false},0).to({y:150.6,alpha:1},8,cjs.Ease.quadInOut).wait(25).to({alpha:0},8).to({_off:true},1).wait(224));

	// shirt_mc
	this.instance_18 = new lib.shirt_mc();
	this.instance_18.setTransform(84,181);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(24).to({_off:false},0).to({x:115,y:154.05,alpha:1},11,cjs.Ease.quadInOut).wait(21).to({alpha:0},8).to({_off:true},1).wait(224));

	// yellowCup_mc
	this.instance_19 = new lib.yellowCup_mc();
	this.instance_19.setTransform(62,293.05);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(23).to({_off:false},0).to({x:65,y:253.05,alpha:1},11,cjs.Ease.quadInOut).wait(22).to({alpha:0},8).to({_off:true},1).wait(224));

	// mouseMat_mc
	this.instance_20 = new lib.mouseMat_mc();
	this.instance_20.setTransform(150,-3.95);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(26).to({_off:false},0).to({x:139,y:46.05,alpha:1},11,cjs.Ease.quadInOut).wait(19).to({alpha:0},8).to({_off:true},1).wait(224));

	// txt_ExpandCP
	this.instance_21 = new lib.txt_ExpandCP();
	this.instance_21.setTransform(159.25,107.4);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({_off:false},0).to({alpha:1},12,cjs.Ease.quadInOut).wait(41).to({alpha:0},8).to({_off:true},1).wait(224));

	// socks_mc
	this.instance_22 = new lib.socks_mc();
	this.instance_22.setTransform(312.55,266.95,1,1,0,0,0,75,55);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({_off:false},0).to({x:254.55,y:212.95,alpha:1},9,cjs.Ease.quadInOut).wait(43).to({alpha:0},8).to({_off:true},1).wait(224));

	// redCup_mc
	this.instance_23 = new lib.redCup_mc();
	this.instance_23.setTransform(346.5,52.45,1,1,0,0,0,24,-85);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({x:282.5,y:74.45,alpha:1},11,cjs.Ease.quadInOut).wait(45).to({alpha:0},8).to({_off:true},1).wait(224));

	// waterBottle_mc
	this.instance_24 = new lib.waterBottle_mc();
	this.instance_24.setTransform(-32.95,93.55,1,1,0,0,0,-83.5,-58);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({_off:false},0).to({x:37.05,alpha:1},12,cjs.Ease.quadInOut).wait(43).to({alpha:0},8).to({_off:true},1).wait(224));

	// background
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_17.setTransform(159.9953,239.9963,1.0666,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(289));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-170.6,129,596.2,486.6);
// library properties:
lib.properties = {
	id: 'B61A9D64C8DF436F89671266C87EE568',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"items.jpg", id:"items"},
		{src:"pinkPrint.png", id:"pinkPrint"},
		{src:"printer.png", id:"printer"},
		{src:"purplePrinter.jpg", id:"purplePrinter"},
		{src:"yellow_print.jpg", id:"yellow_print"}
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
an.compositions['B61A9D64C8DF436F89671266C87EE568'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;