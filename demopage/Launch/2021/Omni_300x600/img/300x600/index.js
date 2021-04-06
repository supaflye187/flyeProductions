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



(lib.birthday_img = function() {
	this.initialize(img.birthday_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,339);


(lib.golf_img = function() {
	this.initialize(img.golf_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1081,722);


(lib.pool_img = function() {
	this.initialize(img.pool_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,842,568);


(lib.putt_img = function() {
	this.initialize(img.putt_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,509,339);// helper functions:

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


(lib.txt_youPaused = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7F7A00").s().p("AGnBWIATgbQAaAVAmAAQAuAAAAgeQAAgNgLgHQgLgIgfgJQgngLgRgNQgTgPAAgYQAAgdAWgQQAWgRAnAAQA4AAAXAWIgTAdQgWgSgmAAQgsAAAAAbQAAALALAHQALAHAeAIQApALASAPQARAPAAAZQAAAdgUASQgWATgqAAQg5AAgbgbgADWBWQgZgbAAgrIAAh7IAkAAIAAB7QAAAcAOAQQAQATAcAAQAdAAAPgTQAOgQAAgcIAAh7IAkAAIAAB7QAAArgYAbQgaAbgsAAQgrAAgagbgAoYBWQgZgbAAgrIAAh7IAkAAIAAB7QAAAcAOAQQAQATAcAAQAdAAAPgTQAOgQAAgcIAAh7IAkAAIAAB7QAAArgYAbQgaAbgsAAQgrAAgagbgAstBQQgeggAAgwQAAgvAeggQAgghAzAAQAzAAAgAhQAeAgAAAvQAAAwgeAgQggAhgzAAQgzAAggghgAsRg3QgVAWAAAhQAAAiAVAWQAVAWAiAAQAiAAAWgWQAVgWAAgiQAAghgVgWQgWgXgiAAQgiAAgVAXgANgBsIAAjXIBRAAQA0AAAgAeQAfAdAAAwQAAAwgfAeQggAeg0AAgAOEBMIAqAAQAkAAAWgUQAXgUAAgkQAAgjgXgVQgWgUgkAAIgqAAgAJ9BsIAAjXICkAAIAAAfIiBAAIAAA/IBtAAIAAAdIhtAAIAAA8ICBAAIAAAggACABsIgQghIhwAAIgPAhIgoAAIBsjXIAGAAIBuDXgABiAuIgCgEIgnhTIgCAAIgnBTIgCAEIBUAAgAjxBsIAAjXIBeAAQApAAAXATQAXATAAAjQAAAjgZAVQgYATgoAAIg5AAIAABDgAjOAKIA5AAQA1AAAAgrQAAgVgPgLQgNgLgZAAIg5AAgAvRBsIAAhTIhSiEIAqAAIAzBUIAGANIAEAAIAGgNIAyhUIApAAIhSCEIAABTg");
	this.shape.setTransform(-0.575,2.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_youPaused, new cjs.Rectangle(-106.5,-8.7,211.9,22.5), null);


(lib.txt_nowPlay = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7F7A00").s().p("ApBBQQgfggAAgwQAAgvAfggQAgghAyAAQA0AAAfAhQAfAgAAAvQAAAwgfAgQgfAhg0AAQgyAAggghgAomg3QgVAWAAAhQAAAiAVAWQAWAWAhAAQAjAAAVgWQAVgWAAgiQAAghgVgWQgVgXgjAAQghAAgWAXgALcBsIAAhTIhSiEIApAAIAzBUIAGANIAEAAIAGgNIAzhUIApAAIhSCEIAABTgAJ5BsIgQghIhwAAIgQAhIgoAAIAAgBIBtjWIAGAAIBuDXgAJbAuIgCgEIgnhTIgCAAIgnBTIgCAEIBUAAgAEYBsIAAjXIAjAAIAAC3IB4AAIAAAggAAzBsIAAjXIBeAAQApAAAXATQAXATAAAjQAAAjgYAVQgYATgpAAIg4AAIAABDgABXAKIA5AAQA0AAAAgrQAAgVgOgLQgOgLgYAAIg5AAgAikBsIgtiRIgCAAIguCRIgRAAIhSjXIAlAAIAzCRIADAAIAwiRIAPAAIAvCRIADAAIAyiRIAmAAIhSDXgAqYBsIiViQIAACQIgkAAIAAjXIAKAAICVCNIAAiNIAkAAIAADXg");
	this.shape.setTransform(1.675,32.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_nowPlay, new cjs.Rectangle(-83.3,21,170,22.6), null);


(lib.txt_15Off = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7F7A00").s().p("AIBC/IAPgXQAVARAfAAQAkAAAAgYQABgKgKgGQgIgGgZgIQgggJgOgKQgOgNAAgTQAAgXARgOQARgNAgABQAtAAATARIgQAXQgRgOgfAAQgjAAAAAVQAAAKAJAFQAIAGAZAGQAhAJAOANQAOAMAAAUQAAAYgQAOQgSAPgiAAQguAAgVgVgArlC+QgTgVgBgjIAAhkIAdAAIAABkQAAAXAMANQANAOAWAAQAXAAAMgOQAMgNAAgXIAAhkIAdAAIAABkQAAAjgUAVQgUAWgkAAQgiAAgWgWgAvJC5QgYgZgBgmQABgoAYgZQAZgbApABQAqgBAaAbQAYAZAAAoQAAAmgYAZQgaAbgqAAQgpAAgZgbgAuzBMQgRASAAAcQAAAaARASQARASAbAAQAcAAARgSQARgSAAgaQAAgcgRgSQgRgSgcAAQgbAAgRASgAQvDQIAAhDIhDhrIAiAAIApBEIAFAKIADAAIAFgKIAohEIAiAAIhCBrIAABDgAPLDQIgNgaIhaAAIgNAaIghAAIBYiuIAFAAIBZCugAOzCeIghhHIgCAAIgfBEIgCADIBEAAgALiDQIAAiVIg7AAIAAgZICSAAIAAAZIg6AAIAACVgAFTDQIAAiVIg6AAIAAgZICSAAIAAAZIg6AAIAACVgADWDQIgmg8IgHgOIgGAOIgnA8IghAAIA5hZIg4hVIAjAAIAlA5IAGANIAGgNIAkg5IAjAAIg4BVIA6BZgAhGDQIAAiuICDAAIAAAZIhmAAIAAAzIBXAAIAAAYIhXAAIAAAxIBmAAIAAAZgAiCDQIh4h0IAAB0IgdAAIAAiuIAHAAIB5BzIAAhzIAdAAIAACugAmuDQIgrg3IgyAAIAAA3IgdAAIAAiuIBMAAQAhAAASAQQAUAPgBAcQAAAngkAPIAAABIArA4IAAAEgAoLCAIAwAAQAoAAAAgiQAAgRgLgJQgMgJgTAAIguAAgAxLDQIAAhDIhChrIAiAAIAoBEIAFAKIADAAIAFgKIAphEIAhAAIhCBrIAABDgAFVg4QgZgaABgmQgBgnAZgZQAagbApAAQApAAAZAbQAZAZAAAnQAAAmgZAaQgZAbgpgBQgpABgagbgAFrimQgRASAAAcQAAAbARARQASASAbAAQAbAAASgSQAQgRABgbQgBgcgQgSQgSgRgbgBQgbABgSARgAiDg2IAPgWQAVAUAbgBQASAAAKgIQALgIgBgOQAAgOgKgIQgLgIgVAAQgaAAgOAGIgDgCIAChfIBnAAIAAAaIhMAAIgBArQAMgCAIAAQAjAAARAPQAPAOAAAaQAAAagQAOQgTARgggBQgnAAgZgYgAtGg4QgYgaAAgmQAAgnAYgZQAagbApAAQAtAAAUAWIgRAWQgRgRgfAAQgbAAgSASQgRASAAAcQAAAbARARQARATAcAAQAXAAAOgOQAPgOAAgVIAAgCIg5AAIAAgYIBXAAIAAAPQgBAogUAXQgWAYgnAAQgqABgZgbgACPgtQgLgLAAgTQAAgRALgNQALgNATAAQASAAALANQAKANAAARQAAATgKALQgMAOgRAAQgTAAgLgOgACbhLQgBAZATAAQARAAABgZQgBgZgRAAQgTAAABAZgAAwguICIikIARANIiICkgALPghIAAivICEAAIAAAaIhnAAIAAAyIBaAAIAAAYIhaAAIAABLgAImghIAAivICDAAIAAAaIhmAAIAAAyIBZAAIAAAYIhZAAIAABLgAjSghIAAiVIglAAIAAgaIBCAAIAACvgAmjghIAAiVIg7AAIAAgaICSAAIAAAaIg7AAIAACVgAqCghIAAivICEAAIAAAaIhnAAIAAAyIBXAAIAAAYIhXAAIAAAxIBnAAIAAAagAAviKQgKgMAAgSQAAgSAKgNQAMgMARAAQATAAALAMQALANAAASQAAASgLAMQgLAOgTAAQgRAAgMgOgAA7ioQAAAYARAAQASAAAAgYQAAgZgSAAQgRAAAAAZg");
	this.shape.setTransform(-1.7,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_15Off, new cjs.Rectangle(-118.3,-17.6,233.2,42.400000000000006), null);


(lib.putt_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.putt_img();
	this.instance.setTransform(-155.35,-103.45,0.6105,0.6105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.putt_img_1, new cjs.Rectangle(-155.3,-103.4,310.70000000000005,206.9), null);


(lib.pool_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.pool_img();
	this.instance.setTransform(-420.95,-284);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pool_img_1, new cjs.Rectangle(-420.9,-284,842,568), null);


(lib.omni_logo = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AANAwQgNABgSgCIgBgBIgCAAIgBAAIAAgFQABgngDgaIAAgCIABgCIAOgVIgCBVIAWAAIgBhWIAOAWIABABIgDBDIABADIAAAFIgEAAIgGADg");
	this.shape.setTransform(-30.275,-21.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAlQABglgDgeIAEgGIgBBIIAgAAIgBhKIAFAIIgCAlIAAAfIAAABIgLAAQgLAAgNgCg");
	this.shape_1.setTransform(-30.275,-21.2525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAAUQgSAAgUgFIgEgBIAAgDIgBgQIAAgGIABgJIAGADIAUAEQAQADARgBIABAAQAKgBAJgDIAGAAIAAAIIABADIgBAPIgBADIgDABQgSAGgUgBgAggAGQAQAEAQABQASAAAPgFIABgKIgLACIAAACIgKAAIAAgBQgMAAgNgBIgBAKIgKAAIABgMIgLgCg");
	this.shape_2.setTransform(-30.275,-16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAJIgBgPIABgIIAUAFQARAEASgCIAUgDIABAFIgBAPQgSAFgUAAQgSAAgTgGg");
	this.shape_3.setTransform(-30.275,-16.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIAqQgJgBgJgDIgEgCIABgKIAGABIAMADQABgagFgcIAAgBIABgCIACgEIAIgOIACAQQACAdgBAmIAAAGIgBgBIAAADg");
	this.shape_4.setTransform(-33.1107,-21.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAdIAAgBQAMAEADgBIADACQACghgFgdIACgEQADAegBAlIgTgFg");
	this.shape_5.setTransform(-33.0857,-20.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAIIAAgFIgBgDIAIgEIACABIAOgDIAGgBIABAKIgFABIgUAEg");
	this.shape_6.setTransform(-27.475,-17.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJACIADgCQACABAOgCIAAABIgTACg");
	this.shape_7.setTransform(-27.475,-17.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAbIADg2IAKASIAAACIAAACQgDAOgBATg");
	this.shape_8.setTransform(-28.275,-23.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAgSIACAEQgCAPgBASg");
	this.shape_9.setTransform(-28.275,-22.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIAPIgCgDIAAABIgFgJIgBgCIgCgDIAEgCIASgLIAPgHIgIAOIgLAVIgDAIg");
	this.shape_10.setTransform(-26.275,-29.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHACIgCgCIASgKIgKAVg");
	this.shape_11.setTransform(-26.6,-29.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAzQgkgHgcgXIgDgCIABgDQAJglAXgcIABgCIAPAAQASAAAVAFIADABIABAEIABARQAAAlgWAkIgBADgAgGgpQgVAZgHAfQAYATAdAHQASggAAghIgBgNQgQgEgRAAIgJAAg");
	this.shape_12.setTransform(-20,-26.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoARQAIgjAXgbIAMgBQASAAATAFIABARQAAAkgUAjQghgIgcgWg");
	this.shape_13.setTransform(-19.975,-26.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAEIAHgEIATgJIAPgHIgVAdIgCAEg");
	this.shape_14.setTransform(-18.975,-21.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJACIATgJIgLAPg");
	this.shape_15.setTransform(-19.175,-20.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMAUIAAgCQADgkAHgLIADgHIAMATIgBACQgJASgDAUIgCAOg");
	this.shape_16.setTransform(-27.525,-26.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAVQACgiAGgLIAGAJQgIAQgEAYg");
	this.shape_17.setTransform(-27.55,-26.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiAkIgBgDIgFgCIAFgCQgFgcAHgiIACgIIAGAGQAaAWAhAGIAHACIgHALIgBABIgBABIgTAJIgDABIgCgBIgXANIAEACIgWAKgAgaAZIAfgSIADgCIADACIAMgHQgagGgWgRQgEAZADAXg");
	this.shape_18.setTransform(-21.175,-21.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggAMQgBgWAFgXQAcAXAhAHIgDAEIgUAKIgCgCIgXAOIgMAGIADACIgFADQgCgHgBgPg");
	this.shape_19.setTransform(-21.1673,-21.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAAIAAgDIAAgHIAEgBQAHAAALgFIAGgDIAEgBIACAAQAJAEAJAFIAHAEIgHAFQgVAPgaAGIgHADgAAEgIIgWAHIAAAIQASgFAMgHIgIgFIAAAAg");
	this.shape_20.setTransform(-24.025,-17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAAIgBgFIATgFIADgBIAFgDIASAJQgVAOgYAGg");
	this.shape_21.setTransform(-24.175,-17.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgMgCIAWgFIADAIIgTAGIgFABg");
	this.shape_22.setTransform(-25.675,-17.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAPIgBgBIAAgkIASgNIACAFIAEAFIgCACQgGALgDAgIgBAQg");
	this.shape_23.setTransform(-28.05,-26.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFARIgBggIALgJIACAEQgHALgBAig");
	this.shape_24.setTransform(-28.1,-26.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAALQgDgHgFgIIgIgOIAOAHQAIAEAHAEIADADIgNATg");
	this.shape_25.setTransform(-34.25,-29.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgGgHIANAHIgGAIg");
	this.shape_26.setTransform(-34,-29.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAuQgRgiABgjIABgQIAAgDIADgBQAUgFAUAAIAOABIACAAIABABQAVAcAHAfIABADIgDACQgdAYgkAHIgEAAgAgigjIAAAMQAAAhAOAcQAegHAYgTQgGgbgRgXIgLAAIgEAAQgOAAgQADg");
	this.shape_27.setTransform(-40.4507,-27.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgngWIABgRQASgEAUAAIANABQATAZAIAfQgcAXgjAHQgRghABghg");
	this.shape_28.setTransform(-40.4757,-27.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAZAWQgcgJgWgQIgGgFIAGgDQANgHAKgEIACgBIAIAFIATAIIAEABIgBAKIABAQIABAHgAgNgHQAPALASAGIAAgMIgWgJg");
	this.shape_29.setTransform(-36.675,-17.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgXgGIAVgLIADADIAEABIATAIIAAAGIAAARQgbgIgUgQg");
	this.shape_30.setTransform(-36.5,-17.475);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDAMIgSgbIArASIgTAKIgDADg");
	this.shape_31.setTransform(-41.4,-21.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgJgGIATAIIgKAFQgFgGgEgHg");
	this.shape_32.setTransform(-41.375,-21.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAPAgIAEgBQgOgKgIgDIgCAAIgCACIgXgKIgBgBIgBgBIgIgOIAHgBQAigGAagXIAHgFIABAIQAIAhgFAfIADACIgFACIAAABIgBAGgAgDAIQAFABAbAQQACgagEgWQgYASgbAFIAAABIARAHIABAAIACgBg");
	this.shape_33.setTransform(-39.55,-22.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAbAgIACgBQgagRgIgCIgDABIgUgJIgFgHQAjgHAcgXQAIAjgHAgg");
	this.shape_34.setTransform(-39.4685,-22.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAZQgEgYgKgVIgBgCIACgDIAIgNIAFADIAOALIACABIgBAmIgBABIgMAXg");
	this.shape_35.setTransform(-32.85,-26.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgJgSIAFgJQAIAFAGAFIAAAiIgHALQgDgagJgUg");
	this.shape_36.setTransform(-32.825,-26.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAHAIIgTgIIAEgIIAVAIIAAAJg");
	this.shape_37.setTransform(-34.925,-18.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgJgDIASAGIAAABIgSgHg");
	this.shape_38.setTransform(-35.05,-18.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAuA3Qg6gIglgvIgDgCIADgEQAjgnAwgJIAEAAIABACQAKASAEATIgBBGgAgmgCQAgAlAwAJIABg6QgEgPgGgPQgrAKgcAgg");
	this.shape_39.setTransform(-36.35,-38.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgugCQAhgmAvgJQAIAPAFAUIgBBAQg4gIgkgsg");
	this.shape_40.setTransform(-36.275,-38.575);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AghAVQADgXAJgTIADgGIAEAEQAaARAQAUIAHAKIgagCQgRgBgSAFIgIACgAgWAPQAQgDAPAAIADAAQgKgMgQgMQgGAMgCAPg");
	this.shape_41.setTransform(-41.5,-33.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOgUQAYARAQAUIgOgBQgTAAgSAFQACgVAJgUg");
	this.shape_42.setTransform(-41.775,-33.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVAsIgCgBIgBgBQgXgqgvgbIgFgDIADgEIAPgTIAEAEQAjAsA2AHIAEAAIAAAJQgFAUgMASIgCAFgAgqghQAsAbAYAqIAJAEQAHgNAFgQQgzgJgjgog");
	this.shape_43.setTransform(-36.975,-34.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAWAnQgYgrgxgcIALgOQAkAuA4AGIAAADQgGAUgKASIgOgIg");
	this.shape_44.setTransform(-36.875,-34.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag3gKQAGgXALgSIACgEIADABQA1ALAhAqIADADIgDADQgpAug9AEIgFABgAgtgJIABA2QAzgFAkgnQgegigsgKQgJAQgFASg");
	this.shape_45.setTransform(-23.875,-38.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgxgKQAGgUAKgTQAyAKAhAoQgnAtg7AEg");
	this.shape_46.setTransform(-23.95,-38.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgNAXIgBguIAdAEIgEAGQgLASgDATgAgEgEIAEgIIgEAAg");
	this.shape_47.setTransform(-28.025,-41.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHgUIAPACQgJASgGAVg");
	this.shape_48.setTransform(-28.175,-41.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgJgLIgDgGIAGgBIATgDIgBAqIgKABQgCgSgJgPg");
	this.shape_49.setTransform(-32.3,-42.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGgPIANgCIgBAkQgFgUgHgOg");
	this.shape_50.setTransform(-32.175,-41.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgtAwQgIgQgGgRIAAgPIAFAAQA4gDAmgsIAFgFIADAFIALAQIgEADQgvAYgZAqIgBABIgBABIgTAKIgFADgAgxAIIAAAFQAFANAFANIAOgHQAQgZATgQQgaAOghADgAAmgeIAIgEIgCgCg");
	this.shape_51.setTransform(-23.4,-33.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag0AOIAAgKQA6gEAogtIAIAMQgxAagaAqIgTAKQgIgPgEgQg");
	this.shape_52.setTransform(-23.5,-33.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAbAZQgVgFgPAAIgYABIAIgJQAQgSAYgRIAFgDIACAGQAIATADAVIABAHgAgKAKIABAAQAMAAATAEQgBgLgGgOQgNAJgMAMg");
	this.shape_53.setTransform(-18.75,-33.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgLAOIgNABQAQgTAXgPQAIATACAUQgTgFgRgBg");
	this.shape_54.setTransform(-18.475,-33);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAFAYIgOgLIgEgDIADgDQAKgQAEgUIAKACIgBA5gAAAAIIADABIAAgJg");
	this.shape_55.setTransform(-32.575,-30.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgHAOQAKgRAFgUIgBAvQgGgGgIgEg");
	this.shape_56.setTransform(-32.5,-30.925);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgLgYIAKgCQAEASAHAMIACAFIgEACIgLAJIgIAHgAgBAGIABAAIgBgDg");
	this.shape_57.setTransform(-28.125,-30);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgFgTQAEAQAHAOIgLAJg");
	this.shape_58.setTransform(-28.2,-30.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgDAsQghgjgGgwIgBgIIAHACQAUAFAQABQASgBASgEIAHgCIAAAHQgGAwghAjIgEAEgAAAAhQAZgdAHglQgQADgQAAQgNAAgRgDQAFAlAZAdg");
	this.shape_59.setTransform(-30.3,-11.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AglgoQATAGASgBQAUAAASgEQgGAtggAjQgggkgFgtg");
	this.shape_60.setTransform(-30.275,-11.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgrAyIgCAAIgQgDIAGgCIABgEQAUghAAgjIgBgQIgBgHIAIACQAcAIAXASQAXATAOAZIACADIgDADQglAYgqgBgAgTAqQAXAAAZgKQgZABgXAJgAgYgbQAAAhgRAhQApgRAkAAIAAAHIANgGQgagrgwgRg");
	this.shape_61.setTransform(-12.85,-26.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgZAtIgbgCQAUgjAAgkIgBgRQAcAIAWASQAWASAOAYQgjAXgpAAIgCgBg");
	this.shape_62.setTransform(-12.575,-26.4495);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgCBfQABg4gbgrQgRgdgZgSIgEgEIAOgSIABgBIABgBIAKgFIACAAIABAAIAUACQAnABAkgXIAEgCIADAEQASAhAAAoQAAAmgTAgQgTAiggAUIgHAFgAg0hCIgIAKQAZAVARAbQAXApACA1QAbgUAQgeQAPgdAAggQAAgigPgeQgjAWgogBIgUgCg");
	this.shape_63.setTransform(-12.525,-14.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgYgFQgSgdgagUIALgQIAKgDIAVABQApAAAkgXQASAiAAAlQAAAlgTAgQgSAfgfAUQABg6gagrg");
	this.shape_64.setTransform(-12.425,-14.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgKgCIAEgJIAEABIAXAEIgpASg");
	this.shape_65.setTransform(-17.45,-21.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAAgBIAFABIgJACg");
	this.shape_66.setTransform(-17.7,-21.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAbBQQg/gBgsgvIgDgDIADgDQAgghAFgtIAAgEIAEAAQAagHASgPIACgBIADABQAwAcASA1QAKAggCAfIgBADIgDACQgbAJgZAAgAghgwQgGAsgeAhQAoAoA4ABQAZAAAWgIQABgegKgdQgQgtgpgaQgSAOgXAGg");
	this.shape_67.setTransform(-22.6083,-10.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhNAcQAggiAGguQAZgHAVgPQAuAbARA0QAKAegCAeQgaAKgaAAQg9gBgqgug");
	this.shape_68.setTransform(-22.5326,-10.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag0AbIgFgDIADgEQAfgyA5gQIAHgCIgCAXQAAAiAQAeIADAGIgHABIgMACIgBAAIgPABQgogBgjgVgAgNAWQAZAGAbAKIAEgBQgOgeAAggIABgJQguAPgbAoIAGADIABgHQAEAAATAFg");
	this.shape_69.setTransform(-47.925,-26.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgyAWQAfgwA3gQIgBAQQgBAiARAhIgcACQgnAAgigVg");
	this.shape_70.setTransform(-47.95,-26.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgaBRQgbABgcgLIgDgBIAAgEQAAgiAKggQATg0AtgbIADgBIADABQAVASAZAHIADABIABADQAEAtAgAhIADADIgDAEQgsAvg/gBgAg/ABQgLAdAAAhQAYAJAYAAQA4ABApgqQgdghgGgrQgZgIgTgQQgnAZgQAtg");
	this.shape_71.setTransform(-38.1261,-10.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgZBMQgbAAgagLQgBggALgfQARgzAtgaQAUARAcAIQAEAuAhAjQgrAtg7AAIgCAAg");
	this.shape_72.setTransform(-38.2293,-10.5989);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgFBlQgggVgSghQgTgiABglQAAgoAVgkIADgEIAEACQAgAUAmABIAPgBIABAAIAUAHIABACIAKAOIADAFIgFADQgWAPgRAcQgaAqgDA+IAAAJgAg/gYQgBAgAPAeQAPAeAcATQAEg6AXgoQARgcAXgSIgHgKIgOgEIgPAAQgngBgggSQgRAeAAAkg");
	this.shape_73.setTransform(-48.1007,-14.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgxAuQgTghABglQAAgnAUghQAiAUAnABIAPgBIARAGQAFAJAGAGQgZARgRAdQgaArgCA/QgfgUgRgfg");
	this.shape_74.setTransform(-48.2007,-14.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOAAIABgJIAOgCIACADIAMAUg");
	this.shape_75.setTransform(-42.725,-22.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgIgBIAMgCIAEAHg");
	this.shape_76.setTransform(-43.25,-22.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgdA/QghgpABgzQgBgQAFgSIABgEIAFABQAjAEAdAWQAeAUAQAfIAEAGIgHABQguAJggAkIgDAFgAgzgdQgBAtAbAkQAeggAqgKQgPgagagRQgYgSgfgFQgCAOAAANg");
	this.shape_77.setTransform(-38.35,-44.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Ag3gcQAAgNAEgTQAjAFAcAUQAcAUAQAeQgwAJggAlQgfgnAAgyg");
	this.shape_78.setTransform(-38.475,-45.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgRBQQghgVgTgiQgTggAAgoQAAgPADgPIABgEIAFAAQBpAIA7AnIAEACIgCAEQgJAVgCASIgBAEIgDABQg2APgcAvIgDAEgAhOgvQAAAkAQAdQARAfAdAUQAegwA0gOQACgRAIgSQg3gjhhgIQgCALAAANg");
	this.shape_79.setTransform(-51.4756,-32.25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag/AYQgTggAAgmQAAgPADgOQBnAHA7AnQgJAUgCAUQg4AQgdAxQgggTgSghg");
	this.shape_80.setTransform(-51.5506,-32.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("ABNBIQhEgmhigCIgHAAIACgGQAQgtAngbQAngcAvABIASABIAFABIgCAFQgDARAAAOQAAAwAdAmIADAEIgPAUgAgggnQgiAXgQAmQBfAEBBAjIAGgHQgdgoAAgxQAAgNACgPIgMAAQgqAAgjAYg");
	this.shape_81.setTransform(-50.05,-44.3004);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhZAcQAPgqAkgbQAmgbAvAAIARABQgFATAAAOQAAAyAgAnIgLAOQhFgohkgBg");
	this.shape_82.setTransform(-50.05,-44.3754);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAWA/QgfgpgxgKIgHgBIAEgFQATggAggTQAfgTAlgCIAEAAIABAEQADAPAAAOQAAA2glAqIgDAEgAgEglQgcAQgRAaQAtALAeAkQAegmAAgvQAAgHgCgQQggACgaARg");
	this.shape_83.setTransform(-21.5214,-44.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ag7AJQATgdAegTQAegTAlgBQADAOgBAOQAAAzgjAoQgggpgzgKg");
	this.shape_84.setTransform(-21.3964,-44.45);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAqBfQgQgegagTQgcgUgigFIgFAAIABgGQALgsAkggQAjgfAvgEIAFgBIgDDAIgVADgAgNg1QgeAbgMAnQAiAFAaAUQAcAUAQAdIAGgBIADisQgoAFgfAcg");
	this.shape_85.setTransform(-37.475,-52.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AABAqQgbgVgkgFQALgrAigeQAigeAtgFIgDC3IgOACQgPgfgdgUg");
	this.shape_86.setTransform(-37.4,-52.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgxBhIgVgCIgCjAIAFAAQA0ACAmAhQAoAiAJAyIABAFIgFABQgjABgeASQgdASgSAeIgCADgAg8BWIAJABQATgeAegSQAcgSAjgDQgKgrgjgdQghgdgtgEg");
	this.shape_87.setTransform(-22.425,-52.775);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhABbIgDi3QAzACAlAhQAlAgAKAwQglACgfASQgdATgTAfIgQgCg");
	this.shape_88.setTransform(-22.475,-52.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AALBNQgMgYgWgSQgVgRgbgIIgDAAIAAgDQgDgVgHgRIgCgEIAEgCQA8glBlgHIADAAIABAFQAEAPAAARQgBAmgRAfQgTAhgfAVIgEACgAhJgfQAFAOADATQA2AQAdAyQAbgUAQgeQAPgdABghQAAgPgDgLQhbAFg4Aig");
	this.shape_89.setTransform(-8.9,-31.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgUAhQgWgSgcgIQgCgUgIgTQA7glBjgFQADANAAASQAAAlgSAfQgSAfgeATQgNgYgWgSg");
	this.shape_90.setTransform(-8.825,-31.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AhTBEIgKgOIACgDQAjgmgBgyQABgNgDgPIgBgGIAOAAQAuAAAmAcQAmAbAQArIACAHIgHAAQhfAAhEAkIgEACgAgvglQAAAyghAqIADAEQBBghBbgCQgPgmgigXQgjgYgpAAIgCAAQACAQgBAIg");
	this.shape_91.setTransform(-10.2,-43.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhWA3QAjgoAAg0QAAgOgDgOIAIgBQAuABAkAbQAkAbAPApQhggBhFAmg");
	this.shape_92.setTransform(-10.225,-43.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AANAWIgNgUIgMAAIAAAUIgEAAIAAgsIAQAAQAQAAAAANQAAAJgMACIANAUgAgMgBIAKAAQAOAAAAgIQAAgJgMAAIgMAAg");
	this.shape_93.setTransform(-70.125,-42.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgbAbQgMgLAAgQQAAgPAMgLQAMgLAPAAQAQAAAMALQALALAAAPQAAAQgLALQgMALgQAAQgPAAgMgLgAgYgYQgKAKAAAOQAAAPAKAKQAKAKAOAAQAPAAAKgKQALgKAAgPQAAgNgLgLQgJgKgQAAQgOAAgKAKg");
	this.shape_94.setTransform(-70.4,-42.825);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AhaDMQghgMgBgJIgPhNQgDgSAJAAQAGAAACAFIAEAPQAHAeAbAZQAjAiA1AAQAtAAAfgYQAigaAAgsQAAgmglgVQgSgKg/gTQg5gQgZgUQglgdAAg1QAAg2AogeQAkgcA1AAQArAAAeALQAOAFALAFQADAAADgDQAEgDADAAQAGAAABAIIAIBRQABAJgHAAQgHAAgFgSQgNglgegVQgegTgmAAQgnAAgaASQgfAVAAAmQAAAlAlAVQAQAIBBAUQA5ASAZAUQAlAfAAA4QAAAwgiAhQgsAshYAAQgfAAgigMg");
	this.shape_95.setTransform(224.389,-25.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAADSQgpgCgZABQgwADgXgBQgJABAAgHQABgEAFgCIAUgJQAKgFAEgNQACgKAAgYIAAkuQAAgSgYgJQgZgIAAgEQAAgHAMgBIA7ACQAhAAAXgCQAGABADABQACACAAAEQAAADgVAJQgVAJAAAfIAAEhQAAAgADAGQAIAMAhgBQBTAAAtgeQAXgQALgPQAFAAAAAHQAAAageAgQgMAPgOAEQgIABgXAAIhDgBg");
	this.shape_96.setTransform(193.375,-25.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AABDSQgqgCgYABQgwADgYgBQgIABAAgHQAAgEAGgCIATgJQALgFADgNQADgKAAgYIAAkPQAAgcgEgLQgHgSgVgEIgLgCQgHgDAAgEQAAgIAVAAQBvAAA2ACIBTgCQAGABAAANQAABGgLAAQgIAAgBgPQgCgVgDgGQgKgNglgDQgKAAgqAAQgrAAgGADQgGAEAAAeIAABvQAAAQACACQADADARAAIA+AAQAlAAALgZIAFgQQADgIAEAAQAGAAAAAMIgBA7IABAwQAAAHgGAAQgGAAgHgZQgGgbgdAAIhWAAQgIAAgBAGQgBACAAALIAABuQAAAgAEAGQAHAMAhgBQBTAAAugeQAXgQAKgPQAFAAAAAHQAAAagdAgQgNAPgNAEQgIABgYAAIhCgBg");
	this.shape_97.setTransform(162.075,-25.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAsDSIgZgBQgoAAgXABIgRABQgHABAAgJQAAgEAYgJQAXgKAAgVIAAk1IAAgQQgBgMgFAAIhgAAQgZAAgIAJQgGAFgJAcIgCAJQgDAEgFABQgFAAAAgIIAGg5IACgPQACgJAHAAICmACQBpAABBgCQAKABAEADQADADAAAKIADAwIAAAJQgBAFgFAAQgHAAgCgHIgCgQQgEgXgjAAIhUAAQgTAAgCADQgCACAAAYIAAEwQAAAeAYAHQAXAHAAAFQAAAHgFAAIgWgBg");
	this.shape_98.setTransform(125.8375,-25.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AidCbQg3g9AAhfQAAhcA+g+QA+g8BaAAQBaAAA8A7QA9A8AABcQAABjg+A9Qg9A8hhAAQheAAg4g9gAiBiOQgoAxAABLQAABWAyA/QA1BDBSAAQBCAAArgxQAtgyAAhRQAAhVgyg+Qg2hDhRAAQhHAAgrA2g");
	this.shape_99.setTransform(87.225,-25.875);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ADwEYIgogCQgdAAgbACIgeABIgMAAQgHgCABgIQAAgGAbgLQAbgMAAgdIAAi/IABgPQgCgFgFAAIkfAAQgGAAgCAEQgBACAAAIIAADGQAAAeAlALQAlALAAAJQAAAGgMAAQhEgDgpAAQgiAAgTACIgOABQgJAAAAgMQAAgHAKgDIAVgGQAegNAAguIAAmWQAAgigigLIgXgGQgLgDABgGQgBgIANAAIArABIAqACIAlgCIAkgBQAPAAAAAHQAAAFgJADQgMADgHADQgcAMAAAjIAACsQAAAJABACQADADAHAAIEdAAQAEAAACgKIAAgNIAAijQAAgggdgLQgdgMgBgFQABgIANAAQAZAAA4ADQAcAAAcgDQAWAAgBAMQAAADgaAKQgaALAAAgIAAGkQAAAiAkAMQAkANgBAFQAAACgCADQgDAEgEAAIghgBg");
	this.shape_100.setTransform(38.8,-32.725);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgCDRQgVAAgRABIgSABQgHAAgDgBQgCgDAAgFQAAgDAXgJQAWgJAAgjIAAkxQAAgagXgIQgYgIAAgDIABgGQABAAAAAAQAAAAABAAQAAAAABAAQABgBABAAIBAACIA2gCQAHAAACABQACABAAAFQAAACgVAIQgVAJAAAaIAAE/QAAAXAaAJQAaAHAAAGQAAABAAABQgBABAAAAQAAABAAAAQgBABAAAAQgDACgHgBQgngCgYAAg");
	this.shape_101.setTransform(-84.125,-25.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("ACXDEIj7kgIgFgGQgFgGgCAAQgEAAAAAOIAAD0QAAAgAaAGQAZAIAAACQAAAJgGgBIgYgBIgjgBIg3ACQgIAAAAgGQAAgGAIgEIASgGQAagNAAgxIAAjcQAAhLgkgTQgjgGAAgLQAAgDADgCQADgBADgBIAbACIAbgCQAEABAFAFIAGAIIEXE9QAFAGACAAQABAAAAgGIAAj6QAAgugggNIgXgGQgKgDAAgGQAAgHAHAAIA1ACIA7gCQAGAAAAAGQAAAEgRAJQgSAKAAAZIAAFZQAAAZgFAAQgHAAgPgQg");
	this.shape_102.setTransform(-113.775,-25.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("ACsDRIgbACIgZABQgGAAAAgGQAAgFASgJQATgJgBgaIgGjnQAAgXgGAAQgHAAgIASIh5D7IgHARQgHANgEAAQgDAAgEgHIgEgKIh9kKQgCgGgFAAQgDAAgBAJIgHDQQgCAvAbANQAHADAMADQAJADAAAGQAAAHgPAAQgigDgSAAQgRAAgQACIgSABQgFAAAAgIQAAgFATgIQAUgIACglIAKh8QAEg7AAgoQAAhVgbgXQgcgJAAgKQAAgGAKAAIAgACIAfgCQAGAAADAGIAEAKICLEvQAJASAEAAQACAAAPghICLkcIAHgNQAEgIAFABIAbACQAOAAAOgCQAGAAAAAHQAAAGgHACIgQAFQgXAJACAqIAIEoQABAcAXAHQAWAHAAAHQAAAGgOAAQgggDgXAAg");
	this.shape_103.setTransform(-158.625,-25.8016);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AjSDOQhIhQAAh/QAAh7BShSQBThRB4AAQB4AABQBPQBRBQAAB7QAACEhSBRQhSBQiCAAQh9AAhLhSgAisi9Qg1BCgBBjQAABzBDBUQBHBZBuAAQBYAAA5hBQA8hDAAhsQAAhxhDhTQhIhYhsAAQheAAg6BHg");
	this.shape_104.setTransform(-210.1,-32.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ai7CpQgugtAAhEQAAgvAYgeQAYgfAwgNQgPgUgFgPQgHgPAAgRQAAgjAagXQAagWAoAAQAbAAAdAMIAKACIAGgCQAEgDACAAQADAAABADIACAMIADA1QAAAEgCAEQgBACgEAAQgFAAgEgLQgEgKgFgJQgOgUgSgLQgSgLgVAAQgWAAgNAOQgNAMAAAWQAAAbAvA3QAuA2B5BzQAJgOAEgNQAEgOAAgRQAAgXgFgOQgGgKgNgIIgIgCIgKgCIgBAAQgOgCAAgGQAAgEAEgCQADgBAJAAIASABIAeABIAmgBQAGgBACACQADADAAACQAAACgMAIQgMAHgDANIgCATQgDA1gYAlQAsAoAbASQAWAPAMAAQAGAAAGgCIAJgCQAAAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgPAHQgPAHgSAAQgXAAgYgNQgYgLgrgkQggAhghANQgiAPgpAAQhJAAgugsgAi0gYQgUAYAAAgQAAAbALAXQAMAaAVAVQAXAXAdAMQAcANAhAAQAcAAAYgKQAagJAWgTQgmghgngnQgggfgbggIgKgLQgjgpgNAAQgYAAgTAYg");
	this.shape_105.setTransform(-121.275,40.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhaDMQghgMgBgIIgPhNQgDgTAJAAQAGAAACAFIADAPQAIAeAaAZQAkAiA0AAQAuAAAfgXQAigbAAgsQAAgmglgVQgSgKg/gTQg5gQgZgUQglgdAAg1QAAg2AngeQAkgcA2AAQArAAAdALQAPAFALAFQADAAADgDQADgDADAAQAHAAAAAIIAJBRQABAJgHAAQgHAAgFgSQgNglgfgVQgdgTgmAAQgnAAgaASQgfAVAAAmQAAAlAlAVQAQAIBBAVQA4ARAaAUQAlAfAAA4QAAAwgiAhQgsAshZAAQgeAAgigMg");
	this.shape_106.setTransform(154.764,40.975);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AArDTIgYgCQgoAAgXACIgRABQgHgBAAgHQAAgFAYgJQAXgKAAgVIAAlEQgBgMgFAAIhgAAQgZgBgIAJQgGAFgJAcIgDAJQgCAFgFAAQgCAAgCgDIgCgEIAHg6IABgOQADgKAGABIBIABIBfABQBpAABBgCQAKAAAEADQADAEAAAKIADAvQABAOgHAAQgHAAgCgHIgCgQQgEgXgjABIhUAAQgTAAgCACQgCADAAAYIAAEwQAAAdAYAHQAXAHAAAFQAAAIgFAAIgXgBg");
	this.shape_107.setTransform(120.1559,41.05);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("ABlDAQgQgNgVggIhAhpQgQgZgGgDQgHgDgwAAQgMAAgDAGIgBAKIAAB+QAAAeAfAJQAeAJAAAFQAAAFgDABIgHAAQgTgDgwAAQgtACgWABQgGgBAAgGQAAgEAWgKQAVgLAAgbIAAkvQAAghgZgIQgZgHAAgFQAAgDADgDQADgBAFAAIAMABIAaABQAiAABAgCIAZAAQAaABAVAHQBBAXAABIQAAAigVAdQgUAbggANIBhCXQAZAmAbAKQATAHAAACQAAAIgmAAQgdAAgWgUgAhUi9QgJAEAAARIAACXQAAAHAWABQANABAdgBQAdAAAUgOQAfgWAAgwQAAg0gigZQgcgVgwAAQgUAAgFACg");
	this.shape_108.setTransform(89.475,41.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AieCbQg2g9AAhfQAAhcA+g9QA+g9BZAAQBbAAA8A7QA9A8AABcQAABjg9A9Qg+A8hiAAQhdAAg5g9gAiBiOQgpAyAABKQAABXAzA+QA1BEBTAAQBBAAAsgxQAsgzABhRQAAhVgzg+Qg1hChSAAQhHAAgrA1g");
	this.shape_109.setTransform(49.25,40.975);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AhaDMQghgMgBgIIgPhNQgCgJACgFQACgFAEAAQAGAAACAFIADAPQAIAeAbAZQAjAiA1AAQAsAAAfgXQAjgbgBgsQABgmglgVQgSgKg/gTQg5gQgZgUQglgdAAg1QAAg2AogeQAkgcA1AAQArAAAdALQAPAFALAFQADAAADgDQADgDADAAQAHAAAAAIIAJBRQABAJgIAAQgHAAgFgSQgNglgegVQgdgTgmAAQgnAAgbASQgeAVAAAmQAAAlAlAVQAQAIBBAVQA5ARAZAUQAlAfAAA4QAAAwgiAhQgsAshYAAQgfAAgigMg");
	this.shape_110.setTransform(11.15,40.975);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AABDSQgqgCgYABQgwACgYABQgJAAAAgHQABgEAGgDIATgIQALgFADgNQADgKAAgYIAAkQQAAgbgEgLQgHgTgVgDIgLgDQgHgCAAgEQAAgIAVABQBvgBA2ADIBTgCQAGgBAAANQAABIgMgBQgHABgBgRQgCgUgEgFQgJgNglgDQgKgBgqAAQgrAAgGADQgGAEAAAeIAABvQAAAPACADQADACARAAIA+AAQAlAAAKgXIAGgRQACgHAEAAQAHAAAAALIAABrQAAAHgHAAQgFAAgHgaQgGgagdAAIhWAAQgIAAgBAGQgBACAAALIAABuQAAAgAEAGQAHALAhAAQBTABAugfQAXgQAKgPQAFAAAAAHQAAAagdAgQgNAOgOAFQgHACgYAAIhCgCg");
	this.shape_111.setTransform(-19.775,41.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("ACGD/QgVgRgbgrIhWiLQgVgigIgDQgLgFg/AAQgQAAgEAIQgBACAAANIAACnQAAAoApALIAcAHQAMAFAAAIQAAAFgEABIgJAAIgXgBQgbgCgoAAIgsACIgsABQgIABAAgKQAAgEAcgPQAdgOAAgkIAAmTQAAgsgigKIgXgFQgKgDAAgJQAAgEAEgCQAEgDAHgBIAQACQALABAXABQAtAABVgEIAiAAQAiACAcAKQBYAeAABgQAAAtgdAnQgbAkgqARICCDIQAhA0AjANQAIADALACQAHACAAAGQAAAJgyAAQgnAAgegagAhwj7QgMAFAAAVIAADKQAAAJAdACQARABAngBQAnAAAbgUQAqgcAAhAQAAhEgugiQgmgdhAAAQgaAAgHAEg");
	this.shape_112.setTransform(-60.375,34.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.omni_logo, new cjs.Rectangle(-238.4,-62.6,476.9,125.2), null);


(lib.golf_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.golf_img();
	this.instance.setTransform(-542.5,-361.95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.golf_img_1, new cjs.Rectangle(-542.5,-361.9,1081,722), null);


(lib.cta_btn = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7F7A00").s().p("AAPAkIgNgpIgCgHIAAAAIgBAHIgOApIgFAAIgchHIANAAIAOAoIADAIIABAAIACgIIAOgoIAEAAIANAoIACAIIABAAIADgIIAOgoIANAAIgcBHg");
	this.shape.setTransform(31.525,31.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F7A00").s().p("AgbAbQgKgLAAgQQAAgPAKgKQALgLAQAAQARAAALALQAKAKAAAPQAAAQgKALQgLALgRgBQgQABgLgLgAgRgRQgHAHAAAKQAAALAHAIQAHAHAKAAQALAAAIgHQAHgIAAgLQAAgKgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_1.setTransform(22.275,31.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F7A00").s().p("AAdAkIgxgvIAAAvIgLAAIAAhHIADAAIAxAuIAAguIALAAIAABHg");
	this.shape_2.setTransform(13.775,31.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7F7A00").s().p("AARAkIgWghIgOAOIAAATIgLAAIAAhHIALAAIAAAkIAkgkIAOAAIAAABIgcAdIAcAoIAAABg");
	this.shape_3.setTransform(3.975,31.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7F7A00").s().p("AgbAbQgKgLAAgQQAAgPAKgKQALgLAQAAQARAAALALQAKAKAAAPQAAAQgKALQgLALgRgBQgQABgLgLgAgRgRQgHAHAAAKQAAALAHAIQAHAHAKAAQALAAAIgHQAHgIAAgLQAAgKgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_4.setTransform(-4.425,31.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F7A00").s().p("AgbAbQgKgLAAgQQAAgPAKgKQALgLAQAAQARAAALALQAKAKAAAPQAAAQgKALQgLALgRgBQgQABgLgLgAgRgRQgHAHAAAKQAAALAHAIQAHAHAKAAQALAAAIgHQAHgIAAgLQAAgKgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_5.setTransform(-12.975,31.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7F7A00").s().p("AgeAkIAAhHIAgAAQANAAAHAFQAGAFAAAJQAAALgKAFIAAAAQANAEAAAMQAAAJgIAGQgHAFgMAAgAgSAaIAWAAQAGAAAEgEQAEgCAAgFQAAgFgEgDQgDgDgGAAIgXAAgAgSgEIAUAAQAHAAADgDQAEgDAAgEQAAgKgOgBIgUAAg");
	this.shape_6.setTransform(-20.875,31.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7F7A00").s().p("AgTgeIAnAeIgnAfgAAUAAIAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(-34.675,31.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#7F7A00").ss(1,1,1).p("ApBh6ISDAAIAAD1IyDAAg");
	this.shape_8.setTransform(0.025,31);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ApBB7IAAj1ISDAAIAAD1g");
	this.shape_9.setTransform(0.025,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_btn, new cjs.Rectangle(-58.7,17.8,117.5,26.499999999999996), null);


(lib.birthday_img_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.birthday_img();
	this.instance.setTransform(-185.45,-123.5,0.7288,0.7288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.birthday_img_1, new cjs.Rectangle(-185.4,-123.5,370.9,247.1), null);


// stage content:
(lib.Launch_Omni_v02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [421];
	// timeline functions:
	this.frame_421 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(421).call(this.frame_421).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(422));

	// Green_BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(127,122,0,0)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_1.setTransform(317.375,482.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(127,122,0,0.188)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_2.setTransform(317.375,482.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(127,122,0,0.361)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_3.setTransform(317.375,482.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(127,122,0,0.51)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_4.setTransform(317.375,482.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(127,122,0,0.639)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_5.setTransform(317.375,482.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(127,122,0,0.749)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_6.setTransform(317.375,482.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(127,122,0,0.839)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_7.setTransform(317.375,482.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(127,122,0,0.91)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_8.setTransform(317.375,482.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(127,122,0,0.961)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_9.setTransform(317.375,482.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(127,122,0,0.988)").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_10.setTransform(317.375,482.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7F7A00").s().p("AkkGLIgKsVIJdAFIAAMQg");
	this.shape_11.setTransform(317.375,482.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},93).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(319));

	// beige_bottom
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(127,122,0,0)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_12.setTransform(317.675,560.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(144,137,30,0.188)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_13.setTransform(317.675,560.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(160,151,57,0.361)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_14.setTransform(317.675,560.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(174,163,81,0.51)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_15.setTransform(317.675,560.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(186,174,102,0.639)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_16.setTransform(317.675,560.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(196,183,119,0.749)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_17.setTransform(317.675,560.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(204,190,134,0.839)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_18.setTransform(317.675,560.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(211,196,145,0.91)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_19.setTransform(317.675,560.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(215,200,153,0.961)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_20.setTransform(317.675,560.625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(218,202,157,0.988)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_21.setTransform(317.675,560.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DBCB9F").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_22.setTransform(317.675,560.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},93).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(319));

	// Green_BG
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.004)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_23.setTransform(-15.625,482.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(13,12,0,0.102)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_24.setTransform(-15.625,482.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(25,24,0,0.204)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_25.setTransform(-15.625,482.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(38,37,0,0.302)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_26.setTransform(-15.625,482.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(51,49,0,0.404)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_27.setTransform(-15.625,482.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(64,61,0,0.502)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_28.setTransform(-15.625,482.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(76,73,0,0.6)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_29.setTransform(-15.625,482.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(89,85,0,0.702)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_30.setTransform(-15.625,482.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(102,98,0,0.8)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_31.setTransform(-15.625,482.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(114,110,0,0.902)").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_32.setTransform(-15.625,482.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7F7A00").s().p("AkuGLIAAsVIJdAFIAAMQg");
	this.shape_33.setTransform(-15.625,482.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23}]}).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},83).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).wait(319));

	// beige_bottom
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.004)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_34.setTransform(-15.325,560.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(22,20,16,0.102)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_35.setTransform(-15.325,560.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(44,41,32,0.204)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_36.setTransform(-15.325,560.625);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(66,61,48,0.302)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_37.setTransform(-15.325,560.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(88,81,64,0.404)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_38.setTransform(-15.325,560.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(110,102,80,0.502)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_39.setTransform(-15.325,560.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(131,122,95,0.6)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_40.setTransform(-15.325,560.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(153,142,111,0.702)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_41.setTransform(-15.325,560.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(175,162,127,0.8)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_42.setTransform(-15.325,560.625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(197,183,143,0.902)").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_43.setTransform(-15.325,560.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DBCB9F").s().p("AkwGLIAAsVIJhAAIAAMVg");
	this.shape_44.setTransform(-15.325,560.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},83).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).wait(319));

	// beige_top
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DBCB9F").s().p("A52EiIAApDMAztAAAIAAJDg");
	this.shape_45.setTransform(152.575,-15.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(422));

	// omni_logo
	this.instance = new lib.omni_logo();
	this.instance.setTransform(150.4,43.85,0.2829,0.2829);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(422));

	// Green_BG
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7F7A00").s().p("At8FeIgKq7IcNAFIAAK2g");
	this.shape_46.setTransform(149.825,40.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(422));

	// cta_btn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_246 = new cjs.Graphics().p("ApBB7IAAj0ISDAAIAAD0g");
	var mask_graphics_249 = new cjs.Graphics().p("ApBB7IAAj0ISDAAIAAD0g");
	var mask_graphics_250 = new cjs.Graphics().p("ApBB7IAAj0ISDAAIAAD0g");
	var mask_graphics_251 = new cjs.Graphics().p("ApCB7IAAj1ISFAAIAAD1g");
	var mask_graphics_252 = new cjs.Graphics().p("ApEB7IAAj1ISJAAIAAD1g");
	var mask_graphics_253 = new cjs.Graphics().p("ApHB8IAAj3ISPAAIAAD3g");
	var mask_graphics_254 = new cjs.Graphics().p("ApKB8IAAj4ISVAAIAAD4g");
	var mask_graphics_255 = new cjs.Graphics().p("ApPB9IAAj6ISfAAIAAD6g");
	var mask_graphics_256 = new cjs.Graphics().p("ApUB+IAAj8ISpAAIAAD8g");
	var mask_graphics_257 = new cjs.Graphics().p("ApaCAIAAj/IS1AAIAAD/g");
	var mask_graphics_258 = new cjs.Graphics().p("ApgCBIAAkBITBAAIAAEBg");
	var mask_graphics_259 = new cjs.Graphics().p("ApoCDIAAkFITRAAIAAEFg");
	var mask_graphics_260 = new cjs.Graphics().p("ApwCFIAAkJIThAAIAAEJg");
	var mask_graphics_261 = new cjs.Graphics().p("Ap5CGIAAkMITzAAIAAEMg");
	var mask_graphics_262 = new cjs.Graphics().p("AqCCIIAAkQIUGAAIAAEQg");
	var mask_graphics_263 = new cjs.Graphics().p("AqNCLIAAkVIUbAAIAAEVg");
	var mask_graphics_264 = new cjs.Graphics().p("AqZCNIAAkZIUyAAIAAEZg");
	var mask_graphics_265 = new cjs.Graphics().p("AqkCQIAAkfIVJAAIAAEfg");
	var mask_graphics_266 = new cjs.Graphics().p("AqXCNIAAkZIUvAAIAAEZg");
	var mask_graphics_267 = new cjs.Graphics().p("AqKCKIAAkTIUVAAIAAETg");
	var mask_graphics_268 = new cjs.Graphics().p("Ap+CIIAAkPIT9AAIAAEPg");
	var mask_graphics_269 = new cjs.Graphics().p("Ap0CFIAAkJITpAAIAAEJg");
	var mask_graphics_270 = new cjs.Graphics().p("ApqCDIAAkFITVAAIAAEFg");
	var mask_graphics_271 = new cjs.Graphics().p("AphCCIAAkCITDAAIAAECg");
	var mask_graphics_272 = new cjs.Graphics().p("ApaCAIAAj/IS1AAIAAD/g");
	var mask_graphics_273 = new cjs.Graphics().p("ApTB+IAAj8ISnAAIAAD8g");
	var mask_graphics_274 = new cjs.Graphics().p("ApOB9IAAj5ISdAAIAAD5g");
	var mask_graphics_275 = new cjs.Graphics().p("ApJB8IAAj3ISTAAIAAD3g");
	var mask_graphics_276 = new cjs.Graphics().p("ApFB8IAAj3ISLAAIAAD3g");
	var mask_graphics_277 = new cjs.Graphics().p("ApDB7IAAj1ISHAAIAAD1g");
	var mask_graphics_278 = new cjs.Graphics().p("ApBB7IAAj0ISDAAIAAD0g");
	var mask_graphics_279 = new cjs.Graphics().p("ApBB7IAAj0ISDAAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(246).to({graphics:mask_graphics_246,x:148.075,y:390.3}).wait(3).to({graphics:mask_graphics_249,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_250,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_251,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_252,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_253,x:148.1,y:390.3}).wait(1).to({graphics:mask_graphics_254,x:148.1,y:390.3}).wait(1).to({graphics:mask_graphics_255,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_256,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_257,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_258,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_259,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_260,x:148.1,y:390.3}).wait(1).to({graphics:mask_graphics_261,x:148.1,y:390.3}).wait(1).to({graphics:mask_graphics_262,x:148.1,y:390.3}).wait(1).to({graphics:mask_graphics_263,x:148.1,y:390.325}).wait(1).to({graphics:mask_graphics_264,x:148.1,y:390.325}).wait(1).to({graphics:mask_graphics_265,x:148.1,y:390.325}).wait(1).to({graphics:mask_graphics_266,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_267,x:148.1,y:390.325}).wait(1).to({graphics:mask_graphics_268,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_269,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_270,x:148.1,y:390.325}).wait(1).to({graphics:mask_graphics_271,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_272,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_273,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_274,x:148.1,y:390.3}).wait(1).to({graphics:mask_graphics_275,x:148.075,y:390.325}).wait(1).to({graphics:mask_graphics_276,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_277,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_278,x:148.075,y:390.3}).wait(1).to({graphics:mask_graphics_279,x:148.075,y:390.3}).wait(143));

	// Layer_20
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-11.3,-6.1,11.3,6.1).s().p("AlaF3IHTtnIDiB6InTNng");
	this.shape_47.setTransform(64.5119,368.1149,1.7205,1.5533);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApUJIIMk1LIGFC9IsjVKg");
	this.shape_48.setTransform(64.75,368.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.4,19.4,9.4).s().p("ApVJIIMl1LIGFC9IsjVKg");
	this.shape_49.setTransform(65.45,368.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApUJIIMk1LIGFC9IskVKg");
	this.shape_50.setTransform(66.65,368.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJIIMl1MIGGC+IslVLg");
	this.shape_51.setTransform(70.525,369.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJIIMl1MIGGC9IslVMg");
	this.shape_52.setTransform(73.175,370.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJJIMl1NIGGC9IslVMg");
	this.shape_53.setTransform(76.3,370.925);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.4,9.4).s().p("ApVJJIMl1OIGGC+IslVNg");
	this.shape_54.setTransform(79.925,371.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.4).s().p("ApVJJIMl1OIGGC9IslVOg");
	this.shape_55.setTransform(84.025,372.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.4).s().p("ApVJKIMl1QIGGC+IslVPg");
	this.shape_56.setTransform(88.625,373.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.4).s().p("ApVJKIMl1RIGGC+IslVQg");
	this.shape_57.setTransform(93.675,375.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.4).s().p("ApWJKIMn1RIGFC+IslVRg");
	this.shape_58.setTransform(99.2,376.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApWJLIMm1TIGHC/IsmVSg");
	this.shape_59.setTransform(105.225,377.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApWJMIMm1VIGHC/IsmVUg");
	this.shape_60.setTransform(111.75,379.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApWJMIMn1WIGGC/IsmVVg");
	this.shape_61.setTransform(118.725,381.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.4).s().p("ApXJOIMo1YIGGC+IsmVXg");
	this.shape_62.setTransform(126.2,382.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.5,19.5,9.5).s().p("ApXJOIMo1ZIGHC/IsnVYg");
	this.shape_63.setTransform(134.15,384.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.5,-9.6,19.5,9.5).s().p("ApXJPIMn1cIGIDAIsnVag");
	this.shape_64.setTransform(142.6,386.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.5).s().p("ApXJPIMo1cIGHC/IsnVdg");
	this.shape_65.setTransform(151.4,388.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.5).s().p("ApXJQIMo1fIGHDAIsoVfg");
	this.shape_66.setTransform(159.825,390.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.6).s().p("ApYJRIMp1hIGIDBIspVgg");
	this.shape_67.setTransform(167.8,392.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.6,9.5).s().p("ApYJSIMp1iIGIDAIspVhg");
	this.shape_68.setTransform(175.275,394.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.6).s().p("ApYJSIMp1jIGIDAIspVjg");
	this.shape_69.setTransform(182.25,396.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.5,9.5).s().p("ApYJTIMp1lIGIDAIspVlg");
	this.shape_70.setTransform(188.775,397.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.5,9.6).s().p("ApZJTIMq1mIGJDBIsqVmg");
	this.shape_71.setTransform(194.8,399.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJUIMq1oIGJDCIsqVmg");
	this.shape_72.setTransform(200.325,400.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.6,19.6,9.6).s().p("ApZJUIMq1oIGJDBIsqVog");
	this.shape_73.setTransform(205.375,401.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJVIMq1qIGJDCIsqVpg");
	this.shape_74.setTransform(209.975,402.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.6).s().p("ApZJVIMr1rIGIDCIsqVrg");
	this.shape_75.setTransform(217.675,404.775);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.5,9.6).s().p("ApZJWIMq1sIGJDCIsqVrg");
	this.shape_76.setTransform(220.825,405.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApZJWIMq1sIGJDBIsqVsg");
	this.shape_77.setTransform(223.475,406.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.7).s().p("ApZJWIMq1tIGKDCIssVtg");
	this.shape_78.setTransform(225.65,406.675);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.6,-9.7,19.6,9.7).s().p("ApZJWIMr1tIGIDCIsqVtg");
	this.shape_79.setTransform(227.325,407.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApZJWIMq1tIGKDCIsrVtg");
	this.shape_80.setTransform(228.55,407.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.898)","rgba(255,255,255,0)"],[0,0.529,1],-19.7,-9.7,19.6,9.6).s().p("ApZJWIMq1tIGKDCIssVtg");
	this.shape_81.setTransform(229.25,407.55);

	var maskedShapeInstanceList = [this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47,p:{scaleX:1.7205,scaleY:1.5533,x:64.5119,y:368.1149}}]},246).to({state:[{t:this.shape_48,p:{x:64.75,y:368.15}}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_48,p:{x:68.35,y:369.025}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74,p:{x:209.975,y:402.925}}]},1).to({state:[{t:this.shape_74,p:{x:214.05,y:403.9}}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_47,p:{scaleX:1.7352,scaleY:1.5936,x:229.4918,y:407.6233}}]},1).wait(139));

	// cta_btn
	this.instance_1 = new lib.cta_btn();
	this.instance_1.setTransform(148.3,390.3,1,1,0,0,0,0,31);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).to({alpha:1},20).wait(115).to({scaleX:1.1727,scaleY:1.1727,x:148.35},16,cjs.Ease.quadIn).to({scaleX:1,scaleY:1,x:148.3},14,cjs.Ease.quadOut).wait(143));

	// txt_youPaused
	this.instance_2 = new lib.txt_youPaused();
	this.instance_2.setTransform(149.3,304.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({alpha:1},20).wait(166).to({alpha:0},20).wait(196));

	// Image_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3hTAMAAAgl/MAvDAAAMAAAAl/g");
	mask_1.setTransform(150.55,134.55);

	// Image_top
	this.instance_3 = new lib.birthday_img_1();
	this.instance_3.setTransform(145.1,134.05,1.0539,1.0539);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},20).wait(73).to({alpha:0},21).to({_off:true},1).wait(307));

	// Image_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A3hMSIAA4jMAvDAAAIAAYjg");
	mask_2.setTransform(150.55,521.55);

	// Layer_14
	this.instance_4 = new lib.putt_img_1();
	this.instance_4.setTransform(151.25,538.15,1.1353,1.1353);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},20).wait(73).to({alpha:0},21).to({_off:true},1).wait(307));

	// Txt_mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_69 = new cjs.Graphics().p("AzmDmIAAnLMAnOAAAIAAHLg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_3_graphics_69,x:150.55,y:342.075}).wait(353));

	// txt_youPaused
	this.instance_5 = new lib.txt_nowPlay();
	this.instance_5.setTransform(149.3,268.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},0).wait(1).to({regX:1.7,regY:32.3,x:151,y:301.05},0).wait(1).to({y:301.2},0).wait(1).to({y:301.45},0).wait(1).to({y:301.75},0).wait(1).to({y:302.15},0).wait(1).to({y:302.6},0).wait(1).to({y:303.15},0).wait(1).to({y:303.8},0).wait(1).to({y:304.5},0).wait(1).to({y:305.35},0).wait(1).to({y:306.3},0).wait(1).to({y:307.3},0).wait(1).to({y:308.45},0).wait(1).to({y:309.7},0).wait(1).to({y:311},0).wait(1).to({y:312.4},0).wait(1).to({y:313.9},0).wait(1).to({y:315.4},0).wait(1).to({y:316.95},0).wait(1).to({y:318.55},0).wait(1).to({y:320.1},0).wait(1).to({y:321.65},0).wait(1).to({y:323.2},0).wait(1).to({y:324.65},0).wait(1).to({regX:0,regY:0,x:149.3,y:293.75},0).wait(1).to({regX:1.7,regY:32.3,x:151,y:327.1,alpha:0.099},0).wait(1).to({y:328.15,alpha:0.1929},0).wait(1).to({y:329.1,alpha:0.2814},0).wait(1).to({y:330,alpha:0.3643},0).wait(1).to({y:330.85,alpha:0.4416},0).wait(1).to({y:331.65,alpha:0.5134},0).wait(1).to({y:332.35,alpha:0.5795},0).wait(1).to({y:333.05,alpha:0.6402},0).wait(1).to({y:333.65,alpha:0.6956},0).wait(1).to({y:334.2,alpha:0.7458},0).wait(1).to({y:334.7,alpha:0.7909},0).wait(1).to({y:335.15,alpha:0.8312},0).wait(1).to({y:335.5,alpha:0.8668},0).wait(1).to({y:335.85,alpha:0.8979},0).wait(1).to({y:336.15,alpha:0.9247},0).wait(1).to({y:336.4,alpha:0.9474},0).wait(1).to({y:336.6,alpha:0.9661},0).wait(1).to({y:336.75,alpha:0.981},0).wait(1).to({y:336.9,alpha:0.9922},0).wait(1).to({regX:0,regY:0,x:149.3,y:304.7,alpha:1},0).wait(92).to({alpha:0},20).wait(196));

	// Image_mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_85 = new cjs.Graphics().p("A3hTAMAAAgl/MAvDAAAMAAAAl/g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_4_graphics_85,x:150.55,y:134.55}).wait(337));

	// Image_top
	this.instance_6 = new lib.pool_img_1();
	this.instance_6.setTransform(155.15,142.15,0.67,0.67,0,0,0,0.2,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(85).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.6693,scaleY:0.6693,x:155.0006,y:141.8006},0).wait(1).to({scaleX:0.6687,scaleY:0.6687,x:155.0011,y:141.8011},0).wait(1).to({scaleX:0.668,scaleY:0.668,x:155.0017,y:141.8017},0).wait(1).to({scaleX:0.6673,scaleY:0.6673,x:155.0023,y:141.8023},0).wait(1).to({scaleX:0.6667,scaleY:0.6667,x:155.0028,y:141.8028},0).wait(1).to({scaleX:0.666,scaleY:0.666,x:155.0034,y:141.8034},0).wait(1).to({scaleX:0.6654,scaleY:0.6654,x:155.004,y:141.804},0).wait(1).to({scaleX:0.6647,scaleY:0.6647,x:155.0045,y:141.8046},0).wait(1).to({scaleX:0.664,scaleY:0.664,x:155.0051,y:141.8051},0).wait(1).to({scaleX:0.6634,scaleY:0.6634,x:155.0057,y:141.8057},0).wait(1).to({scaleX:0.6627,scaleY:0.6627,x:155.0062,y:141.8063},0).wait(1).to({scaleX:0.662,scaleY:0.662,x:155.0068,y:141.8068},0).wait(1).to({scaleX:0.6614,scaleY:0.6614,x:155.0074,y:141.8074},0).wait(1).to({scaleX:0.6607,scaleY:0.6607,x:155.0079,y:141.808},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:155.0085,y:141.8086},0).wait(1).to({scaleX:0.6594,scaleY:0.6594,x:155.0091,y:141.8091},0).wait(1).to({scaleX:0.6587,scaleY:0.6587,x:155.0096,y:141.8097},0).wait(1).to({scaleX:0.658,scaleY:0.658,x:155.0102,y:141.8103},0).wait(1).to({scaleX:0.6574,scaleY:0.6574,x:155.0108,y:141.8108},0).wait(1).to({scaleX:0.6567,scaleY:0.6567,x:155.0114,y:141.8114},0).wait(1).to({scaleX:0.656,scaleY:0.656,x:155.0119,y:141.812},0).wait(1).to({scaleX:0.6554,scaleY:0.6554,x:155.0125,y:141.8126},0).wait(1).to({scaleX:0.6547,scaleY:0.6547,x:155.0131,y:141.8131},0).wait(1).to({scaleX:0.654,scaleY:0.654,x:155.0136,y:141.8137},0).wait(1).to({scaleX:0.6534,scaleY:0.6534,x:155.0142,y:141.8143},0).wait(1).to({scaleX:0.6527,scaleY:0.6527,x:155.0148,y:141.8149},0).wait(1).to({scaleX:0.652,scaleY:0.652,x:155.0154,y:141.8154},0).wait(1).to({scaleX:0.6514,scaleY:0.6514,x:155.0159,y:141.816},0).wait(1).to({scaleX:0.6507,scaleY:0.6507,x:155.0165,y:141.8166},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:155.0171,y:141.8172},0).wait(1).to({scaleX:0.6493,scaleY:0.6493,x:155.0176,y:141.8177},0).wait(1).to({scaleX:0.6487,scaleY:0.6487,x:155.0182,y:141.8183},0).wait(1).to({scaleX:0.648,scaleY:0.648,x:155.0188,y:141.8189},0).wait(1).to({scaleX:0.6473,scaleY:0.6473,x:155.0194,y:141.8195},0).wait(1).to({scaleX:0.6467,scaleY:0.6467,x:155.0199,y:141.8201},0).wait(1).to({scaleX:0.646,scaleY:0.646,x:155.0205,y:141.8206},0).wait(1).to({scaleX:0.6453,scaleY:0.6453,x:155.0211,y:141.8212},0).wait(1).to({scaleX:0.6447,scaleY:0.6447,x:155.0217,y:141.8218},0).wait(1).to({scaleX:0.644,scaleY:0.644,x:155.0222,y:141.8224},0).wait(1).to({scaleX:0.6433,scaleY:0.6433,x:155.0228,y:141.8229},0).wait(1).to({scaleX:0.6426,scaleY:0.6426,x:155.0234,y:141.8235},0).wait(1).to({scaleX:0.642,scaleY:0.642,x:155.024,y:141.8241},0).wait(1).to({scaleX:0.6413,scaleY:0.6413,x:155.0245,y:141.8247},0).wait(1).to({scaleX:0.6406,scaleY:0.6406,x:155.0251,y:141.8253},0).wait(1).to({scaleX:0.6399,scaleY:0.6399,x:155.0257,y:141.8258},0).wait(1).to({scaleX:0.6393,scaleY:0.6393,x:155.0263,y:141.8264},0).wait(1).to({scaleX:0.6386,scaleY:0.6386,x:155.0268,y:141.827},0).wait(1).to({scaleX:0.6379,scaleY:0.6379,x:155.0274,y:141.8276},0).wait(1).to({scaleX:0.6372,scaleY:0.6372,x:155.028,y:141.8282},0).wait(1).to({scaleX:0.6366,scaleY:0.6366,x:155.0286,y:141.8287},0).wait(1).to({scaleX:0.6359,scaleY:0.6359,x:155.0291,y:141.8293},0).wait(1).to({scaleX:0.6352,scaleY:0.6352,x:155.0297,y:141.8299},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:155.0303,y:141.8305},0).wait(1).to({scaleX:0.6339,scaleY:0.6339,x:155.0309,y:141.831},0).wait(1).to({scaleX:0.6332,scaleY:0.6332,x:155.0314,y:141.8316},0).wait(1).to({scaleX:0.6325,scaleY:0.6325,x:155.032,y:141.8322},0).wait(1).to({scaleX:0.6319,scaleY:0.6319,x:155.0326,y:141.8328},0).wait(1).to({scaleX:0.6312,scaleY:0.6312,x:155.0332,y:141.8334},0).wait(1).to({scaleX:0.6305,scaleY:0.6305,x:155.0337,y:141.834},0).wait(1).to({scaleX:0.6298,scaleY:0.6298,x:155.0343,y:141.8345},0).wait(1).to({scaleX:0.6292,scaleY:0.6292,x:155.0349,y:141.8351},0).wait(1).to({scaleX:0.6285,scaleY:0.6285,x:155.0355,y:141.8357},0).wait(1).to({scaleX:0.6278,scaleY:0.6278,x:155.0361,y:141.8363},0).wait(1).to({scaleX:0.6271,scaleY:0.6271,x:155.0366,y:141.8369},0).wait(1).to({scaleX:0.6265,scaleY:0.6265,x:155.0372,y:141.8374},0).wait(1).to({scaleX:0.6258,scaleY:0.6258,x:155.0378,y:141.838},0).wait(1).to({scaleX:0.6251,scaleY:0.6251,x:155.0384,y:141.8386},0).wait(1).to({scaleX:0.6244,scaleY:0.6244,x:155.0389,y:141.8392},0).wait(1).to({scaleX:0.6238,scaleY:0.6238,x:155.0395,y:141.8398},0).wait(1).to({scaleX:0.6231,scaleY:0.6231,x:155.0401,y:141.8403},0).wait(1).to({scaleX:0.6224,scaleY:0.6224,x:155.0407,y:141.8409},0).wait(1).to({scaleX:0.6217,scaleY:0.6217,x:155.0413,y:141.8415},0).wait(1).to({scaleX:0.621,scaleY:0.621,x:155.0418,y:141.8421},0).wait(1).to({scaleX:0.6204,scaleY:0.6204,x:155.0424,y:141.8427},0).wait(1).to({scaleX:0.6197,scaleY:0.6197,x:155.043,y:141.8432},0).wait(1).to({scaleX:0.619,scaleY:0.619,x:155.0436,y:141.8438},0).wait(1).to({scaleX:0.6183,scaleY:0.6183,x:155.0441,y:141.8444},0).wait(1).to({scaleX:0.6177,scaleY:0.6177,x:155.0447,y:141.845},0).wait(1).to({scaleX:0.617,scaleY:0.617,x:155.0453,y:141.8456},0).wait(1).to({scaleX:0.6163,scaleY:0.6163,x:155.0459,y:141.8462},0).wait(1).to({scaleX:0.6156,scaleY:0.6156,x:155.0465,y:141.8467},0).wait(1).to({scaleX:0.615,scaleY:0.615,x:155.047,y:141.8473},0).wait(1).to({scaleX:0.6143,scaleY:0.6143,x:155.0476,y:141.8479},0).wait(1).to({scaleX:0.6136,scaleY:0.6136,x:155.0482,y:141.8485},0).wait(1).to({scaleX:0.6129,scaleY:0.6129,x:155.0488,y:141.8491},0).wait(1).to({scaleX:0.6123,scaleY:0.6123,x:155.0493,y:141.8496},0).wait(1).to({scaleX:0.6116,scaleY:0.6116,x:155.0499,y:141.8502},0).wait(1).to({scaleX:0.6109,scaleY:0.6109,x:155.0505,y:141.8508},0).wait(1).to({scaleX:0.6102,scaleY:0.6102,x:155.0511,y:141.8514},0).wait(1).to({scaleX:0.6096,scaleY:0.6096,x:155.0517,y:141.852},0).wait(1).to({scaleX:0.6089,scaleY:0.6089,x:155.0522,y:141.8525},0).wait(1).to({scaleX:0.6082,scaleY:0.6082,x:155.0528,y:141.8531},0).wait(1).to({scaleX:0.6075,scaleY:0.6075,x:155.0534,y:141.8537},0).wait(1).to({scaleX:0.6069,scaleY:0.6069,x:155.054,y:141.8543},0).wait(1).to({scaleX:0.6062,scaleY:0.6062,x:155.0545,y:141.8549},0).wait(1).to({scaleX:0.6055,scaleY:0.6055,x:155.0551,y:141.8555},0).wait(1).to({scaleX:0.6048,scaleY:0.6048,x:155.0557,y:141.856},0).wait(1).to({scaleX:0.6042,scaleY:0.6042,x:155.0563,y:141.8566},0).wait(1).to({scaleX:0.6035,scaleY:0.6035,x:155.0569,y:141.8572},0).wait(1).to({scaleX:0.6028,scaleY:0.6028,x:155.0574,y:141.8578},0).wait(1).to({scaleX:0.6021,scaleY:0.6021,x:155.058,y:141.8584},0).wait(1).to({scaleX:0.6015,scaleY:0.6015,x:155.0586,y:141.8589},0).wait(1).to({scaleX:0.6008,scaleY:0.6008,x:155.0592,y:141.8595},0).wait(1).to({scaleX:0.6001,scaleY:0.6001,x:155.0597,y:141.8601},0).wait(1).to({scaleX:0.5994,scaleY:0.5994,x:155.0603,y:141.8607},0).wait(1).to({scaleX:0.5988,scaleY:0.5988,x:155.0609,y:141.8613},0).wait(1).to({scaleX:0.5981,scaleY:0.5981,x:155.0615,y:141.8618},0).wait(1).to({scaleX:0.5974,scaleY:0.5974,x:155.062,y:141.8624},0).wait(1).to({scaleX:0.5967,scaleY:0.5967,x:155.0626,y:141.863},0).wait(1).to({scaleX:0.5961,scaleY:0.5961,x:155.0632,y:141.8636},0).wait(1).to({scaleX:0.5954,scaleY:0.5954,x:155.0638,y:141.8642},0).wait(1).to({scaleX:0.5947,scaleY:0.5947,x:155.0643,y:141.8647},0).wait(1).to({scaleX:0.594,scaleY:0.594,x:155.0649,y:141.8653},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:155.0655,y:141.8659},0).wait(1).to({scaleX:0.5927,scaleY:0.5927,x:155.0661,y:141.8665},0).wait(1).to({scaleX:0.592,scaleY:0.592,x:155.0666,y:141.867},0).wait(1).to({scaleX:0.5914,scaleY:0.5914,x:155.0672,y:141.8676},0).wait(1).to({scaleX:0.5907,scaleY:0.5907,x:155.0678,y:141.8682},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:155.0684,y:141.8688},0).wait(1).to({scaleX:0.5893,scaleY:0.5893,x:155.0689,y:141.8694},0).wait(1).to({scaleX:0.5887,scaleY:0.5887,x:155.0695,y:141.8699},0).wait(1).to({scaleX:0.588,scaleY:0.588,x:155.0701,y:141.8705},0).wait(1).to({scaleX:0.5873,scaleY:0.5873,x:155.0707,y:141.8711},0).wait(1).to({scaleX:0.5867,scaleY:0.5867,x:155.0712,y:141.8717},0).wait(1).to({scaleX:0.586,scaleY:0.586,x:155.0718,y:141.8722},0).wait(1).to({scaleX:0.5853,scaleY:0.5853,x:155.0724,y:141.8728},0).wait(1).to({scaleX:0.5846,scaleY:0.5846,x:155.073,y:141.8734},0).wait(1).to({scaleX:0.584,scaleY:0.584,x:155.0735,y:141.874},0).wait(1).to({scaleX:0.5833,scaleY:0.5833,x:155.0741,y:141.8745},0).wait(1).to({scaleX:0.5826,scaleY:0.5826,x:155.0747,y:141.8751},0).wait(1).to({scaleX:0.582,scaleY:0.582,x:155.0752,y:141.8757},0).wait(1).to({scaleX:0.5813,scaleY:0.5813,x:155.0758,y:141.8763},0).wait(1).to({scaleX:0.5806,scaleY:0.5806,x:155.0764,y:141.8768},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:155.077,y:141.8774},0).wait(1).to({scaleX:0.5793,scaleY:0.5793,x:155.0775,y:141.878},0).wait(1).to({scaleX:0.5786,scaleY:0.5786,x:155.0781,y:141.8786},0).wait(1).to({scaleX:0.578,scaleY:0.578,x:155.0787,y:141.8791},0).wait(1).to({scaleX:0.5773,scaleY:0.5773,x:155.0792,y:141.8797},0).wait(1).to({scaleX:0.5766,scaleY:0.5766,x:155.0798,y:141.8803},0).wait(1).to({scaleX:0.576,scaleY:0.576,x:155.0804,y:141.8809},0).wait(1).to({scaleX:0.5753,scaleY:0.5753,x:155.081,y:141.8814},0).wait(1).to({scaleX:0.5746,scaleY:0.5746,x:155.0815,y:141.882},0).wait(1).to({scaleX:0.574,scaleY:0.574,x:155.0821,y:141.8826},0).wait(1).to({scaleX:0.5733,scaleY:0.5733,x:155.0827,y:141.8832},0).wait(1).to({scaleX:0.5726,scaleY:0.5726,x:155.0832,y:141.8837},0).wait(1).to({scaleX:0.572,scaleY:0.572,x:155.0838,y:141.8843},0).wait(1).to({scaleX:0.5713,scaleY:0.5713,x:155.0844,y:141.8849},0).wait(1).to({scaleX:0.5706,scaleY:0.5706,x:155.0849,y:141.8854},0).wait(1).to({regX:0.4,regY:0.2,scaleX:0.57,scaleY:0.57,x:155.25,y:142.1},0).wait(188));

	// Image_mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_85 = new cjs.Graphics().p("A3hMSIAA4jMAvDAAAIAAYjg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_5_graphics_85,x:150.55,y:521.55}).wait(337));

	// Layer_14
	this.instance_7 = new lib.golf_img_1();
	this.instance_7.setTransform(155.2,480.25,0.58,0.58,0,0,0,0.2,0.4);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85).to({_off:false},0).to({regX:0,regY:0.1,scaleX:0.46,scaleY:0.46,x:155.25,y:480.15},149).wait(188));

	// Layer_18
	this.instance_8 = new lib.txt_15Off();
	this.instance_8.setTransform(151,314.05,1,1,0,0,0,-0.8,1.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(226).to({_off:false},0).to({alpha:1},20).wait(176));

	// Background
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_82.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(422));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(104.1,255,244.1,346);
// library properties:
lib.properties = {
	id: '8859C8DD51594D4288446DA309E3911B',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"birthday_img.jpg?1617750484654", id:"birthday_img"},
		{src:"golf_img.jpg?1617750484654", id:"golf_img"},
		{src:"pool_img.jpg?1617750484654", id:"pool_img"},
		{src:"putt_img.jpg?1617750484654", id:"putt_img"}
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
an.compositions['8859C8DD51594D4288446DA309E3911B'] = {
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