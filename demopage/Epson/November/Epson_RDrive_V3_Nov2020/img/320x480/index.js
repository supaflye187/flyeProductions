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



(lib.Epson_Logo = function() {
	this.initialize(img.Epson_Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,48);


(lib.hallway = function() {
	this.initialize(img.hallway);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_01_LG = function() {
	this.initialize(img.image_01_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,356);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_02_LG = function() {
	this.initialize(img.image_02_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,356);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_03_LG = function() {
	this.initialize(img.image_03_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,356);


(lib.Printer = function() {
	this.initialize(img.Printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,174);


(lib.printer_full_image = function() {
	this.initialize(img.printer_full_image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,267,291);


(lib.printer_light = function() {
	this.initialize(img.printer_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,22);


(lib.printerRolls = function() {
	this.initialize(img.printerRolls);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,172);// helper functions:

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


(lib.txt_onARoll = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgXAcIAAg3IAvAAIAAA3g");
	this.shape.setTransform(152.425,-79.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag/CAIAAglIAOABQANAAAGgHQAGgHABgMIg2jBIAzAAIAcCFIABAAIAZiFIAyAAIguC0QgHAYgGAPQgGAPgIAIQgIAIgKADQgMACgSAAg");
	this.shape_1.setTransform(141.9,-83.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBhQgOgFgKgLQgJgMgEgUQgFgTAAgeQAAgcAGgUQAFgUALgLQAKgMAOgFQAPgEARAAQAiAAASAUQARAUAAAiIgwAAIgBgOIgDgMQgCgGgFgDQgEgEgHAAQgIAAgGAFQgFAEgEAIQgDAIAAAMIgBAdIABAfQAAAMADAJQAEAIAEAEQAGADAHAAQANAAAGgKQAFgLAAgYIAwAAQAAAmgRAUQgRAUgoAAQgRAAgOgEg");
	this.shape_2.setTransform(127.35,-86.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBjIAAiEQAAgPgGgGQgEgGgMAAQgYAAAAAgIAAB/IgyAAIAAjAIAvAAIAAAWIABAAQAIgOANgHQALgGAQAAQAYAAANAMQAMANAAAeIAACOg");
	this.shape_3.setTransform(111.75,-86.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBcQgPgJgIgPQgHgOgCgTIgBgjQAAgUACgSQAEgSAIgOQAHgOAPgIQAPgIAZAAQAWAAAOAGQANAIAIAMQAIANADASQADATAAAWIAAAKIhhAAIAAAPIABARIAEAPQADAGAEAEQAFADAGAAQANAAAFgJQAGgJACgSIAtAAQgBAigRASQgQARglAAQgZAAgPgJgAgLg/QgEADgDAGIgEAMIgBAOIAAAHIAxAAIgBgTQgCgJgCgGQgDgFgEgEQgFgDgIAAQgHAAgFAEg");
	this.shape_4.setTransform(96.2,-86.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDB7QgJgCgFgGQgFgGgCgKQgCgJABgPIAAhuIgaAAIAAgiIAaAAIAAg3IAwAAIAAA3IAdAAIAAAiIgdAAIAABoQAAALAEAGQADAEAKAAIAHAAIAFgBIAAAjIgQAAIgQABQgPAAgIgCg");
	this.shape_5.setTransform(84.35,-88.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiBhQgOgEgIgIQgIgIgEgLQgCgLAAgOIAAgHIAsAAIAAAGQAAANAHAIQAGAHANAAQALAAAGgFQAHgGAAgMQAAgJgFgFQgFgFgIgDIgigMQgVgHgKgMQgLgOAAgUQAAgMAEgLQAFgKAJgIQAIgIANgFQAOgEASAAQAiAAAQAOQAQAOAAAbIAAAIIgtAAQAAgQgEgHQgFgHgMAAQgIAAgIAGQgGAFgBAKQAAAHAFAGQAEAGANAEIAcAKQAYAIAKAMQAKANAAAWQgBAPgFALQgFAMgKAHQgKAIgNADQgNADgPAAQgVAAgNgEg");
	this.shape_6.setTransform(72.75,-86.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYCCIAAjBIAxAAIAADBgAgYhWIAAgrIAxAAIAAArg");
	this.shape_7.setTransform(62.225,-89.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiBhQgOgEgIgIQgIgIgEgLQgDgLAAgOIAAgHIAtAAIAAAGQAAANAHAIQAGAHANAAQALAAAGgFQAHgGAAgMQAAgJgGgFQgEgFgIgDIgigMQgUgHgLgMQgLgOAAgUQAAgMAFgLQADgKAJgIQAJgIANgFQAOgEASAAQAiAAAQAOQAQAOAAAbIAAAIIgtAAQAAgQgEgHQgFgHgNAAQgIAAgHAGQgGAFgBAKQABAHAEAGQAEAGANAEIAcAKQAYAIAKAMQAKANAAAWQgBAPgFALQgFAMgKAHQgKAIgNADQgNADgPAAQgVAAgNgEg");
	this.shape_8.setTransform(51.7,-86.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXBjIAAiEQAAgPgEgGQgFgGgLAAQgZAAAAAgIAAB/IgzAAIAAjAIAwAAIAAAWIABAAQAIgOAMgHQAMgGAQAAQAYAAAMAMQAOANAAAeIAACOg");
	this.shape_9.setTransform(36.45,-86.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkBgQgPgGgIgNQgKgNgDgTQgDgTAAgaQAAgXADgUQAFgTAJgMQAIgNAPgHQAOgGAVAAQAWgBAPAGQAOAHAJANQAJANADATQAFATAAAYQgBAZgEATQgDAUgKAMQgJANgPAGQgOAGgVAAIgCAAQgVAAgNgFgAgNg+QgGAFgCAKQgDAIgBANIgBAaIABAcQABAMADAJQACAJAGAFQAFAFAIAAQAPAAAGgPQAFgQAAglQAAgjgFgQQgGgQgPAAQgIAAgFAFg");
	this.shape_10.setTransform(20.6,-86.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfBhQgOgFgKgLQgJgMgEgUQgFgTAAgeQAAgcAGgUQAFgUALgLQAKgMAOgFQAPgEAQAAQAjAAASAUQARAUAAAiIgwAAIgBgOIgDgMQgCgGgFgDQgEgEgHAAQgIAAgGAFQgFAEgEAIQgDAIAAAMIgBAdIABAfQAAAMADAJQAEAIAEAEQAGADAHAAQANAAAGgKQAFgLAAgYIAwAAQAAAmgRAUQgRAUgoAAQgRAAgOgEg");
	this.shape_11.setTransform(5.4,-86.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgyBjIAAjAIAwAAIAAAaIAAAAQAHgPAKgIQAMgIAPAAIAEAAIAFAAIAAAwIgIgBIgIAAIgMACQgHACgGAEQgFAEgDAHQgCAGAAAKIAABzg");
	this.shape_12.setTransform(-13.25,-86.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoBcQgPgJgIgPQgHgOgCgTIgBgjQAAgUADgSQACgSAJgOQAHgOAPgIQAPgIAZAAQAWAAAOAGQANAIAIAMQAIANADASQADATAAAWIAAAKIhhAAIAAAPIABARIAEAPQADAGAEAEQAFADAGAAQAMAAAHgJQAFgJACgSIAtAAQgBAigRASQgRARgjAAQgaAAgPgJgAgLg/QgEADgDAGIgEAMIgBAOIAAAHIAxAAIgBgTQgBgJgDgGQgDgFgFgEQgEgDgIAAQgGAAgGAEg");
	this.shape_13.setTransform(-26.55,-86.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABGBjIAAiGQAAgMgFgHQgEgGgKAAQgMAAgHAIQgHAIAAARIAAB+IgxAAIAAiGQAAgMgEgHQgFgGgLAAQgLAAgHAIQgHAIAAARIAAB+IgyAAIAAjAIAvAAIAAATIABAAQAKgNALgGQAMgFAQAAQARAAALAIQAMAHAEAQIABAAQAFgQANgIQANgHARAAQAaAAALAOQAMAQAAAbIAACMg");
	this.shape_14.setTransform(-46.75,-86.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkBgQgPgGgIgNQgKgNgDgTQgEgTABgaQAAgXADgUQAFgTAJgMQAIgNAPgHQAOgGAVAAQAWgBAPAGQAOAHAJANQAJANADATQAFATAAAYQgBAZgEATQgDAUgKAMQgIANgQAGQgOAGgVAAIgCAAQgVAAgNgFgAgNg+QgGAFgCAKQgDAIgBANIgBAaIABAcQABAMADAJQACAJAGAFQAFAFAIAAQAPAAAGgPQAFgQAAglQAAgjgFgQQgGgQgPAAQgIAAgFAFg");
	this.shape_15.setTransform(-67.25,-86.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDB7QgJgCgFgGQgFgGgCgKQgCgJAAgPIAAhuIgZAAIAAgiIAZAAIAAg3IAxAAIAAA3IAdAAIAAAiIgdAAIAABoQAAALADAGQAEAEALAAIAFAAIAGgBIAAAjIgQAAIgRABQgOAAgIgCg");
	this.shape_16.setTransform(-79.4,-88.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiBhQgOgEgIgIQgIgIgDgLQgDgLgBgOIAAgHIAtAAIAAAGQAAANAGAIQAIAHAMAAQAKAAAHgFQAHgGAAgMQAAgJgGgFQgFgFgHgDIgigMQgVgHgKgMQgLgOABgUQAAgMADgLQAFgKAIgIQAJgIAOgFQANgEASAAQAiAAAQAOQARAOAAAbIAAAIIgtAAQAAgQgGgHQgEgHgNAAQgHAAgHAGQgIAFABAKQAAAHADAGQAGAGAMAEIAdAKQAXAIAKAMQAJANAAAWQABAPgGALQgFAMgKAHQgJAIgNADQgNADgQAAQgUAAgOgEg");
	this.shape_17.setTransform(-91,-86.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8BWQgNgMABgdIAAiPIAxAAIAACFQABAPAFAGQAEAGAMAAQAZAAAAggIAAiAIAxAAIAADBIgvAAIAAgXIgBAAQgIAOgNAHQgLAGgQAAQgYAAgNgNg");
	this.shape_18.setTransform(-106.25,-86.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfBhQgOgFgKgLQgJgMgFgUQgEgTAAgeQAAgcAGgUQAFgUALgLQALgMANgFQAPgEARAAQAiAAARAUQASAUAAAiIgwAAIgBgOIgDgMQgCgGgEgDQgFgEgHAAQgIAAgGAFQgFAEgEAIQgCAIgBAMIgCAdIACAfQABAMACAJQAEAIAFAEQAFADAHAAQANAAAFgKQAHgLgBgYIAwAAQAAAmgRAUQgRAUgoAAQgSAAgNgEg");
	this.shape_19.setTransform(-121.8,-86.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoBcQgPgJgIgPQgHgOgCgTIgBgjQAAgUADgSQACgSAJgOQAHgOAPgIQAPgIAZAAQAWAAAOAGQANAIAIAMQAIANADASQADATAAAWIAAAKIhhAAIAAAPIABARIAEAPQADAGAEAEQAFADAGAAQAMAAAHgJQAFgJACgSIAtAAQgBAigRASQgRARgjAAQgaAAgPgJgAgLg/QgEADgDAGIgEAMIgBAOIAAAHIAxAAIgBgTQgBgJgDgGQgDgFgFgEQgEgDgIAAQgGAAgGAEg");
	this.shape_20.setTransform(98.1,-125.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYCAIAAiEQAAgPgGgGQgEgGgMAAQgYAAAAAfIAACAIgyAAIAAkAIAyAAIAABUIAAAAQAPgZAfAAQAYAAANAMQAMANAAAeIAACOg");
	this.shape_21.setTransform(82.5,-128.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDB7QgJgCgFgGQgFgGgCgJQgCgKAAgPIAAhuIgZAAIAAgiIAZAAIAAg3IAxAAIAAA3IAdAAIAAAiIgdAAIAABoQAAAMADAEQAEAFALAAIAFAAIAGAAIAAAiIgQABIgRAAQgOAAgIgCg");
	this.shape_22.setTransform(70,-128.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgyBjIAAjAIAvAAIAAAaIACAAQAGgPALgIQAKgIAQAAIAFAAIAEAAIAAAwIgIgBIgHAAIgOACQgGACgGAEQgEAEgEAHQgCAGAAAKIAABzg");
	this.shape_23.setTransform(54.3,-126.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpBcQgOgJgIgPQgHgOgCgTIgBgjQAAgUACgSQAEgSAHgOQAJgOAPgIQAOgIAZAAQAVAAAOAGQAOAIAIAMQAIANADASQADATAAAWIAAAKIhiAAIAAAPIACARIAEAPQADAGAFAEQAEADAGAAQAMAAAGgJQAGgJACgSIAtAAQgBAigRASQgQARglAAQgZAAgQgJgAgKg/QgFADgDAGIgEAMIgCAOIAAAHIAyAAIgBgTQgCgJgCgGQgCgFgFgEQgGgDgHAAQgHAAgEAEg");
	this.shape_24.setTransform(41,-125.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDB7QgJgCgFgGQgFgGgCgJQgCgKAAgPIAAhuIgZAAIAAgiIAZAAIAAg3IAxAAIAAA3IAdAAIAAAiIgdAAIAABoQAAAMADAEQAEAFALAAIAGAAIAFAAIAAAiIgQABIgQAAQgPAAgIgCg");
	this.shape_25.setTransform(29.15,-128.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgxBhQgJgFgGgIQgFgIgDgKQgCgJAAgKQAAgOADgKQADgKAGgHQAGgGAJgEQAJgFANgEIAbgHQALgDAEgFQAFgFAAgKQAAgLgFgGQgGgHgLAAQgMAAgGAHQgFAHAAAMIAAAFIgtAAIAAgFQAAgRAFgLQAGgLAJgHQAJgHANgDQAMgDAOAAQAVAAAOAEQAOAEAHAIQAIAIACALQADALAAANIAABlIABAVIAFAQIgvAAIgEgKIgCgKIgBAAQgJAPgLAFQgKAEgSAAQgNAAgJgEgAALAHIgLADQgOADgGAIQgHAIAAANQAAALAFAIQAEAHAKAAIAKgBQAFgCAEgDQAFgEADgGQADgGAAgHIAAgng");
	this.shape_26.setTransform(16.725,-125.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpBcQgPgJgGgPQgIgOgBgTIgCgjQAAgUADgSQADgSAHgOQAJgOAPgIQAPgIAYAAQAVAAAOAGQAOAIAIAMQAIANADASQADATAAAWIAAAKIhiAAIAAAPIACARIAEAPQADAGAFAEQAEADAGAAQAMAAAHgJQAFgJADgSIAsAAQgCAigQASQgQARgkAAQgaAAgQgJgAgKg/QgFADgDAGIgEAMIgCAOIAAAHIAzAAIgCgTQgBgJgDgGQgDgFgFgEQgEgDgIAAQgGAAgFAEg");
	this.shape_27.setTransform(1.65,-125.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgyBjIAAjAIAvAAIAAAaIABAAQAHgPAKgIQAMgIAPAAIAFAAIAEAAIAAAwIgIgBIgHAAIgOACQgGACgFAEQgFAEgEAHQgCAGAAAKIAABzg");
	this.shape_28.setTransform(-10.15,-126.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag2B2QgRgNAAgZIAvAAQABAJAHAGIAIAEIAIABQAPAAAGgKQAGgJAAgPIAAgZIAAAAQgIALgLAGQgKAHgMAAQgeAAgPgXQgOgWAAg0IACgjQACgRAGgPQAGgOAMgJQANgJATAAQALAAAKAGQALAGAIAPIAAAAIAAgWIAvAAIAAC3QAAAmgSASQgTATgqAAQgfAAgSgOgAgLhZQgFADgDAJQgDAIgBANIgBAhIABATQABAIADAHQACAHAFAEQAGAEAGAAQAIAAAFgEQAFgEADgHQADgHACgKIABgWQAAgjgGgPQgFgPgPAAQgHAAgFAEg");
	this.shape_29.setTransform(-24.45,-122.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoBcQgPgJgIgPQgHgOgCgTIgBgjQAAgUACgSQAEgSAIgOQAHgOAPgIQAPgIAZAAQAWAAAOAGQANAIAIAMQAIANADASQADATAAAWIAAAKIhhAAIAAAPIABARIAEAPQADAGAEAEQAFADAGAAQANAAAFgJQAGgJACgSIAtAAQgBAigRASQgRARgkAAQgZAAgPgJgAgLg/QgEADgDAGIgEAMIgBAOIAAAHIAxAAIgBgTQgCgJgCgGQgDgFgEgEQgGgDgHAAQgHAAgFAEg");
	this.shape_30.setTransform(-46.55,-125.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAYCAIAAiEQgBgPgFgGQgEgGgMAAQgZAAAAAfIAACAIgxAAIAAkAIAxAAIAABUIABAAQAPgZAfAAQAYAAANAMQANANgBAeIAACOg");
	this.shape_31.setTransform(-62.15,-128.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZCAIAAjVIg4AAIAAgrICjAAIAAArIg4AAIAADVg");
	this.shape_32.setTransform(-78,-128.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-166,-152.7,350.1,86.1), null);


(lib.txt_Immediatelamination = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(132.075,8.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AAUBVIAAhyQAAgNgEgFQgEgEgKAAQgVgBAAAcIAABtIgrAAIAAilIAoAAIAAATIABAAQAHgMALgGQAKgFANgBQAVABALAKQAMALAAAaIAAB6g");
	this.shape_1.setTransform(121.35,2.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_2.setTransform(106.925,2.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(96.55,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQACAFAKAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgIgCg");
	this.shape_4.setTransform(89.1,0.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_5.setTransform(77.625,2.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAUBVIAAhyQAAgNgEgFQgEgEgKAAQgVgBAAAcIAABtIgrAAIAAilIAoAAIAAATIABAAQAHgMALgGQAKgFANgBQAVABALAKQAMALAAAaIAAB6g");
	this.shape_6.setTransform(63.3,2.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgUBwIAAimIApAAIAACmgAgUhKIAAglIApAAIAAAlg");
	this.shape_7.setTransform(52.6,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AA9BVIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgqAAIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgrAAIAAilIApAAIAAARIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAHQAKAHADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB3g");
	this.shape_8.setTransform(37.925,2.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_9.setTransform(19.375,2.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgVBvIAAjdIArAAIAADdg");
	this.shape_10.setTransform(9.1,-0.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_11.setTransform(-7.675,2.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgDBqQgIgCgEgFQgEgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQADAFAJAAIAFgBIAFAAIAAAeIgOAAIgOABQgNAAgHgCg");
	this.shape_12.setTransform(-18.6,0.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_13.setTransform(-30.075,2.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_14.setTransform(-40.35,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("Ag0BcQgMgUAAgvQAAgtAMgVQAMgUAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhHIArAAIAADdIgpAAIAAgRIgBAAQgHALgIAFQgIAEgNAAQgbABgMgVgAgSgOQgEANAAAaQAAAcAEAOQAFAOANAAQAOAAAEgOQAEgOAAgcQAAgagEgNQgEgOgOAAQgNAAgFAOg");
	this.shape_15.setTransform(-51.225,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_16.setTransform(-65.225,2.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AA9BVIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgqAAIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgrAAIAAilIApAAIAAARIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAHQAKAHADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB3g");
	this.shape_17.setTransform(-83.375,2.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BVIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgqAAIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgrAAIAAilIApAAIAAARIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAHQAKAHADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB3g");
	this.shape_18.setTransform(-106.075,2.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgVBvIAAjdIAsAAIAADdg");
	this.shape_19.setTransform(-121,-0.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-134.8,-20.8,279.6,40.7), null);


(lib.txt_greaterConsistency = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("Ag5B1IAAgiIAMABQAMAAAGgGQAFgHABgLIgyiwIAwAAIAZB5IABAAIAXh5IAuAAIgrCkQgGAWgGAOQgFAOgIAHQgGAIgKACQgLACgQAAg");
	this.shape.setTransform(95.625,-64.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgdBZQgMgEgJgLQgIgLgEgSQgFgSAAgbQAAgaAGgSQAFgSAJgLQAKgKANgFQANgEAPAAQAgAAAQATQAQASAAAgIgsAAIAAgNIgDgMQgDgFgEgDQgDgDgHAAQgHAAgGAEQgFAEgCAHQgDAHgBAMIgBAaIABAcQABAMADAHQACAIAFADQAFAEAGAAQAMAAAFgKQAFgKAAgWIAsAAQAAAjgQATQgPASglAAQgQAAgNgEg");
	this.shape_1.setTransform(81.175,-67.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAWBbIAAh5QAAgOgFgGQgEgFgKAAQgYAAAAAdIAAB1IguAAIAAiwIAtAAIAAAUIAAAAQAHgNALgGQALgGAPAAQAWAAAMALQAMAMgBAcIAACCg");
	this.shape_2.setTransform(65.8,-67.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AglBVQgNgJgHgNQgHgOgBgQIgCghQAAgSADgQQACgRAIgNQAHgNAOgHQAOgIAWAAQAUAAAMAGQANAHAHAMQAIALACARQADARAAAUIAAAJIhZAAIAAAPIABAPIAEANQACAGAFADQAEAEAFAAQAMAAAFgIQAFgJACgRIApAAQgBAggPAQQgPAQghAAQgYAAgOgIgAgJg6QgFADgCAGIgEALIgBAMIAAAHIAtAAIgBgSQgBgHgCgGQgDgFgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_3.setTransform(50.425,-67.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgCBxQgJgCgFgFQgEgGgCgJQgBgJAAgNIAAhlIgYAAIAAgfIAYAAIAAgzIAsAAIAAAzIAbAAIAAAfIgbAAIAABfQAAALAEAEQADAFAJAAIAGgBIAFAAIAAAgIgPAAIgPABQgOAAgGgCg");
	this.shape_4.setTransform(38.5,-69.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgfBZQgNgDgHgIQgIgHgDgKQgDgLAAgNIAAgGIApAAIAAAGQAAAMAGAHQAGAHAMAAQAKAAAGgFQAGgGAAgKQAAgJgFgEQgFgFgGgCIgfgMQgTgGgKgMQgJgMAAgSQAAgLADgKQAEgKAIgHQAIgHAMgFQAMgEARAAQAfAAAPANQAPANAAAZIAAAHIgpAAQAAgOgFgGQgEgHgLAAQgIAAgGAFQgHAFAAAJQAAAHAEAFQAEAFAMAEIAaAJQAWAIAJAKQAJAMAAAUQAAAOgFALQgFAKgJAHQgJAHgMADQgMADgOAAQgSAAgNgEg");
	this.shape_5.setTransform(26.725,-67.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgWB3IAAiwIAtAAIAACwgAgWhPIAAgnIAtAAIAAAng");
	this.shape_6.setTransform(15.975,-70.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgfBZQgNgDgHgIQgIgHgDgKQgDgLAAgNIAAgGIApAAIAAAGQAAAMAGAHQAGAHAMAAQAKAAAGgFQAGgGAAgKQAAgJgFgEQgFgFgGgCIgfgMQgTgGgKgMQgJgMAAgSQAAgLADgKQAEgKAIgHQAIgHAMgFQAMgEARAAQAfAAAPANQAPANAAAZIAAAHIgpAAQAAgOgFgGQgEgHgLAAQgIAAgGAFQgHAFAAAJQAAAHAEAFQAEAFAMAEIAaAJQAWAIAJAKQAJAMAAAUQAAAOgFALQgFAKgJAHQgJAHgMADQgMADgOAAQgSAAgNgEg");
	this.shape_7.setTransform(5.175,-67.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AAWBbIAAh5QAAgOgFgGQgEgFgKAAQgYAAAAAdIAAB1IguAAIAAiwIAtAAIAAAUIAAAAQAHgNALgGQALgGAPAAQAWAAAMALQAMAMgBAcIAACCg");
	this.shape_8.setTransform(-9.9,-67.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AggBYQgOgGgJgLQgHgMgEgSQgDgRAAgYQAAgVAEgSQADgRAJgMQAIgMANgGQAOgGATAAQATAAAOAFQANAGAJAMQAHAMAEASQADARAAAWQAAAXgEASQgDARgIAMQgJAMgNAFQgOAGgSAAIgDAAQgTAAgLgFgAgMg4QgFAEgDAJQgCAIgBALIAAAYIAAAaQABALACAIQADAJAFAEQAFAFAIAAQANAAAGgPQAEgOAAgiQAAgggEgOQgGgPgNAAQgIAAgFAFg");
	this.shape_9.setTransform(-25.55,-67.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgdBZQgMgEgJgLQgIgLgEgSQgFgSAAgbQAAgaAGgSQAFgSAJgLQAKgKANgFQANgEAPAAQAgAAAQATQAQASAAAgIgsAAIAAgNIgDgMQgDgFgEgDQgDgDgHAAQgHAAgGAEQgFAEgCAHQgDAHgBAMIgBAaIABAcQABAMADAHQACAIAFADQAFAEAGAAQAMAAAFgKQAFgKAAgWIAsAAQAAAjgQATQgPASglAAQgQAAgNgEg");
	this.shape_10.setTransform(-40.575,-67.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AguBbIAAiwIAsAAIAAAXIABAAQAGgMAJgJQAKgHAPAAIAEAAIAEAAIAAAsIgHgBIgHAAIgMACQgGABgFAFQgFADgDAHQgCAFAAAKIAABpg");
	this.shape_11.setTransform(-59.875,-67.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AggBYQgOgGgJgLQgHgMgEgSQgDgRAAgYQAAgVAEgSQADgRAJgMQAIgMAOgGQANgGASAAQAVAAANAFQAOAGAIAMQAHAMAEASQADARAAAWQAAAXgDASQgEARgJAMQgHAMgOAFQgNAGgUAAIgCAAQgTAAgLgFgAgMg4QgFAEgDAJQgCAIAAALIgBAYIABAaQAAALACAIQADAJAFAEQAFAFAHAAQAOAAAGgPQAEgOAAgiQAAgggEgOQgGgPgOAAQgHAAgFAFg");
	this.shape_12.setTransform(-73.45,-67.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgWB2IAAjrIAtAAIAADrg");
	this.shape_13.setTransform(-84.775,-70.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AghBYQgNgGgJgLQgHgMgDgSQgEgRAAgYQAAgVAEgSQAEgRAIgMQAIgMAOgGQANgGASAAQAVAAANAFQAOAGAHAMQAJAMADASQADARAAAWQAAAXgDASQgEARgJAMQgHAMgOAFQgNAGgUAAIgCAAQgTAAgMgFgAgMg4QgFAEgCAJQgDAIAAALIgBAYIABAaQAAALADAIQACAJAFAEQAFAFAHAAQAOAAAFgPQAGgOAAgiQAAgggGgOQgFgPgOAAQgHAAgFAFg");
	this.shape_14.setTransform(-96.15,-67.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgdBZQgMgEgJgLQgIgLgEgSQgFgSAAgbQAAgaAGgSQAFgSAJgLQAKgKANgFQANgEAPAAQAgAAAQATQAQASAAAgIgsAAIAAgNIgDgMQgDgFgEgDQgDgDgHAAQgHAAgGAEQgFAEgCAHQgDAHgBAMIgBAaIABAcQABAMADAHQACAIAFADQAFAEAGAAQAMAAAFgKQAFgKAAgWIAsAAQAAAjgQATQgPASglAAQgQAAgNgEg");
	this.shape_15.setTransform(-111.175,-67.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AglBVQgNgJgHgNQgHgOgBgQIgCghQAAgSADgQQACgRAIgNQAHgNAOgHQAOgIAWAAQAUAAAMAGQANAHAHAMQAIALACARQADARAAAUIAAAJIhZAAIAAAPIABAPIAEANQACAGAFADQAEAEAFAAQAMAAAFgIQAFgJACgRIApAAQgBAggPAQQgPAQghAAQgYAAgOgIgAgJg6QgFADgCAGIgEALIgBAMIAAAHIAtAAIgBgSQgBgHgCgGQgDgFgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_16.setTransform(76.925,-107.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAWB2IAAh6QAAgOgFgFQgFgFgJAAQgYAAAAAcIAAB2IgtAAIAAjrIAtAAIAABMIABAAQANgWAdAAQAWAAAMALQALAMABAbIAACDg");
	this.shape_17.setTransform(61.55,-110.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgCBxQgKgCgEgFQgEgGgCgJQgBgJgBgNIAAhlIgWAAIAAgfIAWAAIAAgzIAtAAIAAAzIAaAAIAAAfIgaAAIAABfQAAALAEAEQACAFAKAAIAGgBIAEAAIAAAgIgOAAIgPABQgOAAgGgCg");
	this.shape_18.setTransform(49,-109.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AguBbIAAixIAsAAIAAAZIABAAQAGgOAJgHQAKgIAPAAIAEAAIAEABIAAArIgHAAIgHAAIgMABQgGABgFAEQgFAEgDAGQgCAGAAAJIAABqg");
	this.shape_19.setTransform(32.375,-107.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AglBVQgNgJgHgNQgHgOgBgQIgCghQAAgSADgQQACgRAIgNQAHgNAOgHQAOgIAWAAQAUAAAMAGQANAHAHAMQAIALACARQADARAAAUIAAAJIhZAAIAAAPIABAPIAEANQACAGAFADQAEAEAFAAQAMAAAFgIQAFgJACgRIApAAQgBAggPAQQgPAQghAAQgYAAgOgIgAgJg6QgFADgCAGIgEALIgBAMIAAAHIAtAAIgBgSQgBgHgCgGQgDgFgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_20.setTransform(19.075,-107.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgCBxQgKgCgEgFQgEgGgCgJQgBgJgBgNIAAhlIgWAAIAAgfIAWAAIAAgzIAtAAIAAAzIAaAAIAAAfIgaAAIAABfQAAALAEAEQACAFAKAAIAGgBIAEAAIAAAgIgOAAIgPABQgOAAgGgCg");
	this.shape_21.setTransform(7.15,-109.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgtBZQgJgEgEgIQgFgHgCgJQgDgJAAgJQAAgNADgJQACgJAGgGQAGgGAIgEQAIgEAMgDIAZgHQAKgDAEgFQAEgEAAgJQAAgKgEgGQgGgGgKAAQgKAAgGAGQgFAHAAAKIAAAFIgpAAIAAgEQAAgQAFgKQAFgKAIgHQAIgGAMgDQAMgDAMAAQAUAAAMAEQANAEAHAHQAGAIADAKQADAKgBALIAABdIACATIAEAPIgrAAIgEgJIgCgJIgBAAQgIAOgKAEQgKAEgQAAQgLAAgJgEgAAKAGIgKADQgMADgGAHQgGAHAAAMQAAAKAEAIQADAHAKAAIAIgCQAGgBADgDQAFgEACgFQADgFAAgIIAAgjg");
	this.shape_22.setTransform(-5.35,-107.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353535").s().p("AglBVQgNgJgHgNQgHgOgBgQIgCghQAAgSADgQQACgRAIgNQAHgNAOgHQAOgIAWAAQAUAAAMAGQANAHAHAMQAIALACARQADARAAAUIAAAJIhZAAIAAAPIABAPIAEANQACAGAFADQAEAEAFAAQAMAAAFgIQAFgJACgRIApAAQgBAggPAQQgPAQghAAQgYAAgOgIgAgJg6QgFADgCAGIgEALIgBAMIAAAHIAtAAIgBgSQgBgHgCgGQgDgFgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_23.setTransform(-20.275,-107.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353535").s().p("AguBbIAAixIAsAAIAAAZIABAAQAGgOAJgHQAKgIAPAAIAEAAIAEABIAAArIgHAAIgHAAIgMABQgGABgFAEQgFAEgDAGQgCAGAAAJIAABqg");
	this.shape_24.setTransform(-32.175,-107.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AgxBsQgQgMAAgXIAsAAQAAAJAHAFIAHADIAHABQAOABAFgJQAGgJAAgNIAAgYIgBAAQgHAKgKAGQgJAGgLAAQgbAAgNgVQgOgUAAgvIACghQABgPAGgOQAGgMALgJQALgIATAAQAJAAAJAFQALAFAGAOIABAAIAAgUIArAAIAACoQAAAigRASQgRARgmAAQgdAAgQgNgAgKhSQgFAEgCAHQgDAHgBAMIgBAfIABASQABAGACAHQADAGAEAEQAFAEAGAAQAHAAAFgEQAFgEADgGQADgHABgIIABgVQAAgggFgOQgFgNgOAAQgGAAgFADg");
	this.shape_25.setTransform(-46.375,-104.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353535").s().p("AglBVQgNgJgHgNQgHgOgBgQIgCghQAAgSADgQQACgRAIgNQAHgNAOgHQAOgIAWAAQAUAAAMAGQANAHAHAMQAIALACARQADARAAAUIAAAJIhZAAIAAAPIABAPIAEANQACAGAFADQAEAEAFAAQAMAAAFgIQAFgJACgRIApAAQgBAggPAQQgPAQghAAQgYAAgOgIgAgJg6QgFADgCAGIgEALIgBAMIAAAHIAtAAIgBgSQgBgHgCgGQgDgFgEgDQgFgDgHAAQgGAAgEADg");
	this.shape_26.setTransform(-68.875,-107.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AAWB2IAAh6QAAgOgFgFQgFgFgJAAQgYAAAAAcIAAB2IgtAAIAAjrIAtAAIAABMIABAAQANgWAdAAQAWAAAMALQALAMABAbIAACDg");
	this.shape_27.setTransform(-84.25,-110.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353535").s().p("AgXB2IAAjEIgzAAIAAgnICVAAIAAAnIgzAAIAADEg");
	this.shape_28.setTransform(-99.875,-110.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_greaterConsistency, new cjs.Rectangle(-194.8,-132.3,365.9,83.00000000000001), null);


(lib.txt_AmazingProductivity = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgTAYIAAgvIAnAAIAAAvg");
	this.shape.setTransform(130.975,9.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag2BuIAAggIAMABQALAAAGgGQAFgGABgKIgvimIAsAAIAYByIABAAIAVhyIArAAIgoCbIgLAhQgFANgHAHQgGAHgJACQgKACgPAAg");
	this.shape_1.setTransform(121.125,5.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgCBqQgJgCgDgFQgFgFgBgIQgCgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQADAFAJAAIAFgBIAEAAIAAAeIgNAAIgOABQgNAAgGgCg");
	this.shape_2.setTransform(110.5,0.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(102.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgXBUIgrinIAsAAIAXB3IABAAIAWh3IArAAIgpCng");
	this.shape_4.setTransform(93.075,3.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgVBwIAAimIArAAIAACmgAgVhKIAAglIArAAIAAAlg");
	this.shape_5.setTransform(83.25,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgDBqQgHgCgEgFQgFgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQACAFAKAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgIgCg");
	this.shape_6.setTransform(75.8,0.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgbBTQgMgEgIgKQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKANgEQAMgEAOAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgLQgCgFgEgCQgDgDgGAAQgHAAgFADQgFAEgDAHQgCAHgBAKIgBAZIABAaQABALACAHQADAHAEAEQAFADAGAAQALAAAFgJQAFgKAAgUIApAAQAAAhgPARQgPARgiAAQgPAAgMgEg");
	this.shape_7.setTransform(64.725,3.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgzBKQgMgKAAgZIAAh7IAsAAIAAByQAAANAEAFQAEAFAKAAQAVAAAAgbIAAhuIArAAIAACmIgoAAIAAgUIgBAAQgHANgLAFQgKAFgNAAQgVAAgLgLg");
	this.shape_8.setTransform(50.55,3.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("Ag0BcQgMgUAAgvQAAgtAMgUQAMgVAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhGIArAAIAADcIgpAAIAAgSIgBAAQgHAMgIAFQgIAFgNAAQgbgBgMgUgAgSgPQgEAOAAAaQAAAcAEAOQAFAOANgBQAOABAEgOQAEgOAAgcQAAgagEgOQgEgNgOAAQgNAAgFANg");
	this.shape_9.setTransform(35.625,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_10.setTransform(21.375,3.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgrBWIAAinIApAAIAAAXIABAAQAGgMAIgHQAKgIAOABIADAAIAEAAIAAApIgHgBIgHAAIgLACQgFABgFAEQgEADgDAGQgCAGAAAJIAABjg");
	this.shape_11.setTransform(10.2,2.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AhABwIAAjbIApAAIAAASIABAAQAHgMAIgFQAIgFANAAQAbAAAMAUQAMAVAAAuQAAAugMAUQgMAUgbAAQgMAAgHgEQgJgFgHgKIAAAAIAABFgAgRhBQgEAOAAAbQAAAbAEANQAEAOANAAQAOAAAFgOQAEgNAAgbQAAgbgEgOQgFgNgOAAQgNAAgEANg");
	this.shape_12.setTransform(-2.425,5.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgvBmQgOgMAAgVIApAAQAAAIAGAEIAHAEIAHABQANAAAFgIQAFgJAAgMIAAgWIgBAAQgGAJgKAGQgIAGgKAAQgaAAgMgUQgNgTAAgtIABgdQACgPAFgNQAGgMAKgIQALgHARAAQAJAAAJAEQAJAGAGAMIABAAIAAgTIApAAIAACeQAAAhgQAPQgQAQgkABQgcgBgPgLgAgKhMQgEACgDAIQgCAHgBALIgBAcIABARQABAGACAGQADAHAEADQAEAEAGAAQAHAAAEgEQAFgDACgHQADgGABgHIABgUQAAgegFgNQgFgNgMAAQgGABgFADg");
	this.shape_13.setTransform(-24.225,5.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAUBWIAAhzQABgNgFgFQgEgEgKgBQgVAAAAAcIAABuIgrAAIAAinIAoAAIAAAUIACAAQAGgMALgGQAKgGANABQAVgBALALQALAMAAAZIAAB7g");
	this.shape_14.setTransform(-38.75,2.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgUBwIAAimIApAAIAACmgAgUhKIAAglIApAAIAAAlg");
	this.shape_15.setTransform(-49.45,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("Ag6BUIAAgiIBChiIg+AAIAAgjIBwAAIAAAiIhBBiIBBAAIAAAjg");
	this.shape_16.setTransform(-59,3.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_17.setTransform(-72.425,3.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BWIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgqAAIAAh0QAAgKgEgGQgEgGgJAAQgKAAgGAHQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgLAKgGQAKgEAOAAQAPgBAJAIQAKAGADANIABAAQAFgNALgHQALgGAPAAQAVAAAKAMQAKANAAAYIAAB5g");
	this.shape_18.setTransform(-90.725,2.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAoBvIgLgvIg5AAIgLAvIguAAIA6jdIA3AAIA6DdgAAWAbIgWhiIAAAAIgVBiIArAAg");
	this.shape_19.setTransform(-110.275,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-132.3,-20.3,279.6,40.7), null);


(lib.SureColor_lockup_intro = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-4.4124,-18.4452,1.1018,1.1018);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup_intro, new cjs.Rectangle(-145.1,-51.7,281.4,66.60000000000001), null);


(lib.SureColor_lockup = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("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");
	this.shape.setTransform(-6,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-130.7,-37.5,249.5,75), null);


(lib.printer_rolls = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printerRolls();
	this.instance.setTransform(-42,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_rolls, new cjs.Rectangle(-42,-86,84,172), null);


(lib.printer_light_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.printer_light();
	this.instance.setTransform(-81.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_light_1, new cjs.Rectangle(-81.5,-11,163,22), null);


(lib.image_strip_03 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(87.525,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-134,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_03, new cjs.Rectangle(41,-148.5,92,291), null);


(lib.image_strip_02 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(-0.975,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-133.5,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_02, new cjs.Rectangle(-47.5,-148.5,93.1,291), null);


(lib.image_strip_01 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AnQZjMAAAgzFIOhAAMAAAAzFg");
	mask.setTransform(-89.975,0);

	// printer_full_image_jpg
	this.instance = new lib.printer_full_image();
	this.instance.setTransform(-130.5,-148.55);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_strip_01, new cjs.Rectangle(-130.5,-148.5,87.1,291), null);


(lib.image_03_slices = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_03_LG();
	this.instance.setTransform(-141,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_slices, new cjs.Rectangle(-141,-203,302,356), null);


(lib.image_02_slices = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_02_LG();
	this.instance.setTransform(-141,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_slices, new cjs.Rectangle(-141,-203,302,356), null);


(lib.image_01_slices = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_01_LG();
	this.instance.setTransform(-141,-203);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_slices, new cjs.Rectangle(-141,-203,302,356), null);


(lib.image_01_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_01();
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_01_1, new cjs.Rectangle(-179.5,-72,359,144), null);


(lib.hallway_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.hallway();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hallway_mc, new cjs.Rectangle(-150,-300,320,480), null);


(lib.epson_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Epson_Logo();
	this.instance.setTransform(-68,-29,0.8125,0.8125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-68,-29,106.5,39), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape.setTransform(61.025,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_1.setTransform(47.475,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1A1QgWgVAAggQAAgeAWgXQAWgVAfgBQAfABAWAVQAXAXAAAeQAAAggXAVQgWAXgfAAQgfAAgWgXgAghghQgOAOAAATQAAAUAOAOQAOAPATAAQAUAAAOgPQAOgOAAgUQAAgTgOgOQgOgPgUAAQgTAAgOAPg");
	this.shape_2.setTransform(31.275,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBMQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBAAIglhSIgBAAIgMBOQAAADgEABIgSAAQgFgBABgEIAZiNQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAIAEAAQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAIAuBiIAAAAIAuhiQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAIADAAQABAAABABQABAAAAAAQABABAAAAQAAABAAAAIAZCNQABAEgFABIgTAAQgDgBgBgDIgMhOIgBAAIglBSQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_3.setTransform(13.1508,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3BMQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIhUheIgBAAIAABZQAAAEgEABIgTAAQgEgBAAgEIAAiMQAAgDAEgBIADAAQABABAAAAQAAAAABAAQAAAAABAAQAAABABAAIBUBaIAAAAIAAhVQAAgFAFAAIATAAQAEAAAAAFIAACMQAAADgEABg");
	this.shape_4.setTransform(-10,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBKQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBIgbg3IgYAAIAAA1QAAAEgEABIgTAAQgEgBAAgEIAAiJQAAgFAEAAIA7AAQATABANANQAOANAAASQAAAPgJALQgIALgOAFIAdA2QAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAgAgagFIAhAAQAIAAAGgHQAHgGAAgJQAAgIgHgGQgGgHgIAAIghAAg");
	this.shape_5.setTransform(-25.075,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwBLQgEgBgCgEIgLgWIg+AAIgKAWQgBAEgFABIgSAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIBBiNQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIACAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIBACNQABAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAABgBAAgAAVAYIgVgtIAAAAIgUAtIApAAg");
	this.shape_6.setTransform(-39.85,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBKQgEgBAAgEIAAiJQAAgFAEAAIBVAAQAEAAAAAFIAAARQAAADgEAAIg+AAIAAAjIAzAAQAEAAAAAEIAAAQQAAAFgEAAIgzAAIAAAlIA+AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_7.setTransform(-52.925,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBKQgEgBAAgEIAAiJQAAgFAEAAIATAAQAEAAAAAFIAAB1IA0AAQAEAAAAADIAAARQAAAEgEABg");
	this.shape_8.setTransform(-64.475,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#06539E").s().p("ArwECQg8AAAAg8IAAmLQAAg8A8AAIXhAAQA8AAAAA8IAAGLQAAA8g8AAg");
	this.shape_9.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-81.2,-25.7,162.5,51.5), null);


(lib.printer_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// printer_light
	this.instance = new lib.printer_light_1();
	this.instance.setTransform(-15.3,-47.6,0.9639,0.9639,0,0,0,-0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},42).wait(289));

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.3,-8.6,0.3,8.6).s().p("AtlBWIAAirIbLAAIAACrg");
	this.shape.setTransform(-15,18.475);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(44).to({_off:true},1).wait(287));

	// image_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_53 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:-14.4,y:45.375}).wait(44).to({graphics:mask_graphics_53,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// image_01
	this.instance_1 = new lib.image_01_1();
	this.instance_1.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:46.3},42,cjs.Ease.quadInOut).wait(1).to({_off:true},1).wait(287));

	// printer
	this.instance_2 = new lib.Printer();
	this.instance_2.setTransform(-160,-87);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(44).to({_off:true},1).wait(287));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-87,320,174);


(lib.image_03_LG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slice_01_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgIUAhdMAAAhC5IQpAAMAAABC5g");
	var mask_graphics_43 = new cjs.Graphics().p("EgIUAhdMAAAhC5IQpAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:114.725,y:6}).wait(43).to({graphics:mask_graphics_43,x:114.725,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// Layer_1
	this.instance = new lib.image_03_slices();
	this.instance.setTransform(0,-422);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(17).to({_off:true},1).wait(316));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgIAAhdMAAAhC5IQBAAMAAABC5g");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgIAAhdMAAAhC5IQBAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.725,y:6}).wait(43).to({graphics:mask_1_graphics_43,x:9.725,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// Layer_1
	this.instance_1 = new lib.image_03_slices();
	this.instance_1.setTransform(0,-422);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(25).to({_off:true},1).wait(316));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgIRAhdMAAAhC5IQjAAMAAABC5g");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgIRAhdMAAAhC5IQjAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-95.025,y:6}).wait(43).to({graphics:mask_2_graphics_43,x:-95.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

	// Layer_1
	this.instance_2 = new lib.image_03_slices();
	this.instance_2.setTransform(0,-422);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},10,cjs.Ease.quadOut).wait(33).to({_off:true},1).wait(316));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-208,302,361);


(lib.image_02_LG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slice_01_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgIbAhdMAAAhC5IQ3AAMAAABC5g");
	var mask_graphics_72 = new cjs.Graphics().p("EgIbAhdMAAAhC5IQ3AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:113.975,y:6}).wait(72).to({graphics:mask_graphics_72,x:113.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// Layer_1
	this.instance = new lib.image_02_slices();
	this.instance.setTransform(-1,-421.95,1.02,1.02);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:1},10,cjs.Ease.quadOut).wait(46).to({_off:true},1).wait(287));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgH4AhdMAAAhC5IPxAAMAAABC5g");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgH4AhdMAAAhC5IPxAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.475,y:6}).wait(72).to({graphics:mask_1_graphics_72,x:9.475,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// Layer_1
	this.instance_1 = new lib.image_02_slices();
	this.instance_1.setTransform(-1,-421.95,1.02,1.02);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:1},10,cjs.Ease.quadOut).wait(54).to({_off:true},1).wait(287));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgIWAhdMAAAhC5IQtAAMAAABC5g");
	var mask_2_graphics_72 = new cjs.Graphics().p("EgIWAhdMAAAhC5IQtAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-94.525,y:6}).wait(72).to({graphics:mask_2_graphics_72,x:-94.525,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// Layer_1
	this.instance_2 = new lib.image_02_slices();
	this.instance_2.setTransform(-1,-421.95,1.02,1.02);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:1},10,cjs.Ease.quadOut).wait(62).to({_off:true},1).wait(287));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.8,-208,308.1,365.1);


(lib.image_01_LG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slice_01_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgIgAhdMAAAhC5IRBAAMAAABC5g");
	var mask_graphics_102 = new cjs.Graphics().p("EgIgAhdMAAAhC5IRBAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:113.475,y:6}).wait(102).to({graphics:mask_graphics_102,x:113.475,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance = new lib.image_01_slices();
	this.instance.setTransform(-1,-376);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(76).to({_off:true},1).wait(257));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgIHAhdMAAAhC5IQPAAMAAABC5g");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgIHAhdMAAAhC5IQPAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:9.975,y:6}).wait(102).to({graphics:mask_1_graphics_102,x:9.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance_1 = new lib.image_01_slices();
	this.instance_1.setTransform(-1,-376);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(84).to({_off:true},1).wait(257));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgIUAhdMAAAhC5IQpAAMAAABC5g");
	var mask_2_graphics_102 = new cjs.Graphics().p("EgIUAhdMAAAhC5IQpAAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-94.775,y:6}).wait(102).to({graphics:mask_2_graphics_102,x:-94.775,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance_2 = new lib.image_01_slices();
	this.instance_2.setTransform(-1,-376);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},10,cjs.Ease.quadOut).wait(92).to({_off:true},1).wait(257));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-208,302,361);


// stage content:
(lib.Epson_RDrive_320x480_V3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgY/glfMAx/AAAMAAABK/Mgx/AAAg");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(34).to({alpha:0},11).wait(169).to({alpha:1},9).wait(128));

	// Layer_4
	this.instance_1 = new lib.txt_AmazingProductivity();
	this.instance_1.setTransform(147.05,185,1,1,0,0,0,-3,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(281).to({_off:false},0).to({y:172,alpha:1},8,cjs.Ease.quadOut).wait(31).to({alpha:0},8).wait(32));

	// txt_Immediatelamination
	this.instance_2 = new lib.txt_Immediatelamination();
	this.instance_2.setTransform(148.05,185.05,1,1,0,0,0,-6,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(232).to({_off:false},0).to({y:172.05,alpha:1},9,cjs.Ease.quadOut).wait(32).to({alpha:0},8).wait(79));

	// SureColor_lockup
	this.instance_3 = new lib.SureColor_lockup();
	this.instance_3.setTransform(162.05,139.95);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(326).to({_off:false},0).to({alpha:1},15).wait(19));

	// printer_rolls
	this.instance_4 = new lib.printer_rolls();
	this.instance_4.setTransform(362,287,1.0233,1.0233);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(320).to({_off:false},0).to({x:272},15,cjs.Ease.quadOut).wait(25));

	// printer_mc
	this.instance_5 = new lib.printer_mc("single",9);
	this.instance_5.setTransform(161.25,303,0.8735,0.8735,0,0,0,0.3,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(232).to({_off:false},0).to({regX:0.2,scaleX:0.9423,scaleY:0.9423,x:161.2,y:308,alpha:1,mode:"synched",loop:false},9,cjs.Ease.quadOut).wait(44).to({mode:"single",startPosition:53},0).wait(35).to({startPosition:53},0).to({regX:0.4,regY:0.1,scaleX:0.6981,scaleY:0.6981,x:132.8,y:290.55},15,cjs.Ease.quadOut).wait(25));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_345 = new cjs.Graphics().p("AqnDpQg2AAAAg2IAAAAIAAllQAAg2A2AAIAAAAIVPAAQA2AAAAA2IAAAAIAAFlQAAA2g2AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(345).to({graphics:mask_graphics_345,x:147.8227,y:424.8225}).wait(15));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-31.7,-24.3,31.8,24.3).s().p("AyWNsMAaygi+IJ7HnMgayAi+g");
	this.shape_1.setTransform(26.375,404.2114,0.6085,0.6085);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-19.3,-14.8,19.4,14.8).s().p("ArKIWIQS1TIGDEpIwSVRg");
	this.shape_2.setTransform(28.625,404.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-19.3,-14.8,19.4,14.8).s().p("ArKIWIQS1TIGDEpIwSVSg");
	this.shape_3.setTransform(35.425,406.7);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-19.3,-14.8,19.4,14.8).s().p("ArKIVIQS1RIGDEoIwSVRg");
	this.shape_4.setTransform(46.725,409.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-19.3,-14.8,19.4,14.8).s().p("ArKIVIQS1SIGDEpIwSVRg");
	this.shape_5.setTransform(62.525,414.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-19.3,-14.8,19.4,14.8).s().p("ArKIVIQS1RIGDEoIwSVSg");
	this.shape_6.setTransform(211.775,455.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-19.3,-14.8,19.4,14.8).s().p("ArKIWIQS1SIGDEoIwSVSg");
	this.shape_7.setTransform(245.675,464.6);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},345).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5,p:{x:62.525,y:414.15}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5,p:{x:227.575,y:459.6}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(347).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:82.875,y:419.75},0).wait(1).to({x:107.775,y:426.6},0).wait(1).to({x:137.175,y:434.7},0).wait(1).to({x:166.525,y:442.8},0).wait(1).to({x:191.425,y:449.65},0).to({_off:true},1).wait(2).to({_off:false,x:238.875,y:462.7},0).to({_off:true},1).wait(1).to({_off:false,x:247.925,y:465.2},0).wait(1));

	// ctaBtn
	this.instance_6 = new lib.ctaBtn();
	this.instance_6.setTransform(147.8,424.8,0.9029,0.9029);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(335).to({_off:false},0).to({alpha:1},10).wait(15));

	// BG
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_8.setTransform(152.05,302.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.11)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_9.setTransform(152.05,302.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.224)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_10.setTransform(152.05,302.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.333)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_11.setTransform(152.05,302.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.443)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_12.setTransform(152.05,302.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.557)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_13.setTransform(152.05,302.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.667)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_14.setTransform(152.05,302.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.776)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_15.setTransform(152.05,302.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.89)").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_16.setTransform(152.05,302.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ega3AypMAAAhlRMA1vAAAMAAABlRg");
	this.shape_17.setTransform(152.05,302.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},223).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(128));

	// txt_onARoll
	this.instance_7 = new lib.txt_onARoll();
	this.instance_7.setTransform(144.05,528.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180).to({_off:false},0).to({alpha:1},11).wait(30).to({alpha:0},11).wait(128));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_155 = new cjs.Graphics().p("A1UXXMAAAgutMAqpAAAMAAAAutg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_1_graphics_155,x:162.55,y:214.75}).wait(205));

	// image_strip_01
	this.instance_8 = new lib.image_strip_01();
	this.instance_8.setTransform(159.4,-113.35,1.045,1.045);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).to({y:216.65},14,cjs.Ease.quadOut).wait(191));

	// image_strip_02
	this.instance_9 = new lib.image_strip_02();
	this.instance_9.setTransform(162.6,-113.25,1.045,1.045,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(169).to({_off:false},0).to({y:216.75},14,cjs.Ease.quadOut).wait(177));

	// image_strip_03
	this.instance_10 = new lib.image_strip_03();
	this.instance_10.setTransform(163.05,-118.35,1.045,1.045);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(183).to({_off:false},0).to({y:216.65},14,cjs.Ease.quadOut).wait(163));

	// hallway_mc
	this.instance_11 = new lib.hallway_mc();
	this.instance_11.setTransform(150.1,300.1,1.1468,1.1468,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(145).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:150,y:300,alpha:1},10,cjs.Ease.quadOut).to({_off:true},78).wait(127));

	// txt_Immediatelamination
	this.instance_12 = new lib.txt_greaterConsistency();
	this.instance_12.setTransform(157.3,509.65);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54).to({_off:false},0).to({alpha:1},9).wait(82).to({alpha:0},11).to({_off:true},1).wait(203));

	// Image_Strip_Mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_54 = new cjs.Graphics().p("AIPbqMAAAg2eIAAg1IPDAAMAAAA3TgAnpbqMAAAg3TIPaAAIAAA1MAAAA2egA3SbqMAAAg3JIPLAAMAAAA3Jg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:160.05,y:184}).wait(103).to({graphics:null,x:0,y:0}).wait(203));

	// image_03_LG
	this.instance_13 = new lib.image_03_LG_1("synched",0,false);
	this.instance_13.setTransform(151,210);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(113).to({_off:false},0).to({_off:true},44).wait(203));

	// image_02_LG
	this.instance_14 = new lib.image_02_LG_1("synched",0,false);
	this.instance_14.setTransform(151,210);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(84).to({_off:false},0).to({_off:true},73).wait(203));

	// image_01_LG
	this.instance_15 = new lib.image_01_LG_1("synched",0,false);
	this.instance_15.setTransform(151,210);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(54).to({_off:false},0).to({_off:true},103).wait(203));

	// logo_Lockup
	this.instance_16 = new lib.SureColor_lockup_intro();
	this.instance_16.setTransform(163.3,163.55);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:154.55,alpha:1},9).wait(34).to({alpha:0},10).to({_off:true},1).wait(306));

	// wht_fade
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_18.setTransform(151.05,310.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.102)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_19.setTransform(151.05,309.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.2)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_20.setTransform(151.05,309.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.302)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_21.setTransform(151.05,309.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.4)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_22.setTransform(151.05,308.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.502)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_23.setTransform(151.05,308.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.6)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_24.setTransform(151.05,308.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.698)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_25.setTransform(151.05,307.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.8)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_26.setTransform(151.05,307.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.898)").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_27.setTransform(151.05,307.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A9ORCMAAAgiDMA6dAAAMAAAAiDg");
	this.shape_28.setTransform(151.05,307.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},43).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).wait(306));

	// printer_mc
	this.instance_17 = new lib.printer_mc("single",9);
	this.instance_17.setTransform(160.25,290.15,0.9483,0.9483,0,0,0,0.2,0.1);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({scaleX:1.0172,scaleY:1.0172,x:160.2,y:296.1,alpha:1},9,cjs.Ease.quadOut).to({_off:true},45).wait(306));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(122.5,196,282.5,430.20000000000005);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Epson_Logo.png", id:"Epson_Logo"},
		{src:"hallway.jpg", id:"hallway"},
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_01_LG.jpg", id:"image_01_LG"},
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_02_LG.jpg", id:"image_02_LG"},
		{src:"image_03.jpg", id:"image_03"},
		{src:"image_03_LG.jpg", id:"image_03_LG"},
		{src:"Printer.jpg", id:"Printer"},
		{src:"printer_full_image.jpg", id:"printer_full_image"},
		{src:"printer_light.png", id:"printer_light"},
		{src:"printerRolls.png", id:"printerRolls"}
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
an.compositions['A4BDA2797E5D4A2296AB1960FDA0E060'] = {
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