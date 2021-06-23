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



(lib.backpack = function() {
	this.initialize(img.backpack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ecoTank = function() {
	this.initialize(img.ecoTank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,44);


(lib.inkBottles = function() {
	this.initialize(img.inkBottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,112);


(lib.kidSchool = function() {
	this.initialize(img.kidSchool);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,190);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,139);


(lib.paperStack = function() {
	this.initialize(img.paperStack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,184);


(lib.printer = function() {
	this.initialize(img.printer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,130);


(lib.shaq_img = function() {
	this.initialize(img.shaq_img);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,238);// helper functions:

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


(lib.whiteBar = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("A6jFeIAAq7MA1HAAAIAAK7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.whiteBar, new cjs.Rectangle(-170,-35,340,70), null);


(lib.txt_saveEcoTank = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#123293").s().p("AgHBWIAAgQQgZgCgMgMQgOgMgBgTIAlAAQABAGAEAFQACAEAIADIAAgcQgMgCgKgDQgJgDgGgFQgGgFgDgHQgCgHAAgKQAAgJADgHQADgHAGgGQAHgGAJgDQAJgEALAAIAAgQIARAAIAAAQQAWACAMAJQAMAKACAUIgkAAQgBgFgCgDQgCgEgHgBIAAAZIAUAEQAKADAGAFQAGAEAEAHQADAHAAALQAAAIgCAIQgDAIgGAGQgGAGgKAEQgJAEgNABIAAAQgAAKArQANgDAAgLQAAgEgDgDQgCgDgIgCgAgTgeQAAAFACADQADACAHACIAAgYQgMACAAAKg");
	this.shape.setTransform(21,-9.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBSQgOgFgKgLQgKgLgFgPQgGgRAAgTIAAgHQAAgUAGgQQAGgPAKgLQALgLAOgGQAOgFAQgBQARAAAOAGQAOAFALALQAKALAGAPQAFAPABAWIAAAFQAAAUgGAQQgFARgKAKQgLAMgOAFQgPAGgRAAQgSABgOgHgAgfgDIAAAHQAAAxAgAAQAQAAAIgMQAHgMAAgaIAAgGQAAgZgHgMQgIgNgRAAQgfAAAAAyg");
	this.shape_1.setTransform(87.925,-9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggBSQgOgFgKgLQgKgLgFgPQgGgRAAgTIAAgHQAAgUAGgQQAGgPAKgLQALgLAOgGQAOgFAQgBQARAAAOAGQAOAFALALQAKALAGAPQAFAPABAWIAAAFQAAAUgGAQQgFARgKAKQgLAMgOAFQgPAGgRAAQgSABgOgHgAgfgDIAAAHQAAAxAgAAQAQAAAIgMQAHgMAAgaIAAgGQAAgZgHgMQgIgNgRAAQgfAAAAAyg");
	this.shape_2.setTransform(71.825,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAQQgGgGgBgKQAAgJAHgGQAGgHAKAAQAKAAAHAHQAHAGAAAJQAAAKgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_3.setTransform(60.875,-2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggBSQgOgFgKgLQgKgLgFgPQgGgRAAgTIAAgHQAAgUAGgQQAGgPAKgLQALgLAOgGQAOgFAQgBQARAAAOAGQAOAFALALQAKALAGAPQAFAPABAWIAAAFQAAAUgGAQQgFARgKAKQgLAMgOAFQgPAGgRAAQgSABgOgHgAgfgDIAAAHQAAAxAgAAQAQAAAIgMQAHgMAAgaIAAgGQAAgZgHgMQgIgNgRAAQgfAAAAAyg");
	this.shape_4.setTransform(49.925,-9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdBTQgMgEgIgIQgIgHgEgKQgEgLgBgMIApAAQACAKAFAGQAFAGAMAAQALAAAGgIQAGgHAAgMQgBgMgFgHQgHgHgLAAQgJAAgGADQgFAEgEAFIgjAAIAGhiIBwAAIAAAhIhOAAIgCAoIAGgHIAIgFIAKgEQAGgBAIAAQAMAAAJAEQAJADAHAIQAIAHADAKQAEALAAAOQAAAOgFALQgEALgJAIQgIAIgOAEQgMAEgPAAQgRAAgMgEg");
	this.shape_5.setTransform(34.9,-9.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AAAAJIgHARIgOgKIAMgNIgRgCIAFgQIAQAIIgEgSIASAAIgDASIAQgIIAEAQIgQACIAMANIgOAKg");
	this.shape_6.setTransform(97.55,6.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("AgQAQQgGgGgBgKQAAgIAHgHQAGgHAKAAQAKAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_7.setTransform(98.075,20.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#123293").s().p("AAQBYIgkg4IAAA4IgoAAIAAivIAoAAIAABlIAjgyIAqAAIgrA3IAvBFg");
	this.shape_8.setTransform(89.525,13.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#123293").s().p("AAVBAIAAhIQAAgMgEgFQgFgGgKAAQgJAAgHAGQgGAGAAANIAABGIgoAAIAAh8IAoAAIAAAUQAEgKALgGQAJgHAQAAQAJAAAHADQAIACAGAGQAFAGADAJQADAJAAAMIAABQg");
	this.shape_9.setTransform(75.875,16.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#123293").s().p("AggA/QgIgCgGgEQgFgEgEgHQgDgHAAgKQAAgLAEgHQAFgHAIgEQAIgEAKgDIAXgEQALgCAEgDQAFgEAAgFQAAgGgEgDQgEgDgKAAQgIAAgEAEQgFAEgBAHIglAAQAAgLAFgIQAFgIAIgFQAHgGAKgCQALgDALAAQANAAAKADQAKACAHAGQAHAFAEAJQAEAJAAALIAABTIgmAAIAAgPQgFAHgJAFQgHAFgQABQgIAAgIgDgAANAHIgLADQgJACgGAEQgGADAAAHQAAAGAEADQAEADAIABQAJAAAHgGQAHgFAAgJIAAgQg");
	this.shape_10.setTransform(62.325,16.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgWBWIAAiIIgtAAIAAgjICHAAIAAAjIguAAIAACIg");
	this.shape_11.setTransform(49.6,13.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgaA9QgMgEgJgIQgKgIgFgMQgEgMgBgPIAAgCQAAgPAFgLQAFgMAKgJQAJgJAMgEQAMgFAOAAQAOAAANAEQAMAFAJAIQAJAJAFAMQAFALABAPIAAABQAAAQgFALQgGAMgJAJQgJAJgMAEQgMAEgPABQgOAAgMgFgAgTgaQgHAJAAAQIAAABQAAARAHAKQAHAJAMAAQANAAAHgJQAHgKAAgQIAAgBQAAgRgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_12.setTransform(35.925,16.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AgXA+QgMgFgJgIQgJgIgEgMQgFgMgBgPIAAgCQABgPAFgMQAFgMAIgJQAJgIANgEQAMgFANAAQAKAAALADQALACAIAGQAIAGAGAKQAFAKABANIgmAAQgBgJgGgFQgFgFgJAAQgMAAgHAJQgGAIgBARIAAABQAAARAHAJQAHAJAMAAQAKAAAGgFQAHgGABgLIAjAAQAAAMgEAJQgEAJgIAHQgIAHgMAEQgLADgOABQgNAAgMgEg");
	this.shape_13.setTransform(22.4,16.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("Ag7BWIAAirIBzAAIAAAjIhGAAIAAAiIA4AAIAAAfIg4AAIAAAkIBKAAIAAAjg");
	this.shape_14.setTransform(9.6,13.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVBAIAAhIQAAgMgEgFQgFgGgKAAQgJAAgHAGQgGAGAAANIAABGIgoAAIAAh8IAoAAIAAAUQAEgKALgGQAJgHAQAAQAJAAAHADQAIACAGAGQAFAGADAJQADAJAAAMIAABQg");
	this.shape_15.setTransform(-8.075,16.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaA9QgMgEgJgIQgKgIgFgMQgEgMgBgPIAAgCQAAgPAFgLQAFgMAKgJQAJgJAMgEQAMgFAOAAQAOAAANAEQAMAFAJAIQAJAJAFAMQAFALABAPIAAABQAAAQgFALQgGAMgJAJQgJAJgMAEQgMAEgPABQgOAAgMgFgAgTgaQgHAJAAAQIAAABQAAARAHAKQAHAJAMAAQANAAAHgJQAHgKAAgQIAAgBQAAgRgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_16.setTransform(-21.925,16.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoA3QgOgLgBgVIAlAAQABAIAEADQAEAEAKAAQAIAAAEgCQAEgDAAgGQABgFgGgDQgFgDgNgCQgMgBgJgDQgJgDgGgFQgGgDgCgHQgDgHAAgKQAAgKAEgHQAEgIAHgFQAIgFAJgCQAJgCALgBQALAAAJACQAJACAHAFQAHAFAFAHQAEAIABALIgkAAQgBgHgEgDQgEgDgIAAQgHAAgEADQgEADAAAFQAAAFAFACQAEACAMACQANACAKACQAJADAGAFQAHAEACAGQAEAHAAAKQAAALgEAIQgEAIgHAFQgHAGgLACQgKACgMABQgaAAgPgLg");
	this.shape_17.setTransform(-34.65,16.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhBBVIAAimIAnAAIAAATQAGgJAKgHQAKgGANAAQALAAAKAEQAKAEAHAIQAHAJAEALQAEAMAAAQIAAACQAAAQgEALQgDAMgIAJQgHAIgKAEQgKAEgMAAQgNAAgKgGQgKgGgFgJIAAA8gAgTguQgIAJAAARIAAACQAAARAIAIQAGAIANAAQAMAAAHgIQAHgIAAgRIAAgCQAAgRgIgJQgGgIgMAAQgMAAgHAIg");
	this.shape_18.setTransform(-47.2,18.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BWIAAirIBzAAIAAAjIhGAAIAAAiIA4AAIAAAfIg4AAIAAAkIBKAAIAAAjg");
	this.shape_19.setTransform(-60.85,13.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAVBAIAAhIQAAgMgEgFQgFgGgKAAQgJAAgHAGQgGAGAAANIAABGIgoAAIAAh8IAoAAIAAAUQAEgKALgGQAJgHAQAAQAJAAAHADQAIACAGAGQAFAGADAJQADAJAAAMIAABQg");
	this.shape_20.setTransform(-78.525,16.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaA9QgMgEgJgIQgKgIgFgMQgEgMgBgPIAAgCQAAgPAFgLQAFgMAKgJQAJgJAMgEQAMgFAOAAQAOAAANAEQAMAFAJAIQAJAJAFAMQAFALABAPIAAABQAAAQgFALQgGAMgJAJQgJAJgMAEQgMAEgPABQgOAAgMgFgAgTgaQgHAJAAAQIAAABQAAARAHAKQAHAJAMAAQANAAAHgJQAHgKAAgQIAAgBQAAgRgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_21.setTransform(-92.375,16.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgaA9QgMgEgJgIQgKgIgFgMQgEgMgBgPIAAgCQAAgPAFgLQAFgMAKgJQAJgJAMgEQAMgFAOAAQAOAAANAEQAMAFAJAIQAJAJAFAMQAFALABAPIAAABQAAAQgFALQgGAMgJAJQgJAJgMAEQgMAEgPABQgOAAgMgFgAgTgaQgHAJAAAQIAAABQAAARAHAKQAHAJAMAAQANAAAHgJQAHgKAAgQIAAgBQAAgRgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_22.setTransform(4.575,-6.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgNBDQgLgKAAgVIAAg6IgPAAIAAgcIAPAAIAAgaIAnAAIAAAaIAZAAIAAAcIgZAAIAAA2QAAAOANAAIAHgBIAGgBIAAAeIgKACIgOABQgTAAgLgKg");
	this.shape_23.setTransform(-6.7,-7.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhBBVIAAimIAnAAIAAATQAGgJAKgHQAKgGANAAQALAAAKAEQAKAEAHAIQAHAJAEALQAEAMABAQIAAACQgBAQgEALQgDAMgIAJQgHAIgKAEQgKAEgLAAQgNAAgLgGQgKgGgFgJIAAA8gAgTguQgIAJAAARIAAACQAAARAIAIQAGAIANAAQAMAAAHgIQAHgIAAgRIAAgCQAAgRgIgJQgHgIgLAAQgNAAgGAIg");
	this.shape_24.setTransform(-21.45,-4.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjA9QgHgDgGgFQgFgGgDgJQgDgIgBgNIAAhQIAoAAIAABKQAAAXATAAQAKAAAGgGQAHgGAAgOIAAhHIAnAAIAAB8IgnAAIAAgTQgGAJgJAHQgJAGgQAAQgJAAgIgDg");
	this.shape_25.setTransform(-35.85,-6.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#123293").s().p("AgXA9QgNgEgJgIQgIgIgFgMQgGgMAAgPIAAgCQAAgPAGgLQAFgMAIgJQAKgJAMgEQAMgFANAAQAMAAALAEQAMADAJAIQAJAIAEAMQAFANABAQIAAAKIhYAAQABAOAHAHQAHAIAMAAQALAAAGgFQAFgEABgHIAmAAQgEAVgPALQgQAMgbAAQgOAAgMgFgAAagNQgBgZgXAAQgJAAgHAGQgGAHgCAMIAwAAIAAAAg");
	this.shape_26.setTransform(-53.2,-6.775);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#123293").s().p("AgUA/Igvh9IAqAAIAcBUIAbhUIAmAAIguB9g");
	this.shape_27.setTransform(-66.35,-6.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#123293").s().p("AggA/QgIgCgGgEQgFgEgEgHQgDgHAAgKQAAgLAEgHQAFgHAIgEQAIgEAKgDIAXgEQALgCAEgDQAFgEAAgFQAAgGgEgDQgEgDgKAAQgIAAgEAEQgFAEgBAHIglAAQAAgLAFgIQAFgIAIgFQAHgGAKgCQALgDALAAQANAAAKADQAKACAHAGQAHAFAEAJQAEAJAAALIAABTIgmAAIAAgPQgFAHgJAFQgHAFgQABQgIAAgIgDgAANAHIgLADQgJACgGAEQgGADAAAHQAAAGAEADQAEADAIABQAJAAAHgGQAHgFAAgJIAAgQg");
	this.shape_28.setTransform(-79.475,-6.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#123293").s().p("AgyBJQgSgOgBgcIArAAIACAJQABAFAEADQADAEAGACQAFACAIgBQALAAAHgEQAGgGAAgJQAAgEgBgDQgCgDgDgCQgEgDgFgBIgNgCQgSgDgMgDQgMgEgHgHQgIgEgDgKQgEgJAAgNQAAgLAFgKQAEgKAJgGQAIgIAMgDQAMgFAPAAQAeABAQANQARANADAaIgqAAQgCgKgGgFQgFgFgLAAQgLAAgGAEQgFAGAAAHIABAGQABAEADACIAJADIAOADQAQACAMADQAMAEAIAGQAIAFAEAJQAEAJAAAOQAAAMgEAKQgFAKgIAIQgJAIgNAEQgMAEgQABQgjgBgSgPg");
	this.shape_29.setTransform(-92.875,-9.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_saveEcoTank, new cjs.Rectangle(-102.7,-29.9,205.4,59.9), null);


(lib.txt_homework = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#123293").s().p("AgNAOQgGgGABgIQAAgHAEgGQAGgFAIAAQAJAAAFAFQAFAGAAAHQAAAIgFAGQgFAFgJAAQgIAAgFgFg");
	this.shape.setTransform(61.6,18.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANBJIgdguIAAAuIgiAAIAAiRIAiAAIAABTIAdgpIAjAAIgkAuIAnA5g");
	this.shape_1.setTransform(54.375,13.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghA1IAAhnIAhAAIAAAUQAFgMAIgFQAJgFAMAAIAAAfQgQAAgKAFQgIAGAAANIAAAyg");
	this.shape_2.setTransform(45.15,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAzQgLgEgHgGQgIgHgEgKQgEgKgBgNIAAgBQAAgMAFgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAAKAEQAKADAIAHQAIAIAEAJQAEAKABANIAAAAQgBANgEAKQgEAKgIAHQgIAHgKAEQgKADgMABQgLAAgKgEgAgPgWQgHAIAAAOIAAAAQABAOAFAIQAGAIAKAAQALAAAGgIQAGgIgBgNIAAgBQABgOgGgHQgGgIgLAAQgKAAgFAHg");
	this.shape_3.setTransform(35.3,15.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAQA0IgQg8IgQA8IggAAIghhnIAjAAIARBAIAShAIAaAAIARBAIAShAIAfAAIggBng");
	this.shape_4.setTransform(21.5,15.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAzQgKgEgIgGQgHgHgFgKQgEgKAAgNIAAgBQAAgMAEgKQAFgKAHgHQAIgHAKgEQAJgEALAAQALAAAJADQAKADAHAHQAHAGAEAKQAFALAAAOIAAAIIhJAAQABALAFAGQAHAGAJAAQAJAAAFgDQAFgEAAgGIAgAAQgCASgOAJQgNAKgXAAQgLAAgKgEgAAVgLQgBgVgTAAQgHAAgGAGQgFAFgCAKIAoAAIAAAAg");
	this.shape_5.setTransform(7.95,15.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAwA1IAAg+QABgJgEgDQgEgFgHAAQgHAAgGAGQgEAEAAAJIAAA8IghAAIAAg+QAAgJgDgDQgEgFgHAAQgIAAgFAGQgEAEgBAJIAAA8IghAAIAAhnIAhAAIAAAQQAFgHAIgGQAIgFAMgBQAUAAAHASQAHgKAJgDQAJgFAKAAQAIAAAGACQAGADAFAFQAFAEACAIQACAIABAJIAABDg");
	this.shape_6.setTransform(-6.45,15.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAzQgLgEgHgGQgIgHgEgKQgEgKgBgNIAAgBQABgMAEgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAAKAEQALADAHAHQAIAIAEAJQAEAKABANIAAAAQgBANgEAKQgEAKgIAHQgHAHgLAEQgKADgMABQgLAAgKgEgAgPgWQgHAIAAAOIAAAAQABAOAFAIQAGAIAKAAQALAAAGgIQAFgIAAgNIAAgBQAAgOgFgHQgGgIgLAAQgKAAgFAHg");
	this.shape_7.setTransform(-21.15,15.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZBHIAAg5IgxAAIAAA5IgnAAIAAiOIAnAAIAAA4IAxAAIAAg4IAmAAIAACOg");
	this.shape_8.setTransform(-34.3,13.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVBKIAAhRIgMAAIAAgWIAMAAIAAgHQAAgTALgJQAKgJASAAIAJAAIAHACIAAAZIgEgBIgGgBQgHAAgDADQgCAEAAAFIAAAHIAVAAIAAAWIgVAAIAABRg");
	this.shape_9.setTransform(-48.25,13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAzQgLgEgHgGQgIgHgEgKQgEgKgBgNIAAgBQAAgMAFgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAAKAEQALADAHAHQAIAIAEAJQAEAKABANIAAAAQgBANgEAKQgEAKgIAHQgHAHgLAEQgKADgMABQgLAAgKgEgAgPgWQgHAIAAAOIAAAAQABAOAFAIQAGAIAKAAQALAAAGgIQAFgIAAgNIAAgBQAAgOgFgHQgGgIgLAAQgKAAgFAHg");
	this.shape_10.setTransform(-57.5,15.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#123293").s().p("AgLA4QgJgJAAgRIAAgwIgNAAIAAgXIANAAIAAgWIAgAAIAAAWIAWAAIAAAXIgWAAIAAAsQAAAMALAAIAGAAIAFgCIAAAaIgIABIgMABQgPAAgKgIg");
	this.shape_11.setTransform(48.9,-8.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#123293").s().p("AgVAzQgLgEgHgGQgIgHgEgKQgEgKAAgNIAAgBQAAgMAEgKQAEgKAIgHQAHgHALgEQAKgEALAAQAMAAALAEQAJADAIAHQAIAIAEAJQAEAKAAANIAAAAQABANgFAKQgEAKgIAHQgIAHgJAEQgKADgNABQgLAAgKgEgAgQgWQgFAIAAAOIAAAAQgBAOAGAIQAGAIAKAAQALAAAGgIQAGgIAAgNIAAgBQAAgOgGgHQgGgIgLAAQgKAAgGAHg");
	this.shape_12.setTransform(39.3,-7.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#123293").s().p("AguBIIAAiOIAmAAIAABwIA3AAIAAAeg");
	this.shape_13.setTransform(28.225,-9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#123293").s().p("AgbA1QgGgCgFgEQgFgDgCgGQgDgGAAgIQAAgJADgGQAEgGAHgDQAHgDAIgCIATgEQAJgCAEgDQADgCAAgFQAAgFgDgCQgDgDgIAAQgHAAgEAEQgDADgBAGIgfAAQAAgJAEgHQAEgHAHgEQAGgFAJgCQAIgCAKAAQAKAAAIACQAJACAGAFQAGAFADAHQADAHAAAKIAABEIggAAIAAgMQgEAGgHAEQgGAEgNABQgHAAgHgCgAALAFIgJADQgHACgFADQgFADAAAGQAAAEADADQADADAHAAQAHAAAGgEQAFgFABgIIAAgNg");
	this.shape_14.setTransform(13.025,-7.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghAuQgMgJgBgSIAfAAQABAGADAEQAEADAHAAQAHAAAEgCQADgDAAgFQAAgEgEgCQgFgCgKgCIgSgEQgHgCgFgEQgFgDgCgGQgCgFAAgIQAAgJADgGQAEgGAGgFQAGgEAIgCQAHgCAJAAQAJAAAHACQAIABAGAEQAGAEAEAHQADAGABAJIgeAAQgBgGgDgCQgEgDgFAAQgHAAgDADQgDACAAAEQAAAEAEACQAEACAJACIATADQAIADAFADQAFAEADAFQACAFABAJQAAAJgEAHQgDAGgGAFQgGAEgIACQgJACgLABQgVAAgMgJg");
	this.shape_15.setTransform(-0.775,-7.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgKAQQAGgBADgFQACgFAAgFIAAgCIAAgBIgLAAIAAgWIAVAAIAAAUQgBALgFAKQgFAIgKACg");
	this.shape_16.setTransform(-7.2,-14.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLA4QgJgJAAgRIAAgwIgNAAIAAgXIANAAIAAgWIAgAAIAAAWIAVAAIAAAXIgVAAIAAAsQAAAMALAAIAGAAIAFgCIAAAaIgJABIgLABQgQAAgJgIg");
	this.shape_17.setTransform(-13.4,-8.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbA1QgGgCgFgEQgFgDgCgGQgDgGAAgIQAAgJADgGQAEgGAHgDQAHgDAIgCIATgEQAJgCAEgDQADgCAAgFQAAgFgDgCQgDgDgIAAQgHAAgEAEQgDADgBAGIgfAAQAAgJAEgHQAEgHAHgEQAGgFAJgCQAIgCAKAAQAKAAAIACQAJACAGAFQAGAFADAHQADAHAAAKIAABEIggAAIAAgMQgEAGgHAEQgGAEgNABQgHAAgHgCgAALAFIgJADQgHACgFADQgFADAAAGQAAAEADADQADADAHAAQAHAAAGgEQAFgFABgIIAAgNg");
	this.shape_18.setTransform(-22.725,-7.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASBKIAAg+QAAgJgEgEQgEgFgIABQgIAAgFAEQgFAFAAAKIAAA8IgiAAIAAiTIAiAAIAAA8QADgJAJgFQAHgGAOABQAHAAAGABQAHADAEAFQAFAFACAHQADAIAAAJIAABEg");
	this.shape_19.setTransform(-33.9,-9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSBIIAAhyIgmAAIAAgcIBxAAIAAAcIgmAAIAAByg");
	this.shape_20.setTransform(-45.725,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_homework, new cjs.Rectangle(-65.8,-27.2,131.7,54.5), null);


(lib.txt_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#123293").s().p("AgTATQgHgIgBgLQABgKAHgIQAIgIALAAQAMAAAHAIQAIAIAAAKQAAALgIAIQgHAIgMAAQgLAAgIgIg");
	this.shape.setTransform(83.5,10.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWBnIAAjNIAtAAIAADNg");
	this.shape_1.setTransform(76.625,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWBnIAAjNIAtAAIAADNg");
	this.shape_2.setTransform(69.825,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWBoIAAiSIAtAAIAACSgAgRg8QgIgHAAgLQAAgKAHgHQAIgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAGgLABQgKAAgHgHg");
	this.shape_3.setTransform(63,2.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZBnIAAhWQAAgNgGgGQgEgGgNAAQgLAAgHAHQgHAFgBAQIAABTIguAAIAAjNIAuAAIAABTQAGgLAMgIQALgIASAAQALAAAJADQAIAEAHAGQAGAHAEALQADALABAMIAABfg");
	this.shape_4.setTransform(51.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcBIQgOgFgJgJQgLgKgFgOQgGgOAAgSIAAgCQAAgRAGgPQAFgOALgKQALgJAOgGQAOgFAPAAQANAAAMADQANADAJAHQAKAHAGAMQAGALACAQIgsAAQgCgLgGgGQgHgFgLgBQgNAAgJAKQgHAKgBAUIAAABQAAAUAIALQAIAKAPAAQALAAAIgGQAHgHABgNIAqAAQgBAOgEALQgFALgKAIQgIAIgOAEQgNAEgRABQgQAAgOgFg");
	this.shape_5.setTransform(35.9,5.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4BjQgNgEgJgIQgJgIgGgLQgEgKAAgPQAAgUALgOQAMgNAVgKQgHgKgDgJQgDgKAAgHQAAgNAFgJQAEgKAJgGQAJgHALgDQALgDANgBQALAAAKADQAKADAJAGQAIAGAFAIQAEAIABAMQAAARgLAMQgKAMgUAJIAcAhIAQgeIAoAAIggA+IAhApIg8AAIgNgQQgJAIgNAFQgLAFgUABQgQAAgMgEgAgrAXQgFAFAAAKQAAAMAHAHQAHAHAOAAQANAAAIgKIghgpQgHAEgEAGgAgPhAQgFAFAAAJQAAAGADAGIAJAMQAKgFAFgGQAFgGAAgJQAAgHgEgFQgEgEgHgBQgHAAgFAFg");
	this.shape_6.setTransform(14.075,2.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWBnIAAjNIAtAAIAADNg");
	this.shape_7.setTransform(-3.975,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWBnIAAjNIAtAAIAADNg");
	this.shape_8.setTransform(-10.775,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWBoIAAiSIAuAAIAACSgAgRg8QgHgHgBgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAGgLABQgKAAgHgHg");
	this.shape_9.setTransform(-17.6,2.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdBoIAAhyIgSAAIAAggIASAAIAAgIQAAgbAPgNQAOgNAaAAIAMABIAKACIAAAjIgGgCIgIgBQgJAAgEAFQgEAFAAAIIAAAIIAeAAIAAAgIgeAAIAAByg");
	this.shape_10.setTransform(-25.825,2.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQBOQgMgMAAgYIAAhEIgSAAIAAghIASAAIAAgeIAtAAIAAAeIAeAAIAAAhIgeAAIAAA/QAAAQAPAAIAIAAIAHgCIAAAjIgLADIgQABQgXAAgNgMg");
	this.shape_11.setTransform(-40.025,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgvBAQgQgNgCgYIAsAAQABAJAFAEQAEAFALAAQAKAAAFgDQAFgEAAgGQAAgHgGgDQgGgDgPgCQgOgCgLgEQgLgDgGgFQgIgFgCgHQgDgIAAgMQAAgMAFgIQAEgJAJgGQAJgGALgDQAKgCANgBQAMAAALACQALADAIAFQAJAGAEAJQAGAJABANIgrAAQgBgIgEgEQgGgEgIAAQgIAAgFAEQgEADgBAGQAAAGAGACQAFADAOACQAPACALADQALADAHAGQAIAFADAHQAEAIABAMQAAAMgFAKQgFAJgIAGQgIAHgNADQgLACgQABQgeAAgRgNg");
	this.shape_12.setTransform(-51.4,5.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoBHQgJgDgHgHQgHgHgDgKQgEgKAAgOIAAheIAuAAIAABXQAAAaAXAAQALAAAHgGQAIgIAAgPIAAhUIAuAAIAACRIguAAIAAgWQgGALgLAIQgKAGgTABQgKAAgJgEg");
	this.shape_13.setTransform(-66.125,5.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgmBkQgIgCgFgDIAAgoIAKADIAOABQAMAAAIgGQAHgHAAgQIAAiCIA0AAIAACDQAAAjgSASQgSARggAAQgOAAgIgBg");
	this.shape_14.setTransform(-80.425,2.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_fill, new cjs.Rectangle(-88.6,-21,177.2,42.1), null);


(lib.txt_enoughInk = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#123293").s().p("AAAAHIgGANIgLgIIAKgKIgNgCIAEgMIAMAGIgDgNIAOAAIgCANIAMgGIAEAMIgOACIAKAKIgLAIg");
	this.shape.setTransform(100.425,8.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#123293").s().p("AgMAMQgEgFAAgHQgBgGAFgFQAFgGAHAAQAIAAAEAGQAFAFABAGQgBAHgFAFQgEAGgIgBQgHABgFgGg");
	this.shape_1.setTransform(100.55,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdApQgMgIAAgPIAcAAQAAAFADADQAEADAGAAQAHAAADgCQADgCAAgFQAAgEgEgCIgNgDQgJgBgHgDQgHgCgEgDQgFgDgBgFQgCgFAAgHQAAgIACgFQADgGAGgEQAGgEAGgBIAPgCQAIAAAHABQAHACAFADQAGAEADAGQADAFABAJIgbAAQgBgGgDgCQgDgCgFAAQgGAAgDACQgCACAAAEQAAAEADABQAEACAIABIARAEQAHACAFADQAEADADAFQACAFAAAHQAAAIgDAGQgCAGgGAEQgFAFgJABQgHACgKAAQgSAAgLgIg");
	this.shape_2.setTransform(93.85,14.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAuQgIgDgIgGQgGgGgEgJQgDgJAAgMIAAgBQAAgKADgJQAEgJAHgHQAHgGAIgEQAKgDAJAAQAJAAAJACQAJADAGAGQAHAGADAJQAEAJABANIAAAHIhDAAQABAKAGAGQAFAGAJAAQAIAAAEgEQAEgDABgFIAdAAQgDAPgMAJQgMAIgVAAQgJAAgKgDgAATgJQAAgTgSAAQgHAAgFAFQgEAEgCAKIAkAAIAAAAg");
	this.shape_3.setTransform(84.4,14.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjA4QgMgJgCgQIAeAAQACAGADAEQAEADAKAAQAKAAAFgFQAFgGAAgKIAAgOIgFAGQgDAEgDACIgIAEQgEABgFAAQgJAAgHgDQgIgDgFgGQgGgFgCgJQgEgHAAgLIAAgBQAAgKADgJQADgIAGgGQAFgGAIgEQAHgDAJAAQAKAAAHAFQAHAEAEAHIAAgNIAeAAIAABVQAAAVgNALQgNAKgYABQgYAAgLgKgAgNgkQgGAGABALIAAABQgBALAGAGQAFAFAJAAQAJAAAFgFQAGgGAAgLIAAgBQAAgLgFgGQgFgGgKAAQgJAAgFAGg");
	this.shape_4.setTransform(73.55,16.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAwQgGgCgEgDQgEgDgDgFQgDgGABgHQgBgIAEgFQADgGAGgDQAGgDAIgBIARgEQAHgBAEgDQAEgCgBgEQAAgFgDgCQgCgCgHgBQgHAAgDAEQgDADgBAFIgcAAQABgIADgGQADgGAHgEQAFgEAIgCQAHgCAJAAQAJAAAIACQAHACAGAEQAFAEADAGQADAHABAJIAAA9IgeAAIAAgLQgDAFgHAEQgFAEgMAAQgHAAgFgBgAAKAFIgIACQgHACgEADQgFACAAAGQAAAEADADQACACAHAAQAGAAAGgEQAEgEAAgHIAAgMg");
	this.shape_5.setTransform(63.2,14.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwBAIAAh/IAvAAQAZAAAMAKQANALAAAVIAAABQAAAUgNAJQgMAKgYABIgOAAIAAAsgAgOgDIAMAAQATAAAAgRIAAgBQAAgJgFgEQgFgEgJAAIgMAAg");
	this.shape_6.setTransform(53.45,13.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSBDIAAhJIgMAAIAAgUIAMAAIAAgGQAAgRAKgIQAIgIARgBIAIABIAGABIAAAXIgEgBIgFgBQgGAAgDADQgDADAAAFIAAAGIAUAAIAAAUIgUAAIAABJg");
	this.shape_7.setTransform(41.35,12.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAuQgJgDgHgGQgHgGgEgJQgDgJgBgMIAAgBQAAgKAEgJQAEgJAHgHQAHgGAJgEQAJgDAKAAQALAAAJADQAJADAHAHQAHAGAEAJQAEAIAAAMIAAAAQAAAMgEAJQgEAJgHAGQgHAHgJADQgJADgLAAQgKAAgJgDgAgOgTQgFAHAAAMIAAAAQAAANAFAHQAFAHAJAAQAKAAAFgHQAFgHAAgMIAAgBQAAgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_8.setTransform(32.875,14.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeApQgKgIgBgPIAcAAQAAAFAEADQACADAIAAQAGAAADgCQADgCAAgFQAAgEgEgCIgNgDQgKgBgGgDQgHgCgFgDQgDgDgCgFQgDgFAAgHQAAgIAEgFQADgGAFgEQAGgEAGgBIAQgCQAHAAAHABQAHACAGADQAFAEADAGQADAFABAJIgbAAQgBgGgDgCQgDgCgFAAQgFAAgDACQgDACgBAEQAAAEAEABQAEACAIABIAQAEQAIACAEADQAFADACAFQADAFAAAHQAAAIgDAGQgDAGgFAEQgGAFgHABQgIACgJAAQgUAAgLgIg");
	this.shape_9.setTransform(20.1,14.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYBBQgHgDgGgHQgGgGgCgJQgDgJgBgMIAAgBQAAgMADgIQADgJAGgGQAGgHAHgDQAHgDAJAAQAKAAAHAEQAHAEAEAIIAAg0IAeAAIAACDIgeAAIAAgPQgEAHgHAFQgIAFgKAAQgIAAgHgCgAgNgBQgFAFAAANIAAACQAAANAFAGQAFAGAIAAQAKAAAFgGQAGgGAAgNIAAgCQAAgNgFgFQgFgHgKAAQgJAAgFAHg");
	this.shape_10.setTransform(10.075,12.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAQAwIAAg2QAAgJgEgEQgDgEgIAAQgGAAgFAFQgFAEAAAKIAAA0IgeAAIAAhdIAeAAIAAAPQADgHAJgFQAGgFAMAAQAHAAAFACQAGACAEAEQAFAFACAHQACAGAAAKIAAA7g");
	this.shape_11.setTransform(-0.4,14.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAwQgGgCgEgDQgFgDgCgFQgCgGgBgHQABgIADgFQADgGAGgDQAGgDAIgBIARgEQAIgBADgDQAEgCAAgEQAAgFgEgCQgCgCgIgBQgFAAgEAEQgDADgBAFIgcAAQAAgIAEgGQAEgGAFgEQAGgEAIgCQAIgCAIAAQAKAAAHACQAHACAGAEQAGAEACAGQADAHAAAJIAAA9IgcAAIAAgLQgFAFgFAEQgGAEgMAAQgGAAgGgBgAAKAFIgJACQgGACgEADQgFACAAAGQAAAEADADQACACAHAAQAHAAAEgEQAFgEABgHIAAgMg");
	this.shape_12.setTransform(-10.75,14.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdApQgLgIgBgPIAcAAQABAFADADQADADAGAAQAHAAADgCQADgCAAgFQAAgEgEgCIgNgDQgJgBgHgDQgHgCgFgDQgEgDgBgFQgCgFAAgHQAAgIADgFQADgGAFgEQAGgEAGgBIAQgCQAHAAAHABQAHACAFADQAGAEADAGQAEAFAAAJIgbAAQgBgGgDgCQgDgCgFAAQgGAAgDACQgCACAAAEQgBAEAEABQADACAJABIAQAEQAIACAFADQAEADACAFQADAFAAAHQAAAIgDAGQgDAGgFAEQgFAFgJABQgHACgKAAQgTAAgKgIg");
	this.shape_13.setTransform(-19.75,14.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAuQgFgCgFgEQgEgFgCgGQgDgHAAgJIAAg8IAeAAIAAA3QAAASAOgBQAHABAFgFQAFgEAAgLIAAg1IAeAAIAABdIgeAAIAAgOQgEAHgHAEQgGAFgMAAQgHAAgGgCg");
	this.shape_14.setTransform(-29.375,14.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAuQgJgDgHgGQgHgGgEgJQgDgJgBgMIAAgBQAAgKAEgJQAEgJAHgHQAHgGAJgEQAJgDAKAAQALAAAJADQAJADAHAHQAHAGAEAJQAEAIAAAMIAAAAQAAAMgEAJQgEAJgHAGQgHAHgJADQgJADgLAAQgKAAgJgDgAgOgTQgFAHAAAMIAAAAQAAANAFAHQAFAHAJAAQAKAAAFgHQAFgHAAgMIAAgBQAAgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_15.setTransform(-39.925,14.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAQBCIAAg3QAAgJgDgDQgEgEgHAAQgHAAgFAFQgFADAAAKIAAA1IgeAAIAAiDIAeAAIAAA1QADgHAJgFQAGgFAMAAQAGAAAGACQAGACAFAEQADAFACAHQACAGABAJIAAA8g");
	this.shape_16.setTransform(-50.5,12.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQBAIAAhlIgiAAIAAgaIBlAAIAAAaIgiAAIAABlg");
	this.shape_17.setTransform(-60.925,13.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKAyQgIgHAAgRIAAgrIgLAAIAAgUIALAAIAAgUIAdAAIAAAUIATAAIAAAUIgTAAIAAAoQAAALAKAAIAFAAIAEgBIAAAXIgHABIgKABQgOAAgJgIg");
	this.shape_18.setTransform(-72.375,13.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAQAwIAAg2QAAgJgEgEQgDgEgIAAQgGAAgFAFQgFAEAAAKIAAA0IgeAAIAAhdIAeAAIAAAPQAEgHAHgFQAHgFAMAAQAGAAAHACQAFACAEAEQAFAFACAHQABAGABAKIAAA7g");
	this.shape_19.setTransform(-80.7,14.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOBCIAAhcIAdAAIAABcgAgLgnQgEgEgBgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAEQgFAFgHAAQgGAAgFgFg");
	this.shape_20.setTransform(-88.275,12.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAwIAAhdIAdAAIAAASQAEgKAIgFQAHgFALAAIAAAcQgOAAgIAFQgIAFAAALIAAAug");
	this.shape_21.setTransform(-93.725,14.675);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgwBAIAAh/IAwAAQAYAAAMAKQANALAAAVIAAABQAAAUgNAJQgNAKgXABIgOAAIAAAsgAgOgDIAMAAQATAAAAgRIAAgBQAAgJgFgEQgGgEgHAAIgNAAg");
	this.shape_22.setTransform(-102.55,13.025);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAuQgJgDgHgGQgHgGgEgJQgDgJgBgMIAAgBQAAgKAEgJQAEgJAHgHQAHgGAJgEQAJgDAKAAQALAAAJADQAJADAHAHQAHAGAEAJQAEAIAAAMIAAAAQAAAMgEAJQgEAJgHAGQgHAHgJADQgJADgLAAQgKAAgJgDgAgOgTQgFAHAAAMIAAAAQAAANAFAHQAFAHAJAAQAKAAAFgHQAFgHAAgMIAAgBQAAgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_23.setTransform(75.575,-5.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgKAyQgIgHAAgRIAAgrIgLAAIAAgUIALAAIAAgUIAdAAIAAAUIATAAIAAAUIgTAAIAAApQAAAKAKAAIAFAAIAEgBIAAAWIgHACIgKABQgOAAgJgIg");
	this.shape_24.setTransform(66.875,-6.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#123293").s().p("AAMBCIgbgqIAAAqIgdAAIAAiDIAdAAIAABLIAaglIAgAAIggAqIAiAzg");
	this.shape_25.setTransform(56.2,-7.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#123293").s().p("AAQAwIAAg2QAAgJgEgEQgDgEgHAAQgHAAgFAFQgFAEAAAKIAAA0IgeAAIAAhdIAeAAIAAAPQAEgHAHgFQAHgFAMAAQAGAAAHACQAFACAFAEQADAFADAHQABAGABAKIAAA7g");
	this.shape_26.setTransform(45.65,-5.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#123293").s().p("AgQBAIAAh/IAhAAIAAB/g");
	this.shape_27.setTransform(37.525,-6.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAQBCIAAg3QAAgJgEgDQgDgEgHAAQgHAAgFAFQgFADAAAKIAAA1IgeAAIAAiDIAeAAIAAA1QAEgHAHgFQAHgFAMAAQAGAAAHACQAFACAFAEQADAFADAHQABAGABAJIAAA8g");
	this.shape_28.setTransform(26.3,-7.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkA4QgLgJgBgQIAdAAQABAGAFAEQADADAKAAQAKAAAFgFQAFgGAAgKIAAgOIgFAGQgCAEgFACIgIAEQgDABgGAAQgIAAgHgDQgHgDgGgGQgGgFgDgJQgDgHAAgLIAAgBQAAgKADgJQADgIAGgGQAGgGAHgEQAHgDAIAAQALAAAHAFQAHAEAEAHIAAgNIAeAAIAABVQAAAVgOALQgNAKgXABQgYAAgMgKgAgNgkQgFAGgBALIAAABQABALAFAGQAFAFAIAAQAKAAAFgFQAFgGABgLIAAgBQAAgLgFgGQgFgGgKAAQgJAAgFAGg");
	this.shape_29.setTransform(15.2,-3.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAuQgFgCgFgEQgEgFgCgHQgDgFAAgKIAAg8IAeAAIAAA3QAAARAOAAQAHAAAFgEQAFgEAAgLIAAg1IAeAAIAABdIgeAAIAAgOQgEAGgHAFQgGAFgMAAQgHAAgGgCg");
	this.shape_30.setTransform(4.525,-5.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTAuQgJgDgHgGQgHgGgEgJQgDgJgBgMIAAgBQAAgKAEgJQAEgJAHgHQAHgGAJgEQAJgDAKAAQALAAAJADQAJADAHAHQAHAGAEAJQAEAIAAAMIAAAAQAAAMgEAJQgEAJgHAGQgHAHgJADQgJADgLAAQgKAAgJgDgAgOgTQgFAHAAAMIAAAAQAAANAFAHQAFAHAJAAQAKAAAFgHQAFgHAAgMIAAgBQAAgMgFgHQgFgHgKAAQgJAAgFAHg");
	this.shape_31.setTransform(-6.125,-5.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAQAwIAAg2QAAgJgEgEQgDgEgIAAQgGAAgFAFQgFAEAAAKIAAA0IgeAAIAAhdIAeAAIAAAPQAEgHAHgFQAHgFAMAAQAGAAAHACQAFACAEAEQAFAFACAHQABAGABAKIAAA7g");
	this.shape_32.setTransform(-16.8,-5.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgsBAIAAh/IBWAAIAAAaIg0AAIAAAZIApAAIAAAXIgpAAIAAAbIA3AAIAAAag");
	this.shape_33.setTransform(-27,-6.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgeApQgLgIAAgPIAcAAQAAAFADADQAEADAHAAQAGAAADgCQADgCAAgFQAAgEgEgCIgNgDQgJgBgHgDQgHgCgEgDQgEgDgDgFQgCgFAAgHQAAgIADgFQAEgGAFgEQAFgEAIgBIAOgCQAIAAAHABQAHACAFADQAGAEADAGQADAFABAJIgbAAQgBgGgDgCQgDgCgFAAQgGAAgDACQgDACAAAEQABAEADABQAEACAIABIARAEQAHACAEADQAFADADAFQACAFAAAHQAAAIgDAGQgCAGgGAEQgFAFgJABQgHACgJAAQgUAAgLgIg");
	this.shape_34.setTransform(-40.05,-5.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAuQgIgDgHgGQgHgGgEgJQgEgJAAgMIAAgBQAAgKAEgJQAEgJAHgHQAHgGAIgEQAKgDAKAAQAIAAAJACQAJADAGAGQAHAGADAJQAEAJABANIAAAHIhDAAQABAKAGAGQAFAGAJAAQAIAAAEgEQAEgDABgFIAdAAQgDAPgMAJQgMAIgUAAQgKAAgKgDgAAUgJQgCgTgQAAQgIAAgFAFQgEAEgCAKIAlAAIAAAAg");
	this.shape_35.setTransform(-49.6,-5.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYBBQgHgDgGgHQgGgGgCgJQgDgJgBgMIAAgBQAAgMADgIQADgJAGgGQAGgHAHgDQAHgDAJAAQAKAAAHAEQAHAEAEAIIAAg0IAeAAIAACDIgeAAIAAgPQgEAHgHAFQgIAFgKAAQgIAAgHgCgAgNgBQgFAFAAANIAAACQAAANAFAGQAFAGAIAAQAKAAAFgGQAGgGAAgNIAAgCQAAgNgFgFQgFgHgKAAQgJAAgFAHg");
	this.shape_36.setTransform(-60.525,-7.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaAuQgFgCgFgEQgEgFgCgHQgDgFAAgKIAAg8IAeAAIAAA3QAAARAOAAQAHAAAFgEQAFgEAAgLIAAg1IAeAAIAABdIgeAAIAAgOQgEAGgHAFQgGAFgMAAQgHAAgGgCg");
	this.shape_37.setTransform(-71.175,-5.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOBCIAAiDIAdAAIAACDg");
	this.shape_38.setTransform(-78.775,-7.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgRAuQgJgDgHgGQgGgGgEgJQgEgJAAgMIAAgBQAAgLAEgJQAEgJAHgGQAGgHAJgDQAJgDAKAAQAIAAAIACQAIACAGAEQAGAFAEAHQAFAHAAALIgcAAQgBgIgEgDQgEgEgIAAQgIAAgFAGQgFAHAAAMIAAABQAAANAFAHQAFAGAJAAQAHAAAFgEQAFgEABgIIAbAAQgBAIgDAHQgDAHgGAGQgGAFgIADQgJACgLAAQgJAAgJgDg");
	this.shape_39.setTransform(-86.125,-5.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAQAwIAAg2QAAgJgDgEQgEgEgIAAQgGAAgFAFQgFAEAAAKIAAA0IgeAAIAAhdIAeAAIAAAPQADgHAJgFQAGgFAMAAQAHAAAFACQAGACAEAEQAFAFABAHQACAGABAKIAAA7g");
	this.shape_40.setTransform(-96.5,-5.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQBAIAAh/IAhAAIAAB/g");
	this.shape_41.setTransform(-104.625,-6.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_enoughInk, new cjs.Rectangle(-110.7,-22.9,216.9,48.5), null);


(lib.txt_ecoTank = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#123293").s().p("AgNAfQgGgDgEgEQgFgEgDgHQgCgGAAgHQAAgGACgGQADgGAFgFQAEgEAGgDQAGgCAHgBQAHAAAGADQAHADAEAEQAFAFACAGQADAGAAAGQAAAHgDAGQgCAGgFAEQgFAGgGACQgGACgHABQgGAAgHgDgAgKgZQgFACgEAFQgEADgCAFQgCAFAAAFQAAAHACAEQACAFAEAEQAEAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQADgEAAgHQAAgFgDgFQgCgFgDgDQgEgFgFgCQgFgBgGAAQgFAAgFABgAAFAQIgFgMIgCAAIAAAMIgKAAIAAggIAMAAQAOAAAAALQAAAEgCABIgEACIAIAOgAgCgBIACAAQAEAAAAgEQAAgDgEAAIgCAAg");
	this.shape.setTransform(74.525,-3.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#123293").s().p("AAOBRIggg0IAAA0IglAAIAAihIAlAAIAABcIAggtIAmAAIgnAzIArA/g");
	this.shape_1.setTransform(65.25,1.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#123293").s().p("AATA7IAAhDQAAgKgDgFQgFgFgKAAQgHAAgGAFQgHAGAAAMIAABAIgkAAIAAhyIAkAAIAAATQAFgJAJgHQAJgFAOgBQAIAAAIADQAHACAEAGQAFAFADAIQADAJAAALIAABJg");
	this.shape_2.setTransform(52.9,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#123293").s().p("AgdA6QgHgCgGgEQgFgDgDgHQgDgGAAgJQAAgKAEgHQAEgGAHgEQAIgDAJgDIAVgEQAKgCAEgDQAEgDAAgFQAAgFgDgDQgEgDgJAAQgHAAgFAEQgEAEAAAGIgjAAQABgKAEgHQAEgIAIgFQAHgEAJgDQAJgCALAAQALAAAKACQAJADAHAFQAGAFAEAIQADAIAAAKIAABMIgjAAIAAgOQgEAGgIAFQgHAFgOAAQgIAAgHgCgAAMAGIgKADQgIACgGADQgFAEAAAGQAAAFADADQAEAEAHAAQAJAAAGgFQAGgFAAgJIAAgOg");
	this.shape_3.setTransform(40.625,4.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#123293").s().p("AgUBPIAAh8IgpAAIAAghIB7AAIAAAhIgpAAIAAB8g");
	this.shape_4.setTransform(29.075,2.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgYA4QgLgEgJgHQgIgHgEgMQgFgKAAgOIAAgCQAAgNAFgLQAEgLAIgIQAJgIALgEQAMgEAMAAQANAAAMAEQALAEAIAIQAJAIAEAKQAEALABAOIAAABQAAANgFALQgEALgJAIQgIAIgLAEQgLAEgOAAQgMAAgMgEgAgSgYQgGAJAAAPIAAABQAAAPAGAJQAGAIAMAAQAMAAAGgIQAHgJAAgPIAAgBQAAgPgHgIQgGgJgMAAQgLAAgHAIg");
	this.shape_5.setTransform(16.7,4.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AgVA5QgLgEgIgIQgIgHgFgLQgEgLAAgOIAAgCQAAgNAEgLQAFgMAIgHQAIgIAMgEQAKgEAMAAQAKAAAKACQAKADAHAFQAIAGAFAJQAFAIAAANIgiAAQgBgJgFgEQgFgFgJAAQgKAAgHAIQgGAIAAAPIAAABQAAAQAGAIQAGAIAMAAQAIAAAGgFQAGgFABgKIAhAAQAAALgEAIQgEAJgHAGQgHAHgLADQgKADgOAAQgLAAgLgDg");
	this.shape_6.setTransform(4.475,4.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("Ag2BPIAAidIBqAAIAAAhIhAAAIAAAeIAyAAIAAAdIgyAAIAAAhIBDAAIAAAgg");
	this.shape_7.setTransform(-7.15,2.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAUBRIAAhEQgBgKgEgEQgEgFgJAAQgJAAgFAFQgHAFAAAMIAABBIgkAAIAAihIAkAAIAABBQAFgJAJgGQAJgGAOAAQAJAAAGACQAIADAEAFQAGAGACAIQADAIAAALIAABKg");
	this.shape_8.setTransform(-23.05,1.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMA9QgKgJAAgUIAAg1IgOAAIAAgZIAOAAIAAgYIAjAAIAAAYIAYAAIAAAZIgYAAIAAAyQAAANANAAIAGgBIAFgBIAAAcIgJACIgMABQgSAAgKgKg");
	this.shape_9.setTransform(-33.075,3.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRBRIAAhyIAjAAIAABygAgNgvQgGgGgBgIQAAgIAHgGQAFgFAIgBQAJABAFAFQAGAGABAIQgBAIgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_10.setTransform(-39.25,1.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZBPIgZhmIgaBmIgpAAIglidIAqAAIAWBmIAXhmIAkAAIAZBmIAWhmIAnAAIgmCdg");
	this.shape_11.setTransform(-52.025,2.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_ecoTank, new cjs.Rectangle(-64.8,-16.9,144.2,33.9), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAFIgHANIgGgEIAJgMIgOgDIADgHIANAFIgBgOIAHAAIAAAOIAMgFIACAHIgNADIAJAMIgGAEg");
	this.shape.setTransform(-40.7,-7.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAEQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAgBIAEgCQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBgBg");
	this.shape_1.setTransform(41.95,8.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAZQgFgCgDgDQgDgEgDgFQgBgEAAgGIAAgBQAAgGABgEQACgFAEgDQADgEAEgCQAFgCAFAAIAIABQAEABADAEQAEADACAFIACAMIAAACIgmAAQgBAJAFAEQAEAFAHAAQANAAABgJIAIAAQgBAIgGAEQgGAEgJAAQgEAAgFgCgAAPgEQgBgIgDgEQgEgEgGAAQgGABgEAEQgEADgBAIIAdAAIAAAAg");
	this.shape_2.setTransform(38.25,6.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAaIAAgzIAJAAIAAAJIACgDIADgDIAFgDIAGgBIAAAIIgHABIgGADQgBABgBAEIgBAIIAAAbg");
	this.shape_3.setTransform(34.225,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAZQgEgCgEgDQgDgEgCgFQgBgFAAgFIAAgBQAAgFABgGQACgEADgDQAEgEAEgCQAFgCAFAAQAGAAAEACQAFACADADQAEAEACAEQABAGAAAFIAAAAQABAGgCAFQgCAFgEAEQgDADgFACIgKACQgFAAgFgCgAgGgSQgDABgCADIgEAHIgBAHIAAABQAAAIAFAFQAEAGAHAAQAEAAADgBQAEgCACgDIADgFIABgIIAAgBIgBgHIgDgHQgCgDgEgBQgDgCgEAAQgDAAgDACg");
	this.shape_4.setTransform(29.6,6.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAHAgQgHAAgCgDQgEgEAAgGIAAggIgHAAIAAgHIAHAAIAAgLIAIAAIAAALIAMAAIAAAHIgMAAIAAAfQAAAHAGAAIAEAAIACgBIAAAHIgCABg");
	this.shape_5.setTransform(25.225,5.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAWQgFgEgBgIIAIAAQAAAEAEAEQACACAGAAQAGAAACgCQADgCAAgFQAAgDgDgCQgDgCgGgBIgIgCIgFgDIgDgDIgCgHQAAgDACgDIAEgFQADgCADAAIAGgBIAGABQADAAADACIAEAFQACADAAAEIgIAAQgBgEgDgCQgCgCgEgBQgEABgDACQgDACAAADIAAADIADADIADABIAGABIAHACIAFACIAFAEQABADAAAEQAAAHgFAEQgFAFgJAAQgJAAgFgFg");
	this.shape_6.setTransform(21.6,6.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_7.setTransform(18,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAOAaIAAgfQAAgHgDgEQgDgDgHAAIgEABIgFADIgDAFIgBAGIAAAeIgJAAIAAgzIAJAAIAAAIQACgDAEgDQAEgCAGgBIAHABQADABADADQACACACAEIABALIAAAeg");
	this.shape_8.setTransform(13.875,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgbQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(10.1,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMAaIAAgzIAJAAIAAAJIACgDIADgDIAFgDIAGgBIAAAIIgHABIgGADQgBABgBAEIgBAIIAAAbg");
	this.shape_10.setTransform(5.525,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAZQgFgCgDgDQgDgEgCgFQgCgEAAgGIAAgBQAAgGACgEQABgFADgDQAEgEAEgCQAFgCAEAAIAJABQAEABADAEQAEADACAFIACAMIAAACIgmAAQgBAJAFAEQAEAFAHAAQAMAAACgJIAJAAQgCAIgGAEQgGAEgJAAQgFAAgEgCgAAQgEQgCgIgDgEQgEgEgHAAQgFABgEAEQgEADgBAIIAeAAIAAAAg");
	this.shape_11.setTransform(1.15,6.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAHAgQgHAAgCgDQgEgEAAgGIAAggIgHAAIAAgHIAHAAIAAgLIAIAAIAAALIAMAAIAAAHIgMAAIAAAfQAAAHAGAAIAEAAIACgBIAAAHIgCABg");
	this.shape_12.setTransform(-3.075,5.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAOAaIAAgfQAAgHgDgEQgDgDgHAAIgEABIgFADIgDAFIgBAGIAAAeIgJAAIAAgzIAJAAIAAAIQACgDAEgDQAEgCAGgBIAHABQADABADADQACACACAEIABALIAAAeg");
	this.shape_13.setTransform(-7.225,6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgDAkIAAgzIAHAAIAAAzgAgDgbQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_14.setTransform(-11,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAaIAAgzIAJAAIAAAJIACgDIADgDIAFgDIAGgBIAAAIIgHABIgGADQgBABgBAEIgBAIIAAAbg");
	this.shape_15.setTransform(-13.425,6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAjIAAhFIAIAAIAAAJIAEgDIADgDIAGgDIAEgBQAFABAEABQAFACADADQAEAEABAFQACAFAAAFIAAABQAAAHgBADIgGAJQgDADgEADIgKABQgGAAgEgCQgEgDgDgEIAAAagAgGgbQgDACgCACQgDACgBAEIgBAJIAAABQAAAFABACQABAEADADQACACADABIAGABQAIAAAEgEQAFgGAAgIIAAgBQgBgFgBgEQgBgEgDgCQgCgCgCgCIgHgBQgCAAgEABg");
	this.shape_16.setTransform(-17.95,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAjIAKgXIgVguIAJAAIAPAkIAOgkIAJAAIgcBFg");
	this.shape_17.setTransform(-25.525,6.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAOAaIAAgfQAAgHgDgEQgDgDgHAAIgEABIgFADIgDAFIgBAGIAAAeIgJAAIAAgzIAJAAIAAAIQACgDAEgDQAEgCAGgBIAHABQADABADADQACACACAEIABALIAAAeg");
	this.shape_18.setTransform(-30.625,6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKAaIgFgDIgEgEQgBgDAAgEQAAgFACgDIAFgEIAIgCIAHgCQAFgBADgBQADgCAAgEQgBgDgCgCQgDgCgFgBQgKAAgCAKIgIAAQABgEACgDIAEgGIAHgCIAGgBIAHABIAGACIAFAGQABADAAAFIAAAjIgIAAIAAgHQgDAEgEACQgEACgFAAIgHgBgAAIAAIgHACIgEAAIgEACIgEAEIgBAEQAAAEACACQADACAFAAIAGAAIAEgDIAEgEQABgDAAgCIAAgLIgFADg");
	this.shape_19.setTransform(-36,6.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgEgCgCgGQgBgEAAgHIAAAAQAAgFABgFQACgFAEgEQADgDAFgCQAEgCAFAAIAIABQAEACADADQAEADACAFIACAMIAAABIgmAAQAAAKAEAEQAEAFAHAAQANAAABgJIAIAAQgBAIgGAEQgGAEgJAAQgFAAgEgCgAAPgEQAAgJgEgDQgEgDgGAAQgGAAgEADQgEAFgBAHIAdAAIAAAAg");
	this.shape_20.setTransform(34.75,-4.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDAlIAAhJIAHAAIAABJg");
	this.shape_21.setTransform(31.125,-5.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAZQgEgCgEgDQgEgDgBgGQgCgEAAgHIAAAAQAAgFACgFIAFgJQAEgEAEgBQAFgCAEAAIAIABIAHADQADACACADQACAEABAFIgIAAQgBgGgFgDQgEgCgFAAQgDgBgDACIgEAEQgDACgCAEIgBAIIAAAAQAAAKAFAFQAFAFAGAAIAGgBIAEgCIAEgEIACgGIAHAAQAAAFgCADIgFAHIgHADQgEACgFAAQgEAAgFgCg");
	this.shape_22.setTransform(27.5,-4.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMAjIAKgXIgVguIAJAAIAPAkIAOgkIAJAAIgcBFg");
	this.shape_23.setTransform(22.525,-3.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgHAZQgGgCgDgDQgDgDgCgGQgCgEAAgHIAAAAQAAgFACgFIAFgJQADgEAGgBQAEgCAEAAIAIABIAHADQADACACADQADAEAAAFIgJAAQgBgGgDgDQgEgCgGAAQgCgBgDACIgGAEQgCACgBAEIgBAIIAAAAQgBAKAFAFQAFAFAHAAIAFgBIAFgCIADgEIABgGIAIAAQAAAFgCADIgFAHIgHADQgEACgEAAQgFAAgEgCg");
	this.shape_24.setTransform(17.55,-4.35);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgCgCgGQgCgEAAgHIAAAAQAAgFACgFQABgFADgEQAEgDAEgCQAFgCAEAAIAJABQAEACADADQAEADACAFIACAMIAAABIgmAAQgBAKAFAEQAEAFAHAAQAMAAACgJIAJAAQgCAIgGAEQgGAEgJAAQgFAAgEgCgAAPgEQgBgJgDgDQgEgDgHAAQgFAAgEADQgEAFgBAHIAdAAIAAAAg");
	this.shape_25.setTransform(12.4,-4.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAKIACgFIADgDIAFgCIAGAAIAAAHIgHABIgGADQgBACgBADIgBAIIAAAcg");
	this.shape_26.setTransform(8.375,-4.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKAaIgFgEQgDgCgBgEIgCgJIAAghIAJAAIAAAgQAAAHADADQADADAGAAIAEAAIAFgDIADgFIABgGIAAgfIAJAAIAAA0IgJAAIAAgJQgCAEgEADQgEADgFAAIgIgBg");
	this.shape_27.setTransform(1.675,-4.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgKAZQgEgCgEgEQgDgDgCgFQgCgFAAgGIAAAAQAAgFACgFQACgFADgEQAEgDAEgCQAFgCAFAAQAGAAAEABQAFACADAEQAEAEACAFQABAFAAAFIAAAAQABAGgCAFQgCAFgEADQgDAEgFACIgKACQgFAAgFgCgAgGgSQgDACgCACIgEAGIgBAIIAAAAQAAAJAFAGQAEAFAHAAQAEAAADgCQAEgBACgCIADgHIABgIIAAAAIgBgIIgDgGQgCgCgEgCQgDgCgEABQgDgBgDACg");
	this.shape_28.setTransform(-3.8,-4.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMAjIAKgXIgVguIAJAAIAPAkIAOgkIAJAAIgcBFg");
	this.shape_29.setTransform(-8.925,-3.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAOAbIAAggQAAgHgDgDQgDgDgHgBIgEACIgFACIgDAEIgBAHIAAAfIgJAAIAAg0IAJAAIAAAJQACgEAEgDQAEgCAGAAIAHABQADAAADADQACADACAEIABAJIAAAgg");
	this.shape_30.setTransform(-16.175,-4.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIAZQgFgCgDgEQgDgCgCgGQgCgEAAgHIAAAAQAAgFACgFQACgFACgEQAEgDAEgCQAFgCAEAAIAJABQAEACADADQAEADACAFIACAMIAAABIgnAAQAAAKAFAEQAEAFAHAAQANAAABgJIAJAAQgCAIgGAEQgGAEgJAAQgFAAgEgCgAAQgEQgCgJgDgDQgEgDgHAAQgFAAgEADQgEAFgCAHIAfAAIAAAAg");
	this.shape_31.setTransform(-21.45,-4.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAOAlIAAghQAAgGgDgDQgDgDgHAAIgEABIgFACIgDAFIgBAFIAAAgIgJAAIAAhJIAJAAIAAAeQACgEAEgDQAEgCAGAAIAHABQADABADACQACADACAEIABAJIAAAgg");
	this.shape_32.setTransform(-26.775,-5.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARAkIgQg4IgRA4IgHAAIgThHIAJAAIAPA5IARg5IAEAAIARA5IAPg5IAIAAIgSBHg");
	this.shape_33.setTransform(-33.9,-5.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_disclaimer, new cjs.Rectangle(-45,-15.4,90.1,28.3), null);


(lib.txt_cartridgeFree = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#123293").s().p("AgOAPQgGgGgBgJQAAgIAHgGQAFgGAJAAQAJAAAGAGQAHAGAAAIQAAAJgHAGQgGAGgJAAQgIAAgGgGg");
	this.shape.setTransform(117.125,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBFQgOgLgCgTIAlAAQABAGAFAFQAFAEALAAQANAAAGgHQAGgGAAgMIAAgSIgGAIIgIAHIgKAEQgEACgHAAQgKAAgIgDQgJgEgIgHQgGgHgEgKQgEgKAAgNIAAgCQAAgMAEgKQAEgLAGgHQAHgHAJgEQAJgEAKAAQANAAAJAFQAJAFAEAJIAAgQIAlAAIAABoQAAAagQANQgQANgeAAQgdAAgOgLgAgRgsQgFAIAAAMIAAACQAAANAFAIQAHAGAKAAQAMAAAGgGQAHgIAAgNIAAgCQABgNgHgHQgGgIgMAAQgLAAgHAIg");
	this.shape_1.setTransform(107.35,6.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATA7IAAhDQAAgKgDgFQgFgFgKAAQgHAAgGAFQgHAGABAMIAABAIglAAIAAhyIAlAAIAAATQAEgJAJgHQAIgFAPgBQAIAAAIADQAGACAFAGQAFAFADAIQADAJAAALIAABJg");
	this.shape_2.setTransform(94.55,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRBRIAAhyIAjAAIAABygAgNgvQgGgGAAgIQgBgIAHgGQAFgFAIgBQAIABAHAFQAFAGABAIQgBAIgFAGQgHAFgIAAQgIAAgFgFg");
	this.shape_3.setTransform(85.3,1.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMA9QgKgJAAgUIAAg1IgOAAIAAgZIAOAAIAAgYIAjAAIAAAYIAYAAIAAAZIgYAAIAAAyQAAANANAAIAGgBIAFgBIAAAcIgJACIgMABQgSAAgKgKg");
	this.shape_4.setTransform(78.575,3.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATA7IAAhDQAAgKgDgFQgFgFgKAAQgHAAgGAFQgHAGABAMIAABAIglAAIAAhyIAlAAIAAATQAEgJAJgHQAIgFAPgBQAIAAAIADQAGACAFAGQAFAFADAIQADAJAAALIAABJg");
	this.shape_5.setTransform(68.45,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRBRIAAhyIAjAAIAABygAgNgvQgGgGgBgIQAAgIAHgGQAFgFAIgBQAIABAHAFQAFAGABAIQgBAIgFAGQgHAFgIAAQgIAAgFgFg");
	this.shape_6.setTransform(59.2,1.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkA6IAAhyIAkAAIAAAXQAFgNAJgGQAJgGAOABIAAAiQgSgBgKAGQgJAHAAAOIAAA3g");
	this.shape_7.setTransform(52.525,4.1731);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7BPIAAidIA6AAQAeAAAPAOQAQANAAAZIAAABQAAAZgQALQgQANgcAAIgSAAIAAA3gAgSgDIAPAAQAXAAAAgWIAAgBQAAgLgGgEQgGgFgLAAIgPAAg");
	this.shape_8.setTransform(41.75,2.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVA4QgMgEgIgHQgIgHgFgMQgEgKAAgOIAAgCQAAgNAEgLQAFgLAIgIQAIgIALgEQALgEAMAAQAMAAAKADQALADAIAIQAIAHAEALQAFALAAAQIAAAJIhQAAQAAAMAHAHQAHAHAKAAQALAAAEgEQAFgEACgHIAiAAQgDAUgOAKQgPAKgZAAQgMAAgLgEgAAXgMQgBgXgVAAQgIAAgGAGQgGAGgCALIAsAAIAAAAg");
	this.shape_9.setTransform(24.625,4.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVA4QgMgEgIgHQgIgHgFgMQgEgKAAgOIAAgCQAAgNAEgLQAFgLAIgIQAIgIALgEQALgEAMAAQAMAAAKADQALADAIAIQAIAHAEALQAFALAAAQIAAAJIhQAAQAAAMAHAHQAHAHAKAAQALAAAEgEQAFgEACgHIAiAAQgDAUgOAKQgPAKgZAAQgMAAgLgEgAAXgMQgBgXgVAAQgIAAgGAGQgGAGgCALIAsAAIAAAAg");
	this.shape_10.setTransform(12.075,4.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkA6IAAhyIAkAAIAAAXQAFgNAJgGQAJgGAOABIAAAiQgSgBgKAGQgJAHAAAOIAAA3g");
	this.shape_11.setTransform(1.875,4.1731);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgzBPIAAidIBnAAIAAAhIg9AAIAAAkIAwAAIAAAeIgwAAIAAA6g");
	this.shape_12.setTransform(-8.075,2.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAOIAAgbIA7AAIAAAbg");
	this.shape_13.setTransform(-18.2,3.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVA4QgMgEgIgHQgIgHgFgMQgEgKAAgOIAAgCQAAgNAEgLQAFgLAIgIQAIgIALgEQALgEAMAAQAMAAAKADQALADAIAIQAIAHAEALQAFALAAAQIAAAJIhQAAQAAAMAHAHQAHAHAKAAQALAAAEgEQAFgEACgHIAiAAQgDAUgOAKQgPAKgZAAQgMAAgLgEgAAXgMQgBgXgVAAQgIAAgGAGQgGAGgCALIAsAAIAAAAg");
	this.shape_14.setTransform(-28.175,4.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrBFQgPgLgCgTIAlAAQABAGAFAFQAFAEALAAQANAAAGgHQAGgGAAgMIAAgSIgFAIIgIAHIgKAEQgFACgHAAQgKAAgJgDQgJgEgHgHQgGgHgEgKQgEgKAAgNIAAgCQAAgMADgKQAEgLAHgHQAHgHAJgEQAJgEAKAAQAOAAAIAFQAJAFAEAJIAAgQIAlAAIAABoQAAAagQANQgQANgeAAQgcAAgOgLgAgQgsQgHAIABAMIAAACQgBANAHAIQAGAGALAAQALAAAHgGQAGgIAAgNIAAgCQAAgNgFgHQgHgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(-41.4,6.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeBOQgJgDgGgHQgHgIgEgLQgDgLgBgOIAAgCQAAgPAEgKQAEgMAHgHQAGgHAJgFQAJgEALAAQAMABAJAFQAIAFAFAJIAAg/IAlAAIAACgIglAAIAAgTQgEAJgKAHQgJAGgMAAQgKAAgJgEgAgQgCQgHAHAAAQIAAACQAAAPAHAIQAGAHAKABQAMAAAHgIQAGgHAAgQIAAgCQAAgQgGgHQgGgHgMgBQgLABgGAHg");
	this.shape_16.setTransform(-54.775,2.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRBRIAAhyIAjAAIAABygAgNgvQgGgGgBgIQAAgIAHgGQAFgFAIgBQAJABAFAFQAGAGABAIQgBAIgGAGQgFAFgJAAQgIAAgFgFg");
	this.shape_17.setTransform(-64,1.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkA6IAAhyIAkAAIAAAXQAFgNAJgGQAJgGAOABIAAAiQgSgBgKAGQgJAHAAAOIAAA3g");
	this.shape_18.setTransform(-70.675,4.1731);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMA9QgKgJAAgUIAAg1IgOAAIAAgZIAOAAIAAgYIAjAAIAAAYIAYAAIAAAZIgYAAIAAAyQAAANANAAIAGgBIAFgBIAAAcIgJACIgMABQgSAAgKgKg");
	this.shape_19.setTransform(-79.175,3.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkA6IAAhyIAkAAIAAAXQAFgNAJgGQAJgGAOABIAAAiQgSgBgKAGQgJAHAAAOIAAA3g");
	this.shape_20.setTransform(-86.875,4.1731);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdA6QgHgCgGgEQgFgDgDgHQgDgGAAgJQAAgKAEgHQAEgGAHgEQAIgDAJgDIAVgEQAKgCAEgDQAEgDAAgFQAAgFgDgDQgEgDgJAAQgHAAgFAEQgEAEAAAGIgjAAQABgKAEgHQAEgIAIgFQAHgEAJgDQAJgCALAAQALAAAKACQAJADAHAFQAGAFAEAIQADAIAAAKIAABMIgjAAIAAgOQgEAGgIAFQgHAFgOAAQgIAAgHgCgAAMAGIgKADQgIACgGADQgFAEAAAGQAAAFADADQAEAEAHAAQAJAAAGgFQAGgFAAgJIAAgOg");
	this.shape_21.setTransform(-97.625,4.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeBMQgPgHgKgKQgKgKgGgPQgEgPAAgSIAAgBQgBgSAHgOQAFgPALgLQALgLAOgGQAPgFAQAAQAOAAAOAEQAMADAJAHQAJAHAHALQAFAMACAPIgrAAQgBgNgIgGQgHgIgNAAQgPAAgKANQgKAMAAAXIAAAAQAAAXAKAMQAJANARAAQANAAAIgHQAIgHACgOIAqAAQgCAPgGAMQgFALgKAIQgJAHgNAEQgMAEgPAAQgUAAgPgFg");
	this.shape_22.setTransform(-111.25,2.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_cartridgeFree, new cjs.Rectangle(-121.7,-16.9,243.5,33.9), null);


(lib.txt_AGame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#123293").s().p("AgQAQQgGgGgBgKQAAgIAHgIQAGgGAKAAQAKAAAHAGQAHAIAAAIQAAAKgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(109.575,8.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXA9QgMgEgJgIQgKgIgFgMQgEgMgBgPIAAgCQABgPAEgLQAFgMAKgJQAIgJANgEQAMgFANAAQANAAAKAEQAMADAJAIQAJAIAEAMQAGANAAAQIAAAKIhYAAQAAAOAIAHQAHAIAMAAQALAAAGgFQAEgEACgHIAmAAQgDAVgQALQgQAMgbAAQgOAAgMgFgAAagNQgBgZgXAAQgJAAgHAGQgGAHgDAMIAxAAIAAAAg");
	this.shape_1.setTransform(99.55,4.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA6BAIAAhKQAAgLgEgFQgFgEgIgBQgJAAgHAGQgFAGAAALIAABIIgnAAIAAhKQAAgLgEgFQgFgEgIgBQgJAAgGAGQgGAGAAALIAABIIgoAAIAAh8IAoAAIAAATQAEgJAKgHQAKgGAPAAQAYAAAJAVQAIgMALgEQAKgFANAAQAJAAAHADQAHACAGAGQAGAGADAJQADAJAAAMIAABQg");
	this.shape_2.setTransform(82.025,4.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggA/QgIgCgGgEQgFgEgEgHQgDgHAAgKQAAgLAEgHQAFgHAIgEQAIgEAKgDIAXgEQALgCAEgDQAFgEAAgFQAAgGgEgDQgEgDgKAAQgIAAgEAEQgFAEgBAHIglAAQAAgLAFgIQAFgIAIgFQAHgGAKgCQALgDALAAQANAAAKADQAKACAHAGQAHAFAEAJQAEAJAAALIAABTIgmAAIAAgPQgFAHgJAFQgHAFgQABQgIAAgIgDgAANAHIgLADQgJACgGAEQgGADAAAHQAAAGAEADQAEADAIABQAJAAAHgGQAHgFAAgJIAAgQg");
	this.shape_3.setTransform(64.425,4.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBSQgRgGgLgMQgLgLgGgRQgGgQAAgTIAAgBQAAgTAHgQQAGgRAMgLQAMgMAQgGQARgGASgBQAPAAAOAEQAOADAKAIQALAIAGALQAIAMABAQIguAAQgDgageAAQgSAAgMAOQgLAOABAYIAAABQgBAMADAJQACAKAFAHQAGAHAHAEQAJAEALAAQAJAAAHgDQAGgCAFgEQAEgEACgFIAEgMIgjAAIAAgfIBPAAIAAATQAAARgGAOQgEANgLALQgLAKgPAGQgQAGgUAAQgVAAgQgHg");
	this.shape_4.setTransform(49.1,2.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#123293").s().p("AgPA9IAAguIgrAAIAAgcIArAAIAAgvIAfAAIAAAvIArAAIAAAcIgrAAIAAAug");
	this.shape_5.setTransform(29.525,2.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#123293").s().p("AAlBWIgLgjIg5AAIgKAjIgrAAIA4irIA6AAIA3CrgAASAUIgUhEIgUBEIAoAAg");
	this.shape_6.setTransform(14.775,2.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBAIAAh9IAnAAIAAAZQAGgOAJgGQAKgHAPABIAAAlQgTgBgLAHQgKAHAAAPIAAA9g");
	this.shape_7.setTransform(-2.075,4.5482);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjA9QgHgDgGgFQgFgGgDgJQgDgIgBgNIAAhQIAoAAIAABKQAAAXATAAQAJAAAHgGQAHgGAAgOIAAhHIAnAAIAAB8IgnAAIAAgTQgGAJgKAHQgIAGgQAAQgIAAgJgDg");
	this.shape_8.setTransform(-14.15,4.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaA9QgMgEgJgIQgKgIgFgMQgEgMgBgPIAAgCQAAgPAFgLQAFgMAKgJQAJgJAMgEQAMgFAOAAQAOAAANAEQAMAFAJAIQAJAJAFAMQAFALABAPIAAABQAAAQgFALQgGAMgJAJQgJAJgMAEQgMAEgPABQgOAAgMgFgAgTgaQgHAJAAAQIAAABQAAARAHAKQAHAJAMAAQANAAAHgJQAHgKAAgQIAAgBQAAgRgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_9.setTransform(-28.225,4.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglBUIAVg3IgyhwIArAAIAbBGIAZhGIAmAAIhDCng");
	this.shape_10.setTransform(-41.975,6.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgwBLQgPgMgCgVIAnAAQACAHAFAFQAGAFAMAAQAOAAAHgHQAHgIAAgNIAAgTIgHAIIgJAIIgLAFQgFACgHAAQgLAAgJgEQgKgEgIgIQgHgIgEgLQgEgKgBgOIAAgCQAAgNAEgMQAFgLAHgIQAHgIAKgEQAKgFALAAQAOAAAKAGQAJAGAGAKIAAgSIAoAAIAABxQgBAdgRAOQgSAPggAAQgfAAgQgNgAgSgwQgHAIAAAOIAAACQAAAOAHAJQAHAGAMABQAMgBAHgGQAHgJABgPIAAgBQAAgPgHgHQgHgIgNAAQgMgBgHAJg");
	this.shape_11.setTransform(-60.225,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVBAIAAhIQAAgMgEgFQgFgGgKAAQgJAAgHAGQgGAGAAANIAABGIgoAAIAAh8IAoAAIAAAUQAEgKALgGQAJgHAQAAQAJAAAHADQAIACAGAGQAFAGADAJQADAJAAAMIAABQg");
	this.shape_12.setTransform(-74.275,4.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTBZIAAh9IAnAAIAAB9gAgOg0QgHgFAAgKQAAgJAGgGQAGgGAJAAQAJAAAHAGQAGAGAAAJQAAAJgGAGQgHAGgJAAQgIAAgGgGg");
	this.shape_13.setTransform(-84.425,2.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnBAIAAh9IAnAAIAAAZQAGgOAJgGQAKgHAPABIAAAlQgTgBgLAHQgKAHAAAPIAAA9g");
	this.shape_14.setTransform(-91.775,4.5482);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDBWIAAirIBIAAQAeAAANAMQAOAMAAAVIAAABQAAAOgHAJQgHAJgOAFQAQACAJAJQAJAKAAASIAAABQAAAXgPANQgPAMggAAgAgXA3IAXAAQALAAAHgFQAGgGAAgKIAAgBQAAgLgGgFQgHgGgNAAIgVAAgAgXgQIAUAAQAMAAAFgEQAFgFAAgKIAAgBQAAgKgFgEQgFgEgMAAIgUAAg");
	this.shape_15.setTransform(-103.975,2.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_AGame, new cjs.Rectangle(-114.5,-18.3,229.1,36.7), null);


(lib.shaq_img_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AnNR0IAUgtQALgIgDgYIgGgXQgigfgLgeIgFgYIADh4QgHgXgBhEIAAhWQAAgTAEgfIAEgcQgIgRgMhuQgfgfgYhTQgMgpgGgjIo/ACIgetHICWgFQAAgMAhgoIAggmIgMg5QgCgNAUgdQAUgcAJAAQAIAAAQgNIAOgMQALgTAUgCIATABQALABAPgEIAOgFQARgWAaAJIAWANQAGANAVAFIAUACQAVgDAKAOIAHAOIgDBuQAAAKgZAyIgZAwICbACIAZgFQAUgSCFgBQB+AAAYAJIAjANQADgLAJgCQAIgCACAKQACAIAMgEIALgEQgEgRAnABQAsADAEgFQAGgIAPABQAIAAAGACIARgPQgKgUADhcIgDh4QAAgNAMgHQAFgEAFgBIAMiCQA3hsBogpQA1gUApABQBJACBIBAQAXAUATAYIAPAUQAQAcAHAdIAFAXIAABYIAMAUQAOAGgDAxIgGAvQgHA6AAAMQAAAIgJAIIgJAHQgDAPgRA+IgRA6IAPACQARADAIAAQAMAAA3AWQAwAeAjAcIBDAyQAsAhAJAMQAPAUA0AtQAUAKAwAoIBDA+QANANARAlIAeA8QANAUgFAZQAMAKAcCuIAUBXQAWBcADAYIAJA7QAGAjAAAIIAFA3QAFAvAAALQAAAUAPAgIAGAbQAIAdAIAJQAIAJgGAdIgHAqQAAAUgRA1IgoBSQgoBBgXAhQgOAUgpgBIgvgEQgHAAgkgRQgngRgIgBIhOgPQgJgCgfgWIgegVIgFBBQAAAPgeAZIAFB/QgCADx9ACg");
	mask.setTransform(-0.0337,0.2476);

	// Layer_1
	this.instance = new lib.shaq_img();
	this.instance.setTransform(-118.5,-119);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shaq_img_1, new cjs.Rectangle(-118.5,-118.2,237,237), null);


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

	// Layer_1
	this.instance = new lib.printer();
	this.instance.setTransform(-95.5,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.printer_mc, new cjs.Rectangle(-95.5,-65,191,130), null);


(lib.paper_stack_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.paperStack();
	this.instance.setTransform(-35.5,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_stack_mc, new cjs.Rectangle(-35.5,-92,71,184), null);


(lib.paper_mc = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AokiZQgukjgejwQATANGOAZQDGAMDCAKQAsEDDLHFQBkDjBdCvQhXAinSBUQjnAqjXAjQhRkAhdpGg");
	mask.setTransform(0.05,-0.45);

	// Layer_1
	this.instance = new lib.paper();
	this.instance.setTransform(-62.5,-69.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper_mc, new cjs.Rectangle(-62.4,-68.9,124.9,137), null);


(lib.kid_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kidSchool();
	this.instance.setTransform(-150,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kid_img, new cjs.Rectangle(-150,-95,300,190), null);


(lib.inkBottles_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.inkBottles();
	this.instance.setTransform(-76,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inkBottles_mc, new cjs.Rectangle(-76,-56,152,112), null);


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
	this.shape.setTransform(3.9286,9.05,1.1429,1.1429);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.epson_Logo, new cjs.Rectangle(-32.8,1.4,73.5,15.4), null);


(lib.ecoTank_Logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ecoTank();
	this.instance.setTransform(-56,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ecoTank_Logo, new cjs.Rectangle(-56,-22,112,44), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AARAnIgQg6IgSA6IgNAAIgYhNIANAAIASA+IAUg+IAJAAIASA+IATg+IAMAAIgYBNg");
	this.shape.setTransform(26.975,1.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAmQgHgDgGgGQgFgFgDgHQgCgIgBgIIAAgBQABgIACgIQADgHAFgFQAGgGAHgDQAGgDAIAAQAIAAAHADQAIADAEAGQAGAFACAHQADAHABAJIAAABQgBAIgDAIQgCAHgGAGQgEAFgIADQgHACgIABQgIAAgGgDgAgKgbQgEACgEAEQgDAEgCAFQgCAGAAAGIAAABQAAANAHAIQAHAIALAAQAGAAAEgCQAGgCACgEQAEgEACgFQACgGgBgGIAAgBQABgGgCgGQgCgFgEgEQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(17.35,1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA2Ig1hcIAABcIgNAAIAAhqIARAAIAzBXIAAhXIANAAIAABqg");
	this.shape_2.setTransform(8.25,-0.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA2IAAhpIAMAAIAAANIAEgFIAHgFIAHgDQAEgCAEAAQAHAAAHADQAGADAFAFQAFAFADAHQACAIAAAJIAAABQAAAJgCAGQgDAIgEAFQgFAGgHADQgGACgIABQgJAAgHgFQgGgEgEgGIAAApgAgJgoQgFABgDAEQgEAEgCAFQgBAGAAAHIAAACQAAAHABAFQACAFAEAEQADAEAFABQAFACAEAAQAMAAAGgHQAGgIAAgNIAAgCQAAgHgCgFQgCgGgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_3.setTransform(-3.775,2.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAmQgHgDgFgGQgFgFgDgHQgCgIAAgIIAAgBQAAgIACgIQADgHAFgFQAFgGAHgDQAIgDAHAAQAIAAAIADQAGADAFAGQAGAFACAHQADAHAAAJIAAABQAAAIgDAIQgCAHgGAGQgFAFgGADQgIACgIABQgHAAgIgDgAgKgbQgEACgEAEQgDAEgCAFQgCAGAAAGIAAABQAAANAHAIQAHAIALAAQAGAAAEgCQAGgCACgEQAEgEACgFQABgGAAgGIAAgBQAAgGgBgGQgCgFgEgEQgCgEgGgCQgEgCgGAAQgFAAgFACg");
	this.shape_4.setTransform(-12.45,1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA3IAAgxQAAgJgEgFQgFgFgKAAIgHACQgEABgCACQgEADgCAEQgBADAAAGIAAAvIgMAAIAAhtIAMAAIAAAsQADgFAGgEQAGgFAJAAQAGAAAFACQAFACAEADQADAFADAFQACAHAAAHIAAAwg");
	this.shape_5.setTransform(-20.55,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPA0QgHgCgFgFQgGgFgBgGQgDgGgBgHIANAAIACAJQABAEAEAEQADACAEACIANADQAFAAAEgCIAJgEQADgDABgEQADgEAAgEIgBgIIgFgFQgCgDgGgCIgMgDIgPgDQgGgBgFgEQgEgDgDgFQgCgFAAgHQAAgGACgGQADgEAFgFQAEgEAGgCQAHgCAHAAQAPAAAKAHQAKAIABAPIgMAAQgCgLgFgEQgHgFgKABQgLgBgFAFQgGAFAAAIIABAGQAAAEAEACQACADAGABIALADIARADQAGADAFADQAEADADAGQACAEAAAIQAAAHgCAGQgDAFgFAFQgFAEgHACQgGADgJAAQgJAAgIgDg");
	this.shape_6.setTransform(-29.05,-0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#123293").s().p("AmoCFIAAkJINRAAIAAEJg");
	this.shape_7.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBtn, new cjs.Rectangle(-42.5,-13.7,85,27.5), null);


(lib.backPack_img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.backpack();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backPack_img, new cjs.Rectangle(-150,-125,300,250), null);


// stage content:
(lib.Epson_EcoTank_BTS_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(304));

	// epson_Logo
	this.instance = new lib.epson_Logo();
	this.instance.setTransform(46,18);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},8).wait(82).to({alpha:0},7).wait(207));

	// ecoTank_Logo
	this.instance_1 = new lib.ecoTank_Logo();
	this.instance_1.setTransform(254,27.25,0.6016,0.6016,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(143).to({alpha:0},9).to({_off:true},1).wait(58).to({_off:false,x:47,y:59.25},0).to({alpha:1},9).wait(44).to({alpha:0},10).to({_off:true},1).wait(21));

	// txt_disclaimer
	this.instance_2 = new lib.txt_disclaimer();
	this.instance_2.setTransform(54.75,107.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(283).to({_off:false},0).to({alpha:1},9).wait(12));

	// txt_saveEcoTank
	this.instance_3 = new lib.txt_saveEcoTank();
	this.instance_3.setTransform(111.2,32.05);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(283).to({_off:false},0).to({alpha:1},9).wait(12));

	// cta_btn_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_292 = new cjs.Graphics().p("AmoCEIAAkHINRAAIAAEHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(292).to({graphics:mask_graphics_292,x:55.0499,y:79.2999}).wait(12));

	// shine
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.6,-5.7,8.6,5.6).s().p("AlSFJIH4sCICtBxIn4MCg");
	this.shape_1.setTransform(3.075,52.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.7,-5.7,8.7,5.6).s().p("AlTFKIH6sFICtByIn5MFg");
	this.shape_2.setTransform(4.975,53.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-8.8,-5.8,8.8,5.7).s().p("AlYFPIIBsQICwBzIoBMQg");
	this.shape_3.setTransform(10.725,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-9,-5.9,9,5.8).s().p("AlgFWIINshIC0B1IoNMig");
	this.shape_4.setTransform(20.275,60.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-9.3,-6,9.2,6.1).s().p("AlrFhIIds6IC6B5IodM6g");
	this.shape_5.setTransform(33.65,66.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-9.6,-6.2,9.6,6.3).s().p("Al4FvIIwtaIDBB+IoxNZg");
	this.shape_6.setTransform(50.85,74.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10,-6.6,10,6.5).s().p("AmIF+IJJt+IDICDIpIN+g");
	this.shape_7.setTransform(70.9,83.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.4,-6.8,10.4,6.8).s().p("AmWGMIJdueIDQCIIpdOdg");
	this.shape_8.setTransform(88.125,91.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.7,-7,10.6,6.9).s().p("AmhGWIJtu3IDWCMIptO3g");
	this.shape_9.setTransform(101.5,97.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-10.9,-7.1,10.8,7.1).s().p("AmpGdIJ6vHIDZCOIp6PHg");
	this.shape_10.setTransform(111.05,102.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.1,11,7.2).s().p("AmuGiIKBvSIDbCPIqAPSg");
	this.shape_11.setTransform(116.8,104.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.51,1],-11,-7.2,11,7.2).s().p("AmvGkIKDvWIDcCQIqCPWg");
	this.shape_12.setTransform(118.7,105.55);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},292).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

	// ctaBtn
	this.instance_4 = new lib.ctaBtn();
	this.instance_4.setTransform(55.05,78.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(292).to({_off:false},0).wait(12));

	// ctaBtn
	this.instance_5 = new lib.ctaBtn();
	this.instance_5.setTransform(55.05,96.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(228).to({_off:false},0).to({alpha:1},9).wait(35).to({y:78.8},10,cjs.Ease.quadOut).to({_off:true},10).wait(12));

	// txt_fill
	this.instance_6 = new lib.txt_fill();
	this.instance_6.setTransform(100.6,23.65);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({alpha:1},9).wait(44).to({alpha:0},10).to({_off:true},1).wait(21));

	// inkBottles_mc
	this.instance_7 = new lib.inkBottles_mc();
	this.instance_7.setTransform(220.55,225.95,0.4643,0.4643);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(219).to({_off:false},0).to({alpha:1},9).wait(76));

	// Shaq_mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_221 = new cjs.Graphics().p("A4XTEMAAAgmHMAwvAAAMAAAAmHg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(221).to({graphics:mask_1_graphics_221,x:156,y:122.05}).wait(83));

	// shaq_img
	this.instance_8 = new lib.shaq_img_1();
	this.instance_8.setTransform(438.15,133.05,1.0631,1.0631,-11.6438,0,0,0.1,0.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(221).to({_off:false},0).to({x:244.15},13,cjs.Ease.quadOut).wait(70));

	// printer_mc
	this.instance_9 = new lib.printer_mc();
	this.instance_9.setTransform(132.55,210.55,0.6307,0.6307,0,0,0,0.1,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(219).to({_off:false},0).to({alpha:1},9).wait(76));

	// backPack_img
	this.instance_10 = new lib.backPack_img();
	this.instance_10.setTransform(150,125.05);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(219).to({_off:false},0).to({alpha:1},9).wait(76));

	// whiteBar (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_164 = new cjs.Graphics().p("A6jUUIAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(164).to({graphics:mask_2_graphics_164,x:149,y:130}).wait(55).to({graphics:null,x:0,y:0}).wait(85));

	// txt_homework
	this.instance_11 = new lib.txt_homework();
	this.instance_11.setTransform(207.85,178);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(164).to({_off:false},0).to({y:217,alpha:1},10,cjs.Ease.quadOut).wait(34).to({y:254,alpha:0},10,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// shaq_img
	this.instance_12 = new lib.shaq_img_1();
	this.instance_12.setTransform(-110.95,129.2,1.0809,1.0809,13.199,0,0,0.1,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(164).to({_off:false},0).to({x:13.05,y:127.2},10,cjs.Ease.quadOut).wait(34).to({x:-116.95},10,cjs.Ease.quadIn).to({_off:true},1).wait(85));

	// kid_img
	this.instance_13 = new lib.kid_img();
	this.instance_13.setTransform(150,95.05);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(160).to({_off:false},0).to({alpha:1},11).wait(37).to({alpha:0},10).to({_off:true},1).wait(85));

	// whiteBar (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_98 = new cjs.Graphics().p("A6jUUIAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(98).to({graphics:mask_3_graphics_98,x:149,y:130}).wait(206));

	// txt_enoughInk
	this.instance_14 = new lib.txt_enoughInk();
	this.instance_14.setTransform(188.25,176.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(98).to({_off:false},0).to({y:216.2,alpha:1},9,cjs.Ease.quadOut).wait(44).to({y:259.2,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(143));

	// paper_mc
	this.instance_15 = new lib.paper_mc();
	this.instance_15.setTransform(35,-17.95,1.3191,1.3191);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(101).to({_off:false},0).to({scaleX:1,scaleY:1,x:86,y:86.05,alpha:1},16,cjs.Ease.quadInOut).wait(34).to({x:6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(143));

	// paper_stack_mc
	this.instance_16 = new lib.paper_stack_mc();
	this.instance_16.setTransform(-35.45,157.05);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(98).to({_off:false},0).to({x:35.55},9,cjs.Ease.quadOut).wait(44).to({x:-44.45,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(143));

	// inkBottles_mc
	this.instance_17 = new lib.inkBottles_mc();
	this.instance_17.setTransform(223.15,135.35,0.5594,0.5594,0,0,0,0.1,0);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(48).to({_off:false},0).to({regX:0,scaleX:0.7169,scaleY:0.7169,x:243,y:141.55},9,cjs.Ease.quadOut).wait(31).to({regX:0.1,regY:0.1,scaleX:1.0131,scaleY:1.0131,x:223.6,y:120.05},9).wait(54).to({x:323.6,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(143));

	// printer_mc
	this.instance_18 = new lib.printer_mc();
	this.instance_18.setTransform(113.85,110.75,0.7804,0.7804);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(48).to({_off:false},0).to({scaleX:1,scaleY:1,x:103,y:110.05},9,cjs.Ease.quadOut).wait(31).to({x:13,alpha:0},9).to({_off:true},1).wait(206));

	// whiteBar (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_48 = new cjs.Graphics().p("A6jUUIAAq8MA1HAAAIAAK8g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_4_graphics_48,x:149,y:130}).wait(50).to({graphics:null,x:0,y:0}).wait(206));

	// txt_cartridgeFree
	this.instance_19 = new lib.txt_cartridgeFree();
	this.instance_19.setTransform(145.5,198.75);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(48).to({_off:false},0).to({y:226.75,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:268.75,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(206));

	// txt_ecoTank
	this.instance_20 = new lib.txt_ecoTank();
	this.instance_20.setTransform(144.6,175.05);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(48).to({_off:false},0).to({y:203.05,alpha:1},9,cjs.Ease.quadOut).wait(31).to({y:245.05,alpha:0},9,cjs.Ease.quadIn).to({_off:true},1).wait(206));

	// txt_AGame
	this.instance_21 = new lib.txt_AGame();
	this.instance_21.setTransform(150.5,198.25);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({y:220.25,alpha:1},8,cjs.Ease.quadOut).wait(31).to({y:250.25,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(256));

	// whiteBar
	this.instance_22 = new lib.whiteBar();
	this.instance_22.setTransform(149,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(208).to({alpha:0},10).to({_off:true},1).wait(85));

	// shaq_img
	this.instance_23 = new lib.shaq_img_1();
	this.instance_23.setTransform(148,182.05);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({y:128.05,alpha:1},8,cjs.Ease.quadInOut).wait(31).to({y:182.05,alpha:0},8,cjs.Ease.quadIn).to({_off:true},1).wait(256));

	// background
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#EAEDF4","#EFF1F5","#F5F5F7"],[0,0.502,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_13.setTransform(150,126.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(304));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-121.7,15.3,522.2,286);
// library properties:
lib.properties = {
	id: 'DB8868308261408A88177DE9F03467FE',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"backpack.jpg", id:"backpack"},
		{src:"ecoTank.png", id:"ecoTank"},
		{src:"inkBottles.png", id:"inkBottles"},
		{src:"kidSchool.jpg", id:"kidSchool"},
		{src:"paper.jpg", id:"paper"},
		{src:"paperStack.png", id:"paperStack"},
		{src:"printer.png", id:"printer"},
		{src:"shaq_img.jpg", id:"shaq_img"}
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
an.compositions['DB8868308261408A88177DE9F03467FE'] = {
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