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
(lib.Launch_Omni = function(mode,startPosition,loop,reversed) {
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
	this.instance_3.setTransform(145.1,134.05);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:1.0007,scaleY:1.0007,alpha:0.0493},0).wait(1).to({scaleX:1.0013,scaleY:1.0013,alpha:0.0988},0).wait(1).to({scaleX:1.002,scaleY:1.002,alpha:0.1485},0).wait(1).to({scaleX:1.0027,scaleY:1.0027,alpha:0.1983},0).wait(1).to({scaleX:1.0034,scaleY:1.0034,alpha:0.2483},0).wait(1).to({scaleX:1.004,scaleY:1.004,alpha:0.2984},0).wait(1).to({scaleX:1.0047,scaleY:1.0047,alpha:0.3485},0).wait(1).to({scaleX:1.0054,scaleY:1.0054,alpha:0.3988},0).wait(1).to({scaleX:1.0061,scaleY:1.0061,alpha:0.4491},0).wait(1).to({scaleX:1.0067,scaleY:1.0067,alpha:0.4995},0).wait(1).to({scaleX:1.0074,scaleY:1.0074,alpha:0.5498},0).wait(1).to({scaleX:1.0081,scaleY:1.0081,alpha:0.6002},0).wait(1).to({scaleX:1.0088,scaleY:1.0088,alpha:0.6505},0).wait(1).to({scaleX:1.0095,scaleY:1.0095,alpha:0.7008},0).wait(1).to({scaleX:1.0101,scaleY:1.0101,alpha:0.751},0).wait(1).to({scaleX:1.0108,scaleY:1.0108,alpha:0.801},0).wait(1).to({scaleX:1.0115,scaleY:1.0115,alpha:0.851},0).wait(1).to({scaleX:1.0122,scaleY:1.0122,alpha:0.9009},0).wait(1).to({scaleX:1.0128,scaleY:1.0128,alpha:0.9505},0).wait(1).to({scaleX:1.0135,scaleY:1.0135,alpha:1},0).wait(1).to({scaleX:1.0141,scaleY:1.0141,y:134.052},0).wait(1).to({scaleX:1.0147,scaleY:1.0147,y:134.0539},0).wait(1).to({scaleX:1.0152,scaleY:1.0152,y:134.0559},0).wait(1).to({scaleX:1.0158,scaleY:1.0158,y:134.0578},0).wait(1).to({scaleX:1.0164,scaleY:1.0164,y:134.0597},0).wait(1).to({scaleX:1.0169,scaleY:1.0169,y:134.0616},0).wait(1).to({scaleX:1.0175,scaleY:1.0175,y:134.0635},0).wait(1).to({scaleX:1.0181,scaleY:1.0181,y:134.0654},0).wait(1).to({scaleX:1.0186,scaleY:1.0186,y:134.0673},0).wait(1).to({scaleX:1.0192,scaleY:1.0192,y:134.0692},0).wait(1).to({scaleX:1.0197,scaleY:1.0197,y:134.0711},0).wait(1).to({scaleX:1.0203,scaleY:1.0203,y:134.0729},0).wait(1).to({scaleX:1.0208,scaleY:1.0208,y:134.0748},0).wait(1).to({scaleX:1.0214,scaleY:1.0214,y:134.0766},0).wait(1).to({scaleX:1.0219,scaleY:1.0219,y:134.0784},0).wait(1).to({scaleX:1.0224,scaleY:1.0224,y:134.0802},0).wait(1).to({scaleX:1.0229,scaleY:1.0229,y:134.082},0).wait(1).to({scaleX:1.0235,scaleY:1.0235,y:134.0837},0).wait(1).to({scaleX:1.024,scaleY:1.024,y:134.0855},0).wait(1).to({scaleX:1.0245,scaleY:1.0245,y:134.0872},0).wait(1).to({scaleX:1.025,scaleY:1.025,y:134.089},0).wait(1).to({scaleX:1.0255,scaleY:1.0255,y:134.0907},0).wait(1).to({scaleX:1.026,scaleY:1.026,y:134.0924},0).wait(1).to({scaleX:1.0265,scaleY:1.0265,y:134.094},0).wait(1).to({scaleX:1.027,scaleY:1.027,y:134.0957},0).wait(1).to({scaleX:1.0275,scaleY:1.0275,y:134.0974},0).wait(1).to({scaleX:1.028,scaleY:1.028,y:134.099},0).wait(1).to({scaleX:1.0284,scaleY:1.0284,y:134.1006},0).wait(1).to({scaleX:1.0289,scaleY:1.0289,y:134.1022},0).wait(1).to({scaleX:1.0294,scaleY:1.0294,y:134.1038},0).wait(1).to({scaleX:1.0298,scaleY:1.0298,y:134.1053},0).wait(1).to({scaleX:1.0303,scaleY:1.0303,y:134.1069},0).wait(1).to({scaleX:1.0307,scaleY:1.0307,y:134.1084},0).wait(1).to({scaleX:1.0312,scaleY:1.0312,y:134.1099},0).wait(1).to({scaleX:1.0316,scaleY:1.0316,y:134.1114},0).wait(1).to({scaleX:1.0321,scaleY:1.0321,y:134.1129},0).wait(1).to({scaleX:1.0325,scaleY:1.0325,y:134.1143},0).wait(1).to({scaleX:1.0329,scaleY:1.0329,y:134.1158},0).wait(1).to({scaleX:1.0333,scaleY:1.0333,y:134.1172},0).wait(1).to({scaleX:1.0338,scaleY:1.0338,y:134.1186},0).wait(1).to({scaleX:1.0342,scaleY:1.0342,y:134.12},0).wait(1).to({scaleX:1.0346,scaleY:1.0346,y:134.1214},0).wait(1).to({scaleX:1.035,scaleY:1.035,y:134.1227},0).wait(1).to({scaleX:1.0354,scaleY:1.0354,y:134.1241},0).wait(1).to({scaleX:1.0358,scaleY:1.0358,y:134.1254},0).wait(1).to({scaleX:1.0361,scaleY:1.0361,y:134.1267},0).wait(1).to({scaleX:1.0365,scaleY:1.0365,y:134.128},0).wait(1).to({scaleX:1.0369,scaleY:1.0369,y:134.1292},0).wait(1).to({scaleX:1.0373,scaleY:1.0373,y:134.1305},0).wait(1).to({scaleX:1.0376,scaleY:1.0376,y:134.1317},0).wait(1).to({scaleX:1.038,scaleY:1.038,y:134.133},0).wait(1).to({scaleX:1.0383,scaleY:1.0383,y:134.1342},0).wait(1).to({scaleX:1.0387,scaleY:1.0387,y:134.1353},0).wait(1).to({scaleX:1.039,scaleY:1.039,y:134.1365},0).wait(1).to({scaleX:1.0394,scaleY:1.0394,y:134.1377},0).wait(1).to({scaleX:1.0397,scaleY:1.0397,y:134.1388},0).wait(1).to({scaleX:1.0401,scaleY:1.0401,y:134.1399},0).wait(1).to({scaleX:1.0404,scaleY:1.0404,y:134.141},0).wait(1).to({scaleX:1.0407,scaleY:1.0407,y:134.1421},0).wait(1).to({scaleX:1.041,scaleY:1.041,y:134.1432},0).wait(1).to({scaleX:1.0413,scaleY:1.0413,y:134.1443},0).wait(1).to({scaleX:1.0416,scaleY:1.0416,y:134.1453},0).wait(1).to({scaleX:1.0419,scaleY:1.0419,y:134.1463},0).wait(1).to({scaleX:1.0422,scaleY:1.0422,y:134.1473},0).wait(1).to({scaleX:1.0425,scaleY:1.0425,y:134.1483},0).wait(1).to({scaleX:1.0428,scaleY:1.0428,y:134.1493},0).wait(1).to({scaleX:1.0431,scaleY:1.0431,y:134.1503},0).wait(1).to({scaleX:1.0434,scaleY:1.0434,y:134.1512},0).wait(1).to({scaleX:1.0437,scaleY:1.0437,y:134.1},0).wait(1).to({scaleX:1.0439,scaleY:1.0439,x:145.1001,y:134.1001,alpha:0.9517},0).wait(1).to({scaleX:1.0442,scaleY:1.0442,x:145.1002,y:134.1002,alpha:0.9041},0).wait(1).to({scaleX:1.0445,scaleY:1.0445,x:145.1004,y:134.1004,alpha:0.8573},0).wait(1).to({scaleX:1.0447,scaleY:1.0447,x:145.1005,y:134.1005,alpha:0.8112},0).wait(1).to({scaleX:1.045,scaleY:1.045,x:145.1006,y:134.1006,alpha:0.7659},0).wait(1).to({scaleX:1.0452,scaleY:1.0452,x:145.1007,y:134.1007,alpha:0.7212},0).wait(1).to({scaleX:1.0455,scaleY:1.0455,x:145.1008,y:134.1008,alpha:0.6773},0).wait(1).to({scaleX:1.0457,scaleY:1.0457,x:145.1009,y:134.1009,alpha:0.6341},0).wait(1).to({scaleX:1.046,scaleY:1.046,x:145.101,y:134.101,alpha:0.5915},0).wait(1).to({scaleX:1.0462,scaleY:1.0462,x:145.1011,y:134.1011,alpha:0.5497},0).wait(1).to({scaleX:1.0464,scaleY:1.0464,x:145.1012,y:134.1012,alpha:0.5085},0).wait(1).to({scaleX:1.0467,scaleY:1.0467,x:145.1013,y:134.1013,alpha:0.468},0).wait(1).to({scaleX:1.0469,scaleY:1.0469,x:145.1014,y:134.1014,alpha:0.4282},0).wait(1).to({scaleX:1.0471,scaleY:1.0471,x:145.1015,y:134.1015,alpha:0.389},0).wait(1).to({scaleX:1.0473,scaleY:1.0473,x:145.1016,y:134.1016,alpha:0.3505},0).wait(1).to({scaleX:1.0476,scaleY:1.0476,x:145.1017,y:134.1017,alpha:0.3127},0).wait(1).to({scaleX:1.0478,scaleY:1.0478,x:145.1018,y:134.1018,alpha:0.2755},0).wait(1).to({scaleX:1.048,scaleY:1.048,x:145.1019,y:134.1019,alpha:0.2389},0).wait(1).to({scaleX:1.0482,scaleY:1.0482,x:145.102,y:134.102,alpha:0.2029},0).wait(1).to({scaleX:1.0484,scaleY:1.0484,x:145.1021,y:134.1021,alpha:0.1676},0).wait(1).to({scaleX:1.0486,scaleY:1.0486,alpha:0.1329},0).wait(1).to({scaleX:1.0488,scaleY:1.0488,x:145.1022,y:134.1022,alpha:0.0988},0).wait(1).to({scaleX:1.0489,scaleY:1.0489,x:145.1023,y:134.1023,alpha:0.0652},0).wait(1).to({scaleX:1.0491,scaleY:1.0491,x:145.1024,y:134.1024,alpha:0.0323},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.0493,scaleY:1.0493,x:145.15,y:134.15,alpha:0},0).wait(1).to({regX:0,regY:0,scaleX:1.0495,scaleY:1.0495,x:145.0499,y:134.0479},0).wait(1).to({scaleX:1.0497,scaleY:1.0497,x:145.0498,y:134.0459},0).wait(1).to({scaleX:1.0499,scaleY:1.0499,x:145.0497,y:134.0439},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:145.0496,y:134.0419},0).wait(1).to({scaleX:1.0502,scaleY:1.0502,x:145.0495,y:134.04},0).wait(1).to({scaleX:1.0504,scaleY:1.0504,x:145.0494,y:134.0381},0).wait(1).to({scaleX:1.0505,scaleY:1.0505,x:145.0493,y:134.0362},0).wait(1).to({scaleX:1.0507,scaleY:1.0507,x:145.0492,y:134.0344},0).wait(1).to({scaleX:1.0508,scaleY:1.0508,x:145.0491,y:134.0326},0).wait(1).to({scaleX:1.051,scaleY:1.051,x:145.049,y:134.0309},0).wait(1).to({scaleX:1.0511,scaleY:1.0511,x:145.0489,y:134.0291},0).wait(1).to({scaleX:1.0513,scaleY:1.0513,x:145.0488,y:134.0275},0).wait(1).to({scaleX:1.0514,scaleY:1.0514,y:134.0258},0).wait(1).to({scaleX:1.0516,scaleY:1.0516,x:145.0487,y:134.0242},0).wait(1).to({scaleX:1.0517,scaleY:1.0517,x:145.0486,y:134.0226},0).wait(1).to({scaleX:1.0518,scaleY:1.0518,x:145.0485,y:134.0211},0).wait(1).to({scaleX:1.052,scaleY:1.052,x:145.0484,y:134.0195},0).wait(1).to({scaleX:1.0521,scaleY:1.0521,y:134.018},0).wait(1).to({scaleX:1.0522,scaleY:1.0522,x:145.0483,y:134.0166},0).wait(1).to({scaleX:1.0524,scaleY:1.0524,x:145.0482,y:134.0152},0).wait(1).to({scaleX:1.0525,scaleY:1.0525,x:145.0481,y:134.0138},0).wait(1).to({scaleX:1.0526,scaleY:1.0526,y:134.0124},0).wait(1).to({scaleX:1.0527,scaleY:1.0527,x:145.048,y:134.0111},0).wait(1).to({scaleX:1.0528,scaleY:1.0528,x:145.0479,y:134.0098},0).wait(1).to({scaleX:1.0529,scaleY:1.0529,y:134.0085},0).wait(1).to({scaleX:1.0531,scaleY:1.0531,x:145.0478,y:134.0072},0).wait(1).to({scaleX:1.0532,scaleY:1.0532,y:134.006},0).wait(1).to({scaleX:1.0533,scaleY:1.0533,x:145.0477,y:134.0048},0).wait(1).to({scaleX:1.0534,scaleY:1.0534,x:145.0476,y:134.0037},0).wait(1).to({scaleX:1.0535,scaleY:1.0535,y:134.0026},0).wait(1).to({scaleX:1.0536,scaleY:1.0536,x:145.0475,y:134.0014},0).wait(1).to({scaleX:1.0537,scaleY:1.0537,y:134.0004},0).wait(1).to({x:145.0474,y:133.9993},0).wait(1).to({scaleX:1.0538,scaleY:1.0538,y:133.9983},0).wait(1).to({scaleX:1.0539,scaleY:1.0539,x:145.1,y:134.05},0).wait(273));

	// Image_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A3hMSIAA4jMAvDAAAIAAYjg");
	mask_2.setTransform(150.55,521.55);

	// Layer_14
	this.instance_4 = new lib.putt_img_1();
	this.instance_4.setTransform(151.25,538.15);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.0182,scaleY:1.0182,alpha:1},20).to({scaleX:1.0808,scaleY:1.0808,x:151.2},69).to({scaleX:1.1035,scaleY:1.1035,alpha:0},25).to({scaleX:1.1353,scaleY:1.1353,x:151.25},35).wait(273));

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
	var mask_4_graphics_93 = new cjs.Graphics().p("A3hTAMAAAgl/MAvDAAAMAAAAl/g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_4_graphics_93,x:150.55,y:134.55}).wait(329));

	// Image_top
	this.instance_6 = new lib.pool_img_1();
	this.instance_6.setTransform(155.15,142.05,0.61,0.61,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(93).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.6097,scaleY:0.6097,x:155.1003,y:142.0004},0).wait(1).to({scaleX:0.6094,scaleY:0.6094,x:155.1006,y:142.0008},0).wait(1).to({scaleX:0.6092,scaleY:0.6092,x:155.1008,y:142.0011},0).wait(1).to({scaleX:0.6089,scaleY:0.6089,x:155.1011,y:142.0015},0).wait(1).to({scaleX:0.6086,scaleY:0.6086,x:155.1014,y:142.0019},0).wait(1).to({scaleX:0.6084,scaleY:0.6084,x:155.1017,y:142.0023},0).wait(1).to({scaleX:0.6081,scaleY:0.6081,x:155.102,y:142.0026},0).wait(1).to({scaleX:0.6079,scaleY:0.6079,x:155.1022,y:142.003},0).wait(1).to({scaleX:0.6076,scaleY:0.6076,x:155.1025,y:142.0034},0).wait(1).to({scaleX:0.6073,scaleY:0.6073,x:155.1028,y:142.0038},0).wait(1).to({scaleX:0.6071,scaleY:0.6071,x:155.1031,y:142.0042},0).wait(1).to({scaleX:0.6068,scaleY:0.6068,x:155.1034,y:142.0045},0).wait(1).to({scaleX:0.6065,scaleY:0.6065,x:155.1037,y:142.0049},0).wait(1).to({scaleX:0.6063,scaleY:0.6063,x:155.1039,y:142.0053},0).wait(1).to({scaleX:0.606,scaleY:0.606,x:155.1042,y:142.0057},0).wait(1).to({scaleX:0.6057,scaleY:0.6057,x:155.1045,y:142.006},0).wait(1).to({scaleX:0.6055,scaleY:0.6055,x:155.1048,y:142.0064},0).wait(1).to({scaleX:0.6052,scaleY:0.6052,x:155.1051,y:142.0068},0).wait(1).to({scaleX:0.6049,scaleY:0.6049,x:155.1054,y:142.0072},0).wait(1).to({scaleX:0.6047,scaleY:0.6047,x:155.1056,y:142.0076},0).wait(1).to({scaleX:0.6044,scaleY:0.6044,x:155.1059,y:142.0079},0).wait(1).to({scaleX:0.6041,scaleY:0.6041,x:155.1062,y:142.0083},0).wait(1).to({scaleX:0.6039,scaleY:0.6039,x:155.1065,y:142.0087},0).wait(1).to({scaleX:0.6036,scaleY:0.6036,x:155.1068,y:142.0091},0).wait(1).to({scaleX:0.6033,scaleY:0.6033,x:155.1071,y:142.0095},0).wait(1).to({scaleX:0.6031,scaleY:0.6031,x:155.1073,y:142.0099},0).wait(1).to({scaleX:0.6028,scaleY:0.6028,x:155.1076,y:142.0102},0).wait(1).to({scaleX:0.6025,scaleY:0.6025,x:155.1079,y:142.0106},0).wait(1).to({scaleX:0.6023,scaleY:0.6023,x:155.1082,y:142.011},0).wait(1).to({scaleX:0.602,scaleY:0.602,x:155.1085,y:142.0114},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,x:155.1088,y:142.0118},0).wait(1).to({scaleX:0.6014,scaleY:0.6014,x:155.1091,y:142.0121},0).wait(1).to({scaleX:0.6012,scaleY:0.6012,x:155.1093,y:142.0125},0).wait(1).to({scaleX:0.6009,scaleY:0.6009,x:155.1096,y:142.0129},0).wait(1).to({scaleX:0.6006,scaleY:0.6006,x:155.1099,y:142.0133},0).wait(1).to({scaleX:0.6004,scaleY:0.6004,x:155.1102,y:142.0137},0).wait(1).to({scaleX:0.6001,scaleY:0.6001,x:155.1105,y:142.0141},0).wait(1).to({scaleX:0.5998,scaleY:0.5998,x:155.1108,y:142.0144},0).wait(1).to({scaleX:0.5996,scaleY:0.5996,x:155.111,y:142.0148},0).wait(1).to({scaleX:0.5993,scaleY:0.5993,x:155.1113,y:142.0152},0).wait(1).to({scaleX:0.599,scaleY:0.599,x:155.1116,y:142.0156},0).wait(1).to({scaleX:0.5988,scaleY:0.5988,x:155.1119,y:142.016},0).wait(1).to({scaleX:0.5985,scaleY:0.5985,x:155.1122,y:142.0164},0).wait(1).to({scaleX:0.5982,scaleY:0.5982,x:155.1125,y:142.0167},0).wait(1).to({scaleX:0.598,scaleY:0.598,x:155.1128,y:142.0171},0).wait(1).to({scaleX:0.5977,scaleY:0.5977,x:155.1131,y:142.0175},0).wait(1).to({scaleX:0.5974,scaleY:0.5974,x:155.1133,y:142.0179},0).wait(1).to({scaleX:0.5971,scaleY:0.5971,x:155.1136,y:142.0183},0).wait(1).to({scaleX:0.5969,scaleY:0.5969,x:155.1139,y:142.0187},0).wait(1).to({scaleX:0.5966,scaleY:0.5966,x:155.1142,y:142.019},0).wait(1).to({scaleX:0.5963,scaleY:0.5963,x:155.1145,y:142.0194},0).wait(1).to({scaleX:0.5961,scaleY:0.5961,x:155.1148,y:142.0198},0).wait(1).to({scaleX:0.5958,scaleY:0.5958,x:155.1151,y:142.0202},0).wait(1).to({scaleX:0.5955,scaleY:0.5955,x:155.1153,y:142.0206},0).wait(1).to({scaleX:0.5953,scaleY:0.5953,x:155.1156,y:142.021},0).wait(1).to({scaleX:0.595,scaleY:0.595,x:155.1159,y:142.0213},0).wait(1).to({scaleX:0.5947,scaleY:0.5947,x:155.1162,y:142.0217},0).wait(1).to({scaleX:0.5945,scaleY:0.5945,x:155.1165,y:142.0221},0).wait(1).to({scaleX:0.5942,scaleY:0.5942,x:155.1168,y:142.0225},0).wait(1).to({scaleX:0.5939,scaleY:0.5939,x:155.1171,y:142.0229},0).wait(1).to({scaleX:0.5936,scaleY:0.5936,x:155.1173,y:142.0233},0).wait(1).to({scaleX:0.5934,scaleY:0.5934,x:155.1176,y:142.0237},0).wait(1).to({scaleX:0.5931,scaleY:0.5931,x:155.1179,y:142.024},0).wait(1).to({scaleX:0.5928,scaleY:0.5928,x:155.1182,y:142.0244},0).wait(1).to({scaleX:0.5926,scaleY:0.5926,x:155.1185,y:142.0248},0).wait(1).to({scaleX:0.5923,scaleY:0.5923,x:155.1188,y:142.0252},0).wait(1).to({scaleX:0.592,scaleY:0.592,x:155.1191,y:142.0256},0).wait(1).to({scaleX:0.5918,scaleY:0.5918,x:155.1194,y:142.026},0).wait(1).to({scaleX:0.5915,scaleY:0.5915,x:155.1196,y:142.0263},0).wait(1).to({scaleX:0.5912,scaleY:0.5912,x:155.1199,y:142.0267},0).wait(1).to({scaleX:0.5909,scaleY:0.5909,x:155.1202,y:142.0271},0).wait(1).to({scaleX:0.5907,scaleY:0.5907,x:155.1205,y:142.0275},0).wait(1).to({scaleX:0.5904,scaleY:0.5904,x:155.1208,y:142.0279},0).wait(1).to({scaleX:0.5901,scaleY:0.5901,x:155.1211,y:142.0283},0).wait(1).to({scaleX:0.5899,scaleY:0.5899,x:155.1214,y:142.0287},0).wait(1).to({scaleX:0.5896,scaleY:0.5896,x:155.1217,y:142.029},0).wait(1).to({scaleX:0.5893,scaleY:0.5893,x:155.1219,y:142.0294},0).wait(1).to({scaleX:0.589,scaleY:0.589,x:155.1222,y:142.0298},0).wait(1).to({scaleX:0.5888,scaleY:0.5888,x:155.1225,y:142.0302},0).wait(1).to({scaleX:0.5885,scaleY:0.5885,x:155.1228,y:142.0306},0).wait(1).to({scaleX:0.5882,scaleY:0.5882,x:155.1231,y:142.031},0).wait(1).to({scaleX:0.588,scaleY:0.588,x:155.1234,y:142.0314},0).wait(1).to({scaleX:0.5877,scaleY:0.5877,x:155.1237,y:142.0317},0).wait(1).to({scaleX:0.5874,scaleY:0.5874,x:155.124,y:142.0321},0).wait(1).to({scaleX:0.5872,scaleY:0.5872,x:155.1242,y:142.0325},0).wait(1).to({scaleX:0.5869,scaleY:0.5869,x:155.1245,y:142.0329},0).wait(1).to({scaleX:0.5866,scaleY:0.5866,x:155.1248,y:142.0333},0).wait(1).to({scaleX:0.5863,scaleY:0.5863,x:155.1251,y:142.0337},0).wait(1).to({scaleX:0.5861,scaleY:0.5861,x:155.1254,y:142.0341},0).wait(1).to({scaleX:0.5858,scaleY:0.5858,x:155.1257,y:142.0344},0).wait(1).to({scaleX:0.5855,scaleY:0.5855,x:155.126,y:142.0348},0).wait(1).to({scaleX:0.5853,scaleY:0.5853,x:155.1263,y:142.0352},0).wait(1).to({scaleX:0.585,scaleY:0.585,x:155.1265,y:142.0356},0).wait(1).to({scaleX:0.5847,scaleY:0.5847,x:155.1268,y:142.036},0).wait(1).to({scaleX:0.5845,scaleY:0.5845,x:155.1271,y:142.0364},0).wait(1).to({scaleX:0.5842,scaleY:0.5842,x:155.1274,y:142.0368},0).wait(1).to({scaleX:0.5839,scaleY:0.5839,x:155.1277,y:142.0371},0).wait(1).to({scaleX:0.5836,scaleY:0.5836,x:155.128,y:142.0375},0).wait(1).to({scaleX:0.5834,scaleY:0.5834,x:155.1283,y:142.0379},0).wait(1).to({scaleX:0.5831,scaleY:0.5831,x:155.1285,y:142.0383},0).wait(1).to({scaleX:0.5828,scaleY:0.5828,x:155.1288,y:142.0387},0).wait(1).to({scaleX:0.5826,scaleY:0.5826,x:155.1291,y:142.0391},0).wait(1).to({scaleX:0.5823,scaleY:0.5823,x:155.1294,y:142.0394},0).wait(1).to({scaleX:0.582,scaleY:0.582,x:155.1297,y:142.0398},0).wait(1).to({scaleX:0.5818,scaleY:0.5818,x:155.13,y:142.0402},0).wait(1).to({scaleX:0.5815,scaleY:0.5815,x:155.1303,y:142.0406},0).wait(1).to({scaleX:0.5812,scaleY:0.5812,x:155.1306,y:142.041},0).wait(1).to({scaleX:0.5809,scaleY:0.5809,x:155.1308,y:142.0414},0).wait(1).to({scaleX:0.5807,scaleY:0.5807,x:155.1311,y:142.0417},0).wait(1).to({scaleX:0.5804,scaleY:0.5804,x:155.1314,y:142.0421},0).wait(1).to({scaleX:0.5801,scaleY:0.5801,x:155.1317,y:142.0425},0).wait(1).to({scaleX:0.5799,scaleY:0.5799,x:155.132,y:142.0429},0).wait(1).to({scaleX:0.5796,scaleY:0.5796,x:155.1323,y:142.0433},0).wait(1).to({scaleX:0.5793,scaleY:0.5793,x:155.1326,y:142.0437},0).wait(1).to({scaleX:0.5791,scaleY:0.5791,x:155.1328,y:142.044},0).wait(1).to({scaleX:0.5788,scaleY:0.5788,x:155.1331,y:142.0444},0).wait(1).to({scaleX:0.5785,scaleY:0.5785,x:155.1334,y:142.0448},0).wait(1).to({scaleX:0.5783,scaleY:0.5783,x:155.1337,y:142.0452},0).wait(1).to({scaleX:0.578,scaleY:0.578,x:155.134,y:142.0456},0).wait(1).to({scaleX:0.5777,scaleY:0.5777,x:155.1343,y:142.046},0).wait(1).to({scaleX:0.5775,scaleY:0.5775,x:155.1346,y:142.0463},0).wait(1).to({scaleX:0.5772,scaleY:0.5772,x:155.1348,y:142.0467},0).wait(1).to({scaleX:0.5769,scaleY:0.5769,x:155.1351,y:142.0471},0).wait(1).to({scaleX:0.5766,scaleY:0.5766,x:155.1354,y:142.0475},0).wait(1).to({scaleX:0.5764,scaleY:0.5764,x:155.1357,y:142.0479},0).wait(1).to({scaleX:0.5761,scaleY:0.5761,x:155.136,y:142.0483},0).wait(1).to({scaleX:0.5758,scaleY:0.5758,x:155.1363,y:142.0486},0).wait(1).to({scaleX:0.5756,scaleY:0.5756,x:155.1365,y:142.049},0).wait(1).to({scaleX:0.5753,scaleY:0.5753,x:155.1368,y:142.0494},0).wait(1).to({scaleX:0.575,scaleY:0.575,x:155.1371,y:142.0498},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,x:155.1374,y:142.0502},0).wait(1).to({scaleX:0.5745,scaleY:0.5745,x:155.1377,y:142.0505},0).wait(1).to({scaleX:0.5742,scaleY:0.5742,x:155.138,y:142.0509},0).wait(1).to({scaleX:0.574,scaleY:0.574,x:155.1383,y:142.0513},0).wait(1).to({scaleX:0.5737,scaleY:0.5737,x:155.1385,y:142.0517},0).wait(1).to({scaleX:0.5734,scaleY:0.5734,x:155.1388,y:142.0521},0).wait(1).to({scaleX:0.5732,scaleY:0.5732,x:155.1391,y:142.0524},0).wait(1).to({scaleX:0.5729,scaleY:0.5729,x:155.1394,y:142.0528},0).wait(1).to({scaleX:0.5726,scaleY:0.5726,x:155.1397,y:142.0532},0).wait(1).to({scaleX:0.5724,scaleY:0.5724,x:155.14,y:142.0536},0).wait(1).to({scaleX:0.5721,scaleY:0.5721,x:155.1402,y:142.054},0).wait(1).to({scaleX:0.5718,scaleY:0.5718,x:155.1405,y:142.0543},0).wait(1).to({scaleX:0.5716,scaleY:0.5716,x:155.1408,y:142.0547},0).wait(1).to({scaleX:0.5713,scaleY:0.5713,x:155.1411,y:142.0551},0).wait(1).to({scaleX:0.571,scaleY:0.571,x:155.1414,y:142.0555},0).wait(1).to({scaleX:0.5708,scaleY:0.5708,x:155.1416,y:142.0559},0).wait(1).to({scaleX:0.5705,scaleY:0.5705,x:155.1419,y:142.0562},0).wait(1).to({scaleX:0.5702,scaleY:0.5702,x:155.1422,y:142.0566},0).wait(1).to({regX:0.4,regY:0.2,scaleX:0.57,scaleY:0.57,x:155.25,y:142.1},0).wait(180));

	// Image_mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_93 = new cjs.Graphics().p("A3hMSIAA4jMAvDAAAIAAYjg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_5_graphics_93,x:150.55,y:521.55}).wait(329));

	// Layer_14
	this.instance_7 = new lib.golf_img_1();
	this.instance_7.setTransform(155.25,480.2,0.5,0.5,0,0,0,0,0.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(93).to({_off:false},0).to({regY:0.1,scaleX:0.46,scaleY:0.46,y:480.15},149).wait(180));

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
		{src:"birthday_img.jpg", id:"birthday_img"},
		{src:"golf_img.jpg", id:"golf_img"},
		{src:"pool_img.jpg", id:"pool_img"},
		{src:"putt_img.jpg", id:"putt_img"}
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