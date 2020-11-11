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
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_01_LG = function() {
	this.initialize(img.image_01_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,406);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_02_LG = function() {
	this.initialize(img.image_02_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,406);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_03_LG = function() {
	this.initialize(img.image_03_LG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,282,406);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgPATIAAglIAfAAIAAAlg");
	this.shape.setTransform(103.85,-289.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBZIAAgaIAJABQAKAAAEgFQAEgFABgIIgmiGIAkAAIATBcIAShcIAiAAIggB9QgEAQgFALQgEAKgFAGQgFAGgIABQgIACgMAAg");
	this.shape_1.setTransform(95.775,-292.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBDQgJgDgGgIQgHgIgDgOQgDgNgBgVQAAgTAFgOQADgOAIgIQAHgIAKgEQAKgCALAAQAYAAAMANQANAPAAAXIgiAAIAAgJIgCgJQgCgEgEgCQgCgDgFAAQgGABgEADQgDACgDAGQgCAGgBAIIAAAUIAAAVQABAJACAGQADAFADADQAEACAEABQAJAAAFgIQADgHAAgRIAiAAQAAAbgNAOQgMANgbAAQgMABgKgEg");
	this.shape_2.setTransform(85,-294.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQBFIAAhcQAAgLgDgDQgEgFgHAAQgSAAABAXIAABYIgjAAIAAiFIAhAAIAAAPIABAAQAFgKAIgEQAJgFAKAAQARAAAJAJQAJAJAAAUIAABjg");
	this.shape_3.setTransform(73.45,-294.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbBAQgLgGgFgKQgFgLgCgNIgBgYQAAgNACgNQACgNAGgJQAGgKAKgGQAKgFARAAQAPAAAKAEQAJAFAFAJQAGAJACAMQACAOABAPIAAAGIhEAAIAAALIABAMIADAKIAFAHQADACAEABQAJAAAEgHQAEgGACgNIAeAAQgBAYgLAMQgLAMgZAAQgSABgKgHgAgHgrIgFAFIgDAJIgBAJIAAAGIAjAAIgCgOQAAgFgDgFQgBgEgDgCQgEgCgFAAQgEAAgEADg");
	this.shape_4.setTransform(61.95,-294.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBXIgQgBQgHgCgDgEQgDgEgBgHQgCgGAAgLIAAhMIgRAAIAAgXIARAAIAAgnIAiAAIAAAnIAUAAIAAAXIgUAAIAABIQAAAIACADQADAEAIAAIADAAIAEgBIAAAYIgLABg");
	this.shape_5.setTransform(53,-296.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXBDQgKgCgFgGQgGgFgCgIQgDgIAAgKIAAgFIAfAAIAAAFQAAAIAFAGQAFAFAIABQAHAAAFgFQAFgDAAgJQAAgGgEgDIgJgGIgXgJQgOgFgHgHQgIgKAAgOQAAgIADgIQADgHAGgGQAGgFAJgEQAKgCAMAAQAXAAAMAKQALAKAAASIAAAGIgfAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgEADAAAIQAAAFADAEQADADAIAEIAUAGQARAFAGAIQAHAKAAAPQAAAKgEAJQgDAHgHAFQgHAGgJACQgJACgLAAQgNAAgKgDg");
	this.shape_6.setTransform(44.175,-294.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBaIAAiFIAhAAIAACFgAgQg8IAAgdIAhAAIAAAdg");
	this.shape_7.setTransform(36.125,-296.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXBDQgKgCgFgGQgGgFgCgIQgDgIAAgKIAAgFIAfAAIAAAFQAAAIAFAGQAFAFAIABQAHAAAFgFQAFgDAAgJQAAgGgEgDIgJgGIgXgJQgOgFgHgHQgIgKAAgOQAAgIADgIQADgHAGgGQAGgFAJgEQAKgCAMAAQAXAAAMAKQALAKAAASIAAAGIgfAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgEADAAAIQAAAFADAEQADADAIAEIAUAGQARAFAGAIQAHAKAAAPQAAAKgEAJQgDAHgHAFQgHAGgJACQgJACgLAAQgNAAgKgDg");
	this.shape_8.setTransform(28.075,-294.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQBFIAAhcQAAgLgDgDQgDgFgJAAQgRAAAAAXIAABYIgiAAIAAiFIAhAAIAAAPIAAAAQAGgKAJgEQAHgFALAAQARAAAJAJQAJAJAAAUIAABjg");
	this.shape_9.setTransform(16.8,-294.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYBDQgLgEgGgJQgGgJgDgOQgCgNAAgSQAAgQADgNQACgNAHgJQAGgJAKgFQAKgEAOAAQAQgBAJAFQALAEAGAJQAGAJACANQADAOAAAQQAAASgDANQgDANgGAJQgGAJgKAEQgLAFgOAAQgOAAgKgEgAgJgqQgDADgCAHQgCAGgBAIIAAASIAAAUQABAIACAHQACAGADADQAEAEAFAAQALAAADgLQAFgLAAgaQAAgYgFgLQgDgLgLAAQgFAAgEAEg");
	this.shape_10.setTransform(5.05,-294.3025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBDQgJgDgHgIQgGgIgDgOQgDgNAAgVQAAgTADgOQAFgOAHgIQAHgIAKgEQAKgCALAAQAYAAAMANQAMAPAAAXIggAAIgBgJIgDgJQgBgEgDgCQgDgDgFAAQgFABgEADQgFACgCAGQgBAGgBAIIgBAUIABAVQABAJABAGQACAFAEADQADACAGABQAIAAAEgIQAFgHAAgRIAgAAQAAAbgMAOQgMANgbAAQgMABgKgEg");
	this.shape_11.setTransform(-6.2,-294.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiBFIAAiFIAgAAIAAASIABAAQAEgKAIgGQAIgGAKAAIADAAIAEAAIAAAiIgGgBIgGAAIgJABQgEACgEACQgEADgCAFQgBAFAAAGIAABQg");
	this.shape_12.setTransform(-20.6,-294.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbBAQgLgGgFgKQgFgLgCgNIgBgYQAAgNADgNQABgNAGgJQAFgKALgGQAKgFARAAQAPAAAJAEQAKAFAGAJQAFAJADAMQACAOAAAPIAAAGIhEAAIAAALIABAMIADAKIAFAHQADACAEABQAJAAAEgHQADgGACgNIAgAAQgCAYgMAMQgLAMgZAAQgRABgKgHgAgHgrIgFAFIgDAJIgBAJIAAAGIAiAAIgBgOQgBgFgBgFQgCgEgEgCQgDgCgGAAQgDAAgEADg");
	this.shape_13.setTransform(-30.55,-294.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAxBFIAAhdQAAgJgDgEQgEgEgHgBQgIABgFAFQgFAGAAAMIAABXIghAAIAAhdQAAgJgDgEQgDgEgIgBQgIABgFAFQgFAGAAAMIAABXIgiAAIAAiFIAhAAIAAANIAAAAQAHgJAIgEQAIgEALAAQAMAAAHAGQAJAFACALIABAAQAEgLAJgFQAIgGANAAQARAAAIAKQAIALAAATIAABhg");
	this.shape_14.setTransform(-45.325,-294.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBDQgLgEgGgJQgGgJgCgOQgDgNAAgSQAAgQADgNQADgNAGgJQAGgJAKgFQALgEANAAQAQgBAJAFQALAEAGAJQAGAJACANQADAOAAAQQAAASgDANQgDANgGAJQgGAJgKAEQgLAFgOAAQgPAAgJgEgAgJgqQgDADgCAHQgCAGgBAIIgBASIABAUQABAIACAHQACAGADADQAEAEAFAAQALAAADgLQAEgLABgaQgBgYgEgLQgDgLgLAAQgFAAgEAEg");
	this.shape_15.setTransform(-60.3,-294.3025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AANBXIgPgBQgGgCgEgEQgDgEgBgHQgCgGABgLIAAhMIgSAAIAAgXIASAAIAAgnIAhAAIAAAnIAUAAIAAAXIgUAAIAABIQAAAIADADQABAEAIAAIAEAAIAEgBIAAAYIgLABg");
	this.shape_16.setTransform(-69.45,-296.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXBDQgKgCgFgGQgGgFgCgIQgDgIAAgKIAAgFIAfAAIAAAFQAAAIAFAGQAFAFAIABQAHAAAFgFQAFgDAAgJQAAgGgEgDIgJgGIgXgJQgOgFgHgHQgIgKAAgOQAAgIADgIQADgHAGgGQAGgFAJgEQAKgCAMAAQAXAAAMAKQALAKAAASIAAAGIgfAAQAAgLgDgFQgEgFgIAAQgGAAgFAEQgEADAAAIQAAAFADAEQADADAIAEIAUAGQARAFAGAIQAHAKAAAPQAAAKgEAJQgDAHgHAFQgHAGgJACQgJACgLAAQgNAAgKgDg");
	this.shape_17.setTransform(-78.275,-294.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpA8QgJgJAAgUIAAhjIAjAAIAABcQgBALAEAEQAEAEAHAAQASAAgBgXIAAhYIAjAAIAACGIghAAIAAgQIgBAAQgFAKgIAEQgJAFgKAAQgRAAgJgJg");
	this.shape_18.setTransform(-89.55,-294.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWBDQgJgDgHgIQgGgIgDgOQgDgNgBgVQAAgTAEgOQAFgOAHgIQAHgIAKgEQAKgCALAAQAYAAAMANQAMAPAAAXIggAAIgBgJIgDgJQgBgEgDgCQgDgDgFAAQgGABgDADQgEACgDAGQgCAGAAAIIgBAUIABAVQAAAJACAGQACAFAEADQAEACAFABQAIAAAEgIQAFgHAAgRIAgAAQAAAbgMAOQgMANgbAAQgMABgKgEg");
	this.shape_19.setTransform(-101.05,-294.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcBAQgKgHgFgKQgFgKgBgMIgBgZQAAgNABgNQACgMAGgKQAFgKALgGQALgFAQgBQAPABAKAFQAJAEAFAJQAGAJACANQACAMAAAQIAAAHIhDAAIAAAKIABAMIADAKIAFAHQADACAEAAQAJAAAEgFQAEgHACgNIAeAAQgBAYgLAMQgLAMgZAAQgSAAgLgGgAgHgsIgFAHIgDAIIgBAKIAAAFIAjAAIgCgOQgBgFgCgEQgBgEgDgDQgEgCgFAAQgFAAgDACg");
	this.shape_20.setTransform(63.55,-318.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQBZIAAhcQAAgKgDgEQgDgEgJAAQgRAAAAAVIAABZIgiAAIAAixIAiAAIAAA6IABAAQAKgSAVAAQARAAAJAJQAJAJAAAVIAABig");
	this.shape_21.setTransform(52,-321.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANBXIgPgBQgGgCgEgEQgDgEgBgHQgCgGABgLIAAhMIgSAAIAAgXIASAAIAAgnIAhAAIAAAnIAUAAIAAAXIgUAAIAABIQAAAIADADQABAEAJAAIADAAIAEgBIAAAYIgLABg");
	this.shape_22.setTransform(42.6,-320.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiBFIAAiGIAgAAIAAASIABAAQAEgJAIgGQAIgGAKAAIADAAIAEABIAAAhIgGgBIgGAAIgJABQgEABgEADQgEADgCAFQgBAFAAAGIAABQg");
	this.shape_23.setTransform(30.25,-319.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbBAQgLgHgFgKQgFgKgCgMIgBgZQAAgNADgNQABgMAGgKQAFgKALgGQAKgFARgBQAPABAJAFQAKAEAGAJQAFAJADANQACAMAAAQIAAAHIhEAAIAAAKIABAMIADAKIAFAHQADACAEAAQAJAAAEgFQADgHACgNIAgAAQgCAYgMAMQgLAMgZAAQgRAAgKgGgAgHgsIgFAHIgDAIIgBAKIAAAFIAiAAIgBgOQgBgFgBgEQgCgEgEgDQgDgCgGAAQgDAAgEACg");
	this.shape_24.setTransform(20.3,-318.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AANBXIgPgBQgHgCgDgEQgDgEgBgHQgBgGAAgLIAAhMIgSAAIAAgXIASAAIAAgnIAhAAIAAAnIAUAAIAAAXIgUAAIAABIQAAAIADADQABAEAJAAIADAAIAEgBIAAAYIgLABg");
	this.shape_25.setTransform(11.35,-320.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiBDQgGgDgEgFQgEgGgBgHQgCgHAAgGQAAgKACgHQACgHAEgEQAEgFAGgDIAQgGIASgFQAIgCADgDQADgEAAgGQAAgIgEgFQgDgEgIAAQgIAAgEAFQgEAEAAAJIAAADIgfAAIAAgDQAAgMAEgHQAEgIAGgGQAGgEAJgCQAIgDAKAAQAPAAAJAEQAKADAFAFQAFAGACAHQACAIAAAJIAABGIABAOIADAMIghAAIgCgHIgCgIIgBAAQgGALgHADQgHADgNAAQgJAAgGgDgAAIAFIgIACQgJADgFAFQgEAFAAAJQAAAHADAGQADAGAHgBIAGgBQAEgBADgCQADgCACgFQACgEAAgGIAAgag");
	this.shape_26.setTransform(2.025,-318.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbBAQgLgHgFgKQgFgKgCgMIgBgZQAAgNACgNQACgMAGgKQAGgKAKgGQAKgFARgBQAPABAKAFQAJAEAFAJQAGAJACANQACAMABAQIAAAHIhEAAIAAAKIABAMIADAKIAFAHQADACAEAAQAJAAAEgFQAEgHACgNIAeAAQgBAYgLAMQgLAMgZAAQgSAAgKgGgAgHgsIgFAHIgDAIIgBAKIAAAFIAjAAIgCgOQAAgFgDgEQgBgEgDgDQgEgCgFAAQgEAAgEACg");
	this.shape_27.setTransform(-9.15,-318.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjBFIAAiGIAiAAIAAASIAAAAQAFgJAGgGQAJgGAKAAIADAAIAEABIAAAhIgGgBIgFAAIgJABQgFABgEADQgDADgDAFQgBAFAAAGIAABQg");
	this.shape_28.setTransform(-18.05,-319.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglBSQgMgJAAgRIAhAAQAAAGAFAEIAFACIAGABQAKAAAEgGQAEgHAAgKIAAgSIAAAAQgFAIgIAEQgHAFgIAAQgUAAgLgQQgKgPAAgkIABgYQACgMAEgKQAFgKAIgGQAIgHAOAAQAHAAAHAEQAIAEAFALIAAAAIAAgPIAiAAIAAB/QAAAagNAMQgNAOgdAAQgWAAgMgKgAgIg+QgDADgCAFQgCAGgBAJIgBAXIABANQABAGACAFQABAFAEACQADADAFAAQAFAAAEgDQADgCADgFQACgFABgHIAAgPQAAgZgDgKQgEgKgKAAQgFAAgEACg");
	this.shape_29.setTransform(-28.675,-316.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbBAQgLgHgFgKQgFgKgCgMIgBgZQAAgNACgNQADgMAFgKQAFgKALgGQAKgFARgBQAPABAKAFQAJAEAGAJQAFAJACANQADAMAAAQIAAAHIhEAAIAAAKIABAMIADAKIAFAHQADACAEAAQAJAAAEgFQADgHACgNIAfAAQgBAYgMAMQgLAMgZAAQgRAAgKgGgAgHgsIgFAHIgDAIIgBAKIAAAFIAiAAIgBgOQgBgFgBgEQgCgEgEgDQgDgCgGAAQgDAAgEACg");
	this.shape_30.setTransform(-45.5,-318.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAQBZIAAhcQAAgKgDgEQgEgEgHAAQgSAAABAVIAABZIgjAAIAAixIAjAAIAAA6IAAAAQAKgSAVAAQARAAAJAJQAJAJAAAVIAABig");
	this.shape_31.setTransform(-57.05,-321.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRBZIAAiUIgnAAIAAgdIBxAAIAAAdIgnAAIAACUg");
	this.shape_32.setTransform(-68.8,-321.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-246.5,-338.2,487.1,58.19999999999999), null);


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
	this.shape.setTransform(122.075,-107.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AAVBVIAAhyQgBgNgEgFQgEgEgKAAQgVgBgBAcIAABtIgqAAIAAilIAoAAIAAATIABAAQAHgMALgGQAKgFAOgBQAUABALAKQAMALAAAaIAAB6g");
	this.shape_1.setTransform(111.35,-114.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_2.setTransform(96.925,-113.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_3.setTransform(86.55,-116.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgCBqQgJgCgDgFQgFgFgCgIQgBgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQADAFAJAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgHgCg");
	this.shape_4.setTransform(79.1,-116.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_5.setTransform(67.625,-113.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAUBVIAAhyQAAgNgEgFQgEgEgKAAQgVgBgBAcIAABtIgqAAIAAilIAoAAIAAATIABAAQAHgMALgGQAKgFANgBQAVABALAKQAMALAAAaIAAB6g");
	this.shape_6.setTransform(53.3,-114.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgVBwIAAimIAqAAIAACmgAgVhKIAAglIAqAAIAAAlg");
	this.shape_7.setTransform(42.6,-116.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AA9BVIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgqAAIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgrAAIAAilIApAAIAAARIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAHQAKAHADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB3g");
	this.shape_8.setTransform(27.925,-114.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_9.setTransform(9.375,-113.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgVBvIAAjdIArAAIAADdg");
	this.shape_10.setTransform(-0.9,-116.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_11.setTransform(-17.675,-113.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgDBqQgHgCgFgFQgEgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQACAFAKAAIAFgBIAFAAIAAAeIgOAAIgOABQgMAAgIgCg");
	this.shape_12.setTransform(-28.6,-116.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_13.setTransform(-40.075,-113.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUBwIAAimIApAAIAACmgAgUhKIAAglIApAAIAAAlg");
	this.shape_14.setTransform(-50.35,-116.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("Ag0BcQgMgUAAgvQAAgtAMgVQAMgUAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhHIArAAIAADdIgpAAIAAgRIgBAAQgHALgIAFQgIAEgNAAQgbABgMgVgAgSgOQgEANAAAaQAAAcAEANQAFAPANAAQAOAAAEgPQAEgNAAgcQAAgagEgNQgEgOgOAAQgNAAgFAOg");
	this.shape_15.setTransform(-61.225,-116.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgiBPQgNgHgHgNQgGgNgBgQIgCgeQAAgRADgPQACgQAHgMQAHgMANgHQANgHAVAAQASAAAMAGQAMAGAHALQAHALACAPQADAQAAATIAAAJIhUAAIAAANIABAPIAEAMQACAFAEAEQAEADAFAAQALAAAFgIQAFgIACgPIAmAAQgBAdgOAPQgPAPgeAAQgWAAgNgIgAgJg2QgEADgCAFIgEAKIgBAMIAAAGIArAAIgCgQQAAgIgDgFQgCgFgEgDQgEgCgHAAQgFAAgFADg");
	this.shape_16.setTransform(-75.225,-113.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AA9BVIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgqAAIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgrAAIAAilIApAAIAAARIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAHQAKAHADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB3g");
	this.shape_17.setTransform(-93.375,-114.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BVIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgqAAIAAhzQAAgLgEgFQgEgFgJAAQgKAAgGAGQgGAHAAAPIAABsIgrAAIAAilIApAAIAAARIABAAQAIgMAKgEQAKgGAOAAQAPAAAJAHQAKAHADANIABAAQAFgNALgHQALgGAPgBQAVAAAKANQAKANAAAZIAAB3g");
	this.shape_18.setTransform(-116.075,-114.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgWBvIAAjdIAsAAIAADdg");
	this.shape_19.setTransform(-131,-116.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-144.8,-137.3,279.6,40.60000000000001), null);


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
	this.shape.graphics.f("#353535").s().p("AgmBOIAAgWIAIAAQAJAAADgEQAEgEABgIIgih1IAgAAIARBRIAAAAIAPhRIAfAAIgdBtIgHAYQgEAJgFAFQgEAFgHACQgHABgKAAg");
	this.shape.setTransform(124.975,-470.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgTA7QgIgDgGgGQgFgIgDgMQgDgMAAgSQAAgRADgMQAEgMAGgHQAHgHAJgDQAIgDAKAAQAVAAALANQAKAMAAAVIgdAAIAAgIIgCgIQgCgEgCgCQgDgCgEAAQgFAAgDACQgEADgCAFIgCAMIgBARIABAUIACAMQACAGADACQAEACAEAAQAHAAAEgHQADgGAAgPIAdAAQAAAXgKANQgLAMgYAAQgKAAgJgDg");
	this.shape_1.setTransform(115.525,-472.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AAPA9IAAhRQAAgJgEgEQgCgDgIAAQgOAAAAATIAABOIgfAAIAAh2IAdAAIAAAOIAAAAQAGgJAHgEQAHgEAKAAQAOAAAIAIQAIAIAAASIAABXg");
	this.shape_2.setTransform(105.45,-472.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgYA5QgJgGgFgJQgEgJgBgLIgBgWQAAgLACgLQABgLAFgJQAFgJAJgFQAKgFAOAAQANAAAJAEQAIAFAFAHQAFAJACAKQABAMAAANIAAAGIg7AAIAAAJIABAKIADAJQABAEADADQADACADAAQAIAAAEgGQADgFABgLIAcAAQgBAUgKALQgKALgWAAQgQAAgJgFgAgGgmQgDACgBAEIgDAHIgBAIIAAAFIAeAAIgBgMIgCgJQgBgEgDgCQgDgBgFAAQgEgBgDADg");
	this.shape_3.setTransform(95.375,-472.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AAMBMIgNgBQgGgBgDgEQgDgDgBgGIgBgPIAAhDIgQAAIAAgVIAQAAIAAghIAdAAIAAAhIARAAIAAAVIgRAAIAAA/QAAAHACADQACADAHAAIADAAIADAAIAAAVIgJAAg");
	this.shape_4.setTransform(87.6,-473.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgUA7QgJgCgFgFQgFgFgCgGQgCgIAAgIIAAgEIAcAAIAAADQAAAJAEAEQAEAFAHAAQAGAAAFgDQAEgEAAgHQAAgGgDgDQgEgDgEgCIgUgIQgNgEgGgGQgHgJAAgNQAAgGADgHQACgHAFgEQAGgFAIgDQAIgDALAAQAUAAAKAJQAKAJAAAPIAAAGIgbAAQAAgKgDgEQgDgFgHABQgFgBgEAEQgFADAAAGQAAAFADADQADAEAHADIASAFQAOAGAGAGQAGAIAAANQAAAKgDAHQgEAHgGAEQgFAFgIACQgIACgKAAQgMAAgIgDg");
	this.shape_5.setTransform(79.925,-472.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgOBPIAAh1IAdAAIAAB1gAgOg1IAAgaIAdAAIAAAag");
	this.shape_6.setTransform(72.925,-474.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgUA7QgJgCgFgFQgFgFgCgGQgCgIAAgIIAAgEIAcAAIAAADQAAAJAEAEQAEAFAHAAQAGAAAFgDQAEgEAAgHQAAgGgDgDQgEgDgEgCIgUgIQgNgEgGgGQgHgJAAgNQAAgGADgHQACgHAFgEQAGgFAIgDQAIgDALAAQAUAAAKAJQAKAJAAAPIAAAGIgbAAQAAgKgDgEQgDgFgHABQgFgBgEAEQgFADAAAGQAAAFADADQADAEAHADIASAFQAOAGAGAGQAGAIAAANQAAAKgDAHQgEAHgGAEQgFAFgIACQgIACgKAAQgMAAgIgDg");
	this.shape_7.setTransform(65.925,-472.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AAPA9IAAhRQAAgJgDgEQgEgDgHAAQgOAAAAATIAABOIgfAAIAAh2IAdAAIAAAOIABAAQAFgJAHgEQAHgEAKAAQAOAAAIAIQAIAIAAASIAABXg");
	this.shape_8.setTransform(56.05,-472.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgWA7QgJgEgFgIQgFgHgCgNQgDgLAAgQQAAgOADgMQACgLAGgIQAFgIAJgEQAJgEAMAAQAOAAAJAEQAJAEAFAHQAFAJACALQADAMAAAOQAAAQgDALQgCAMgGAIQgFAHgJAEQgJAEgNAAQgNAAgJgDgAgIglQgDADgCAFIgCAOIAAAPIAAARIACAOQACAFADADQAEADAEAAQAJAAAEgKQADgJAAgXQAAgVgDgJQgEgLgJABQgEgBgEAEg");
	this.shape_9.setTransform(45.775,-472.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgTA7QgIgDgGgGQgFgIgDgMQgDgMAAgSQAAgRADgMQAEgMAGgHQAHgHAJgDQAIgDAKAAQAVAAALANQAKAMAAAVIgdAAIAAgIIgCgIQgCgEgCgCQgDgCgEAAQgFAAgDACQgEADgCAFIgCAMIgBARIABAUIACAMQACAGADACQAEACAEAAQAHAAAEgHQADgGAAgPIAdAAQAAAXgKANQgLAMgYAAQgKAAgJgDg");
	this.shape_10.setTransform(35.925,-472.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgeA9IAAh2IAdAAIAAAQIAAAAQAEgIAHgFQAGgGAKAAIACAAIADABIAAAdIgFgBIgEAAIgIABIgIAEQgDADgCAEQgBAEAAAGIAABGg");
	this.shape_11.setTransform(23.425,-472.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgWA7QgJgEgFgIQgFgHgCgNQgDgLAAgQQAAgOADgMQACgLAGgIQAFgIAJgEQAJgEAMAAQAOAAAJAEQAJAEAFAHQAFAJACALQADAMAAAOQAAAQgDALQgCAMgGAIQgFAHgJAEQgJAEgNAAQgNAAgJgDgAgIglQgDADgCAFIgCAOIAAAPIAAARIACAOQACAFADADQAEADAEAAQAJAAAEgKQADgJAAgXQAAgVgDgJQgEgLgJABQgEgBgEAEg");
	this.shape_12.setTransform(14.525,-472.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgOBOIAAibIAdAAIAACbg");
	this.shape_13.setTransform(7.125,-474.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgWA7QgJgEgFgIQgFgHgCgNQgDgLAAgQQAAgOADgMQACgLAGgIQAFgIAJgEQAJgEAMAAQAOAAAJAEQAJAEAFAHQAFAJACALQADAMAAAOQAAAQgDALQgCAMgGAIQgFAHgJAEQgJAEgNAAQgNAAgJgDgAgIglQgDADgCAFIgCAOIAAAPIAAARIACAOQACAFADADQAEADAEAAQAJAAAEgKQADgJAAgXQAAgVgDgJQgEgLgJABQgEgBgEAEg");
	this.shape_14.setTransform(-0.275,-472.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgTA7QgIgDgGgGQgFgIgDgMQgDgMAAgSQAAgRADgMQAEgMAGgHQAHgHAJgDQAIgDAKAAQAVAAALANQAKAMAAAVIgdAAIAAgIIgCgIQgCgEgCgCQgDgCgEAAQgFAAgDACQgEADgCAFIgCAMIgBARIABAUIACAMQACAGADACQAEACAEAAQAHAAAEgHQADgGAAgPIAdAAQAAAXgKANQgLAMgYAAQgKAAgJgDg");
	this.shape_15.setTransform(-10.125,-472.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgYA5QgJgGgFgJQgEgJgBgLIgBgWQAAgLACgLQABgLAFgJQAFgJAJgFQAKgFAOAAQANAAAJAEQAIAFAFAHQAFAJACAKQABAMAAANIAAAGIg7AAIAAAJIABAKIADAJQABAEADADQADACADAAQAIAAAEgGQADgFABgLIAcAAQgBAUgKALQgKALgWAAQgQAAgJgFgAgGgmQgDACgBAEIgDAHIgBAIIAAAFIAeAAIgBgMIgCgJQgBgEgDgCQgDgBgFAAQgEgBgDADg");
	this.shape_16.setTransform(-24.525,-472.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AAPBOIAAhQQAAgJgEgEQgCgDgIgBQgPAAAAATIAABOIgeAAIAAibIAeAAIAAAyIABAAQAJgPATAAQAOAAAIAIQAIAIAAARIAABXg");
	this.shape_17.setTransform(-34.6,-474.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AAMBMIgNgBQgGgBgDgEQgDgDgBgGIgBgPIAAhDIgQAAIAAgVIAQAAIAAghIAdAAIAAAhIARAAIAAAVIgRAAIAAA/QAAAHACADQACADAHAAIADAAIADAAIAAAVIgJAAg");
	this.shape_18.setTransform(-42.8,-473.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgeA9IAAh2IAdAAIAAAQIAAAAQAEgIAHgFQAGgGAKAAIACAAIADABIAAAdIgFgBIgEAAIgIABIgIAEQgDADgCAEQgBAEAAAGIAABGg");
	this.shape_19.setTransform(-53.525,-472.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgYA5QgJgGgFgJQgEgJgBgLIgBgWQAAgLACgLQABgLAFgJQAFgJAJgFQAKgFAOAAQANAAAJAEQAIAFAFAHQAFAJACAKQABAMAAANIAAAGIg7AAIAAAJIABAKIADAJQABAEADADQADACADAAQAIAAAEgGQADgFABgLIAcAAQgBAUgKALQgKALgWAAQgQAAgJgFgAgGgmQgDACgBAEIgDAHIgBAIIAAAFIAeAAIgBgMIgCgJQgBgEgDgCQgDgBgFAAQgEgBgDADg");
	this.shape_20.setTransform(-62.225,-472.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AAMBMIgOgBQgFgBgDgEQgDgDgBgGIgBgPIAAhDIgQAAIAAgVIAQAAIAAghIAdAAIAAAhIARAAIAAAVIgRAAIAAA/QAAAHACADQACADAHAAIAEAAIACAAIAAAVIgJAAg");
	this.shape_21.setTransform(-70,-473.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgdA7QgGgCgDgGQgEgFgCgFIgBgMQAAgJACgGQACgFAEgFQADgEAGgCIANgGIAQgEQAHgBACgEQAEgDAAgGQAAgGgEgFQgDgDgHAAQgHgBgDAFQgEAEAAAHIAAAEIgbAAIAAgDQAAgLADgGQAEgIAFgEQAGgEAHgCQAIgCAIAAQANAAAJADQAIADAEAEQAFAFACAHQACAGAAAJIAAA8IAAAOIADAJIgdAAIgCgGIgBgGIgBAAQgFAKgIACQgFADgLAAQgIAAgFgDgAAHAEIgHACQgIADgEAEQgEAFAAAHQAAAHADAFQACAFAHAAIAFgBQADgBADgCQADgDABgDQADgEAAgFIAAgXg");
	this.shape_22.setTransform(-78.15,-472.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#353535").s().p("AgYA5QgJgGgFgJQgEgJgBgLIgBgWQAAgLACgLQABgLAFgJQAFgJAJgFQAKgFAOAAQANAAAJAEQAIAFAFAHQAFAJACAKQABAMAAANIAAAGIg7AAIAAAJIABAKIADAJQABAEADADQADACADAAQAIAAAEgGQADgFABgLIAcAAQgBAUgKALQgKALgWAAQgQAAgJgFgAgGgmQgDACgBAEIgDAHIgBAIIAAAFIAeAAIgBgMIgCgJQgBgEgDgCQgDgBgFAAQgEgBgDADg");
	this.shape_23.setTransform(-87.925,-472.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#353535").s().p("AgeA9IAAh2IAdAAIAAAQIAAAAQAEgIAHgFQAGgGAKAAIACAAIADABIAAAdIgFgBIgEAAIgIABIgIAEQgDADgCAEQgBAEAAAGIAABGg");
	this.shape_24.setTransform(-95.675,-472.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AghBIQgKgIAAgPIAdAAQAAAGAFADIAEACIAFABQAJAAAEgGQADgGAAgIIAAgQQgFAHgGADQgGAEgHAAQgSAAgJgNQgKgOAAgfIACgWQABgKAEgJQAEgJAHgFQAHgGANAAQAGAAAGAEQAHADAEAKIAAgOIAeAAIAABwQAAAXgMALQgLAMgaAAQgTAAgLgJgAgGg2QgEACgBAFQgCAFgBAIIAAAUIAAAMQABAFACAEQABAEADADQADACAEAAQAFAAADgCQADgDACgEIADgKIAAgOQAAgVgDgJQgDgJgJAAQgEAAgDACg");
	this.shape_25.setTransform(-104.975,-470.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#353535").s().p("AgYA5QgJgGgFgJQgEgJgBgLIgBgWQAAgLACgLQABgLAFgJQAFgJAJgFQAKgFAOAAQANAAAJAEQAIAFAFAHQAFAJACAKQABAMAAANIAAAGIg7AAIAAAJIABAKIADAJQABAEADADQADACADAAQAIAAAEgGQADgFABgLIAcAAQgBAUgKALQgKALgWAAQgQAAgJgFgAgGgmQgDACgBAEIgDAHIgBAIIAAAFIAeAAIgBgMIgCgJQgBgEgDgCQgDgBgFAAQgEgBgDADg");
	this.shape_26.setTransform(-119.625,-472.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AAOBOIAAhQQAAgJgCgEQgEgDgGgBQgQAAABATIAABOIgfAAIAAibIAfAAIAAAyIAAAAQAJgPASAAQAPAAAIAIQAIAIAAARIAABXg");
	this.shape_27.setTransform(-129.7,-474.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353535").s().p("AgPBOIAAiCIgiAAIAAgZIBjAAIAAAZIgiAAIAACCg");
	this.shape_28.setTransform(-139.975,-474.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_greaterConsistency, new cjs.Rectangle(-158.9,-489.3,302,30), null);


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
	this.shape.setTransform(122.975,-109.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag2BuIAAggIAMABQALAAAGgGQAFgGABgKIgvimIAsAAIAYByIABAAIAVhyIArAAIgoCbIgLAhQgFANgHAHQgGAHgJACQgKACgPAAg");
	this.shape_1.setTransform(113.125,-112.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgCBqQgJgCgDgFQgFgFgCgIQgBgJAAgMIAAhfIgWAAIAAgdIAWAAIAAgwIAqAAIAAAwIAYAAIAAAdIgYAAIAABZQAAAKADAEQADAFAJAAIAFgBIAEAAIAAAeIgNAAIgOABQgMAAgHgCg");
	this.shape_2.setTransform(102.5,-117.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgUBwIAAimIApAAIAACmgAgUhKIAAglIApAAIAAAlg");
	this.shape_3.setTransform(94.9,-118.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgXBUIgrinIAsAAIAXB3IABAAIAWh3IArAAIgpCng");
	this.shape_4.setTransform(85.075,-115.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgVBwIAAimIArAAIAACmgAgVhKIAAglIArAAIAAAlg");
	this.shape_5.setTransform(75.25,-118.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgDBqQgIgCgEgFQgEgFgCgIQgBgJAAgMIAAhfIgVAAIAAgdIAVAAIAAgwIAqAAIAAAwIAZAAIAAAdIgZAAIAABZQAAAKADAEQADAFAJAAIAFgBIAFAAIAAAeIgOAAIgOABQgNAAgHgCg");
	this.shape_6.setTransform(67.8,-117.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgbBTQgMgEgIgKQgIgKgEgRQgEgRAAgZQAAgYAFgRQAFgRAJgKQAJgKANgEQAMgEAOAAQAeAAAPARQAPARAAAeIgpAAIgBgMIgDgLQgCgFgEgCQgDgDgGAAQgHAAgFADQgFAEgDAHQgCAHgBAKIgBAZIABAaQABALACAHQADAHAEAEQAFADAGAAQALAAAFgJQAFgKAAgUIApAAQAAAhgPARQgPARgiAAQgPAAgMgEg");
	this.shape_7.setTransform(56.725,-115.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgzBKQgMgKAAgZIAAh7IAsAAIAAByQAAANAEAFQAEAFAKAAQAVAAABgbIAAhuIAqAAIAACmIgoAAIAAgUIgBAAQgHANgLAFQgKAFgNAAQgVAAgLgLg");
	this.shape_8.setTransform(42.55,-115.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("Ag0BcQgMgUAAguQAAguAMgVQAMgUAbAAQAMAAAHAFQAJAFAHAKIAAAAIAAhHIArAAIAADdIgpAAIAAgSIgBAAQgHAMgIAFQgIAFgNgBQgbAAgMgUgAgSgPQgEAOAAAbQAAAbAEANQAFAOANABQAOgBAEgOQAEgNAAgbQAAgbgEgOQgEgNgOAAQgNAAgFANg");
	this.shape_9.setTransform(27.625,-117.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgfBSQgMgFgIgLQgHgLgDgQQgEgRAAgWQAAgUAEgQQADgRAIgLQAIgLAMgGQANgFARAAQATgBANAGQANAFAHALQAIAMADAQQADAQAAAVQAAAWgEAQQgDARgIALQgHALgNAFQgNAFgSAAIgCAAQgRAAgMgFgAgLg1QgFAEgCAIQgDAIAAALIgBAWIABAYQAAALADAIQACAHAFAFQAEAEAHAAQANAAAFgOQAFgNAAggQAAgegFgOQgFgNgNAAQgHAAgEAEg");
	this.shape_10.setTransform(13.375,-115.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgrBWIAAinIApAAIAAAXIABAAQAGgMAIgIQAKgGANAAIAEAAIAEAAIAAApIgHgBIgHAAIgLACQgFACgFADQgEAEgDAFQgCAGAAAIIAABkg");
	this.shape_11.setTransform(2.2,-115.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AhABwIAAjbIApAAIAAASIABAAQAHgMAIgFQAIgFANAAQAbAAAMAUQAMAVAAAuQAAAugMAUQgMAUgbAAQgMAAgHgEQgJgFgHgKIAAAAIAABFgAgRhBQgEAOAAAbQAAAbAEANQAEAOANAAQAOAAAFgOQAEgNAAgbQAAgbgEgOQgFgNgOAAQgNAAgEANg");
	this.shape_12.setTransform(-10.425,-112.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgvBmQgOgLAAgWIApAAQAAAIAGAEIAHAEIAHACQANAAAFgJQAFgIAAgNIAAgWIgBAAQgGAJgKAGQgIAGgKgBQgaABgMgUQgNgTAAgtIABgdQACgPAFgNQAGgMAKgIQALgIARABQAJAAAJAEQAJAFAGANIABAAIAAgTIApAAIAACeQAAAhgQAPQgQAQgkABQgcAAgPgMgAgKhMQgEACgDAIQgCAGgBAMIgBAdIABAQQABAGACAGQADAHAEADQAEAEAGAAQAHAAAEgEQAFgDACgHQADgGABgHIABgUQAAgegFgNQgFgNgMAAQgGAAgFAEg");
	this.shape_13.setTransform(-32.225,-112.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAUBWIAAhyQABgOgFgEQgEgGgKAAQgWABABAbIAABuIgsAAIAAinIAqAAIAAAUIABAAQAGgMALgGQAKgGANABQAVAAALALQALAKAAAaIAAB7g");
	this.shape_14.setTransform(-46.75,-115.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgUBwIAAimIAqAAIAACmgAgUhKIAAglIAqAAIAAAlg");
	this.shape_15.setTransform(-57.45,-118.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("Ag5BUIAAghIBBhiIg+AAIAAgkIBxAAIAAAiIhCBiIBCAAIAAAjg");
	this.shape_16.setTransform(-67,-115.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgqBTQgIgEgFgGQgEgHgCgJQgDgIAAgJQAAgLADgJQACgIAGgHQAFgFAIgEQAHgEAMgDIAXgGQAJgDAEgEQAEgEAAgJQAAgJgFgGQgEgFgKAAQgKAAgFAGQgFAGAAAJIAAAFIgmAAIAAgEQAAgPAEgJQAFgKAIgGQAIgGALgDQAKgCAMAAQASAAAMADQAMAEAHAHQAGAHACAJQADAKAAALIAABXIABASIAEAOIgpAAIgDgJIgCgJIgBAAQgHANgKAEQgJAEgPAAQgLAAgIgEgAAKAGIgKADQgMADgFAGQgGAHAAALQAAAJAEAHQAEAHAIAAIAJgBQAEgCAEgDIAGgIQADgFAAgHIAAghg");
	this.shape_17.setTransform(-80.425,-115.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AA9BWIAAh0QAAgKgEgGQgEgFgJgBQgKABgGAGQgGAHAAAPIAABtIgqAAIAAh0QAAgKgEgGQgEgFgJgBQgKABgGAGQgGAHAAAPIAABtIgrAAIAAinIApAAIAAASIABAAQAIgLAKgGQAKgEAOAAQAPAAAJAGQAKAHADANIABAAQAFgNALgHQALgHAPABQAVAAAKAMQAKANAAAYIAAB5g");
	this.shape_18.setTransform(-98.725,-115.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAoBvIgLgvIg5AAIgLAvIguAAIA6jdIA3AAIA6DdgAAWAbIgWhiIAAAAIgVBiIArAAg");
	this.shape_19.setTransform(-118.275,-118.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-140.3,-138.8,279.6,40.60000000000001), null);


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
	this.shape.setTransform(-19.9418,-78.4172,0.8179,0.8179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup_intro, new cjs.Rectangle(-124.4,-103.1,208.9,49.39999999999999), null);


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
	this.shape.graphics.f("#353535").s().p("ASpBWQgKgGgFgKQgFgLgCgNIgBgZQAAgOACgLQACgNAGgJQAFgKALgGQAKgFASAAQAPAAAJAEQAKAFAFAJQAGAJACAMQACANAAAPIAAAHIhEAAIABAXIADAKIAFAHQADACAFABQAJAAAEgHQADgGACgNIAfAAQgBAYgMAMQgLAMgZAAQgSABgLgHgAS+gVIgFAFIgDAJIgBAIIAAAGIAjAAIgBgNQgBgFgCgFQgBgEgEgCQgDgCgGAAQgFAAgDADgAHJBZQgJgDgGgFQgFgGgDgHQgCgIAAgKIAAgFIAfAAIAAAFQAAAIAFAGQAEAFAJABQAIAAAFgFQAFgDAAgJQAAgGgEgEIgJgFIgYgJQgPgEgHgJQgHgKAAgNQAAgIADgHQACgIAHgGQAGgFAJgEQAJgCAOAAQAXgBALALQAMAJAAATIAAAGIgfAAQAAgLgEgFQgDgFgJAAQgGAAgFAEQgFADAAAHQAAAFADAEQADAEAJADIAVAGQAQAFAHAJQAGAKAAAPQAAAKgDAJQgEAHgHAFQgGAGgJACQgJACgLAAQgPAAgKgDgAFeBWQgKgGgFgKQgFgLgCgNIgBgZQAAgOACgLQACgNAGgJQAFgKALgGQAKgFASAAQAPAAAJAEQAKAFAFAJQAGAJACAMQACANAAAPIAAAHIhEAAIABAXIADAKIAFAHQADACAFABQAJAAAEgHQADgGACgNIAfAAQgBAYgMAMQgLAMgZAAQgSABgLgHgAFzgVIgFAFIgDAJIgBAIIAAAGIAjAAIgBgNQgBgFgCgFQgBgEgEgCQgDgCgGAAQgFAAgDADgABBBYQgLgEgGgLQgGgJgDgRQgDgQAAgYIABgjQACgQAFgNQAGgOALgIQALgHAUgBQAQAAALAFQAKAFAHAKQAGAKADARQACAQAAAXIgBAjQgBARgGANQgFANgLAIQgMAHgTAAQgQABgLgFgABSg8QgEADgCAGQgCAIgBALIAABKQABALACAGQADAGADADQAEACAGAAQAGAAADgDQAEgEACgGQADgHAAgMIAAhKQAAgKgDgHQgCgGgEgCQgDgCgGAAQgGAAgEADgAiaBYQgLgEgGgLQgGgJgDgRQgDgQAAgYIABgjQACgQAFgNQAGgOALgIQALgHAUgBQAQAAALAFQAKAFAHAKQAGAKADARQACAQAAAXIgBAjQgBARgGA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");
	this.shape.setTransform(-12.325,-68.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-147.5,-77.9,270.4,18.500000000000007), null);


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

}).prototype = getMCSymbolPrototype(lib.image_03_slices, new cjs.Rectangle(-141,-203,282,406), null);


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

}).prototype = getMCSymbolPrototype(lib.image_02_slices, new cjs.Rectangle(-141,-203,282,406), null);


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

}).prototype = getMCSymbolPrototype(lib.image_01_slices, new cjs.Rectangle(-141,-203,282,406), null);


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

}).prototype = getMCSymbolPrototype(lib.hallway_mc, new cjs.Rectangle(-150,-300,300,250), null);


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
	this.instance.setTransform(-72,-31,0.593,0.593);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-72,-31,77.7,28.5), null);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8).to({_off:false},0).wait(44).to({_off:true},1).wait(287));

	// image_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_9 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_53 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_9,x:-14.4,y:45.375}).wait(44).to({graphics:mask_graphics_53,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).wait(44).to({_off:true},1).wait(287));

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
	var mask_graphics_0 = new cjs.Graphics().p("EgEDAhdMAAAhC5IP7AAMAAABC5g");
	var mask_graphics_43 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:76,y:6}).wait(43).to({graphics:mask_graphics_43,x:100.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

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
	var mask_1_graphics_0 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.025,y:6}).wait(43).to({graphics:mask_1_graphics_43,x:-0.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

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
	var mask_2_graphics_0 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-97.025,y:6}).wait(43).to({graphics:mask_2_graphics_43,x:-97.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(316));

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
p.nominalBounds = new cjs.Rectangle(-141,-208,282,411);


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
	var mask_graphics_0 = new cjs.Graphics().p("EgEDAhdMAAAhC5IP7AAMAAABC5g");
	var mask_graphics_72 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:76,y:6}).wait(72).to({graphics:mask_graphics_72,x:100.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// Layer_1
	this.instance = new lib.image_02_slices();
	this.instance.setTransform(0,-422);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(46).to({_off:true},1).wait(287));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");
	var mask_1_graphics_72 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.025,y:6}).wait(72).to({graphics:mask_1_graphics_72,x:-0.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// Layer_1
	this.instance_1 = new lib.image_02_slices();
	this.instance_1.setTransform(0,-422);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(54).to({_off:true},1).wait(287));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");
	var mask_2_graphics_72 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-97.025,y:6}).wait(72).to({graphics:mask_2_graphics_72,x:-97.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(287));

	// Layer_1
	this.instance_2 = new lib.image_02_slices();
	this.instance_2.setTransform(0,-422);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},10,cjs.Ease.quadOut).wait(62).to({_off:true},1).wait(287));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-208,282,411);


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
	var mask_graphics_0 = new cjs.Graphics().p("EgEDAhdMAAAhC5IP7AAMAAABC5g");
	var mask_graphics_102 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:76,y:6}).wait(102).to({graphics:mask_graphics_102,x:100.975,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance = new lib.image_01_slices();
	this.instance.setTransform(0,-422);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(76).to({_off:true},1).wait(257));

	// slice_01_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgHfAhdMAAAhC5IO/AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-0.025,y:6}).wait(102).to({graphics:mask_1_graphics_102,x:-0.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance_1 = new lib.image_01_slices();
	this.instance_1.setTransform(0,-422);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:0},10,cjs.Ease.quadOut).wait(84).to({_off:true},1).wait(257));

	// slice_01_mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");
	var mask_2_graphics_102 = new cjs.Graphics().p("EgH9AhdMAAAhC5IP7AAMAAABC5g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:-97.025,y:6}).wait(102).to({graphics:mask_2_graphics_102,x:-97.025,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(257));

	// Layer_1
	this.instance_2 = new lib.image_01_slices();
	this.instance_2.setTransform(0,-422);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:0},10,cjs.Ease.quadOut).wait(92).to({_off:true},1).wait(257));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-208,282,411);


// stage content:
(lib.Epson_RDrive_300x250_V3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

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
	this.instance_4.setTransform(345,187,0.9421,0.9421);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(320).to({_off:false},0).to({x:252,alpha:1},15,cjs.Ease.quadOut).wait(25));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_345 = new cjs.Graphics().p("AmuCUQgjAAAAgjIAAAAIAAjhQAAgjAjAAIAAAAINdAAQAjAAAAAjIAAAAIAADhQAAAjgjAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(345).to({graphics:mask_graphics_345,x:125.3146,y:117.7141}).wait(15));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-12.6,-9.7,12.7,9.6).s().p("AnTFdIKqt7ID9DCIqqN7g");
	this.shape_1.setTransform(52.875,96.1);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-12.6,-9.7,12.7,9.6).s().p("AnTFdIKqt6ID9DBIqqN6g");
	this.shape_2.setTransform(65.525,99.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-12.6,-9.7,12.7,9.6).s().p("AnTFdIKqt7ID9DCIqqN6g");
	this.shape_3.setTransform(155.675,126.65);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},345).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:65.525,y:99.85}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:121.875,y:116.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:178.225,y:133.35}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:190.875,y:137.1}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(345).to({_off:false},0).wait(1).to({x:54.275,y:96.5},0).wait(1).to({x:58.525,y:97.75},0).to({_off:true},1).wait(1).to({_off:false,x:75.425,y:102.8},0).wait(1).to({x:88.075,y:106.55},0).wait(1).to({x:103.575,y:111.15},0).to({_off:true},1).wait(1).to({_off:false,x:140.175,y:122.05},0).to({_off:true},1).wait(1).to({_off:false,x:168.325,y:130.4},0).to({_off:true},1).wait(1).to({_off:false,x:185.225,y:135.45},0).wait(1).to({x:189.475,y:136.7},0).to({_off:true},1).wait(1));

	// ctaBtn
	this.instance_5 = new lib.ctaBtn();
	this.instance_5.setTransform(125.35,117.7,0.5728,0.5728,0,0,0,0.1,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(335).to({_off:false},0).to({alpha:1},10).wait(15));

	// printer_mc
	this.instance_6 = new lib.printer_mc("single",9);
	this.instance_6.setTransform(151.15,150.1,0.8379,0.8379,0,0,0,0.2,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(232).to({_off:false},0).to({regY:0,scaleX:0.9423,scaleY:0.9423,x:151.2,y:155,alpha:1,mode:"synched",loop:false},9,cjs.Ease.quadOut).wait(44).to({mode:"single",startPosition:53},0).wait(35).to({startPosition:53},0).to({regX:0.4,regY:0.1,scaleX:0.6661,scaleY:0.6661,x:120.3,y:191.1},15,cjs.Ease.quadOut).wait(25));

	// BG
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_4.setTransform(150,125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.11)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_5.setTransform(150,125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.224)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_6.setTransform(150,125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.333)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_7.setTransform(150,125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.443)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_8.setTransform(150,125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.557)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_9.setTransform(150,125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.667)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_10.setTransform(150,125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.776)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_11.setTransform(150,125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.89)").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_12.setTransform(150,125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},223).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(128));

	// txt_onARoll
	this.instance_7 = new lib.txt_onARoll();
	this.instance_7.setTransform(144.05,528.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180).to({_off:false},0).to({alpha:1},11).wait(30).to({alpha:0},11).wait(128));

	// top_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_155 = new cjs.Graphics().p("AtNOdIAA85IaaAAIAAc5g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_1_graphics_155,x:148.55,y:100.25}).wait(205));

	// image_strip_01
	this.instance_8 = new lib.image_strip_01();
	this.instance_8.setTransform(146.65,-105.3,0.6832,0.6832,0,0,0,0.2,0.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(155).to({_off:false},0).to({y:95.7},14,cjs.Ease.quadOut).wait(191));

	// image_strip_02
	this.instance_9 = new lib.image_strip_02();
	this.instance_9.setTransform(148.65,-106.3,0.6832,0.6832,0,0,0,0,0.1);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(169).to({_off:false},0).to({y:95.7},14,cjs.Ease.quadOut).wait(177));

	// image_strip_03
	this.instance_10 = new lib.image_strip_03();
	this.instance_10.setTransform(149,-113.3,0.6832,0.6832,0,0,0,0.1,0.1);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(183).to({_off:false},0).to({y:95.7},14,cjs.Ease.quadOut).wait(163));

	// hallway_mc
	this.instance_11 = new lib.hallway_mc();
	this.instance_11.setTransform(150.1,328.1,1.1468,1.1468,0,0,0,0.1,0.1);
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
	var mask_2_graphics_54 = new cjs.Graphics().p("AHxfuIAA2gIOSAAIAAWggAnBfuIAA2gIOVAAIAAWggA2CfuIAA2gIOjAAIAAWggAHxjvIAA7JIAAg2IOSAAIAAb/gAnBjvIAA7/IOVAAIAAA2IAAbJgA2CjvIAA7/IOjAAIAAb/g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(54).to({graphics:mask_2_graphics_54,x:151.05,y:268.05}).wait(103).to({graphics:null,x:0,y:0}).wait(203));

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
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_14.setTransform(150.05,177.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.102)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_15.setTransform(150.05,177.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.2)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_16.setTransform(150.05,177.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.302)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_17.setTransform(150.05,177.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.4)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_18.setTransform(150.05,177.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.502)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_19.setTransform(150.05,177.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.6)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_20.setTransform(150.05,177.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.698)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_21.setTransform(150.05,177.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.8)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_22.setTransform(150.05,177.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.898)").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_23.setTransform(150.05,177.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("A3SLaIAA2zMAukAAAIAAWzg");
	this.shape_24.setTransform(150.05,177.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},43).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(306));

	// printer_mc
	this.instance_17 = new lib.printer_mc("single",0);
	this.instance_17.setTransform(147.45,170.15,0.7582,0.7582,0,0,0,0.6,0.2);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:0.4,scaleX:0.8269,scaleY:0.8269,x:147.35,y:175.15,alpha:1,startPosition:9},9,cjs.Ease.quadOut).to({_off:true},45).wait(306));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(47.5,109,337.2,304);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 300,
	height: 250,
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