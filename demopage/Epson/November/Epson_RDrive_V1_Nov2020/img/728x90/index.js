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
p.nominalBounds = new cjs.Rectangle(0,0,370,276);


(lib.image_01 = function() {
	this.initialize(img.image_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_02 = function() {
	this.initialize(img.image_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


(lib.image_03 = function() {
	this.initialize(img.image_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,359,144);


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
	this.shape.graphics.f("#353535").s().p("AgTAXIAAgtIAnAAIAAAtg");
	this.shape.setTransform(164.925,-473.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_1.setTransform(158.425,-482.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_2.setTransform(151.975,-482.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgeBQQgMgFgIgLQgGgKgEgQQgCgRAAgUQAAgUACgQQAEgQAHgLQAIgKAMgGQANgFAQAAQATgBAMAGQAMAFAHALQAIALACAPQAEAQAAAVQAAAUgEAQQgDAQgIALQgHAKgMAFQgMAGgSAAQgRAAgNgFgAgLgzQgEAEgCAIQgDAHgBALIAAAWIAAAWQABALADAHQACAIAEAEQAFAEAGAAQAMAAAGgNQAEgNAAgeQAAgegEgNQgGgNgMAAQgGAAgFAEg");
	this.shape_3.setTransform(141.95,-479.5521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgpBTIAAihIAnAAIAAAWIABAAQAFgMAJgHQAJgHANAAIAEAAIADABIAAAnIgGAAIgGAAIgLABQgGACgEADQgFAEgCAFQgCAGAAAIIAABgg");
	this.shape_4.setTransform(131.175,-479.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgpBQQgIgDgEgHQgFgGgCgJQgCgIAAgIQABgMACgIQACgIAFgFQAFgGAIgDQAIgFAKgCIAWgHQAKgCAEgFQADgDAAgJQAAgJgEgFQgEgFgKAAQgJgBgGAHQgEAFAAAJIAAAFIglAAIAAgEQgBgOAFgJQAEgKAIgGQAIgFAKgDQALgDALABQASgBALAEQALADAHAHQAGAHACAJQADAJAAALIAABUIABASIADANIgnAAIgDgIIgCgJIgBAAQgHANgJADQgIAEgQABQgKgBgIgEgAAJAGIgJACQgMADgFAGQgFAHAAAKQAAAKAEAHQADAGAIAAIAIgCQAFgBADgCQAEgEADgFQACgEAAgHIAAggg");
	this.shape_5.setTransform(112.55,-479.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAUBTIAAhvQAAgMgFgFQgDgFgKAAQgVAAAAAbIAABqIgpAAIAAihIAnAAIAAATIABAAQAGgMALgFQAJgGAOAAQAUAAAKALQALALAAAYIAAB3g");
	this.shape_6.setTransform(92.25,-479.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgeBQQgMgFgHgLQgIgKgCgQQgDgRgBgUQABgUADgQQADgQAHgLQAIgKAMgGQANgFAQAAQATgBAMAGQAMAFAHALQAIALACAPQADAQABAVQgBAUgDAQQgDAQgIALQgHAKgMAFQgNAGgRAAQgSAAgMgFgAgLgzQgEAEgDAIQgCAHgBALIAAAWIAAAWQABALACAHQADAIAEAEQAEAEAHAAQANAAAEgNQAFgNAAgeQAAgegFgNQgEgNgNAAQgHAAgEAEg");
	this.shape_7.setTransform(78.3,-479.5521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("Ag0BrIAAgfIALABQAMAAAEgGQAGgGAAgKIgtihIArAAIAXBvIABAAIAVhvIApAAIgnCWQgFAUgFAMQgFANgHAHQgFAHgKACQgJACgPAAg");
	this.shape_8.setTransform(58.75,-476.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgUBrIAAjVIApAAIAADVg");
	this.shape_9.setTransform(49.225,-482.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AghBNQgNgHgGgNQgGgMgBgQIgBgdQAAgRACgOQACgQAHgLQAHgMAMgGQAMgIAVABQASgBALAGQAMAGAGAKQAHAMADAOQABAQAAATIAAAIIhRAAIAAAMIABAPIAFALQACAFADAEQAEADAFAAQALAAAEgHQAFgIACgQIAmAAQgCAdgOAPQgNAPgfAAQgUAAgNgIgAgJg1QgDADgCAFIgFAKIgBALIAAAHIAqAAIgBgRQgBgHgDgFQgCgEgDgDQgFgDgGABQgFAAgFACg");
	this.shape_10.setTransform(39.5,-479.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgCBnQgIgCgEgFQgEgFgBgIQgCgIAAgNIAAhbIgVAAIAAgcIAVAAIAAguIAoAAIAAAuIAYAAIAAAcIgYAAIAABWQAAAKADAEQADAEAJAAIAEAAIAFgBIAAAdIgNABIgOAAQgMAAgGgBg");
	this.shape_11.setTransform(28.95,-481.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgUBsIAAigIApAAIAACggAgUhIIAAgjIApAAIAAAjg");
	this.shape_12.setTransform(21.575,-482.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AAUBTIAAhvQAAgMgFgFQgDgFgKAAQgVAAAAAbIAABqIgpAAIAAihIAnAAIAAATIABAAQAGgMALgFQAJgGAOAAQAUAAAKALQALALAAAYIAAB3g");
	this.shape_13.setTransform(11.25,-479.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgUBsIAAigIApAAIAACggAgUhIIAAgjIApAAIAAAjg");
	this.shape_14.setTransform(0.875,-482.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgVBtIAAiEIgVAAIAAgcIAVAAIAAgSQAAgLADgIQADgHAFgFQAGgEAHgCQAIgCAKAAIAWABIAAAdIgEAAIgEAAQgJAAgDADQgEADAAAHIAAAOIAYAAIAAAcIgYAAIAACEg");
	this.shape_15.setTransform(-6.3,-482.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgiBNQgMgHgGgNQgGgMgCgQIgBgdQAAgRADgOQACgQAHgLQAGgMANgGQANgIATABQATgBALAGQAMAGAGAKQAHAMADAOQABAQAAATIAAAIIhQAAIAAAMIAAAPIAEALQADAFADAEQAEADAFAAQAKAAAGgHQAEgIACgQIAmAAQgCAdgOAPQgOAPgeAAQgUAAgOgIgAgJg1QgDADgDAFIgEAKIAAALIAAAHIApAAIgCgRQAAgHgDgFQgBgEgFgDQgEgDgGABQgGAAgEACg");
	this.shape_16.setTransform(-16.95,-479.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgyBZQgMgTAAgtQAAgsAMgUQAMgUAZAAQAMAAAHAEQAIAFAHAKIABAAIAAhEIApAAIAADVIgoAAIAAgRIAAAAQgHAMgIAEQgIAFgNAAQgZAAgMgUgAgQgOQgFANAAAaQAAAaAFANQADAOANAAQAOAAAEgOQAEgNAAgaQAAgagEgNQgEgNgOAAQgNAAgDANg");
	this.shape_17.setTransform(-30.85,-481.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AghBNQgNgHgGgNQgGgMgBgQIgBgdQAAgRABgOQADgQAGgLQAIgMAMgGQAMgIAVABQARgBAMAGQAMAGAGAKQAHAMACAOQACAQAAATIAAAIIhRAAIAAAMIABAPIAFALQABAFAFAEQAEADAEAAQALAAAEgHQAFgIACgQIAlAAQgBAdgOAPQgOAPgdAAQgVAAgNgIgAgIg1QgFADgBAFIgFAKIgBALIAAAHIAqAAIgBgRQgBgHgCgFQgDgEgDgDQgEgDgHABQgFAAgEACg");
	this.shape_18.setTransform(-50.75,-479.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgpBTIAAihIAnAAIAAAWIABAAQAFgMAJgHQAJgHANAAIAEAAIADABIAAAnIgGAAIgGAAIgLABQgGACgEADQgFAEgCAFQgCAGAAAIIAABgg");
	this.shape_19.setTransform(-61.275,-479.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AgpBQQgHgDgFgHQgEgGgCgJQgCgIgBgIQAAgMADgIQACgIAFgFQAFgGAIgDQAIgFAKgCIAXgHQAJgCADgFQAEgDAAgJQAAgJgEgFQgEgFgKAAQgKgBgEAHQgGAFAAAJIAAAFIglAAIAAgEQABgOAEgJQAEgKAIgGQAIgFAKgDQAKgDAMABQASgBALAEQAMADAGAHQAGAHADAJQACAJAAALIAABUIABASIADANIgnAAIgDgIIgCgJIgBAAQgGANgKADQgJAEgOABQgLgBgIgEgAAJAGIgJACQgMADgFAGQgFAHAAAKQAAAKADAHQAEAGAJAAIAIgCQAEgBADgCQAEgEACgFQADgEAAgHIAAggg");
	this.shape_20.setTransform(-73.45,-479.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AghBNQgNgHgGgNQgGgMgBgQIgBgdQAAgRACgOQACgQAHgLQAGgMANgGQAMgIAVABQARgBAMAGQALAGAHAKQAHAMACAOQACAQAAATIAAAIIhRAAIAAAMIABAPIAFALQABAFAEAEQAFADAEAAQALAAAEgHQAFgIACgQIAlAAQgBAdgOAPQgNAPgeAAQgVAAgNgIgAgJg1QgEADgBAFIgFAKIgBALIAAAHIAqAAIgBgRQgBgHgDgFQgCgEgDgDQgFgDgGABQgFAAgFACg");
	this.shape_21.setTransform(-93.15,-479.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AAZBrIgZiaIAAAAIgYCaIgvAAIgnjVIApAAIAYCdIAAAAIAaidIAoAAIAZCdIAAAAIAYidIApAAIgnDVg");
	this.shape_22.setTransform(-110.75,-482.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_onARoll, new cjs.Rectangle(-201.5,-502.3,448.7,39.5), null);


(lib.txt_inchRoll = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AMrCDQAJgRAHgPQAGgPAEgQQADgPACgRQACgQAAgSQAAgSgCgQQgCgRgDgQQgEgPgGgPQgHgQgJgRIAeAAQAXAjAJAhQAKAgAAAeQAAAegKAhQgJAggXAigAtJCDQgWgigJggQgJghAAgeQAAgeAJggQAJghAWgjIAfAAQgJARgGAQQgHAPgEAPQgEAQgCARQgBAQAAASQAAASABAQQACARAEAPQAEAQAHAPQAGAPAJARgAH4BNQgNgEgGgLQgHgKgEgQQgDgPAAgVQABgTADgPQADgPAIgKQAGgLANgFQALgFARgBQASAAAMAFQAMAGAHAKQAHAKACAPQAEAQAAATQAAAVgEAPQgDAPgHAKQgHALgMAFQgMAFgRAAQgSAAgLgFgAIKgxQgFAEgCAHIgDARIAAAsIADARQACAHAFAEQAEAFAHAAQAMAAAFgOQAFgMgBgeQABgcgFgMQgFgOgMAAQgHAAgEAFgAA7BOQgKgEgIgJQgIgJgDgQQgEgQAAgYQAAgWAEgRQAFgPAJgKQAIgJAMgEQAMgEAOAAQAbAAAOAQQAOARAAAbIgmAAIAAgKIgEgKQgBgFgEgDQgDgCgGAAQgHAAgFADQgFADgCAGQgCAHgBAKIAAAvQABALACAGQACAHAEADQAFADAGABQALgBAEgIQAFgJAAgUIAmAAQAAAfgOARQgOAQgfAAQgPAAgMgEgAoiBKQgMgHgHgOQgHgMgCgSQgCgSAAgRIACgrQABgUAGgQQAHgPAOgKQAOgKAZAAQALAAALADQAJACAJAHQAHAGAFAJQAFALABAOIgpAAQAAgMgEgGQgEgHgLAAQgIAAgFAFQgFADgCAHQgDAHgCAKIAAAfIAAAAQAGgIAJgFQAKgFAOAAQANAAAKAFQAJAFAHAIQAFAIAEANQACALAAANQAAAkgQASQgQATgiAAQgWAAgNgIgAoPgOQgFAJAAATIABARQABAHACAGQADAFAEADQAFADAHABQAIgBAEgDQAEgDACgGQADgFAAgHIACgRQAAgTgGgJQgFgJgMAAQgMAAgGAJgAL1BOIAAgtIAmAAIAAAtgAKvBOIAAjOIAoAAIAADOgAJpBOIAAjOIApAAIAADOgAF8BOIAAiaIAmAAIAAAUIABAAQAHgLAIgHQAJgGAMgBIAEAAIADABIAAAnIgMgBIgKABQgGACgEADQgFADgCAFQgDAGAAAIIAABcgAD0BOIAAhqQAAgNgEgEQgEgFgJAAQgVAAAAAaIAABmIgoAAIAAjOIAoAAIAABEIABAAQALgVAbAAQASAAALALQAKALAAAXIAABygAgiBOIAAhqQAAgNgEgEQgEgFgJAAQgVAAAAAaIAABmIgoAAIAAiaIAmAAIAAASIABAAQAGgMAKgFQALgFANgBQASAAALALQAJALAAAXIAABygAi0BOIAAiaIAoAAIAACagAlsBOIAAgqIhJAAIAAgiIBEiAIArAAIAACCIAUAAIAAAgIgUAAIAAAqgAmUAEIAoAAIAAhOIgBAAgAq1BOIgJgsIg4AAIgJAsIgrAAIA3jOIAzAAIA3DOgAruAAIApAAIgUhcIgBAAgAkiAMIAAghIBTAAIAAAhgAi0hfIAAgjIAoAAIAAAjg");
	this.shape.setTransform(15.5,-460.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_inchRoll, new cjs.Rectangle(-72.7,-473.5,176.5,26.19999999999999), null);


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
	this.shape.graphics.f("#353535").s().p("AgWAbIAAg1IAtAAIAAA1g");
	this.shape.setTransform(311.85,-123.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AAXBhIAAiCQAAgOgFgGQgEgGgMABQgYAAAAAeIAAB9IgwAAIAAi8IAuAAIAAAWIAAAAQAIgOAMgHQALgFAQgBQAYAAAMANQANANAAAcIAACLg");
	this.shape_1.setTransform(298.65,-130.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgjBdQgOgGgJgMQgIgMgDgUQgFgSAAgZQAAgXAFgSQADgTAJgNQAJgMAOgHQAOgFAUgBQAWAAAOAGQAOAGAJANQAIANADASQAFATAAAXQAAAYgFATQgDASgJANQgJAMgOAHQgOAFgVAAIgCABQgUAAgNgGgAgNg8QgFAFgDAJQgDAJAAALIgBAaIABAbQAAAMADAJQADAJAFAEQAFAGAIAAQAPAAAFgQQAGgQAAgjQAAgigGgPQgFgQgPAAQgIAAgFAFg");
	this.shape_2.setTransform(281.25,-130.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgXB/IAAi8IAvAAIAAC8gAgXhUIAAgpIAvAAIAAApg");
	this.shape_3.setTransform(268.4,-133.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgDB4QgJgCgEgGQgFgGgCgKQgCgIAAgPIAAhrIgYAAIAAghIAYAAIAAg2IAvAAIAAA2IAcAAIAAAhIgcAAIAABlQABALADAFQADAFAKgBIAGAAIAFAAIAAAiIgPAAIgQAAQgOAAgIgBg");
	this.shape_4.setTransform(258.85,-132.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgwBeQgJgEgFgIQgFgIgCgJQgDgKAAgKQAAgNADgJQADgKAFgHQAGgGAJgEIAWgIIAagIQALgCAEgGQAEgFAAgIQAAgMgFgFQgFgHgLAAQgLAAgGAHQgGAHAAALIAAAFIgrAAIAAgEQAAgRAFgLQAGgLAIgHQAJgHAMgCQAMgDAOgBQAVABANAEQANAEAIAHQAHAIADAKQACALAAANIAABiIACAVIAEAQIguAAIgDgKIgDgKIgBAAQgIAOgLAFQgKAFgRgBQgNABgJgFgAALAGIgLADQgNAEgGAIQgHAGAAAOQAAAKAEAIQAFAIAJAAIAKgCQAFgBAEgEQAFgEACgFQADgGAAgHIAAgmg");
	this.shape_5.setTransform(244.825,-130.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AAXBhIAAiCQAAgOgFgGQgEgGgMABQgYAAAAAeIAAB9IgwAAIAAi8IAuAAIAAAWIAAAAQAIgOAMgHQALgFAQgBQAXAAANANQANANAAAcIAACLg");
	this.shape_6.setTransform(227.55,-130.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AgXB/IAAi8IAvAAIAAC8gAgXhUIAAgpIAvAAIAAApg");
	this.shape_7.setTransform(214.35,-133.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("ABEBhIAAiDQAAgMgEgHQgEgFgLAAQgLgBgHAIQgGAIgBAQIAAB8IgvAAIAAiDQAAgMgFgHQgDgFgLAAQgLgBgHAIQgHAIAAAQIAAB8IgwAAIAAi8IAuAAIAAATIABAAQAIgNAMgFQALgGAQAAQARAAAKAIQAMAIAEAPIAAAAQAGgQAMgHQAMgIASAAQAYAAALAOQALAQAAAbIAACIg");
	this.shape_8.setTransform(196.65,-130.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgwBeQgJgEgFgIQgFgIgCgJQgDgKAAgKQAAgNADgJQADgKAFgHQAGgGAJgEIAWgIIAagIQALgCAEgGQAEgFAAgIQAAgMgFgFQgFgHgLAAQgLAAgGAHQgGAHAAALIAAAFIgrAAIAAgEQAAgRAFgLQAGgLAIgHQAJgHAMgCQAMgDAOgBQAVABANAEQANAEAIAHQAHAIADAKQACALAAANIAABiIACAVIAEAQIguAAIgDgKIgDgKIgBAAQgIAOgLAFQgKAFgRgBQgNABgJgFgAALAGIgLADQgNAEgGAIQgHAGAAAOQAAAKAEAIQAFAIAJAAIAKgCQAFgBAEgEQAFgEACgFQADgGAAgHIAAgmg");
	this.shape_9.setTransform(174.625,-130.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgXB9IAAj5IAvAAIAAD5g");
	this.shape_10.setTransform(161.9,-133.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgnBZQgOgIgHgOQgIgPgCgSIgBgjQAAgSADgSQACgSAIgNQAIgNAPgJQAOgHAYgBQAVAAANAHQAOAHAHAMQAJANACASQADARAAAWIAAAJIhfAAIAAAQIABAQIAFAOQADAGAEAEQAEADAGABQANAAAFgJQAGgJACgSIArAAQgBAhgQARQgRARgiAAQgaAAgOgJgAgKg+QgEAEgDAFIgFANIgBAMIAAAIIAxAAIgBgTQgCgJgDgFQgCgGgFgDQgEgDgIAAQgGAAgFADg");
	this.shape_11.setTransform(140.7,-130.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgDB4QgJgCgFgGQgFgGgBgKQgCgIAAgPIAAhrIgYAAIAAghIAYAAIAAg2IAwAAIAAA2IAcAAIAAAhIgcAAIAABlQAAALADAFQADAFALgBIAFAAIAGAAIAAAiIgQAAIgQAAQgOAAgIgBg");
	this.shape_12.setTransform(127.25,-132.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgwBeQgJgEgFgIQgFgIgCgJQgDgKAAgKQAAgNADgJQADgKAFgHQAGgGAJgEIAWgIIAagIQALgCAEgGQAEgFAAgIQAAgMgFgFQgFgHgLAAQgLAAgGAHQgGAHAAALIAAAFIgrAAIAAgEQAAgRAFgLQAGgLAIgHQAJgHAMgCQAMgDAOgBQAVABANAEQANAEAIAHQAHAIADAKQACALAAANIAABiIACAVIAEAQIguAAIgDgKIgDgKIgBAAQgIAOgLAFQgKAFgRgBQgNABgJgFgAALAGIgLADQgNAEgGAIQgHAGAAAOQAAAKAEAIQAFAIAJAAIAKgCQAFgBAEgEQAFgEACgFQADgGAAgHIAAgmg");
	this.shape_13.setTransform(113.225,-130.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AgXB/IAAi8IAvAAIAAC8gAgXhUIAAgpIAvAAIAAApg");
	this.shape_14.setTransform(100.5,-133.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("Ag7BoQgOgXAAg0QAAgzAOgYQAOgXAeAAQAOAAAIAGQAKAFAIALIAAAAIAAhPIAxAAIAAD5IgvAAIAAgUIAAAAQgIAOgKAEQgJAGgPAAQgeAAgOgXgAgUgQQgEAPAAAeQAAAeAEAQQAFAQAPAAQAQAAAFgQQAEgQAAgeQAAgegEgPQgFgQgQAAQgPAAgFAQg");
	this.shape_15.setTransform(87.075,-133);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgnBZQgPgIgGgOQgIgPgBgSIgCgjQAAgSADgSQADgSAHgNQAIgNAPgJQAPgHAXgBQAVAAAOAHQANAHAHAMQAIANADASQADARAAAWIAAAJIheAAIAAAQIAAAQIAEAOQADAGAFAEQAFADAFABQANAAAFgJQAFgJADgSIArAAQgCAhgQARQgPARgjAAQgZAAgPgJgAgKg+QgFAEgDAFIgEANIAAAMIAAAIIAwAAIgCgTQgBgJgCgFQgDgGgFgDQgEgDgIAAQgGAAgFADg");
	this.shape_16.setTransform(70.2,-130.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("ABEBhIAAiDQAAgMgEgHQgEgFgLAAQgLgBgHAIQgGAIgBAQIAAB8IgvAAIAAiDQAAgMgFgHQgDgFgLAAQgLgBgHAIQgHAIAAAQIAAB8IgwAAIAAi8IAuAAIAAATIABAAQAIgNAMgFQALgGAQAAQARAAAKAIQAMAIAEAPIAAAAQAGgQAMgHQAMgIASAAQAYAAALAOQALAQAAAbIAACIg");
	this.shape_17.setTransform(48.6,-130.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("ABFBhIAAiDQgBgMgEgHQgEgFgKAAQgMgBgHAIQgGAIgBAQIAAB8IgvAAIAAiDQAAgMgFgHQgDgFgLAAQgMgBgGAIQgHAIAAAQIAAB8IgxAAIAAi8IAvAAIAAATIABAAQAIgNAMgFQALgGAQAAQARAAAKAIQALAIAFAPIAAAAQAGgQANgHQALgIASAAQAYAAALAOQAMAQgBAbIAACIg");
	this.shape_18.setTransform(21.85,-130.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AgYB9IAAj5IAxAAIAAD5g");
	this.shape_19.setTransform(3.875,-133.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_Immediatelamination, new cjs.Rectangle(-59.9,-156.3,435.59999999999997,45.400000000000006), null);


(lib.txt_consistentQuality = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353535").s().p("AgWAbIAAg1IAtAAIAAA1g");
	this.shape.setTransform(318.4,-124.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag9B9IAAgkIANABQANgBAHgGQAFgIABgLIg1i7IAyAAIAbCBIABAAIAZiBIAwAAIguCuQgFAYgHAPQgFAOgIAIQgHAHgLADQgLADgRAAg");
	this.shape_1.setTransform(306.95,-128.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDB3QgJgBgEgGQgFgGgCgJQgCgJAAgPIAAhrIgZAAIAAghIAZAAIAAg2IAvAAIAAA2IAcAAIAAAhIgcAAIAABlQAAALAEAFQADAFAKAAIAGAAIAFgBIAAAhIgPABIgQAAQgOAAgIgCg");
	this.shape_2.setTransform(294.6,-133.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgXB+IAAi7IAvAAIAAC7gAgXhUIAAgqIAvAAIAAAqg");
	this.shape_3.setTransform(285.65,-134.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgXB9IAAj5IAvAAIAAD5g");
	this.shape_4.setTransform(277.75,-134.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgwBeQgJgFgFgHQgFgIgCgKQgDgJAAgJQAAgOADgKQADgJAFgHQAGgGAJgFIAWgIIAagGQALgEAEgEQAEgGAAgJQAAgKgFgHQgFgGgLAAQgLAAgGAHQgGAGAAALIAAAGIgrAAIAAgFQAAgQAFgLQAGgLAIgHQAJgHAMgDQAMgCAOAAQAVAAANADQANAFAIAIQAHAHADALQACAKAAANIAABiIACAVIAEAPIguAAIgDgJIgDgKIgBAAQgIAOgLAFQgKAEgRABQgNgBgJgEgAALAHIgLADQgNADgGAHQgHAIAAAMQAAALAEAIQAFAHAJAAIAKgBQAFgCAEgDQAFgEACgFQADgGAAgIIAAgkg");
	this.shape_5.setTransform(265.525,-131.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("Ag6BUQgNgMAAgcIAAiLIAxAAIAACBQAAAPAFAFQAEAGAMAAQAYAAAAgfIAAh8IAwAAIAAC7IguAAIAAgWIAAAAQgJAOgLAGQgLAGgQAAQgYAAgMgMg");
	this.shape_6.setTransform(249,-130.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AAZB/IAAhOIAAAAQgIALgKAFQgIAFgOAAQgeAAgOgXQgOgWAAg0QAAg0AOgYQAOgXAeAAQAPAAAJAGQAKAGAIANIAAAAIAAgUIAvAAIAAD4gAgUhJQgEAPAAAfQAAAeAEAPQAFAQAPAAQAQAAAFgQQAEgPAAgeQAAgfgEgPQgFgQgQAAQgPAAgFAQg");
	this.shape_7.setTransform(231.775,-128.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("AgwBgIAAi7IAuAAIAAAZIABAAQAGgNALgIQAKgJAPABIAEAAIAFAAIAAAuIgIgBIgIAAIgMACQgGACgGAEQgFAEgDAGQgCAHAAAKIAABvg");
	this.shape_8.setTransform(210.75,-131.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("AgjBdQgPgGgIgNQgJgMgCgSQgFgTAAgYQAAgYAFgTQAEgSAIgMQAJgNAOgGQAPgHATABQAWgBAOAGQAOAGAJANQAIAMADATQAFASAAAZQAAAYgFASQgDASgJANQgJAMgOAGQgOAHgVAAIgCAAQgUAAgNgGgAgNg8QgFAFgDAJQgDAJAAAMIgBAaIABAaQAAAMADAJQADAIAFAGQAFAEAIAAQAPAAAFgPQAGgQAAgiQAAgjgGgQQgFgPgPAAQgIAAgFAFg");
	this.shape_9.setTransform(196.3,-131.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgXB9IAAj5IAvAAIAAD5g");
	this.shape_10.setTransform(184.2,-134.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgjBdQgPgGgIgNQgJgMgCgSQgEgTgBgYQABgYAEgTQAEgSAIgMQAJgNAOgGQAPgHATABQAWgBAOAGQAOAGAJANQAIAMAEATQADASABAZQgBAYgDASQgFASgJANQgIAMgOAGQgOAHgVAAIgCAAQgUAAgNgGgAgNg8QgFAFgDAJQgCAJgBAMIgBAaIABAaQABAMACAJQADAIAFAGQAFAEAIAAQAPAAAFgPQAGgQAAgiQAAgjgGgQQgFgPgPAAQgIAAgFAFg");
	this.shape_11.setTransform(172.1,-131.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgfBeQgNgFgJgKQgJgMgFgTQgEgUAAgbQAAgdAGgTQAGgTAJgMQALgLANgEQAOgEAQAAQAigBARAUQARAUAAAhIguAAIgBgOIgEgMQgCgFgEgEQgEgDgHAAQgIAAgFAEQgGAFgCAHQgDAIgCAMIgBAcIABAdQACANADAIQACAIAFAEQAFAEAHgBQAMAAAGgKQAGgKAAgYIAuAAQAAAmgRATQgQAUgnAAQgRgBgOgEg");
	this.shape_12.setTransform(156.1,-131.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AgDB3QgJgBgFgGQgEgGgCgJQgCgJAAgPIAAhrIgZAAIAAghIAZAAIAAg2IAwAAIAAA2IAcAAIAAAhIgcAAIAABlQAAALADAFQADAFAKAAIAGAAIAGgBIAAAhIgQABIgQAAQgOAAgIgCg");
	this.shape_13.setTransform(135.5,-133.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAXBgIAAiAQAAgPgFgGQgFgFgLgBQgYAAAAAfIAAB8IgxAAIAAi7IAvAAIAAAWIAAAAQAJgOAMgGQAKgHARABQAWAAANAMQAMANAAAcIAACKg");
	this.shape_14.setTransform(122,-131.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgnBaQgPgJgGgPQgIgOgBgRIgCgjQAAgUADgRQACgRAIgOQAIgOAPgHQAOgJAYABQAVAAAOAGQANAHAIANQAHAMADARQADASAAAWIAAAKIheAAIAAAOIABARIADAOQAEAGAEAEQAEAEAGgBQAMAAAGgIQAGgJACgSIArAAQgCAhgQARQgPASgjAAQgZgBgPgIgAgKg9QgEADgEAGIgDALIgBAOIAAAHIAwAAIgCgTQgBgIgCgGQgDgGgEgDQgFgDgIAAQgGAAgFAEg");
	this.shape_15.setTransform(105.65,-131.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AgDB3QgJgBgFgGQgFgGgBgJQgCgJAAgPIAAhrIgYAAIAAghIAYAAIAAg2IAwAAIAAA2IAcAAIAAAhIgcAAIAABlQgBALAEAFQADAFALAAIAFAAIAGgBIAAAhIgQABIgQAAQgOAAgIgCg");
	this.shape_16.setTransform(92.95,-133.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AghBeQgOgEgIgHQgHgIgDgLQgEgLAAgOIAAgGIAsAAIAAAGQAAAMAGAIQAHAHAMAAQAKABAHgGQAGgFAAgMQAAgJgFgFQgFgEgHgEIghgMQgUgHgKgLQgKgNAAgUQAAgLAEgLQADgKAJgIQAIgHANgFQANgEASAAQAhAAAQANQAPAOAAAaIAAAIIgrAAQAAgPgFgHQgFgHgLAAQgIAAgHAFQgHAFAAALQAAAGAEAGQAFAFAMAEIAcAKQAXAIAJAMQAKAMAAAVQAAAPgGALQgFALgJAIQgJAHgNADQgNADgPABQgUAAgNgFg");
	this.shape_17.setTransform(80.475,-131.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("AgXB+IAAi7IAvAAIAAC7gAgXhUIAAgqIAvAAIAAAqg");
	this.shape_18.setTransform(69,-134.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AghBeQgOgEgIgHQgHgIgDgLQgEgLAAgOIAAgGIAsAAIAAAGQAAAMAGAIQAHAHAMAAQAKABAHgGQAGgFAAgMQAAgJgFgFQgFgEgHgEIghgMQgUgHgKgLQgKgNAAgUQAAgLAEgLQADgKAJgIQAIgHANgFQANgEASAAQAhAAAQANQAPAOAAAaIAAAIIgrAAQAAgPgFgHQgFgHgLAAQgIAAgHAFQgHAFAAALQAAAGAEAGQAFAFAMAEIAcAKQAXAIAJAMQAKAMAAAVQAAAPgGALQgFALgJAIQgJAHgNADQgNADgPABQgUAAgNgFg");
	this.shape_19.setTransform(57.575,-131.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#353535").s().p("AAXBgIAAiAQAAgPgFgGQgFgFgLgBQgYAAAAAfIAAB8IgxAAIAAi7IAvAAIAAAWIAAAAQAJgOAMgGQALgHAQABQAWAAANAMQAMANAAAcIAACKg");
	this.shape_20.setTransform(41.55,-131.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#353535").s().p("AgjBdQgOgGgJgNQgIgMgEgSQgDgTAAgYQAAgYADgTQAFgSAJgMQAIgNAOgGQAOgHAUABQAVgBAPAGQAPAGAIANQAIAMAEATQADASAAAZQAAAYgDASQgFASgIANQgJAMgOAGQgPAHgUAAIgCAAQgUAAgNgGgAgNg8QgFAFgDAJQgCAJgBAMIgBAaIABAaQABAMACAJQADAIAFAGQAFAEAIAAQAPAAAFgPQAGgQAAgiQAAgjgGgQQgFgPgPAAQgIAAgFAFg");
	this.shape_21.setTransform(24.9,-131.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AgqB4QgQgJgJgRQgJgRgDgYQgCgXAAgeQAAgbACgXQADgZAJgRQAJgRAQgKQASgKAaAAQAbAAAQAJQAQAJAIANQAHAOADAQIABAdIgzAAQABgcgHgLQgGgNgRAAQgJAAgGAFQgGAFgEAMQgDALgBASIgCAsQAAAcACASQACASAEAJQAEAKAGADQAHADAGABQAHgBAGgCQAFgCAFgHQAEgHACgNQADgMAAgUIAyAAQAAAVgDARQgDASgIAPQgJANgQAIQgQAHgZABQgaAAgSgKg");
	this.shape_22.setTransform(7.7,-134.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_consistentQuality, new cjs.Rectangle(-3.7,-157.3,407.9,45.400000000000006), null);


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
	this.shape.graphics.f("#353535").s().p("AgXAcIAAg3IAvAAIAAA3g");
	this.shape.setTransform(307.225,-123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("Ag/CAIAAglIAOABQANAAAGgHQAGgHABgMIg2jBIA0AAIAcCFIAAAAIAaiFIAxAAIguC0QgHAYgGAPQgGAPgJAIQgHAIgKADQgMACgRAAg");
	this.shape_1.setTransform(295.2,-126.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#353535").s().p("AgDB7QgKgCgEgGQgFgGgCgKQgBgJgBgPIAAhuIgZAAIAAgiIAZAAIAAg3IAxAAIAAA3IAdAAIAAAiIgdAAIAABoQAAALAEAGQADAEALAAIAFAAIAGgBIAAAjIgQAAIgRABQgOAAgIgCg");
	this.shape_2.setTransform(282.2,-132.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("AgYCCIAAjBIAxAAIAADBgAgYhWIAAgrIAxAAIAAArg");
	this.shape_3.setTransform(272.775,-133.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#353535").s().p("AgbBhIgyjBIA0AAIAbCKIAAAAIAbiKIAxAAIgxDBg");
	this.shape_4.setTransform(260.75,-129.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353535").s().p("AgYCCIAAjBIAxAAIAADBgAgYhWIAAgrIAxAAIAAArg");
	this.shape_5.setTransform(248.725,-133.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#353535").s().p("AgDB7QgKgCgEgGQgFgGgCgKQgBgJAAgPIAAhuIgaAAIAAgiIAaAAIAAg3IAwAAIAAA3IAdAAIAAAiIgdAAIAABoQAAALADAGQAEAEAKAAIAHAAIAFgBIAAAjIgQAAIgQABQgPAAgIgCg");
	this.shape_6.setTransform(239.4,-132.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#353535").s().p("AggBhQgNgFgJgLQgKgMgFgUQgEgTAAgeQAAgcAFgUQAHgUAKgLQALgMANgFQAPgEARAAQAiAAARAUQASAUAAAiIgwAAIAAgOIgEgMQgCgGgEgDQgFgEgHAAQgIAAgFAFQgHAEgCAIQgDAIgCAMIgBAdIABAfQACAMADAJQACAIAGAEQAFADAHAAQANAAAFgKQAHgLgBgYIAwAAQAAAmgRAUQgSAUgnAAQgSAAgOgEg");
	this.shape_7.setTransform(225.95,-129.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353535").s().p("Ag8BWQgNgMABgdIAAiPIAxAAIAACFQABAPAFAGQAEAGAMAAQAZAAAAggIAAiAIAxAAIAADBIgvAAIAAgXIgBAAQgIAOgMAHQgMAGgQAAQgYAAgNgNg");
	this.shape_8.setTransform(208.85,-129.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#353535").s().p("Ag8BrQgPgXAAg2QAAg2APgXQAOgYAfAAQAOAAAJAFQAJAHAIALIABAAIAAhRIAyAAIAAD/IgwAAIAAgUIgBAAQgIANgKAGQgJAFgPABQgfAAgOgYgAgUgRQgFAQAAAfQAAAgAFAPQAFAQAPABQAQgBAFgQQAFgPAAggQAAgfgFgQQgFgQgQAAQgPAAgFAQg");
	this.shape_9.setTransform(190.875,-132.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#353535").s().p("AgkBgQgPgGgJgNQgIgNgEgTQgDgTAAgaQAAgXADgUQAFgTAIgMQAJgNAPgHQAPgGAUAAQAWgBAPAGQAOAHAKANQAIANADATQAEATABAYQAAAZgFATQgEAUgJAMQgJANgOAGQgPAGgVAAIgCAAQgVAAgNgFgAgOg+QgFAFgCAKQgEAIAAANIgBAaIABAcQAAAMAEAJQACAJAFAFQAGAFAIAAQAPAAAFgPQAHgQgBglQABgjgHgQQgFgQgPAAQgIAAgGAFg");
	this.shape_10.setTransform(173.75,-129.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#353535").s().p("AgyBjIAAjAIAwAAIAAAaIABAAQAGgPALgIQAKgIAQAAIAEAAIAFAAIAAAwIgIgBIgHAAIgOACQgGACgGAEQgEAEgEAHQgCAGAAAKIAABzg");
	this.shape_11.setTransform(160.15,-130.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AhLCCIAAj+IAwAAIAAAUIABAAQAIgOAKgGQAJgFAPAAQAfAAAOAYQAPAXAAA2QAAA1gPAYQgOAXgfAAQgOAAgJgFQgJgFgIgMIgBAAIAABQgAgUhLQgFAQAAAfQAAAfAFAQQAFAQAPAAQAQAAAFgQQAFgQAAgfQAAgfgFgQQgFgQgQAAQgPAAgFAQg");
	this.shape_12.setTransform(144.875,-127.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("Ag2B2QgRgNAAgZIAwAAQgBAJAIAGIAIAEIAIABQAPAAAGgKQAGgJAAgPIAAgZIgBAAQgHALgLAGQgKAHgMAAQgdAAgPgXQgPgWgBg0IACgjQACgRAHgPQAGgOAMgJQAMgJAVAAQAKAAAKAGQALAGAHAPIABAAIAAgWIAwAAIAAC3QgBAmgSASQgTATgqAAQgfAAgSgOgAgLhZQgFADgDAJQgDAIgBANIgBAhIABATQABAIADAHQADAHAEAEQAFAEAHAAQAIAAAFgEQAGgEADgHQADgHABgKIABgWQAAgjgFgPQgGgPgPAAQgHAAgFAEg");
	this.shape_13.setTransform(118.25,-126.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#353535").s().p("AAXBjIAAiEQAAgPgEgGQgGgGgKAAQgZAAAAAgIAAB/IgzAAIAAjAIAwAAIAAAWIABAAQAIgOAMgHQAMgGAQAAQAYAAAMAMQAOANAAAeIAACOg");
	this.shape_14.setTransform(100.8,-130.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgYCCIAAjBIAxAAIAADBgAgYhWIAAgrIAxAAIAAArg");
	this.shape_15.setTransform(87.775,-133.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#353535").s().p("AhDBhIAAgmIBNhzIhJAAIAAgoICDAAIAAAmIhMByIBMAAIAAApg");
	this.shape_16.setTransform(76.05,-129.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AgxBhQgJgFgGgIQgFgIgDgKQgCgJAAgKQAAgOADgKQADgKAGgHQAGgGAJgEQAJgFANgEIAbgHQALgDAEgFQAFgFAAgKQAAgLgFgGQgGgHgLAAQgMAAgGAHQgFAHAAAMIAAAFIgtAAIAAgFQAAgRAFgLQAGgLAJgHQAJgHANgDQAMgDAOAAQAVAAAOAEQAOAEAHAIQAIAIACALQADALAAANIAABlIABAVIAFAQIgvAAIgEgKIgCgKIgBAAQgJAPgLAFQgKAEgSAAQgNAAgJgEgAALAHIgLADQgOADgGAIQgHAIAAANQAAALAFAIQAEAHAKAAIAKgBQAFgCAEgDQAFgEADgGQADgGAAgHIAAgng");
	this.shape_17.setTransform(59.875,-129.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#353535").s().p("ABGBjIAAiGQAAgMgFgHQgEgGgLAAQgLAAgIAIQgGAIAAARIAAB+IgxAAIAAiGQAAgMgFgHQgEgGgKAAQgMAAgHAIQgHAIAAARIAAB+IgyAAIAAjAIAwAAIAAATIABAAQAIgNAMgGQAMgFAQAAQARAAALAIQAMAHAEAQIAAAAQAHgQAMgIQANgHASAAQAZAAALAOQAMAQAAAbIAACMg");
	this.shape_18.setTransform(38,-130.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#353535").s().p("AAuCAIgLg2IhEAAIgMA2Ig2AAIBEj/IA/AAIBED/gAAaAgIgZhzIgBAAIgYBzIAyAAg");
	this.shape_19.setTransform(14.6,-133.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AmazingProductivity, new cjs.Rectangle(-41.2,-156.8,398.4,46.60000000000001), null);


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
	this.shape.setTransform(-12.9317,21.9929,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SureColor_lockup, new cjs.Rectangle(-116,-6.4,206.2,56.9), null);


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


(lib.image_03_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_03();
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_03_1, new cjs.Rectangle(-179.5,-72,359,144), null);


(lib.image_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.image_02();
	this.instance.setTransform(-179.5,-72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_02_1, new cjs.Rectangle(-179.5,-72,359,144), null);


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
	this.instance.setTransform(-70,-28,0.8092,0.8092);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_logo, new cjs.Rectangle(-70,-28,106,38.9), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(84).to({_off:true},49).wait(198));

	// Gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],0.3,-8.6,0.3,8.6).s().p("AtlBWIAAirIbLAAIAACrg");
	this.shape.setTransform(-15,18.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(8).to({_off:false},0).wait(150).to({_off:true},1).wait(22).to({_off:false},0).wait(12).to({_off:true},1).wait(146));

	// image_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_9 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_159 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_182 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");
	var mask_graphics_194 = new cjs.Graphics().p("AukFgIAAq/IdJAAIAAK/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_9,x:-14.4,y:45.375}).wait(150).to({graphics:mask_graphics_159,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_graphics_182,x:-14.4,y:45.375}).wait(12).to({graphics:mask_graphics_194,x:-14.4,y:45.375}).wait(1).to({graphics:null,x:0,y:0}).wait(146));

	// image_03
	this.instance_1 = new lib.image_03_1();
	this.instance_1.setTransform(-100.6,-59.15,0.4808,0.4808,0,0,0,-179.7,-71.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({y:13.05},43,cjs.Ease.quadInOut).wait(19).to({_off:true},1).wait(22).to({_off:false},0).wait(12).to({_off:true},1).wait(146));

	// image_02
	this.instance_2 = new lib.image_02_1();
	this.instance_2.setTransform(-100.65,-57.3,0.48,0.48,0,0,0,-179.9,-71.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({_off:false},0).to({y:10.3},43,cjs.Ease.quadInOut).wait(2).to({regX:0,regY:0,x:-14.3003,y:44.8485},0).wait(1).to({x:-14.3008,y:45.1041},0).wait(1).to({x:-14.3016,y:45.4727},0).wait(1).to({x:-14.3026,y:45.9606},0).wait(1).to({x:-14.3039,y:46.5743},0).wait(1).to({x:-14.3054,y:47.3201},0).wait(1).to({x:-14.3072,y:48.2046},0).wait(1).to({x:-14.3093,y:49.234},0).wait(1).to({x:-14.3118,y:50.4141},0).wait(1).to({x:-14.3145,y:51.7499},0).wait(1).to({x:-14.3176,y:53.2452},0).wait(1).to({x:-14.321,y:54.9021},0).wait(1).to({x:-14.3248,y:56.7207},0).wait(1).to({x:-14.3288,y:58.6977},0).wait(1).to({x:-14.3332,y:60.8269},0).wait(1).to({x:-14.3379,y:63.0975},0).wait(1).to({x:-14.3428,y:65.4944},0).wait(1).to({regX:-180,regY:-71.5,scaleX:0.4799,scaleY:0.4799,x:-100.7,y:33.65},0).wait(1).to({regX:0,regY:0,x:-14.3,y:70.7458,alpha:0.9098},0).wait(1).to({y:73.601,alpha:0.8177},0).wait(1).to({y:76.4834,alpha:0.7247},0).wait(1).to({y:79.3594,alpha:0.632},0).wait(1).to({y:82.1964,alpha:0.5404},0).wait(1).to({y:84.9643,alpha:0.4512},0).wait(1).to({y:87.6365,alpha:0.365},0).wait(1).to({y:90.1907,alpha:0.2826},0).wait(1).to({y:92.6096,alpha:0.2045},0).wait(1).to({y:94.8807,alpha:0.1313},0).wait(1).to({y:96.9957,alpha:0.063},0).wait(1).to({regX:-180,regY:-71.5,x:-100.7,y:64.65,alpha:0},0).wait(1).to({regX:0,regY:0,scaleX:0.48,scaleY:0.48,x:-14.2929,y:100.7329},0).wait(1).to({x:-14.2864,y:102.3556},0).wait(1).to({x:-14.2806,y:103.8209},0).wait(1).to({x:-14.2754,y:105.1332},0).wait(1).to({x:-14.2707,y:106.2975},0).wait(1).to({x:-14.2667,y:107.3196},0).wait(1).to({x:-14.2631,y:108.2056},0).wait(1).to({x:-14.2601,y:108.9615},0).wait(1).to({x:-14.2576,y:109.5936},0).wait(1).to({x:-14.2556,y:110.108},0).wait(1).to({x:-14.254,y:110.5105},0).wait(1).to({x:-14.2528,y:110.8067},0).wait(1).to({regX:-179.9,regY:-71.7,x:-100.65,y:76.65},0).wait(19).to({_off:true},1).wait(22).to({_off:false},0).wait(12).to({_off:true},1).wait(146));

	// image_01
	this.instance_3 = new lib.image_01_1();
	this.instance_3.setTransform(-14.25,-24.9,0.4802,0.4802);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({y:46.3},42,cjs.Ease.quadInOut).wait(2).to({x:-14.2503,y:46.452},0).wait(1).to({x:-14.2508,y:46.7136},0).wait(1).to({x:-14.2516,y:47.0909},0).wait(1).to({x:-14.2526,y:47.5904},0).wait(1).to({x:-14.2539,y:48.2185},0).wait(1).to({x:-14.2554,y:48.982},0).wait(1).to({x:-14.2572,y:49.8874},0).wait(1).to({x:-14.2593,y:50.9411},0).wait(1).to({x:-14.2618,y:52.149},0).wait(1).to({x:-14.2645,y:53.5163},0).wait(1).to({x:-14.2676,y:55.0469},0).wait(1).to({x:-14.271,y:56.743},0).wait(1).to({x:-14.2748,y:58.6044},0).wait(1).to({x:-14.2789,y:60.6282},0).wait(1).to({x:-14.2832,y:62.8076},0).wait(1).to({x:-14.2879,y:65.1318},0).wait(1).to({x:-14.2929,y:67.5853},0).wait(1).to({regX:-0.1,regY:0.1,x:-14.3,y:70.15},0).wait(1).to({regX:0,regY:0,x:-14.2452,y:72.9588,alpha:0.9037},0).wait(1).to({x:-14.2403,y:75.8783,alpha:0.8054},0).wait(1).to({x:-14.2353,y:78.8256,alpha:0.7062},0).wait(1).to({x:-14.2304,y:81.7664,alpha:0.6072},0).wait(1).to({x:-14.2255,y:84.6674,alpha:0.5095},0).wait(1).to({x:-14.2207,y:87.4976,alpha:0.4142},0).wait(1).to({x:-14.2161,y:90.2299,alpha:0.3222},0).wait(1).to({x:-14.2117,y:92.8417,alpha:0.2343},0).wait(1).to({x:-14.2076,y:95.3151,alpha:0.151},0).wait(1).to({x:-14.2036,y:97.6374,alpha:0.0728},0).wait(1).to({regX:-0.1,regY:0.1,x:-14.25,y:99.85,alpha:0},0).wait(1).to({regX:0,regY:0,x:-14.2003,y:101.7935},0).wait(1).to({x:-14.2005,y:103.6218},0).wait(1).to({x:-14.2008,y:105.2857},0).wait(1).to({x:-14.201,y:106.7883},0).wait(1).to({x:-14.2011,y:108.134},0).wait(1).to({x:-14.2013,y:109.3279},0).wait(1).to({x:-14.2015,y:110.376},0).wait(1).to({x:-14.2016,y:111.2844},0).wait(1).to({x:-14.2017,y:112.0596},0).wait(1).to({x:-14.2018,y:112.7078},0).wait(1).to({x:-14.2019,y:113.2352},0).wait(1).to({y:113.6479},0).wait(1).to({y:113.9517},0).wait(1).to({x:-14.25,y:114.2},0).wait(63).to({_off:true},1).wait(22).to({_off:false},0).wait(12).to({_off:true},1).wait(146));

	// printer
	this.instance_4 = new lib.Printer();
	this.instance_4.setTransform(-160,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(150).to({_off:true},1).wait(22).to({_off:false},0).wait(12).to({_off:true},1).wait(146));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-87,320,174);


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

	// top_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aq5L6IAA3yIV0AAIAAXyg");
	var mask_graphics_10 = new cjs.Graphics().p("Aq5L6IAA3yIV0AAIAAXyg");
	var mask_graphics_84 = new cjs.Graphics().p("Aq5L6IAA3yIV0AAIAAXyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:34.55,y:-161.85}).wait(1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_10,x:34.55,y:-161.85}).wait(74).to({graphics:mask_graphics_84,x:34.55,y:-161.85}).wait(1).to({graphics:null,x:0,y:0}).wait(275));

	// image_strip_01
	this.instance = new lib.image_strip_01();
	this.instance.setTransform(33.3,-322.9,0.545,0.545,0,0,0,0.3,0.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:-159.7},14,cjs.Ease.quadOut).wait(60).to({_off:true},1).wait(275));

	// image_strip_02
	this.instance_1 = new lib.image_strip_02();
	this.instance_1.setTransform(35,-322.9,0.545,0.545,0,0,0,0.4,0.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({y:-159.7},14,cjs.Ease.quadOut).wait(46).to({_off:true},1).wait(275));

	// image_strip_03
	this.instance_2 = new lib.image_strip_03();
	this.instance_2.setTransform(35.2,-322.9,0.545,0.545,0,0,0,0.3,0.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({y:-159.7},14,cjs.Ease.quadOut).wait(32).to({_off:true},1).wait(275));

	// Layer_1
	this.instance_3 = new lib.hallway();
	this.instance_3.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(9).to({_off:false},0).wait(74).to({_off:true},1).wait(275));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,370,276);


// stage content:
(lib.Epson_RDrive_728x90_V1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// epson_logo
	this.instance = new lib.epson_logo();
	this.instance.setTransform(76.5,41);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(155).to({alpha:0},11).wait(153).to({alpha:1},6).wait(26));

	// SureColor_lockup
	this.instance_1 = new lib.SureColor_lockup();
	this.instance_1.setTransform(251.05,23.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(328).to({_off:false},0).to({alpha:1},11).wait(21));

	// printer_rolls
	this.instance_2 = new lib.printer_rolls();
	this.instance_2.setTransform(533.65,47.5,0.5992,0.5992,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(328).to({_off:false},0).to({x:523.65,alpha:1},11,cjs.Ease.quadOut).wait(21));

	// printer_mc
	this.instance_3 = new lib.printer_mc("single",57);
	this.instance_3.setTransform(430.65,44.65,0.328,0.328,0,0,0,0.5,0.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:0.4312,scaleY:0.4312,y:48.65,alpha:1},11,cjs.Ease.quadOut).wait(21));

	// ctaBtn_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_347 = new cjs.Graphics().p("ApeDQQgwAAAAgxIAAAAIAAk9QAAgxAwAAIAAAAIS9AAQAwAAAAAxIAAAAIAAE9QAAAxgwAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(347).to({graphics:mask_graphics_347,x:634.4703,y:44.2701}).wait(13));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.537,1],-15,-11.4,15,11.5).s().p("AoqGdIMpwfIEsDlIspQgg");
	this.shape_1.setTransform(564.975,-0.975);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(347).to({_off:false},0).wait(1).to({x:567.075,y:0.075},0).wait(1).to({x:573.425,y:3.125},0).wait(1).to({x:583.975,y:8.275},0).wait(1).to({x:598.775,y:15.475},0).wait(1).to({x:617.775,y:24.725},0).wait(1).to({x:641.025,y:36.025},0).wait(1).to({x:664.225,y:47.325},0).wait(1).to({x:683.225,y:56.575},0).wait(1).to({x:698.025,y:63.775},0).wait(1).to({x:708.575,y:68.925},0).wait(1).to({x:714.925,y:71.975},0).wait(1).to({x:717.025,y:73.025},0).wait(1));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn();
	this.instance_4.setTransform(634.45,44.25,0.8058,0.8058);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(339).to({_off:false},0).to({alpha:1},10).wait(11));

	// BG
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_2.setTransform(364,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.11)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_3.setTransform(364,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.224)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_4.setTransform(364,45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.333)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_5.setTransform(364,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.443)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_6.setTransform(364,45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.557)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_7.setTransform(364,45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.667)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_8.setTransform(364,45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.776)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_9.setTransform(364,45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.89)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_10.setTransform(364,45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_11.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},319).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(32));

	// txt_onARoll
	this.instance_5 = new lib.txt_inchRoll();
	this.instance_5.setTransform(146.05,509.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(271).to({_off:false},0).to({alpha:1},11).wait(37).to({alpha:0},9).wait(32));

	// txt_onARoll
	this.instance_6 = new lib.txt_onARoll();
	this.instance_6.setTransform(144.05,528.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(175).to({_off:false},0).to({alpha:1},10).wait(75).to({alpha:0},11).wait(89));

	// hallway_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_175 = new cjs.Graphics().p("A88HCIAAuDMA55AAAIAAODg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(175).to({graphics:mask_1_graphics_175,x:529.35,y:45.025}).wait(185));

	// hallway_mc
	this.instance_7 = new lib.hallway_mc("single",0);
	this.instance_7.setTransform(547.4,42.15,1.4536,1.4536,0,0,0,42,-162.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(175).to({_off:false},0).to({scaleX:1.3644,scaleY:1.3644,x:545,y:49.75,alpha:1,mode:"synched",startPosition:10,loop:false},10).to({scaleX:0.9902,scaleY:0.9902,x:534.85,y:81.55,mode:"single",startPosition:52},75).wait(100));

	// txt_AmazingProductivity
	this.instance_8 = new lib.txt_AmazingProductivity();
	this.instance_8.setTransform(153.3,188.55);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(116).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(38).to({alpha:0},11,cjs.Ease.quadOut).to({_off:true},1).wait(185));

	// txt_Immediatelamination
	this.instance_9 = new lib.txt_Immediatelamination();
	this.instance_9.setTransform(153.3,190.55);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(37).to({alpha:0},10).to({_off:true},1).wait(244));

	// txt_consistentQuality
	this.instance_10 = new lib.txt_consistentQuality();
	this.instance_10.setTransform(153.3,186.55);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:174.55,alpha:1},9,cjs.Ease.quadOut).wait(39).to({alpha:0},10).to({_off:true},1).wait(301));

	// printer_mc
	this.instance_11 = new lib.printer_mc("single",0);
	this.instance_11.setTransform(585.55,36.95,0.4404,0.4404,0,0,0,0.5,0.1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:0.4,scaleX:0.5667,scaleY:0.5667,y:42.95,alpha:1,mode:"synched",startPosition:9,loop:false},9,cjs.Ease.quadOut).wait(151).to({startPosition:182},0).to({x:820.55,alpha:0,mode:"single",startPosition:194},12,cjs.Ease.quadIn).to({_off:true},1).wait(187));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(306.6,38.6,604.4,60.4);
// library properties:
lib.properties = {
	id: 'A4BDA2797E5D4A2296AB1960FDA0E060',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Epson_Logo.png", id:"Epson_Logo"},
		{src:"hallway.jpg", id:"hallway"},
		{src:"image_01.jpg", id:"image_01"},
		{src:"image_02.jpg", id:"image_02"},
		{src:"image_03.jpg", id:"image_03"},
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