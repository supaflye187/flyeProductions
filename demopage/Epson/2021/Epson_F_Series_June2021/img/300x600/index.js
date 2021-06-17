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
	mask.graphics.p("AByIIQi5gbhuhDQjGh5gukJQgyknAYh/QAWhyBegYIDgAFQDtAPBEAyIBiBIQBAAxAlAuQBrCAhBCIQgbA2guB5QgyCBgXAzQhSC5hSAAIgLgBg");
	mask.setTransform(147.6066,186.0625);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-32,12.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yellowCup_mc, new cjs.Rectangle(101.7,134,91.89999999999999,104.1), null);


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
	mask.graphics.p("Ao0LIIAA2PIMVAAIAAWPg");
	mask.setTransform(-56.4903,-22.2297);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-122.6,-93.9,0.9036,0.9036);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waterBottle_mc, new cjs.Rectangle(-113,-93.5,79,142.5), null);


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
	this.shape.setTransform(-72.2714,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_toMake, new cjs.Rectangle(-157,-15.1,220,30.2), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgMAfQgHgCgEgEQgFgFgCgGQgEgGAAgIQAAgHAEgGQACgGAFgEQAEgFAHgCQAGgDAGAAQAHAAAGADQAHACAEAFQAFAEADAGQADAGAAAHQAAAIgDAGQgDAGgFAFQgEAEgHACQgGADgHAAQgGAAgGgDgAgJgXQgFACgDADQgEAEgBAEQgDAFAAAFQAAAGADAFQABAFAEADQADAEAFACQAEACAFAAQAFAAAFgCQAEgCAEgEQAEgDACgFQACgFgBgGQABgFgCgFQgCgEgEgEQgEgDgEgCQgFgCgFAAQgFAAgEACgAAIATIgIgQIgFAAIAAAQIgHAAIAAglIANAAQAHAAADADQAFACAAAGIgBAFIgCACIgEACIgDAAIAKARgAgFgCIAFAAIAGgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIgBgDIgBgBIgDgBIgDAAIgFAAg");
	this.shape.setTransform(70.8,40.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AguBKIAAiQIAmAAIAAAbIABAAQADgGAEgGQAEgGAGgEQAGgEAHgCQAHgCAIAAIAJABIAAAlIgHgBIgIAAQgLAAgHADQgIAEgEAGQgEAGgCAJQgCAIAAAJIAABBg");
	this.shape_1.setTransform(61.525,47.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgeBHQgNgGgKgKQgKgJgGgOQgFgPAAgRQAAgQAFgOQAGgOAKgLQAKgKANgFQAOgFAQAAQARAAAOAFQANAFALAKQAJALAGAOQAFAOAAAQQAAARgFAPQgGAOgJAJQgLAKgNAGQgOAFgRAAQgQAAgOgFgAgQgpQgGAEgEAHQgFAFgCAJQgBAJAAAHIABARQACAJAFAGQAEAHAGAEQAHADAJAAQAKAAAHgDQAHgEAEgHQAEgGACgJIABgRQAAgHgBgJQgCgJgEgFQgEgHgHgEQgHgEgKAAQgJAAgHAEg");
	this.shape_2.setTransform(46.65,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgTBkIAAjHIAnAAIAADHg");
	this.shape_3.setTransform(34.375,44.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AgeBHQgNgGgLgKQgJgJgFgOQgGgPAAgRQAAgQAGgOQAFgOAJgLQALgKANgFQAOgFAQAAQARAAAOAFQANAFALAKQAJALAFAOQAGAOAAAQQAAARgGAPQgFAOgJAJQgLAKgNAGQgOAFgRAAQgQAAgOgFgAgQgpQgGAEgFAHQgEAFgBAJQgCAJAAAHIACARQABAJAEAGQAFAHAGAEQAHADAJAAQAKAAAHgDQAGgEAFgHQAEgGABgJIACgRQAAgHgCgJQgBgJgEgFQgFgHgGgEQgHgEgKAAQgJAAgHAEg");
	this.shape_4.setTransform(22.05,47.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgjBgQgTgHgMgOQgNgOgGgUQgHgSAAgWQAAgVAHgUQAGgTANgOQAMgPATgHQASgJAWABQARAAAOAEQAPAFAMAJQALAJAIAOQAHANACARIgqAAQgBgHgEgHQgEgGgGgFQgGgEgHgDQgIgDgIAAQgOAAgKAGQgKAGgHAJQgGAKgDANQgDAMAAAMQAAANADALQADAMAGAKQAHAKAKAFQAKAFAOAAQAUABAMgMQALgNACgUIArAAQgCATgHAPQgHAPgLALQgMALgPAFQgPAGgTgBQgWABgSgJg");
	this.shape_5.setTransform(3.025,44.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgcBHQgOgFgJgLQgKgKgFgOQgFgOAAgRQAAgPAFgOQAFgOAKgKQAKgLAOgFQANgGAQAAQASAAAOAHQAOAHAIAMQAJAMAEAQQAEAPgBAPIhnAAQAAAUAJAJQAJAJAQgBQAMAAAJgFQAJgHACgHIAjAAQgJAbgRALQgSALgYAAQgQAAgOgFgAgOgqQgGADgEAFQgEAEgBAGIgCAJIA/AAQgCgPgIgHQgHgIgOAAQgJAAgGADg");
	this.shape_6.setTransform(-15.515,47.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AguBKIAAiQIAmAAIAAAbIABAAQADgGAEgGQAEgGAGgEQAGgEAHgCQAHgCAIAAIAJABIAAAlIgHgBIgIAAQgLAAgHADQgIAEgEAGQgEAGgCAJQgCAIAAAJIAABBg");
	this.shape_7.setTransform(-28.375,47.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgoBGQgKgEgHgIQgFgHgDgLQgCgLAAgOIAAhYIAoAAIAABRQAAASAFAJQAGAIAOAAQAQAAAHgJQAHgKAAgWIAAhLIAoAAIAACQIgmAAIAAgUIgBAAQgHAMgMAGQgMAFgMAAQgQAAgKgEg");
	this.shape_8.setTransform(-43,47.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgeBlQgPgFgMgJQgMgIgHgNQgHgOAAgTIAqAAQAAAKAEAIQAEAHAGAEQAGAEAIACQAIACAIAAIAMgBQAHAAAGgDQAGgDAEgFQAEgFAAgHQAAgIgFgGQgGgEgIgEIgTgGIgVgGIgVgGQgLgFgIgFQgJgGgFgKQgFgKAAgNQAAgQAGgLQAHgLAKgIQALgHAOgEQANgDANAAQAPAAAPADQAOAEALAHQALAIAHAMQAHANAAAQIgrAAQgBgJgDgFQgDgGgFgEQgGgDgHgBIgNgBIgLABQgFAAgFADQgEAEgDADQgDAFAAAGQAAAGACADQADAFAGACIATAHIAdAIIAPADQAKADAKAHQAKAFAHALQAHALAAAQQAAAPgFALQgFAMgLAIQgKAJgQAFQgQAEgUAAQgPAAgQgDg");
	this.shape_9.setTransform(-60.525,44.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_SureColor, new cjs.Rectangle(-71.6,25.4,148.7,37.4), null);


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
	this.shape.graphics.f("#000000").s().p("AgdBKQgOgHgJgKQgKgKgEgPQgFgPAAgRQAAgPAFgOQAFgPAJgLQAKgKANgHQAOgGAPAAQASAAAOAHQAOAIAKAMQAJAMAEAQQAEAPgCAQIhtAAQAAAKACAHQADAIAFAHQAFAGAHAEQAIADAJAAQAPAAAJgGQAIgHAFgMIAfAAQgCAMgHAKQgGAKgJAGQgJAHgLADQgMADgMAAQgQAAgOgFgAAmgMQAAgIgDgHQgDgHgFgGQgFgFgGgDQgHgEgJAAQgHAAgHADQgHADgGAGQgFAFgDAHQgDAHAAAJIBMAAIAAAAg");
	this.shape.setTransform(9.5058,6.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAhBnIAAheQgBgRgHgHQgHgJgPABQgHAAgHACQgGAEgFAFQgFAFgCAHQgDAHAAAIIAABYIghAAIAAjOIAhAAIAABNIABAAQAGgKAMgGQAMgIAOAAQAYABAPANQAOAMAAAZIAABmg");
	this.shape_1.setTransform(-6.875,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABBgQgGgDgFgEQgFgFgBgHIgCgRIAAhYIgZAAIAAgYIAZAAIAAgtIAgAAIAAAtIAeAAIAAAYIgeAAIAABQIAAAJIACAGIAFAEIAJABIAHAAIAHgBIAAAZIgLACIgLAAQgNAAgIgCg");
	this.shape_2.setTransform(-20.125,4.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhBnIAAheQgBgRgHgHQgHgJgPABQgHAAgHACQgGAEgFAFQgFAFgCAHQgDAHAAAIIAABYIghAAIAAjOIAhAAIAABNIABAAQAGgKAMgGQAMgIAOAAQAYABAPANQAOAMAAAZIAABmg");
	this.shape_3.setTransform(-40.875,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABBgQgGgDgFgEQgFgFgBgHIgCgRIAAhYIgZAAIAAgYIAZAAIAAgtIAgAAIAAAtIAeAAIAAAYIgeAAIAABQIAAAJIACAGIAFAEIAJABIAHAAIAHgBIAAAZIgLACIgLAAQgNAAgIgCg");
	this.shape_4.setTransform(-54.125,4.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPBnIAAiUIAfAAIAACUgAgPhHIAAggIAfAAIAAAgg");
	this.shape_5.setTransform(-62.1,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcBLIgchvIAAAAIgbBvIgjAAIguiVIAjAAIAdBvIABAAIAchvIAhAAIAaBvIABAAIAehvIAiAAIgvCVg");
	this.shape_6.setTransform(-76.75,6.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABBgQgGgDgFgEQgFgFgBgHIgCgRIAAhYIgZAAIAAgYIAZAAIAAgtIAgAAIAAAtIAeAAIAAAYIgeAAIAABQIAAAJIACAGIAFAEIAJABIAHAAIAHgBIAAAZIgLACIgLAAQgNAAgIgCg");
	this.shape_7.setTransform(-100.925,4.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAhBNIAAheQgBgRgHgIQgHgIgPAAQgHAAgHADQgGADgFAGQgFAFgCAHQgDAHAAAJIAABXIghAAIAAiVIAfAAIAAAWIABABQAIgNAMgHQAMgHAOAAQAYAAAPANQAOAMAAAaIAABmg");
	this.shape_8.setTransform(-113.725,6.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQBnIAAiUIAgAAIAACUgAgQhHIAAggIAgAAIAAAgg");
	this.shape_9.setTransform(-125.4,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrBNIAAiVIAfAAIAAAdIABAAQABgGAEgGIAKgKQAGgFAHgDQAHgDAHAAIAJABIAEAAIAAAgIgHgBIgHgBQgJAAgHADQgHAEgGAHQgEAGgEAJQgDAKAAAMIAABHg");
	this.shape_10.setTransform(-132.875,6.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhQBnIAAjOIBaAAQAWABAOAGQAPAGAHAKQAIAJACALQADAMAAAJQAAAKgDAMQgCAKgIAJQgHAKgPAGQgOAGgWAAIg2AAIAABPgAgsgFIA0AAIANgBQAGgCAGgEQAFgEAEgHQACgGAAgKQAAgKgCgHQgDgGgFgEQgFgEgGgBIgOgCIg1AAg");
	this.shape_11.setTransform(-147.9,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_PrintWithThe, new cjs.Rectangle(-160.2,-16.1,179.7,38.6), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgVAWIAAgqIArAAIAAAqg");
	this.shape.setTransform(112.225,104.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AAqBkQgDgJgCgNIgCgaQgCgQgHgHQgIgHgQAAIgrAAIAABOIgsAAIAAjHIBqAAQAOAAALAEQAKAFAIAIQAIAHAEAKQAEAKAAALQAAASgHAMQgIANgRAHIAAAAQAJACAFAFQAFAEAEAHQADAGABAHIACAQIABALIABANIADANQABAGADAEgAgpgJIAvAAQAPAAAHgGQAIgHAAgPQAAgPgIgGQgHgGgPAAIgvAAg");
	this.shape_1.setTransform(98.85,96.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AhLBkIAAjHICVAAIAAAlIhpAAIAAArIBgAAIAAAhIhgAAIAAAxIBrAAIAAAlg");
	this.shape_2.setTransform(79.875,96.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AhYBkIAAjHIBXAAQASAAARAHQAQAFANANQALAMAIASQAGATABAZQgBAVgGASQgFATgLANQgMAOgRAHQgRAIgVAAgAgrA/IAmAAQAJAAAJgDQAJgDAHgHQAHgIAEgLQAEgMABgQQAAgOgEgMQgCgNgIgIQgGgJgLgEQgLgFgQAAIgeAAg");
	this.shape_3.setTransform(60.6,96.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AA0BkIgPgtIhKAAIgQAtIgrAAIBLjHIAsAAIBKDHgAgaAXIAzAAIgZhJIAAAAg");
	this.shape_4.setTransform(40.4,96.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AhLBkIAAjHICVAAIAAAlIhpAAIAAArIBgAAIAAAhIhgAAIAAAxIBrAAIAAAlg");
	this.shape_5.setTransform(22.375,96.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AhGBkIAAjHIAsAAIAACiIBhAAIAAAlg");
	this.shape_6.setTransform(5.425,96.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYBjQgLgDgJgGQgJgFgGgIQgGgKgBgMIAoAAQACAMAJADQAIAFAJAAQARAAAIgKQAIgKgBgPIAAgTIAAAAQgHALgMAGQgMAFgMAAQgQAAgMgGQgLgFgIgKQgIgKgDgNQgEgNAAgPQAAgOAFgNQADgNAIgKQAIgKAMgFQALgHAPAAQAOAAALAGQAKAFAIANIAAAAIAAgUIAmAAIAACHQAAAIgCAMQgDALgIAJQgHAKgPAHQgPAHgYAAQgLAAgLgDgAgNhDQgGADgEAGQgEAGgCAHQgCAHAAAIIACAQQABAHAEAHQAEAFAGAEQAGAEAIAAQAJAAAGgEQAHgDAEgGQAEgEACgHQACgIAAgHQAAgJgBgIQgCgIgEgGQgEgGgGgEQgHgEgKAAQgHABgGADg");
	this.shape_7.setTransform(-20.325,101.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAcBKIAAhRQAAgRgGgJQgFgJgPAAQgOAAgIAKQgHAJAAAWIAABLIgoAAIAAiQIAmAAIAAAVIABAAQAHgNANgGQALgFAMAAQAQAAAKAEQALAEAFAIQAGAIACALQADALAAANIAABYg");
	this.shape_8.setTransform(-36.95,98.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_9.setTransform(-48.925,96.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAGBdQgHgBgHgEQgGgDgEgHQgDgHAAgLIAAhUIgZAAIAAgbIAZAAIAAgrIAmAAIAAArIAeAAIAAAbIgeAAIAABHQAAAKAEADQADAEAKAAIAHgBIAGgBIAAAfIgMABIgMABg");
	this.shape_10.setTransform(-57.7,96.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcBKIAAhRQAAgRgGgJQgFgJgPAAQgPAAgHAKQgHAJAAAWIAABLIgoAAIAAiQIAmAAIAAAVIAAAAQAJgNAMgGQALgFAMAAQAQAAAKAEQALAEAFAIQAGAIACALQADALAAANIAABYg");
	this.shape_11.setTransform(-70.9,98.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTBkIAAiQIAnAAIAACQgAgThCIAAghIAnAAIAAAhg");
	this.shape_12.setTransform(-82.875,96.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AguBKIAAiQIAmAAIAAAbIABAAQADgGAEgGQAEgGAGgEQAGgEAHgCQAHgCAIAAIAJABIAAAlIgHgBIgIAAQgLAAgHADQgIAEgEAGQgEAGgCAJQgCAIAAAJIAABBg");
	this.shape_13.setTransform(-91.275,98.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhJBjIAAjCIAmAAIAAATIABAAQAHgMALgFQALgGANAAQARABAMAGQANAGAIALQAIAKAEAOQAEAOAAAQQAAAOgEANQgEANgIALQgIALgMAFQgMAHgQAAQgMgBgMgFQgLgFgHgLIgBAAIAABEgAgQhAQgHADgEAHQgEAGgCAJQgBAIAAAJIABARQACAIAEAGQAEAGAHAEQAHAEAJAAQAJAAAHgEQAGgEAFgGQADgGACgIIACgRIgCgRQgCgIgEgHQgEgHgHgDQgGgEgJgBQgKABgGAEg");
	this.shape_14.setTransform(-105.775,101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_printingLeader, new cjs.Rectangle(-116.6,77,234.8,37.900000000000006), null);


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
	this.shape.graphics.f("#000000").s().p("AAkBkIAAhiQAAgMgIgIQgIgIgOAAQgJAAgJADQgHAEgFAFQgGAHgDAHQgCAJAAAJIAABSIgYAAIAAjHIAYAAIAABMIAAAAQADgGAFgFQAFgFAHgDIAMgDIANgCQAPAAAIAEQAKAEAGAGQAGAHACAKQADAKAAALIAABfg");
	this.shape.setTransform(98.3,89.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUBeIgPgBQgGgCgEgDQgEgDgCgHQgCgGAAgJIAAhcIgZAAIAAgVIAZAAIAAgrIAXAAIAAArIAdAAIAAAVIgdAAIAABZIAAAHIADAEIAFACIAKAAIALAAIAAAVg");
	this.shape_1.setTransform(85.475,90.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBkIAAiQIAXAAIAACQgAgLhGIAAgdIAXAAIAAAdg");
	this.shape_2.setTransform(77.925,89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAeBJIgehyIAAAAIgcByIgaAAIguiRIAaAAIAhB2IAAAAIAdh2IAZAAIAfB2IAAAAIAhh2IAYAAIguCRg");
	this.shape_3.setTransform(63.875,92.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeBfQgMgGgJgKQgIgLgEgNQgEgOgBgPQABgQAEgNQADgNAJgKQAIgLANgFQAMgHARAAIAKABIAOAEQAGADAGAEQAFAFAFAGIAAAAIAAhLIAYAAIAADIIgYAAIAAgUIAAAAQgGAMgNAFQgMAGgPAAQgQAAgNgHgAgTgXQgIAFgGAHQgFAJgCAIQgCALAAALQAAAJADAKQACAKAFAIQAGAHAJAEQAIAFAKAAQAMAAAJgFQAJgFAFgHQAFgIADgKQACgJAAgKQAAgLgCgLQgEgJgFgHQgFgHgJgFQgJgFgMAAQgLAAgIAFg");
	this.shape_4.setTransform(36.05,89.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaBGQgNgGgJgJQgIgLgFgNQgEgPgBgQQAAgQAFgOQAFgOAKgKQAJgJAMgGQANgFANgBQAUAAAMAIQANAJAIALQAIANACAOQADAPAAAMIhrAAQgBAKADAIQACAJAGAGQAGAHAIAEQAJAEALAAQAPAAAJgHQAKgHADgPIAYAAQgFAZgQAMQgRANgYAAQgRgBgMgFgAgQgyQgHADgFAGQgGAFgDAHQgDAIAAAIIBSAAQgBgIgDgIQgDgHgGgGQgFgFgIgDQgHgDgJgBQgIABgIADg");
	this.shape_5.setTransform(20.5286,92.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaBGQgNgGgJgJQgIgLgFgNQgEgPgBgQQAAgQAFgOQAFgOAKgKQAJgJAMgGQANgFANgBQAUAAAMAIQANAJAIALQAIANACAOQADAPAAAMIhrAAQgBAKADAIQACAJAGAGQAGAHAIAEQAJAEALAAQAPAAAJgHQAKgHADgPIAYAAQgFAZgQAMQgRANgYAAQgRgBgMgFgAgQgyQgHADgFAGQgGAFgDAHQgDAIAAAIIBSAAQgBgIgDgIQgDgHgGgGQgFgFgIgDQgHgDgJgBQgIABgIADg");
	this.shape_6.setTransform(5.1786,92.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhEBmIAAjIIAYAAIAAAVIABAAQAGgNAMgFQANgFAOgBQARAAAMAHQANAFAIAMQAIAJAFAOQAEAOAAAQQAAAPgEANQgEAOgJAJQgIALgMAGQgNAFgQABIgLgBIgNgEQgHgDgFgEQgGgFgEgGIgBAAIAABLgAgVhLQgIAFgFAHQgGAJgCAJQgDAKAAAKQAAALADAKQADAJAFAHQAFAHAJAFQAJAFALAAQAMAAAJgFQAIgFAFgHQAFgJACgIQACgKAAgLQAAgKgCgKQgDgKgFgHQgGgHgIgFQgJgFgKAAQgMAAgJAFg");
	this.shape_7.setTransform(-10.725,94.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWBJQgLgCgIgGQgJgGgFgKQgEgJgBgNIAYAAQAAAIADAFQAEAGAFADQAGADAGABIAOACIALgBIALgDQAGgDADgEQADgEABgHQAAgJgIgEQgHgGgKgCIgWgGQgMgCgLgEQgKgDgIgJQgGgHAAgOQAAgMAFgHQAFgIAHgFQAIgFAJgCQALgCAJgBQALAAALACQAKACAIAFQAIAGAEAJQAGAJAAAMIgYAAQAAgGgDgFQgDgFgFgDIgKgDIgLgCIgLABIgKADQgFACgCAEQgDADAAAGQAAAGAFAEQADAEAIADIAOAFIAQADIARAFQAKADAGAEQAHAEADAHQAEAHABALQAAAMgGAJQgFAIgJAGQgJAGgLACQgLACgLAAQgLgBgLgCg");
	this.shape_8.setTransform(-26.8,92.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgnALIAAgVIBQAAIAAAVg");
	this.shape_9.setTransform(-39.55,91.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAkBkIAAhiQAAgMgIgIQgHgIgPAAQgKAAgIADQgHAEgFAFQgGAHgCAHQgDAJgBAJIAABSIgXAAIAAjHIAXAAIAABMIABAAQADgGAFgFQAFgFAHgDIAMgDIANgCQAPAAAIAEQALAEAFAGQAGAHADAKQACAKAAALIAABfg");
	this.shape_10.setTransform(-53.1,89.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBlQgLgCgIgFQgJgFgFgIQgGgIgBgMIAYAAQABAGADAFQAEAEAGADQAFADAGABIAMABQALAAAJgEQAIgEAFgHQAFgHADgKQACgKAAgMIAAgKIAAAAQgHAOgMAGQgNAGgMAAQgRAAgMgGQgMgGgIgJQgIgKgEgOQgEgMAAgPQAAgNADgNQAEgOAHgLQAIgLANgHQANgHASAAQAOAAALAGQALAGAHAMIAAAAIAAgVIAWAAIAACDQAAAkgQASQgQARgiAAQgKAAgKgCgAgRhNQgIAEgFAIQgFAHgDAJQgCAKAAAKQAAAKACAKQACAJAFAIQAEAIAIAFQAIAEALAAQAMAAAIgEQAIgFAFgIQAFgIADgJQACgKAAgLQAAgJgCgJQgCgKgFgHQgFgHgIgFQgIgEgLAAQgLAAgIAEg");
	this.shape_11.setTransform(-69.675,95.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLBkIAAiQIAXAAIAACQgAgLhGIAAgdIAXAAIAAAdg");
	this.shape_12.setTransform(-80.725,89.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA0BkIAAhbIhoAAIAABbIgaAAIAAjHIAaAAIAABWIBoAAIAAhWIAbAAIAADHg");
	this.shape_13.setTransform(-94.275,89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_highSpeed, new cjs.Rectangle(-106.4,70.9,215,36.599999999999994), null);


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
	this.shape.setTransform(109.375,93.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgwA6QgMgOAAgbIAAhYIAeAAIAABVQAAASAIAIQAGAHANAAQAJAAAHgDQAGgDAEgFQAEgFACgHQABgHABgIIAAhQIAeAAIAACLIgeAAIAAgUIAAAAQgGALgMAGQgLAHgKAAQgcAAgMgOg");
	this.shape_1.setTransform(92.7,95.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYBHQgLgDgIgGQgIgHgFgJQgFgJAAgMIAfAAQABANAJAGQAJAFALAAIAKAAIAKgDQAFgCAEgEQADgDgBgGQAAgGgEgEQgEgEgGgCIgPgEIgPgDIgRgFQgIgDgGgDQgHgFgDgHQgEgHAAgLQAAgLAFgIQAGgHAIgFQAJgFAKgCQALgCAJAAQAKAAAKADQAKACAIAFQAIAFAFAJQAFAIACALIghAAQgCgLgIgDQgIgEgJAAIgIAAIgIACQgEACgDADQgCACAAAFQAAAGAEADQADAEAHACIANAEIARADIARAFQAIADAGAEQAGAEAEAHQAEAHAAAKQAAANgGAIQgFAJgJAFQgJAGgLACQgMADgKAAQgNAAgLgDg");
	this.shape_2.setTransform(77.675,95.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAPIAAgcIBOAAIAAAcg");
	this.shape_3.setTransform(65,95.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbBEQgNgFgJgKQgIgKgFgNQgEgOAAgQQAAgOAEgNQAFgOAJgKQAJgKAMgGQANgGAOAAQARAAANAHQANAHAJALQAIAMAEAPQAEAOgCAPIhmAAQAAAIADAIQACAHAFAGQAEAFAHAEQAHADAJAAQANAAAJgGQAIgFAEgMIAdAAQgCALgGAJQgGAJgIAGQgJAGgKADQgLAEgLAAQgPAAgNgGgAAjgLQAAgIgDgGQgCgHgFgFQgEgFgHgDQgGgDgIAAQgHAAgHACQgGADgFAFQgFAFgCAHQgDAHgBAIIBHAAIAAAAg");
	this.shape_4.setTransform(52.0583,95.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3BgIAAgaIAIABIAHAAIAJgBIAFgDIAEgGIADgJIAEgKIg1iLIAhAAIAkBoIAAAAIAkhoIAgAAIg2CTIgIASQgEAIgEAHQgFAGgHAFQgJADgMAAQgKABgLgCg");
	this.shape_5.setTransform(37.05,98.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggBcQgMgGgIgKQgIgKgEgNQgEgOAAgQQAAgSAFgNQAFgOAIgJQAJgJALgEQALgEALAAIAMABIAOAEQAGADAFAEQAFAEAEAGIAAAAIAAhHIAfAAIAAC/IgdAAIAAgTIgBAAQgFANgNAFQgLAFgMAAQgRAAgNgGgAgQgTQgIAEgEAHQgFAHgCAJQgCAIAAAKQAAAJACAIQADAJAEAHQAFAHAHAEQAHAEAJAAQALAAAHgFQAHgEAFgHQAFgHACgJQACgJAAgJQAAgXgKgMQgKgNgSAAQgKAAgHAFg");
	this.shape_6.setTransform(21.1,93.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAjBGQgHgEgBgJQgKAIgNAEQgMAFgNAAQgJAAgJgDQgJgDgGgFQgHgFgEgHQgEgIAAgKQAAgNAFgIQAFgIAIgEQAHgFAKgCIATgDIAPgCIANgCQAGgCAEgDQADgEAAgGQAAgGgDgEIgHgGIgJgDIgJAAQgNAAgIAFQgJAGgBALIgfAAQABgOAGgJQAGgJAIgFQAJgFALgCQALgDAMAAQAJAAAKADQAKACAIAFQAIAEAFAIQAFAIAAALIAABHQAAAFABADQACACAEAAIADAAIAFAAIAAAVIgEABIgGABIgFABIgFABQgJAAgGgEgAAHAFIgUADIgJACIgIAFQgEACgCAEQgCAEAAAGQAAAGADADQADAEAEACIAJACIAKABIAKgBQAGgBAFgEQAFgDAEgFQADgFAAgHIAAgXQgHAEgKABg");
	this.shape_7.setTransform(-2.125,95.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfBgIAAhYQgBgPgGgHQgHgIgOAAQgGAAgHADQgGADgEAFQgEAFgDAGQgDAGABAIIAABSIggAAIAAi/IAgAAIAABHIAAAAQAFgJAMgHQALgGANAAQAXAAANAMQANAMAAAWIAABgg");
	this.shape_8.setTransform(-25.85,92.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACBZQgHgDgEgEQgFgEgBgHIgBgQIAAhQIgYAAIAAgYIAYAAIAAgpIAdAAIAAApIAcAAIAAAYIgcAAIAABJIAAAIIACAGQACADADABIAIABIAGAAIAHgBIAAAYIgKABIgKAAQgMABgHgDg");
	this.shape_9.setTransform(-38.6,93.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOBgIAAiKIAdAAIAACKgAgOhCIAAgdIAdAAIAAAdg");
	this.shape_10.setTransform(-46.525,92.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaBGIgahnIAAAAIgZBnIggAAIgriLIAgAAIAcBnIAAAAIAahnIAeAAIAaBnIAAAAIAchnIAfAAIgrCLg");
	this.shape_11.setTransform(-60.6,95.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdBEQgNgGgJgJQgJgKgFgNQgEgOAAgQQAAgPAEgOQAFgNAJgKQAJgKANgFQANgGAQAAQARAAANAGQANAFAJAKQAJAKAFANQAEAOAAAPQAAAQgEAOQgFANgJAKQgJAJgNAGQgNAGgRAAQgQAAgNgGgAgRgsQgHAEgFAHQgFAHgCAJQgDAJAAAIQAAAJADAJQACAJAFAHQAFAHAHAEQAIAEAJAAQAKAAAIgEQAHgEAFgHQAFgHACgJQADgJAAgJQAAgIgDgJQgCgJgFgHQgFgHgHgEQgIgEgKAAQgJAAgIAEg");
	this.shape_12.setTransform(-87.275,95.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBdQgRgIgMgNQgMgPgGgSQgHgSAAgVQAAgTAHgTQAGgSAMgOQAMgNARgJQARgIAVAAQAPAAAPAEQAOAEALAJQALAIAHANQAHAMACAQIghAAQgBgJgEgIQgFgHgHgEQgGgFgJgDQgIgCgJAAQgPgBgLAHQgLAGgHAKQgHALgDANQgEANAAANQAAAOAEANQADANAHALQAHAKALAGQALAHAPAAQANAAAKgEQAKgDAHgIQAGgGAEgLQADgJABgNIg0AAIAAgYIBTAAIAABkIgWAAIgFgWQgOAPgNAGQgOAGgRAAQgVAAgRgIg");
	this.shape_13.setTransform(-106.075,92.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_goWith, new cjs.Rectangle(-118.1,74.2,237.89999999999998,36.2), null);


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
	this.shape.setTransform(97.225,99.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0092").s().p("AAYBoIgohDIgQAPIAAA0IgpAAIAAjPIApAAIAABuIAzg1IAxAAIg5A2IA/Bgg");
	this.shape_1.setTransform(86.2,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0092").s().p("AAdBNIAAhUQAAgSgFgJQgHgKgOAAQgQAAgHAKQgIALAAAXIAABNIgqAAIAAiVIAoAAIAAAVIABAAQAHgNANgGQALgGAOAAQAQAAALAFQAKAEAHAIQAFAIADALQACAMAAAOIAABbg");
	this.shape_2.setTransform(68.55,94.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0092").s().p("AgTBoIAAiWIAoAAIAACWgAgThEIAAgjIAoAAIAAAjg");
	this.shape_3.setTransform(56.5,91.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0092").s().p("AAGBhQgHgBgHgEQgGgEgEgHQgEgHAAgLIAAhYIgZAAIAAgbIAZAAIAAgtIAoAAIAAAtIAeAAIAAAbIgeAAIAABKQAAAKAEADQADAEAKAAIAHAAIAGgBIAAAgIgLABIgNAAg");
	this.shape_4.setTransform(39.975,92.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0092").s().p("AAdBNIAAhUQAAgSgFgJQgHgKgOAAQgQAAgHAKQgIALAAAXIAABNIgqAAIAAiVIAoAAIAAAVIABAAQAHgNANgGQALgGAOAAQAQAAALAFQAKAEAHAIQAFAIADALQACAMABAOIAABbg");
	this.shape_5.setTransform(26.7,94.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0092").s().p("AgdBJQgOgGgKgKQgKgLgGgOQgFgPAAgRQAAgQAGgOQAFgOAKgLQALgLAOgGQAOgGAQAAQATAAAOAHQAOAIAJAMQAKAMAEARQAEAPgCARIhrAAQABAUAKAJQAJAJAQAAQANAAAJgGQAJgGACgIIAkAAQgJAbgSAMQgSAMgZAAQgRAAgOgGgAgPgsQgGADgEAFQgEAFgCAGIgCAKIBCAAQgDgQgHgIQgHgIgPAAQgJAAgHADg");
	this.shape_6.setTransform(10.0705,94.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0092").s().p("AgcBJQgOgGgKgJQgKgLgGgOQgFgOAAgRQAAgQAFgPQAFgPAKgLQAKgKAOgHQAOgGARAAQAOAAANAEQAMADAJAHQAKAHAGALQAGAKABAPIgpAAQgEgagaAAQgIAAgHAEQgHAFgEAHQgEAIgCAIIgCAQIACAQQACAIAEAIQADAGAHAEQAHAFAJAAQAOAAAIgIQAIgJACgOIAoAAQgEAfgUAPQgSAQgeAAQgQAAgOgGg");
	this.shape_7.setTransform(-6.1,94.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0092").s().p("AgYBMQgMgDgKgFQgJgHgHgJQgGgLgBgPIAoAAQAAAHADAFQACAEAFADQADADAHACIAKACIAJgBIAJgEQAEgCADgDQACgEAAgFQAAgKgMgFQgMgEgVgFIgSgEQgIgEgIgDQgGgEgEgHQgEgHAAgKQAAgOAFgKQAGgJAKgGQAJgFALgCQAMgCAMAAQALAAAMADQAMACAIAFQAJAFAGAKQAGAJABAOIgnAAQgBgMgIgEQgIgFgKAAIgHABIgIACIgGAEQgCADAAAFQAAAFAEADQAEAEAHACIANAEIASAEIARAFQAJADAGAFQAHADAEAHQAFAIAAAKQgBAOgGALQgGAKgJAGQgKAGgMADQgNACgMAAQgMAAgNgDg");
	this.shape_8.setTransform(-22.1,94.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0092").s().p("AgdBJQgOgGgKgKQgKgLgGgOQgFgPAAgRQAAgQAGgOQAFgOAKgLQALgLAOgGQAOgGAQAAQATAAAOAHQAOAIAJAMQAKAMAEARQAEAPgCARIhrAAQABAUAKAJQAJAJAQAAQANAAAJgGQAJgGACgIIAkAAQgJAbgSAMQgSAMgZAAQgRAAgOgGgAgPgsQgGADgEAFQgEAFgCAGIgCAKIBCAAQgDgQgHgIQgHgIgPAAQgJAAgHADg");
	this.shape_9.setTransform(-37.9295,94.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0092").s().p("AgwBNIAAiVIAoAAIAAAcIABAAQADgHAEgGQAEgGAHgEQAGgEAHgCQAHgDAIAAIAKACIAAAmIgIgBIgIAAQgLgBgIAEQgHAEgFAGQgEAHgCAJQgCAIAAAKIAABDg");
	this.shape_10.setTransform(-50.85,94.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0092").s().p("AgfBJQgOgFgKgKQgKgLgGgOQgFgPgBgSQABgRAFgOQAGgPAKgKQAKgLAOgGQAPgFAQAAQASAAAOAFQAOAGAKALQALAKAFAPQAGAOgBARQABASgGAPQgFAOgLALQgKAKgOAFQgOAGgSAAQgQAAgPgGgAgQgrQgIAFgDAGQgFAHgCAIQgBAJAAAIIABASQACAIAFAHQADAHAIAEQAHAEAJAAQAKAAAIgEQAGgEAEgHQAFgHACgIQACgJAAgJQAAgIgCgJQgCgIgFgHQgEgGgGgFQgIgEgKAAQgJAAgHAEg");
	this.shape_11.setTransform(-65.85,94.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0092").s().p("AgpBIQgMgEgFgIQgHgIgCgLQgDgMAAgOIAAhbIAqAAIAABTQAAAUAGAIQAFAJAPAAQAQAAAIgKQAHgKAAgWIAAhOIApAAIAACVIgnAAIAAgVIAAAAQgJANgMAGQgLAGgNAAQgRAAgKgFg");
	this.shape_12.setTransform(-83,94.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0092").s().p("AgUBoIAAjPIApAAIAADPg");
	this.shape_13.setTransform(-95.05,91.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0092").s().p("AhIBoIAAjPICRAAIAAAmIhjAAIAAAxIBVAAIAAAiIhVAAIAABWg");
	this.shape_14.setTransform(-106.425,91.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_flourescent_ink, new cjs.Rectangle(-117.7,71.9,230.5,38.599999999999994), null);


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
	this.shape.graphics.f("#000000").s().p("AgaB4QgOgCgLgHQgKgGgIgKQgHgLgBgPIAmAAQABAJAEAEQAEAFAGADQAGADAGABIANABQAXAAALgMQALgLAAgVIAAgbIgBAAQgIAPgOAHQgOAJgPgBQgUABgPgIQgPgHgJgNQgKgMgEgPQgEgRAAgSQAAgSAFgQQAFgPAKgNQAKgLAPgIQAOgGATgBQAPAAAOAHQAOAHAHAPIABAAIAAgYIAmAAIAACjQAAAogWATQgWAUgoAAQgNAAgNgEgAgVhXQgJAGgFAIQgGAIgCAMQgCAKAAALQAAAKACALQADAKAGAHQAFAIAJAFQAIAGAMAAQAMgBAJgFQAJgFAFgIQAGgIACgLQADgLAAgLQAAgLgDgKQgCgLgGgIQgFgIgJgFQgJgEgMAAQgMgBgJAGg");
	this.shape.setTransform(100.825,180.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmBZIAAhsQgBgVgIgJQgIgJgRAAQgJAAgHAEQgIADgFAHQgGAFgDAJQgDAJAAAIIAABmIgmAAIAAitIAkAAIAAAaIABABQAIgOAPgJQAOgIAQAAQAcAAARAOQAQAQAAAdIAAB2g");
	this.shape_1.setTransform(82.125,177.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSB4IAAitIAlAAIAACtgAgShTIAAgkIAlAAIAAAkg");
	this.shape_2.setTransform(69.025,174.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACBvQgJgDgFgFQgFgGgCgIIgCgTIAAhmIgdAAIAAgdIAdAAIAAgzIAlAAIAAAzIAjAAIAAAdIgjAAIAABcIABAKIACAIQACADADABIALABIAIAAIAIgBIAAAeIgMABIgNABQgPgBgJgCg");
	this.shape_3.setTransform(59.75,175.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAmBZIAAhsQgBgVgIgJQgIgJgRAAQgJAAgHAEQgIADgFAHQgGAFgDAJQgDAJAAAIIAABmIgmAAIAAitIAkAAIAAAaIABABQAIgOAPgJQAOgIAQAAQAcAAARAOQAQAQAAAdIAAB2g");
	this.shape_4.setTransform(45.275,177.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSB4IAAitIAlAAIAACtgAgShTIAAgkIAlAAIAAAkg");
	this.shape_5.setTransform(32.175,174.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyBZIAAitIAkAAIAAAiIABAAQACgHAEgGQAFgIAGgFQAHgGAIgDQAJgDAJAAIAJABIAFAAIAAAlIgIgBIgIgBQgKAAgJAEQgIAEgHAIQgFAHgEALQgDALAAANIAABTg");
	this.shape_6.setTransform(23.975,177.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhVB5IAAjtIAlAAIAAAYIAAAAQAIgPAPgGQAOgHAPAAQAVAAAPAHQAQAIAKAMQAKANAFAQQAFARAAATQAAARgEAQQgFARgKAMQgJAMgOAIQgOAHgTAAIgQgBIgQgFQgIgDgGgFQgGgFgFgIIgBAAIAABXgAgkhJQgMARAAAcQAAAMADAMQAEAKAGAIQAGAIAJAFQAJAEALABQAMgBAKgFQAJgFAGgIQAGgJACgKQACgLABgLQAAgNgEgLQgCgKgHgJQgGgJgIgEQgKgGgLAAQgXAAgNARg");
	this.shape_7.setTransform(7.65,180.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwASIAAgjIBhAAIAAAjg");
	this.shape_8.setTransform(-8.975,177.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABYBZIAAhkIgBgTQgBgIgDgHQgDgGgGgDQgHgEgLAAQgTAAgJAMQgJAMAAAWIAABlIglAAIAAhvQAAgRgHgKQgGgJgRAAQgIAAgHADQgHADgFAGQgFAFgDAJQgDAIAAALIAABmIgnAAIAAitIAlAAIAAAZIABAAIAJgMQAFgGAGgDQAGgEAIgCQAIgCALAAQAQAAANAHQANAHAGAPQAJgOANgHQANgIATAAQAbAAAQANQAPAOAAAfIAAB3g");
	this.shape_9.setTransform(-29.575,177.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkBVQgQgHgMgMQgLgMgGgRQgFgRAAgUQAAgTAFgRQAGgQALgNQAMgMAQgHQAQgGAUAAQAVAAARAGQAQAHALAMQALANAGAQQAGARgBATQABAUgGARQgGARgLAMQgLAMgQAHQgRAGgVAAQgUAAgQgGgAgVg3QgJAGgHAIQgFAJgEALQgCALAAAKQAAALACALQAEALAFAJQAHAJAJAFQAJAFAMAAQANAAAJgFQAJgFAHgJQAFgJAEgLQACgLAAgLQAAgKgCgLQgEgLgFgJQgHgIgJgGQgJgFgNAAQgMAAgJAFg");
	this.shape_10.setTransform(-53.55,177.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AACBvQgIgDgGgFQgFgGgCgIIgCgTIAAhmIgdAAIAAgdIAdAAIAAgzIAlAAIAAAzIAjAAIAAAdIgjAAIAABcIABAKIACAIQACADADABIALABIAIAAIAIgBIAAAeIgMABIgNABQgPgBgJgCg");
	this.shape_11.setTransform(-68.75,175.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeBYQgOgEgKgHQgKgIgGgLQgGgMAAgPIAmAAQACARAKAGQALAHAPAAIANgBIAMgDQAHgCADgFQAEgEAAgIQgBgHgFgFQgEgEgIgDIgSgFIgUgEIgVgGQgKgDgHgFQgJgGgEgJQgEgJgBgNQAAgOAIgJQAGgKALgGQAKgGANgCQANgCAMAAQAMAAAMADQANACAJAHQAKAGAHAKQAGALACAOIgnAAQgDgOgKgEQgKgFgMAAIgJABIgLACQgFACgDADQgEAEAAAGQABAHAFAEQAFAEAHADIARAFIAVAEIAVAGQAJAEAJAFQAHAFAFAJQAFAIAAANQAAAQgHAKQgHALgMAHQgLAGgOADQgNADgNAAQgQAAgOgDg");
	this.shape_12.setTransform(-82.1,177.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag8BIQgPgRAAgiIAAhtIAmAAIAABqQAAAXAJAIQAJAKAPAAQALAAAIgDQAIgEAGgGQAFgHACgJQACgIAAgKIAAhkIAmAAIAACsIglAAIAAgYIgBAAQgHANgOAJQgOAHgNAAQgjAAgPgRg");
	this.shape_13.setTransform(-100.025,177.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghBVQgQgHgKgMQgLgMgGgRQgFgQAAgTQAAgTAFgRQAGgRAKgMQALgNAQgHQAQgHAVAAQAPAAANADQAOAEAKAIQALAIAHAMQAGALACAQIgnAAQgCgQgKgIQgLgIgQAAQgHAAgIACQgIADgHAHQgHAHgFAMQgFAMAAATQAAALADAKQACALAGAJQAFAIAJAFQAJAFALAAQARAAALgKQALgLACgSIAnAAQgGAigUARQgUASgiAAQgTAAgQgGg");
	this.shape_14.setTransform(-118.375,177.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag+BuIAAjWIAsAAIAAAqIABAAQADgIAFgJQAHgIAHgHQAJgHAKgEQAKgFALAAIAMABIAGABIAAAuIgLgCIgKgBQgMABgKAFQgLAEgHAKQgIAJgEANQgFAPABAQIAABmg");
	this.shape_15.setTransform(103.85,140.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhKBZQgUgUABgrIAAiIIAvAAIAACDQAAAcALAMQAKAMAUAAQAOAAAKgEQAKgFAGgIQAGgIADgKQADgLAAgNIAAh8IAwAAIAADWIgwAAIAAgdIAAAAQgJAQgRAKQgRAJgSABQgqAAgSgWg");
	this.shape_16.setTransform(84.2,141.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgtBpQgUgIgOgQQgOgOgHgWQgIgVAAgYQAAgXAIgWQAHgVAOgPQAOgOAUgJQAUgJAZAAQAaAAAUAJQAUAJAOAOQAOAPAIAVQAGAWAAAXQAAAYgGAVQgIAWgOAOQgOAQgUAIQgUAJgaAAQgZAAgUgJgAgbhEQgLAGgIALQgHALgDANQgEAOAAANQAAAOAEANQADAOAHALQAIAKALAIQAMAGAPAAQAQAAALgGQAMgIAHgKQAIgLAEgOQADgNAAgOQAAgNgDgOQgEgNgIgLQgHgLgMgGQgLgHgQAAQgPAAgMAHg");
	this.shape_17.setTransform(61,140.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhVCUIAAgoIALABIALABQAJAAAFgCQAFgCAEgEIAGgJIAFgMIAFgRIhSjVIA0AAIA4CfIABAAIA2ifIAyAAIhUDhIgMAcQgFAOgHAKQgIAKgMAGQgNAGgSAAQgRAAgQgCg");
	this.shape_18.setTransform(38.875,145.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3283").s().p("Ag2COQgTgKgMgPQgLgRgGgUQgGgVAAgXQAAgVAGgTQAGgVALgPQAMgPASgKQASgJAYAAQASAAARAIQASAIAJAQIABAAIAAhsIA7AAIAAEoIg4AAIAAgcIgBAAQgKASgRAIQgRAHgUAAQgYAAgSgJgAgWgYQgKAGgGAKQgGAIgDANQgCAMAAANQAAAMADANQACAMAHAKQAGAKAKAGQAKAGANAAQAOAAAKgGQAKgGAGgJQAFgKADgNQACgMAAgNQAAgOgCgMQgDgMgGgJQgGgJgJgGQgKgGgOAAQgOAAgKAGg");
	this.shape_19.setTransform(4.175,137.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3283").s().p("AAqBuIAAh4QAAgagIgOQgJgNgVAAQgXAAgLAOQgLAPAAAhIAABvIg7AAIAAjWIA4AAIAAAeIACAAQALgSASgJQARgJASAAQAYAAAPAHQAPAGAJAMQAJAMADAQQAEARAAATIAACDg");
	this.shape_20.setTransform(-19.775,140.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3283").s().p("Ag7BtQgOgDgKgIQgKgIgFgMQgGgMAAgRQAAgSAGgMQAHgMAKgHQAKgGANgEIAbgFIAagEIAWgDQAKgDAGgFQAGgEgBgKQAAgJgDgGQgDgFgFgDQgGgEgGgBIgPgBQgRAAgKAIQgKAHgBASIg7AAQABgVAJgOQAJgNAOgJQAPgIARgEQASgDARAAIAhACQAQACAOAHQAOAHAJAMQAIALAAAUIAABvIACAcQABANAFAHIg8AAIgDgKIgBgLQgOAOgUAGQgSAGgUAAQgPAAgNgEgAAdAIIgMADIgOACIgNACIgNADIgLAGQgFAEgDAFQgDAFAAAJQAAAIADAFQADAFAFADIAMAFIANABQARAAAJgGQAKgGAEgIQAFgIABgIIABgOIAAgVg");
	this.shape_21.setTransform(-43.525,140.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3283").s().p("AhtCUIAAkhIA4AAIAAAbIABAAQALgRARgIQARgIASAAQAaAAASAKQATAJAMAQQALAQAHAVQAFAVAAAXQAAAVgFATQgHAUgLAQQgMAPgSAJQgRAJgYAAQgTAAgRgIQgRgIgKgQIgBAAIAABmgAgZhhQgKAGgFAKQgHAKgCAMQgDANAAANQAAANADAMQADAMAGAJQAGAJAKAGQAKAGAOAAQAOAAAKgGQAJgGAGgJQAGgJACgMQADgMAAgNQAAgNgDgMQgCgNgHgKQgGgKgJgGQgKgGgOAAQgOAAgKAGg");
	this.shape_22.setTransform(-66.9,144.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A3283").s().p("AAsBrIgshEIgtBEIhCAAIBOhwIhHhmIBDAAIAlA4IAmg4IBBAAIhHBlIBQBxg");
	this.shape_23.setTransform(-90.575,140.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A3283").s().p("AhwCUIAAkoIDeAAIAAA3IicAAIAABAICPAAIAAAyIiPAAIAABJICfAAIAAA2g");
	this.shape_24.setTransform(-113.925,136.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ExpandCP, new cjs.Rectangle(-130.7,108.4,244.2,88), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgWBHQgMgDgJgFQgIgFgGgKQgGgJgBgPIAlAAQAAAHACAEQADAFAEACQAEADAFACIAKABIAJgBIAIgDIAGgFQADgEgBgEQAAgJgLgFQgLgEgUgFIgQgEQgJgCgFgEQgHgEgDgGQgEgHgBgJQAAgNAGgIQAFgJAJgGQAIgEALgCQALgDALAAQALAAALADQAKACAJAFQAIAFAFAJQAFAIACANIglAAQgBgLgHgEQgHgDgKgBIgHAAIgGACIgGAFQgCACAAAEQAAAGADADQAEADAGACIAOAEIAQADIAPAEQAJADAGAFQAGADAEAHQADAGAAAKQABAOgGAJQgFAJgKAHQgIAFgMACQgLADgMAAQgLAAgMgDg");
	this.shape.setTransform(115.9,52.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgsBIIAAiLIAlAAIAAAaIAAAAQADgGAEgGQAEgFAGgEQAGgEAGgCQAHgDAIAAIAIACIAAAjIgHgBIgHAAQgKAAgIADQgHAEgEAGQgEAGgCAIQgCAIAAAJIAAA/g");
	this.shape_1.setTransform(103.35,52.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AgbBEQgOgFgJgKQgJgJgFgOQgFgOAAgPQAAgQAFgNQAFgNAKgKQAJgKANgFQANgGAPgBQASABANAGQAOAIAIALQAJAMADAOQAEAPgBAQIhkAAQABASAJAJQAIAIAQAAQALAAAJgGQAIgGACgGIAiAAQgIAZgRAKQgRAMgYAAQgPgBgNgFgAgOgoQgGADgEAFQgDAEgCAFIgCAJIA+AAQgDgPgHgHQgHgIgOABQgIAAgGADg");
	this.shape_2.setTransform(88.96,52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AAGBaQgHgBgGgDQgGgEgEgGQgDgHAAgKIAAhSIgYAAIAAgZIAYAAIAAgrIAlAAIAAArIAcAAIAAAZIgcAAIAABEQAAAKADADQADADAKAAIAGAAIAGgBIAAAeIgLABIgLAAg");
	this.shape_3.setTransform(75.575,50.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AAbBIIAAhOQAAgRgFgJQgGgIgNAAQgPAAgHAJQgHAJAAAWIAABIIgnAAIAAiLIAlAAIAAAUIABAAQAHgNAMgFQAKgGAMAAQAQAAAKAFQAJAEAHAHQAFAIACAKQACALABANIAABVg");
	this.shape_4.setTransform(62.2,52.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgSBgIAAiKIAlAAIAACKgAgShAIAAgfIAlAAIAAAfg");
	this.shape_5.setTransform(49.975,49.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgsBIIAAiLIAkAAIAAAaIABAAQADgGAEgGQAEgFAGgEQAGgEAHgCQAGgDAHAAIAJACIAAAjIgGgBIgIAAQgLAAgGADQgIAEgFAGQgDAGgBAIQgCAIAAAJIAAA/g");
	this.shape_6.setTransform(41.2,52.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AhMBgIAAi/IBWAAQASAAANAFQAMAFAJAJQAHAIAEALQAEALAAAMQAAAMgEALQgEALgHAIQgJAJgMAFQgNAFgSAAIgsAAIAABFgAgigFIAiAAIAMgBQAHgBAGgDQAEgDAEgGQADgGAAgJQAAgJgDgGQgEgFgEgDQgGgDgHgBIgMgCIgiAAg");
	this.shape_7.setTransform(26.05,49.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgOBdQgNgEgFgMIgBAAIAAASIgkAAIAAjAIAmAAIAABGIAAAAQAIgLALgFQAMgFANAAQAKAAAKAEQALAFAHAJQAJAIAFAOQAGAOgBATQABASgGAPQgFAOgJAIQgHAJgLAFQgKAEgKAAQgPAAgMgFgAgOgQQgHAFgDAGQgFAFgCAIQgBAIAAAJQAAAIABAJQACAHAFAHQADAGAHAEQAGADAIABQAIgBAGgDQAGgEAEgGQAEgHACgHQACgJAAgIQAAgJgCgIQgCgIgEgFQgEgGgGgFQgGgDgIAAQgIAAgGADg");
	this.shape_8.setTransform(-0.45,49.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AgnBDQgJgDgGgIQgGgHgCgLQgCgKAAgOIAAhUIAmAAIAABNQAAARAFAJQAGAJAOgBQAOAAAHgJQAHgJAAgVIAAhIIAmAAIAACKIgkAAIAAgUIgBAAQgHAMgLAGQgLAGgNAAQgPAAgKgFg");
	this.shape_9.setTransform(-17.7,52.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("AgdBhQgPgEgMgJQgLgIgHgNQgHgNABgRIApAAQAAAJADAHQAEAHAGAEQAFAEAIACQAIACAHAAIANgBQAGgBAGgDQAFgCAEgFQAEgFAAgHQAAgHgFgFQgFgGgIgCIgTgHIgTgFIgVgGQgLgFgIgEQgIgHgFgJQgFgJAAgOQAAgPAGgLQAHgKAKgIQAKgHANgEQANgDANAAQAOAAAOADQAOAEALAHQALAIAGAMQAHAMAAAQIgpAAQgBgIgDgGQgDgGgFgDQgFgEgHAAIgOgCIgKABQgFABgEADQgEACgDAFQgDAEAAAGQAAAGACADQADADAGAEIASAFIAcAIIAPAEQAJADAKAGQAJAFAHAKQAHALAAAQQAAANgFAMQgFALgKAIQgKAJgPAEQgQAFgTAAQgPAAgPgEg");
	this.shape_10.setTransform(-35.1767,49.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AgnAQIAAgfIBQAAIAAAfg");
	this.shape_11.setTransform(-50.15,51.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgbBEQgOgFgJgKQgJgJgFgOQgFgOAAgPQAAgQAFgNQAFgNAKgKQAJgKANgFQANgGAPgBQASABANAGQAOAIAIALQAJAMADAOQAEAPgBAQIhkAAQABASAJAJQAIAIAQAAQALAAAJgGQAIgGACgGIAiAAQgIAZgRAKQgRAMgYAAQgPgBgNgFgAgOgoQgGADgEAFQgDAEgCAFIgCAJIA+AAQgDgPgHgHQgHgIgOABQgIAAgGADg");
	this.shape_12.setTransform(-64.09,52.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3283").s().p("AgtBeIgMgBIAAggIALABIALABQAIgBADgFQAEgGAAgGQAAgEgBgEIgyiCIAqAAIAeBeIAAAAIAfheIAnAAIg5CcQgHARgKAHQgLAHgUAAg");
	this.shape_13.setTransform(-79.6,54.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3283").s().p("AhUBgIAAi/IBTAAQASAAAQAFQAPAGAMAMQAMAMAGASQAIASAAAYQgBAUgFASQgGASgLAMQgKANgRAIQgQAHgVAAgAgqA9IAmAAQAIAAAJgDQAIgDAHgHQAHgHAEgLQAEgLAAgQQAAgOgDgLQgDgMgGgJQgHgIgKgEQgLgFgPAAIgeAAg");
	this.shape_14.setTransform(-96.95,49.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_DyeSub, new cjs.Rectangle(-109.3,30.9,235.39999999999998,36.199999999999996), null);


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
	this.shape.graphics.f("#2A3283").s().p("AgfAfIAAg9IA/AAIAAA9g");
	this.shape.setTransform(113.3,182.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3283").s().p("AgpB4QgTgFgOgKQgPgLgIgPQgHgQgBgVIA0AAQADAXAPAKQAPAJAUAAIARgBIASgFQAIgDAFgGQAGgGgBgLQAAgKgHgGQgHgGgLgEIgZgHIgbgGIgcgIQgNgEgLgHQgLgIgGgMQgHgMAAgSQAAgUAJgNQAKgNAOgIQAPgIASgDQARgDAQAAQASAAARADQAQAEAOAJQAOAJAJAOQAJAOACAUIg3AAQgEgTgNgHQgOgGgQAAIgNABIgPADQgGADgFAFQgEAFAAAHQAAAKAGAGQAHAGALAEIAXAHIAdAFIAcAIQAOAFAKAIQALAGAHANQAHALAAASQAAAVgKAPQgKAPgPAJQgQAJgTAEQgSAEgSAAQgWAAgTgFg");
	this.shape_1.setTransform(95.075,173.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3283").s().p("AguB0QgWgJgPgRQgPgQgIgXQgHgXAAgcQAAgYAIgXQAIgXAPgRQAPgRAVgKQAVgKAaAAQAcAAAWALQAWAMAPATQAPAUAHAZQAGAZgDAZIiuAAQAAAOAEANQAEANAIAKQAIAJAMAGQAMAGAPAAQAXAAAOgKQAOgKAHgUIAyAAQgEATgKAQQgLAPgOAKQgOALgSAFQgRAFgUAAQgbAAgVgJgAA9gUQgBgNgFgLQgEgLgIgJQgHgJgLgFQgLgFgNAAQgNAAgLAFQgLAFgJAIQgIAJgEALQgFAMgBANIB6AAIAAAAg");
	this.shape_2.setTransform(70.3724,173.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3283").s().p("AgZCkIAAjtIAzAAIAADtgAgZhxIAAgyIAzAAIAAAyg");
	this.shape_3.setTransform(51.725,168.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3283").s().p("AACCYQgLgEgHgHQgIgIgCgLIgDgbIAAiMIgoAAIAAgmIAoAAIAAhIIAzAAIAABIIAwAAIAAAmIgwAAIAAB/IABAOIADAKQADAEAFADIAOABIALAAIALgBIAAAoIgRACIgRABQgVAAgNgEg");
	this.shape_4.setTransform(38.125,170);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3283").s().p("AgZCkIAAjtIAzAAIAADtgAgZhxIAAgyIAzAAIAAAyg");
	this.shape_5.setTransform(25.175,168.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3283").s().p("AgZCkIAAlHIAzAAIAAFHg");
	this.shape_6.setTransform(14.025,168.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3283").s().p("AgZCkIAAjtIAzAAIAADtgAgZhxIAAgyIAzAAIAAAyg");
	this.shape_7.setTransform(2.875,168.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3283").s().p("AgICmQgMgCgLgEQgLgFgJgIQgJgGgGgNIgBAAIAAAhIgyAAIAAlIIA1AAIAAB6IABAAQAFgJAIgHIARgLIAUgIIATgCQAdAAAUAKQAVAKAOARQAOARAHAXQAHAWAAAbQAAAXgGAXQgHAWgMARQgNASgTAKQgUALgaAAgAgxgSQgRAWAAAnQAAARAEAPQAFAQAIALQAJALAMAGQAMAHAQAAQARAAANgHQAMgIAIgMQAIgLAEgPQADgPAAgPQAAgRgEgPQgEgOgIgMQgIgLgNgIQgMgHgQAAQghAAgQAXg");
	this.shape_8.setTransform(-16.175,169.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3283").s().p("AA7B3QgLgHgDgQQgQAPgWAHQgXAHgUAAQgQAAgPgEQgPgEgLgJQgLgJgHgNQgGgNAAgRQAAgWAHgOQAJgOAMgHQAOgIAQgDIAggFIAbgEIAXgEQAJgDAGgGQAGgFAAgMQAAgKgFgHQgEgGgIgDIgQgFIgPgBQgXAAgOAJQgOAJgBAUIg1AAQABgXAKgQQAJgPAQgJQAOgJAUgEQATgDATAAQAQAAASADQAQAEAOAIQANAIAJANQAJAOgBATIAAB5QAAAJADAFQACAEAIAAIAFAAIAHgBIAAAkIgHACIgJACIgJACIgHAAQgRAAgKgGgAALAJIgiAFIgPAEIgPAHQgFAEgEAHQgEAHABAKQgBAJAGAGQAFAGAHAEIAPAEIAQACIASgDQAKgCAJgFQAJgGAGgIQAGgJAAgMIAAgnQgMAHgSACg");
	this.shape_9.setTransform(-43.15,173.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3283").s().p("Ah1CmIAAlFIAyAAIAAAgIABAAQALgVAUgIQAUgJAVAAQAdAAAUAKQAVAKAOARQAOARAHAXQAHAXAAAbQAAAXgGAWQgHAWgMARQgNASgTAKQgUALgaAAIgWgDIgWgGQgLgFgIgHQgJgHgGgKIgBAAIAAB3gAgxhlQgRAXAAAnQAAARAEAPQAFAPAIALQAJALAMAGQAMAHAQAAQARAAANgHQAMgIAIgMQAIgLAEgOQADgPAAgPQAAgRgEgPQgEgPgIgMQgIgLgNgIQgMgHgQAAQghAAgQAXg");
	this.shape_10.setTransform(-70.025,177.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3283").s().p("AA7B3QgLgHgDgQQgQAPgXAHQgVAHgVAAQgRAAgOgEQgPgEgLgJQgMgJgGgNQgHgNABgRQgBgWAIgOQAJgOANgHQAMgIARgDIAhgFIAagEIAWgEQALgDAFgGQAGgFAAgMQAAgKgFgHQgFgGgGgDIgRgFIgPgBQgXAAgOAJQgOAJgCAUIg0AAQACgXAJgQQAJgPAPgJQAQgJASgEQAUgDATAAQAQAAARADQASAEAOAIQANAIAIANQAIAOAAATIAAB5QABAJACAFQADAEAGAAIAGAAIAIgBIAAAkIgIACIgJACIgJACIgIAAQgPAAgLgGgAALAJIgiAFIgQAEIgNAHQgHAEgDAHQgEAHAAAKQAAAJAGAGQAFAGAHAEIAPAEIAQACIASgDQAKgCAJgFQAJgGAGgIQAGgJAAgMIAAgnQgMAHgSACg");
	this.shape_11.setTransform(-97,173.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3283").s().p("AgtB0QgWgKgOgQQgPgQgIgXQgHgWAAgbQAAgZAHgYQAIgXAOgSQAPgRAWgKQAWgJAcAAQAVAAASAFQATAFAOALQAPAKAJAQQAKAQABAWIg0AAQgDgWgPgLQgOgLgWAAQgJAAgMADQgLAEgKAJQgKAKgGAQQgHARAAAaQAAAPAEAPQADAOAIAMQAHAMAMAHQAMAHAQAAQAXAAAPgOQAPgPAEgZIA0AAQgHAugcAZQgcAYguAAQgbAAgVgJg");
	this.shape_12.setTransform(-123.175,173.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_capabilites, new cjs.Rectangle(-138,138.5,260,58.900000000000006), null);


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
	this.shape.graphics.f("#2A3283").s().p("AIzC1QAHgCAHgEIALgKIAHgOQACgIAAgHIgiAAIAAhKIBLAAIAABKQAAAQgGAOQgGAOgKAKQgKAKgOAHQgOAGgPACgABTCJQgagIgVgOQgUgPgMgXQgLgXAAggIBIAAQAAARAGAMQAHAMAKAIQAKAIAOADQAOADAPAAIAWgBQALgBAKgGQAKgFAHgHQAHgJAAgNQAAgOgJgJQgJgIgOgGIhrgeQgTgIgOgKQgOgMgJgQQgJgQAAgZQAAgaALgTQALgUATgMQASgNAXgHQAXgGAXAAQAbAAAYAGQAZAGAUAOQATANALAVQALAVAAAdIhJAAQgBgPgFgKQgGgKgJgGQgJgGgMgCIgZgDIgTACQgJADgHAEQgIAFgEAIQgFAGAAAMQAAAJAEAHQADAGAMAGIBuAeQARAFARAMQAQAKANATQAMARAAAdQAAAXgJAVQgKAUgSAPQgRAOgbAJQgbAHgjABQgcgBgbgGgAGQCIIAAkWIhmAAIAAg/IEYAAIAAA/IhnAAIAAEWgAk2CIIAAlVIEAAAIAAA/Ii1AAIAABJICmAAIAAA6IimAAIAABUIC5AAIAAA/gAp9CIIAAlVICiAAQAYAAAUADQAUAFAPAKQAOAKAIAQQAIAQAAAYQAAAagMASQgLAQgXALQAfAKAQAXQAPAVAAAhQAAAZgKAUQgKASgRAMQgRAMgWAGQgWAGgXAAgAoxBNIBQAAIAVgCQALgCAHgFQAIgFAEgIQAFgJAAgOQAAgagPgLQgPgLgYABIhSAAgAoxhDIBMAAQAUAAANgKQANgJAAgVQAAgNgEgIQgFgHgHgFQgHgEgJgCIhagBg");
	this.shape.setTransform(-68.9482,22.3737,1.4073,1.4073);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_best, new cjs.Rectangle(-158.7,-30.6,227.39999999999998,83.30000000000001), null);


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
	mask.graphics.p("AjmKyQhHgEhxgzQh4g3hehNQhuhagkhbQgqhrBChfQB3inF/lSIFlkwIBUAHQBlAMBcAWQEkBJBRCcQBSCdh7FBQg9ChhOCCQidBYi0BWQlaCmh1AAIgJAAg");
	mask.setTransform(63.1494,384.0868);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-144.25,86.6,0.9036,0.9036);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.socks_mc, new cjs.Rectangle(-16,315.1,158.3,137.5), null);


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
	mask.graphics.p("AuNS1IAsxMQAqxLgGAAID6AAICqjSIHzBQIF8CWIBEBnQBRB/BEB6QDZGGAGC8IgTAxQgYA8gZAyQhTCghFAAIjIgyIgGBpQgFCDAFB/QASGVB2DUg");
	mask.setTransform(-43.975,336.575);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-115.95,69.7,0.95,0.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_mc, new cjs.Rectangle(-115.9,216.1,163,238.4), null);


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
	mask.setTransform(14.3651,10.9047);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-256.05,-192.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redCup_mc, new cjs.Rectangle(-40.6,-40.9,102.6,103.69999999999999), null);


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
	this.instance.setTransform(-371.3,77,1.2655,1.2655);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.purple_Printer_mc, new cjs.Rectangle(-371.3,77,580.9,353.1), null);


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
	mask.graphics.p("EgmUgYVIMkDQQABgUAJgWQAVgqAzgDMAreAAAIDSALQBAAGAZANQAOAJAOAPQAcAeAAAhIAEDDIAOgMQARgJAIAQQALAWAIAKQAKANASAMQAWAOAeAsQAfAvAAAZIAEEmIKNMoIBpTFMhOTACxg");
	mask.setTransform(-10.8,-13.85);

	// Layer_3
	this.instance = new lib.purplePrinter();
	this.instance.setTransform(-242.35,-158.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_03, new cjs.Rectangle(-242.3,-158.9,459,279), null);


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
	this.instance.setTransform(-92.95,80.45,0.683,0.683);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.printer();
	this.instance_1.setTransform(-172,51.2,1.0528,1.0528);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_01_mc, new cjs.Rectangle(-172,51.2,334.8,156.89999999999998), null);


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
	mask.graphics.p("ArKEiIC0rZQE7AjE5AkQJ0BJgHAGIhaNvg");
	mask.setTransform(12.5283,59.025);

	// Layer_1
	this.instance = new lib.items();
	this.instance.setTransform(-188.65,-16.9,0.9036,0.9036);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouseMat_mc, new cjs.Rectangle(-59,15,143.1,103.1), null);


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
	this.shape.graphics.f("#2A3283").s().p("ABCA+QgNgFgHgJQgIgJgFgMQgEgMAAgOQAAgOAEgMQAFgMAIgKQAHgJANgFQAMgFAOgBQAPABAMAFQAMAFAIAJQAIAKAFAMQADAMAAAOQAAAOgDAMQgFAMgIAJQgIAJgMAFQgMAFgPABQgOgBgMgFgABMgnQgHAEgEAGQgEAGgCAJQgCAHAAAIQAAAIACAHQACAIAEAHQAEAFAHAEQAHAEAJAAQAKAAAHgEQAGgEAFgFQADgHACgIQACgHAAgIQAAgIgCgHQgCgJgDgGQgFgGgGgEQgHgEgKAAQgJAAgHAEgAg1BBQgKgDgIgFQgIgGgEgJQgFgJABgLIAbAAQAAAGACAFQADAEAEADQADADAGABIAKACIAIgBQAFAAAEgDQADgBADgDQADgEAAgEQAAgGgEgDIgIgGIgpgLQgHgDgFgDQgFgEgEgHQgDgFAAgJQAAgKAEgIQAEgHAHgFQAHgFAJgCQAIgCAJgBQAKAAAJACQAKADAGAFQAHAFAEAIQAEAIAAAMIgaAAQAAgHgCgEIgFgFQgEgDgFAAIgJgCIgHABIgGADIgFAEQgCADAAAEQAAAEACACQABACAEADIAqAMIALAFQAHADAEAHQAFAIAAAKQAAAJgEAHQgDAIgHAGQgGAFgKAEQgJACgOABQgKgBgKgCgAD3BBIg2hWIAABWIgaAAIAAiAIAcAAIA2BVIAAAAIAAhVIAaAAIAACAgAjOBBIAAiAIA7AAQAMAAAIAEQAIACAGAHQAFAFACAIQADAHAAAIQAAAIgDAIQgCAGgFAFQgGAGgIAEQgIAEgMAAIgeAAIAAAugAixgDIAfAAIAIgDQAEgCACgFQABgDAAgGQAAgGgBgEQgCgEgEgCIgIgCIgfgBgAlBBBIAAiAIBgAAIAAAXIhDAAIAAAbIA+AAIAAAVIg+AAIAAAhIBFAAIAAAYgAEvgmIgFgCIgDgGIgBgFIABgGIADgEQACgDADgBIAFgBIAFABQADABACADIADAEIABAGIgBAFIgDAGIgFACIgFABIgFgBgAEwg9IgEACIgCADIgBAFIABAEIACAEIAEADIAEAAIAEAAIAEgDIACgEIAAgEIAAgFIgCgDIgEgCIgEgBIgEABgAE3grIgEgHIgCAAIAAAHIgDAAIAAgQIAGAAIAFABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAIgBADIgBABIgBABIgCAAIAFAHgAExg0IADAAIACAAIABgDIAAgBIgBgBIgFAAg");
	this.shape.setTransform(31.8433,11.2,1.7306,1.7306);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-23.8,-0.5,111.39999999999999,23.4), null);


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
(lib.Epson_FSeries_300x600 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,299.9992,1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(289));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(40.45,18.35,0.9135,0.9135,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.9609},7).wait(282));

	// cta_btn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_257 = new cjs.Graphics().p("ApZDcQhaAAAAhaIAAAAIAAkDQAAhaBaAAIAAAAISzAAQBaAAAABaIAAAAIAAEDQAABahaAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(257).to({graphics:mask_graphics_257,x:140.4873,y:557.2998}).wait(32));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16.1,-10.6,15.9,10.4).s().p("Ap0JiIOn2WIFCDTIuoWWg");
	this.shape_1.setTransform(48.125,530);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16.1,-10.6,15.9,10.3).s().p("ApzJiIOm2UIFBDRIunWVg");
	this.shape_2.setTransform(49.75,530.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16.1,-10.5,15.8,10.3).s().p("ApxJfIOj2OIE/DQIuiWPg");
	this.shape_3.setTransform(54.65,531.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-16,-10.5,15.7,10.2).s().p("ApsJbIOc2FIE9DPIucWGg");
	this.shape_4.setTransform(62.775,534.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.8,-10.4,15.6,10.1).s().p("ApnJWIOU14IE7DOIuUV3g");
	this.shape_5.setTransform(74.175,537.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.6,-10.3,15.4,10).s().p("ApfJPIOI1oIE3DLIuJVog");
	this.shape_6.setTransform(88.825,542.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.4,-10,15.1,9.9).s().p("ApWJGIN71TIEyDIIt7VTg");
	this.shape_7.setTransform(106.725,547.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-15.1,-9.9,14.9,9.7).s().p("ApMI8INs07IEtDEItsU7g");
	this.shape_8.setTransform(127.875,553.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.8,-9.7,14.6,9.5).s().p("ApAIwINa0gIEnDBItbUgg");
	this.shape_9.setTransform(151.5,560.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.5,-9.5,14.3,9.4).s().p("Ao1ImINK0IIEiC9ItMUIg");
	this.shape_10.setTransform(172.65,567.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.3,-9.3,14.1,9.2).s().p("AosIdIM9zzIEdC6Is+Tzg");
	this.shape_11.setTransform(190.55,572.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-14.1,-9.2,13.9,9.1).s().p("AolIWIMyziIEZC3IsyTig");
	this.shape_12.setTransform(205.2,577.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.9,-9.1,13.8,9).s().p("AofIQIMqzVIEWC2IsqTVg");
	this.shape_13.setTransform(216.6,580.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.8,-9,13.8,9).s().p("AobINIMkzNIETC1IsjTMg");
	this.shape_14.setTransform(224.725,582.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.8,-9,13.6,8.9).s().p("AoZILIMgzHIETC0IsgTGg");
	this.shape_15.setTransform(229.625,584.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-13.7,-9,13.6,8.9).s().p("AoYIJIMfzEIESCzIsfTEg");
	this.shape_16.setTransform(231.25,584.9);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},257).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(17));

	// learnMore_CTA
	this.instance_1 = new lib.learnMore_CTA();
	this.instance_1.setTransform(140.6,557.45,1.4913,1.4913,0,0,0,0.1,0.1);
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
	this.instance_4.setTransform(264.85,447.55,0.5779,0.5779,0,0,0,0.2,0.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(241).to({_off:false},0).to({x:154.85,alpha:1},9,cjs.Ease.quadOut).wait(39));

	// fortyFour_in
	this.instance_5 = new lib.fortyFour_in();
	this.instance_5.setTransform(393.1,125.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(241).to({_off:false},0).to({x:283.1,alpha:1},9,cjs.Ease.quadOut).wait(39));

	// printer_02_mc
	this.instance_6 = new lib.printer_02_mc();
	this.instance_6.setTransform(16.45,257.1,0.8657,0.8657,0,0,0,0.2,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.yellow_print();
	this.instance_7.setTransform(75.55,350.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},238).to({state:[{t:this.instance_6},{t:this.instance_7}]},9).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(238).to({_off:false},0).to({x:131.45,alpha:1},9,cjs.Ease.quadOut).wait(42));

	// sixtyFour_in
	this.instance_8 = new lib.sixtyFour_in();
	this.instance_8.setTransform(-100.4,150.55);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(238).to({_off:false},0).to({x:14.6,alpha:1},9,cjs.Ease.quadOut).wait(42));

	// txt_PrintWithThe
	this.instance_9 = new lib.txt_PrintWithThe();
	this.instance_9.setTransform(209.9,84.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(201).to({_off:false},0).to({y:103.9,alpha:1},3,cjs.Ease.quadOut).wait(26).to({x:289.9,alpha:0},7,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// txt_toMake
	this.instance_10 = new lib.txt_toMake();
	this.instance_10.setTransform(267.2,102.85);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(166).to({_off:false},0).to({x:207.2,alpha:1},9,cjs.Ease.quadOut).wait(25).to({y:114.85,alpha:0},3,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// txt_best
	this.instance_11 = new lib.txt_best();
	this.instance_11.setTransform(272.7,136.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(166).to({_off:false},0).to({x:212.7,alpha:1},9,cjs.Ease.quadOut).wait(55).to({x:292.7,alpha:0},7,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// purple_Printer_mc
	this.instance_12 = new lib.purple_Printer_mc();
	this.instance_12.setTransform(16,145.05);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(166).to({_off:false},0).to({x:76,alpha:1},9,cjs.Ease.quadOut).wait(55).to({x:6,alpha:0},7,cjs.Ease.quadIn).to({_off:true},1).wait(51));

	// txt_highSpeed
	this.instance_13 = new lib.txt_highSpeed();
	this.instance_13.setTransform(134.65,55.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(116).to({_off:false},0).to({x:144.65,alpha:1},10,cjs.Ease.quadOut).wait(33).to({scaleX:0.6694,scaleY:0.6694,x:147.55,y:83.85,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// txt_flourescent_ink
	this.instance_14 = new lib.txt_flourescent_ink();
	this.instance_14.setTransform(146.25,82.75);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(121).to({_off:false},0).to({x:156.25,alpha:1},10,cjs.Ease.quadOut).wait(28).to({scaleX:0.6694,scaleY:0.6694,x:155.3,y:102.05,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// txt_goWith
	this.instance_15 = new lib.txt_goWith();
	this.instance_15.setTransform(136.2,55.1);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).to({x:146.2,alpha:1},10,cjs.Ease.quadOut).wait(29).to({x:160.7,alpha:0},9,cjs.Ease.quadIn).wait(176));

	// txt_printingLeader
	this.instance_16 = new lib.txt_printingLeader();
	this.instance_16.setTransform(136.7,79.85);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(69).to({_off:false},0).to({x:146.7,alpha:1},10,cjs.Ease.quadOut).wait(28).to({x:161.2,alpha:0},9,cjs.Ease.quadIn).wait(173));

	// printer_01_mc
	this.instance_17 = new lib.printer_01_mc();
	this.instance_17.setTransform(153.65,197.2,0.7941,0.7941,0,0,0,0.2,0.2);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(65).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.9503,scaleY:0.9503,x:153.6,y:177.15,alpha:1},10,cjs.Ease.quadOut).wait(84).to({scaleX:0.6361,scaleY:0.6361,x:153.55,y:165.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(121));

	// txt_capabilites
	this.instance_18 = new lib.txt_capabilites();
	this.instance_18.setTransform(162,159.6);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(23).to({_off:false},0).to({y:150.6,alpha:1},8,cjs.Ease.quadInOut).wait(25).to({alpha:0},8).to({_off:true},1).wait(224));

	// shirt_mc
	this.instance_19 = new lib.shirt_mc();
	this.instance_19.setTransform(84,181);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({_off:false},0).to({x:115,y:154.05,alpha:1},11,cjs.Ease.quadInOut).wait(21).to({alpha:0},8).to({_off:true},1).wait(224));

	// yellowCup_mc
	this.instance_20 = new lib.yellowCup_mc();
	this.instance_20.setTransform(62,293.05);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(23).to({_off:false},0).to({x:65,y:253.05,alpha:1},11,cjs.Ease.quadInOut).wait(22).to({alpha:0},8).to({_off:true},1).wait(224));

	// mouseMat_mc
	this.instance_21 = new lib.mouseMat_mc();
	this.instance_21.setTransform(150,-3.95);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(26).to({_off:false},0).to({x:139,y:46.05,alpha:1},11,cjs.Ease.quadInOut).wait(19).to({alpha:0},8).to({_off:true},1).wait(224));

	// txt_ExpandCP
	this.instance_22 = new lib.txt_ExpandCP();
	this.instance_22.setTransform(159.25,107.4);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(3).to({_off:false},0).to({alpha:1},12,cjs.Ease.quadInOut).wait(41).to({alpha:0},8).to({_off:true},1).wait(224));

	// socks_mc
	this.instance_23 = new lib.socks_mc();
	this.instance_23.setTransform(312.55,266.95,1,1,0,0,0,75,55);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({_off:false},0).to({x:254.55,y:212.95,alpha:1},9,cjs.Ease.quadInOut).wait(43).to({alpha:0},8).to({_off:true},1).wait(224));

	// redCup_mc
	this.instance_24 = new lib.redCup_mc();
	this.instance_24.setTransform(346.5,52.45,1,1,0,0,0,24,-85);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({x:282.5,y:74.45,alpha:1},11,cjs.Ease.quadInOut).wait(45).to({alpha:0},8).to({_off:true},1).wait(224));

	// waterBottle_mc
	this.instance_25 = new lib.waterBottle_mc();
	this.instance_25.setTransform(-32.95,93.55,1,1,0,0,0,-83.5,-58);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({_off:false},0).to({x:37.05,alpha:1},12,cjs.Ease.quadInOut).wait(43).to({alpha:0},8).to({_off:true},1).wait(224));

	// background
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_17.setTransform(150,299.9992,1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(289));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,245,618.9000000000001,465.6);
// library properties:
lib.properties = {
	id: 'B61A9D64C8DF436F89671266C87EE568',
	width: 300,
	height: 600,
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